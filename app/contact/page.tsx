import type { Metadata } from 'next';
import Link from 'next/link';
import { contact } from '../content';
import { withBase } from '../ui/base';
import { PageHeader } from '../ui/components';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Phan Dang Bao Tran about data engineering, database development and analytics roles.',
};

const focus = ['Data Engineering', 'Database Development', 'Data Analytics', 'Automation & Integration'];

export default function ContactPage() {
  const channels = [
    contact.email && { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    contact.linkedin && { label: 'LinkedIn', value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: contact.linkedin },
    contact.github && { label: 'GitHub', value: contact.github.replace(/^https?:\/\//, ''), href: contact.github },
    contact.cv && { label: 'CV', value: 'Download PDF', href: withBase(contact.cv), download: true },
  ].filter(Boolean) as Array<{ label: string; value: string; href: string; download?: boolean }>;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk about data that has to be right."
        intro="Open to roles in data engineering, database development and analytics, and to conversations with teams who care how their data moves."
      />
      <section className="section section-tight container contact-grid" aria-label="Contact channels">
        <ul className="channels">
          {channels.map((channel) => (
            <li key={channel.label} data-reveal>
              <a href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" download={channel.download || undefined}>
                <span className="mono">{channel.label}</span>
                <span className="channel-value">{channel.value} <span aria-hidden="true">↗</span></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="contact-side" data-reveal>
          <p className="eyebrow">Based in</p>
          <p>Da Nang, Vietnam</p>
          <p className="eyebrow">Focus areas</p>
          <ul className="dash-list">{focus.map((item) => <li key={item}>{item}</li>)}</ul>
          <Link href="/projects" className="text-link">Review the projects first <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </section>
    </>
  );
}
