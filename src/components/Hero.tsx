'use client';

import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

gsap.registerPlugin(ScrollTrigger);

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => null,
});

const tags = [
  'Product Builder',
  'DX & Tooling Enthusiast',
  'GTA RP Server Lead Developer & Community Manager',
  'Frontend Test Fest Speaker',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ delay: 0.3 });

    // Horizontal line draw
    if (lineRef.current) {
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power3.inOut' }
      );
    }

    // Name reveal character by character
    if (nameRef.current) {
      const chars = nameRef.current.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { opacity: 0, y: 60, rotateX: 40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          stagger: 0.03,
          ease: 'power3.out',
        },
        '-=0.3'
      );
    }

    // Tagline fade
    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.2'
      );
    }

    // Tags stagger
    if (tagsRef.current) {
      const tagEls = tagsRef.current.children;
      tl.fromTo(
        tagEls,
        { opacity: 0, y: 15, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
        },
        '-=0.3'
      );
    }

    // CTAs
    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      );
    }

    // Scroll hint
    if (scrollHintRef.current) {
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '+=0.3'
      );
    }

    // ScrollTrigger parallax fade-out
    const heroContent = containerRef.current.querySelector('.hero-content');
    if (heroContent) {
      gsap.fromTo(heroContent,
        { opacity: 1, yPercent: 0 },
        {
          opacity: 0,
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '60% top',
            scrub: 0.5,
          },
        }
      );
    }
  }, { scope: containerRef });

  const renderName = (text: string) =>
    text.split('').map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ perspective: '400px' }}
      >
        {char}
      </span>
    ));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-32"
    >
      {/* 3D Scene — hidden on mobile */}
      {!isMobile && <HeroScene />}

      {/* Content */}
      <div className="hero-content relative z-10 container max-w-5xl">
        {/* Horizontal line */}
        <div
          ref={lineRef}
          className="w-16 h-[1px] bg-[var(--accent-primary)] mb-10 origin-left"
          style={{ transform: 'scaleX(0)' }}
        />

        {/* Intro */}
        <div className="mb-6">
          <span
            className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Sr. Software Engineer
          </span>
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[clamp(4rem,16vw,14rem)] font-bold leading-[0.85] tracking-tight mb-12"
          style={{ fontFamily: 'var(--font-display)', perspective: '600px' }}
        >
          <span className="block">{renderName('Tatiana')}</span>
          <span className="block text-[var(--accent-primary)]">
            {renderName('Walton')}
          </span>
        </h1>

        {/* Tagline */}
        <div ref={taglineRef} className="max-w-3xl mb-10" style={{ opacity: 0 }}>
          <p className="text-xl md:text-2xl lg:text-3xl text-[var(--text-secondary)] leading-relaxed">
            I love to build{' '}
            <span className="text-[var(--text-primary)]">products</span> I actually love to use,
            and make sure the teams behind them can{' '}
            <span className="text-[var(--text-primary)]">ship with speed</span> and{' '}
            <span className="text-[var(--text-primary)]">confidence</span>.
          </p>
          <p className="text-lg md:text-xl text-[var(--text-muted)] mt-6">
            Creative Technologist &middot; NYC
          </p>
        </div>

        {/* Tags — streetwear product labels */}
        <div ref={tagsRef} className="flex flex-wrap gap-3 mb-16">
          {tags.map((tag) => (
            <span key={tag} className="mono-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-6" style={{ opacity: 0 }}>
          <a
            href="#capabilities"
            className="magnetic-btn text-base px-8 py-4"

          >
            <span>See what I do</span>
          </a>
          <a
            href="#contact"
            className="text-base text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-4 animated-underline"
          >
            Let&apos;s chat &rarr;
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        style={{ opacity: 0 }}
      >
        <div className="text-[var(--text-muted)] text-sm animate-bounce">
          &darr;
        </div>
      </div>
    </section>
  );
}
