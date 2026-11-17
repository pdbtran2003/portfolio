import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Manrope } from 'next/font/google';
import './globals.css';
import { RevealController, SiteNav } from './ui/client';
import { SiteFooter } from './ui/components';
import { themeInitScript } from './ui/theme-script';

const display = Manrope({ subsets: ['latin', 'vietnamese'], variable: '--font-display', display: 'swap' });
const body = Inter({ subsets: ['latin', 'vietnamese'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

// Mirrors basePath in next.config.ts: metadata URLs are not prefixed automatically.
const base = process.env.GITHUB_ACTIONS === 'true' ? '/portfolio' : '';

const description =
  'Data & Engineering portfolio of Phan Dang Bao Tran: data integration, database development and analytics, grounded in how businesses operate.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:3000'),
  title: {
    default: 'Phan Dang Bao Tran — Data & Engineering',
    template: '%s — Phan Dang Bao Tran',
  },
  description,
  icons: { icon: `${base}/mark-a.png`, apple: `${base}/mark-a.png` },
  openGraph: {
    title: 'Phan Dang Bao Tran — Data & Engineering',
    description,
    type: 'website',
    images: [{ url: `${base}/og.png`, width: 1200, height: 630, alt: 'Phan Dang Bao Tran — Data & Engineering' }],
  },
  twitter: { card: 'summary', title: 'Phan Dang Bao Tran — Data & Engineering', description, images: [`${base}/og.png`] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5FAFC' },
    { media: '(prefers-color-scheme: dark)', color: '#171E23' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteNav />
        <main id="main" tabIndex={-1}>{children}</main>
        <SiteFooter />
        <RevealController />
      </body>
    </html>
  );
}
