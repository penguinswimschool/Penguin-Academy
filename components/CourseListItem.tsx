import React from 'react';
import { Edit, Trash2, Copy, CheckSquare, Square, Clock, MapPin, User as UserIcon } from 'lucide-react';

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

interface CourseListItemProps {
  course: Course;
  isSelected: boolean;
  onToggleSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
}

const CourseListItem: React.FC<CourseListItemProps> = ({
  course,
  isSelected,
  onToggleSelect,
  onEdit,
  onDelete,
  onDuplicate,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSelect}
          className="p-1"
          aria-label={`Select ${course.title}`}
        >
          {isSelected ? (
            <CheckSquare className="h-4 w-4 text-blue-600" />
          ) : (
            <Square className="h-4 w-4 text-gray-400" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{course.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1">
                  <UserIcon className="h-3 w-3" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{new Date(course.start_date).toLocaleDateString()} - {new Date(course.end_date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{course.start_time} - {course.end_time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{course.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {course.status}
                </span>
                <span className="text-xs text-gray-500">
                  {course.current_participants}/{course.max_participants} participants
                </span>
                <span className="text-xs text-gray-500">
                  ${course.price}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 ml-4">
              <button
                onClick={onEdit}
                className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                aria-label="Edit course"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={onDuplicate}
                className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                aria-label="Duplicate course"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={onDelete}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                aria-label="Delete course"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListItem; 