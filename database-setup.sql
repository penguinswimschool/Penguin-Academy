-- Create app_role enum if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'client');
  END IF;
END$$;

-- Create profiles table for RBAC
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  role app_role NOT NULL DEFAULT 'client',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON profiles;
DROP POLICY IF EXISTS "Allow profile creation" ON profiles;

-- Create simplified RLS policies
-- Users can read their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Allow profile creation during signup
CREATE POLICY "Allow profile creation" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'client');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create admin_courses table if it doesn't exist
CREATE TABLE IF NOT EXISTS admin_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  instructor TEXT NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  max_participants INTEGER NOT NULL DEFAULT 8,
  current_participants INTEGER NOT NULL DEFAULT 0,
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'completed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on admin_courses
ALTER TABLE admin_courses ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Everyone can view courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can create courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can update courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can delete courses" ON admin_courses;

-- Everyone can view courses (public read access)
CREATE POLICY "Everyone can view courses" ON admin_courses
  FOR SELECT USING (true);

-- Only authenticated users can insert courses (simplified for now)
CREATE POLICY "Authenticated users can create courses" ON admin_courses
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Only authenticated users can update courses (simplified for now)
CREATE POLICY "Authenticated users can update courses" ON admin_courses
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Only authenticated users can delete courses (simplified for now)
CREATE POLICY "Authenticated users can delete courses" ON admin_courses
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- Create contact_submissions table for the public contact form
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on contact_submissions
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can submit a contact form" ON contact_submissions;
DROP POLICY IF EXISTS "Admins can view contact submissions" ON contact_submissions;

-- Public (anon key) can submit leads, but cannot read them back
CREATE POLICY "Anyone can submit a contact form" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Only admins can read submitted leads
CREATE POLICY "Admins can view contact submissions" ON contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles(email);
CREATE INDEX IF NOT EXISTS idx_admin_courses_status ON admin_courses(status);
CREATE INDEX IF NOT EXISTS idx_admin_courses_category ON admin_courses(category);
CREATE INDEX IF NOT EXISTS idx_admin_courses_dates ON admin_courses(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
