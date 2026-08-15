"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  lang: "en" | "es";
}

export default function ContactForm({ lang }: ContactFormProps) {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xyegdgrj";
  const [state, handleSubmit] = useForm(formId);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const t = (en: string, es: string) => (lang === "en" ? en : es);

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-[#E8FF00]/10 border border-[#E8FF00]/30 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-[#E8FF00]" />
        </div>
        <h3 className="text-2xl font-semibold text-white mb-3">
          {t("Message sent!", "¡Mensaje enviado!")}
        </h3>
        <p className="text-white/50 text-sm max-w-sm">
          {t(
            "Thanks for reaching out. I'll get back to you as soon as possible.",
            "Gracias por contactarme. Te responderé lo antes posible."
          )}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div className="relative">
        <label
          htmlFor="contact-name"
          className={`absolute left-0 transition-all duration-200 font-mono text-xs ${
            focusedField === "name"
              ? "text-[#E8FF00]/70 -top-5"
              : "text-white/30 top-3"
          }`}
        >
          {t("Name", "Nombre")}
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          onFocus={() => setFocusedField("name")}
          onBlur={(e) => !e.target.value && setFocusedField(null)}
          className="w-full bg-transparent border-b border-white/10 focus:border-[#E8FF00]/50 py-3 text-white text-sm outline-none transition-colors placeholder-transparent"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <label
          htmlFor="contact-email"
          className={`absolute left-0 transition-all duration-200 font-mono text-xs ${
            focusedField === "email"
              ? "text-[#E8FF00]/70 -top-5"
              : "text-white/30 top-3"
          }`}
        >
          {t("Email", "Correo electrónico")}
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          onFocus={() => setFocusedField("email")}
          onBlur={(e) => !e.target.value && setFocusedField(null)}
          className="w-full bg-transparent border-b border-white/10 focus:border-[#E8FF00]/50 py-3 text-white text-sm outline-none transition-colors placeholder-transparent"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Message */}
      <div className="relative">
        <label
          htmlFor="contact-message"
          className={`absolute left-0 transition-all duration-200 font-mono text-xs ${
            focusedField === "message"
              ? "text-[#E8FF00]/70 -top-5"
              : "text-white/30 top-3"
          }`}
        >
          {t("Message", "Mensaje")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          onFocus={() => setFocusedField("message")}
          onBlur={(e) => !e.target.value && setFocusedField(null)}
          className="w-full bg-transparent border-b border-white/10 focus:border-[#E8FF00]/50 py-3 text-white text-sm outline-none transition-colors resize-none placeholder-transparent"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="group self-start flex items-center gap-3 px-8 py-3 bg-[#E8FF00] text-black font-semibold rounded text-sm hover:bg-[#d4e600] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting
          ? t("Sending...", "Enviando...")
          : t("Send Message", "Enviar Mensaje")}
        <Send
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>

      {/* Error state */}
      <AnimatePresence>
        {state.errors && Object.keys(state.errors).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-red-400 text-xs font-mono"
          >
            <AlertCircle size={14} />
            {t(
              "Something went wrong. Please try again.",
              "Algo salió mal. Inténtalo de nuevo."
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
