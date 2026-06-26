'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../utils/supabase/client'
import { User } from '@supabase/supabase-js'

interface AuthUser {
  id: string
  email: string
  role: 'admin' | 'client'
}

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        console.log('Initializing auth...')
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
          if (mounted) {
            setLoading(false)
          }
          return
        }

        console.log('Session:', session ? 'Found' : 'Not found')

        if (mounted) {
          if (session?.user) {
            await fetchUserProfile(session.user)
          }
          setLoading(false)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        if (mounted) {
          setLoading(false)
        }
      }
    }

    initializeAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event, session ? 'User found' : 'No user')
      if (!mounted) return

      try {
        if (session?.user) {
          await fetchUserProfile(session.user)
        } else {
          setUser(null)
        }
        setLoading(false)
      } catch (error) {
        console.error('Error in auth state change:', error)
        setLoading(false)
      }
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const fetchUserProfile = async (supabaseUser: User) => {
    try {
      console.log('Fetching profile for user via /api/auth:', supabaseUser.id)
      const response = await fetch('/api/auth', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        console.error('Error fetching user profile from /api/auth:', await response.text());
        setUser({
          id: supabaseUser.id,
          email: supabaseUser.email || '',
          role: 'client'
        });
        return;
      }
      const result = await response.json();
      if (result && result.user) {
        setUser({
          id: result.user.id,
          email: result.user.email,
          role: result.user.role || 'client'
        });
      } else {
        setUser({
          id: supabaseUser.id,
          email: supabaseUser.email || '',
          role: 'client'
        });
      }
    } catch (error) {
      console.error('Error in fetchUserProfile:', error);
      setUser({
        id: supabaseUser.id,
        email: supabaseUser.email || '',
        role: 'client'
      });
    }
  }

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Logout error:', error)
        throw error
      }
      setUser(null)
    } catch (error) {
      console.error('Error during logout:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}