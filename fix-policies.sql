-- Fix infinite recursion in profiles table policies
-- Run this in your Supabase SQL editor

-- Drop all existing policies on profiles table
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Admins can update all profiles" ON profiles;
DROP POLICY IF EXISTS "Allow profile creation" ON profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Allow profile creation" ON profiles;

-- Create simple, non-recursive policies
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Allow profile creation" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Fix admin_courses policies too
DROP POLICY IF EXISTS "Everyone can view courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can create courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can update courses" ON admin_courses;
DROP POLICY IF EXISTS "Only admins can delete courses" ON admin_courses;
DROP POLICY IF EXISTS "Authenticated users can create courses" ON admin_courses;
DROP POLICY IF EXISTS "Authenticated users can update courses" ON admin_courses;
DROP POLICY IF EXISTS "Authenticated users can delete courses" ON admin_courses;

-- Create simple course policies
CREATE POLICY "Everyone can view courses" ON admin_courses
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create courses" ON admin_courses
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update courses" ON admin_courses
  FOR UPDATE USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete courses" ON admin_courses
  FOR DELETE USING (auth.uid() IS NOT NULL); 