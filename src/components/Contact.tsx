'use client';

import { useRef, useCallback } from 'react';
import TextReveal from './TextReveal';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);


  // Text scramble effect on email hover
  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@.';
  const originalEmail = 'hello@tatianacodes.com';

  const handleEmailHover = useCallback(() => {
    if (!emailRef.current) return;
    const el = emailRef.current;
    let iteration = 0;

    const interval = setInterval(() => {
      el.textContent = originalEmail
        .split('')
        .map((char, index) => {
          if (index < iteration) return originalEmail[index];
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join('');

      if (iteration >= originalEmail.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" ref={containerRef} className="relative overflow-hidden">
      <div className="container max-w-4xl text-center">
        {/* Section Label */}
        <span
          className="text-sm uppercase tracking-[0.3em] text-[var(--accent-primary)] block mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Get In Touch
        </span>

        <TextReveal
          as="h2"
          className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] mb-10"
        >
          Let&apos;s build something together
        </TextReveal>

        <p className="text-xl text-[var(--text-secondary)] mb-16 max-w-xl mx-auto">
          Whether you have a project in mind, want to collaborate, or just want to say hi. My inbox is always open.
        </p>

        {/* Freelance indicator */}
        <div className="mb-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available to Create
        </div>

        {/* Email — hero element */}
        <div className="mb-16">
          <span
            className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)] block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Say Hello
          </span>
          <a
            ref={emailRef}
            href="mailto:hello@tatianacodes.com"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-display)' }}
            onMouseEnter={handleEmailHover}

          >
            hello@tatianacodes.com
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://linkedin.com/in/tatianadwalton"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 py-2 px-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:hello@tatianacodes.com"
            className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2 py-2 px-3"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6L12 13L2 6" />
            </svg>
            Email
          </a>
        </div>

        {/* Location */}
        <p className="mt-16 text-sm text-[var(--text-muted)]">
          NYC
        </p>
      </div>
    </section>
  );
}
