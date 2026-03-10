'use client';

import { useRef } from 'react';
import TextReveal from './TextReveal';

const capabilities = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    title: 'Developer Experience & Tooling',
    description: 'CI/CD pipelines, testing strategies, internal npm packages, documentation, and developer platforms that cut friction so engineers can ship.',
    tags: ['CircleCI', 'GitHub Actions', 'Docker', 'Vitest', 'Confluence'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Product Building',
    description: 'End-to-end product ownership, from feature sequencing and roadmaps to shipping, iterating, and measuring impact with real users.',
    tags: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'A/B Testing'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M8.75 9.93A4 4 0 0 0 6 14c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M15.25 9.93A4 4 0 0 1 18 14c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M9.25 17.93A4 4 0 0 0 12 22a4 4 0 0 0 2.75-4.07" />
      </svg>
    ),
    title: 'Creative Technology',
    description: 'Interactive prototypes, AI-powered demos, and immersive experiences that merge technology, design, and storytelling for advertising.',
    tags: ['GSAP', 'Three.js', 'Claude', 'Python', 'WebGL'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12.01" />
      </svg>
    ),
    title: 'Freelance & Consulting',
    description: 'End-to-end Shopify builds, CMS-driven content workflows, FiveM server development, and responsive web design for clients.',
    tags: ['Shopify', 'Liquid', 'Tailwind', 'Figma', 'Lua', 'SCSS'],
  },
];

export default function Capabilities() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section id="capabilities" ref={containerRef} className="relative overflow-hidden">
      <div className="container max-w-5xl">
        {/* Section Label */}
        <span
          className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)] block mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          What I Do
        </span>

        <TextReveal
          as="h2"
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-8"
        >
          What I bring to the table.
        </TextReveal>

        <p className="text-xl text-[var(--text-secondary)] mb-20 max-w-2xl">
          From CI/CD pipelines to creative prototypes, I care about building great products and making teams ship better.
        </p>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <article
              key={cap.title}
              className="capability-card group p-5 md:p-8 rounded-xl bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-[var(--accent-primary)] mb-6 group-hover:text-[var(--accent-secondary)] transition-colors duration-300">
                {cap.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-semibold mb-3 text-[var(--text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {cap.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                {cap.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span key={tag} className="mono-tag text-[0.7rem]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
