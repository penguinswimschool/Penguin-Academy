import Image from 'next/image';

const moments = [
  {
    src: '/academy-ssi-community.jpg',
    alt: 'Penguin Academy community gathered in a pool with an SSI flag',
    label: 'Learning alongside the SSI teaching community',
    className: 'min-h-[280px] sm:min-h-[340px] lg:col-span-7 lg:min-h-[430px]',
    sizes: '(min-width: 1024px) 58vw, 100vw',
  },
  {
    src: '/academy-adult-teacher-practice.jpg',
    alt: 'A Penguin coach observing two adults during a pool training session',
    label: 'Observe, practise and refine each teaching decision',
    className: 'min-h-[280px] sm:min-h-[340px] lg:col-span-5 lg:min-h-[430px]',
    sizes: '(min-width: 1024px) 42vw, 100vw',
  },
  {
    src: '/academy-practical-training.jpg',
    alt: 'Coaches practising guided swim teaching in a Singapore pool',
    label: 'Guided practical application in the water',
    className: 'min-h-[260px] sm:min-h-[300px] lg:col-span-4',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: '/academy-poolside-coaching.jpg',
    alt: 'Penguin coaches supporting swimmers during a practical session',
    label: 'Close observation, support and feedback',
    className: 'min-h-[260px] sm:min-h-[300px] lg:col-span-4',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: '/academy-ssi-learning-community.jpg',
    alt: 'Penguin Academy learners and instructors gathered with an SSI flag',
    label: 'A professional community that keeps learning together',
    className: 'min-h-[260px] sm:min-h-[300px] lg:col-span-4',
    imageClassName: 'object-top',
    sizes: '(min-width: 1024px) 33vw, 100vw',
  },
  {
    src: '/academy-supervised-session.jpg',
    alt: 'Coaches working across a supervised swim teaching session in Singapore',
    label: 'Supervised practice across multiple teaching scenarios',
    className: 'min-h-[280px] sm:col-span-2 sm:min-h-[360px] lg:col-span-12 lg:min-h-[430px]',
    sizes: '(min-width: 1024px) 100vw, 100vw',
  },
];

export default function AcademyMoments() {
  return (
    <section id="academy-moments" className="bg-[#f6f4ee] py-16 sm:py-24 lg:py-28" aria-labelledby="academy-moments-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Inside the Academy</p>
            <h2 id="academy-moments-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">
              Training made real.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Swim teacher education goes beyond the classroom. Candidates learn by observing, practising and reflecting on how safe, confident instruction works in the water.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {moments.map((moment) => (
            <figure key={moment.src} className={`group relative overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-[0_18px_50px_rgba(11,36,56,0.1)] ${moment.className}`}>
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                sizes={moment.sizes}
                className={`object-cover transition duration-700 group-hover:scale-[1.02] ${moment.imageClassName || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b2b]/80 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-base font-semibold text-white sm:p-7">
                {moment.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
