// Client-safe types and enums
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin'
}

export interface UserProfile {
  id: string
  email: string
  role: UserRole
  created_at: string
  updated_at: string
} 