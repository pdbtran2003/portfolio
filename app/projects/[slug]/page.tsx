import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '../../content';
import { ContactCTA, FlowDiagram, Tags } from '../../ui/components';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

function Block({ index, label, children }: { index: string; label: string; children: React.ReactNode }) {
  return (
    <section className="case-block" aria-labelledby={`case-${index}`}>
      <div className="case-block-label" data-reveal>
        <span className="mono">{index}</span>
        <h2 id={`case-${index}`}>{label}</h2>
      </div>
      <div className="case-block-body">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const position = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  // Number only the sections this project actually has.
  let n = 0;
  const num = () => String(++n).padStart(2, '0');

  return (
    <article className="case">
      <header className="case-header container">
        <Link href="/projects" className="back-link">← All projects</Link>
        <p className="eyebrow" data-reveal><span className="eyebrow-index">{project.index}</span>{project.category}</p>
        <h1 data-reveal style={{ '--d': 1 } as React.CSSProperties}>{project.title}</h1>
        <p className="lede" data-reveal style={{ '--d': 2 } as React.CSSProperties}>{project.summary}</p>
        <dl className="case-meta" data-reveal style={{ '--d': 3 } as React.CSSProperties}>
          <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
          <div><dt>Type</dt><dd>{project.kind}</dd></div>
          {project.period && <div><dt>Period</dt><dd>{project.period}</dd></div>}
          {project.presentation && <div><dt>Presentation</dt><dd>{project.presentation}</dd></div>}
          <div className="case-meta-wide"><dt>Technologies</dt><dd><Tags items={project.tools} label="Technologies" /></dd></div>
        </dl>
      </header>

      <div className="container case-body">
        <Block index={num()} label="Overview">
          <div className="prose" data-reveal>{project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Block>

        <Block index={num()} label="Problem & my role">
          <div className="two-col">
            <div data-reveal>
              <h3 className="mini-head">The problem</h3>
              <ul className="dash-list">{project.problems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div data-reveal style={{ '--d': 1 } as React.CSSProperties}>
              <h3 className="mini-head">What I was responsible for</h3>
              <ul className="dash-list">{project.role.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </Block>

        <Block index={num()} label="Architecture">
          <FlowDiagram label={project.flowLabel} caption={project.flowCaption} steps={project.flow} />
          {project.entities && (
            <div className="entities" data-reveal>
              <h3 className="mini-head">Main entities</h3>
              <Tags items={project.entities} label="Main entities" />
            </div>
          )}
          {project.boundary && (
            <aside className="boundary" data-reveal>
              <p className="mono">Ownership boundary</p>
              <p>{project.boundary}</p>
            </aside>
          )}
        </Block>

        <Block index={num()} label="Implementation">
          <ol className="steps">
            {project.approach.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </Block>

        {project.decisions && (
          <Block index={num()} label="Decisions">
            <div className="decisions">
              {project.decisions.map((decision) => (
                <div key={decision.title} data-reveal>
                  <h3>{decision.title}</h3>
                  <p>{decision.copy}</p>
                </div>
              ))}
            </div>
          </Block>
        )}

        <Block index={num()} label="Results">
          <ol className="results">
            {project.outcomes.map((outcome, index) => (
              <li key={outcome} data-reveal style={{ '--d': index } as React.CSSProperties}><span className="mono">{String(index + 1).padStart(2, '0')}</span><p>{outcome}</p></li>
            ))}
          </ol>
          <blockquote className="principle" data-reveal>{project.principle}</blockquote>
          {project.note && <p className="case-note">{project.note}</p>}
        </Block>

        {project.nextSteps && (
          <Block index={num()} label="Next steps">
            <p className="future-label mono" data-reveal>Future work · not implemented</p>
            <ul className="dash-list" data-reveal>{project.nextSteps.map((item) => <li key={item}>{item}</li>)}</ul>
          </Block>
        )}
      </div>

      <nav className="case-nav container" aria-label="More projects">
        <Link href={`/projects/${previous.slug}`} className="case-nav-link">
          <span className="mono">Previous</span><span className="case-nav-title">{previous.title}</span>
        </Link>
        <Link href={`/projects/${next.slug}`} className="case-nav-link is-next">
          <span className="mono">Next</span><span className="case-nav-title">{next.title}</span>
        </Link>
      </nav>

      <ContactCTA />
    </article>
  );
}
