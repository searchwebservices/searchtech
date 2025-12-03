"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Building2, Wrench, Zap, Shield, Layers, AlertTriangle } from "lucide-react";

const techStack = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Supabase" },
  { name: "Tailwind" },
  { name: "Vercel" },
];

const content = {
  es: {
    badge: "Nuestra Filosofía",
    headline: ["No Somos Diseñadores de Webs,", "Somos", "Arquitectos de Software."],
    subtitle: "Construimos con la última tecnología global para garantizar código ligero y listo para integraciones a largo plazo.",
    principles: [
      { title: "Code First", description: "Código limpio y mantenible, nunca plantillas genéricas" },
      { title: "Arquitectura Escalable", description: "Sistemas diseñados para crecer con su negocio" },
      { title: "Seguridad Integrada", description: "Protección de datos desde el primer día" },
      { title: "Rendimiento Óptimo", description: "Aplicaciones rápidas y responsivas" },
    ],
    marketComparison: {
      title: "Comparación de Mercado",
      description: "Sistemas complejos y enredados que a menudo resultan muy difíciles de implementar pueden costar desde",
      price: "$50,000 USD",
    },
    buildingTitle: "Su Sistema es como un",
    buildingHighlight: "Edificio",
    buildingSubtitle: "Un modelo transparente: usted paga por la construcción y por el mantenimiento continuo.",
    construction: {
      badge: "Pago Inicial",
      title: "Construcción",
      description: "Cubre el diseño, codificación y entrega de su sistema operativo base personalizado. Preferimos empezar más pequeño y fundamental para conocerle mejor, luego construimos modularmente, flujo por flujo.",
      priceLabel: "Inversión Mínima",
      price: "$200,000",
      currency: "MXN",
      features: [
        "Diseño UI/UX personalizado",
        "Desarrollo de backend completo",
        "Integración con sus herramientas",
        "Entrenamiento de su equipo",
      ],
    },
    maintenance: {
      badge: "Cuota Mensual",
      title: "Mantenimiento",
      description: "Cubre el monitoreo 24/7 de errores, actualizaciones y el perfeccionamiento continuo.",
      priceLabel: "Desde",
      price: "$10,000",
      currency: "MXN/mes",
      features: [
        "Monitoreo y alertas automáticas",
        "Corrección de errores inmediata",
        "Actualizaciones de seguridad",
        "Optimización continua del flujo",
      ],
    },
  },
  en: {
    badge: "Our Philosophy",
    headline: ["We're Not Web Designers,", "We're", "Software Architects."],
    subtitle: "We build with the latest global technology to ensure lightweight code ready for long-term integrations.",
    principles: [
      { title: "Code First", description: "Clean, maintainable code, never generic templates" },
      { title: "Scalable Architecture", description: "Systems designed to grow with your business" },
      { title: "Built-in Security", description: "Data protection from day one" },
      { title: "Optimal Performance", description: "Fast and responsive applications" },
    ],
    marketComparison: {
      title: "Market Comparison",
      description: "Complex, convoluted systems that often prove very difficult to onboard can cost starting at",
      price: "$50,000 USD",
    },
    buildingTitle: "Your System is like a",
    buildingHighlight: "Building",
    buildingSubtitle: "A transparent model: you pay for construction and for ongoing maintenance.",
    construction: {
      badge: "Initial Payment",
      title: "Construction",
      description: "Covers the design, coding, and delivery of your customized base operating system. We prefer starting smaller and more fundamental to get to know you better, then we build out modularly, workflow by workflow.",
      priceLabel: "Minimum Investment",
      price: "$200,000",
      currency: "MXN",
      features: [
        "Custom UI/UX design",
        "Complete backend development",
        "Integration with your tools",
        "Team training",
      ],
    },
    maintenance: {
      badge: "Monthly Fee",
      title: "Maintenance",
      description: "Covers 24/7 error monitoring, updates, and continuous improvement.",
      priceLabel: "Starting at",
      price: "$10,000",
      currency: "MXN/month",
      features: [
        "Automatic monitoring and alerts",
        "Immediate bug fixes",
        "Security updates",
        "Continuous workflow optimization",
      ],
    },
  },
};

const principleIcons = [Code2, Layers, Shield, Zap];

interface STArchitectureProps {
  locale?: "es" | "en";
}

const STArchitecture = ({ locale = "es" }: STArchitectureProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = content[locale];

  return (
    <section className="st-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 st-grid-bg opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--st-secondary)]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--st-primary)]/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="font-mono text-sm text-[var(--st-secondary)] tracking-wider uppercase">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="max-w-5xl mx-auto mb-6">
            <span className="block">{t.headline[0]}</span>
            <span className="block">
              {t.headline[1]}{" "}
              <span className="st-gradient-text">{t.headline[2]}</span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--st-text-secondary)] max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="px-5 py-2.5 rounded-full bg-[var(--st-surface-elevated)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/30 transition-colors cursor-default"
            >
              <span className="font-mono text-sm font-medium text-[var(--st-text-primary)]">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {t.principles.map((principle, index) => {
            const Icon = principleIcons[index];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-[var(--st-surface)]/50 border border-[var(--st-border)] hover:border-[var(--st-primary)]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[var(--st-primary)]" />
                </div>
                <h4 className="font-semibold mb-2">{principle.title}</h4>
                <p className="text-sm text-[var(--st-text-muted)]">{principle.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative"
        >
          {/* Market Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-12"
          >
            <div className="max-w-2xl mx-auto bg-[var(--st-surface)] rounded-2xl p-6 md:p-8 border border-[var(--st-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--destructive)]/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-[var(--destructive)]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[var(--st-text-primary)]">
                    {t.marketComparison.title}
                  </h4>
                  <p className="text-sm text-[var(--st-text-muted)]">
                    {t.marketComparison.description}{" "}
                    <span className="font-mono font-bold text-[var(--destructive)]">{t.marketComparison.price}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.buildingTitle}{" "}
              <span className="text-[var(--st-primary)]">{t.buildingHighlight}</span>
            </h3>
            <p className="text-[var(--st-text-secondary)] max-w-xl mx-auto">
              {t.buildingSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[var(--st-primary)]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[var(--st-surface)] border border-[var(--st-primary)]/30 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--st-primary)] flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-[var(--primary-foreground)]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--st-primary)] uppercase tracking-wider">
                      {t.construction.badge}
                    </span>
                    <h4 className="text-xl font-bold">{t.construction.title}</h4>
                  </div>
                </div>

                <p className="text-[var(--st-text-secondary)] mb-6 text-sm leading-relaxed">{t.construction.description}</p>

                <div className="bg-[var(--st-surface-elevated)] rounded-xl p-4 border border-[var(--st-border)]">
                  <div className="text-sm text-[var(--st-text-muted)] mb-1">{t.construction.priceLabel}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono">{t.construction.price}</span>
                    <span className="text-[var(--st-primary)] font-mono">{t.construction.currency}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.construction.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--st-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--st-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[var(--st-secondary)]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[var(--st-surface)] border border-[var(--st-secondary)]/30 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[var(--st-secondary)] flex items-center justify-center">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[var(--st-secondary)] uppercase tracking-wider">
                      {t.maintenance.badge}
                    </span>
                    <h4 className="text-xl font-bold">{t.maintenance.title}</h4>
                  </div>
                </div>

                <p className="text-[var(--st-text-secondary)] mb-6">{t.maintenance.description}</p>

                <div className="bg-[var(--st-surface-elevated)] rounded-xl p-4 border border-[var(--st-border)]">
                  <div className="text-sm text-[var(--st-text-muted)] mb-1">{t.maintenance.priceLabel}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold font-mono">{t.maintenance.price}</span>
                    <span className="text-[var(--st-secondary)] font-mono">{t.maintenance.currency}</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.maintenance.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--st-text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--st-secondary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default STArchitecture;
