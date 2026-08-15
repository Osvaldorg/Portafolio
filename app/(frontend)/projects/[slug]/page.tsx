import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, Play } from 'lucide-react';
import ProjectGallery, { GalleryImage } from '@/components/ProjectGallery';
import { getPortfolioData } from '@/lib/getPortfolioData';

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

  // Construct gallery images from Payload or fallback thumbnail
  const galleryImages: GalleryImage[] = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [
        {
          url: project.imageUrl || '/images/rental_cars_real.png',
          caption_en: 'Main View',
          caption_es: 'Vista Principal',
        },
      ];

  // Helper for video embed conversion
  const getVideoEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/');
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1];
      return `https://www.youtube.com/embed/${id}`;
    }
    if (url.includes('loom.com/share/')) {
      return url.replace('/share/', '/embed/');
    }
    return url;
  };

  const embedVideoUrl = getVideoEmbedUrl(project.videoUrl);

  return (
    <main className="max-w-[840px] mx-auto px-6 pt-24 pb-32 min-h-screen text-[#f0f0ef] bg-[#0d0d0d]">
      <Link 
        href="/#projects" 
        className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-[#E8FF00] transition-colors mb-12"
      >
        <ArrowLeft size={16} /> Volver al Portafolio
      </Link>

      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-mono border border-[#E8FF00]/30 text-[#E8FF00] rounded-full">
            {project.period}
          </span>
          <span className="text-xs font-mono text-white/40">{project.type.es || project.type.en}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
          {project.title.es || project.title.en}
        </h1>

        <p className="text-lg sm:text-xl text-white/60 font-light leading-relaxed mb-8 max-w-2xl">
          {project.description.es || project.description.en}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8FF00] text-black font-semibold rounded hover:bg-[#d4e600] transition-colors text-sm"
            >
              Ver Proyecto en Vivo <ArrowUpRight size={18} />
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors text-sm font-mono"
            >
              <Github size={18} /> Código Fuente
            </a>
          )}
        </div>
      </header>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Tecnologías Utilizadas</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span 
              key={tech}
              className="px-3 py-1.5 bg-white/5 border border-white/10 text-white/70 rounded text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Highlights */}
      {(project.highlights.es?.length > 0 || project.highlights.en?.length > 0) && (
        <section className="mb-16">
          <h2 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Puntos Clave del Proyecto</h2>
          <ul className="space-y-3">
            {(project.highlights.es || project.highlights.en).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                <span className="text-[#E8FF00] shrink-0 mt-0.5">→</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Video Demo (if available) */}
      {embedVideoUrl && (
        <section className="mb-16">
          <h2 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Play size={14} className="text-[#E8FF00]" /> Demo en Video
          </h2>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              src={embedVideoUrl}
              title="Video Demo"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Media Gallery */}
      <section>
        <h2 className="text-xs font-mono text-white/30 uppercase tracking-widest mb-2">Galería de Capturas</h2>
        <ProjectGallery images={galleryImages} lang="es" />
      </section>
    </main>
  );
}
