'use client';

import { useRef, type ReactNode } from 'react';
import { SplitText, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/**
 * A statement that lights up word by word as the section is scrolled through.
 * The words are always present and always readable — only their opacity is
 * scrubbed — so with JavaScript off, or under reduced motion, the paragraph
 * simply reads at full strength.
 */
export function WordReveal({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      SplitText.create(el, {
        type: 'words',
        wordsClass: 'reveal-word',
        autoSplit: true,
        onSplit: (self) =>
          gsap.fromTo(
            self.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: 'none',
              stagger: 0.4,
              scrollTrigger: {
                trigger: el,
                start: 'top 78%',
                end: 'bottom 58%',
                scrub: true,
              },
            },
          ),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <p className={className} id={id} ref={ref}>
      {children}
    </p>
  );
}
