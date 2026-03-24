'use client';

import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#capabilities' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const mobileOverlayRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<HTMLDivElement>(null);

  // Entrance animation + scroll direction show/hide
  useGSAP(() => {
    if (!headerRef.current || !progressRef.current) return;

    // Entrance
    gsap.fromTo(headerRef.current,
      { y: -100 },
      { y: 0, duration: 0.8, ease: 'power3.out' }
    );

    const navLinks = headerRef.current.querySelectorAll('.nav-link');
    gsap.fromTo(navLinks,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.3, ease: 'power2.out' }
    );

    // Show/hide on scroll direction
    let lastScroll = 0;
    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > lastScroll && currentScroll > 200) {
          gsap.to(headerRef.current, { y: -100, duration: 0.3, ease: 'power2.in' });
        } else {
          gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.out' });
        }
        lastScroll = currentScroll;
      },
    });

    // Scroll progress bar
    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${self.progress})`;
        }
      },
    });
  });

  // Mobile menu timeline
  useEffect(() => {
    if (!mobileOverlayRef.current || !mobileLinksRef.current) return;

    const tl = gsap.timeline({ paused: true });
    tl.to(mobileOverlayRef.current, {
      clipPath: 'circle(150% at top right)',
      duration: 0.6,
      ease: 'power3.inOut',
    });
    tl.from(
      mobileLinksRef.current.children,
      {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.2'
    );

    menuTimelineRef.current = tl;
  }, []);

  useEffect(() => {
    if (!menuTimelineRef.current) return;
    if (isMobileMenuOpen) {
      menuTimelineRef.current.play();
    } else {
      menuTimelineRef.current.reverse();
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12"
        style={{ transform: 'translateY(-100px)' }}
      >
        <nav className="flex items-center justify-end max-w-[1400px] mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link animated-underline text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                style={{ opacity: 0 }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="nav-link magnetic-btn text-xs"
              style={{ opacity: 0 }}
            >
              <span>Let&apos;s Talk</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className="w-6 h-0.5 bg-[var(--text-primary)] block transition-transform duration-300"
              style={{
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(4px)' : 'none',
              }}
            />
            <span
              className="w-6 h-0.5 bg-[var(--text-primary)] block transition-opacity duration-300"
              style={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <span
              className="w-6 h-0.5 bg-[var(--text-primary)] block transition-transform duration-300"
              style={{
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Scroll Progress */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent-primary)] origin-left z-[100]"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Mobile Menu */}
      <div
        ref={mobileOverlayRef}
        className="fixed inset-0 z-40 bg-[var(--bg-primary)] md:hidden"
        style={{ clipPath: 'circle(0% at top right)' }}
      >
        <div
          ref={mobileLinksRef}
          className="flex flex-col items-center justify-center h-full gap-8"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-8">
            <a
              href="https://linkedin.com/in/tatianadwalton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
