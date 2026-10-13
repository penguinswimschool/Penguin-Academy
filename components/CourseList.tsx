"use client"

import React from 'react';
import Link from 'next/link';
import { Award, Clock, Users, CheckCircle, GraduationCap, Baby, Package, Shield } from 'lucide-react';
import { COURSE_DETAILS, COURSE_STANDARDS, FULL_REACT_RIGHT, whatsappEnquiryUrl } from '@/lib/approved-course-details';
import { trackWhatsAppEnquiry } from '@/lib/analytics';

const courses = [
  { title: 'Penguin Pro Bundle – Any 2 Teacher Courses', path: '/courses/penguin-pro-swim-teacher-pathway', price: 'SGD 2,888', originalPrice: 'SGD 3,376', duration: '2 instructor-led days', description: 'Choose any 2: Level 1, Level 2, Baby & Me, or Adult Swim Teacher. The bundle includes full React Right.', features: ['Choose any 2 teacher courses', FULL_REACT_RIGHT, 'Save SGD 488', 'All programme-specific SSI completion requirements'], icon: Package, bundle: true },
  { title: 'SSI Swim Teacher Level 1 Certification', path: '/courses/ssi-swim-teacher-level-1', price: 'SGD 1,688', duration: COURSE_DETAILS.liveDay, description: 'Foundational professional swim-teaching course. SSI recommends 24-28 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.level1.apprenticeship], icon: GraduationCap },
  { title: 'SSI Swim Teacher Level 2 Certification', path: '/courses/ssi-swim-teacher-level-2', price: 'SGD 1,688', duration: COURSE_DETAILS.liveDay, description: 'Advanced stroke development and class progression. SSI Level 1 certification is required.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.level2.apprenticeship], icon: Award },
  { title: 'SSI Baby & Me Swim Teacher', path: '/courses/baby-and-me-swim-teacher', price: 'SGD 1,688', duration: COURSE_DETAILS.liveDay, description: 'Parent-child swim teaching for infants aged 6 months to 3 years. SSI recommends 8-10 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.baby.apprenticeship], icon: Baby },
  { title: 'SSI Adult Swim Teacher Certification', path: '/courses/ssi-adult-swim-teacher', price: 'SGD 1,688', duration: COURSE_DETAILS.liveDay, description: 'Structured teaching for adult beginners and improvers. SSI recommends 22-26 total hours.', features: [FULL_REACT_RIGHT, COURSE_STANDARDS.adult.apprenticeship], icon: Users },
  { title: 'Full SSI React Right', path: '/courses/react-right-cpr-aed-first-aid', price: 'SGD 100', duration: '8-12 recommended hours', description: 'First Aid & CPR, AED Provider and Oxygen Provider, with practical scenarios and final assessments.', features: ['Minimum age 12+', 'Valid for 2 years', 'No swim-teaching apprenticeship'], icon: Shield },
];

const CourseList: React.FC = () => (
  <section id="courses" className="scroll-mt-20 bg-[#f6f4ee] py-16 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div className="mb-14 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Choose your pathway</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">Professional courses, clearly structured.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">Each teacher course combines an instructor-led training day with the required digital learning, assessments and programme-specific apprenticeship before certification.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => {
          const Icon = course.icon;
          return <article key={course.title} className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(11,36,56,0.12)] sm:p-8 ${course.bundle ? 'border-[#d2ae65] bg-[#0b2438] text-white' : 'border-slate-200/80 bg-white text-[#0b2438]'}`}>
            {course.bundle && <span className="absolute right-5 top-5 rounded-full bg-[#e7c77e] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b2438]">Best value</span>}
            <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${course.bundle ? 'bg-white/10 text-cyan-200' : 'bg-teal-50 text-teal-700'}`}><Icon className="h-6 w-6" /></div>
            <div className={`mb-4 ${course.bundle ? 'pr-16' : ''}`}>
              <h3 className="text-xl font-bold leading-snug"><Link href={course.path} className="transition-colors hover:text-teal-500">{course.title}</Link></h3>
              <div className="mt-4 flex items-baseline gap-2"><span className={`text-3xl font-semibold tracking-tight ${course.bundle ? 'text-cyan-200' : 'text-[#0b2438]'}`}>{course.price}</span>{course.originalPrice && <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>}</div>
            </div>
            <p className={`mb-6 leading-7 ${course.bundle ? 'text-slate-300' : 'text-slate-600'}`}>{course.description}</p>
            <div className={`mb-6 flex flex-wrap gap-4 border-y py-4 text-sm ${course.bundle ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-500'}`}><span className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-500" />{course.duration}</span><span className="flex items-center gap-2"><Users className="h-4 w-4 text-teal-500" />{COURSE_DETAILS.capacity}</span></div>
            <div className="mb-8 flex-1 space-y-3">{course.features.map(feature => <div key={feature} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" /><span className={`text-sm leading-6 ${course.bundle ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span></div>)}</div>
            <div className="grid gap-3 sm:grid-cols-2"><a href={whatsappEnquiryUrl(course.title)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'course_card', courseName: course.title })} className={`${course.bundle ? 'bg-cyan-300 text-[#071b2b] hover:bg-cyan-200' : 'bg-[#0b2438] text-white hover:bg-teal-800'} rounded-full px-4 py-3 text-center text-sm font-bold transition`}>WhatsApp us</a><Link href={course.path} className={`rounded-full border px-4 py-3 text-center text-sm font-bold transition ${course.bundle ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-300 text-[#0b2438] hover:border-teal-600 hover:text-teal-700'}`}>Course details</Link></div>
          </article>;
        })}
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-teal-900/10 bg-white p-7 sm:flex-row sm:items-center sm:p-9"><div><h3 className="text-2xl font-semibold tracking-tight text-[#0b2438]">Need help choosing?</h3><p className="mt-2 max-w-3xl text-slate-600">Tell us your experience and goals. We’ll help you understand the right pathway and next available date.</p></div><a href={whatsappEnquiryUrl('the next available course date')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppEnquiry({ source: 'course_list_schedule', courseName: 'Course date enquiry' })} className="inline-flex w-full flex-none justify-center rounded-full bg-teal-700 px-6 py-3.5 font-bold text-white transition hover:bg-teal-600 sm:w-auto">Ask on WhatsApp</a></div>
    </div>
  </section>
);

export default CourseList;
