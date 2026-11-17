import type { Metadata } from 'next';
import './globals.css';
import { NavScroll, SmoothScroll } from './motion';

// Mirrors basePath in next.config.ts: metadata URLs are not prefixed automatically.
const base = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000'),
  title: {
    default: 'Phan Dang Bao Tran — Business & Data Analyst',
    template: '%s — Phan Dang Bao Tran',
  },
  description:
    'Business & Data Analyst focused on digital transformation, business applications, data integration, automation and analytics.',
  icons: { icon: `${base}/mark-a.png`, apple: `${base}/mark-a.png` },
  openGraph: {
    title: 'Phan Dang Bao Tran — Business, Data & Systems',
    description:
      'Selected work across business process design, operational systems, data integration, automation and analytics.',
    type: 'website',
    images: [{ url: `${base}/og.png`, width: 1200, height: 630, alt: 'Phan Dang Bao Tran — Business + Systems + Data + Automation' }],
  },
  twitter: {
    card: 'summary',
    title: 'Phan Dang Bao Tran — Business, Data & Systems',
    description:
      'Selected work across business process design, operational systems, data integration, automation and analytics.',
    images: [`${base}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <NavScroll />
        {children}
      </body>
    </html>
  );
}
