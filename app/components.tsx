import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Project } from './content';

const navItems = [
  ['Home', '/'],
  ['Work', '/work'],
  ['About', '/about'],
  ['Capabilities', '/capabilities'],
  ['Experience', '/experience'],
  ['Contact', '/contact'],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">Phan Dang Bao Tran</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="button button-outline desktop-cta" href="/contact">Let&apos;s talk</Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span /><span /><span /></summary>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div>
        <p className="wordmark">Phan Dang Bao Tran</p>
        <p>Business &amp; Data Analyst</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/work">Work</Link>
        <Link href="/capabilities">Capabilities</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} Phan Dang Bao Tran</p>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero shell grid-12">
      <p className="eyebrow page-hero-eyebrow">{eyebrow}</p>
      <div className="page-hero-copy">
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ index, title, note }: { index?: string; title: string; note?: string }) {
  return (
    <div className="section-heading">
      <div>{index && <span>{index}</span>}<h2>{title}</h2></div>
      {note && <p>{note}</p>}
    </div>
  );
}

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const nodes = project.flow.slice(0, compact ? 5 : 7);
  return (
    <div className={`project-visual ${project.accent ? 'project-visual-accent' : ''}`} aria-label={`${project.title} conceptual diagram`} role="img">
      <div className="visual-meta"><span>{project.index}</span><span>{project.featuredCapability}</span></div>
      <div className="visual-track">
        {nodes.map((node, index) => (
          <div className="visual-node" key={node}>
            <span className="visual-node-index">{String(index + 1).padStart(2, '0')}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <Link href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
        <ProjectVisual project={project} compact />
        <div className="project-card-copy">
          <p className="eyebrow">{project.category}</p>
          <div className="project-title-row"><h3>{project.title}</h3><span aria-hidden="true">↗</span></div>
          <p>{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
    </div>
  );
}

export function ProcessDiagram({ label, steps }: { label: string; steps: string[] }) {
  return (
    <figure className="process-diagram">
      <figcaption>{label}</figcaption>
      <ol>
        {steps.map((step, index) => (
          <li key={`${step}-${index}`}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></li>
        ))}
      </ol>
    </figure>
  );
}

export function TagList({ items }: { items: string[] }) {
  return <ul className="tag-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function CTA({ title = 'Let’s turn complexity into a clearer system.', copy = 'Open to opportunities across Business Analysis, Data Analytics, Business Applications and digital transformation.' }: { title?: string; copy?: string }) {
  return (
    <section className="cta shell">
      <p className="eyebrow">Start a conversation</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <Link className="button button-primary" href="/contact">Contact me <span aria-hidden="true">→</span></Link>
    </section>
  );
}
