'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 60 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure the width of the first set of items (half the track)
    const firstSet = track.children.length / 2;
    let setWidth = 0;
    for (let i = 0; i < firstSet; i++) {
      const child = track.children[i] as HTMLElement;
      setWidth += child.offsetWidth;
    }
    // Account for gaps (3rem = 48px per gap, between items)
    const gap = parseFloat(getComputedStyle(track).columnGap) || 48;
    setWidth += gap * firstSet; // gap after each item including between sets

    const tween = gsap.to(track, {
      x: -setWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });

    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) tween.pause();
    const handler = (e: MediaQueryListEvent) => {
      e.matches ? tween.pause() : tween.play();
    };
    mq.addEventListener('change', handler);

    return () => {
      tween.kill();
      mq.removeEventListener('change', handler);
    };
  }, [speed]);

  const content = items.map((item, i) => (
    <span key={i} className="mono-tag whitespace-nowrap">
      {item}
    </span>
  ));

  return (
    <div className="overflow-hidden py-8 w-full">
      <div
        ref={trackRef}
        className="flex gap-12 w-max"
      >
        {content}
        {content}
      </div>
    </div>
  );
}
