import { getPortfolioData } from '@/lib/getPortfolioData';
import PortfolioClient from '@/components/PortfolioClient';

export const revalidate = 0; // Ensure fresh data from CMS

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
