"use client"
import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { ArrowLeft, User as UserIcon, Shield, Settings, BarChart3, Calendar, Users, BookOpen, TrendingUp } from 'lucide-react';
import AdminDashboard from '../../components/AdminDashboard';

interface Course {
  id: string;
  title: string;
  instructor: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  location: string;
  description: string;
  category: string;
  max_participants: number;
  current_participants: number;
  price: number;
  status: 'active' | 'cancelled' | 'completed';
  created_at: string;
  updated_at: string;
}

const DashboardPage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<'admin' | 'client' | null>(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log('Checking auth...');
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.log('No user found, redirecting to login');
        window.location.href = '/login';
        return;
      }

      console.log('User found:', user.email);
      setUser(user);

      // Check user role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role === 'admin') {
        setUserRole('admin');
      } else {
        setUserRole('client');
      }

      // Fetch courses for all users (they can view courses)
      fetchCourses();
    } catch (error) {
      console.error('Auth check error:', error);
      window.location.href = '/login';
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      console.log('Fetching courses...');
      
      // Try to fetch courses, but don't fail if it doesn't work
      try {
        const { data, error } = await supabase
          .from('admin_courses')
          .select('*')
          .order('start_date', { ascending: true });

        if (error) {
          console.log('Course fetch error (non-critical):', error.message);
          setCourses([]);
          return;
        }

        console.log('Courses fetched successfully:', data?.length || 0);
        setCourses(data || []);
      } catch (courseError) {
        console.log('Course fetch failed:', courseError);
        setCourses([]);
      }
    } catch (error) {
      console.error('Error in fetchCourses:', error);
      setCourses([]);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex items-center justify-center">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
  //         <p className="text-gray-600">Loading dashboard...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (!user) {
    return null;
  }

  // Analytics calculations
  const totalCourses = courses.length;
  const activeCourses = courses.filter(c => c.status === 'active').length;
  const totalParticipants = courses.reduce((sum, c) => sum + c.current_participants, 0);
  const totalRevenue = courses.reduce((sum, c) => sum + (c.price * c.current_participants), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Site</span>
              </button>
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    {userRole === 'admin' ? 'Admin Dashboard' : 'Client Dashboard'}
                  </h1>
                  <p className="text-sm text-gray-600">Penguin Academy Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <UserIcon className="h-4 w-4" />
                <span>{user.email}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  userRole === 'admin' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {userRole === 'admin' ? 'Admin' : 'Client'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === 'admin' ? (
          <AdminDashboard 
            user={user} 
            onBack={() => window.location.href = '/'} 
          />
        ) : (
          // Client Dashboard Content
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center gap-3 mb-6">
                <UserIcon className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Welcome, {user.email}!</h2>
                  <p className="text-gray-600">This is your client dashboard.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-blue-900 mb-2">Available Courses</h3>
                  <p className="text-blue-700 text-sm">Browse and enroll in available courses.</p>
                  <p className="text-blue-600 text-sm mt-2">Total: {totalCourses} courses</p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-green-900 mb-2">Active Courses</h3>
                  <p className="text-green-700 text-sm">Currently running courses.</p>
                  <p className="text-green-600 text-sm mt-2">Active: {activeCourses} courses</p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-purple-900 mb-2">Total Participants</h3>
                  <p className="text-purple-700 text-sm">Students enrolled across all courses.</p>
                  <p className="text-purple-600 text-sm mt-2">Total: {totalParticipants} students</p>
                </div>
              </div>
            </div>

            {/* Course List for Clients */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Available Courses</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {courses.map((course) => (
                  <div key={course.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                        <p className="text-sm text-gray-500">{course.instructor} • {course.location}</p>
                        <p className="text-sm text-gray-500">{course.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-900">{new Date(course.start_date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">{course.current_participants}/{course.max_participants} participants</p>
                        <p className="text-sm font-medium text-green-600">${course.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;