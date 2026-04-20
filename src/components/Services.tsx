'use client';

import TextReveal from './TextReveal';

const services = [
  {
    title: 'FiveM Server Development',
    description: 'Custom FiveM server scripting, game modes, and systems. I build robust, scalable solutions for immersive multiplayer experiences—from economy mechanics to roleplay frameworks.',
    keywords: ['FiveM development', 'FiveM scripting', 'custom server scripts', 'GTA V roleplay', 'FiveM gamemode'],
  },
  {
    title: 'FiveM Consulting & Architecture',
    description: 'Strategic guidance on FiveM server architecture, performance optimization, and feature roadmapping. Help your server scale efficiently while maintaining code quality and player experience.',
    keywords: ['FiveM consulting', 'server architecture', 'performance optimization', 'roleplay server'],
  },
  {
    title: 'AI Integration & Automation',
    description: 'Leverage AI to enhance your FiveM server or business. From AI-powered NPCs to automation tools and intelligent systems that improve operations.',
    keywords: ['AI development', 'AI integration', 'automation', 'intelligent systems'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="container max-w-5xl">
        {/* Section Label */}
        <span
          className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)] block mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Services
        </span>

        {/* Main headline */}
        <TextReveal
          as="h2"
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-6"
        >
          FiveM Development & Server Architecture
        </TextReveal>

        {/* SEO-focused description */}
        <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-3xl leading-relaxed">
          Specialized in custom FiveM server development, scripting, and architecture. I build robust, scalable multiplayer experiences with clean code and thoughtful design. From game modes to economy systems to AI-powered features.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-lg border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)] transition-colors"
            >
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--text-muted)] mb-4">
                {service.description}
              </p>
              {/* Hidden keywords for SEO */}
              <div className="hidden">
                {service.keywords.map((keyword) => (
                  <span key={keyword}>{keyword}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--bg-tertiary)]">
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            Ready to explore how AI and custom development can transform your business or game?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
