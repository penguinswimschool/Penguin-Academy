const SITE_URL = 'https://www.swimcoachcertification.com';
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const INSTRUCTOR_ID = `${SITE_URL}/#remus-teo`;
const SSI_PROFILE_URL = 'https://my.divessi.com/pro/121320';

type CourseKey = 'level1' | 'level2' | 'baby' | 'adult' | 'reactRight';

interface CourseDefinition {
  path: `/courses/${string}`;
  name: string;
  description: string;
  price: string;
  prerequisites: string;
  credential: string;
  teaches: string[];
}

const courses: Record<CourseKey, CourseDefinition> = {
  level1: {
    path: '/courses/ssi-swim-teacher-level-1',
    name: 'SSI Swim Teacher Level 1',
    description: 'Foundational training for teaching beginner swimmers.',
    price: '1688',
    prerequisites: 'Minimum age 18.',
    credential: 'SSI Swim Teacher Level 1 certification',
    teaches: ['Water safety', 'Floating and gliding', 'Teaching beginner swim lessons'],
  },
  level2: {
    path: '/courses/ssi-swim-teacher-level-2',
    name: 'SSI Swim Teacher Level 2',
    description: 'Advanced stroke development and class progression training.',
    price: '1688',
    prerequisites: 'Minimum age 18 and SSI Swim Teacher Level 1 certification.',
    credential: 'SSI Swim Teacher Level 2 certification',
    teaches: ['Stroke development', 'Technique correction', 'Class progression planning'],
  },
  baby: {
    path: '/courses/baby-and-me-swim-teacher',
    name: 'SSI Baby & Me Swim Teacher',
    description: 'Training to teach parent-child swimming safely.',
    price: '1688',
    prerequisites: 'Minimum age 18.',
    credential: 'SSI Baby & Me Teacher certification',
    teaches: ['Parent-child swim classes', 'Infant water safety', 'Age-appropriate swim activities'],
  },
  adult: {
    path: '/courses/ssi-adult-swim-teacher',
    name: 'SSI Adult Swim Teacher',
    description: 'Training to teach adult beginners and improvers.',
    price: '1688',
    prerequisites: 'Minimum age 18.',
    credential: 'SSI Adult Swim Teacher certification',
    teaches: ['Teaching adult beginners', 'Adult stroke development', 'Adult class progression'],
  },
  reactRight: {
    path: '/courses/react-right-cpr-aed-first-aid',
    name: 'SSI React Right',
    description: 'First Aid and CPR, AED, and Oxygen Provider training.',
    price: '100',
    prerequisites: 'Minimum age 12; no certification prerequisite.',
    credential: 'SSI React Right certification',
    teaches: ['First Aid and CPR', 'AED support', 'Emergency oxygen administration'],
  },
};

function courseUrl(course: CourseDefinition) {
  return `${SITE_URL}${course.path}`;
}

function courseId(course: CourseDefinition) {
  return `${courseUrl(course)}#course`;
}

function courseEntity(course: CourseDefinition, includeOffer = false) {
  const url = courseUrl(course);

  return {
    '@type': 'Course',
    '@id': courseId(course),
    url,
    name: course.name,
    description: course.description,
    inLanguage: 'en-SG',
    provider: { '@id': ORGANIZATION_ID },
    coursePrerequisites: course.prerequisites,
    educationalCredentialAwarded: course.credential,
    teaches: course.teaches,
    ...(includeOffer
      ? {
          offers: {
            '@type': 'Offer',
            price: course.price,
            priceCurrency: 'SGD',
            url,
            seller: { '@id': ORGANIZATION_ID },
          },
        }
      : {}),
  };
}

export const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: 'Penguin Academy',
      inLanguage: 'en-SG',
      publisher: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': ORGANIZATION_ID,
      name: 'Penguin Academy',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/penguinacademylogo512x512.png`,
      email: 'swim@penguinswimschool.sg',
      telephone: '+65 8909 4395',
      areaServed: {
        '@type': 'Country',
        name: 'Singapore',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'course enquiries',
        telephone: '+65 8909 4395',
        email: 'swim@penguinswimschool.sg',
        url: 'https://wa.me/6589094395',
        availableLanguage: 'English',
      },
    },
    {
      '@type': 'Person',
      '@id': INSTRUCTOR_ID,
      name: 'Remus Teo',
      jobTitle: 'SSI Swim Teacher Instructor and React Right Instructor Trainer',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'SSI Pro',
        value: '121320',
      },
      url: SSI_PROFILE_URL,
      sameAs: [SSI_PROFILE_URL],
      worksFor: { '@id': ORGANIZATION_ID },
    },
    ...Object.values(courses).map((course) => courseEntity(course)),
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#course-list`,
      name: 'Penguin Academy courses',
      numberOfItems: 5,
      itemListElement: Object.values(courses).map((course, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: courseUrl(course),
        item: { '@id': courseId(course) },
      })),
    },
  ],
};

export function buildCoursePageStructuredData(courseKey: CourseKey) {
  const course = courses[courseKey];
  const url = courseUrl(course);
  const breadcrumbId = `${url}#breadcrumb`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: course.name,
        description: course.description,
        inLanguage: 'en-SG',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': courseId(course) },
        breadcrumb: { '@id': breadcrumbId },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Courses',
            item: `${SITE_URL}/#courses`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: course.name,
            item: url,
          },
        ],
      },
      courseEntity(course, true),
    ],
  };
}

export const bundlePageStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway#webpage`,
      url: `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway`,
      name: 'Penguin Pro Bundle – Any 2 Teacher Courses',
      description: 'Choose any two SSI teacher courses for SGD 2,888, with full SSI React Right included.',
      inLanguage: 'en-SG',
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway#breadcrumb` },
      mainEntity: { '@id': `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway#service` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: `${SITE_URL}/#courses` },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Penguin Pro Bundle',
          item: `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway`,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway#service`,
      name: 'Penguin Pro Bundle – Any 2 Teacher Courses',
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Country', name: 'Singapore' },
      offers: {
        '@type': 'Offer',
        price: '2888',
        priceCurrency: 'SGD',
        url: `${SITE_URL}/courses/penguin-pro-swim-teacher-pathway`,
        seller: { '@id': ORGANIZATION_ID },
      },
    },
  ],
};
