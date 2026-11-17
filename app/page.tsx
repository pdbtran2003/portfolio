import Link from 'next/link';
import { capabilities, contact, experience, homeMetrics, metricsSource, profile, projects, stack } from './content';
import { ContactCTA, ProjectPreview, SectionHead } from './ui/components';

const whereLabel = { work: 'Work', projects: 'Projects', both: 'Work · Projects' } as const;

export default function HomePage() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow" data-reveal>{profile.role} · {profile.name}</p>
          <h1 id="hero-title" className="hero-title" data-reveal style={{ '--d': 1 } as React.CSSProperties}>{profile.headline}</h1>
          <p className="lede" data-reveal style={{ '--d': 2 } as React.CSSProperties}>{profile.intro}</p>
          <div className="hero-actions" data-reveal style={{ '--d': 3 } as React.CSSProperties}>
            <Link href="/projects" className="btn">Explore projects <span className="arrow" aria-hidden="true">→</span></Link>
            {contact.cv && <a href={contact.cv} className="btn btn-ghost" download>Download CV</a>}
            <Link href="/contact" className="text-link">Get in touch</Link>
          </div>
        </div>

        <aside className="hero-index" aria-label="At a glance" data-reveal style={{ '--d': 2 } as React.CSSProperties}>
          <p className="eyebrow">At a glance</p>
          <dl>
            <div><dt>Focus</dt><dd>Data integration<br />Database development<br />Analytics</dd></div>
            <div><dt>Latest role</dt><dd>Yspace — Data Integration &amp; Business Systems<span className="mono dim">Oct 2025 — Aug 2026</span></dd></div>
            <div><dt>Team projects</dt><dd>Vec Att · Vecinn<span className="mono dim">PostgreSQL · Python · TypeScript</span></dd></div>
          </dl>
        </aside>
      </section>

      <section className="metrics-band" aria-labelledby="metrics-title">
        <div className="container">
          <h2 id="metrics-title" className="visually-hidden">Professional snapshot</h2>
          <dl className="metric-strip">
            {homeMetrics.map((metric, index) => (
              <div key={metric.label} data-reveal style={{ '--d': index } as React.CSSProperties}>
                <dt>{metric.label}</dt>
                <dd className="metric-value">{metric.value}</dd>
                <dd className="metric-context">{metric.context}</dd>
              </div>
            ))}
          </dl>
          <p className="metric-source mono">{metricsSource}</p>
        </div>
      </section>

      <section className="section container" aria-labelledby="projects-title">
        <SectionHead index="01" label="Selected projects" id="projects-title" title="Evidence over adjectives." intro="Three bodies of work, each with a stated scope: what I built, what the team built, and what is still in review." />
        <div className="project-list">
          {projects.map((project, index) => <ProjectPreview key={project.slug} project={project} flip={index % 2 === 1} />)}
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="capabilities-title">
        <div className="container">
          <SectionHead index="02" label="Core capabilities" id="capabilities-title" title="Where the work sits." />
          <ol className="capability-list">
            {capabilities.map((capability) => (
              <li key={capability.index} data-reveal>
                <span className="cap-index mono">{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
                <p className="cap-tools mono">{capability.tools.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="experience-title">
        <SectionHead index="03" label="Experience" id="experience-title" title="Roles, in brief." />
        <ol className="role-list">
          {experience.map((role) => (
            <li key={role.slug} data-reveal>
              <p className="role-period mono">{role.period}</p>
              <div>
                <h3>{role.employer}</h3>
                <p className="role-title">{role.title}</p>
              </div>
              <ul className="role-highlights">{role.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            </li>
          ))}
        </ol>
        <Link href="/experience" className="text-link" data-reveal>Full experience <span className="arrow" aria-hidden="true">→</span></Link>
      </section>

      <section className="section container" aria-labelledby="stack-title">
        <SectionHead index="04" label="Technical stack" id="stack-title" title="Tools, grouped by purpose." intro="Marked by where I used them: professional work at Yspace, team projects, or both." />
        <div className="stack-grid">
          {stack.map((group) => (
            <div key={group.group} className="stack-group" data-reveal>
              <h3 className="mono">{group.group}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name}><span>{item.name}</span><span className="stack-where mono">{whereLabel[item.where]}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
