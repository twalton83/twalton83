'use client';

import { useRef, useEffect, useCallback } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const konamiRef = useRef<string[]>([]);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  const handleKonami = useCallback(() => {
    document.body.style.transition = 'filter 0.5s ease';
    document.body.style.filter = 'hue-rotate(90deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      konamiRef.current.push(e.key);
      konamiRef.current = konamiRef.current.slice(-10);
      if (konamiRef.current.join(',') === konamiCode.join(',')) {
        handleKonami();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKonami]);

  return (
    <footer className="relative py-8 border-t border-[var(--bg-tertiary)]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {currentYear} Tatiana Walton
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-2"
          >
            Back to top
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 10V2M6 2L2 6M6 2L10 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
