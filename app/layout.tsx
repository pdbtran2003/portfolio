import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000'),
  title: {
    default: 'Phan Dang Bao Tran — Business & Data Analyst',
    template: '%s — Phan Dang Bao Tran',
  },
  description:
    'Business & Data Analyst focused on digital transformation, business applications, data integration, automation and analytics.',
  openGraph: {
    title: 'Phan Dang Bao Tran — Business, Data & Systems',
    description:
      'Selected work across business process design, operational systems, data integration, automation and analytics.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Phan Dang Bao Tran — Business + Systems + Data + Automation' }],
  },
  twitter: {
    card: 'summary',
    title: 'Phan Dang Bao Tran — Business, Data & Systems',
    description:
      'Selected work across business process design, operational systems, data integration, automation and analytics.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
