"use server"
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

// // Re-export types for convenience
// export { UserRole }
// export type { UserProfile }

// // Check if user is authenticated
// export async function isAuthenticated(): Promise<boolean> {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()
//   return !!user
// }

// // Check if user has admin role
// export async function isAdmin(): Promise<boolean> {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()
  
//   if (!user) return false
  
//   // Get user profile with role
//   const { data: profile } = await supabase
//     .from('user_profiles')
//     .select('role')
//     .eq('id', user.id)
//     .single()
  
//   return profile?.role === UserRole.ADMIN
// }

// // Get current user profile
// export async function getCurrentUser(): Promise<UserProfile | null> {
//   const supabase = await createClient()
//   const { data: { user } } = await supabase.auth.getUser()
  
//   if (!user) return null
  
//   const { data: profile } = await supabase
//     .from('user_profiles')
//     .select('*')
//     .eq('id', user.id)
//     .single()
  
//   return profile
// }

// // Create user profile with default role
// export async function createUserProfile(userId: string, email: string): Promise<void> {
//   const supabase = await createClient()
  
//   await supabase
//     .from('user_profiles')
//     .insert({
//       id: userId,
//       email,
//       role: UserRole.USER, // Default role is user
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString()
//     })
// }

// // Update user role (admin only)
// export async function updateUserRole(userId: string, role: UserRole): Promise<void> {
//   const supabase = await createClient()
  
//   await supabase
//     .from('user_profiles')
//     .update({
//       role,
//       updated_at: new Date().toISOString()
//     })
//     .eq('id', userId)
// }