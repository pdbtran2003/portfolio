import type { Metadata } from 'next';
import { MovedNotice } from '../ui/components';

export const metadata: Metadata = { title: 'Projects', robots: { index: false } };

// Old route kept so shared links keep working.
export default function WorkRedirect() {
  return <MovedNotice to="/projects" label="Projects" />;
}
