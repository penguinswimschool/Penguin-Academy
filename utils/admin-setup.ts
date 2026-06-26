import { supabase } from './supabase/client';

/**
 * Utility functions for admin setup and role management
 */
export class AdminSetup {
  /**
   * Get all users (admin only)
   */
  static async getAllUsers(): Promise<any[]> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Get user by email
   */
  static async getUserByEmail(email: string): Promise<any | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // User not found
      }
      throw new Error(`Failed to fetch user: ${error.message}`);
    }

    return data;
  }

  /**
   * Update user role (admin only)
   */
  static async updateUserRole(userId: string, role: 'admin' | 'client'): Promise<void> {
    const { error } = await supabase
      .from('profiles')
      .update({
        role,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId);

    if (error) {
      throw new Error(`Failed to update user role: ${error.message}`);
    }
  }

  /**
   * Promote user to admin
   */
  static async promoteToAdmin(userId: string): Promise<void> {
    return this.updateUserRole(userId, 'admin');
  }

  /**
   * Demote admin to client
   */
  static async demoteToClient(userId: string): Promise<void> {
    return this.updateUserRole(userId, 'client');
  }

  /**
   * Check if current user is admin
   */
  static async isCurrentUserAdmin(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return false;

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    return profile?.role === 'admin';
  }

  /**
   * Get current user profile
   */
  static async getCurrentUserProfile(): Promise<any | null> {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return profile;
  }

  /**
   * Create initial admin (for first-time setup)
   * This should only be used during initial setup
   */
  static async createInitialAdmin(email: string, password: string): Promise<void> {
    // First, create the user account
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      throw new Error(`Failed to create user: ${authError.message}`);
    }

    if (!authData.user) {
      throw new Error('User creation failed');
    }

    // Then, update the profile to admin role
    const { error: profileError } = await supabase
      .from('profiles')
      .update({
        role: 'admin',
        updated_at: new Date().toISOString()
      })
      .eq('id', authData.user.id);

    if (profileError) {
      throw new Error(`Failed to set admin role: ${profileError.message}`);
    }
  }

  /**
   * Get admin statistics
   */
  static async getAdminStats(): Promise<{
    totalUsers: number;
    adminUsers: number;
    clientUsers: number;
  }> {
    const users = await this.getAllUsers();
    
    return {
      totalUsers: users.length,
      adminUsers: users.filter(u => u.role === 'admin').length,
      clientUsers: users.filter(u => u.role === 'client').length,
    };
  }
}

/**
 * Browser-safe admin utilities (for client-side use)
 */
export const adminUtils = {
  /**
   * Check if current user can access admin features
   */
  async canAccessAdmin(): Promise<boolean> {
    try {
      return await AdminSetup.isCurrentUserAdmin();
    } catch (error) {
      console.error('Error checking admin access:', error);
      return false;
    }
  },

  /**
   * Redirect to dashboard if admin, otherwise to home
   */
  async redirectBasedOnRole(): Promise<void> {
    const isAdmin = await this.canAccessAdmin();
    
    if (isAdmin) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/';
    }
  },

  /**
   * Show admin access denied message
   */
  showAccessDenied(): void {
    alert('Access denied. Admin privileges required.');
  }
}; 