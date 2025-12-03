"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AlertTriangle, DollarSign, Lock } from "lucide-react";

const content = {
  es: {
    badge: "El Problema",
    headline: ["El Paradigma de Cabo:", "Negocios Sin Sistema Operativo"],
    subtitle: "Los negocios más exitosos de Baja California Sur operan sin un sistema operativo propio — usando herramientas fragmentadas del siglo pasado.",
    problems: [
      {
        title: "Sin Sistema Operativo",
        description: "Operas con herramientas fragmentadas (Excel, WhatsApp, etc.) en lugar de un sistema operativo unificado. Tu negocio merece un OS personalizado.",
      },
      {
        title: "Costo Prohibitivo",
        description: "Cotizaciones de sistemas operativos 'ridículamente caros' (>$1m MXN) de agencias remotas que no conocen el mercado de Los Cabos.",
      },
      {
        title: "Ausencia de Inteligencia",
        description: "Tus datos están encerrados sin un sistema operativo inteligente que te dé respuestas. No tienes visibilidad en tiempo real de tu negocio.",
      },
    ],
    quote: '"Economía de primer mundo,',
    quoteHighlight: " sin sistema operativo",
    quoteEnd: ' propio."',
    quoteAuthor: "— La Paradoja de Cabo",
  },
  en: {
    badge: "The Problem",
    headline: ["The Cabo Paradox:", "Businesses Without Operating Systems"],
    subtitle: "The most successful businesses in Baja California Sur operate without a custom operating system — using fragmented tools from the last century.",
    problems: [
      {
        title: "No Operating System",
        description: "You're running on fragmented tools (Excel, WhatsApp, etc.) instead of a unified operating system. Your business deserves a custom OS.",
      },
      {
        title: "Prohibitive Cost",
        description: "Quotes for operating systems that are 'ridiculously expensive' (>$1m MXN) from remote agencies that don't understand the Los Cabos market.",
      },
      {
        title: "Absence of Intelligence",
        description: "Your data is locked without an intelligent operating system that gives you answers. You have no real-time visibility into your business.",
      },
    ],
    quote: '"First-world economy,',
    quoteHighlight: " no operating system",
    quoteEnd: ' of their own."',
    quoteAuthor: "— The Cabo Paradox",
  },
};

const icons = [AlertTriangle, DollarSign, Lock];

interface STProblemProps {
  locale?: "es" | "en";
}

const STProblem = ({ locale = "es" }: STProblemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = content[locale];

  return (
    <section className="st-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--st-surface-elevated)] to-[var(--background)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--st-primary)]/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="font-mono text-sm text-[var(--st-primary)] tracking-wider uppercase">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="max-w-4xl mx-auto mb-6">
            <span className="block">{t.headline[0]}</span>
            <span className="block st-gradient-text">{t.headline[1]}</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--st-text-secondary)] max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {t.problems.map((problem, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-b from-[var(--st-primary)]/10 to-transparent rounded-2xl p-8 border border-[var(--st-border)] hover:border-[var(--st-primary)]/30 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 bg-[var(--st-primary)]/10">
                    <Icon className="w-7 h-7 text-[var(--st-primary)]" />
                  </div>

                  <div className="absolute top-6 right-6">
                    <span className="font-mono text-4xl font-bold opacity-10 text-[var(--st-primary)]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                  <p className="text-[var(--st-text-secondary)] leading-relaxed">
                    {problem.description}
                  </p>

                  <div className="absolute bottom-0 left-8 right-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-[var(--st-primary)] to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)]">
            <p className="text-lg md:text-xl italic">
              {t.quote}
              <span className="text-[var(--st-primary)]">{t.quoteHighlight}</span>
              {t.quoteEnd}
            </p>
            <p className="text-sm text-[var(--st-text-muted)] mt-3 font-mono">
              {t.quoteAuthor}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default STProblem;
