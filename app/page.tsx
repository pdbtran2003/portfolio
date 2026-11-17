import Link from 'next/link';
import { CTA, PageShell, ProjectCard, SectionHeading, SiteMark } from './components';
import { capabilityAreas, howIWork, metrics, projects } from './content';
import { HeroHeadline, Odometer, Reveal, StackedCards, WordReveal } from './motion';

export default function Home() {
  return (
    <PageShell>
      <section className="hero shell">
        <p className="eyebrow">Business &times; Data &times; Systems</p>
        <div className="hero-lockup">
          <HeroHeadline
            lines={[
              { text: 'From business processes', dim: true },
              { text: 'to working systems.' },
            ]}
          />
          <Reveal as="div" className="hero-aside" delay={0.45}>
            <p>
              Business &amp; Data professional working across data integration, business systems,
              backend development, and automation.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/work">View selected work <span aria-hidden="true">&rarr;</span></Link>
              <Link className="button button-outline" href="/about">About me</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="intro-band" aria-labelledby="intro-statement">
        <div className="intro-band-inner shell">
          <SiteMark className="site-mark-xl" />
          <WordReveal id="intro-statement" className="intro-statement">
            I work at the intersection of business operations, systems and data &mdash; understanding how a
            business actually operates, translating that logic into structured systems and workflows,
            connecting operational data across platforms, and turning the result into reporting people can use.
          </WordReveal>
          <SiteMark className="site-mark-xl" />
        </div>
      </section>

      <section className="work-section work-home shell" aria-labelledby="selected-work-heading">
        <SectionHeading index="01" title="Selected work" note="Projects currently in progress. Case studies are being written from the source repositories." />
        <div id="selected-work-heading" className="project-grid">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="capability-section shell" aria-labelledby="capabilities-heading">
        <SectionHeading index="02" title="Capabilities" note="Tools support the solution. The starting point is always the business problem." />
        <StackedCards id="capabilities-heading" className="capability-list">
          {capabilityAreas.map((area) => (
            <article key={area.index}>
              <span>{area.index}</span>
              <h3>{area.title}</h3>
              <p>{area.focus}</p>
              <div className="capability-stack">
                <p className="stack-label">Stack</p>
                <ul>{area.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
              </div>
            </article>
          ))}
        </StackedCards>
        <Link className="text-link" href="/capabilities">Explore all capabilities <span aria-hidden="true">&rarr;</span></Link>
      </section>

      <section className="process-section shell" aria-labelledby="how-i-work-heading">
        <SectionHeading index="03" title="How I work" note="The same four movements, whether the output is a system, a pipeline or a dashboard." />
        <Reveal id="how-i-work-heading" className="process-grid" stagger={0.08} y={20}>
          {howIWork.map((step) => (
            <article key={step.index}>
              <span>{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="scale-section shell" aria-labelledby="scale-heading">
        <SectionHeading index="04" title="Built at scale." note="A snapshot of the systems, data, and workflows I&rsquo;ve worked with." />
        <Reveal id="scale-heading" className="metrics-grid metrics-grid-six" stagger={0.06} y={18}>
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <Odometer value={metric.value} />
              <span>{metric.label}</span>
              <small>{metric.context}</small>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="about-section shell grid-12" aria-labelledby="about-heading">
        <p className="eyebrow about-eyebrow">05 / About</p>
        <div className="about-copy">
          <h2 id="about-heading">I start from the operational problem, not the technology.</h2>
          <p>
            My projects usually begin with fragmented spreadsheets, manual approvals, disconnected data sources or
            limited visibility for management. I analyse the current process, identify the business rules and
            dependencies, design a practical to-be process, model the data, implement the operational system,
            automate the repetitive steps, and connect the resulting data to reporting.
          </p>
          <p>
            That work currently spans business process analysis, Lark Base implementation, workflow automation,
            data integration, SQL / BigQuery and dashboard development.
          </p>
          <Link className="text-link" href="/about">Read more about me <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
