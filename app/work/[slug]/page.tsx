import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell, ProcessDiagram, ProjectVisual, SectionHeading, TagList } from '../../components';
import { getProject, projects } from '../../content';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: [] },
    twitter: { card: 'summary', title: project.title, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageShell>
      <article className="case-study">
        <header className="case-hero shell">
          <Link className="back-link" href="/work">← Back to work</Link>
          <div className="case-heading grid-12">
            <div className="case-title">
              <p className="eyebrow">Case study / {project.index}</p>
              <h1>{project.title}</h1>
              <p className="lede">{project.summary}</p>
            </div>
            <dl className="case-meta">
              <div><dt>Category</dt><dd>{project.category}</dd></div>
              <div><dt>Primary lens</dt><dd>{project.featuredCapability}</dd></div>
              <div><dt>Public presentation</dt><dd>{project.accent ? 'Personal product concept' : 'Anonymised project work'}</dd></div>
            </dl>
          </div>
          <ProjectVisual project={project} />
        </header>

        <section className="case-section shell grid-12">
          <SectionHeading index="01" title="Business context" />
          <div className="case-main prose-stack">{project.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="case-section case-split shell grid-12">
          <div>
            <p className="eyebrow">The problem</p>
            <TagList items={project.problems} />
          </div>
          <div>
            <p className="eyebrow">My role</p>
            <TagList items={project.role} />
          </div>
        </section>

        <section className="case-section shell">
          <SectionHeading index="02" title="Process / architecture" note="A simplified public view of the operating relationship." />
          <ProcessDiagram label={project.flowLabel} steps={project.flow} />
        </section>

        {project.approach && (
          <section className="case-section shell">
            <SectionHeading index="03" title={project.accent ? 'Product flow' : 'Solution approach'} />
            <div className="approach-grid">
              {project.approach.map((step, index) => (
                <article key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.copy}</p></article>
              ))}
            </div>
          </section>
        )}

        {(project.entities || project.tools) && (
          <section className="case-section model-section shell grid-12">
            {project.entities && <div><p className="eyebrow">{project.accent ? 'Modules / domain' : 'Data / analytical model'}</p><TagList items={project.entities} /></div>}
            {project.tools && <div><p className="eyebrow">Technical references</p><TagList items={project.tools} /></div>}
          </section>
        )}

        <section className="case-section outcome-section shell">
          <SectionHeading index={project.approach ? '04' : '03'} title="Outcome / evidence" note="Only source-supported scope is shown." />
          <div className="outcome-grid">
            {project.outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, '0')}</span><p>{outcome}</p></div>)}
          </div>
          <blockquote>{project.principle}</blockquote>
          {project.note && <p className="confidential-note">{project.note}</p>}
        </section>

        <nav className="next-project shell" aria-label="Case study navigation">
          <p className="eyebrow">Next case study</p>
          <Link href={`/work/${nextProject.slug}`}><span>{nextProject.title}</span><span aria-hidden="true">→</span></Link>
        </nav>
      </article>
    </PageShell>
  );
}
