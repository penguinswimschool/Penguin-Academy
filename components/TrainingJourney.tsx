import { BookOpen, ClipboardCheck, GraduationCap, Waves } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Prepare',
    text: 'Complete the assigned SSI digital learning before instructor-led training.',
    icon: BookOpen,
  },
  {
    number: '02',
    title: 'Train',
    text: 'Build practical teaching knowledge with clear, instructor-led guidance.',
    icon: Waves,
  },
  {
    number: '03',
    title: 'Demonstrate',
    text: 'Complete the required theory, practical assessments and final exam.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Apply',
    text: 'Finish the programme-specific supervised apprenticeship requirements.',
    icon: GraduationCap,
  },
];

export default function TrainingJourney() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="journey-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Your learning journey</p>
            <h2 id="journey-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">
              A clear route from learning to practice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Certification is awarded after all applicable SSI learning, assessment and apprenticeship requirements are completed—not simply after attending one training day.
            </p>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <li key={number} className="rounded-[1.5rem] border border-slate-200 bg-slate-50/70 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.22em] text-teal-700">STEP {number}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0b2438]">{title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
