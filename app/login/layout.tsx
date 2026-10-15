import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Penguin Academy Private Admin Login | Authorised Access',
  description: 'Private authorised access for Penguin Academy administrators.',
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
