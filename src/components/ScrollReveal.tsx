import React, { useRef, useEffect, useState, PropsWithChildren } from 'react';
import '../assets/styles/ScrollReveal.scss';

interface ScrollRevealProps {
  className?: string;
  delay?: number;
  direction?: 'up' | 'fade';
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: PropsWithChildren<ScrollRevealProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Direct fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Safety timeout: Guarantees sections NEVER remain permanently hidden on mobile/touch browsers
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(node);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}
