'use client';

import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/** useLayoutEffect on the client, useEffect on the server, so SSR stays quiet. */
export const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Every animation in this folder is a no-op when the visitor asked for less motion. */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Shared feel: editorial, unhurried, never bouncy. */
export const EASE = 'power3.out';
export const REVEAL_START = 'top 85%';

export { gsap, ScrollTrigger, SplitText };
