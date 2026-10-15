'use client';

import type { CSSProperties, PointerEvent, ReactNode } from 'react';
import { useEffect, useRef } from 'react';

type AmbientStyle = CSSProperties & {
  '--ambient-x': string;
  '--ambient-y': string;
};

const initialStyle: AmbientStyle = {
  '--ambient-x': '78%',
  '--ambient-y': '22%',
};

export default function HeroAmbientBackground({ children }: { children: ReactNode }) {
  const surfaceRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const updateAmbientLight = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !surfaceRef.current) return;

    const surface = surfaceRef.current;
    const bounds = surface.getBoundingClientRect();
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100));
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100));

    if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      surface.style.setProperty('--ambient-x', `${x}%`);
      surface.style.setProperty('--ambient-y', `${y}%`);
    });
  };

  const resetAmbientLight = () => {
    if (!surfaceRef.current) return;
    surfaceRef.current.style.setProperty('--ambient-x', '78%');
    surfaceRef.current.style.setProperty('--ambient-y', '22%');
  };

  return (
    <div
      ref={surfaceRef}
      className="academy-ambient-water relative isolate"
      style={initialStyle}
      onPointerMove={updateAmbientLight}
      onPointerLeave={resetAmbientLight}
    >
      <div className="academy-ambient-light" aria-hidden="true" />
      <div className="academy-ambient-ripples" aria-hidden="true" />
      {children}
    </div>
  );
}
