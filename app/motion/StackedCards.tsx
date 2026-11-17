'use client';

import { useRef, type ReactNode } from 'react';
import { ScrollTrigger, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/**
 * Cards pin one after another and shrink slightly, so the stack reads as a
 * deck being dealt. Each card starts a little later than the one before it,
 * which is what leaves the thin visible edge of the cards underneath.
 *
 * Disabled under 900px — stacking fights with a single-column layout.
 */
export function StackedCards({
  children,
  className,
  itemSelector = ':scope > article',
  id,
}: {
  children: ReactNode;
  className?: string;
  itemSelector?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const releaseRef = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    const release = releaseRef.current;
    if (!el || !release || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 901px)': () => {
          const cards = Array.from(el.querySelectorAll<HTMLElement>(itemSelector));
          el.classList.add('is-stacked');

          cards.forEach((card, i) => {
            gsap.to(card, {
              scale: 0.9 + i * 0.02,
              ease: 'none',
              scrollTrigger: { trigger: card, start: `top-=${30 * i} 20%`, end: 'top 10%', scrub: true },
            });

            ScrollTrigger.create({
              trigger: card,
              start: `top-=${20 * i} 20%`,
              endTrigger: release,
              end: 'top center',
              pin: true,
              pinSpacing: false,
            });
          });

          return () => el.classList.remove('is-stacked');
        },
      });
    }, el);

    return () => ctx.revert();
  }, [itemSelector]);

  return (
    <>
      <div ref={ref} className={className} id={id}>
        {children}
      </div>
      <div ref={releaseRef} className="stack-release" aria-hidden="true" />
    </>
  );
}
