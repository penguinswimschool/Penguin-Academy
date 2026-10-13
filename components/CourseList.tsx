"use client"

import React from 'react';
import Link from 'next/link';
import { Award, Clock, Users, CheckCircle, GraduationCap, Baby, Package, Shield } from 'lucide-react';
import { COURSE_DETAILS, COURSE_STANDARDS, FULL_REACT_RIGHT, whatsappEnquiryUrl } from '@/lib/approved-course-details';
import { trackWhatsAppEnquiry } from '@/lib/analytics';

interface CourseListProps { onAskQuestions: (courseTitle?: string) => void; }

const courses = [
  { title: 'Penguin Pro Bundle – Any 2 Teacher Courses', path: '/courses/penguin-pro-swim-teacher-pathway', price: '$2,888', originalPrice: '$3,376', duration: '2 instructor-led days', description: 'Choose any 2: Level 1, Level 2, Baby & Me, or Adult Swim Teacher. The bundle includes full React Right.', features: ['Choose any 2 teacher courses', FULL_REACT_RIGHT, 'Save $488', 'All programme-specific SSI completion requirements'], icon: Package, bundle: true },
  { title: 'SSI Swim Teacher Level 1 Certification', path: '/courses/ssi-swim-teacher-level-1', price: '$1,688', duration: COURSE_DETAILS.liveDay, description: 'Foundational professional swim-teaching course. SSI recommends 24-28 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.level1.apprenticeship], icon: GraduationCap },
  { title: 'SSI Swim Teacher Level 2 Certification', path: '/courses/ssi-swim-teacher-level-2', price: '$1,688', duration: COURSE_DETAILS.liveDay, description: 'Advanced stroke development and class progression. SSI Level 1 certification is required.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.level2.apprenticeship], icon: Award },
  { title: 'SSI Baby & Me Swim Teacher', path: '/courses/baby-and-me-swim-teacher', price: '$1,688', duration: COURSE_DETAILS.liveDay, description: 'Parent-child swim teaching for infants aged 6 months to 3 years. SSI recommends 8-10 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.baby.apprenticeship], icon: Baby },
  { title: 'SSI Adult Swim Teacher Certification', path: '/courses/ssi-adult-swim-teacher', price: '$1,688', duration: COURSE_DETAILS.liveDay, description: 'Structured teaching for adult beginners and improvers. SSI recommends 22-26 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.adult.apprenticeship], icon: Users },
  { title: 'Full SSI React Right', path: '/courses/react-right-cpr-aed-first-aid', price: '$100', duration: '8-12 recommended hours', description: 'First Aid & CPR, AED Provider and Oxygen Provider, with practical scenarios and final assessments.', features: ['Minimum age 12+', 'Valid for 2 years', 'No swim-teaching apprenticeship'], icon: Shield },
];

const CourseList: React.FC<CourseListProps> = () => (
  <section id="courses" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">SSI Swim Teacher <span className="text-blue-600">Certification Courses</span></h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">One instructor-led training day per teacher course, followed by all required learning, assessments and programme-specific apprenticeship before certification.</p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => {
          const Icon = course.icon;
          return <article key={course.title} className={`rounded-2xl shadow-lg border p-7 flex flex-col ${course.bundle ? 'border-yellow-400 border-2 bg-yellow-50' : 'border-gray-100 bg-white'}`}>
            <div className="flex items-start justify-between gap-4 mb-4"><div className="flex items-center gap-3"><Icon className="h-7 w-7 text-blue-600" /><h3 className="text-xl font-bold text-gray-900"><Link href={course.path} className="hover:text-blue-600 transition-colors">{course.title}</Link></h3></div><div className="text-right flex-shrink-0"><div className="text-xl font-bold text-blue-700">{course.price}</div>{course.originalPrice && <div className="text-sm text-gray-500 line-through">{course.originalPrice}</div>}</div></div>
            <p className="text-gray-600 mb-5">{course.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-5"><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-600" />{course.duration}</span><span className="flex items-center gap-2"><Users className="h-4 w-4 text-blue-600" />{COURSE_DETAILS.capacity}</span></div>
            <div className="space-y-3 mb-7 flex-1">{course.features.map(feature => <div key={feature} className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm text-gray-700">{feature}</span></div>)}</div>
            <div className="grid grid-cols-2 gap-3"><a href={whatsappEnquiryUrl(course.title)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'course_card', courseName: course.title })} className={`${course.bundle ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white text-center px-3 py-3 rounded-lg font-semibold text-sm`}>WhatsApp Us</a><Link href={course.path} className="border border-blue-600 text-blue-600 text-center px-3 py-3 rounded-lg font-semibold text-sm hover:bg-blue-50">Course Details</Link></div>
          </article>;
        })}
      </div>
      <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center"><h3 className="text-2xl font-bold text-gray-900 mb-3">Flexible scheduling</h3><p className="text-gray-700 max-w-3xl mx-auto mb-5">Confirmed dates are shown when available. Otherwise, WhatsApp us to discuss a suitable date based on candidate availability and instructor capacity.</p><a href={whatsappEnquiryUrl('the next available course date')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'course_list_schedule', courseName: 'Course date enquiry' })} className="inline-flex bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">Check dates on WhatsApp</a></div>
    </div>
  </section>
);

export default CourseList;
