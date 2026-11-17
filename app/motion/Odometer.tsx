'use client';

import { useRef } from 'react';
import { REVEAL_START, ScrollTrigger, gsap, prefersReducedMotion, useIsoLayoutEffect } from './gsap';

/** Two or three throwaway digits so the column has something to roll through. */
function leadIn(target: number) {
  const out: number[] = [];
  for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i += 1) {
    const n = Math.floor(Math.random() * 10);
    out.push(n === target || n === out[i - 1] ? (n + 1) % 10 : n);
  }
  return out;
}

type Column = { inner: HTMLElement; steps: number };

function buildStrip(value: string) {
  const wrapper = document.createElement('span');
  wrapper.className = 'odo';
  wrapper.setAttribute('aria-hidden', 'true');
  const columns: Column[] = [];

  for (const char of value.trim()) {
    if (!/\d/.test(char)) {
      const fixed = document.createElement('span');
      fixed.className = 'odo-static';
      fixed.textContent = char;
      wrapper.appendChild(fixed);
      continue;
    }

    const target = Number(char);
    const column = document.createElement('span');
    column.className = 'odo-col';
    const inner = document.createElement('span');
    inner.className = 'odo-inner';

    for (const digit of [...leadIn(target), target]) {
      const cell = document.createElement('span');
      cell.className = 'odo-digit';
      cell.textContent = String(digit);
      inner.appendChild(cell);
    }

    column.appendChild(inner);
    wrapper.appendChild(column);
    columns.push({ inner, steps: inner.childElementCount - 1 });
  }

  return { wrapper, columns };
}

/**
 * Metric numbers roll into place like an odometer instead of counting up.
 * Non-digits ("+", "K") stay put, so "500K+" rolls only the 5, 0 and 0.
 *
 * The real number is plain text in the markup and stays that way until the
 * moment the roll can actually run: the strip is built on enter, measured,
 * and only swapped in once every column has a usable height. If measurement
 * fails for any reason the strip is discarded and the correct number simply
 * stands. These are credibility figures — a broken animation must never be
 * able to leave a wrong number on screen.
 */
export function Odometer({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const host = ref.current;
    if (!host || prefersReducedMotion()) return;

    let strip: HTMLElement | null = null;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: host,
        start: REVEAL_START,
        once: true,
        onEnter: () => {
          const { wrapper, columns } = buildStrip(value);
          if (!columns.length) return;

          // Append before measuring: heights are only real once laid out.
          host.appendChild(wrapper);
          const heights = columns.map(
            (column) => (column.inner.firstElementChild as HTMLElement | null)?.getBoundingClientRect().height ?? 0,
          );

          if (heights.some((height) => !height)) {
            wrapper.remove();
            return;
          }

          strip = wrapper;
          host.classList.add('is-rolling');
          host.setAttribute('aria-label', value);

          const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
          columns.forEach((column, index) => {
            gsap.set(column.inner, { y: 0 });
            tl.to(
              column.inner,
              { y: -column.steps * heights[index], duration: 0.8 + Math.random() * 0.15 },
              index * 0.06,
            );
          });
        },
      });
    }, host);

    return () => {
      ctx.revert();
      strip?.remove();
      host.classList.remove('is-rolling');
      host.removeAttribute('aria-label');
    };
  }, [value]);

  return (
    <strong ref={ref} className={className}>
      <span className="odo-plain">{value}</span>
    </strong>
  );
}
