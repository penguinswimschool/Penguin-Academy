import PremiumCoursePage from '@/components/PremiumCoursePage'
import { COURSE_STANDARDS, certCourseIncludes } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI Swim Teacher Level 2 Singapore | Requirements & Cost',
  description: 'Review SSI Swim Teacher Level 2 requirements, apprenticeship, SGD 1,688 fee and full React Right inclusion at Penguin Academy Singapore.',
  path: '/courses/ssi-swim-teacher-level-2',
})

const faqs = [
  { question: 'What are the entry requirements for SSI Swim Teacher Level 2?', answer: 'Candidates must be at least 18 and hold SSI Swim Teacher Level 1 certification.' },
  { question: 'How long is the Level 2 course?', answer: 'SSI lists a recommended duration of 23–27 hours, including the applicable learning, assessment and practical requirements.' },
  { question: 'What apprenticeship is required?', answer: 'The pathway includes four supervised Intermediate lessons and two supervised Advanced lessons, with a recommended cumulative time of at least three hours.' },
  { question: 'How much does Level 2 cost?', answer: 'The Penguin Academy fee is SGD 1,688 and includes the full SSI React Right combination: First Aid & CPR, AED Provider and Oxygen Provider.' },
  { question: 'Does paying the fee guarantee certification?', answer: 'No. Certification may be issued only after all applicable SSI academic, in-water, assessment and apprenticeship requirements are successfully completed.' },
  { question: 'Can Level 2 certification be used at every pool?', answer: 'Certification and venue access are separate matters. Employers, facilities and local authorities may impose their own requirements, so candidates should confirm where they intend to teach.' },
]

export default function SSILevel2Page() {
  return <PremiumCoursePage
    structuredData={buildCoursePageStructuredData('level2')}
    eyebrow="Advanced SSI teaching pathway"
    title="SSI Swim Teacher Level 2 in Singapore."
    description="Develop stronger stroke teaching, correction and class-progression skills for intermediate and advanced learners."
    price="SGD 1,688"
    priceNote="Includes full SSI React Right. SSI Swim Teacher Level 1 is required before this pathway."
    directAnswer="SSI Swim Teacher Level 2 is the progression pathway for qualified Level 1 teachers. SSI recommends 23–27 hours and a supervised apprenticeship of four Intermediate and two Advanced lessons."
    facts={[
      { label: 'Minimum age', value: COURSE_STANDARDS.level2.minimumAge },
      { label: 'Prerequisite', value: 'SSI Swim Teacher Level 1' },
      { label: 'Recommended time', value: COURSE_STANDARDS.level2.recommendedDuration },
      { label: 'Training venue', value: 'Singapore; international candidates welcome' },
    ]}
    suitableFor={[
      'Qualified Level 1 teachers ready to progress beyond beginner programmes',
      'Coaches who want a clearer framework for stroke development and correction',
      'Teachers preparing to work with intermediate and advanced learners',
      'International candidates who can complete the confirmed Singapore arrangements',
    ]}
    pathway={[
      'Confirm your Level 1 certification and course suitability with Penguin Academy.',
      'Complete SSI digital learning before instructor-led training.',
      'Complete applicable theory, water fitness, practical assessment and final exam requirements.',
      'Finish the supervised Level 2 apprenticeship before certification is issued.',
    ]}
    practicalTitle="Level 2 apprenticeship"
    practicalDescription={COURSE_STANDARDS.level2.apprenticeship}
    included={certCourseIncludes('SSI Swim Teacher Level 2 Certification', COURSE_STANDARDS.level2.apprenticeship)}
    importantTitle="Certification does not automatically grant teaching access"
    importantDescription="Facilities, employers and jurisdictions can set additional access, insurance or employment requirements. Penguin Academy explains the SSI course pathway but does not guarantee venue access, employment or universal acceptance."
    faqs={faqs}
    officialSource={{ label: 'Review the official SSI training standard', href: 'https://training.divessi.com/index.php?id=22219536' }}
    guide={{ label: 'Compare SSI Level 1 and Level 2', href: '/blog/ssi-swim-teacher-level-1-vs-level-2' }}
    courseTitle="SSI Swim Teacher Level 2 Certification"
  />
}
