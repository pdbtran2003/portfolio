import type { Metadata } from 'next';
import { MovedNotice } from '../ui/components';

export const metadata: Metadata = { title: 'Capabilities', robots: { index: false } };

// Capabilities now live on the home page; this keeps old links working.
export default function CapabilitiesRedirect() {
  return <MovedNotice to="" label="the home page" />;
}
