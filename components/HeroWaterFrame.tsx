'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type WaterFrameStyle = CSSProperties & {
  '--water-x': string;
  '--water-y': string;
};

const initialStyle: WaterFrameStyle = {
  '--water-x': '68%',
  '--water-y': '24%',
};

export default function HeroWaterFrame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const updateLightPosition = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !frameRef.current) return;

    const frame = frameRef.current;
    const bounds = frame.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));

    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      frame.style.setProperty('--water-x', `${x}%`);
      frame.style.setProperty('--water-y', `${y}%`);
    });
  };

  const resetLightPosition = () => {
    if (!frameRef.current) return;
    frameRef.current.style.setProperty('--water-x', '68%');
    frameRef.current.style.setProperty('--water-y', '24%');
  };

  return (
    <div
      ref={frameRef}
      onPointerMove={updateLightPosition}
      onPointerLeave={resetLightPosition}
      className="academy-water-frame relative h-[420px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-800 shadow-[0_35px_90px_rgba(0,0,0,0.38)] sm:h-[560px] sm:rounded-[2rem] lg:h-[620px]"
      style={initialStyle}
    >
      {children}
      <div className="academy-water-light" aria-hidden="true" />
      <div className="academy-water-caustics" aria-hidden="true" />
    </div>
  );
}
