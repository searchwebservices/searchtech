"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Loader2, ArrowRight } from "lucide-react";

interface ProductWaitlistFormProps {
  productName: string;
  locale?: "es" | "en";
}

export function ProductWaitlistForm({ productName, locale = "es" }: ProductWaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    
    // Simulate API call - in production, connect to your email service
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // For now, just log and show success
    console.log(`Waitlist signup: ${email} for ${productName}`);
    setStatus("success");
    setEmail("");
  };

  const content = {
    es: {
      title: "Únete a la Lista de Espera",
      subtitle: `Sé el primero en saber cuando ${productName} esté disponible.`,
      placeholder: "tu@email.com",
      button: "Unirme",
      loading: "Registrando...",
      success: "¡Listo! Te notificaremos cuando esté disponible.",
      privacy: "No spam. Solo actualizaciones importantes.",
    },
    en: {
      title: "Join the Waitlist",
      subtitle: `Be the first to know when ${productName} is available.`,
      placeholder: "you@email.com",
      button: "Join",
      loading: "Signing up...",
      success: "Done! We'll notify you when it's available.",
      privacy: "No spam. Only important updates.",
    },
  };

  const t = content[locale];

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{t.title}</h3>
        <p className="text-sm text-[var(--st-text-muted)]">{t.subtitle}</p>
      </div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/20"
          >
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">{t.success}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={handleSubmit}
            className="relative"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--st-text-muted)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  required
                  disabled={status === "loading"}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)] focus:border-[var(--st-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--st-primary)]/20 transition-all disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="px-6 py-4 rounded-xl bg-[var(--st-primary)] text-white dark:text-black font-medium hover:bg-[var(--st-primary-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">{t.loading}</span>
                  </>
                ) : (
                  <>
                    {t.button}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-[var(--st-text-muted)] text-center mt-3">{t.privacy}</p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

