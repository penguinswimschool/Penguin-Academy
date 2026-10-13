import React from 'react';
import { ArrowRight, Award, CheckCircle, Shield, Sparkles, Users } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onContactClick: () => void;
}

const trustPoints = [
  'Verified SSI instructor-led training',
  'Small cohorts of 1–8 candidates',
  'Full React Right included with teacher courses',
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="overflow-hidden bg-[#071b2b] pt-16 text-white">
      <div className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(45,212,191,0.18),transparent_34%),radial-gradient(circle_at_8%_72%,rgba(56,189,248,0.16),transparent_32%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.03fr_0.97fr] lg:px-10 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-cyan-100 backdrop-blur">
              <Shield className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              SSI swim teacher education · Singapore
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Teach swimming with
              <span className="block bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">skill, safety and confidence.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Structured SSI pathways for aspiring and experienced swim teachers, guided in Singapore by Remus Teo and Rayner Teo.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm sm:max-w-2xl">
              <p className="text-base font-semibold text-white sm:text-lg">
                Every $1,688 teacher course includes full SSI React Right.
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                First Aid &amp; CPR, AED Provider and Oxygen Provider training are included.
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-bold text-[#071b2b] shadow-[0_14px_40px_rgba(34,211,238,0.18)] transition hover:bg-cyan-200"
              >
                Explore courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Speak with the Academy
              </button>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-teal-300" aria-hidden="true" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-300/20 via-transparent to-teal-300/10 blur-2xl" />
            <div className="relative h-[480px] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-800 shadow-[0_35px_90px_rgba(0,0,0,0.38)] sm:h-[620px]">
              <Image
                src="/academy-guided-practice.jpg"
                alt="Penguin Academy swim teacher training in Singapore"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-[#071b2b]/85 p-5 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cyan-300 text-[#071b2b]">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-bold text-white">SSI instructor-led education</p>
                    <p className="mt-1 text-sm text-slate-300">Clear support from digital learning through assessment and apprenticeship.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-slate-200 bg-[#f6f4ee] text-[#0b2438]">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-3">
          {[
            { value: '1–8', label: 'candidates per cohort', icon: Users },
            { value: '5', label: 'focused SSI course pathways', icon: Sparkles },
            { value: '121320', label: 'verified SSI Pro profile', icon: Shield },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center justify-center gap-4 bg-[#f6f4ee] px-6 py-7">
              <Icon className="h-6 w-6 text-teal-700" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold tracking-tight">{value}</p>
                <p className="text-sm text-slate-600">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white text-[#0b2438]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Meet your training team</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Two mentors. One clear path into teaching.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Remus and Rayner guide new coaches through professional instruction, practical teaching, feedback and in-water mentoring. Formal SSI certification is issued only after every applicable requirement is completed.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#f7f8f6] shadow-[0_18px_55px_rgba(11,36,56,0.08)]">
              <div className="grid sm:grid-cols-[0.72fr_1.28fr]">
                <div className="relative min-h-[320px] bg-slate-200">
                  <Image src="/Remus.png" alt="Remus Teo, SSI Swim Teacher Instructor" fill sizes="(min-width: 1024px) 22vw, 100vw" className="object-cover" />
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
              <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[320px] bg-slate-200">
                  <Image src="/rayner-teo-profile.jpg" alt="Rayner Teo, Penguin Academy trainer and mentor, beside a swimming pool in Singapore" fill sizes="(min-width: 1024px) 24vw, 100vw" className="object-cover object-center" />
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
      </div>
    </section>
  );
};

export default Hero;
