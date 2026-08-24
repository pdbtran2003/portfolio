import type { Metadata } from 'next';
import { CTA, PageHero, PageShell, TagList } from '../components';
import { capabilities } from '../content';

export const metadata: Metadata = {
  title: 'Capabilities',
  description: 'Capabilities across business process analysis, application implementation, data integration, analytics, modelling and automation.',
};

export default function CapabilitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Capabilities / 01—06"
        title="Business, systems and data—connected."
        intro="Capabilities organised around the work required to move from an operational problem to a maintainable system and trustworthy reporting."
      />

      <section className="capabilities-page shell">
        {capabilities.map((capability) => (
          <article className="capability-detail grid-12" key={capability.index}>
            <div className="capability-title">
              <span>{capability.index}</span>
              <h2>{capability.title}</h2>
            </div>
            <div className="capability-detail-copy">
              <p className="capability-focus">{capability.focus}</p>
              <TagList items={capability.items} />
            </div>
            <div className="capability-tools">
              <p className="eyebrow">Typical output / tools</p>
              <p>{capability.outputs.join(' · ')}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="foundation shell">
        <p className="eyebrow">Engineering foundations</p>
        <h2>Technical foundations support the systems and data work.</h2>
        <TagList items={['Python', 'SQL', '.NET exposure', 'FastAPI — learning / project work', 'SQLAlchemy — learning / project work', 'Git', 'GitHub', 'Docker']} />
      </section>
      <CTA />
    </PageShell>
  );
}
