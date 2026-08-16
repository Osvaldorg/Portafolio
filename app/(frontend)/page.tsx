import { getPortfolioData } from '@/lib/getPortfolioData';
import PortfolioClient from '@/components/PortfolioClient';

export const revalidate = 3600; // Cache for 1 hour in production

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <PortfolioClient
      personalInfo={data.personalInfo}
      projects={data.projects}
      experience={data.experience}
      education={data.education}
      certifications={data.certifications}
    />
  );
}
