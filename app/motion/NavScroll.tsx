'use client';

import { useEffect } from 'react';

/**
 * Marks the header once the page has left the top, so the sticky bar can
 * tighten up. Pure class toggle — the look lives in globals.css.
 */
export function NavScroll() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      header.classList.toggle('is-scrolled', window.scrollY > 50);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
