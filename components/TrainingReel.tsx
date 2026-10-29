"use client";

import { Pause, Play, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export default function TrainingReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  return (
    <section className="overflow-hidden bg-[#071b2b] py-16 text-white sm:py-24 lg:py-28" aria-labelledby="training-reel-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Proof in practice</p>
          <h2 id="training-reel-title" className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Watch coaching skills take shape.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Real pool sessions give candidates space to observe, practise, receive feedback and build the judgement needed for confident teaching.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-cyan-50">
            {['Practical instruction', 'Close observation', 'Guided feedback'].map((item) => (
              <span key={item} className="rounded-full border border-cyan-200/20 bg-white/5 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b2438] shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
          {!hasStarted && (
            <picture className="absolute inset-0 z-10">
              <source media="(min-width: 768px)" srcSet="/academy-training-poster.jpg" />
              <img
                src="/academy-training-poster-mobile.jpg"
                alt="Penguin coaches guiding practical swim teaching in a Singapore pool"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </picture>
          )}
          <video
            ref={videoRef}
            className="aspect-[4/5] h-full w-full object-cover md:aspect-video"
            muted
            loop
            playsInline
            preload="none"
            poster="/academy-training-poster.jpg"
            aria-label="Real Penguin Academy pool training and guided coaching practice"
            onPlaying={() => {
              setHasStarted(true);
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
          >
            <source media="(min-width: 768px)" src="/academy-training-desktop.mp4" type="video/mp4" />
            <source src="/academy-training-mobile.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between bg-gradient-to-t from-[#071b2b]/85 via-[#071b2b]/25 to-transparent p-5 sm:p-6">
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <VolumeX className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              Real Academy training
            </span>
            <button
              type="button"
              onClick={togglePlayback}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#071b2b]/80 text-white backdrop-blur transition hover:bg-[#0e3650] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              aria-label={isPlaying ? 'Pause training video' : 'Play training video'}
            >
              {isPlaying ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
