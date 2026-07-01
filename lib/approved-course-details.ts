export const COURSE_DETAILS = {
  duration: '1 Full Day',
  hours: '9am - 6pm',
  schedule: 'Courses can run every day',
  capacity: '1-8 Students',
  venue: 'CBD / Central Singapore',
  format: 'In-person for Singapore students. Overseas format can be discussed separately.',
  assessment: 'Theory and practical assessment',
} as const;

export const ATTACHMENT_REQUIREMENT =
  'At least 8 in-water attachment sessions with Penguin Swim Classes required to pass';

export const LIFETIME_REFRESHER =
  'Lifetime refresher at a discounted rate (payable by coach)';

export const PENGUIN_SUPPORT = '24/7 Penguin Support';

export const LIFETIME_MENTORSHIP =
  'Lifetime mentorship & training with the Penguin Team';

export const LIFETIME_MEMBERSHIP =
  'Lifetime membership in the Penguin Family';

export const GOOGLE_REVIEWS_URL =
  'https://maps.app.goo.gl/pRTAwpRDUBaw1NKW8';

export function certCourseIncludes(certification: string, includeReactRight = true): string[] {
  const items = [certification];
  if (includeReactRight) {
    items.push('React Right (CPR, AED, First Aid)');
  }
  items.push(
    LIFETIME_MENTORSHIP,
    PENGUIN_SUPPORT,
    LIFETIME_MEMBERSHIP,
    LIFETIME_REFRESHER,
    ATTACHMENT_REQUIREMENT
  );
  return items;
}
