'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/**
 * A small label that tracks the cursor while it is over the wrapper — the
 * restrained cousin of the floating preview card on agency work lists.
 * Pointer-devices only; it never appears on touch or under reduced motion.
 */
export function CursorLabel({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLSpanElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    const chip = chipRef.current;
    if (!el || !chip || prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const xTo = gsap.quickTo(chip, 'x', { duration: 0.45, ease: 'power3' });
    const yTo = gsap.quickTo(chip, 'y', { duration: 0.45, ease: 'power3' });

    const move = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      xTo(event.clientX - rect.left);
      yTo(event.clientY - rect.top);
    };
    const enter = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      gsap.set(chip, { x: event.clientX - rect.left, y: event.clientY - rect.top });
      gsap.to(chip, { autoAlpha: 1, scale: 1, duration: 0.25, ease: 'power2.out' });
    };
    const leave = () => gsap.to(chip, { autoAlpha: 0, scale: 0.8, duration: 0.2, ease: 'power2.in' });

    // xPercent/yPercent resolve against the chip's own box, so it sits centred
    // on the pointer. A percentage margin would resolve against the card width.
    gsap.set(chip, { autoAlpha: 0, scale: 0.8, xPercent: -50, yPercent: -50 });
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);

    return () => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      gsap.set(chip, { clearProps: 'all' });
    };
  }, []);

  return (
    <div ref={ref} className={`cursor-label-host ${className ?? ''}`.trim()}>
      {children}
      <span ref={chipRef} className="cursor-label" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
