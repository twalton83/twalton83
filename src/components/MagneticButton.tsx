'use client';

import { useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btnRef.current, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    });
  }, []);

  const Tag = href ? 'a' : 'button';
  const props = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : { onClick };

  return (
    <Tag
      ref={btnRef as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span>{children}</span>
    </Tag>
  );
}
