import type { Metadata } from 'next';

const SITE_URL = 'https://www.swimcoachcertification.com';
const SOCIAL_IMAGE = '/penguinacademylogo512x280.jpg';

interface CourseMetadataInput {
  title: string;
  description: string;
  path: `/courses/${string}`;
}

export function buildCourseMetadata({ title, description, path }: CourseMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Penguin Academy',
      locale: 'en_SG',
      type: 'website',
      images: [
        {
          url: SOCIAL_IMAGE,
          width: 512,
          height: 280,
          alt: 'Penguin Academy Singapore',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
