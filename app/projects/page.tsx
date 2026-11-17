import type { Metadata } from 'next';
import { projects } from '../content';
import { ContactCTA, PageHeader, ProjectPreview } from '../ui/components';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Case studies in data integration, database development and analytics, each with a stated personal contribution and status.',
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Case studies with a clear line around my part."
        intro="Client data integration at Yspace, and backend work on two team products. Each case study states what I built, what teammates built, and what is merged versus still in review."
      />
      <section className="section section-tight container" aria-label="Project list">
        <div className="project-list">
          {projects.map((project, index) => <ProjectPreview key={project.slug} project={project} flip={index % 2 === 1} />)}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
