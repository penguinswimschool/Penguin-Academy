import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Account | Penguin Academy',
  description: 'Authorised access to the Penguin Academy client account.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  alternates: {
    canonical: 'https://www.swimcoachcertification.com/account',
  },
}

export default function AccountLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
