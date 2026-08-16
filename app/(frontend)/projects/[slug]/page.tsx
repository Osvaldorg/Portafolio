import { notFound } from 'next/navigation';
import { getPortfolioData } from '@/lib/getPortfolioData';
import ProjectDetailClient from './ProjectDetailClient';

export const revalidate = 3600; // Cache for 1 hour in production

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { projects } = await getPortfolioData();
  const project = projects.find((p) => p.id === slug || p.title.en.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
