import type { Metadata } from 'next';
import { CTA, PageHero, PageShell, TagList } from '../components';
import { metrics } from '../content';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in data integration, analytics and business-system implementation.',
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Experience / Timeline"
        title="Data integration and business systems for enterprise clients."
        intro="Client-facing work connecting platform data to warehouses and reports, alongside implementing operational modules on Lark."
      />

      <section className="timeline shell" aria-label="Professional experience">
        <article className="timeline-item grid-12">
          <div className="timeline-meta"><span>01</span><p>October 2025 — August 2026</p><strong>Yspace</strong></div>
          <div className="timeline-content">
            <h2>Data Integration & Business Systems Implementation</h2>
            <p>Two parallel tracks for enterprise clients: connecting platform data into BigQuery and Lark Base for reporting (DA), and implementing operational modules on Lark (BAP).</p>
            <div className="responsibility-grid">
              <div>
                <h3>DA — Data integration & analytics</h3>
                <p>Connected e-commerce and operational platforms to BigQuery and Lark Base: paginated API ingestion, incremental sync with last-sync checkpoints, type conversion, deduplication and business-key MERGE / upsert, batched writes to Lark Base, then SQL KPI datasets and Looker Studio dashboards. Ran discovery, access collection, review and handover with the client.</p>
                <TagList items={['Lark AnyCross', 'Elton', 'BigQuery', 'SQL', 'Looker Studio', 'JavaScript', 'Python', 'n8n']} />
              </div>
              <div>
                <h3>BAP — Lark business systems</h3>
                <p>Translated client operating processes into Lark Base modules: records, fields, forms, views and workflows. Delivered each module through kick-off, scope clarification, implementation, training, trial operation, review and acceptance.</p>
                <TagList items={['Finance (income / expense, AR, AP)', 'HRM', 'Recruitment', 'Onboarding', 'Attendance', 'Payroll', 'Marketing', 'Management', 'Logistics / Warehouse']} />
              </div>
            </div>
            <div className="experience-metrics">
              {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
            <p className="confidential-note">Metrics are reported scope across both tracks. Customer names and sensitive implementation details are intentionally omitted.</p>
          </div>
        </article>

        <article className="timeline-item grid-12">
          <div className="timeline-meta"><span>02</span><p>August 2024 — July 2025</p><strong>ILA English Center</strong></div>
          <div className="timeline-content">
            <h2>Teaching Assistant · Da Nang</h2>
            <p>Supported instruction across 6+ classes of 10–20 students each and adapted learning materials. Tracked class performance in Google Sheets to monitor progress and recommend improvements, and coordinated with teachers, students and parents, including grading support and inquiries.</p>
            <TagList items={['Class-performance monitoring', 'Improvement recommendations', 'Stakeholder coordination', 'Grading support', 'Google Sheets', 'Google Docs']} />
          </div>
        </article>

        <article className="timeline-item grid-12">
          <div className="timeline-meta"><span>03</span><p>March 2025 — May 2025</p><strong>AVN Audit</strong></div>
          <div className="timeline-content">
            <h2>Intern · Da Nang</h2>
            <p>Gathered and documented client financial-process information for audit-related work. Entered and analysed 500+ transaction records in Excel to identify discrepancies, and summarised findings in reports for further review, handling sensitive financial data with accuracy and confidentiality.</p>
            <TagList items={['Transaction data analysis', 'Discrepancy review', 'Process documentation', 'Findings reports', 'Excel']} />
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
