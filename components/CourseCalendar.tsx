"use client"
import React, { useState } from 'react';
import { useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Clock, Users, MessageCircle, Award } from 'lucide-react';
import { whatsappEnquiryUrl } from '@/lib/approved-course-details';
import { trackWhatsAppEnquiry } from '@/lib/analytics';
import { formatLocalDate } from '@/lib/date-utils';

interface Course {
  id: string;
  title: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  location: string;
  current_participants: number;
  max_participants: number;
  price: string;
  instructor: string;
  category: string;
  status: 'active' | 'cancelled' | 'completed';
}

const CourseCalendar = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setLoadError(false);
      const { data, error } = await supabase
        .from('admin_courses')
        .select('*')
        .eq('status', 'active')
        .order('start_date', { ascending: true });

      if (error) throw error;
      
      // Transform data to match the expected format
      const transformedCourses = (data || []).map(course => ({
        ...course,
        price: `SGD ${course.price}`,
      }));
      
      setCourses(transformedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'SSI Level 1': return 'bg-blue-500';
      case 'SSI Level 2': return 'bg-green-500';
      case 'Baby & Me': return 'bg-pink-500';
      case 'Adult Instructor': return 'bg-purple-500';
      case 'React Right': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateInRange = (date: string, startDate: string, endDate: string) => {
    return date >= startDate && date <= endDate;
  };

  const getCoursesForDate = (date: string) => {
    return courses.filter(course => 
      isDateInRange(date, course.start_date, course.end_date)
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 border border-gray-200"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatLocalDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      const coursesForDay = getCoursesForDate(dateString);
      const isToday = dateString === formatLocalDate(new Date());

      days.push(
        <div 
          key={day} 
          className={`h-24 border border-gray-200 p-1 overflow-hidden ${isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}
        >
          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {coursesForDay.slice(0, 2).map((course, index) => (
              <button
                type="button"
                key={`${course.id}-${index}`}
                onClick={() => setSelectedCourse(course)}
                className={`${getCategoryColor(course.category)} w-full rounded p-1 text-left text-xs text-white transition-opacity hover:opacity-80`}
                aria-label={`View ${course.title} details${course.start_time ? `, starts ${course.start_time}` : ''}`}
              >
                <div className="truncate font-medium">{course.title}</div>
                {course.start_date === dateString && (
                  <div className="text-xs opacity-90">{course.start_time}</div>
                )}
              </button>
            ))}
            {coursesForDay.length > 2 && (
              <div className="text-xs text-gray-500 font-medium">
                +{coursesForDay.length - 2} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (startDate === endDate) {
      return start.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    
    return `${start.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    })} - ${end.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })}`;
  };

  const getStatusColor = (available: number, total: number) => {
    const percentage = available / total;
    if (percentage > 0.5) return 'text-green-600 bg-green-100';
    if (percentage > 0.2) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  if (loading) {
    return (
      <section id="calendar" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-slate-200 border-b-teal-700"></div>
            <p className="text-slate-600">Loading course dates…</p>
          </div>
        </div>
      </section>
    );
  }

  if (loadError) {
    return (
      <section id="calendar" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-[2rem] border border-amber-200 bg-amber-50 px-7 py-12 text-center sm:px-14">
            <Calendar className="mx-auto h-12 w-12 text-amber-700" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0b2438]">Course dates are temporarily unavailable.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">The calendar could not be loaded. Contact Penguin Academy to confirm the next available date before making arrangements.</p>
            <a href={whatsappEnquiryUrl('the next available course date')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'calendar_error_state', courseName: 'Course date enquiry' })} className="mt-7 inline-flex rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white hover:bg-teal-800">Check dates on WhatsApp</a>
          </div>
        </div>
      </section>
    )
  }

  if (courses.length === 0) {
    return (
      <section id="calendar" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#dff5f1] px-7 py-14 text-center sm:px-14 sm:py-16">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-teal-700 shadow-sm"><Calendar className="h-7 w-7" /></div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-800">Plan your training</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Flexible course dates.</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">Dates are arranged around candidate availability and instructor capacity. Confirmed sessions appear here; otherwise, speak with us to plan a suitable schedule.</p>
              <a href={whatsappEnquiryUrl('the next available course date')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'calendar_empty_state', courseName: 'Course date enquiry' })} className="mt-8 inline-flex w-full justify-center rounded-full bg-[#0b2438] px-7 py-4 font-bold text-white transition hover:bg-teal-800 sm:w-auto">Check dates on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="calendar" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Course <span className="text-blue-600">Calendar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View upcoming course schedules and enquire about SSI teacher training. Select a course to review its details and availability.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
          <div className="min-w-[760px]">
          {/* Calendar Header */}
          <div className="bg-blue-600 text-white p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateMonth('prev')}
                className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Previous month"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <h3 className="text-2xl font-bold">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              
              <button
                onClick={() => navigateMonth('next')}
                className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
                aria-label="Next month"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 bg-gray-100">
            {daysOfWeek.map(day => (
              <div key={day} className="p-4 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Course Legend</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-700">SSI Level 1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-700">SSI Level 2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <span className="text-sm text-gray-700">Baby & Me</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-sm text-gray-700">Adult Instructor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-700">React Right</span>
            </div>
          </div>
        </div>

      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" role="presentation" onKeyDown={(event) => { if (event.key === 'Escape') setSelectedCourse(null) }}>
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-8" role="dialog" aria-modal="true" aria-labelledby="course-dialog-title">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 id="course-dialog-title" className="text-2xl font-bold text-gray-900 mb-2">{selectedCourse.title}</h3>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <Award className="h-5 w-5" />
                  <span className="text-2xl">{selectedCourse.price}</span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedCourse.max_participants - selectedCourse.current_participants, selectedCourse.max_participants)}`}>
                {Math.max(0, selectedCourse.max_participants - selectedCourse.current_participants)} spots left
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span>{formatDateRange(selectedCourse.start_date, selectedCourse.end_date)}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>{selectedCourse.start_time} - {selectedCourse.end_time}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{selectedCourse.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Users className="h-5 w-5 text-blue-600" />
                <span>{Math.max(0, selectedCourse.max_participants - selectedCourse.current_participants)} / {selectedCourse.max_participants} available</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Award className="h-5 w-5 text-blue-600" />
                <span>Instructor: {selectedCourse.instructor}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={whatsappEnquiryUrl(selectedCourse.title)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'calendar_course_modal', courseName: selectedCourse.title })} className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center">Enquire on WhatsApp</a>
              <button 
                type="button"
                autoFocus
                onClick={() => setSelectedCourse(null)}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseCalendar;
