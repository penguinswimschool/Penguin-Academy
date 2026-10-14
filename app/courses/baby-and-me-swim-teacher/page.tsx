import PremiumCoursePage from '@/components/PremiumCoursePage'
import { COURSE_STANDARDS, certCourseIncludes } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI Baby Swim Teacher Singapore | Requirements & Cost',
  description: 'Review SSI Baby Swim Teacher requirements, supervised apprenticeship, SGD 1,688 fee and full React Right inclusion in Singapore.',
  path: '/courses/baby-and-me-swim-teacher',
})

const faqs = [
  { question: 'What is the minimum age for the SSI Baby Swim Teacher course?', answer: 'Candidates must be at least 18.' },
  { question: 'Do I need SSI Swim Teacher Level 1 first?', answer: 'The approved course details do not list Level 1 as a prerequisite for this specialist pathway. Penguin Academy will still confirm your suitability before enrolment.' },
  { question: 'How long is the course?', answer: 'SSI lists a recommended duration of 8–10 hours, in addition to the applicable preparation and supervised apprenticeship.' },
  { question: 'What apprenticeship is required?', answer: 'Candidates complete two supervised Baby Swim I lessons and two supervised Baby Swim II lessons, with a recommended cumulative time of at least two hours.' },
  { question: 'Is a parent or caregiver involved?', answer: 'Yes. SSI Baby Swim programmes are parent-child programmes, with a parent or guardian in the water and directly supervising the child.' },
  { question: 'Does the course make a baby drown-proof?', answer: 'No responsible programme can promise that. The pathway teaches age-appropriate, caregiver-supported aquatic experiences and does not replace constant adult supervision.' },
]

export default function BabyAndMePage() {
  return <PremiumCoursePage
    structuredData={buildCoursePageStructuredData('baby')}
    eyebrow="Specialist parent-child pathway"
    title="SSI Baby Swim Teacher in Singapore."
    description="Learn to guide caregiver-supported Baby Swim I and Baby Swim II experiences with age-appropriate teaching practice."
    price="SGD 1,688"
    priceNote="Includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider."
    directAnswer="SSI Baby Swim Teacher prepares eligible adults to conduct Baby Swim I and Baby Swim II parent-child programmes. SSI recommends 8–10 hours plus a four-lesson supervised apprenticeship."
    facts={[
      { label: 'Minimum age', value: COURSE_STANDARDS.baby.minimumAge },
      { label: 'Recommended time', value: COURSE_STANDARDS.baby.recommendedDuration },
      { label: 'Apprenticeship', value: '4 supervised baby lessons' },
      { label: 'Training venue', value: 'Singapore; international candidates welcome' },
    ]}
    suitableFor={[
      'Adults who want to specialise in parent-child aquatic programmes',
      'Swim teachers expanding into structured baby and toddler pathways',
      'Educators who value caregiver participation and age-appropriate practice',
      'International candidates who can complete the confirmed Singapore arrangements',
    ]}
    pathway={[
      'Discuss your background and suitability with Penguin Academy.',
      'Complete SSI digital learning before instructor-led training.',
      'Complete applicable theory, water fitness, practical assessment and final exam requirements.',
      'Finish two Baby Swim I and two Baby Swim II supervised lessons.',
    ]}
    practicalTitle="Baby Swim apprenticeship"
    practicalDescription={COURSE_STANDARDS.baby.apprenticeship}
    included={certCourseIncludes('SSI Baby Swim Teacher certification', COURSE_STANDARDS.baby.apprenticeship)}
    importantTitle="Caregiver participation and supervision remain essential"
    importantDescription="Baby Swim is a caregiver-supported programme. It does not make a child drown-proof, replace active adult supervision or remove the need to follow facility and local safety rules."
    faqs={faqs}
    officialSource={{ label: 'Review the official SSI training standard', href: 'https://training.divessi.com/index.php?id=22820366' }}
    guide={{ label: 'Read the Baby Swim Teacher guide', href: '/blog/baby-swimming-teacher-certification-singapore' }}
    courseTitle="SSI Baby Swim Teacher Course"
  />
}
