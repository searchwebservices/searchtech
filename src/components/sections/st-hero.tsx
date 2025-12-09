"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const content = {
  es: {
    badge: "Sistemas Operativos Personalizados · Los Cabos",
    headline: ["TU NEGOCIO MERECE", "UN SISTEMA OPERATIVO", "PERSONALIZADO."],
    subheadline: "Deja de operar con hojas de cálculo. Diseñamos, construimos y mantenemos",
    highlight: "sistemas operativos personalizados",
    subheadlineEnd: "exclusivos para negocios en Los Cabos y Baja California Sur.",
    ctaPrimary: "Habla con un Arquitecto de Software",
    ctaSecondary: "Ver Casos de Éxito",
    ctaHref: "#casos",
    agendarPath: "https://searchlabs.netlify.app/get-started",
    badges: [
      "Reuniones en persona en Cabo",
      "Código propietario, no plantillas",
      "Soporte técnico 24/7",
    ],
    dashboard: {
      sidebar: ["Dashboard", "Inventario", "Ventas", "Clientes", "AI Chat"],
      stats: [
        { label: "Ventas Hoy", value: "$47,280" },
        { label: "Unidades", value: "124" },
        { label: "Clientes", value: "89" },
        { label: "Margen", value: "34%" },
      ],
      chart: "Rendimiento Mensual",
      aiTitle: "Search OS Assistant",
      aiMessage: '"Las 3 unidades con mayor margen son: Golf Cart #12 (42%), Golf Cart #7 (38%), y UTV #3 (35%). ¿Quieres que analice la rotación?"',
      status: "En línea",
      order: "Nuevo pedido",
    },
  },
  en: {
    badge: "Custom Operating Systems · Los Cabos",
    headline: ["YOUR BUSINESS DESERVES", "A CUSTOM", "OPERATING SYSTEM."],
    subheadline: "Stop running your business on spreadsheets. We design, build, and maintain",
    highlight: "custom operating systems",
    subheadlineEnd: "exclusively for businesses in Los Cabos and Baja California Sur.",
    ctaPrimary: "Talk to a Software Architect",
    ctaSecondary: "View Success Stories",
    ctaHref: "#cases",
    agendarPath: "https://searchlabs.netlify.app/get-started",
    badges: [
      "In-person meetings in Cabo",
      "Proprietary code, not templates",
      "24/7 technical support",
    ],
    dashboard: {
      sidebar: ["Dashboard", "Inventory", "Sales", "Clients", "AI Chat"],
      stats: [
        { label: "Sales Today", value: "$47,280" },
        { label: "Units", value: "124" },
        { label: "Clients", value: "89" },
        { label: "Margin", value: "34%" },
      ],
      chart: "Monthly Performance",
      aiTitle: "Search OS Assistant",
      aiMessage: '"The 3 units with the highest margin are: Golf Cart #12 (42%), Golf Cart #7 (38%), and UTV #3 (35%). Would you like me to analyze their turnover?"',
      status: "Online",
      order: "New order",
    },
  },
};

interface DashboardMockupProps {
  locale: "es" | "en";
}

const DashboardMockup = ({ locale }: DashboardMockupProps) => {
  const t = content[locale].dashboard;
  
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-16 md:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative rounded-2xl overflow-hidden st-gradient-border"
      >
        <div className="bg-[var(--st-surface)] border-b border-[var(--st-border)] px-4 py-3 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-[#A85A5A]" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-[#A6A67B]" />
            <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-[#6B8A8A]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[var(--st-surface-elevated)] rounded-md px-4 py-1.5 text-xs font-mono text-[var(--st-text-muted)] flex items-center gap-2">
              <span className="text-[var(--st-primary)]">●</span>
              sistema-operativo.searchos.tech
            </div>
          </div>
        </div>

        <div className="bg-[var(--st-surface)] p-6 md:p-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-3 hidden md:block">
              <div className="space-y-3">
                {t.sidebar.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      i === 0
                        ? "bg-[var(--st-primary)]/10 text-[var(--st-primary)] border border-[var(--st-primary)]/20"
                        : "text-[var(--st-text-muted)] hover:text-[var(--st-text-primary)] hover:bg-[var(--st-surface-elevated)]"
                    } transition-colors cursor-pointer`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-9 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {t.stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="bg-[var(--st-surface-elevated)] rounded-xl p-4 border border-[var(--st-border)]"
                  >
                    <div className="text-xs text-[var(--st-text-muted)] mb-1">{stat.label}</div>
                    <div className="text-xl md:text-2xl font-bold font-mono text-[var(--st-primary)]">
                      {stat.value}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-[var(--st-surface-elevated)] rounded-xl p-4 md:p-6 border border-[var(--st-border)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[var(--st-text-primary)]">{t.chart}</span>
                  <span className="text-xs font-mono text-[var(--st-primary)]">+23.5%</span>
                </div>
                <div className="flex items-end gap-2 h-24 md:h-32">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1.4 + i * 0.05, duration: 0.5 }}
                      className="flex-1 rounded-t-sm bg-[var(--st-primary)]"
                      style={{ opacity: 0.4 + (height / 100) * 0.6 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="bg-[var(--st-primary)]/5 rounded-xl p-4 border border-[var(--st-primary)]/20"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--st-primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--primary-foreground)] font-bold text-sm">AI</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[var(--st-text-primary)] mb-1">{t.aiTitle}</div>
                    <div className="text-sm text-[var(--st-text-muted)]">{t.aiMessage}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8 }}
        className="absolute -left-4 md:-left-8 top-1/4 hidden lg:block"
      >
        <div className="bg-[var(--st-surface)] border border-[var(--st-border)] rounded-lg p-3 shadow-2xl">
          <div className="text-xs text-[var(--st-text-muted)] mb-1">{locale === "en" ? "Status" : "Estado"}</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-mono text-green-500">{t.status}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
        className="absolute -right-4 md:-right-8 bottom-1/4 hidden lg:block"
      >
        <div className="bg-[var(--st-surface)] border border-[var(--st-primary)]/30 rounded-lg p-3 shadow-2xl st-glow">
          <div className="text-xs text-[var(--st-primary)] mb-1">{t.order}</div>
          <div className="text-sm font-medium text-[var(--st-text-primary)]">Golf Cart → Palmilla</div>
        </div>
      </motion.div>
    </div>
  );
};

interface STHeroProps {
  locale?: "es" | "en";
}

const STHero = ({ locale = "es" }: STHeroProps) => {
  const t = content[locale];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="absolute inset-0 st-grid-bg" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--st-primary)]/10 dark:bg-[var(--st-primary)]/8 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--st-secondary)]/10 dark:bg-[var(--st-secondary)]/8 rounded-full blur-[100px] translate-y-1/2" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20 text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--st-primary)] animate-pulse" />
            <span className="text-[var(--st-primary)] font-medium">{t.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-8"
        >
          <span className="block">{t.headline[0]}</span>
          <span className="block st-gradient-text">{t.headline[1]}</span>
          <span className="block">{t.headline[2]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-xl text-[var(--st-text-secondary)] max-w-3xl mx-auto mb-10 text-balance"
        >
          {t.subheadline}{" "}
          <span className="text-[var(--st-text-primary)] font-medium">{t.highlight}</span>{" "}
          {t.subheadlineEnd}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-base font-semibold bg-[var(--st-primary)] hover:bg-[var(--st-primary-light)] rounded-full group transition-all duration-300 !text-white dark:!text-black"
          >
            <Link href={t.agendarPath} className="!text-white dark:!text-black flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {t.ctaPrimary}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 px-8 text-base font-medium border-[var(--st-border)] hover:border-[var(--st-primary)]/50 hover:bg-[var(--st-primary)]/5 rounded-full transition-all duration-300"
          >
            <a href={t.ctaHref}>{t.ctaSecondary}</a>
          </Button>
        </motion.div>

        <DashboardMockup locale={locale} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 md:mt-16"
        >
          {t.badges.map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[var(--st-text-muted)]">
              <span className="font-mono text-[var(--st-primary)]">0{i + 1}</span>
              <span>{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default STHero;
