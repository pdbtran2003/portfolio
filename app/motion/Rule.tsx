'use client';

import { useRef } from 'react';
import { REVEAL_START, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/**
 * The 1px editorial rule, drawn left-to-right (or top-down) as it enters view.
 * Replaces a plain `border-top` — the parent needs `position: relative`.
 */
export function Rule({
  orientation = 'horizontal',
  className = '',
  delay = 0,
}: {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        [orientation === 'horizontal' ? 'scaleX' : 'scaleY']: 0,
        duration: 1,
        delay,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [orientation, delay]);

  return <span ref={ref} aria-hidden="true" className={`rule rule-${orientation} ${className}`.trim()} />;
}
