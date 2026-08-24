import type { Metadata } from 'next';
import { CTA, PageHero, PageShell, ProjectGrid } from '../components';
import { projects } from '../content';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Case studies across business process design, operational systems, data integration, automation and analytics.',
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Selected Work / 01—05"
        title="Work built around real business operations."
        intro="Five case studies showing how process analysis, system modelling, implementation, data integration and analytics connect."
      />
      <section className="work-page shell" aria-label="Portfolio projects">
        <ProjectGrid projects={projects} />
      </section>
      <CTA title="Have a process that needs structure?" />
    </PageShell>
  );
}
