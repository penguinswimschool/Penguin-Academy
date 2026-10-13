import { PlayCircle } from 'lucide-react';

export default function AcademyVideo() {
  return (
    <section aria-labelledby="academy-video-title" className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <PlayCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" aria-hidden="true" />
          <h2 id="academy-video-title" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Become a Confident Swim Teacher
          </h2>
          <p className="text-lg text-gray-600">
            Watch this introduction to the SSI Swim Teacher course experience in Singapore.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-gray-950 shadow-2xl ring-1 ring-gray-200">
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
