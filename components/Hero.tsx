import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import TrackedWhatsAppLink from '@/components/TrackedWhatsAppLink';
import { WHATSAPP_URL } from '@/lib/approved-course-details';

export default function Hero() {
  return (
    <section id="hero" className="bg-[#071b2b] pt-16 text-white" aria-labelledby="home-title">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 pb-12 pt-14 sm:px-8 sm:py-20 lg:py-24 lg:pl-10 lg:pr-14">
          <p className="academy-eyebrow text-cyan-200">Penguin Academy · Singapore</p>
          <h1 id="home-title" className="academy-display mt-6 text-[2.7rem] leading-[1.08] sm:text-6xl lg:text-[4.4rem]">
            Swim teacher training.<br />
            <span className="text-[#b9e1dc]">A career with purpose.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Turn your experience in the water into skills you can share. Learn through SSI training, supervised practice and ongoing Penguin mentorship.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#c8e9e4] px-7 py-3.5 font-semibold text-[#071b2b] transition hover:bg-white">
              Explore courses <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/course-dates" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-medium transition hover:bg-white/10">
              View course dates
            </Link>
          </div>
          <div className="mt-9 border-t border-white/15 pt-6">
            <p className="flex items-center gap-2 text-sm text-slate-200"><ShieldCheck className="h-4 w-4 flex-none text-[#b9e1dc]" aria-hidden="true" /> SSI instructor-led · Small cohorts of 1–8</p>
            <TrackedWhatsAppLink href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hi Penguin Academy, please help me choose the right swim teacher and coaching pathway.')}`} source="home_hero_pathway" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-[#b9e1dc] underline decoration-white/30 underline-offset-4 transition hover:text-white">
              Ask us about your pathway <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </TrackedWhatsAppLink>
          </div>
        </div>
        <figure className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-[680px]">
          <Image src="/academy-guided-practice.jpg" alt="Penguin coaches guiding a practical swim teaching session in a Singapore pool" fill priority sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/90 via-transparent to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <span className="academy-eyebrow text-cyan-100">Learning, in the water</span>
            <p className="academy-display mt-3 max-w-sm text-3xl leading-tight text-white">Real practice.<br />Personal guidance.</p>
          </figcaption>
        </figure>
      </div>
      <div className="border-y border-[#dce4df] bg-[#f6f4ee] text-[#0b2438]">
        <dl className="mx-auto grid max-w-7xl divide-y divide-[#dce4df] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          {[
            ['SSI teacher pathways', 'Level 1, Level 2, Baby & Adult'],
            ['Safety training included', 'Full React Right with teacher courses'],
            ['Ongoing Penguin mentorship', 'Support beyond your training'],
          ].map(([title, detail]) => (
            <div key={title} className="py-5 sm:px-5 sm:py-7 first:sm:pl-0 last:sm:pr-0">
              <dt className="text-sm font-semibold">{title}</dt>
              <dd className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
