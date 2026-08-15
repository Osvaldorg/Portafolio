import { getPayload } from 'payload';
import configPromise from '@payload-config';
import {
  personalInfo as fallbackPersonalInfo,
  experienceData as fallbackExperienceData,
  educationData as fallbackEducationData,
  projectsData as fallbackProjectsData,
  certificationsData as fallbackCertificationsData,
  skillCategories as fallbackSkillCategories,
} from '@/data/portfolioData';
import type {
  PersonalInfo,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
} from '@/types/portfolio';

// Helper to safely get media URL
function getMediaUrl(mediaObj: any): string | undefined {
  if (!mediaObj) return undefined;
  if (typeof mediaObj === 'string') {
    if (mediaObj.startsWith('http') || mediaObj.startsWith('/')) return mediaObj;
    return `/api/media/file/${mediaObj}`;
  }
  if (mediaObj.url) return mediaObj.url;
  if (mediaObj.filename) return `/api/media/file/${mediaObj.filename}`;
  return undefined;
}

// Helper to parse array fields (JSON or string array)
function parseArray(field: any): string[] {
  if (!field) return [];
  if (Array.isArray(field)) return field.map((item) => String(item));
  if (typeof field === 'string') {
    try {
      const parsed = JSON.parse(field);
      if (Array.isArray(parsed)) return parsed.map((item) => String(item));
    } catch {
      return [field];
    }
  }
  return [];
}

export async function getPortfolioData() {
  try {
    const payload = await getPayload({ config: configPromise });

    // 1. Fetch SiteConfig Global
    let personalInfo: PersonalInfo = fallbackPersonalInfo;
    try {
      const siteConfig = await payload.findGlobal({ slug: 'site-config' });
      if (siteConfig) {
        personalInfo = {
          name: siteConfig.name || fallbackPersonalInfo.name,
          title: siteConfig.title_es || fallbackPersonalInfo.title,
          subtitle: fallbackPersonalInfo.subtitle,
          email: siteConfig.email || fallbackPersonalInfo.email,
          phone: siteConfig.phone || fallbackPersonalInfo.phone,
          location: siteConfig.location || fallbackPersonalInfo.location,
          github: siteConfig.github_url ? siteConfig.github_url.replace('https://', '') : fallbackPersonalInfo.github,
          githubUrl: siteConfig.github_url || fallbackPersonalInfo.githubUrl,
          linkedinUrl: siteConfig.linkedin_url || fallbackPersonalInfo.linkedinUrl,
          summary: {
            en: siteConfig.bio_en || fallbackPersonalInfo.summary.en,
            es: siteConfig.bio_es || fallbackPersonalInfo.summary.es,
          },
          keywords: {
            en: parseArray((siteConfig as any).keywords_en),
            es: parseArray((siteConfig as any).keywords_es),
          },
          highlights: fallbackPersonalInfo.highlights,
          stats: Array.isArray((siteConfig as any).stats)
            ? (siteConfig as any).stats.map((s: any) => ({
                value: s.value || '',
                label: { en: s.label_en || '', es: s.label_es || '' },
              }))
            : fallbackPersonalInfo.stats,
        };
      }
    } catch (e) {
      console.warn('Payload site-config fetch error, using fallback:', e);
    }

    // 2. Fetch Projects
    let projects: ProjectItem[] = fallbackProjectsData;
    try {
      const projectsRes = await payload.find({
        collection: 'projects',
        sort: 'order',
        depth: 2,
        limit: 50,
      });

      if (projectsRes.docs && projectsRes.docs.length > 0) {
        projects = projectsRes.docs.map((doc: any) => {
          const thumbnailObj = doc.thumbnail;
          const imageUrl = getMediaUrl(thumbnailObj) || '/images/rental_cars_real.png';

          const gallery = (doc.gallery || []).map((item: any) => ({
            url: getMediaUrl(item.image) || '',
            caption_en: item.caption_en || '',
            caption_es: item.caption_es || '',
          })).filter((g: any) => Boolean(g.url));

          return {
            id: doc.slug || doc.id,
            title: {
              en: doc.title_en || doc.title_es,
              es: doc.title_es || doc.title_en,
            },
            category: doc.category || 'fullstack',
            period: doc.period || '2026',
            type: {
              en: doc.type_en || 'Project',
              es: doc.type_es || 'Proyecto',
            },
            description: {
              en: doc.description_en || doc.description_es,
              es: doc.description_es || doc.description_en,
            },
            highlights: {
              en: parseArray(doc.highlights_en),
              es: parseArray(doc.highlights_es),
            },
            technologies: parseArray(doc.technologies),
            githubUrl: doc.github_url || undefined,
            liveUrl: doc.live_url || undefined,
            imageUrl,
            videoUrl: doc.video_url || undefined,
            gallery: gallery.length > 0 ? gallery : undefined,
            demoType: 'web-app' as const,
          };
        });
      }
    } catch (e) {
      console.warn('Payload projects fetch error, using fallback:', e);
    }

    // 3. Fetch Experience
    let experience: ExperienceItem[] = fallbackExperienceData;
    try {
      const expRes = await payload.find({
        collection: 'experience',
        sort: 'order',
        depth: 1,
        limit: 50,
      });

      if (expRes.docs && expRes.docs.length > 0) {
        experience = expRes.docs.map((doc: any) => ({
          id: doc.id,
          role: {
            en: doc.role_en || doc.role_es,
            es: doc.role_es || doc.role_en,
          },
          company: doc.company,
          type: {
            en: doc.type_en || 'Role',
            es: doc.type_es || 'Rol',
          },
          period: doc.period,
          location: doc.location || 'Aguascalientes, Mexico',
          category: doc.category || 'fullstack',
          techStack: parseArray(doc.tech_stack),
          bullets: {
            en: parseArray(doc.bullets_en),
            es: parseArray(doc.bullets_es),
          },
        }));
      }
    } catch (e) {
      console.warn('Payload experience fetch error, using fallback:', e);
    }

    // 4. Fetch Education
    let education: EducationItem[] = fallbackEducationData;
    try {
      const eduRes = await payload.find({
        collection: 'education',
        sort: 'order',
        depth: 1,
        limit: 50,
      });

      if (eduRes.docs && eduRes.docs.length > 0) {
        education = eduRes.docs.map((doc: any) => ({
          degree: {
            en: doc.degree_en || doc.degree_es,
            es: doc.degree_es || doc.degree_en,
          },
          institution: doc.institution,
          location: doc.location || 'Aguascalientes, Mexico',
          period: doc.period,
        }));
      }
    } catch (e) {
      console.warn('Payload education fetch error, using fallback:', e);
    }

    // 5. Fetch Certifications
    let certifications: CertificationItem[] = fallbackCertificationsData;
    try {
      const certRes = await payload.find({
        collection: 'certifications',
        sort: 'order',
        depth: 1,
        limit: 50,
      });

      if (certRes.docs && certRes.docs.length > 0) {
        certifications = certRes.docs.map((doc: any) => ({
          id: doc.id,
          title: {
            en: doc.title_en || doc.title_es,
            es: doc.title_es || doc.title_en,
          },
          issuer: doc.issuer,
          date: doc.date,
          details: {
            en: doc.details_en || '',
            es: doc.details_es || '',
          },
          badgeText: doc.badge_text || 'Certified',
          credentialUrl: doc.credential_url || undefined,
          score: doc.score || undefined,
        }));
      }
    } catch (e) {
      console.warn('Payload certifications fetch error, using fallback:', e);
    }

    return {
      personalInfo,
      projects,
      experience,
      education,
      certifications,
      skillCategories: fallbackSkillCategories,
    };
  } catch (error) {
    console.error('Error connecting to Payload CMS, using fallback static data:', error);
    return {
      personalInfo: fallbackPersonalInfo,
      projects: fallbackProjectsData,
      experience: fallbackExperienceData,
      education: fallbackEducationData,
      certifications: fallbackCertificationsData,
      skillCategories: fallbackSkillCategories,
    };
  }
}
