import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    
    if (!email || !password) {
      return NextResponse.json({ success: false, error: 'Email and password are required' }, { status: 400 })
    }

    const supabase = await createClient()
    
    // Sign up the user
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
      },
    })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 })
    }

    if (!data.user) {
      return NextResponse.json({ success: false, error: 'Signup failed' }, { status: 400 })
    }

    // The profile will be automatically created by the database trigger
    // No need to manually create it

    return NextResponse.json({
      success: true,
      message: 'Account created successfully! Please check your email to confirm your account.',
      user: {
        id: data.user.id,
        email: data.user.email,
        role: 'client'
      }
    })
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
} 