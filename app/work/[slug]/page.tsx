import type { Metadata } from 'next';
import { getProject, projects } from '../../content';
import { MovedNotice } from '../../ui/components';

export const metadata: Metadata = { robots: { index: false } };

// Old route kept so shared links keep working.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function WorkProjectRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <MovedNotice to={`/projects/${slug}`} label={getProject(slug)?.title ?? 'Projects'} />;
}
