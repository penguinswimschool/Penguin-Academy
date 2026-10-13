import { Clock, Users, MapPin, Calendar, GraduationCap, UserCheck } from 'lucide-react';
import { COURSE_DETAILS } from '@/lib/approved-course-details';

interface CourseMetaGridProps { recommendedDuration: string; minimumAge: string; liveTraining?: string; }

export default function CourseMetaGrid({ recommendedDuration, minimumAge, liveTraining = COURSE_DETAILS.liveDay }: CourseMetaGridProps) {
  const items = [
    { icon: Clock, label: 'Instructor-led training', value: `${liveTraining} (${COURSE_DETAILS.hours})` },
    { icon: GraduationCap, label: 'SSI recommended duration', value: recommendedDuration },
    { icon: UserCheck, label: 'Minimum age', value: minimumAge },
    { icon: Users, label: 'Class size', value: COURSE_DETAILS.capacity },
    { icon: MapPin, label: 'Venue', value: COURSE_DETAILS.venue },
    { icon: Calendar, label: 'Schedule', value: COURSE_DETAILS.schedule },
  ];
  return <div className="grid md:grid-cols-2 gap-6 mb-8">{items.map(({ icon: Icon, label, value }) => <div key={label} className="flex items-center gap-3"><Icon className="h-5 w-5 text-blue-600 flex-shrink-0" /><div><div className="font-semibold text-gray-900">{label}</div><div className="text-gray-600">{value}</div></div></div>)}</div>;
}
