'use client';

import { useRef, type ElementType, type ReactNode } from 'react';
import { SplitText, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/**
 * Masked line-by-line reveal for display type. Each line rises out of its own
 * 1px-clean overflow box, which keeps descenders intact — the reason we split
 * by line and not by character on long editorial headlines.
 */
export function SplitHeading({
  children,
  as: Tag = 'h1',
  className,
  delay = 0,
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 110,
            duration: 0.9,
            delay,
            ease: 'power4.out',
            stagger: 0.07,
          }),
      });
    }, el);

    return () => ctx.revert();
  }, [delay]);

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
