import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink'

interface InteriorPageHeroProps {
  eyebrow: string
  title: string
  description: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  primaryTrackingSource?: string
  primaryCandidateSegment?: string
  secondaryTrackingSource?: string
  secondaryCandidateSegment?: string
}

export default function InteriorPageHero({ eyebrow, title, description, primaryHref, primaryLabel, secondaryHref, secondaryLabel, primaryTrackingSource, primaryCandidateSegment, secondaryTrackingSource, secondaryCandidateSegment }: InteriorPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#071b2b] pb-16 pt-28 text-white sm:pb-20 sm:pt-36 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(45,212,191,0.17),transparent_34%),radial-gradient(circle_at_12%_90%,rgba(56,189,248,0.13),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>
        {(primaryHref || secondaryHref) && (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryHref && primaryLabel && (primaryTrackingSource
              ? <TrackedWhatsAppLink href={primaryHref} source={primaryTrackingSource} candidateSegment={primaryCandidateSegment} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] transition hover:bg-cyan-200">{primaryLabel}<ArrowRight className="h-4 w-4" /></TrackedWhatsAppLink>
              : <Link href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] transition hover:bg-cyan-200">{primaryLabel}<ArrowRight className="h-4 w-4" /></Link>)}
            {secondaryHref && secondaryLabel && (secondaryTrackingSource
              ? <TrackedWhatsAppLink href={secondaryHref} source={secondaryTrackingSource} candidateSegment={secondaryCandidateSegment} className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">{secondaryLabel}</TrackedWhatsAppLink>
              : <Link href={secondaryHref} className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/10">{secondaryLabel}</Link>)}
          </div>
        )}
      </div>
    </section>
  )
}
