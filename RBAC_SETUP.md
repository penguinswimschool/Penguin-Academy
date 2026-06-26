# Role-Based Access Control (RBAC) Setup Guide

This guide explains how to set up and use the RBAC system for the Penguin Swim Academy application.

## Overview

The application now implements a Role-Based Access Control (RBAC) system with two roles:
- **User**: Regular users who can access the main site features
- **Admin**: Administrators who can access the dashboard and manage users

## Database Setup

### 1. Run the Database Script

Execute the `database-setup.sql` script in your Supabase SQL editor:

```sql
-- Copy and paste the contents of database-setup.sql
```

This script will:
- Create the `user_profiles` table
- Set up Row Level Security (RLS) policies
- Create triggers for automatic profile creation
- Set up the `admin_courses` table with proper permissions

### 2. Verify Table Creation

After running the script, you should see:
- `user_profiles` table with columns: `id`, `email`, `role`, `created_at`, `updated_at`
- `admin_courses` table for course management
- Proper RLS policies in place

## User Roles

### Default Role Assignment
- New users are automatically assigned the `user` role
- Only existing admins can promote users to `admin` role

### Role Permissions

#### User Role
- Can access the main website
- Can view course information
- Cannot access the dashboard
- Cannot manage other users

#### Admin Role
- All user permissions
- Can access the dashboard (`/dashboard`)
- Can manage courses (create, edit, delete)
- Can manage user roles
- Can view analytics

## Authentication Flow

### Signup Process
1. User creates account
2. Automatic profile creation with `user` role
3. User is redirected to home page

### Login Process
1. User logs in with credentials
2. System checks user role
3. **Admins**: Redirected to `/dashboard`
4. **Users**: Stay on current page or redirect to home

### Dashboard Access
- Only users with `admin` role can access `/dashboard`
- Non-admin users are redirected to home page
- Unauthenticated users are redirected to login

## Key Components

### Middleware (`middleware.ts`)
- Protects `/dashboard` route
- Checks authentication and admin role
- Redirects unauthorized users

### User Management (`components/UserManagement.tsx`)
- Admin-only component for managing user roles
- Search and filter users
- Update user roles
- View user statistics

### Authentication Utilities (`utils/supabase/middleware.ts`)
- `isAuthenticated()`: Check if user is logged in
- `isAdmin()`: Check if user has admin role
- `getCurrentUser()`: Get current user profile
- `createUserProfile()`: Create user profile
- `updateUserRole()`: Update user role

## API Endpoints

### Protected Routes
- `/dashboard/*` - Admin only
- `/api/admin/*` - Admin only (if implemented)

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/signup` - Signup page
- `/terms` - Terms page

## Security Features

### Row Level Security (RLS)
- Users can only access their own profile
- Admins can access all profiles
- Course data is admin-only
- Automatic role validation

### Middleware Protection
- Route-level access control
- Automatic redirects for unauthorized access
- Session validation

## Creating Your First Admin

Since new users are automatically assigned the `user` role, you'll need to manually create your first admin:

1. **Sign up** with your admin email
2. **Go to Supabase Dashboard**
3. **Navigate to Table Editor**
4. **Select `user_profiles` table**
5. **Find your user record**
6. **Update the `role` column from `user` to `admin`**
7. **Save the changes**

After this, you can use the User Management interface in the dashboard to manage other users.

## Testing the RBAC System

### Test User Access
1. Create a regular user account
2. Try to access `/dashboard`
3. Should be redirected to home page

### Test Admin Access
1. Create an admin account (or promote existing user)
2. Login with admin credentials
3. Should be redirected to `/dashboard`
4. Can access all admin features

### Test User Management
1. Login as admin
2. Go to User Management tab
3. Search for users
4. Change user roles
5. Verify changes take effect

## Troubleshooting

### Common Issues

1. **"Cannot access dashboard"**
   - Check if user has `admin` role in database
   - Verify RLS policies are in place

2. **"Profile not found"**
   - Check if `user_profiles` table exists
   - Verify trigger is working for new signups

3. **"Permission denied"**
   - Check RLS policies
   - Verify user authentication status

### Debug Steps

1. **Check Database**
   ```sql
   SELECT * FROM user_profiles WHERE id = 'your-user-id';
   ```

2. **Check RLS Policies**
   ```sql
   SELECT * FROM pg_policies WHERE tablename = 'user_profiles';
   ```

3. **Check Authentication**
   - Verify user is logged in
   - Check session cookies

## Best Practices

1. **Regular Role Audits**: Periodically review admin users
2. **Principle of Least Privilege**: Only grant admin access when necessary
3. **Secure Admin Creation**: Use secure methods to create initial admin
4. **Monitor Access**: Log admin actions for security
5. **Backup Policies**: Keep database policies documented

## Future Enhancements

- Add more granular permissions
- Implement role-based UI elements
- Add audit logging
- Create role templates
- Add multi-factor authentication for admins 