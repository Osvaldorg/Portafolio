"use client";

import { motion } from "motion/react";
import type { StatItem } from "@/types/portfolio";

interface StatsRowProps {
  stats: StatItem[];
  lang: "en" | "es";
}

export default function StatsRow({ stats, lang }: StatsRowProps) {
  if (!stats || stats.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col border-l border-white/10 pl-4">
          <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
          <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
            {lang === "en" ? stat.label.en : stat.label.es}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
