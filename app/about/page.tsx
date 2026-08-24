import type { Metadata } from 'next';
import Link from 'next/link';
import { CTA, PageHero, PageShell, ProcessDiagram, SectionHeading, TagList } from '../components';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Phan Dang Bao Tran and an approach spanning business operations, systems, data and automation.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About / Profile"
        title="Shaping clarity from operational complexity."
        intro="I work at the intersection of business operations, systems and data."
      />

      <section className="about-intro shell grid-12">
        <div className="about-statement">
          <p className="eyebrow">What I do</p>
          <h2>I turn business processes into structured systems, integrated data, automation and actionable business insights.</h2>
        </div>
        <div className="prose-stack">
          <p>My projects typically start with an operational problem rather than a technology choice: fragmented spreadsheets, manual approvals, disconnected data sources, repetitive work or limited visibility for management.</p>
          <p>I analyse the current process, identify business rules and dependencies, design a practical to-be process, model the data, implement the operational system, automate repetitive steps and connect the resulting data to analytics and reporting.</p>
        </div>
      </section>

      <section className="about-process shell">
        <SectionHeading index="01" title="How I work" note="A cross-layer approach grounded in the operation itself." />
        <ProcessDiagram label="From operational problem to useful insight" steps={['Business problem', 'Process analysis', 'System design', 'Data model', 'Implementation', 'Automation', 'Data integration', 'Analytics']} />
      </section>

      <section className="about-strengths shell">
        <SectionHeading index="02" title="What I am best at" />
        <TagList items={['Translating requirements into workflows', 'Connecting process and data structures', 'Practical operational data models', 'Workflow automation', 'Multi-source data integration', 'Dashboards and management views']} />
      </section>

      <section className="career-direction shell grid-12">
        <p className="eyebrow">Career direction</p>
        <div>
          <h2>Roles where business analysis, systems thinking and data intersect.</h2>
          <p>Business Analyst · Data Analyst · System Analyst · Solution Consultant · Digital Transformation / Business Application</p>
          <Link className="text-link" href="/experience">View experience <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <CTA />
    </PageShell>
  );
}
