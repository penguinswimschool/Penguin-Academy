'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const courseLinks = [
  { href: '/courses', label: 'View all courses', description: 'Compare every pathway' },
  { href: '/courses/penguin-pro-swim-teacher-pathway', label: 'Penguin Pro Bundle', description: 'Choose any 2 teacher courses' },
  { href: '/courses/ssi-swim-teacher-level-1', label: 'SSI Swim Teacher Level 1', description: 'Foundation pathway' },
  { href: '/courses/ssi-swim-teacher-level-2', label: 'SSI Swim Teacher Level 2', description: 'Advanced progression' },
  { href: '/courses/baby-and-me-swim-teacher', label: 'SSI Baby Swim Teacher', description: 'Parent-child teaching' },
  { href: '/courses/ssi-adult-swim-teacher', label: 'SSI Adult Swim Teacher', description: 'Adult learner pathway' },
  { href: '/courses/react-right-cpr-aed-first-aid', label: 'Full SSI React Right', description: 'First Aid, CPR, AED & Oxygen' },
]

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsCoursesOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#071b2b]/95 text-white shadow-[0_8px_30px_rgba(3,15,25,0.18)] backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:shadow-lg">
        Skip to main content
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="Penguin Academy home" onClick={closeMenus} className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
              <Image src="/5.png" alt="" width={36} height={36} />
            </span>
            <span className="text-lg font-bold tracking-tight text-white sm:text-xl">Penguin Academy</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <Link href="/about" className="font-medium text-slate-200 transition-colors hover:text-cyan-300">About</Link>
            <div className="group relative flex items-center">
              <Link href="/courses" className="font-medium text-slate-200 transition-colors hover:text-cyan-300">Courses</Link>
              <button type="button" aria-label="Open courses menu" aria-expanded={isCoursesOpen} onClick={() => setIsCoursesOpen((open) => !open)} className="ml-1 rounded-md p-1 text-slate-300 transition hover:bg-white/10 hover:text-cyan-300">
                <ChevronDown className={`h-4 w-4 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${isCoursesOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'} absolute left-1/2 top-full mt-4 w-[620px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 text-[#0b2438] shadow-[0_24px_70px_rgba(3,15,25,0.22)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100`}>
                <div className="grid grid-cols-2 gap-1">
                  {courseLinks.map((course, index) => (
                    <Link key={course.href} href={course.href} onClick={closeMenus} className={`rounded-xl px-4 py-3 transition hover:bg-teal-50 ${index === 0 ? 'col-span-2 border-b border-slate-100 bg-[#f6f4ee]' : ''}`}>
                      <span className="block font-bold">{course.label}</span>
                      <span className="mt-0.5 block text-xs text-slate-500">{course.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/course-dates" className="font-medium text-slate-200 transition-colors hover:text-cyan-300">Course Dates</Link>
            <Link href="/blog" className="font-medium text-slate-200 transition-colors hover:text-cyan-300">Guides</Link>
          </nav>

          <Link href="/contact" className="hidden rounded-full bg-cyan-300 px-5 py-2.5 font-bold text-[#071b2b] transition-colors hover:bg-cyan-200 lg:inline-flex">Contact</Link>

          <button type="button" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden" aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#071b2b] lg:hidden">
          <nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">
            <Link href="/about" onClick={closeMenus} className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan-300">About Academy</Link>
            <div className="rounded-xl bg-white/[0.04]">
              <div className="flex items-center justify-between">
                <Link href="/courses" onClick={closeMenus} className="flex-1 px-3 py-3 font-medium text-slate-200 hover:text-cyan-300">Courses</Link>
                <button type="button" onClick={() => setIsCoursesOpen((open) => !open)} aria-label="Toggle course links" aria-expanded={isCoursesOpen} className="mr-1 rounded-lg p-3 text-slate-300 hover:bg-white/10">
                  <ChevronDown className={`h-5 w-5 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {isCoursesOpen && (
                <div className="border-t border-white/10 px-2 py-2">
                  {courseLinks.slice(1).map((course) => (
                    <Link key={course.href} href={course.href} onClick={closeMenus} className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300">{course.label}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/course-dates" onClick={closeMenus} className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan-300">Course Dates</Link>
            <Link href="/blog" onClick={closeMenus} className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan-300">Guides</Link>
            <Link href="/contact" onClick={closeMenus} className="mt-3 block w-full rounded-full bg-cyan-300 px-5 py-3 text-center font-bold text-[#071b2b] transition hover:bg-cyan-200">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
