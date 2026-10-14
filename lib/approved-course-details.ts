export const COURSE_DETAILS = {
  liveDay: '1 instructor-led day',
  hours: '9am - 6pm',
  schedule: 'Flexible dates by arrangement; confirmed dates are shown when available',
  capacity: '1-8 Students',
  venue: 'CBD / Central Singapore',
  format: 'Training is conducted in person in Singapore. International candidates are welcome to enquire; any overseas delivery or apprenticeship arrangement must be confirmed in writing and is not guaranteed.',
  assessment: 'Theory and practical assessments, final exam and supervised apprenticeship',
} as const;

export const WHATSAPP_NUMBER = '6589094395';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const FULL_REACT_RIGHT = 'Full SSI React Right: First Aid & CPR, AED Provider and Oxygen Provider';

export const COURSE_STANDARDS = {
  level1: { minimumAge: '18+', recommendedDuration: '24-28 hours', apprenticeship: 'Supervised apprenticeship: 4 Aquatike and 4 Beginner lessons (recommended cumulative time of at least 4 hours)' },
  level2: { minimumAge: '18+', recommendedDuration: '23-27 hours', prerequisite: 'SSI Swim Teacher Level 1 certification required', apprenticeship: 'Supervised apprenticeship: 4 Intermediate and 2 Advanced lessons (recommended cumulative time of at least 3 hours)' },
  baby: { minimumAge: '18+', recommendedDuration: '8-10 hours', apprenticeship: 'Supervised apprenticeship: 2 Baby Swim I and 2 Baby Swim II lessons (recommended cumulative time of at least 2 hours)' },
  adult: { minimumAge: '18+', recommendedDuration: '22-26 hours (6-8 hours for qualified Level 2 teachers)', apprenticeship: 'Supervised apprenticeship: 1 Adult I and 1 Adult II lesson (recommended cumulative time of at least 2 hours)' },
  reactRight: { minimumAge: '12+', recommendedDuration: '8-12 hours', apprenticeship: 'Practical scenarios, academic assessments and final exam; no swim-teaching apprenticeship' },
} as const;

export const COMPLETION_REQUIREMENTS = 'A digital certification card may be issued only after all applicable SSI academic and in-water requirements are successfully completed, including the Candidate Water Fitness Evaluation when required by the current standard, final exam and programme-specific apprenticeship.';
export const LIFETIME_REFRESHER = 'Lifetime refresher at a discounted rate (payable by coach)';
export const PENGUIN_SUPPORT = '24/7 message access to Penguin Support (replies depend on trainer availability)';
export const LIFETIME_MENTORSHIP = 'Ongoing Penguin mentorship for eligible teacher-course graduates (ask for the current scope and terms)';
export const LIFETIME_MEMBERSHIP = 'Lifetime membership in the Penguin Family';
export const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/pRTAwpRDUBaw1NKW8';

export function whatsappEnquiryUrl(courseTitle: string): string {
  const message = `Hi Penguin Academy, I am interested in ${courseTitle}. Please share the next available date and course details.`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function certCourseIncludes(certification: string, apprenticeship: string): string[] {
  return [`${certification.replace(/ certification/i, '')} training and assessment pathway`, FULL_REACT_RIGHT, 'SSI digital learning before instructor-led training', 'Candidate Water Fitness Evaluation when required by the current standard', 'Theory and practical assessments plus final exam', apprenticeship, COMPLETION_REQUIREMENTS, LIFETIME_MENTORSHIP, PENGUIN_SUPPORT, LIFETIME_MEMBERSHIP, LIFETIME_REFRESHER];
}
