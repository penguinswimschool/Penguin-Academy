import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AcademyTeam() {
  return (
      <section id="about" className="scroll-mt-20 bg-white text-[#0b2438]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Meet your training team</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">Two mentors. One clear path into teaching.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Remus and Rayner guide new coaches through professional instruction, practical teaching, feedback and in-water mentoring. Formal SSI certification is issued only after every applicable requirement is completed.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f8f6] shadow-[0_18px_55px_rgba(11,36,56,0.08)]">
              <div className="grid h-full md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative h-[320px] overflow-hidden bg-slate-200 sm:h-[380px] md:h-[430px] lg:h-[430px]">
                  <Image src="/Remus.png" alt="Remus Teo, SSI Swim Teacher Instructor" fill sizes="(min-width: 1024px) 24vw, 100vw" className="object-cover object-[center_58%] md:origin-bottom md:scale-[1.18]" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Lead Instructor</p>
                  <h3 className="mt-3 text-3xl font-semibold">Remus Teo</h3>
                  <p className="mt-4 leading-7 text-slate-600">Active SSI Swim Teacher Instructor and React Right Instructor Trainer, leading the formal learning, assessment and certification pathway.</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white px-3 py-2">SSI Pro 121320</span><span className="rounded-full bg-white px-3 py-2">Instructor Trainer</span></div>
                  <a href="https://my.divessi.com/pro/121320" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800 transition hover:text-teal-600">Verified SSI profile<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f8f6] shadow-[0_18px_55px_rgba(11,36,56,0.08)]">
              <div className="grid h-full md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative h-[320px] overflow-hidden bg-slate-200 sm:h-[380px] md:h-[430px] lg:h-[430px]">
                  <Image src="/rayner-teo-profile.jpg" alt="Rayner Teo, Penguin Academy trainer and mentor, beside a swimming pool in Singapore" fill sizes="(min-width: 1024px) 24vw, 100vw" className="object-cover object-[center_30%] md:origin-top md:scale-[1.08] md:object-bottom" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Trainer &amp; Mentor</p>
                  <h3 className="mt-3 text-3xl font-semibold">Rayner Teo</h3>
                  <p className="mt-4 leading-7 text-slate-600">Guides aspiring swim coaches through practical teaching, learner confidence and in-water mentoring as an active SSI Swim Teacher and AUSTSWIM Competency Assessor.</p>
                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white px-3 py-2">SSI Pro 126454</span><span className="rounded-full bg-white px-3 py-2">AUSTSWIM Assessor</span></div>
                  <a href="https://my.divessi.com/pro/126454" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 font-bold text-teal-800 transition hover:text-teal-600">Verified SSI profile<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

  );
}
