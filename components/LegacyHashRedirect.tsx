"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const legacyDestinations: Record<string, string> = {
  '#about': '/about',
  '#courses': '/courses',
  '#calendar': '/course-dates',
}

export default function LegacyHashRedirect() {
  const router = useRouter()

  useEffect(() => {
    const destination = legacyDestinations[window.location.hash.toLowerCase()]

    if (destination) {
      router.replace(destination)
    }
  }, [router])

  return null
}
