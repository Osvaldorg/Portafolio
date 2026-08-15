"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ProjectItem } from "@/types/portfolio";

export default function ProjectList({ projects, lang }: { projects: ProjectItem[], lang: 'en' | 'es' }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const hoveredProject = projects.find(p => p.id === hoveredId);

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="flex flex-col">
      {projects.map((project, idx) => (
        <div key={project.id}>
          {/* Divider */}
          <div className="editorial-divider" />

          <div
            className="group relative py-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => router.push(`/projects/${project.id}`)}
          >
            {/* Number */}
            <span className="text-xs font-mono text-white/20 shrink-0 w-6 tabular-nums">
              0{idx + 1}
            </span>

            {/* Title + Tags */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#E8FF00] transition-colors duration-200 leading-tight">
                {project.title[lang]}
              </h3>
              <p className="text-sm text-white/40 mt-1 line-clamp-1">
                {project.description[lang]}
              </p>
            </div>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 sm:gap-1.5 shrink-0 sm:max-w-[260px] sm:justify-end">
              {project.technologies.slice(0, 4).map(tech => (
                <span
                  key={tech}
                  className="text-[11px] font-mono text-white/40 group-hover:text-white/60 border border-white/10 group-hover:border-white/20 px-2 py-0.5 rounded transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/30 hover:text-white transition-colors p-1.5"
                  onClick={e => e.stopPropagation()}
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[#E8FF00]/70 hover:text-[#E8FF00] transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  Live <ArrowUpRight size={13} />
                </a>
              )}
              {!project.liveUrl && (
                <span className="text-white/20 text-xs font-mono flex items-center gap-1">
                  {lang === 'en' ? 'Private' : 'Privado'}
                </span>
              )}
            </div>

            {/* Mobile: image visible below on tap */}
            {isMobile && project.imageUrl && (
              <div className="w-full rounded overflow-hidden border border-white/10 mt-1 aspect-[16/10]">
                <Image
                  src={project.imageUrl}
                  alt={project.title[lang]}
                  width={640}
                  height={400}
                  className="object-cover w-full h-full object-top"
                  unoptimized
                />
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Final divider */}
      <div className="editorial-divider" />

      {/* Hover-reveal floating image — desktop only */}
      {!isMobile && (
        <AnimatePresence>
          {hoveredId && hoveredProject?.imageUrl && (
            <motion.div
              key={hoveredId}
              initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.92, rotate: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: mousePos.y + 20,
                left: mousePos.x + 20,
                pointerEvents: "none",
                zIndex: 9998,
                width: 340,
              }}
            >
              <div className="rounded overflow-hidden border border-white/10 shadow-2xl shadow-black/60 aspect-[16/10]">
                <Image
                  src={hoveredProject.imageUrl}
                  alt={hoveredProject.title[lang]}
                  width={640}
                  height={400}
                  className="object-cover w-full h-full object-top"
                  unoptimized
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
