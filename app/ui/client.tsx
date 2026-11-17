'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { navItems } from './nav';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** The theme lives on <html data-theme>; React only reads it. */
function subscribeTheme(onChange: () => void) {
  const root = document.documentElement;
  const observer = new MutationObserver(onChange);
  observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
  // Follow the OS only while the visitor has not chosen explicitly.
  const media = matchMedia('(prefers-color-scheme: dark)');
  const onSystem = (event: MediaQueryListEvent) => {
    let stored: string | null = null;
    try { stored = localStorage.getItem('theme'); } catch {}
    if (!stored) root.dataset.theme = event.matches ? 'dark' : 'light';
  };
  media.addEventListener('change', onSystem);
  return () => { observer.disconnect(); media.removeEventListener('change', onSystem); };
}
const readTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeTheme, readTheme, () => 'light');

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-transition');
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
    window.setTimeout(() => root.classList.remove('theme-transition'), 320);
  };

  const label = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-sun">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-moon">
        <path d="M20.2 14.6A8.5 8.5 0 0 1 9.4 3.8a8.5 8.5 0 1 0 10.8 10.8Z" />
      </svg>
    </button>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu when the route changes (adjusting state during render).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header" data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className="header-inner container">
        <Link href="/" className="wordmark" aria-label="Phan Dang Bao Tran — home">
          <span className="wordmark-mark" aria-hidden="true" />
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-small header-cta" aria-current={pathname === '/contact' ? 'page' : undefined}>Contact</Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="menu-icon" aria-hidden="true"><span /><span /></span>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
        <ul className="container">
          {[...navItems, { label: 'Contact', href: '/contact' }].map((item, index) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/**
 * Adds `is-visible` to [data-reveal] elements as they enter the viewport.
 * Content is visible by default; hiding only happens under html.motion-ok,
 * which the head script sets when JS runs and reduced motion is not requested.
 */
export function RevealController() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    (window as Window & { __revealReady?: boolean }).__revealReady = true;
    if (!root.classList.contains('motion-ok')) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
