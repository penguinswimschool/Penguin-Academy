'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackWhatsAppEnquiry } from '@/lib/analytics'

interface TrackedWhatsAppLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  source: string
  courseName?: string
  candidateSegment?: string
  children: ReactNode
}

export default function TrackedWhatsAppLink({
  href,
  source,
  courseName,
  candidateSegment,
  children,
  onClick,
  ...props
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        trackWhatsAppEnquiry({ source, courseName, candidateSegment })
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
