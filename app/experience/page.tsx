import type { Metadata } from 'next';
import Link from 'next/link';
import { experience, metrics, metricsSource, projects } from '../content';
import { ContactCTA, PageHeader, Tags } from '../ui/components';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in data integration, analytics and business-system implementation, plus earlier roles.',
};

export default function ExperiencePage() {
  const teamProjects = projects.filter((project) => project.slug !== 'yspace');
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Data integration and business systems for enterprise clients."
        intro="Most recently at Yspace, on two parallel tracks. Earlier roles built the habits the data work relies on: careful records, clear reporting and steady coordination."
      />

      <section className="section section-tight container" aria-label="Roles">
        <ol className="timeline">
          {experience.map((role) => (
            <li key={role.slug} className={`timeline-role ${role.tracks ? 'is-major' : ''}`}>
              <div className="timeline-meta" data-reveal>
                <p className="mono">{role.period}</p>
                {role.location && <p className="dim">{role.location}</p>}
              </div>
              <div className="timeline-body">
                <h2 data-reveal>{role.employer}</h2>
                <p className="role-title" data-reveal>{role.title}</p>
                <p className="role-summary" data-reveal>{role.summary}</p>

                {role.tracks && (
                  <div className="tracks">
                    {role.tracks.map((track) => (
                      <div key={track.label} className="track" data-reveal>
                        <h3>{track.label}</h3>
                        <p>{track.copy}</p>
                        <Tags items={track.tags} />
                      </div>
                    ))}
                  </div>
                )}

                {role.showMetrics && (
                  <div className="role-metrics" data-reveal>
                    <dl className="metric-strip metric-strip-compact">
                      {metrics.map((metric) => (
                        <div key={metric.label}><dt>{metric.label}</dt><dd className="metric-value">{metric.value}</dd></div>
                      ))}
                    </dl>
                    <p className="metric-source mono">{metricsSource} Client names are omitted.</p>
                  </div>
                )}

                {!role.tracks && <Tags items={role.tools} label="Tools" />}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section-tint" aria-labelledby="team-title">
        <div className="container team-projects">
          <div data-reveal>
            <p className="eyebrow">Team projects</p>
            <h2 id="team-title">Backend work outside employment.</h2>
            <p className="section-intro">Two products built by a team of three. They are team projects, not roles at an employer, so they sit here rather than on the timeline.</p>
          </div>
          <ul className="team-list">
            {teamProjects.map((project) => (
              <li key={project.slug} data-reveal>
                <Link href={`/projects/${project.slug}`}>
                  <span className="team-name">{project.title}</span>
                  <span className="team-copy">{project.contribution}</span>
                  <span className="mono dim">{project.status}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
