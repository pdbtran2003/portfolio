/**
 * Inlined in <head> so the first painted frame already has the right theme
 * (stored choice, else the OS preference) and knows whether motion is allowed.
 * If the reveal controller has not started within 3s (script error, slow
 * hydration), motion is switched off so hidden content becomes visible.
 * Kept out of the 'use client' module: a client module's string exports reach
 * server components as references, not values.
 */
export const themeInitScript = `(function(){var d=document.documentElement;try{var s=localStorage.getItem('theme');d.dataset.theme=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');}catch(e){}try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion-ok');setTimeout(function(){if(!window.__revealReady)d.classList.remove('motion-ok');},3000);}}catch(e){}})();`;
