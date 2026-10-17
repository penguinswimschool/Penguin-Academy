import PremiumCoursePage from '@/components/PremiumCoursePage'
import { COURSE_STANDARDS, FULL_REACT_RIGHT, LIFETIME_REFRESHER, PENGUIN_SUPPORT } from '@/lib/approved-course-details'
import { buildCourseMetadata } from '@/lib/course-metadata'
import { buildCoursePageStructuredData } from '@/lib/structured-data'

export const metadata = buildCourseMetadata({
  title: 'SSI React Right Singapore | CPR, AED & Oxygen Provider',
  description: 'Full SSI React Right in Singapore for SGD 100: First Aid & CPR, AED Provider and Oxygen Provider training, assessment and certification pathway.',
  path: '/courses/react-right-cpr-aed-first-aid',
})

const includes = [
  FULL_REACT_RIGHT,
  'First Aid & CPR module (recommended 5 hours)',
  'AED Provider module (recommended 1 hour)',
  'Oxygen Provider module (recommended 2 hours)',
  'Practical scenario-based assessments',
  'Academic assessments and final exam for each applicable portion',
  'Certification is valid for 2 years',
  PENGUIN_SUPPORT,
  LIFETIME_REFRESHER,
]

const faqs = [
  { question: 'What is included in full SSI React Right?', answer: 'The full combination includes First Aid & CPR, AED Provider and Oxygen Provider.' },
  { question: 'What is the minimum age?', answer: 'Candidates must be at least 12.' },
  { question: 'Do I need a previous first-aid certification?', answer: 'No certification prerequisite is listed for this student-level pathway.' },
  { question: 'How long does React Right take?', answer: 'SSI lists a combined recommended duration of 8–12 hours, with applicable learning, scenarios, assessments and final exams.' },
  { question: 'How long is the certification valid?', answer: 'SSI React Right certification is valid for two years.' },
  { question: 'Will every employer accept React Right?', answer: 'Acceptance requirements vary. Confirm the exact course, issuing organisation and validity required by your employer, facility or regulator before enrolling.' },
]

export default function ReactRightPage() {
  return <PremiumCoursePage
    structuredData={buildCoursePageStructuredData('reactRight')}
    eyebrow="Emergency response training"
    title="Full SSI React Right in Singapore."
    description="Train in First Aid & CPR, AED use and emergency oxygen administration through one practical SSI pathway."
    price="SGD 100"
    priceNote="Standalone full React Right course. It is also included with each SGD 1,688 Penguin Academy swim-teacher course."
    directAnswer="Full SSI React Right combines First Aid & CPR, AED Provider and Oxygen Provider. The minimum age is 12, SSI recommends 8–12 hours, and the certification is valid for two years."
    facts={[
      { label: 'Minimum age', value: COURSE_STANDARDS.reactRight.minimumAge },
      { label: 'Recommended time', value: COURSE_STANDARDS.reactRight.recommendedDuration },
      { label: 'Validity', value: '2 years' },
      { label: 'Training venue', value: 'In person in Singapore' },
    ]}
    suitableFor={[
      'Swim teachers and aquatic professionals',
      'Educators, personal trainers and activity leaders',
      'People who want structured CPR, AED and oxygen-provider training',
      'International candidates able to attend the confirmed Singapore session',
    ]}
    pathway={[
      'Confirm the next scheduled practical session with Penguin Academy.',
      'Complete the applicable SSI learning portions.',
      'Practise the required emergency-response scenarios with your trainer.',
      'Successfully complete the applicable academic assessments and final exams.',
    ]}
    practicalTitle="Practical assessment, not apprenticeship"
    practicalDescription={COURSE_STANDARDS.reactRight.apprenticeship}
    included={includes}
    importantTitle="Confirm the qualification your workplace requires"
    importantDescription="React Right is an SSI emergency-response certification pathway. It is not presented as a healthcare-professional or lifeguard qualification, and Penguin Academy cannot guarantee acceptance by every employer, facility or regulator."
    faqs={faqs}
    officialSource={{ label: 'Review the official SSI training standard', href: 'https://training.divessi.com/course/scuba-training-standards-and-procedures-20241/react-right-programs/student-level-programs/react-right' }}
    guide={{ label: 'Read the React Right guide', href: '/blog/ssi-react-right-cpr-aed-oxygen-provider' }}
    courseTitle="Full SSI React Right"
    courseLogo={{ src: '/ssi/react-right-logo-black.png', alt: 'SSI React Right First Aid, oxygen and AED training logo', width: 1400, height: 561 }}
    officialImage={{ src: '/ssi/react-right.jpg', alt: 'Official SSI React Right programme visual showing an emergency-response scenario' }}
  />
}
