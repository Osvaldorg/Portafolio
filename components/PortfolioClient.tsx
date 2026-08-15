"use client";

import { useState, useMemo } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, MessageCircle } from 'lucide-react';
import TerminalHero from '@/components/TerminalHero';
import MagneticButton from '@/components/MagneticButton';
import ProjectList from '@/components/ProjectList';
import SkillsTicker from '@/components/SkillsTicker';
import ContactForm from '@/components/ContactForm';
import StatsRow from '@/components/StatsRow';
import { motion, AnimatePresence } from 'motion/react';
import type {
  PersonalInfo,
  ProjectItem,
  ExperienceItem,
  EducationItem,
  CertificationItem,
} from '@/types/portfolio';

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Highlight keywords in bio text dynamically
function HighlightedBio({ text, keywords }: { text: string; keywords: string[] }) {
  if (!keywords || keywords.length === 0) {
    return <>{text}</>;
  }

  const escaped = keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const isKeyword = keywords.some(k => k.toLowerCase() === part.toLowerCase());
        return isKeyword ? (
          <span key={i} className="text-white font-medium">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

interface PortfolioClientProps {
  personalInfo: PersonalInfo;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
}

let terminalHasPlayed = false;

export default function PortfolioClient({
  personalInfo,
  projects,
  experience,
  education,
  certifications,
}: PortfolioClientProps) {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const [isUnlocked, setIsUnlocked] = useState(terminalHasPlayed);

  const handleTerminalComplete = () => {
    terminalHasPlayed = true;
    setIsUnlocked(true);
  };

  const t = (en: React.ReactNode, es: React.ReactNode) => lang === 'en' ? en : es;

  const bioKeywords = useMemo(
    () => (lang === 'en' ? personalInfo.keywords.en : personalInfo.keywords.es),
    [lang, personalInfo.keywords]
  );
  const bioText = lang === 'en' ? personalInfo.summary.en : personalInfo.summary.es;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f0f0ef] font-sans selection:bg-[#E8FF00]/20 selection:text-[#E8FF00]">

      {/* ── NAV ─────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center pointer-events-none backdrop-blur-sm bg-[#0d0d0d]/70">
        <div className="pointer-events-auto">
          <a href="#" className="font-mono text-xs text-white/30 tracking-[0.2em] uppercase hover:text-white/50 transition-colors">
            OR.dev
          </a>
        </div>
        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6">
          <AnimatePresence>
            {isUnlocked && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 sm:gap-6"
              >
                {/* Section links */}
                <a href="#about" className="text-xs font-mono text-white/30 hover:text-white transition-colors hidden sm:block">
                  {t('About', 'Sobre mí')}
                </a>
                <a href="#projects" className="text-xs font-mono text-white/30 hover:text-white transition-colors hidden sm:block">
                  {t('Projects', 'Proyectos')}
                </a>
                <a href="#experience" className="text-xs font-mono text-white/30 hover:text-white transition-colors hidden sm:block">
                  {t('Experience', 'Experiencia')}
                </a>

                {/* Social icons — separated visually */}
                <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-4">
                  <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-white/25 hover:text-white transition-colors" title="GitHub">
                    <Github size={15} />
                  </a>
                  <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-white/25 hover:text-white transition-colors" title="LinkedIn">
                    <Linkedin size={15} />
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="text-white/25 hover:text-white transition-colors" title="Email">
                    <Mail size={15} />
                  </a>
                </div>

                {/* Contact CTA */}
                <a
                  href="#contact"
                  className="text-[11px] font-mono px-3 py-1.5 bg-[#E8FF00] text-black rounded hover:bg-[#d4e600] transition-colors flex items-center gap-1.5 font-semibold"
                >
                  <MessageCircle size={12} />
                  <span className="hidden sm:inline">{t('Contact', 'Contacto')}</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <MagneticButton
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-[11px] font-mono px-2.5 py-1 border border-white/10 hover:border-white/30 text-white/40 hover:text-white rounded transition-all"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </MagneticButton>
        </div>
      </nav>

      {/* ── MAIN ────────────────────────────────────────── */}
      <main className="max-w-[840px] mx-auto px-6 pt-24 sm:pt-32 pb-32 flex flex-col gap-0">

        {/* ── HERO + TERMINAL ─────────────────────────── */}
        <section className="mb-24 sm:mb-32">
          <div className="mb-10">
            <p className="font-mono text-xs text-[#E8FF00]/70 tracking-widest uppercase mb-4">
              {t('Portfolio', 'Portafolio')} — 2026
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg text-white/40 font-light leading-relaxed max-w-xl">
              {personalInfo.title}
            </p>
          </div>

          <TerminalHero lang={lang} onComplete={handleTerminalComplete} skipAnimation={isUnlocked} />
        </section>

        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col"
            >

              {/* ── ABOUT ─────────────────────────────────── */}
              <section id="about" className="mb-28 scroll-mt-24">
                <FadeIn>
                  <p className="text-xs font-mono text-white/25 tracking-[0.2em] uppercase mb-8">
                    {t('About', 'Sobre mí')}
                  </p>
                  <div className="relative pl-6 border-l-2 border-[#E8FF00]/20">
                    {/* Animated accent line */}
                    <motion.div
                      className="absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-[#E8FF00] to-[#E8FF00]/0"
                      initial={{ height: 0 }}
                      whileInView={{ height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <p className="text-xl sm:text-2xl font-light text-white/50 leading-relaxed max-w-2xl">
                      <HighlightedBio text={bioText} keywords={bioKeywords} />
                    </p>
                  </div>
                </FadeIn>

                {/* Stats Row — dynamic from CMS */}
                <div className="mt-12">
                  <StatsRow stats={personalInfo.stats} lang={lang} />
                </div>
              </section>

              {/* ── SKILLS TICKER ─────────────────────────── */}
              <section className="mb-28 -mx-6">
                <FadeIn>
                  <div className="border-y border-white/[0.06] py-5">
                    <SkillsTicker />
                  </div>
                </FadeIn>
              </section>

              {/* ── PROJECTS ──────────────────────────────── */}
              <section id="projects" className="mb-28 scroll-mt-24">
                <FadeIn>
                  <div className="flex items-baseline justify-between mb-10">
                    <h2 className="text-xs font-mono text-white/25 tracking-[0.2em] uppercase">
                      {t('Selected Projects', 'Proyectos Seleccionados')}
                    </h2>
                    <span className="text-xs font-mono text-white/20">
                      {projects.length} {t('projects', 'proyectos')}
                    </span>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <ProjectList projects={projects} lang={lang} />
                </FadeIn>
              </section>

              {/* ── EXPERIENCE ────────────────────────────── */}
              <section id="experience" className="mb-28 scroll-mt-24">
                <FadeIn>
                  <h2 className="text-xs font-mono text-white/25 tracking-[0.2em] uppercase mb-10">
                    {t('Experience', 'Experiencia')}
                  </h2>
                </FadeIn>

                <div className="flex flex-col">
                  {experience.map((job, idx) => (
                    <FadeIn key={job.id || idx} delay={idx * 0.08}>
                      <div className="editorial-divider" />
                      <div className="py-8 flex flex-col sm:flex-row gap-6 sm:gap-12">
                        <div className="shrink-0 sm:w-48">
                          <p className="text-xs font-mono text-[#E8FF00]/60">{job.period}</p>
                          <p className="text-xs text-white/30 mt-1">{job.location}</p>
                          <p className="text-[11px] font-mono text-white/20 mt-2">{job.type[lang]}</p>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white leading-snug">
                            {job.role[lang]}
                            <span className="text-white/30 font-normal"> — {job.company}</span>
                          </h3>
                          <ul className="mt-4 space-y-2.5">
                            {job.bullets[lang].map((b, i) => (
                              <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                                <span className="text-[#E8FF00]/50 shrink-0 mt-0.5">→</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-5">
                            {job.techStack.map((tech) => (
                              <span key={tech} className="text-[11px] font-mono text-white/30 border border-white/[0.08] px-2 py-0.5 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                  <div className="editorial-divider" />
                </div>
              </section>

              {/* ── EDUCATION & CERTS ─────────────────────── */}
              <section id="education" className="mb-28 scroll-mt-24">
                <FadeIn>
                  <h2 className="text-xs font-mono text-white/25 tracking-[0.2em] uppercase mb-10">
                    {t('Education & Credentials', 'Educación y Credenciales')}
                  </h2>
                </FadeIn>

                <div className="flex flex-col gap-0">
                  {/* Education items */}
                  <FadeIn>
                    <p className="text-[11px] font-mono text-white/20 uppercase tracking-widest mb-6">
                      {t('Degrees', 'Títulos')}
                    </p>
                  </FadeIn>
                  {education.map((edu, idx) => (
                    <FadeIn key={idx} delay={idx * 0.06}>
                      <div className="editorial-divider" />
                      <div className="py-7 flex flex-col sm:flex-row gap-4 sm:gap-12">
                        <div className="shrink-0 sm:w-48">
                          <p className="text-xs font-mono text-white/25">{edu.period}</p>
                          <p className="text-xs text-white/25 mt-1">{edu.location}</p>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-white/80 leading-snug">{edu.degree[lang]}</h3>
                          <p className="text-sm text-[#E8FF00]/50 mt-1">{edu.institution}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                  <div className="editorial-divider" />

                  {/* Certifications / Achievements */}
                  <FadeIn>
                    <p className="text-[11px] font-mono text-white/20 uppercase tracking-widest mt-10 mb-6">
                      {t('Achievements & Certifications', 'Logros y Certificaciones')}
                    </p>
                  </FadeIn>
                  {certifications.map((cert, idx) => (
                    <FadeIn key={cert.id} delay={idx * 0.06}>
                      <div className="editorial-divider" />
                      <div className="py-7 flex flex-col sm:flex-row gap-4 sm:gap-12">
                        <div className="shrink-0 sm:w-48">
                          <p className="text-xs font-mono text-white/25">{cert.date}</p>
                          <p className="text-xs text-[#E8FF00]/50 mt-1">{cert.issuer}</p>
                          {cert.score && <p className="text-xs font-mono text-[#E8FF00]/40 mt-1">{cert.score}</p>}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium text-white/80 leading-snug flex items-center gap-2">
                            {cert.title[lang]}
                            {cert.credentialUrl && (
                              <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="text-white/25 hover:text-[#E8FF00] transition-colors">
                                <ArrowUpRight size={14} />
                              </a>
                            )}
                          </h3>
                          <p className="text-sm text-white/40 mt-1 leading-relaxed">{cert.details[lang]}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                  <div className="editorial-divider" />
                </div>
              </section>

              {/* ── CONTACT ───────────────────────────────── */}
              <section id="contact" className="pt-12 border-t border-white/[0.06] scroll-mt-24">
                <FadeIn>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16">
                    {/* Left — CTA text */}
                    <div>
                      <p className="text-xs font-mono text-[#E8FF00]/50 tracking-widest uppercase mb-4">
                        {t("Let's work together", "Trabajemos juntos")}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                        {t(
                          "Got a project, a job opportunity, or just want to connect?",
                          "¿Tienes un proyecto, una oportunidad laboral o simplemente quieres conectar?"
                        )}
                      </h2>
                      <p className="text-sm text-white/40 leading-relaxed mb-8">
                        {t(
                          "I'm open to new opportunities and projects. Send me a message and I'll get back to you as soon as possible.",
                          "Estoy abierto a nuevas oportunidades y proyectos. Envíame un mensaje y te responderé lo antes posible."
                        )}
                      </p>

                      {/* Direct contact links */}
                      <div className="flex flex-col gap-3 text-sm">
                        <a href={`mailto:${personalInfo.email}`} className="text-white/40 hover:text-[#E8FF00] transition-colors flex items-center gap-3 font-mono">
                          <Mail size={16} className="text-[#E8FF00]/50" /> {personalInfo.email}
                        </a>
                        <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#E8FF00] transition-colors flex items-center gap-3 font-mono">
                          <Github size={16} className="text-[#E8FF00]/50" /> GitHub
                        </a>
                        <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-white/40 hover:text-[#E8FF00] transition-colors flex items-center gap-3 font-mono">
                          <Linkedin size={16} className="text-[#E8FF00]/50" /> LinkedIn
                        </a>
                      </div>
                    </div>

                    {/* Right — Form */}
                    <div>
                      <ContactForm lang={lang} />
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <p className="mt-16 text-[11px] font-mono text-white/15">
                    © 2026 {personalInfo.name}
                  </p>
                </FadeIn>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
