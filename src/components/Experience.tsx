'use client';

import { useRef } from 'react';
import TextReveal from './TextReveal';

const experiences = [
  {
    title: 'Creative Technologist',
    company: '',
    period: 'Jun 2025 - Present',
    location: 'NYC',
    description:
      'Prototype interactive experiences and develop cutting-edge demos that merge technology, design, and storytelling to elevate client campaigns and pitches.',
    highlights: [
      'Own significant parts of DX for the creative technology team: Confluence docs, AI tooling presentations, and internal npm packages',
      'Lead on standardizing engineering processes (Docker, CI/CD, GitHub Actions, testing) with efficient AI tooling integration',
      'Design and build web-based applications and immersive experiences showcasing emerging technologies in advertising',
      'Develop internal platforms that empower creative teams with AI-assisted ideation, asset generation, and research capabilities',
    ],
    isCurrent: true,
  },
  {
    title: 'Lead Developer & Community Management',
    company: '',
    period: 'Jan 2025 - Present',
    location: 'Remote',
    description:
      'Own technical and operational direction of a GTA V FiveM roleplay city with five figures in lifetime digital goods revenue and 400+ unique players per season.',
    highlights: [
      'Define and execute the city roadmap: feature sequencing, release timelines, live ops, and post-launch iteration',
      'Architect and maintain core gameplay systems via ESX/CFX frameworks in Lua, React, and TypeScript',
      'Oversee economy balance, progression systems, and live in-city events to sustain engagement and revenue',
      'Lead community operations end to end: moderation strategy, staff leadership, and player communications',
    ],
    isCurrent: true,
  },
  {
    title: 'Freelance Software Consultant',
    company: '',
    period: 'Jun 2020 - Present',
    location: 'Remote',
    description:
      'Independent consulting. Shopify builds, CMS-driven workflows, responsive web design, and FiveM server development for clients and creative projects.',
    highlights: [
      'Led end-to-end development of The Museum in Spite of Everything website and eCommerce platform on Shopify (2025)',
      'Architected CMS-driven content workflow allowing non-technical staff to update site content independently',
      'Delivered bug fixes and QoL updates for an EMS protocol platform used by first responders in the Midwest',
    ],
    isCurrent: true,
  },
  {
    title: 'Senior Software Engineer',
    company: '',
    period: 'Jul 2023 - Jun 2025',
    location: 'Remote',
    description:
      'Led frontend initiatives on a web app dashboard used by millions of people every day. Championed testing and better engineering processes across the org.',
    highlights: [
      'Refreshed user onboarding with multiple A/B variations, improving downloads and paid subscriptions',
      'Revitalized user analytics dashboard with robust charts and engagement metrics',
      'Owned testing implementation and strategy for core product, unit and E2E tests',
      'Maintained and expanded CircleCI pipeline for checkout',
    ],
    isCurrent: false,
  },
  {
    title: 'Frontend Software Engineer',
    company: '',
    period: 'May 2022 - Jul 2023',
    location: 'Remote',
    description:
      'Built core features, drove a full product rebrand, and re-established automated testing as a best practice.',
    highlights: [
      'Drove core site rebrand, implementing new branding in shared Vue.js components',
      'Built frontend for sponsorships core feature MVP',
      'Integrated CircleCI automated testing pipeline to product checkout with Vitest',
      'Led project to reintroduce automated unit and E2E testing to the core product',
    ],
    isCurrent: false,
  },
  {
    title: 'Software Engineer, L2',
    company: '',
    period: 'May 2021 - May 2022',
    location: 'Los Angeles (Remote)',
    description:
      'Full-stack development with TypeScript, Node.js, and Kafka. Learned from some of the most diligent engineers in the industry what it means to write clean, well-tested code.',
    highlights: [
      'Served on project team to develop new full-stack event-driven service with Kafka',
      'Set up Concourse CI pipeline for new service',
      'Increased code coverage by implementing unit tests for new and existing code',
    ],
    isCurrent: false,
  },
  {
    title: 'Core Team & Maintainer',
    company: '',
    period: 'Nov 2020 - May 2022',
    location: 'Open Source',
    description:
      'Maintained platform serving 1.8M+ learners annually and a 50,000+ member Discord community. Directed moderator team and contributed curriculum.',
    highlights: [
      'Contributed lessons on debugging and best practices, hosted professional Fireside Chats',
      'Built dark mode, lesson preview tool, and markdown preview feature with Base64/URL params',
      'Gained product ownership of Discord chatbot for community of 30,000+',
    ],
    isCurrent: false,
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);


  return (
    <section id="experience" ref={containerRef} className="relative">
      <div className="container max-w-3xl">
        {/* Section Header */}
        <div className="mb-20">
          <span
            className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)] block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Experience
          </span>

          <TextReveal
            as="h2"
            className="text-section font-bold"
          >
            The journey so far
          </TextReveal>

          <p className="text-[var(--text-secondary)] text-lg mt-4 max-w-2xl">
            From open source to creative agencies, each role has shaped how I approach
            building digital experiences.
          </p>
        </div>

        {/* Single-column timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Animated vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--bg-tertiary)]">
            <div
              className="w-full h-full bg-[var(--accent-primary)] origin-top"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp) => (
              <div
                key={exp.company + exp.title}
                className="exp-card relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 md:-left-12 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)]">
                  {exp.isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-[var(--accent-primary)] animate-ping opacity-75" />
                  )}
                </div>

                {/* Card */}
                <div className="p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3
                        className="text-lg font-semibold text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {exp.title}
                      </h3>
                      {exp.company && (
                        <p className="text-[var(--accent-primary)] text-sm font-medium">
                          {exp.company}
                        </p>
                      )}
                    </div>
                    <div className="text-sm text-[var(--text-muted)] shrink-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                      >
                        <span className="text-[var(--accent-primary)] mt-0.5">&rarr;</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.isCurrent && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                      Current Role
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://linkedin.com/in/tatianadwalton"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn"

          >
            <span>Full Experience on LinkedIn &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
