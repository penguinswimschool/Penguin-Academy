'use client'

import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { Calendar, Plus, Search, Filter, Grid, List, Edit, Trash2, Copy, CheckSquare, Square, ArrowLeft, Save, X, Clock, MapPin, User as UserIcon, AlertCircle, CheckCircle, Award, Settings, BarChart3, Users, BookOpen, TrendingUp, ChevronLeft } from 'lucide-react';
import CourseListItem from './CourseListItem';
import CalendarView from './CalendarView';
import CourseModal from './CourseModal';
import DeleteConfirmModal from './DeleteConfirmModal';

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

interface AdminDashboardProps {
  user: User;
  onBack: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onBack }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'analytics'>('overview');
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [operationLoading, setOperationLoading] = useState(false);

  const categories = ['all', 'SSI Level 1', 'SSI Level 2', 'Baby & Me', 'Adult Instructor', 'React Right'];

  useEffect(() => {
    fetchCourses();
    
    // Set up real-time subscription for course changes
    const channel = supabase
      .channel('admin_courses_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'admin_courses'
        },
        (payload) => {
          console.log('Course change detected:', payload);
          fetchCourses(); // Refresh courses when changes occur
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    filterCourses();
  }, [courses, searchTerm, selectedCategory]);

  const fetchCourses = async () => {
    try {
      console.log('Fetching courses...');
      setLoading(true);
      
      const { data, error } = await supabase
        .from('admin_courses')
        .select('*')
        .order('start_date', { ascending: true });

      if (error) {
        console.error('Course fetch error:', error);
        throw error;
      }
      
      console.log('Courses fetched successfully:', data?.length || 0, 'courses');
      setCourses(data || []);
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      showNotification('error', 'Failed to fetch courses');
      setCourses([]);
    } finally {
      setLoading(false);
    }
  };

  const filterCourses = () => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(filtered);
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleCreateCourse = async (courseData: Omit<Course, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      setOperationLoading(true);
      console.log('Creating course:', courseData);
      
      const { data, error } = await supabase
        .from('admin_courses')
        .insert([courseData])
        .select()
        .single();

      if (error) {
        console.error('Course creation error:', error);
        throw error;
      }
      
      console.log('Course created successfully:', data);
      setCourses(prev => [...prev, data]);
      setShowAddModal(false);
      showNotification('success', 'Course created successfully');
      
      // Refresh courses to ensure calendar view is updated
      await fetchCourses();
    } catch (error) {
      console.error('Failed to create course:', error);
      showNotification('error', 'Failed to create course');
    } finally {
      setOperationLoading(false);
    }
  };

  const handleUpdateCourse = async (id: string, courseData: Partial<Course>) => {
    try {
      setOperationLoading(true);
      console.log('Updating course:', id, courseData);
      
      const { data, error } = await supabase
        .from('admin_courses')
        .update(courseData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Course update error:', error);
        throw error;
      }
      
      console.log('Course updated successfully:', data);
      setCourses(prev => prev.map(course => course.id === id ? data : course));
      setEditingCourse(null);
      showNotification('success', 'Course updated successfully');
      
      // Refresh courses to ensure calendar view is updated
      await fetchCourses();
    } catch (error) {
      console.error('Failed to update course:', error);
      showNotification('error', 'Failed to update course');
    } finally {
      setOperationLoading(false);
    }
  };

  const handleDeleteCourse = async (id: string) => {
    try {
      console.log('Deleting course:', id);
      
      const { error } = await supabase
        .from('admin_courses')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Course deletion error:', error);
        throw error;
      }
      
      console.log('Course deleted successfully');
      setCourses(prev => prev.filter(course => course.id !== id));
      setShowDeleteConfirm(null);
      showNotification('success', 'Course deleted successfully');
      
      // Refresh courses to ensure calendar view is updated
      await fetchCourses();
    } catch (error) {
      console.error('Failed to delete course:', error);
      showNotification('error', 'Failed to delete course');
    }
  };

  const handleBulkDelete = async () => {
    try {
      console.log('Bulk deleting courses:', selectedCourses);
      
      const { error } = await supabase
        .from('admin_courses')
        .delete()
        .in('id', selectedCourses);

      if (error) {
        console.error('Bulk deletion error:', error);
        throw error;
      }
      
      console.log('Bulk deletion successful');
      setCourses(prev => prev.filter(course => !selectedCourses.includes(course.id)));
      setSelectedCourses([]);
      showNotification('success', `${selectedCourses.length} courses deleted successfully`);
      
      // Refresh courses to ensure calendar view is updated
      await fetchCourses();
    } catch (error) {
      console.error('Failed to delete selected courses:', error);
      showNotification('error', 'Failed to delete selected courses');
    }
  };

  const handleDuplicateCourse = async (course: Course) => {
    const duplicateData = {
      ...course,
      title: `${course.title} (Copy)`,
      id: undefined,
      created_at: undefined,
      updated_at: undefined,
    };
    delete duplicateData.id;
    delete duplicateData.created_at;
    delete duplicateData.updated_at;
    
    await handleCreateCourse(duplicateData);
  };

  const toggleCourseSelection = (courseId: string) => {
    setSelectedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    );
  };

  const selectAllCourses = () => {
    setSelectedCourses(
      selectedCourses.length === filteredCourses.length
        ? []
        : filteredCourses.map(course => course.id)
    );
  };

  // Analytics calculations
  const totalCourses = courses.length;
  const activeCourses = courses.filter(c => c.status === 'active').length;
  const totalParticipants = courses.reduce((sum, c) => sum + c.current_participants, 0);
  const totalRevenue = courses.reduce((sum, c) => sum + (c.price * c.current_participants), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Site</span>
              </button>
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                  <p className="text-sm text-gray-600">Penguin Academy Management</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <UserIcon className="h-4 w-4" />
              <span>{user.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Overview
              </div>
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'courses'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Course Management
              </div>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Analytics
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          <div className="flex items-center gap-2">
            {notification.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Courses</dt>
                      <dd className="text-lg font-medium text-gray-900">{totalCourses}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Active Courses</dt>
                      <dd className="text-lg font-medium text-gray-900">{activeCourses}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Participants</dt>
                      <dd className="text-lg font-medium text-gray-900">{totalParticipants}</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-yellow-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">Total Revenue</dt>
                      <dd className="text-lg font-medium text-gray-900">${totalRevenue.toLocaleString()}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Courses */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Courses</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {courses.slice(0, 5).map((course) => (
                  <div key={course.id} className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                        <p className="text-sm text-gray-500">{course.instructor} • {course.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-900">{new Date(course.start_date).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">{course.current_participants}/{course.max_participants} participants</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Course Management Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            {/* Controls */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                         <input
                       type="text"
                       placeholder="Search courses, instructors, locations..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 w-full sm:w-80"
                     />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                         <select
                       value={selectedCategory}
                       onChange={(e) => setSelectedCategory(e.target.value)}
                       className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none bg-white"
                     >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex gap-2">
                  {/* View Toggle */}
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('calendar')}
                      className={`p-2 rounded ${viewMode === 'calendar' ? 'bg-white shadow-sm' : ''}`}
                    >
                      <Grid className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Refresh Button */}
                  <button
                    onClick={fetchCourses}
                    className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    title="Refresh courses"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Refresh</span>
                  </button>

                  {/* Add Course Button */}
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Course</span>
                  </button>
                </div>
              </div>

              {/* Bulk Actions */}
              {selectedCourses.length > 0 && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800">
                      {selectedCourses.length} course(s) selected
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={handleBulkDelete}
                        className="flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                      >
                        <Trash2 className="h-3 w-3" />
                        Delete Selected
                      </button>
                      <button
                        onClick={() => setSelectedCourses([])}
                        className="flex items-center gap-2 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700 transition-colors"
                      >
                        Clear Selection
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Course List View */}
            {viewMode === 'list' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={selectAllCourses}
                        className="p-1"
                        aria-label="Select all courses"
                      >
                        {selectedCourses.length === filteredCourses.length && filteredCourses.length > 0 ? (
                          <CheckSquare className="h-4 w-4 text-blue-600" />
                        ) : (
                          <Square className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                      <span className="text-sm font-medium text-gray-700">
                        {filteredCourses.length} course(s) found
                      </span>
                    </div>
                    {operationLoading && (
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span>Updating...</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {filteredCourses.map((course) => (
                    <CourseListItem
                      key={course.id}
                      course={course}
                      isSelected={selectedCourses.includes(course.id)}
                      onToggleSelect={() => toggleCourseSelection(course.id)}
                      onEdit={() => setEditingCourse(course)}
                      onDelete={() => setShowDeleteConfirm(course.id)}
                      onDuplicate={() => handleDuplicateCourse(course)}
                    />
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <div className="p-12 text-center">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </div>
            )}

            {/* Calendar View */}
            {viewMode === 'calendar' && (
              <CalendarView
                courses={filteredCourses}
                currentDate={currentDate}
                onDateChange={setCurrentDate}
                onEditCourse={setEditingCourse}
                onDeleteCourse={setShowDeleteConfirm}
              />
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{activeCourses}</div>
                  <div className="text-sm text-gray-500">Active Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{totalParticipants}</div>
                  <div className="text-sm text-gray-500">Total Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">${totalRevenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Total Revenue</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Course Categories</h3>
              <div className="space-y-4">
                {categories.slice(1).map(category => {
                  const categoryCount = courses.filter(c => c.category === category).length;
                  return (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-gray-700">{category}</span>
                      <span className="text-gray-900 font-medium">{categoryCount} courses</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add/Edit Course Modal */}
      {(showAddModal || editingCourse) && (
        <CourseModal
          course={editingCourse}
          onSave={editingCourse ? 
            (data) => handleUpdateCourse(editingCourse.id, data) : 
            handleCreateCourse
          }
          onClose={() => {
            setShowAddModal(false);
            setEditingCourse(null);
          }}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <DeleteConfirmModal
          onConfirm={() => handleDeleteCourse(showDeleteConfirm)}
          onCancel={() => setShowDeleteConfirm(null)}
        />
      )}
    </div>
  );
};

export default AdminDashboard; 