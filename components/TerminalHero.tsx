"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { FastForward } from "lucide-react";

export default function TerminalHero({ lang, onComplete, skipAnimation = false }: { lang: 'en' | 'es', onComplete: () => void, skipAnimation?: boolean }) {
  const [step, setStep] = useState(skipAnimation ? 1 : 0);
  const [displayText, setDisplayText] = useState(skipAnimation ? "init portfolio --deploy" : "");
  const [isTyping, setIsTyping] = useState(false);

  // If skipping animation, call onComplete immediately
  useEffect(() => {
    if (skipAnimation && step === 1) {
      onComplete();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = (en: string, es: string) => lang === 'en' ? en : es;

  // Single short command — just "init"
  const command = "init portfolio --deploy";
  const AUTO_DELAY = 1400;

  const typeText = useCallback((text: string, onDone: () => void) => {
    setDisplayText("");
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
        setTimeout(onDone, 400);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step >= 1) return;
    const timer = setTimeout(() => {
      typeText(command, () => {
        setStep(1);
        onComplete();
        setTimeout(() => {
          if (!window.location.hash) {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 600);
      });
    }, AUTO_DELAY);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleSkip = () => {
    setStep(1);
    onComplete();
    setTimeout(() => {
      if (!window.location.hash) {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="font-mono text-sm">
      {/* macOS top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02] rounded-t-lg">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
        </div>
        <span className="text-[10px] text-white/15 tracking-widest uppercase">
          bash — 80×24
        </span>
        <button
          onClick={handleSkip}
          className="text-[10px] text-white/20 hover:text-[#E8FF00] transition-colors flex items-center gap-1 cursor-pointer"
        >
          <FastForward size={10} />
          {t('skip', 'saltar')}
        </button>
      </div>

      {/* Terminal body — compact */}
      <div className="px-4 py-4 space-y-2 rounded-b-lg border border-t-0 border-white/[0.06] bg-[#0d0d0d]">
        {/* Prompt + typed command */}
        <div className="flex items-center gap-0">
          <span className="text-[#E8FF00]/50 text-xs">❯</span>
          <span className="ml-2 text-white/70">{displayText}</span>
          {!isTyping && step === 0 && <span className="blinking-cursor text-xs"></span>}
        </div>

        {/* Output */}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-white/30 text-xs space-y-0.5 pt-1"
          >
            <div><span className="text-[#E8FF00]/60">✓</span> {t('Portfolio loaded', 'Portafolio cargado')}</div>
            <div><span className="text-[#E8FF00]/60">✓</span> {t('3 projects deployed', '3 proyectos desplegados')}</div>
            <div><span className="text-[#E8FF00]/60">✓</span> {t('Ready', 'Listo')} — <span className="text-[#E8FF00]/50">↓ scroll</span></div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
