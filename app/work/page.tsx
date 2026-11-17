import type { Metadata } from 'next';
import { CTA, PageHero, PageShell, ProjectGrid } from '../components';
import { projects } from '../content';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Current projects across business systems, data integration, automation and reporting.',
};

export default function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Selected Work / 01—03"
        title="Work built around real business operations."
        intro="Three projects currently in progress. Case studies are being written from the source repositories."
      />
      <section className="work-page shell" aria-label="Portfolio projects">
        <ProjectGrid projects={projects} />
      </section>
      <CTA title="Have a process that needs structure?" />
    </PageShell>
  );
}
