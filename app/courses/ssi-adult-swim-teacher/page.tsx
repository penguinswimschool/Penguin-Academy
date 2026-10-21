import PremiumCoursePage from '@/components/PremiumCoursePage'
import { COURSE_STANDARDS, certCourseIncludes } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI Adult Swim Teacher Singapore | Requirements & Cost',
  description: 'Review SSI Adult Swim Teacher requirements, apprenticeship, SGD 1,688 fee and full React Right inclusion at Penguin Academy Singapore.',
  path: '/courses/ssi-adult-swim-teacher',
})

const faqs = [
  { question: 'What is the minimum age for SSI Adult Swim Teacher?', answer: 'Candidates must be at least 18.' },
  { question: 'How long is the Adult Swim Teacher course?', answer: 'SSI lists 22–26 recommended hours, or 6–8 hours for qualified SSI Swim Teacher Level 2 teachers.' },
  { question: 'What apprenticeship is required?', answer: 'Candidates complete one supervised Adult I lesson and one supervised Adult II lesson, with a recommended cumulative time of at least two hours.' },
  { question: 'How much does the course cost?', answer: 'The Penguin Academy fee is SGD 1,688 and includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.' },
  { question: 'Does certification guarantee a swim-teaching job?', answer: 'No. Employment, insurance and facility-access decisions belong to employers and venue operators. Penguin Academy does not guarantee employment.' },
  { question: 'Can international candidates attend?', answer: 'Yes, international candidates are welcome to enquire. Training is in person in Singapore, and any overseas delivery or apprenticeship arrangement must be confirmed in writing.' },
]

export default function SSIAdultPage() {
  return <PremiumCoursePage
    structuredData={buildCoursePageStructuredData('adult')}
    eyebrow="Specialist adult-learning pathway"
    title="SSI Adult Swim Teacher in Singapore."
    description="Build the teaching practice needed to support adults through structured, confidence-aware swim learning."
    price="SGD 1,688"
    priceNote="Includes full SSI React Right. Qualified Level 2 teachers may follow the shorter recommended pathway."
    directAnswer="SSI Adult Swim Teacher prepares candidates to conduct SSI Adult swim programmes. SSI recommends 22–26 hours, or 6–8 hours for qualified Level 2 teachers, plus two supervised adult lessons."
    facts={[
      { label: 'Minimum age', value: COURSE_STANDARDS.adult.minimumAge },
      { label: 'Recommended time', value: COURSE_STANDARDS.adult.recommendedDuration },
      { label: 'Apprenticeship', value: '1 Adult I + 1 Adult II lesson' },
      { label: 'Training venue', value: 'Singapore; international candidates welcome' },
    ]}
    suitableFor={[
      'Adults entering a structured adult swim-teaching pathway',
      'Existing teachers who want adult-specific instructional practice',
      'Qualified Level 2 teachers seeking the specialist adult pathway',
      'International candidates who can complete the confirmed Singapore arrangements',
    ]}
    pathway={[
      'Confirm your experience and the applicable recommended duration.',
      'Complete SSI digital learning before instructor-led training.',
      'Complete applicable theory, water fitness, practical assessment and final exam requirements.',
      'Finish one supervised Adult I and one supervised Adult II lesson.',
    ]}
    practicalTitle="Adult programme apprenticeship"
    practicalDescription={COURSE_STANDARDS.adult.apprenticeship}
    included={certCourseIncludes('SSI Adult Swim Teacher Certification', COURSE_STANDARDS.adult.apprenticeship)}
    importantTitle="Certification and employment are separate"
    importantDescription="Employers, facilities and jurisdictions may set additional insurance, safeguarding, access or employment requirements. Penguin Academy does not guarantee a job or universal venue acceptance."
    faqs={faqs}
    officialSource={{ label: 'Review the official SSI training standard', href: 'https://training.divessi.com/index.php?id=22820369' }}
    guide={{ label: 'Read the Adult Swim Teacher guide', href: '/blog/ssi-adult-swim-teacher-certification-singapore' }}
    courseTitle="SSI Adult Swim Teacher Certification"
    officialImage={{ src: '/ssi/swim-teacher-adult.jpg', alt: 'Official SSI Adult Swim Teacher programme visual showing an adult learner swimming underwater' }}
  />
}
