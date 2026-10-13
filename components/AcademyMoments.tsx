import Image from 'next/image';

const moments = [
  {
    src: '/academy-coach-community.jpg',
    alt: 'Penguin Swim School coaches gathering together',
    label: 'A professional community that keeps learning together',
    className: 'min-h-[360px] lg:row-span-2 lg:min-h-[620px]',
    sizes: '(min-width: 1024px) 58vw, 100vw',
  },
  {
    src: '/academy-practical-training.jpg',
    alt: 'Coaches practising guided swim teaching in a Singapore pool',
    label: 'Guided practical application in the water',
    className: 'min-h-[300px]',
    sizes: '(min-width: 1024px) 42vw, 100vw',
  },
  {
    src: '/academy-poolside-coaching.jpg',
    alt: 'Penguin coaches supporting swimmers during a practical session',
    label: 'Close observation, support and feedback',
    className: 'min-h-[300px]',
    sizes: '(min-width: 1024px) 42vw, 100vw',
  },
];

export default function AcademyMoments() {
  return (
    <section id="academy-moments" className="bg-[#f6f4ee] py-20 sm:py-28" aria-labelledby="academy-moments-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-teal-700">Inside the Academy</p>
            <h2 id="academy-moments-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#0b2438] sm:text-5xl">
              Training made real.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            Swim teacher education goes beyond the classroom. Candidates learn by observing, practising and reflecting on how safe, confident instruction works in the water.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:grid-rows-2">
          {moments.map((moment) => (
            <figure key={moment.src} className={`group relative overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-[0_18px_50px_rgba(11,36,56,0.1)] ${moment.className}`}>
              <Image
                src={moment.src}
                alt={moment.alt}
                fill
                sizes={moment.sizes}
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
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
