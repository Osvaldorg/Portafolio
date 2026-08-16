"use client";

import { useLang } from "@/lib/LanguageContext";
import type { PersonalInfo } from "@/types/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";

interface FooterProps {
  personalInfo: PersonalInfo;
}

export default function Footer({ personalInfo }: FooterProps) {
  const { t } = useLang();

  const navLinks = [
    { href: "#about", label: t("About", "Sobre mí") },
    { href: "#projects", label: t("Projects", "Proyectos") },
    { href: "#experience", label: t("Experience", "Experiencia") },
    { href: "#education", label: t("Education", "Educación") },
    { href: "#contact", label: t("Contact", "Contacto") },
  ];

  return (
    <footer className="bg-[#111111] border-t border-white/[0.06]">
      <div className="max-w-[840px] mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-10 sm:gap-16 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            {/* OR Logo Mark */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0d0d0d] border border-[#E8FF00]/30 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-[#E8FF00]">OR</span>
              </div>
              <div>
                <a href="#" className="font-mono text-xs text-white/50 tracking-[0.15em] uppercase hover:text-white transition-colors">
                  OR.DEV
                </a>
              </div>
            </div>
            <p className="text-xs text-white/25 leading-relaxed max-w-[280px]">
              {t(
                "Software Engineer focused on Full Stack, Mobile & QA. Open to new opportunities.",
                "Ingeniero de Software enfocado en Full Stack, Móvil y QA. Abierto a nuevas oportunidades."
              )}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-3 pb-2 border-b border-[#E8FF00]/30">
              {t("Navigation", "Navegación")}
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-mono text-white/35 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <p className="text-[11px] font-mono text-white/30 uppercase tracking-widest mb-3 pb-2 border-b border-[#E8FF00]/30">
              {t("Connect", "Conectar")}
            </p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="text-xs font-mono text-white/35 hover:text-white transition-colors flex items-center gap-2">
                  <Mail size={14} /> {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-white/35 hover:text-white transition-colors flex items-center gap-2">
                  <Github size={14} /> GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-xs font-mono text-white/35 hover:text-white transition-colors flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div className="editorial-divider" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-6">
          <p className="text-[11px] font-mono text-white/15">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="text-[11px] font-mono text-white/10">
            {t("Built with", "Hecho con")}{" "}
            <span className="text-[#E8FF00]/20">Next.js</span>{" & "}
            <span className="text-[#E8FF00]/20">Payload CMS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
