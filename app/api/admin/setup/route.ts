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

    // Manually create admin profile
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: data.user.id,
        email: data.user.email,
        role: 'admin'
      })

    if (profileError) {
      console.error('Error creating admin profile:', profileError)
      return NextResponse.json({ success: false, error: 'Failed to create admin profile' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Admin account created successfully! Please check your email to confirm your account.',
      user: {
        id: data.user.id,
        email: data.user.email,
        role: 'admin'
      }
    })
  } catch (error) {
    console.error('Admin setup error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
} 