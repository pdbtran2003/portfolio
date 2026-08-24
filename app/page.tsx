import Link from 'next/link';
import { CTA, PageShell, ProjectGrid, SectionHeading } from './components';
import { capabilities, metrics, projects } from './content';

export default function Home() {
  return (
    <PageShell>
      <section className="hero shell grid-12">
        <div className="hero-copy">
          <p className="eyebrow">Business + Data + Systems</p>
          <h1>I turn complex business processes into structured systems, integrated data and practical workflows.</h1>
          <p className="lede">
            Business &amp; Data Analyst focused on digital transformation, business application implementation,
            data integration and workflow automation.
          </p>
          <div className="button-row">
            <Link className="button button-primary" href="/work">View selected work <span aria-hidden="true">→</span></Link>
            <Link className="button button-outline" href="/about">About me</Link>
          </div>
        </div>
        <p className="hero-index" aria-hidden="true">01 / 05</p>
      </section>

      <section className="metric-strip shell" aria-labelledby="impact-heading">
        <div className="section-topline">
          <p id="impact-heading" className="eyebrow">Selected scale</p>
          <p className="section-note">Aggregate indicators across customer and analytical work.</p>
        </div>
        <div className="metrics-grid metrics-grid-six">
          {metrics.map((metric) => (
            <div className="metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <small>{metric.context}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="narrative shell" aria-labelledby="narrative-heading">
        <p className="eyebrow">How the work connects</p>
        <h2 id="narrative-heading">Business <span>+</span> Systems <span>+</span> Data <span>+</span> Automation</h2>
        <div className="narrative-flow" aria-label="Working approach">
          {['Business problem', 'Process analysis', 'System / data model', 'Implementation', 'Automation & integration', 'Analytics'].map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="work-section shell" aria-labelledby="selected-work-heading">
        <SectionHeading index="02" title="Selected work" note="Case studies focused on process, systems, integration and business reasoning—not invented screenshots." />
        <div id="selected-work-heading"><ProjectGrid projects={projects.slice(0, 3)} /></div>
        <Link className="text-link" href="/work">View all five case studies <span aria-hidden="true">→</span></Link>
      </section>

      <section className="capability-preview shell" aria-labelledby="capabilities-heading">
        <SectionHeading index="03" title="Capabilities" note="Tools support the solution. The starting point is always the business problem." />
        <div id="capabilities-heading" className="capability-list">
          {capabilities.slice(0, 4).map((capability) => (
            <article key={capability.index}>
              <span>{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.focus}</p>
              <p className="capability-output">{capability.outputs.join(' · ')}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/capabilities">Explore all capabilities <span aria-hidden="true">→</span></Link>
      </section>

      <section className="experience-preview shell grid-12" aria-labelledby="experience-heading">
        <div className="experience-intro">
          <p className="eyebrow">04 / Experience</p>
          <h2 id="experience-heading">Across business, systems and data.</h2>
        </div>
        <div className="experience-snapshot">
          <article><p>October 2025 — Present</p><h3>Data Analyst / Business Application Process</h3><strong>Yspace</strong></article>
          <article><p>September 2025 — December 2025</p><h3>.NET Developer Intern</h3><strong>FPT Software</strong></article>
          <Link className="text-link" href="/experience">View experience <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
