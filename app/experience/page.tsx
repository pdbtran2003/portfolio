import type { Metadata } from 'next';
import { CTA, PageHero, PageShell, TagList } from '../components';
import { metrics } from '../content';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience across business applications, data integration, analytics and software-development foundations.',
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Experience / Timeline"
        title="From engineering foundations to end-to-end digital transformation."
        intro="Experience across business application implementation on Lark, operational data integration and analytics, supported by software-development practice."
      />

      <section className="timeline shell" aria-label="Professional experience">
        <article className="timeline-item grid-12">
          <div className="timeline-meta"><span>01</span><p>October 2025 — Present</p><strong>Yspace</strong></div>
          <div className="timeline-content">
            <h2>Data Analyst / Business Application Process</h2>
            <p>I work across two closely connected areas: business application implementation on Lark and data integration / analytics.</p>
            <div className="responsibility-grid">
              <div>
                <h3>Business Application Process</h3>
                <p>Translate enterprise operations into structured systems on Lark Base through process analysis, requirements, entities, relationships, business rules, approvals, permissions, automation, documentation and handover.</p>
                <TagList items={['Sales', 'Finance', 'HRM', 'Attendance', 'Ticket / requests', 'Inventory', 'Purchasing', 'Production', 'E-commerce operations']} />
              </div>
              <div>
                <h3>Data Integration & Analytics</h3>
                <p>Connect commerce and operational platforms, standardise data, work with BigQuery and SQL, handle JSON and timestamps, validate consistency, and prepare dashboards and reporting layers.</p>
                <TagList items={['Lark AnyCross', 'BigQuery', 'SQL', 'Looker Studio', 'Data validation']} />
              </div>
            </div>
            <div className="experience-metrics">
              {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
            <p className="confidential-note">Metrics are aggregate portfolio indicators. Customer names and sensitive implementation details are intentionally omitted.</p>
          </div>
        </article>

        <article className="timeline-item grid-12">
          <div className="timeline-meta"><span>02</span><p>September 2025 — December 2025</p><strong>FPT Software</strong></div>
          <div className="timeline-content">
            <h2>.NET Developer Intern</h2>
            <p>Worked in a software development environment with exposure to application development practices, software-engineering workflow and team-based development.</p>
            <TagList items={['Software development lifecycle', 'Codebase collaboration', 'Version control', 'Backend / application concepts', 'Engineering teamwork']} />
          </div>
        </article>
      </section>

      <section className="trajectory shell">
        <p className="eyebrow">How the experience connects</p>
        <div className="trajectory-grid">
          <div><span>Business</span><p>Understand processes, requirements and business rules.</p></div>
          <div><span>System</span><p>Translate them into applications, workflows and data models.</p></div>
          <div><span>Data</span><p>Integrate, transform and analyse the resulting operational data.</p></div>
        </div>
      </section>
      <CTA />
    </PageShell>
  );
}
