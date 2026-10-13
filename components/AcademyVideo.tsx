import { PlayCircle } from 'lucide-react';

export default function AcademyVideo() {
  return (
    <section aria-labelledby="academy-video-title" className="bg-[#071b2b] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div>
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/20 bg-white/5 text-cyan-300">
            <PlayCircle className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">See the experience</p>
          <h2 id="academy-video-title" className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Become a confident swim teacher.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Meet the Academy and see what a structured SSI swim teacher pathway can look like in Singapore.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/VdMUMPY1sgY?rel=0"
              title="Become a Confident Swim Teacher | SSI Swim Teacher Course Singapore"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
