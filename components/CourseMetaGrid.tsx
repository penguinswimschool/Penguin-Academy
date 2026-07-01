import { Clock, Users, MapPin, Calendar } from 'lucide-react';
import { COURSE_DETAILS } from '@/lib/approved-course-details';

export default function CourseMetaGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <div className="flex items-center gap-3">
        <Clock className="h-5 w-5 text-blue-600" />
        <div>
          <div className="font-semibold text-gray-900">Duration</div>
          <div className="text-gray-600">{COURSE_DETAILS.duration} ({COURSE_DETAILS.hours})</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Users className="h-5 w-5 text-blue-600" />
        <div>
          <div className="font-semibold text-gray-900">Class Size</div>
          <div className="text-gray-600">{COURSE_DETAILS.capacity}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="h-5 w-5 text-blue-600" />
        <div>
          <div className="font-semibold text-gray-900">Venue</div>
          <div className="text-gray-600">{COURSE_DETAILS.venue}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="h-5 w-5 text-blue-600" />
        <div>
          <div className="font-semibold text-gray-900">Schedule</div>
          <div className="text-gray-600">{COURSE_DETAILS.schedule}</div>
        </div>
      </div>
    </div>
  );
}
