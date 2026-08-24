import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, PageShell } from '../components';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Phan Dang Bao Tran about Business Analysis, Data Analytics, Business Applications and digital transformation opportunities.',
};

const areas = ['Business Analysis', 'Data Analytics', 'Business Applications', 'Data Integration', 'Digital Transformation'];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact / Opportunities"
        title="Let’s build something useful."
        intro="Open to opportunities across Business Analysis, Data Analytics, Business Applications and digital transformation."
      />

      <section className="contact-layout shell grid-12">
        <div className="contact-status">
          <p className="eyebrow">Focus areas</p>
          <ul>{areas.map((area) => <li key={area}>{area}</li>)}</ul>
        </div>
        <div className="contact-panel">
          <p className="eyebrow">Direct contact</p>
          <h2>Contact links will appear here once the verified details are supplied.</h2>
          <p>No email address, LinkedIn profile, GitHub profile or résumé file was included in the source material, so this page intentionally avoids invented links and non-functional forms.</p>
          <Link className="text-link" href="/work">Review selected work <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </PageShell>
  );
}
