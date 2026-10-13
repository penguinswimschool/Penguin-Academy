import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authorised Access | Penguin Academy',
  robots: {
    index: false,
    follow: false,
  },
}

export default function LoginLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
