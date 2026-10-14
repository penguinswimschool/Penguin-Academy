export interface BlogArticle {
  slug: string
  title: string
  seoTitle: string
  description: string
  excerpt: string
  publishedAt: string
  updatedAt: string
  category: string
  image: string
  imageAlt: string
  readTime: string
  directAnswer: string
  facts: Array<{ label: string; value: string }>
  sections: Array<{
    id: string
    title: string
    paragraphs?: string[]
    bullets?: string[]
  }>
  faqs: Array<{ question: string; answer: string }>
  sources: Array<{ label: string; url: string }>
  internalLinks?: Array<{ label: string; href: string }>
  courseHref: string
  courseName: string
  whatsappMessage: string
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-become-certified-swimming-instructor-singapore',
    title: 'How to Become a Certified Swimming Instructor in Singapore',
    seoTitle: 'How to Become a Swimming Instructor in Singapore | 2026 Guide',
    description: 'A practical guide to SSI swim teacher certification, apprenticeships and the separate venue or employer requirements that may apply in Singapore.',
    excerpt: 'Understand the SSI Level 1 pathway, practical requirements and the additional credentials that some Singapore teaching settings may require.',
    publishedAt: '2026-10-13T09:00:00+08:00',
    updatedAt: '2026-10-13T09:00:00+08:00',
    category: 'Career pathway',
    image: '/academy-instructor-development.jpg',
    imageAlt: 'Penguin Academy swim teachers developing their practical coaching skills in a Singapore pool',
    readTime: '8 min read',
    directAnswer: 'Becoming a swimming instructor in Singapore starts with choosing a qualification suited to the swimmers and setting you intend to teach in. SSI Swim Teacher Level 1 is a foundational professional pathway for teaching SSI Aquatike and Beginner programmes. It is not a universal Singapore teaching licence: venues, employers and public programmes may impose separate requirements.',
    facts: [
      { label: 'Starting SSI pathway', value: 'Swim Teacher Level 1' },
      { label: 'Minimum age', value: '18 years' },
      { label: 'SSI recommended duration', value: '24–28 hours' },
      { label: 'Penguin Academy price', value: 'SGD 1,688' },
    ],
    sections: [
      {
        id: 'meaning',
        title: 'What does “certified swimming instructor” mean in Singapore?',
        paragraphs: [
          'There is no single qualification that automatically authorises a person to teach in every Singapore pool, school or swim programme. A professional certification establishes what its holder is trained to conduct within that certification system. Access to a particular venue or job is a separate matter.',
          'For example, a private swim school, condominium, ActiveSG facility and school-based programme may each have different rules for coaching registration, facility access, first aid, insurance, safeguarding or programme-specific credentials. Confirm the requirements of your intended employer and venue before choosing a pathway.',
        ],
      },
      {
        id: 'level-one',
        title: 'Why SSI Swim Teacher Level 1 is the usual starting point',
        paragraphs: [
          'SSI Swim Teacher Level 1 is designed to provide the knowledge and training needed to conduct SSI Level 1 swim programmes. Under SSI’s active-status qualifications, this covers Aquatike I–III and Beginner I–III.',
          'The minimum candidate age is 18. SSI recommends 24–28 hours for completion, with the number of classes, hours and sessions set by the Swim Teacher Instructor according to the candidate’s needs and ability.',
        ],
      },
      {
        id: 'completion',
        title: 'What you must complete before certification',
        paragraphs: ['The instructor-led training day is only one part of the pathway. Certification is issued after all applicable academic and in-water requirements have been completed.'],
        bullets: [
          'SSI digital learning, academic sections and assessments',
          'Candidate Water Fitness Evaluation where required by the current standard',
          'Theory and practical evaluation under an active-status SSI Swim Teacher Instructor',
          'The programme final exam',
          'At least four Aquatike lessons and four Beginner lessons, with a recommended cumulative apprenticeship time of at least four hours',
        ],
      },
      {
        id: 'singapore-requirements',
        title: 'SSI certification and Singapore requirements are separate',
        paragraphs: [
          'SSI Level 1 does not automatically confer National Registry of Coaches membership, SwimSafer instructor status, an ActiveSG Usage Permit or MOE registration. These are separate frameworks with their own eligibility and maintenance requirements.',
          'ActiveSG states that coaches using its facilities need valid NROC status and a Usage Permit. SportSG’s Sports Education Programme also sets requirements for coaches working in eligible school programmes. Candidates pursuing these settings should check the latest official requirements directly rather than assuming one certificate satisfies all of them.',
          'Likewise, an employer may require a specific recognised Standard First Aid qualification. Penguin Academy includes full SSI React Right with its teacher courses, but candidates should confirm whether their intended employer or regulator accepts that exact credential for its purpose.',
        ],
      },
      {
        id: 'steps',
        title: 'A practical step-by-step pathway',
        bullets: [
          'Decide which learners and teaching settings you want to work with.',
          'Ask the intended employer or venue for its current requirements in writing.',
          'Begin with SSI Swim Teacher Level 1 if you want the foundational SSI professional pathway.',
          'Complete the academic work, water fitness requirement, assessments, final exam and supervised apprenticeship.',
          'Obtain any additional NROC, permit, first-aid, SwimSafer, MOE or employer-specific credentials required for your intended setting.',
          'Maintain the active status, insurance, safeguarding and continuing requirements relevant to your work.',
        ],
      },
      {
        id: 'questions',
        title: 'Questions to ask before enrolling',
        bullets: [
          'Which programmes will the certification allow me to conduct within SSI?',
          'What is the total expected workload beyond the instructor-led day?',
          'How will my apprenticeship be arranged and supervised?',
          'Which additional credentials does my intended employer or venue require?',
          'What ongoing requirements apply after certification?',
        ],
      },
    ],
    faqs: [
      { question: 'What is the minimum age for SSI Swim Teacher Level 1?', answer: 'The current SSI standard sets a minimum candidate age of 18.' },
      { question: 'How long does SSI Level 1 take?', answer: 'SSI recommends 24–28 hours for completion. The schedule varies according to the candidate’s needs and ability, and includes more than the instructor-led training day.' },
      { question: 'What apprenticeship is required?', answer: 'At least four Aquatike lessons and four Beginner lessons, with a recommended cumulative apprenticeship time of at least four hours.' },
      { question: 'Do I need NROC to teach swimming in Singapore?', answer: 'It depends on the setting. ActiveSG facility coaching and certain SportSG or MOE programmes expressly require NROC status. Private employers and venues may set their own conditions.' },
      { question: 'Does SSI Level 1 guarantee a swimming instructor job?', answer: 'No. Certification documents an SSI programme qualification; hiring, venue access and employment requirements are determined separately.' },
    ],
    sources: [
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820367' },
      { label: 'CoachSG National Registry of Coaches', url: 'https://coachsg.sportsingapore.gov.sg/nroc' },
      { label: 'ActiveSG coaching requirements', url: 'https://ask.gov.sg/activesg/questions/cm0avawmm000ltcp8l1gqg58w' },
      { label: 'SportSG Sports Education Programme', url: 'https://www.sportsingapore.gov.sg/sport-education/sports-education-programme/' },
    ],
    courseHref: '/courses/ssi-swim-teacher-level-1',
    courseName: 'Explore SSI Swim Teacher Level 1',
    whatsappMessage: 'Hi Penguin Academy, I would like advice on becoming a certified swimming instructor in Singapore.',
  },
  {
    slug: 'ssi-swim-teacher-level-1-requirements-cost-career-path',
    title: 'SSI Swim Teacher Level 1: Requirements, Cost and Qualification Pathway',
    seoTitle: 'SSI Swim Teacher Level 1 Singapore: Requirements & Cost',
    description: 'See SSI Level 1 entry requirements, total training expectations, apprenticeship, teaching scope and Penguin Academy’s SGD 1,688 course price.',
    excerpt: 'The verified requirements, apprenticeship, SSI teaching scope and current Penguin Academy price for Level 1.',
    publishedAt: '2026-10-13T09:15:00+08:00',
    updatedAt: '2026-10-13T09:15:00+08:00',
    category: 'Level 1',
    image: '/academy-practical-training.jpg',
    imageAlt: 'SSI Level 1 swim teacher candidates completing practical training with Penguin Academy',
    readTime: '7 min read',
    directAnswer: 'SSI Swim Teacher Level 1 is the foundational SSI professional pathway for teaching Aquatike I–III and Beginner I–III programmes. Candidates must be at least 18, and SSI recommends 24–28 hours for completion. Penguin Academy’s current price is SGD 1,688 and includes full SSI React Right.',
    facts: [
      { label: 'Minimum age', value: '18 years' },
      { label: 'Recommended duration', value: '24–28 hours' },
      { label: 'Apprenticeship', value: '4 Aquatike + 4 Beginner lessons' },
      { label: 'Course price', value: 'SGD 1,688' },
    ],
    sections: [
      {
        id: 'what-is-level-one',
        title: 'What is SSI Swim Teacher Level 1?',
        paragraphs: [
          'The programme prepares candidates to conduct SSI’s foundational swim programmes. It combines academic learning, directly supervised in-water development, formal assessment and a teaching apprenticeship.',
          'For an active-status Level 1 Swim Teacher, the stated SSI programme scope is Aquatike I–III and Beginner I–III. The qualification describes SSI programme scope; it does not guarantee employment or access to every pool.',
        ],
      },
      {
        id: 'entry',
        title: 'Who can enrol?',
        paragraphs: [
          'The current SSI standard sets a minimum candidate age of 18. It does not list another swim-teacher certification as a prerequisite for Level 1.',
          'Candidates should still be prepared for the applicable Candidate Water Fitness Evaluation and the in-water demands of professional teacher training. Your instructor can explain the current evaluation before enrolment.',
        ],
      },
      {
        id: 'duration',
        title: 'How long does Level 1 take?',
        paragraphs: [
          'SSI recommends 24–28 hours for completion. Penguin Academy’s delivery includes one instructor-led training day, but that day is not the entire certification process.',
          'Digital learning, assessments, the final exam and supervised apprenticeship also need to be completed. The exact schedule is set according to candidate needs, ability and apprenticeship arrangements.',
        ],
      },
      {
        id: 'requirements',
        title: 'Level 1 completion requirements',
        bullets: [
          'Complete the applicable Candidate Water Fitness Evaluation.',
          'Complete all academic sections and assessments in the instructor materials.',
          'Complete the programme final exam.',
          'Complete at least four Aquatike lessons and four Beginner lessons.',
          'Reach a recommended cumulative apprenticeship time of at least four hours.',
          'Complete all academic and in-water requirements before the digital certification card is issued.',
        ],
      },
      {
        id: 'price',
        title: 'How much does Level 1 cost at Penguin Academy?',
        paragraphs: [
          'The current published price is SGD 1,688. It includes the Level 1 pathway and full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.',
          'Penguin Academy also publishes an SGD 2,888 bundle for any two teacher courses. Choosing Level 1 and Level 2 through the bundle does not waive Level 2 prerequisites or either programme’s completion requirements.',
        ],
      },
      {
        id: 'next',
        title: 'What comes after Level 1?',
        paragraphs: [
          'SSI Level 1 is the required prerequisite for SSI Swim Teacher Level 2, with no equivalency permitted under the current Level 2 standard. Level 2 broadens the active-status SSI programme scope to Intermediate, Advanced and Swim Team Prep programmes.',
          'Baby Swim Teacher and Adult Swim Teacher are separate specialisations. Choose the next pathway according to the learners and programmes you intend to serve, not simply by collecting the greatest number of certificates.',
        ],
      },
    ],
    faqs: [
      { question: 'Is SSI Level 1 a one-day certification?', answer: 'No. Penguin Academy includes one instructor-led day, while SSI also requires the applicable learning, water fitness evaluation, assessments, final exam and apprenticeship.' },
      { question: 'What can an active SSI Level 1 teacher conduct?', answer: 'SSI lists Aquatike I–III and Beginner I–III within the active-status Level 1 teaching scope.' },
      { question: 'Does Level 1 include an apprenticeship?', answer: 'Yes. The current standard requires at least four Aquatike and four Beginner lessons, with a recommended cumulative minimum of four hours.' },
      { question: 'Is React Right included?', answer: 'Yes. Penguin Academy’s current SGD 1,688 Level 1 offer includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.' },
      { question: 'Does Level 1 guarantee employment?', answer: 'No. It establishes an SSI programme qualification. Employers and venue operators determine their own hiring and access requirements.' },
    ],
    sources: [
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22219535' },
      { label: 'SSI Level 2 Swim Teacher training standard', url: 'https://training.divessi.com/course/swim-training-standards-and-procedures/professional-programs/swim-professional-programs/level-2-swim-teacher-1' },
    ],
    courseHref: '/courses/ssi-swim-teacher-level-1',
    courseName: 'View Level 1 course details',
    whatsappMessage: 'Hi Penguin Academy, I would like to know more about SSI Swim Teacher Level 1.',
  },
  {
    slug: 'ssi-react-right-cpr-aed-oxygen-provider-explained',
    title: 'SSI React Right: First Aid & CPR, AED and Oxygen Provider Explained',
    seoTitle: 'SSI React Right Singapore: CPR, AED & Oxygen Provider',
    description: 'Understand what full SSI React Right includes, its minimum age, duration, assessment, validity and Penguin Academy’s SGD 100 price.',
    excerpt: 'A clear explanation of the full three-part SSI React Right combination offered by Penguin Academy.',
    publishedAt: '2026-10-13T09:30:00+08:00',
    updatedAt: '2026-10-13T09:30:00+08:00',
    category: 'React Right',
    image: '/academy-guided-practice.jpg',
    imageAlt: 'Penguin Academy instructor guiding candidates through safety-focused professional training',
    readTime: '6 min read',
    directAnswer: 'SSI React Right trains participants to respond as first responders in medical emergencies similar to their training. Penguin Academy’s full combination includes First Aid & CPR, AED Provider and Oxygen Provider for SGD 100. SSI lists a minimum age of 12 and recommends 8–12 hours for the complete programme.',
    facts: [
      { label: 'Full combination', value: 'CPR + AED + Oxygen' },
      { label: 'Minimum age', value: '12 years' },
      { label: 'Recommended duration', value: '8–12 hours' },
      { label: 'Standalone price', value: 'SGD 100' },
    ],
    sections: [
      {
        id: 'what-is-react-right',
        title: 'What is SSI React Right?',
        paragraphs: [
          'React Right is SSI’s emergency-response training programme. Its intent is to give participants the knowledge and practical training to act as first responders and provide First Aid and CPR, administer oxygen and/or support an emergency response with an automated external defibrillator.',
          'It is training for responding within the scope of the programme. It is not a healthcare-professional qualification, lifeguard certification or promise that every employer or regulator will accept it for a specific workplace requirement.',
        ],
      },
      {
        id: 'included',
        title: 'What does Penguin Academy’s full combination include?',
        bullets: [
          'First Aid & CPR',
          'AED Provider',
          'Oxygen Provider',
        ],
        paragraphs: [
          'SSI allows these portions to be taught individually or in combination. Penguin Academy’s published SGD 100 offer is the full three-part combination.',
        ],
      },
      {
        id: 'eligibility-duration',
        title: 'Who can enrol and how long does it take?',
        paragraphs: [
          'SSI lists a minimum age of 12 and no prior certification prerequisite for the student-level programme. The recommended duration for the complete programme is 8–12 hours.',
          'SSI separately recommends five hours for First Aid & CPR, one hour for AED Provider and two hours for Oxygen Provider. These component figures should not be treated as a guaranteed timetable; the complete programme retains its overall 8–12-hour recommendation.',
        ],
      },
      {
        id: 'completion',
        title: 'What must students complete?',
        bullets: [
          'Academic learning for each applicable portion',
          'Practical emergency-response scenarios using appropriate training equipment',
          'The final exam for each portion completed',
          'All applicable academic and practical requirements before certification is issued',
        ],
        paragraphs: ['There is no swim-teaching apprenticeship for the standalone React Right programme.'],
      },
      {
        id: 'validity',
        title: 'How long is SSI React Right valid?',
        paragraphs: [
          'The SSI React Right certification is valid for two years from issue under the current standard. SSI provides an update route for participants who need to extend the certification.',
          'Employers, venues and regulators may impose their own recency or approved-provider requirements. Confirm the exact credential they accept before relying on any emergency-response course for employment compliance.',
        ],
      },
      {
        id: 'teacher-courses',
        title: 'Is React Right included with teacher courses?',
        paragraphs: [
          'Yes. Penguin Academy’s current published offer includes full SSI React Right with each SGD 1,688 teacher course and with the SGD 2,888 any-two-teacher-course bundle.',
          'This is a Penguin Academy course inclusion. It should not be confused with a statement that React Right is the only first-aid credential required by every Singapore employer or venue.',
        ],
      },
    ],
    faqs: [
      { question: 'What does full SSI React Right include?', answer: 'First Aid & CPR, AED Provider and Oxygen Provider.' },
      { question: 'What is the minimum age?', answer: 'The current SSI student-level standard sets a minimum age of 12.' },
      { question: 'Do I need a previous certification?', answer: 'SSI lists no certification prerequisite for the student-level React Right programme.' },
      { question: 'How long does the complete programme take?', answer: 'SSI recommends 8–12 hours for the complete programme.' },
      { question: 'How long is the certification valid?', answer: 'Two years from issue under the current SSI standard, with an update route available.' },
      { question: 'Does it meet my employer’s first-aid requirement?', answer: 'That depends on the employer and applicable rules. Confirm acceptance of the exact SSI credential before enrolling for a workplace requirement.' },
    ],
    sources: [
      { label: 'SSI React Right course combination', url: 'https://www.divessi.com/en/advanced-training/scuba-diving/react-right---course-combination-fa-cpr-aed-o2' },
      { label: 'SSI React Right training standard', url: 'https://training.divessi.com/course/scuba-training-standards-and-procedures-20241/react-right-programs/student-level-programs/react-right' },
      { label: 'SSI React Right Update standard', url: 'https://training.divessi.com/index.php?id=22820380' },
    ],
    courseHref: '/courses/react-right-cpr-aed-first-aid',
    courseName: 'View full React Right course',
    whatsappMessage: 'Hi Penguin Academy, I would like to know more about full SSI React Right training.',
  },
  {
    slug: 'baby-swimming-teacher-certification-singapore',
    title: 'Baby Swimming Teacher Certification in Singapore',
    seoTitle: 'Baby Swimming Teacher Certification Singapore | SSI Guide',
    description: 'Learn the SSI Baby Swim Teacher requirements, 8–10-hour recommendation, apprenticeship, parent participation and Penguin Academy price.',
    excerpt: 'What candidates should know about SSI Baby Swim Teacher training, supervised practice and responsible parent-child teaching.',
    publishedAt: '2026-10-13T09:45:00+08:00',
    updatedAt: '2026-10-13T09:45:00+08:00',
    category: 'Baby Swim',
    image: '/academy-poolside-coaching.jpg',
    imageAlt: 'Penguin Academy coach providing close, supervised instruction during a swim session',
    readTime: '7 min read',
    directAnswer: 'SSI Baby Swim Teacher is a specialist professional certification for candidates who want to conduct SSI Baby Swim I and Baby Swim II programmes. The minimum candidate age is 18. SSI recommends 8–10 hours for completion, together with academic and in-water requirements, a final exam and a supervised four-lesson apprenticeship.',
    facts: [
      { label: 'Minimum age', value: '18 years' },
      { label: 'Recommended duration', value: '8–10 hours' },
      { label: 'Apprenticeship', value: '2 Baby Swim I + 2 Baby Swim II' },
      { label: 'Course price', value: 'SGD 1,688' },
    ],
    sections: [
      {
        id: 'what-is-baby',
        title: 'What is SSI Baby Swim Teacher certification?',
        paragraphs: [
          'The programme is intended to prepare candidates to conduct SSI Baby and Me and Aquababy programmes. It focuses on age-appropriate parent-child aquatic learning rather than independent swimming instruction for babies.',
          'An active-status Baby Swim Teacher may conduct SSI Baby Swim I and Baby Swim II. The qualification does not remove the need for direct caregiver supervision or guarantee access to every Singapore venue or employer.',
        ],
      },
      {
        id: 'entry-duration',
        title: 'Entry requirement and duration',
        paragraphs: [
          'The current SSI standard sets a minimum candidate age of 18 and recommends 8–10 hours for completion. The instructor determines the number of classes, hours and daily sessions according to candidate needs and ability.',
          'SSI Level 1 is not listed as a prerequisite in the current Baby Swim Teacher standard. Candidates should nevertheless confirm Penguin Academy’s current enrolment process and be prepared for the applicable water fitness and in-water requirements.',
        ],
      },
      {
        id: 'completion',
        title: 'What must candidates complete?',
        bullets: [
          'The applicable Candidate Water Fitness Evaluation',
          'All academic sections and assessments',
          'Directly supervised and evaluated in-water training',
          'The programme final exam',
          'At least two Baby Swim I and two Baby Swim II lessons',
          'A recommended cumulative apprenticeship time of at least two hours',
        ],
      },
      {
        id: 'programmes',
        title: 'Baby Swim I and Baby Swim II',
        paragraphs: [
          'SSI lists Baby Swim I for children aged 2–35 months. Its purpose centres on comfort in and around the water while teaching the caregiver suitable ways to interact with the child in an aquatic environment.',
          'SSI lists Baby Swim II for children aged 12–35 months. It builds toward independent floating and movement while the caregiver continues direct supervision. An individual provider may adopt a narrower operational age policy, which should be identified as that provider’s policy rather than the SSI standard.',
        ],
      },
      {
        id: 'supervision',
        title: 'Parent participation and supervision are essential',
        paragraphs: [
          'SSI requires a parent or guardian to be in the water with each child and to supervise the child directly at all times. Baby swim education should never be described as drown-proofing or as making a child safe without adult supervision.',
          'The current SSI programme ratios are 6:1, increasing to 12:2 when one certified assistant is present. Responsible delivery also depends on the pool, the participants and any stricter local or provider policies.',
        ],
      },
      {
        id: 'singapore',
        title: 'Singapore employment and venue considerations',
        paragraphs: [
          'SSI Baby Swim Teacher certification documents programme-specific training. It does not automatically grant NROC membership, SwimSafer status, MOE registration, ActiveSG access, insurance or an early-childhood qualification.',
          'Before enrolling for a particular job, ask the employer or venue which credentials, safeguarding checks, first-aid qualifications and insurance arrangements it requires.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the minimum age to become an SSI Baby Swim Teacher?', answer: 'The current SSI standard sets a minimum candidate age of 18.' },
      { question: 'Do I need SSI Level 1 first?', answer: 'SSI Level 1 is not listed as a prerequisite in the current Baby Swim Teacher standard. Confirm the training provider’s current enrolment process.' },
      { question: 'How long does the course take?', answer: 'SSI recommends 8–10 hours, with the schedule set by the instructor according to candidate needs and ability.' },
      { question: 'What apprenticeship is required?', answer: 'At least two Baby Swim I and two Baby Swim II lessons, with a recommended cumulative minimum of two hours.' },
      { question: 'Must a parent or guardian enter the pool?', answer: 'Yes. SSI requires one to be in the water with each child and directly supervising at all times.' },
      { question: 'Does baby swimming make a child drown-proof?', answer: 'No. The programme must not be presented as drown-proofing, and continuous responsible adult supervision remains essential.' },
    ],
    sources: [
      { label: 'SSI Baby Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820366' },
      { label: 'SSI Baby Swim I training standard', url: 'https://training.divessi.com/index.php?id=22820342' },
      { label: 'SSI Baby Swim II training standard', url: 'https://training.divessi.com/index.php?id=22820343' },
    ],
    courseHref: '/courses/baby-and-me-swim-teacher',
    courseName: 'View SSI Baby Swim Teacher course details',
    whatsappMessage: 'Hi Penguin Academy, I would like to know more about SSI Baby Swim Teacher certification.',
  },
  {
    slug: 'ssi-swim-teacher-level-1-vs-level-2',
    title: 'SSI Swim Teacher Level 1 vs Level 2: Which Course Should You Take?',
    seoTitle: 'SSI Swim Teacher Level 1 vs Level 2 | Singapore Guide',
    description: 'Compare SSI Level 1 and Level 2 prerequisites, programme scope, duration, apprenticeships and Penguin Academy pricing.',
    excerpt: 'A side-by-side comparison of SSI Level 1 and Level 2 to help you choose the correct professional pathway.',
    publishedAt: '2026-10-13T10:00:00+08:00',
    updatedAt: '2026-10-13T10:00:00+08:00',
    category: 'Course comparison',
    image: '/academy-supervised-session.jpg',
    imageAlt: 'Penguin Academy swim teacher candidates developing progressively through supervised pool training',
    readTime: '7 min read',
    directAnswer: 'Level 1 is the entry pathway for SSI Aquatike and Beginner programmes. Level 2 builds on it for Intermediate, Advanced and Swim Team Prep programmes. Both have a minimum age of 18, but Level 2 requires SSI Level 1 with no equivalency permitted.',
    facts: [
      { label: 'Start with', value: 'Level 1' },
      { label: 'Level 1 duration', value: '24–28 hours' },
      { label: 'Level 2 duration', value: '23–27 hours' },
      { label: 'Price per course', value: 'SGD 1,688' },
    ],
    sections: [
      {
        id: 'comparison',
        title: 'Level 1 vs Level 2 at a glance',
        bullets: [
          'Minimum age: 18 for both programmes.',
          'Prerequisite: Level 1 has no prior swim-teacher certification listed; Level 2 requires SSI Level 1 with no equivalency permitted.',
          'SSI recommended duration: 24–28 hours for Level 1 and 23–27 hours for Level 2.',
          'Programme scope: Level 1 covers Aquatike and Beginner; Level 2 adds Intermediate, Advanced and Swim Team Prep.',
          'Penguin Academy price: SGD 1,688 for either course, with full SSI React Right included.',
        ],
      },
      {
        id: 'level-one',
        title: 'Who should take Level 1?',
        paragraphs: [
          'A new candidate entering the SSI swim-teacher pathway should begin with Level 1. It establishes the teaching foundation for Aquatike I–III and Beginner I–III and is the required prerequisite for Level 2.',
          'Level 1 includes an apprenticeship of at least four Aquatike lessons and four Beginner lessons, with a recommended cumulative time of at least four hours.',
        ],
      },
      {
        id: 'level-two',
        title: 'Who should take Level 2?',
        paragraphs: [
          'Level 2 is for SSI Level 1 Swim Teachers progressing toward more advanced learner development. Its active-status scope adds Intermediate I–II, Advanced I–II and Swim Team Prep to the programmes a Level 1 teacher may conduct.',
          'The Level 2 apprenticeship requires at least four Intermediate lessons and two Advanced lessons, with a recommended cumulative time of at least three hours.',
        ],
      },
      {
        id: 'shared-requirements',
        title: 'What completion requirements do they share?',
        paragraphs: ['Both are professional pathways that extend beyond an instructor-led day. The applicable requirements include:'],
        bullets: [
          'Candidate Water Fitness Evaluation where required by the current standard',
          'Academic sections and assessments',
          'Directly supervised in-water development and evaluation',
          'A programme final exam',
          'The programme-specific teaching apprenticeship',
        ],
      },
      {
        id: 'cost',
        title: 'Price and bundle options',
        paragraphs: [
          'Penguin Academy’s current published price is SGD 1,688 for Level 1 and SGD 1,688 for Level 2. Each includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.',
          'The any-two-teacher-course bundle is SGD 2,888. Level 1 and Level 2 can be selected as the two courses, but the bundle does not waive the Level 1 prerequisite for Level 2 or either programme’s completion requirements.',
        ],
      },
      {
        id: 'decision',
        title: 'Which should you choose?',
        paragraphs: [
          'Choose Level 1 if you are new to the SSI professional swim-teacher pathway. Choose Level 2 only after earning SSI Level 1 and when your intended teaching includes Intermediate, Advanced or Swim Team Prep programmes.',
          'Level 2 is broader, but it is not a replacement for the Level 1 foundation. The most appropriate pathway is the one that matches your current qualification and the programmes you genuinely intend to teach.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I take SSI Level 2 without Level 1?', answer: 'No. SSI requires its Level 1 Swim Teacher certification and states that no equivalency is permitted.' },
      { question: 'Which course should a new candidate take first?', answer: 'Level 1, because it is the foundational pathway and the required prerequisite for Level 2.' },
      { question: 'What can Level 2 conduct that Level 1 cannot?', answer: 'Within SSI’s active-status scope, Level 2 adds Intermediate I–II, Advanced I–II and Swim Team Prep.' },
      { question: 'Do both courses require an apprenticeship?', answer: 'Yes. The required lesson types and recommended cumulative hours differ for each programme.' },
      { question: 'Does the SGD 2,888 bundle waive the Level 2 prerequisite?', answer: 'No. Pricing does not change SSI prerequisites or completion requirements.' },
    ],
    sources: [
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22219535' },
      { label: 'SSI Level 2 Swim Teacher training standard', url: 'https://training.divessi.com/course/swim-training-standards-and-procedures/professional-programs/swim-professional-programs/level-2-swim-teacher-1' },
    ],
    courseHref: '/courses/penguin-pro-swim-teacher-pathway',
    courseName: 'Compare the any-two-course bundle',
    whatsappMessage: 'Hi Penguin Academy, please help me choose between SSI Swim Teacher Level 1 and Level 2.',
  },
  {
    slug: 'ssi-adult-swim-teacher-certification-singapore',
    title: 'SSI Adult Swim Teacher Certification Singapore: Requirements, Duration and Apprenticeship',
    seoTitle: 'SSI Adult Swim Teacher Singapore: Requirements & Cost',
    description: 'Review SSI Adult Swim Teacher entry requirements, recommended duration, apprenticeship, Penguin Academy’s SGD 1,688 fee and React Right inclusion.',
    excerpt: 'A source-backed guide to the SSI Adult Swim Teacher pathway, including completion requirements, apprenticeship and responsible recognition checks.',
    publishedAt: '2026-10-14T10:15:00+08:00',
    updatedAt: '2026-10-14T10:15:00+08:00',
    category: 'Adult Swim',
    image: '/academy-adult-teacher-practice.jpg',
    imageAlt: 'Penguin Academy coach completing adult-focused teaching practice in a Singapore swimming pool',
    readTime: '7 min read',
    directAnswer: 'SSI Adult Swim Teacher is a professional pathway for candidates preparing to conduct SSI Adult swim programmes. Candidates must be at least 18. SSI recommends 22–26 hours for completion, or 6–8 hours for candidates who are already qualified SSI Level 2 Swim Teachers. Penguin Academy’s current fee is SGD 1,688 and includes full SSI React Right.',
    facts: [
      { label: 'Minimum age', value: '18 years' },
      { label: 'Recommended duration', value: '22–26 hours' },
      { label: 'Level 2 teacher duration', value: '6–8 hours' },
      { label: 'Penguin Academy fee', value: 'SGD 1,688' },
    ],
    sections: [
      {
        id: 'what-is-adult-swim-teacher',
        title: 'What is SSI Adult Swim Teacher certification?',
        paragraphs: [
          'The SSI Adult Swim Teacher programme provides candidates with the knowledge and training needed to conduct SSI Adult swim programmes. It combines academic development, directly supervised in-water training, assessment and a programme-specific teaching apprenticeship.',
          'The certification records completion of an SSI professional programme. It does not by itself guarantee employment, access to a particular pool or acceptance for every employer, venue or regulatory purpose.',
        ],
      },
      {
        id: 'entry-duration',
        title: 'Entry requirement and recommended duration',
        paragraphs: [
          'The current SSI standard sets a minimum candidate age of 18. It does not list another swim-teacher certification as a prerequisite for the full Adult Swim Teacher programme.',
          'SSI recommends 22–26 hours for completion. For a candidate who is already an SSI Level 2 Swim Teacher, the recommended duration is 6–8 hours. These figures describe the complete programme, not only Penguin Academy’s instructor-led training day.',
        ],
      },
      {
        id: 'completion',
        title: 'What must candidates complete?',
        bullets: [
          'Complete the Candidate Water Fitness Evaluation if required under the current SSI standard.',
          'Complete all academic sections and assessments in the Adult Swim Teacher instructor materials.',
          'Complete directly supervised and evaluated academic and in-water training.',
          'Complete the programme final exam.',
          'Complete at least one Adult I lesson and one Adult II lesson.',
          'Reach a recommended cumulative apprenticeship time of at least two hours.',
        ],
        paragraphs: [
          'The digital certification card may be issued only after the applicable academic, in-water, water-fitness, examination and apprenticeship requirements are complete.',
        ],
      },
      {
        id: 'apprenticeship',
        title: 'How the Adult Swim Teacher apprenticeship works',
        paragraphs: [
          'The apprenticeship is specific to the learners and programmes covered by this pathway. SSI requires at least one Adult I lesson and one Adult II lesson, with a recommended cumulative training time of at least two hours.',
          'An active-status Adult Teacher Mentor may directly supervise a candidate during the apprenticeship. The exact training schedule is set by the Swim Teacher Instructor according to the candidate’s needs and ability.',
        ],
      },
      {
        id: 'price-inclusions',
        title: 'Penguin Academy price and React Right inclusion',
        paragraphs: [
          'Penguin Academy’s current published fee is SGD 1,688 for the SSI Adult Swim Teacher course. The offer includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.',
          'React Right is a separate emergency-response programme within the package. Its inclusion does not remove any Adult Swim Teacher completion requirement, and candidates should confirm whether an intended employer or regulator requires a different or additional first-aid credential.',
        ],
      },
      {
        id: 'recognition',
        title: 'Recognition and work-setting requirements',
        paragraphs: [
          'Professional certification and permission to teach in a particular work setting are separate questions. Employers, pool operators and regulators may apply their own requirements for hiring, venue access, insurance, safeguarding, first aid or programme delivery.',
          'Ask the intended employer or venue to confirm its current requirements in writing before relying on any course for a particular job or teaching location. Penguin Academy does not promise employment or universal recognition.',
        ],
      },
      {
        id: 'international-candidates',
        title: 'Information for international candidates',
        paragraphs: [
          'International candidates are welcome to enquire about training in Singapore. Before booking travel, confirm the in-person training and apprenticeship arrangements, the total completion pathway and whether the certification suits the country or organisation where you intend to teach.',
          'Course fees are published in Singapore dollars. Travel, accommodation, immigration and recognition arrangements remain separate from the SSI training requirements and should be confirmed before payment or travel is arranged.',
        ],
      },
    ],
    faqs: [
      { question: 'What is the minimum age for SSI Adult Swim Teacher?', answer: 'The current SSI standard sets a minimum candidate age of 18.' },
      { question: 'How long does SSI Adult Swim Teacher take?', answer: 'SSI recommends 22–26 hours for completion. For candidates who are already SSI Level 2 Swim Teachers, the recommendation is 6–8 hours.' },
      { question: 'What apprenticeship is required?', answer: 'At least one Adult I lesson and one Adult II lesson, with a recommended cumulative apprenticeship time of at least two hours.' },
      { question: 'How much does Penguin Academy charge?', answer: 'The current published fee is SGD 1,688 and includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider.' },
      { question: 'Does certification guarantee a teaching job or access to every pool?', answer: 'No. Employers, venues and regulators determine their own hiring, access and credential requirements.' },
      { question: 'Can international candidates enquire?', answer: 'Yes. Confirm the complete in-person training, apprenticeship, travel and recognition arrangements before booking.' },
    ],
    sources: [
      { label: 'SSI Adult Swim Teacher training standard', url: 'https://training.divessi.com/en-au/course/swim-standards/professional-programs-2/swim-professional-programs/adult-swim-teacher' },
      { label: 'SSI React Right training standard', url: 'https://training.divessi.com/index.php?L=0&extauth%5Baction%5D=previewaccess&id=21401025&logintype=login' },
    ],
    internalLinks: [
      { label: 'Compare all SSI swim teacher courses', href: '/courses' },
      { label: 'Read the Singapore swimming-instructor pathway', href: '/blog/how-to-become-certified-swimming-instructor-singapore' },
      { label: 'Compare SSI Level 1 and Level 2', href: '/blog/ssi-swim-teacher-level-1-vs-level-2' },
      { label: 'Review information for international candidates', href: '/international-candidates' },
    ],
    courseHref: '/courses/ssi-adult-swim-teacher',
    courseName: 'View SSI Adult Swim Teacher course details',
    whatsappMessage: 'Hi Penguin Academy, I would like to know more about SSI Adult Swim Teacher certification.',
  },
]

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug)
}
