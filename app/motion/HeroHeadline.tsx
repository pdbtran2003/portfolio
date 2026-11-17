'use client';

import { useRef } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

export type HeroLine = { text: string; dim?: boolean };

/**
 * The two-tone opening statement: each line rises out of its own overflow box,
 * the first line held back in a lighter tone so the second one lands as the
 * claim. Lines are authored explicitly rather than split at runtime, so the
 * colour split can never drift onto the wrong words when the text rewraps.
 */
export function HeroHeadline({ lines, id }: { lines: HeroLine[]; id?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        yPercent: 110,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.12,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <h1 className="hero-headline" ref={ref} id={id}>
      {lines.map((line) => (
        <span className="hero-line-mask" key={line.text}>
          <span className={`hero-line ${line.dim ? 'is-dim' : ''}`.trim()}>{line.text}</span>
        </span>
      ))}
    </h1>
  );
}
