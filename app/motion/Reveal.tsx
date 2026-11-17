'use client';

import { useRef, type ElementType, type ReactNode } from 'react';
import { EASE, REVEAL_START, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

type RevealProps = {
  children: ReactNode;
  /** Animate direct children one after another instead of the wrapper itself. */
  stagger?: number;
  /** CSS selector for the items to stagger, relative to the wrapper. */
  selector?: string;
  y?: number;
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  'aria-label'?: string;
};

/**
 * Fade + lift on scroll. Content is rendered in its final state on the server,
 * so it stays readable without JavaScript; the hidden start state is only ever
 * applied from the client, before paint.
 */
export function Reveal({
  children,
  stagger,
  selector,
  y = 24,
  delay = 0,
  as: Tag = 'div',
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const targets = stagger !== undefined ? Array.from(el.querySelectorAll<HTMLElement>(selector ?? ':scope > *')) : [el];
      if (!targets.length) return;

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.7,
        delay,
        ease: EASE,
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: el, start: REVEAL_START, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, selector, y, delay]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
