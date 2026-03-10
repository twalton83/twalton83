'use client';

import { useRef } from 'react';
import TextReveal from './TextReveal';
import Marquee from './Marquee';

const techStack = [
  'TypeScript', 'JavaScript', 'React', 'Vue.js', 'Next.js', 'Node.js',
  'Python', 'Lua', 'CoffeeScript', 'Docker', 'GitHub Actions',
  'CircleCI', 'Vitest', 'Kafka', 'Tailwind', 'SCSS',
  'Shopify/Liquid', 'Figma', 'Claude', 'Concourse CI',
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden">
      <div className="container max-w-4xl">
        {/* Section Label */}
        <span
          className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)] block mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          About Me
        </span>

        {/* Main headline with text split */}
        <TextReveal
          as="h2"
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-16"
        >
          Where product thinking meets developer experience.
        </TextReveal>

        {/* Description */}
        <div className="space-y-8 text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          <p>
            My sweet spot is owning a product roadmap end to end: figuring out
            what to build, sequencing it, shipping it, and iterating based on
            real feedback from real users.
          </p>
          <p>
            I get excited about the stuff that makes great products possible.
            CI/CD pipelines, testing strategies, internal tooling, thorough
            documentation, and developer platforms that cut the friction so
            engineers can focus on what actually matters. I like the not-sexy
            maintenance work that can go neglected.
          </p>
          <p>
            My time in advertising and creative technology taught me to bring
            strong creative instincts to technical problems. I love dreaming up
            what&apos;s possible and then actually building it.
          </p>
        </div>

        {/* Interests grid */}
        <div className="mt-20 pt-16 border-t border-[var(--bg-tertiary)]">
          <h3
            className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] mb-10"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            What I&apos;m Into
          </h3>

          <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8">
            {[
              { title: 'Developer Experience', desc: 'CI/CD pipelines, testing strategies, internal tooling, and documentation that help teams ship faster' },
              { title: 'Gaming & Worlds', desc: 'Lead dev of In Da Lou RP. 400+ players, five figures in digital goods, full product roadmap ownership' },
              { title: 'Open Source & Community', desc: 'Former Odin Project core team, curriculum writer, and Frontend Test Fest 2023 speaker' },
              { title: 'Creative Technology', desc: 'Interactive prototypes, AI-powered demos, and immersive experiences for advertising campaigns' },
            ].map((item) => (
              <div key={item.title} className="group">
                <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h4>
                <p className="text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack marquee */}
        <div className="mt-20">
          <Marquee items={techStack} speed={80} />
        </div>
      </div>
    </section>
  );
}
