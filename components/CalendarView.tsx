import React from 'react';
import { ChevronLeft } from 'lucide-react';

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

interface CalendarViewProps {
  courses: Course[];
  currentDate: Date;
  onDateChange: (date: Date) => void;
  onEditCourse: (course: Course) => void;
  onDeleteCourse: (id: string) => void;
}

const CalendarView: React.FC<CalendarViewProps> = ({
  courses,
  currentDate,
  onDateChange,
  onEditCourse,
  onDeleteCourse,
}) => {
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

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getCoursesForDate = (date: string) => {
    return courses.filter(course => {
      const courseStart = new Date(course.start_date);
      const courseEnd = new Date(course.end_date);
      const currentDate = new Date(date);
      
      return currentDate >= courseStart && currentDate <= courseEnd;
    });
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    onDateChange(newDate);
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-32 border border-gray-200 bg-gray-50"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
      const coursesForDay = getCoursesForDate(dateString);
      const isToday = dateString === formatDate(new Date());

      days.push(
        <div 
          key={day} 
          className={`h-32 border border-gray-200 p-2 overflow-hidden ${
            isToday ? 'bg-blue-50 border-blue-300' : 'bg-white'
          }`}
        >
          <div className={`text-sm font-medium mb-2 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
            {day}
          </div>
          <div className="space-y-1">
            {coursesForDay.slice(0, 3).map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                onClick={() => onEditCourse(course)}
                className={`text-xs p-1 rounded cursor-pointer transition-colors ${
                  course.status === 'active' 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : course.status === 'cancelled'
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
                title={`${course.title} - ${course.instructor} (${course.status})`}
              >
                <div className="truncate font-medium">{course.title}</div>
                <div className="text-xs opacity-90">{course.start_time} - {course.end_time}</div>
                <div className="text-xs opacity-75">{course.instructor}</div>
              </div>
            ))}
            {coursesForDay.length > 3 && (
              <div className="text-xs text-gray-500 font-medium">
                +{coursesForDay.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Calendar Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <h3 className="text-xl font-bold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          
          <button
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronLeft className="h-5 w-5 rotate-180" />
          </button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 bg-gray-100">
        {daysOfWeek.map(day => (
          <div key={day} className="p-3 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default CalendarView; 