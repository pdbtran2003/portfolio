import type { Metadata } from 'next';
import Link from 'next/link';
import { approach } from '../content';
import { ContactCTA, PageHeader, SectionHead } from '../ui/components';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Phan Dang Bao Tran: a data and engineering practitioner who starts from how a business operates.',
};

const interests = [
  { title: 'Data engineering', copy: 'Incremental pipelines, idempotent syncs and jobs that are safe to run twice.' },
  { title: 'Database systems', copy: 'Constraints, migrations and concurrency control that keep data correct under load.' },
  { title: 'Integration', copy: 'Moving data between platforms with clear contracts and honest error handling.' },
  { title: 'Analytics', copy: 'KPI definitions the business agrees with, and reporting people actually use.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="I start from how the business works, then build the data around it."
        intro="I work across data integration, database development and analytics. Most of my work begins with an operational question, not a technology choice."
      />

      <section className="section section-tight container about-grid" aria-labelledby="background-title">
        <div className="about-label" data-reveal><p className="eyebrow">Background</p></div>
        <div className="prose prose-large" data-reveal>
          <h2 id="background-title" className="visually-hidden">Background</h2>
          <p>At Yspace I worked with enterprise clients on two parallel tracks: connecting e-commerce and operational data into BigQuery and Lark Base for reporting, and turning client processes into business modules on Lark.</p>
          <p>Alongside that, I build backend features for two team products—attendance and payroll on PostgreSQL and TypeScript, and billing and job scheduling on Python and PostgreSQL. That work taught me to put rules in the database, make jobs safe to re-run and state clearly what is finished and what is still in review.</p>
          <p>Earlier, as a teaching assistant at ILA English Center and an audit intern at AVN Audit, I tracked class performance across 6+ classes and reviewed 500+ transaction records for discrepancies. Different settings, same habit: careful records and clear reporting.</p>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="approach-title">
        <div className="container">
          <SectionHead index="01" label="Working approach" id="approach-title" title="Four movements, in order." />
          <ol className="approach">
            {approach.map((step) => (
              <li key={step.index} data-reveal>
                <span className="mono">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section container" aria-labelledby="interests-title">
        <SectionHead index="02" label="Areas of interest" id="interests-title" title="Where I want to go deeper." />
        <dl className="interests">
          {interests.map((item) => (
            <div key={item.title} data-reveal>
              <dt>{item.title}</dt>
              <dd>{item.copy}</dd>
            </div>
          ))}
        </dl>
        <div className="about-links" data-reveal>
          <Link href="/experience" className="text-link">Experience <span className="arrow" aria-hidden="true">→</span></Link>
          <Link href="/projects" className="text-link">Projects <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
