'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export default function TextReveal({ children, className = '', as: Tag = 'h2', delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll('.word');

    const tl = gsap.timeline({
      delay,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Words tumble in from alternating directions with spring
    tl.fromTo(
      words,
      {
        immediateRender: true,
        opacity: 0,
        y: (i: number) => (i % 2 === 0 ? 80 : -60),
        rotateX: (i: number) => (i % 2 === 0 ? 90 : -70),
        rotateZ: (i: number) => (i % 3 === 0 ? -8 : i % 3 === 1 ? 6 : 0),
        scale: 0.3,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateZ: 0,
        scale: 1,
        duration: 1,
        stagger: 0.06,
        ease: 'back.out(1.4)',
      }
    );

  }, { scope: containerRef });

  const words = children.split(' ').map((word, i) => (
    <span
      key={i}
      className="word inline-block"
      style={{ perspective: '400px', willChange: 'transform, opacity' }}
    >
      {word}&nbsp;
    </span>
  ));

  return (
    <div ref={containerRef} style={{ perspective: '600px' }}>
      <Tag className={className}>{words}</Tag>
    </div>
  );
}
