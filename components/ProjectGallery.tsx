"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface GalleryImage {
  url: string;
  caption_en?: string;
  caption_es?: string;
}

export default function ProjectGallery({ images, lang }: { images: GalleryImage[], lang: 'en' | 'es' }) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="my-16">
      <div className="grid grid-cols-1 gap-12">
        {images.map((img, idx) => (
          <div key={idx} className="group relative">
            <div 
              className="relative rounded-lg overflow-hidden border border-white/10 bg-[#1a1a24] cursor-zoom-in shadow-2xl transition-all duration-300 group-hover:border-white/20"
              onClick={() => setLightboxIdx(idx)}
            >
              <div className="flex justify-center bg-[#0a0a0f]">
                <img
                  src={img.url}
                  alt={lang === 'en' ? (img.caption_en || 'Project screenshot') : (img.caption_es || 'Captura del proyecto')}
                  className="w-full max-h-[700px] object-contain"
                />
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full backdrop-blur-sm">
                <Maximize2 size={18} className="text-white" />
              </div>
            </div>
            {(img.caption_en || img.caption_es) && (
              <p className="mt-4 text-sm text-white/50 text-center font-light">
                {lang === 'en' ? img.caption_en : img.caption_es}
              </p>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxIdx(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
              onClick={() => setLightboxIdx(null)}
            >
              <X size={24} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                  onClick={nextImage}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full mx-12 flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={images[lightboxIdx].url}
                alt="Fullscreen preview"
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              {(images[lightboxIdx].caption_en || images[lightboxIdx].caption_es) && (
                <p className="mt-6 text-base text-white/70 font-light">
                  {lang === 'en' ? images[lightboxIdx].caption_en : images[lightboxIdx].caption_es}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
