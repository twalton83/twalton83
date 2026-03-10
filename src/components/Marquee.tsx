'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 60 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const createTween = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // Kill any existing tween
    tweenRef.current?.kill();
    gsap.set(track, { x: 0 });

    // Measure the first set of items by using a wrapper
    const children = Array.from(track.children) as HTMLElement[];
    const half = children.length / 2;
    let setWidth = 0;
    for (let i = 0; i < half; i++) {
      const el = children[i];
      const style = getComputedStyle(el);
      setWidth += el.offsetWidth
        + parseFloat(style.marginLeft)
        + parseFloat(style.marginRight);
    }

    // Add gaps: gap-12 = 3rem. Measure from the track itself.
    const trackStyle = getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || parseFloat(trackStyle.columnGap) || 48;
    setWidth += gap * half;

    if (setWidth <= 0) return;

    tweenRef.current = gsap.to(track, {
      x: -setWidth,
      duration: speed,
      ease: 'none',
      repeat: -1,
    });
  }, [speed]);

  useEffect(() => {
    // Wait for fonts before measuring
    if (document.fonts?.ready) {
      document.fonts.ready.then(createTween);
    } else {
      requestAnimationFrame(createTween);
    }

    return () => {
      tweenRef.current?.kill();
    };
  }, [createTween]);

  return (
    <div className="overflow-hidden py-8 w-full">
      <div
        ref={trackRef}
        className="flex gap-12 w-max"
      >
        {items.map((item, i) => (
          <span key={`a-${i}`} className="mono-tag whitespace-nowrap">
            {item}
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`b-${i}`} className="mono-tag whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
