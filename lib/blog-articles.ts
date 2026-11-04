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
    comparison?: {
      columns: [string, string, string]
      rows: Array<[string, string, string]>
    }
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
  "slug": "questions-before-booking-ssi-swim-teacher-training",
  "title": "Six questions to ask before booking SSI swim teacher training",
  "seoTitle": "Before You Book SSI Swim Teacher Training: 6 Checks",
  "description": "Ask about assessment, apprenticeship, fees and work-setting recognition before booking SSI swim teacher training in Singapore. Use this checklist.",
  "excerpt": "A practical enrolment checklist to confirm your assessment pathway, dates, quotation and intended teaching setting before booking.",
  "publishedAt": "2026-10-26T08:40:00+08:00",
  "updatedAt": "2026-10-26T08:40:00+08:00",
  "category": "Course planning",
  "image": "/academy-instructor-development.jpg",
  "imageAlt": "Penguin Academy swim teachers developing practical coaching skills in a Singapore pool",
  "readTime": "5 min read",
  "directAnswer": "Before you book swim teacher training, ask for a clear account of how you will complete the course, what your payment covers and whether the qualification suits your intended work. A published training date helps you plan, but you also need to understand the learning and supervised practice around it. Use these questions when discussing an intake with Penguin Academy. Keep the answers together so you can check your availability and prepare before committing to dates.",
  "facts": [
    {
      "label": "Before booking",
      "value": "Confirm the complete pathway"
    },
    {
      "label": "Dates",
      "value": "Separate confirmed and provisional"
    },
    {
      "label": "Quotation",
      "value": "Check your exact inclusions"
    },
    {
      "label": "Recognition",
      "value": "Ask the intended employer or venue"
    }
  ],
  "sections": [
    {
      "id": "1-what-needs-to-happen-before-my-certification-can-be-issued",
      "title": "1. What needs to happen before my certification can be issued?",
      "paragraphs": [
        "Ask the Academy to explain the completion pathway for your chosen course, including what you should finish before attending instructor-led training. Separate tasks you can prepare independently from those that require an instructor or a scheduled lesson.",
        "Penguin Academy’s Level 1 page describes academic and practical assessment, a final exam, supervised apprenticeship and an applicable water fitness evaluation. Ask the Academy to confirm the current requirements for your intake.",
        "Then ask what happens if you need further practice or assessment. Confirm how feedback is given, how another assessment is arranged and whether additional charges apply. These are questions to settle with the Academy, rather than assumed course terms."
      ]
    },
    {
      "id": "2-which-dates-should-i-keep-available-beyond-the-training-day",
      "title": "2. Which dates should I keep available beyond the training day?",
      "paragraphs": [
        "Ask for the expected sequence of digital learning, instructor-led training, assessment and apprenticeship. Mark confirmed appointments separately from dates still being arranged. This is especially useful if you need leave from work or are travelling to Singapore.",
        "The Level 1 course page explains that timing depends on candidate progress and confirmed apprenticeship arrangements. Ask who will coordinate your supervised lessons and how you will receive confirmation.",
        "If your availability is limited to particular evenings or weekends, say so early. Also ask how pool closures or missed sessions would affect your plan. Treat a hoped-for completion date as provisional until the relevant arrangements are confirmed."
      ]
    },
    {
      "id": "3-what-should-i-prepare-for-practical-assessment",
      "title": "3. What should I prepare for practical assessment?",
      "paragraphs": [
        "Describe your swimming background honestly. Explain any previous teaching experience, the time since your last formal assessment and any areas where you would like guidance.",
        "Ask for the practical assessment requirements that apply to your programme and the preparation advice for your current ability. Request the correct equipment list and any documents you need to bring. Avoid planning from a fitness checklist found for a different SSI activity or qualification.",
        "For the teaching component, ask what you should prepare, how your work will be assessed and how the instructor will explain areas for improvement. These answers give your practice a clear purpose before training begins."
      ]
    },
    {
      "id": "4-what-is-included-in-my-written-quotation",
      "title": "4. What is included in my written quotation?",
      "paragraphs": [
        "Review the current course details, then ask for a written quotation for your selected pathway. Check the inclusions against the arrangements you actually need.",
        "The Academy’s Level 1 page says that refresher training, new certifications, venue access, dedicated pool sessions and individual services require separate confirmation and may carry additional fees. Ask which, if any, apply to your plans. Confirm payment terms and cancellation or rescheduling conditions before paying.",
        "If you already hold a safety qualification, share its exact title and expiry date. Ask how it relates to the course arrangements and check its acceptance separately with any intended employer or programme."
      ]
    },
    {
      "id": "5-who-should-confirm-recognition-for-my-intended-teaching-role",
      "title": "5. Who should confirm recognition for my intended teaching role?",
      "paragraphs": [
        "Name the employer, venue or programme you hope to work with. Ask that organisation what qualifications and access arrangements it requires, then share the answer with the Academy when discussing your route.",
        "Penguin Academy’s career guidance separates certification from employment and venue requirements. Completing training does not guarantee a job or income. If you are considering work overseas, check the destination’s requirements before arranging travel.",
        "Keep any confirmation with your course information. A specific employer’s answer is more useful for your decision than a broad description of international recognition."
      ]
    },
    {
      "id": "6-what-support-can-i-use-after-training",
      "title": "6. What support can I use after training?",
      "paragraphs": [
        "The Level 1 page lists ongoing Penguin mentorship for eligible teacher-course graduates and asks candidates to confirm its current scope and terms. Ask who is eligible, what support is available and how to request it.",
        "Discuss the practical preparation you want help with, such as a lesson plan or organising feedback from supervised practice. The Academy’s career page suggests keeping a readiness portfolio. You can begin yours with current qualifications, a simple lesson plan and evidence of supervised feedback."
      ]
    },
    {
      "id": "prepare-one-useful-enquiry",
      "title": "Prepare one useful enquiry",
      "paragraphs": [
        "Send your chosen course, current qualifications, swimming and teaching experience, intended work setting and available dates. Add your questions about assessment, supervised practice, total payable and any deadline you are working towards.",
        "Ask Penguin Academy about your course arrangements before booking. Use the reply to complete your plan, and keep any unresolved arrangements visible until they are confirmed."
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "label": "Penguin Academy Level 1 pathway and inclusions",
      "url": "https://www.swimcoachcertification.com/courses/ssi-swim-teacher-level-1"
    },
    {
      "label": "Penguin Academy course catalogue",
      "url": "https://www.swimcoachcertification.com/courses"
    },
    {
      "label": "Penguin Academy career preparation",
      "url": "https://www.swimcoachcertification.com/swimming-coach-career-singapore"
    }
  ],
  "internalLinks": [
    {
      "label": "Review Level 1 arrangements",
      "href": "/courses/ssi-swim-teacher-level-1"
    },
    {
      "label": "Compare current courses",
      "href": "/courses"
    },
    {
      "label": "Review course dates",
      "href": "/course-dates"
    },
    {
      "label": "Prepare for a teaching role",
      "href": "/swimming-coach-career-singapore"
    }
  ],
  "courseHref": "/courses/ssi-swim-teacher-level-1",
  "courseName": "Review Level 1 course arrangements",
  "whatsappMessage": "Hi Penguin Academy, please help me confirm the completion pathway, dates and inclusions for my chosen SSI swim teacher course."
},
{
  "slug": "choose-two-ssi-swim-teacher-courses-singapore",
  "title": "Which Two SSI Swim Teacher Courses Should You Choose?",
  "seoTitle": "Choosing Two SSI Swim Teacher Courses in Singapore",
  "description": "Choose an SSI swim teacher course pairing around your qualifications, learner group and training time. A practical guide to Penguin Academy’s bundle.",
  "excerpt": "A course-selection checklist to match two SSI teacher courses with your current qualifications, intended learner group and available training time.",
  "publishedAt": "2026-10-24T08:29:57+08:00",
  "updatedAt": "2026-10-24T08:29:57+08:00",
  "category": "Course planning",
  "image": "/academy-instructor-development.jpg",
  "imageAlt": "Penguin Academy swim teachers developing practical coaching skills in a Singapore pool",
  "readTime": "5 min read",
  "directAnswer": "Choose your two SSI swim teacher courses around the learners you want to teach and the qualifications you already hold. If your goal is beginner teaching followed by intermediate and advanced progression, consider Level 1 followed by Level 2. If you want to specialise in parent-child classes or adult swimming, compare Baby Swim Teacher or Adult Swim Teacher against that goal before choosing your pair.",
  "facts": [
    {
      "label": "Choose around",
      "value": "Learner group and current qualifications"
    },
    {
      "label": "Course choice",
      "value": "Any two of four teacher pathways"
    },
    {
      "label": "Level 2 prerequisite",
      "value": "SSI Swim Teacher Level 1"
    },
    {
      "label": "Completion",
      "value": "All applicable programme requirements"
    }
  ],
  "sections": [
    {
      "id": "start-with-the-classes-you-hope-to-teach",
      "title": "Start with the classes you hope to teach",
      "paragraphs": [
        "Write down a specific teaching goal before comparing course names. “I want to teach children who are learning their first swimming skills” is more useful than “I want more certificates”. So is “I want to develop parent-child classes” or “I want to teach adult learners”.",
        "Next, describe your present experience. Include any swim teaching certification, the learner groups you have taught and the parts of teaching you want help with. Someone who swims confidently and someone who already teaches are starting different conversations, even if both are considering the same bundle.",
        "Use this short decision guide as a starting point:",
        "These are planning suggestions. Ask the Academy to confirm eligibility and course sequence for your circumstances before booking."
      ],
      "bullets": [
        "Beginner teaching, then intermediate and advanced progression — Level 1 followed by Level 2",
        "Beginner teaching plus parent-child programmes — Level 1 and Baby Swim Teacher",
        "Beginner teaching plus adult swimming — Level 1 and Adult Swim Teacher",
        "Two specialist learner groups — Baby Swim Teacher and Adult Swim Teacher, with suitability checked for your background"
      ]
    },
    {
      "id": "check-the-level-2-prerequisite-before-choosing-dates",
      "title": "Check the Level 2 prerequisite before choosing dates",
      "paragraphs": [
        "SSI requires Level 1 Swim Teacher certification before Level 2. The official SSI Level 2 standard lists Level 1 as a prerequisite and does not permit an equivalent certification in its place.",
        "If you are new to SSI, discuss how you will complete Level 1 before moving into Level 2. Booking a two-course package does not remove that sequence.",
        "Level 1 covers SSI Aquatike through Beginner programmes; Level 2 extends into Intermediate, Advanced and Swim Team Prep. The Academy’s Level 1 course page explains the foundation route, and its Level 1 versus Level 2 guide helps compare the two."
      ]
    },
    {
      "id": "choose-a-specialisation-for-a-clear-reason",
      "title": "Choose a specialisation for a clear reason",
      "paragraphs": [
        "The Baby Swim Teacher course prepares candidates for SSI Baby Swim I and II parent-child programmes. A parent or guardian is in the water and directly supervises the child. Consider this route if working with babies and their accompanying adults is the kind of teaching you want to develop.",
        "The Adult Swim Teacher course focuses on SSI adult swimming programmes. Before selecting it, think about what draws you to adult teaching and the experience you can bring to that setting.",
        "You can be interested in several groups while choosing one immediate priority. Ask which pair supports the classes you hope to teach first, then discuss what further development would make sense later."
      ]
    },
    {
      "id": "plan-time-beyond-the-instructor-led-days",
      "title": "Plan time beyond the instructor-led days",
      "paragraphs": [
        "The bundle includes two instructor-led days. Each selected pathway also has its own completion requirements. Digital learning, applicable water fitness evaluation, assessments, the final exam and supervised apprenticeship all need to be considered when planning your availability. Certification follows successful completion of the applicable requirements. Review the published bundle inclusions.",
        "For example, SSI’s Adult Swim Teacher standard recommends 22–26 hours for completion, or 6–8 hours for candidates who are already Level 2 Swim Teachers. Recommended programme hours and calendar dates are different things. Ask how the relevant training and apprenticeship can fit your actual schedule."
      ]
    },
    {
      "id": "send-one-enquiry-that-answers-the-practical-questions",
      "title": "Send one enquiry that answers the practical questions",
      "paragraphs": [
        "Before you pay, prepare these details:",
        "Ask for confirmation of the course order, the full completion pathway and the current total payable. If you intend to use the qualification with a particular employer or facility, check that organisation’s requirements separately.",
        "Ask Penguin Academy to check your course pairing. Include your existing qualifications and preferred learner group so the discussion starts with the route that fits your goal."
      ],
      "bullets": [
        "The two courses you are considering and your reason for choosing them.",
        "Your current swim teaching qualifications and experience.",
        "The learners and setting you hope to teach in.",
        "Your available training dates and time for apprenticeship.",
        "Any deadline you are working towards."
      ]
    }
  ],
  "faqs": [
    {
      "question": "Does a two-course bundle remove the Level 2 prerequisite?",
      "answer": "No. SSI Swim Teacher Level 1 certification is required before Level 2."
    },
    {
      "question": "Does attending two instructor-led days complete certification?",
      "answer": "No. Candidates must successfully complete every applicable programme-specific requirement, including the required academic and practical work."
    }
  ],
  "sources": [
    {
      "label": "Penguin Academy current bundle inclusions",
      "url": "https://www.swimcoachcertification.com/courses/penguin-pro-swim-teacher-pathway"
    },
    {
      "label": "SSI Level 2 standard",
      "url": "https://training.divessi.com/index.php?L=0&extauth%5Baction%5D=previewaccess&id=22820368&logintype=login"
    },
    {
      "label": "SSI Adult Swim Teacher standard",
      "url": "https://training.divessi.com/en-au/course/swim-standards/professional-programs-2/swim-professional-programs/adult-swim-teacher"
    }
  ],
  "internalLinks": [
    {
      "label": "Compare the two-course bundle",
      "href": "/courses/penguin-pro-swim-teacher-pathway"
    },
    {
      "label": "Level 1 course",
      "href": "/courses/ssi-swim-teacher-level-1"
    },
    {
      "label": "Level 1 versus Level 2 guide",
      "href": "/blog/ssi-swim-teacher-level-1-vs-level-2"
    },
    {
      "label": "Baby Swim Teacher",
      "href": "/courses/baby-and-me-swim-teacher"
    },
    {
      "label": "Adult Swim Teacher",
      "href": "/courses/ssi-adult-swim-teacher"
    },
    {
      "label": "Ask about your pairing",
      "href": "/contact"
    }
  ],
  "courseHref": "/courses/penguin-pro-swim-teacher-pathway",
  "courseName": "Explore the two-course bundle",
  "whatsappMessage": "Hi Penguin Academy, please help me choose two SSI teacher courses for my current qualifications and intended learner group."
},
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
    internalLinks: [
      { label: 'Compare SSI and NROC pathways', href: '/blog/ssi-vs-nroc-swimming-instructor-certification-singapore' },
      { label: 'Review SSI Swim Teacher Level 1', href: '/courses/ssi-swim-teacher-level-1' },
      { label: 'Understand the Level 1 apprenticeship', href: '/blog/ssi-swim-teacher-level-1-apprenticeship-singapore' },
      { label: 'Compare all Penguin Academy courses', href: '/courses' },
      { label: 'Information for international candidates', href: '/international-candidates' },
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
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820367' },
      { label: 'SSI Level 2 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820368' },
    ],
    internalLinks: [
      { label: 'Compare SSI and NROC pathways', href: '/blog/ssi-vs-nroc-swimming-instructor-certification-singapore' },
      { label: 'Read the Singapore swimming-instructor pathway', href: '/blog/how-to-become-certified-swimming-instructor-singapore' },
      { label: 'Understand the Level 1 apprenticeship', href: '/blog/ssi-swim-teacher-level-1-apprenticeship-singapore' },
      { label: 'Compare SSI Level 1 and Level 2', href: '/blog/ssi-swim-teacher-level-1-vs-level-2' },
      { label: 'View upcoming course dates', href: '/course-dates' },
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
    updatedAt: '2026-10-14T16:05:00+08:00',
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
      { label: 'SSI React Right training standard', url: 'https://training.divessi.com/index.php?id=22807793' },
      { label: 'SSI React Right Update standard', url: 'https://training.divessi.com/index.php?id=22820380' },
    ],
    internalLinks: [
      { label: 'View the full SSI React Right course', href: '/courses/react-right-cpr-aed-first-aid' },
      { label: 'Compare all SSI swim teacher courses', href: '/courses' },
      { label: 'Review the SSI Level 1 pathway', href: '/courses/ssi-swim-teacher-level-1' },
      { label: 'View upcoming course dates', href: '/course-dates' },
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
    updatedAt: '2026-10-14T16:05:00+08:00',
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
    internalLinks: [
      { label: 'View the SSI Baby Swim Teacher course', href: '/courses/baby-and-me-swim-teacher' },
      { label: 'Compare all SSI swim teacher courses', href: '/courses' },
      { label: 'Understand full SSI React Right training', href: '/blog/ssi-react-right-cpr-aed-oxygen-provider-explained' },
      { label: 'Review information for international candidates', href: '/international-candidates' },
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
    updatedAt: '2026-10-14T16:05:00+08:00',
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
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820367' },
      { label: 'SSI Level 2 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820368' },
    ],
    internalLinks: [
      { label: 'View SSI Swim Teacher Level 1', href: '/courses/ssi-swim-teacher-level-1' },
      { label: 'View SSI Swim Teacher Level 2', href: '/courses/ssi-swim-teacher-level-2' },
      { label: 'Compare the any-two-course bundle', href: '/courses/penguin-pro-swim-teacher-pathway' },
      { label: 'View upcoming course dates', href: '/course-dates' },
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
    updatedAt: '2026-10-14T16:05:00+08:00',
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
      { label: 'SSI Adult Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820369' },
      { label: 'SSI React Right training standard', url: 'https://training.divessi.com/index.php?id=22807793' },
    ],
    internalLinks: [
      { label: 'View the SSI Adult Swim Teacher course', href: '/courses/ssi-adult-swim-teacher' },
      { label: 'Compare all SSI swim teacher courses', href: '/courses' },
      { label: 'Read the Singapore swimming-instructor pathway', href: '/blog/how-to-become-certified-swimming-instructor-singapore' },
      { label: 'Compare SSI Level 1 and Level 2', href: '/blog/ssi-swim-teacher-level-1-vs-level-2' },
      { label: 'Review information for international candidates', href: '/international-candidates' },
    ],
    courseHref: '/courses/ssi-adult-swim-teacher',
    courseName: 'View SSI Adult Swim Teacher course details',
    whatsappMessage: 'Hi Penguin Academy, I would like to know more about SSI Adult Swim Teacher certification.',
  },
  {
    slug: 'ssi-vs-nroc-swimming-instructor-certification-singapore',
    title: 'SSI vs NROC in Singapore: Which Swim Coach Path Should You Choose?',
    seoTitle: 'SSI vs NROC Singapore: Swim Coach Pathways Compared',
    description: 'Compare SSI swim teacher certification with Singapore’s NROC coaching registry, including their purpose, requirements, teaching settings and when both may help.',
    excerpt: 'A source-backed comparison of SSI swim teacher certification, SG-Coach training and Singapore’s NROC registry—without treating them as equivalent credentials.',
    publishedAt: '2026-10-14T11:50:00+08:00',
    updatedAt: '2026-10-14T11:50:00+08:00',
    category: 'Singapore pathways',
    image: '/academy-ssi-learning-community.jpg',
    imageAlt: 'Penguin Academy swim teachers completing professional development together in Singapore',
    readTime: '9 min read',
    directAnswer: 'SSI and NROC are not interchangeable. SSI Level 1 is a professional training and certification pathway for teaching specified SSI learn-to-swim programmes. NROC is Singapore’s national coaching registry and recognition framework, normally supported by SG-Coach qualifications. The right route depends on your intended employer, venue and programme; some coaches may benefit from pursuing both.',
    facts: [
      { label: 'SSI Level 1', value: 'Swim-teacher certification' },
      { label: 'NROC', value: 'Singapore coaching registry' },
      { label: 'Automatic equivalence', value: 'No official basis found' },
      { label: 'Best choice', value: 'Depends on teaching setting' },
    ],
    sections: [
      {
        id: 'not-like-for-like',
        title: 'First, correct the terminology: these are different systems',
        paragraphs: [
          'SSI Swim Teacher Level 1 is a specific professional programme. It trains and assesses candidates to conduct designated SSI learn-to-swim programmes. Candidates who complete the applicable academic, in-water, examination and apprenticeship requirements may receive an SSI digital certification card.',
          'The National Registry of Coaches, or NROC, is not one swimming course. It is Singapore’s national coaching database and recognition framework. The normal Level 1 pathway combines SG-Coach Theory, Foundational Sport Science and a sport-specific SG-Coach Technical qualification, or an approved Full Integration programme, together with the other current membership requirements.',
          'This means “SSI or NROC?” is not a simple comparison between two versions of the same certificate. One documents training within SSI’s swim-teacher system; the other records coaches who meet Singapore’s registry requirements.',
        ],
      },
      {
        id: 'comparison',
        title: 'SSI Level 1 and NROC at a glance',
        comparison: {
          columns: ['Question', 'SSI Swim Teacher Level 1', 'SG-Coach / NROC pathway'],
          rows: [
            ['What is it?', 'A professional swim-teacher training and certification programme within SSI.', 'SG-Coach qualifications support an application to Singapore’s national coaching registry.'],
            ['Primary purpose', 'Prepare candidates to teach specified SSI Aquatike and Beginner programmes.', 'Recognise coaches who meet Singapore’s coaching, safety, ethics and development requirements.'],
            ['Who administers it?', 'SSI, through an eligible active-status SSI professional.', 'CoachSG/SportSG administers NROC; the relevant National Sports Association oversees sport-specific technical accreditation.'],
            ['Core pathway', 'Digital learning, supervised training, assessments, final exam and programme-specific apprenticeship.', 'Theory, sport science and sport-specific technical components, or an eligible integrated route, plus current registry requirements.'],
            ['Ongoing requirements', 'Follow the current SSI standards and active-status requirements relevant to the rating.', 'Membership is valid for three years and requires ongoing coaching practice and continuing coach education for renewal.'],
            ['Does it grant every type of pool access?', 'No. Employers and venues set separate requirements.', 'No. A particular facility or programme may impose permits and additional credentials.'],
          ],
        },
      },
      {
        id: 'ssi-level-one',
        title: 'What SSI Swim Teacher Level 1 covers',
        paragraphs: [
          'The current SSI standard sets a minimum candidate age of 18 and recommends 24–28 hours for completion. The programme prepares candidates to conduct SSI Aquatike I–III and Beginner I–III when they hold the applicable active status.',
          'Completion includes the applicable Candidate Water Fitness Evaluation, academic sections and assessments, the final exam and at least four Aquatike lessons plus four Beginner lessons. SSI recommends a cumulative apprenticeship time of at least four hours.',
          'Penguin Academy’s current Level 1 fee is SGD 1,688 and includes full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider. That commercial package does not remove any SSI completion requirement or automatically satisfy a separate employer, venue or NROC first-aid requirement.',
        ],
      },
      {
        id: 'nroc-pathway',
        title: 'What the SG-Coach and NROC pathway involves',
        paragraphs: [
          'CoachSG describes the usual SG-Coach Level 1 route as SG-Coach Theory Level 1, Foundational Sport Science and SG-Coach Technical Level 1 offered by the relevant National Sports Association. An SG-Coach Full Integration Level 1 route may also be available. Singapore Aquatics publishes the current swimming-coach training information for its pathway.',
          'NROC membership also carries professional obligations. CoachSG states that membership lasts three years, and active renewal includes coaching-practice and continuing-education requirements. Applicants should use the current NROC guidance rather than relying on an old course advertisement or a third-party summary.',
          'There is no single reliable NROC price or completion time to compare with Penguin Academy’s SSI fee because the registry pathway can involve multiple qualifications, providers, assessments and an application. Check each current official component before budgeting or committing to a deadline.',
        ],
      },
      {
        id: 'teaching-settings',
        title: 'Which requirements apply in different teaching settings?',
        bullets: [
          'Private swim schools and condominium pools: ask the employer and venue for their current qualification, insurance, access and safeguarding requirements.',
          'ActiveSG facilities: ActiveSG states that coaches using its facilities require valid NROC status and a Usage Permit.',
          'SportSG Sports Education Programme: participating school programmes require NROC-certified coaches; swimming coaches also need valid SwimSafer certification, with MOE registration required where applicable.',
          'SSI programmes: the appropriate active-status SSI rating determines which SSI programmes the teacher may conduct.',
          'International work: ask the destination country, employer and facility whether the credential and training pathway meet their rules before booking travel.',
        ],
        paragraphs: [
          'No official source reviewed for this guide establishes either SSI or NROC as a universal licence for every swimming-teaching job in Singapore. Requirements are setting-specific and can change.',
        ],
      },
      {
        id: 'recognition',
        title: 'Can SSI certification count toward NROC?',
        paragraphs: [
          'No official source reviewed states that SSI Level 1 automatically grants NROC membership, replaces SG-Coach Technical Level 1 or qualifies for a direct waiver. Do not enrol on the assumption that conversion is automatic.',
          'CoachSG provides Recognition of Prior Learning, Recognition of Prior Experience and accreditation processes for some applicants with other qualifications or substantial experience. Decisions are made through the relevant process, with sport-specific technical matters involving the appropriate National Sports Association. Confirm your individual eligibility with CoachSG and Singapore Aquatics before relying on an exemption.',
        ],
      },
      {
        id: 'decision',
        title: 'Which pathway should you choose?',
        bullets: [
          'Choose SSI Level 1 when your goal is to train and qualify within SSI’s learn-to-swim system.',
          'Follow the SG-Coach and NROC route when your intended role, facility or programme requires NROC registration.',
          'Consider both when your career plan spans SSI programme delivery and Singapore settings that separately require NROC status.',
          'Ask the intended employer, venue or programme for its current requirements in writing before enrolling.',
          'Verify any proposed recognition or exemption directly with CoachSG and the relevant National Sports Association.',
        ],
        paragraphs: [
          'Neither route is universally “better.” The stronger choice is the pathway—or combination of pathways—that matches the people you want to teach and the settings where you intend to work.',
        ],
      },
      {
        id: 'international-candidates',
        title: 'A note for international candidates',
        paragraphs: [
          'International candidates are welcome to enquire about SSI training with Penguin Academy in Singapore. Confirm the complete in-person training and apprenticeship arrangements, travel costs and whether your intended employer or country recognises the credential for its purpose.',
          'NROC is a Singapore registry. The NROC handbook dated 23 October 2023 states that a foreign applicant must provide a valid Work Pass or Letter of Consent authorising coaching services. Immigration and permission to work are separate from completing a training course.',
        ],
      },
    ],
    faqs: [
      { question: 'Is SSI the same as NROC?', answer: 'No. SSI Level 1 is a swim-teacher training and certification programme. NROC is Singapore’s national coaching registry and recognition framework, normally supported by SG-Coach qualifications.' },
      { question: 'Do I need NROC to teach swimming in Singapore?', answer: 'It depends on the setting. Official sources expressly require NROC for ActiveSG coaching access and SportSG Sports Education Programme delivery, while private employers and venues may set their own requirements.' },
      { question: 'Can an SSI teacher coach at ActiveSG pools?', answer: 'SSI certification alone does not establish ActiveSG access. ActiveSG states that coaches using its facilities need valid NROC status and a Usage Permit.' },
      { question: 'Does SSI Level 1 automatically qualify for NROC?', answer: 'No official source reviewed establishes automatic equivalence or a direct waiver. Ask CoachSG and Singapore Aquatics whether your individual qualifications may be considered through an applicable recognition or accreditation process.' },
      { question: 'Is SSI React Right automatically accepted as NROC Standard First Aid?', answer: 'Do not assume so. Confirm the exact accepted first-aid credential with CoachSG, the employer or the relevant programme before relying on React Right for that requirement.' },
      { question: 'Which route is better for a private swim school?', answer: 'Ask the school and its venues for their current requirements. SSI may suit teaching within SSI programmes, while some employers or facilities may separately require NROC or other credentials.' },
      { question: 'Can I pursue both SSI and NROC?', answer: 'The systems serve different purposes and are not presented as mutually exclusive. Pursuing both may be useful for some career plans, subject to meeting each pathway’s requirements.' },
      { question: 'Can international candidates take SSI training in Singapore?', answer: 'Yes, international candidates may enquire. Confirm training, apprenticeship, travel, local work rights and recognition requirements before booking.' },
    ],
    sources: [
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820367' },
      { label: 'CoachSG National Registry of Coaches', url: 'https://coachsg.sportsingapore.gov.sg/nroc' },
      { label: 'CoachSG Participation Coach pathway', url: 'https://coachsg.sportsingapore.gov.sg/participation-coach' },
      { label: 'SportSG National Registry of Coaches overview', url: 'https://www.sportsingapore.gov.sg/support-resources/national-registry-of-coaches/' },
      { label: 'Singapore Aquatics swimming coaching pathway', url: 'https://www.sgaquatics.org.sg/swimming/coaching/' },
      { label: 'ActiveSG coaching requirements', url: 'https://ask.gov.sg/activesg/questions/cm0avawmm000ltcp8l1gqg58w' },
      { label: 'SportSG Sports Education Programme', url: 'https://www.sportsingapore.gov.sg/sport-education/sports-education-programme/' },
      { label: 'NROC handbook dated 23 October 2023', url: 'https://coachsg.sportsingapore.gov.sg/hubfs/CID_NROC%20Handbook%20%2820231023%29.pdf' },
    ],
    internalLinks: [
      { label: 'Read the Singapore swimming-instructor pathway', href: '/blog/how-to-become-certified-swimming-instructor-singapore' },
      { label: 'Review SSI Swim Teacher Level 1 requirements', href: '/blog/ssi-swim-teacher-level-1-requirements-cost-career-path' },
      { label: 'Compare all Penguin Academy courses', href: '/courses' },
      { label: 'Information for international candidates', href: '/international-candidates' },
    ],
    courseHref: '/courses/ssi-swim-teacher-level-1',
    courseName: 'View SSI Swim Teacher Level 1',
    whatsappMessage: 'Hi Penguin Academy, I would like help comparing the SSI and NROC pathways for my teaching goals.',
  },
  {
    slug: 'ssi-swim-teacher-level-1-apprenticeship-singapore',
    title: 'What Does the SSI Swim Teacher Level 1 Apprenticeship Involve?',
    seoTitle: 'SSI Level 1 Swim Teacher Apprenticeship in Singapore',
    description: 'Understand the eight supervised SSI Level 1 apprenticeship lessons, recommended four-hour total and what must be completed before certification.',
    excerpt: 'A clear explanation of the supervised Aquatike and Beginner lessons required beyond the instructor-led training day.',
    publishedAt: '2026-10-21T11:00:00+08:00',
    updatedAt: '2026-10-21T11:00:00+08:00',
    category: 'Practical training',
    image: '/academy-practical-training.jpg',
    imageAlt: 'Penguin coaches supporting swimmers during pool lessons in Singapore',
    readTime: '5 min read',
    directAnswer: 'SSI Swim Teacher Level 1 candidates must complete at least four Aquatike lessons and four Beginner lessons as supervised apprenticeship training. SSI recommends a cumulative apprenticeship time of at least four hours. These lessons are part of the complete certification pathway, not a substitute for academic work, assessment, the final exam or any applicable water fitness evaluation.',
    facts: [
      { label: 'Aquatike lessons', value: 'At least 4' },
      { label: 'Beginner lessons', value: 'At least 4' },
      { label: 'Recommended apprenticeship time', value: 'At least 4 hours total' },
      { label: 'SSI recommended full programme', value: '24–28 hours' },
    ],
    sections: [
      {
        id: 'what-counts',
        title: 'What does SSI require for the apprenticeship?',
        paragraphs: [
          'The current SSI Level 1 standard specifies at least four lessons in Aquatike and four lessons in Beginner, with a recommended cumulative apprenticeship time of at least four hours. The lesson count is a requirement; the four-hour figure is SSI’s recommendation for the cumulative apprenticeship time.',
          'This practical component gives candidates supervised experience within the programmes they are training to teach. It is one part of SSI’s recommended 24–28 hours for the complete Level 1 programme, not an extra four hours that can be assumed to replace the rest of the training.',
        ],
      },
      {
        id: 'supervision',
        title: 'Who supervises the lessons?',
        paragraphs: [
          'SSI requires an active-status Swim Teacher Instructor to directly supervise and evaluate the academic and in-water training sessions. During the apprenticeship, an active-status Level 1 Teacher Mentor or higher may directly supervise candidates.',
          'Ask the training centre how your apprenticeship sessions will be arranged, who will supervise them and how completion will be recorded. The actual timing depends on the available lessons, candidate progress and confirmed arrangements.',
        ],
      },
      {
        id: 'before-certification',
        title: 'Is finishing eight lessons enough to receive the certification?',
        paragraphs: [
          'No. SSI says the Level 1 digital certification card may be issued by a Swim Teacher Instructor only after all academic and in-water requirements are completed. The standard also calls for the programme’s final exam and a Candidate Water Fitness Evaluation when the previous evaluation is more than six months old.',
          'An instructor-led training day, the apprenticeship lesson count and the certification decision are distinct steps. Do not assume that attending a single day or logging eight lessons alone results in certification.',
        ],
      },
      {
        id: 'questions-to-ask',
        title: 'Questions to ask before you enrol',
        bullets: [
          'Where and when are Aquatike and Beginner apprenticeship lessons expected to take place?',
          'Who will supervise the apprenticeship and confirm completion?',
          'How should I prepare for the digital learning, assessments and final exam?',
          'Will I need a new Candidate Water Fitness Evaluation?',
          'If I am travelling to Singapore, how should I plan for the complete in-person pathway rather than only the instructor-led day?',
        ],
      },
    ],
    faqs: [
      { question: 'How many SSI Level 1 apprenticeship lessons are required?', answer: 'At least four Aquatike lessons and four Beginner lessons.' },
      { question: 'Does the apprenticeship take exactly four hours?', answer: 'SSI recommends a cumulative apprenticeship time of at least four hours. The actual schedule depends on the lessons and arrangements confirmed for the candidate.' },
      { question: 'Can I receive SSI Level 1 certification after one training day?', answer: 'No. The applicable academic and in-water work, final exam, apprenticeship and water fitness requirement must be completed before a Swim Teacher Instructor may issue the certification.' },
      { question: 'Can international candidates complete the apprenticeship in Singapore?', answer: 'International candidates may enquire. Confirm the full training and apprenticeship arrangements, travel needs and recognition of the certification in the setting where you intend to teach before booking.' },
    ],
    sources: [
      { label: 'SSI Level 1 Swim Teacher training standard', url: 'https://training.divessi.com/index.php?id=22820367' },
    ],
    internalLinks: [
      { label: 'Review the SSI Level 1 course', href: '/courses/ssi-swim-teacher-level-1' },
      { label: 'Compare all SSI swim teacher courses', href: '/courses' },
      { label: 'Information for international candidates', href: '/international-candidates' },
    ],
    courseHref: '/courses/ssi-swim-teacher-level-1',
    courseName: 'Explore SSI Swim Teacher Level 1',
    whatsappMessage: 'Hi Penguin Academy, please explain how the SSI Swim Teacher Level 1 apprenticeship is arranged.',
  },
{
  "slug": "travelling-singapore-swim-teacher-training-plan",
  "title": "Travelling to Singapore for swim teacher training: plan your whole stay",
  "seoTitle": "Travelling to Singapore for Swim Teacher Training: Plan Your Stay",
  "description": "Plan a Singapore swim teacher training trip around confirmed sessions, supervised practice and assessment, with a worksheet for overseas candidates.",
  "excerpt": "Plan a Singapore swim teacher training trip around confirmed sessions, supervised practice and assessment, with a worksheet for overseas candidates.",
  "publishedAt": "2026-10-30",
  "updatedAt": "2026-10-30",
  "category": "International candidates",
  "image": "/academy-poolside-coaching.jpg",
  "imageAlt": "Penguin Swim School coach guiding a young swimmer during poolside practice",
  "readTime": "7 min read",
  "directAnswer": "Before booking a trip for swim teacher training in Singapore, map the activities you need to attend against the dates you can be here.  Keep every unconfirmed session visible.  A course-day booking alone is not enough to decide when you can fly home with a completed qualification.",
  "facts": [
    {
      "label": "Before booking travel",
      "value": "Confirm the complete course and supervised-practice timetable"
    },
    {
      "label": "Level 1 apprenticeship",
      "value": "SSI standard includes four Aquatike and four Beginner lessons"
    },
    {
      "label": "Overseas training",
      "value": "Confirm course arrangements and relevant entry requirements for your circumstances"
    },
    {
      "label": "Trip length",
      "value": "Do not assume a course day determines your return date"
    }
  ],
  "sections": [
    {
      "id": "a-useful-starting-point",
      "title": "A useful starting point",
      "paragraphs": [
        "Before booking a trip for swim teacher training in Singapore, map the activities you need to attend against the dates you can be here. Keep every unconfirmed session visible. A course-day booking alone is not enough to decide when you can fly home with a completed qualification.",
        "Penguin Academy welcomes international enquiries, with in-person practical training in Singapore. Any plan involving overseas delivery or apprenticeship must be agreed in writing for the specific course. Its international candidate information explains these boundaries.",
        "This guide gives you a travel worksheet to complete with the Academy once you have a course in mind. It helps you decide whether a proposed visit fits the arrangements that can actually be confirmed."
      ]
    },
    {
      "id": "start-with-the-dates-you-cannot-change",
      "title": "Start with the dates you cannot change",
      "paragraphs": [
        "Write down your earliest arrival, latest departure and any work or family commitments during the visit. Include the hours you are unavailable on travel days. A date shown as free in your calendar may still contain a flight, a border crossing or a transfer to accommodation.",
        "Then record where you intend to use the qualification. Ask the intended employer or facility to confirm its requirements before treating a training trip as the final step towards a job. Keep that answer with your course plan so you can check that you are working towards the right qualification.",
        "Avoid choosing a return flight simply by counting forward from the instructor-led day. First establish which activities need a scheduled session and which arrangements are still being discussed."
      ]
    },
    {
      "id": "make-a-session-map-not-just-a-course-day-reminder",
      "title": "Make a session map, not just a course-day reminder",
      "paragraphs": [
        "For SSI Level 1, the official standard includes academic work and assessments, a final exam, an applicable water fitness evaluation and supervised apprenticeship. The apprenticeship includes at least four Aquatike and four Beginner lessons. SSI recommends at least four cumulative apprenticeship hours; it does not present that recommendation as a guaranteed trip length. SSI Level 1 Swim Teacher standard.",
        "Use the requirements for your chosen programme. Do not copy the Level 1 lesson count into a plan for Baby, Adult or another pathway.",
        "Fill in this worksheet with the Academy. “To confirm” is a useful entry because it shows exactly what still affects your travel decision.",
        "Ask for times in Singapore time and put them into your travel calendar with that time zone attached. Keep the written confirmation beside the calendar entry."
      ],
      "comparison": {
        "columns": [
          "Part of the plan",
          "Details to record",
          "Status"
        ],
        "rows": [
          [
            "Course and prerequisites",
            "Exact programme; qualifications reviewed; outstanding evidence",
            "Confirmed / to confirm"
          ],
          [
            "Preparation before arrival",
            "Learning tasks, access and any agreed preparation deadline",
            "Confirmed / to confirm"
          ],
          [
            "Instructor-led sessions",
            "Date, start and finish time, exact venue",
            "Confirmed / to confirm"
          ],
          [
            "Practical evaluation and assessments",
            "Required sessions, location and how they are arranged",
            "Confirmed / to confirm"
          ],
          [
            "Supervised apprenticeship",
            "Applicable learner groups, supervising arrangement and actual lesson dates",
            "Confirmed / to confirm"
          ],
          [
            "Further practice or reassessment",
            "What happens if more work is needed; timing and charges to check",
            "Confirmed / to confirm"
          ],
          [
            "Certification review",
            "Who checks completion and how outstanding requirements will be communicated",
            "Confirmed / to confirm"
          ]
        ]
      }
    },
    {
      "id": "decide-what-an-unresolved-date-means-for-your-trip",
      "title": "Decide what an unresolved date means for your trip",
      "paragraphs": [
        "Suppose your instructor-led session is confirmed, but the supervised lessons have no agreed dates. That plan has a clear gap. Before paying for travel, ask whether suitable sessions can be arranged within your available window and what happens if they cannot.",
        "If your departure date is fixed, say so at the start. A hoped-for extension to your stay should not carry an essential part of the plan. If you are considering a later visit, record that as a separate proposal until the Academy confirms the relevant arrangements.",
        "This is also the point to discuss extra practice. Ask how a candidate who needs further work receives feedback and how the next session is arranged. Budgeting for a possible change is your planning choice; it is not evidence that another session will be available."
      ]
    },
    {
      "id": "check-entry-and-training-permission-for-your-own-circumstances",
      "title": "Check entry and training permission for your own circumstances",
      "paragraphs": [
        "Start with the current Singapore entry requirements from the Immigration & Checkpoints Authority. Separately, ask the relevant authority to clarify the permission needed for your full intended activity, explicitly including any supervised practical training.",
        "This article does not determine your immigration eligibility or recommend a particular pass. Get any necessary answer before making a non-refundable commitment. A course reservation does not settle that question."
      ]
    },
    {
      "id": "put-the-confirmed-venues-into-your-accommodation-plan",
      "title": "Put the confirmed venues into your accommodation plan",
      "paragraphs": [
        "The Academy’s contact page describes the training area as CBD / Central Singapore and says the applicable venue is shared with enrolled candidates. Use the exact confirmed session locations when comparing accommodation and travel routes. Penguin Academy contact information.",
        "Allow for arrival, changing and preparation when building your daily plan. Ask what you need to bring, where you should meet and who to contact if travel disruption affects your arrival. Save those details where you can access them during the journey.",
        "Keep your course quotation separate from your personal travel budget. Add flights or other transport, accommodation, meals, local travel, insurance and any relevant administrative costs. Record what you have actually been quoted and leave unknown amounts blank instead of presenting an estimate as a confirmed total."
      ]
    },
    {
      "id": "bring-one-completed-planning-note-to-the-conversation",
      "title": "Bring one completed planning note to the conversation",
      "paragraphs": [
        "Your first note can be short: your country of residence, chosen course, current qualifications, intended teaching setting, earliest arrival and latest departure. Add the timetable restrictions that would make a proposed session impossible.",
        "Ask Penguin Academy to review your proposed training window. Use the reply to complete the worksheet, resolve the remaining dates and decide when you have enough confirmed information to arrange your trip."
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "label": "SSI Level 1 Swim Teacher standard",
      "url": "https://training.divessi.com/index.php?id=22820367"
    },
    {
      "label": "Singapore entry requirements from the Immigration & Checkpoints Authority",
      "url": "https://www.ica.gov.sg/information-and-e-services/entry-and-departure/entering-singapore/entry-requirements"
    }
  ],
  "internalLinks": [
    {
      "label": "international candidate information",
      "href": "/international-candidates"
    },
    {
      "label": "Penguin Academy contact information",
      "href": "/contact"
    }
  ],
  "courseHref": "/international-candidates",
  "courseName": "Review information for international candidates",
  "whatsappMessage": "Hi Penguin Academy, I am considering travelling to Singapore for swim teacher training. Could you help me check the complete course and supervised-practice dates for my available window?"
}
]

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug)
}
