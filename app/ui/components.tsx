import Link from 'next/link';
import type { ReactNode } from 'react';
import { contact, profile, type Project } from '../content';
import { navItems } from './nav';

import { base, withBase } from './base';

/** Keeps old routes working in a static export: meta refresh (no JS needed) plus a visible link. */
export function MovedNotice({ to, label }: { to: string; label: string }) {
  return (
    <section className="container page-header">
      <meta httpEquiv="refresh" content={`0;url=${base}${to}/`} />
      <p className="eyebrow">Moved</p>
      <h1>This page has moved.</h1>
      <p className="lede"><Link href={to || '/'} className="text-link">Go to {label} <span className="arrow" aria-hidden="true">→</span></Link></p>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow: string; title: ReactNode; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-header container">
      <p className="eyebrow" data-reveal>{eyebrow}</p>
      <h1 data-reveal style={{ '--d': 1 } as React.CSSProperties}>{title}</h1>
      {intro && <p className="lede" data-reveal style={{ '--d': 2 } as React.CSSProperties}>{intro}</p>}
      {children}
    </header>
  );
}

export function SectionHead({ index, label, title, intro, id }: { index?: string; label: string; title?: ReactNode; intro?: ReactNode; id?: string }) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">{index && <span className="eyebrow-index">{index}</span>}{label}</p>
      {title && <h2 id={id}>{title}</h2>}
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}

export function Tags({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

/** A real (simplified) flow from verified project content. Horizontal on wide screens, vertical on narrow ones. */
export function FlowDiagram({ label, caption, steps, compact = false }: { label: string; caption?: string; steps: string[]; compact?: boolean }) {
  return (
    <figure className={`flow ${compact ? 'flow-compact' : ''}`} data-reveal>
      <figcaption className="flow-label"><span className="mono">Flow</span>{label}</figcaption>
      <ol className="flow-steps">
        {steps.map((step, index) => (
          <li key={step} style={{ '--i': index } as React.CSSProperties}>
            <span className="flow-index mono">{String(index + 1).padStart(2, '0')}</span>
            <span className="flow-name">{step}</span>
          </li>
        ))}
      </ol>
      {caption && <p className="flow-caption">{caption}</p>}
    </figure>
  );
}

export function ProjectPreview({ project, flip = false }: { project: Project; flip?: boolean }) {
  return (
    <article className={`project-preview ${flip ? 'is-flipped' : ''}`} data-reveal>
      <div className="project-preview-copy">
        <p className="eyebrow"><span className="eyebrow-index">{project.index}</span>{project.category}</p>
        <h3><Link href={`/projects/${project.slug}`} className="stretched">{project.title}</Link></h3>
        <p className="project-summary">{project.summary}</p>
        <dl className="project-facts">
          <div><dt>My role</dt><dd>{project.contribution}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
        </dl>
        <Tags items={project.previewTools} label="Main technologies" />
        <span className="text-link" aria-hidden="true">View case study <span className="arrow">→</span></span>
      </div>
      <div className="project-preview-visual">
        <FlowDiagram label={project.flowLabel} steps={project.flow.slice(0, 5)} compact />
      </div>
    </article>
  );
}

export function ContactCTA() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-inner" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="cta-title">Building data systems that people can rely on? Let’s talk.</h2>
        <div className="cta-actions">
          <Link href="/contact" className="btn">Get in touch <span className="arrow" aria-hidden="true">→</span></Link>
          <Link href="/projects" className="btn btn-ghost">Explore projects</Link>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-id">
          <span className="wordmark-mark" aria-hidden="true" />
          <p className="footer-name">{profile.name}</p>
          <p className="footer-position">{profile.positioning}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Pages</p>
          <ul>
            {[...navItems, { label: 'Contact', href: '/contact' }].map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul>
            {contact.github && <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></li>}
            {contact.linkedin && <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>}
            {contact.email && <li><a href={`mailto:${contact.email}`}>Email</a></li>}
            {contact.cv && <li><a href={withBase(contact.cv)} download>CV (PDF)</a></li>}
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {year} {profile.name}</p>
        <p className="mono">Data · Integration · Systems</p>
      </div>
    </footer>
  );
}
