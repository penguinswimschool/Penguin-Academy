import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorised Access | Penguin Academy',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/login',
  },
}

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
