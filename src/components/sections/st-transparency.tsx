"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bell,
  Zap,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Mail,
  Clock,
  Shield,
} from "lucide-react";

const content = {
  es: {
    badge: "Nuestro Compromiso",
    headline: ["Transparencia y", "Corrección Inmediata"],
    subtitle: "No esperamos a que nos reporten problemas. Nuestro sistema de monitoreo detecta y nos alerta automáticamente.",
    workflow: [
      { title: "Detección Automática", description: "El sistema detecta cualquier error o comportamiento inesperado inmediatamente." },
      { title: "Notificación Instantánea", description: "Recibimos una alerta por correo electrónico en tiempo real con todos los detalles." },
      { title: "Corrección Proactiva", description: "Empezamos a trabajar en la solución antes de que usted nos llame." },
      { title: "Resolución Confirmada", description: "Le notificamos cuando el problema está resuelto con un reporte detallado." },
    ],
    method: {
      title: "Si el sistema no es intuitivo,",
      titleHighlight: "el problema es nuestro.",
      description: "Entendemos la frustración. Si nuestro sistema no es intuitivo para usted, no le decimos lo está haciendo mal.",
      features: [
        "Le explicamos la arquitectura claramente",
        "Ajustamos el diseño a su lógica",
        "Validamos cada cambio con usted",
      ],
      response: "<24h",
      responseLabel: "Tiempo promedio de respuesta",
      responseSub: "a cualquier problema reportado",
    },
    pricing: {
      title: "Precios",
      titleHighlight: "Transparentes",
      subtitle: "Sin sorpresas. Sin costos ocultos. Estos son nuestros rangos de inversión.",
      construction: {
        label: "Construcción de OS",
        badge: "Pago único",
        price: "$200,000",
        currency: "MXN",
        note: "Mínimo · Trabajamos hacia arriba en complejidad",
      },
      maintenance: {
        label: "Mantenimiento",
        badge: "Mensual",
        price: "$10,000",
        currency: "MXN/mes",
        note: "Desde · Incluye soporte y actualizaciones",
      },
    },
  },
  en: {
    badge: "Our Commitment",
    headline: ["Transparency and", "Immediate Correction"],
    subtitle: "We don't wait for you to report problems. Our monitoring system detects and alerts us automatically.",
    workflow: [
      { title: "Automatic Detection", description: "The system detects any error or unexpected behavior immediately." },
      { title: "Instant Notification", description: "We receive a real-time email alert with all the details." },
      { title: "Proactive Correction", description: "We start working on the solution before you call us." },
      { title: "Confirmed Resolution", description: "We notify you when the problem is resolved with a detailed report." },
    ],
    method: {
      title: "If the system isn't intuitive,",
      titleHighlight: "the problem is ours.",
      description: "We understand the frustration. If our system isn't intuitive for you, we don't say you're doing it wrong.",
      features: [
        "We explain the architecture clearly",
        "We adjust the design to your logic",
        "We validate every change with you",
      ],
      response: "<24h",
      responseLabel: "Average response time",
      responseSub: "for any reported issue",
    },
    pricing: {
      title: "",
      titleHighlight: "Transparent Pricing",
      subtitle: "No surprises. No hidden costs. These are our investment ranges.",
      construction: {
        label: "OS Construction",
        badge: "One-time",
        price: "$200,000",
        currency: "MXN",
        note: "Minimum · We work up in complexity",
      },
      maintenance: {
        label: "Maintenance",
        badge: "Monthly",
        price: "$10,000",
        currency: "MXN/month",
        note: "Starting at · Includes support and updates",
      },
    },
  },
};

const workflowIcons = [Bell, Mail, Zap, CheckCircle2];

interface STTransparencyProps {
  locale?: "es" | "en";
}

const STTransparency = ({ locale = "es" }: STTransparencyProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = content[locale];

  return (
    <section className="st-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 st-grid-bg opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--st-accent)]/5 rounded-full blur-[150px]" />

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
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[var(--st-accent)]/10 border border-[var(--st-accent)]/20"
          >
            <Shield className="w-4 h-4 text-[var(--st-accent)]" />
            <span className="font-mono text-sm text-[var(--st-accent)] tracking-wider uppercase">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line - positioned lower in DOM so it renders first/behind */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[var(--st-primary)]/30 via-[var(--st-secondary)]/30 to-[var(--st-accent)]/30 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
              {t.workflow.map((step, index) => {
                const Icon = workflowIcons[index];
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="relative mx-auto mb-4">
                      {/* Solid background circle to cover the timeline */}
                      <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[var(--background)]" />
                      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto border border-[var(--st-primary)]/30 bg-[var(--st-surface-elevated)]">
                        <Icon className="w-7 h-7 text-[var(--st-primary)]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold bg-[var(--st-primary)] text-[var(--primary-foreground)]">
                        {index + 1}
                      </div>
                    </div>

                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-[var(--st-text-muted)]">{step.description}</p>

                    {index < t.workflow.length - 1 && (
                      <div className="md:hidden flex justify-center my-4">
                        <ArrowRight className="w-5 h-5 text-[var(--st-border)] rotate-90" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto bg-[var(--st-surface)] rounded-2xl border border-[var(--st-border)] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-[var(--st-primary)]" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {t.method.title}{" "}
                  <span className="text-[var(--st-primary)]">{t.method.titleHighlight}</span>
                </h3>

                <p className="text-[var(--st-text-secondary)] mb-6">{t.method.description}</p>

                <ul className="space-y-3">
                  {t.method.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[var(--st-text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--st-accent)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--st-primary)]/5 p-8 md:p-10 flex items-center justify-center border-t md:border-t-0 md:border-l border-[var(--st-border)]">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[var(--st-primary)] flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-[var(--primary-foreground)]" />
                  </div>
                  <div className="text-4xl font-bold font-mono mb-2">{t.method.response}</div>
                  <p className="text-sm text-[var(--st-text-muted)]">
                    {t.method.responseLabel}
                    <br />
                    {t.method.responseSub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.pricing.title} <span className="text-[var(--st-primary)]">{t.pricing.titleHighlight}</span>
            </h3>
            <p className="text-[var(--st-text-secondary)] max-w-xl mx-auto">{t.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[var(--st-surface)] rounded-2xl p-6 border border-[var(--st-border)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--st-text-muted)] font-mono uppercase tracking-wider">
                  {t.pricing.construction.label}
                </span>
                <span className="px-2 py-1 rounded bg-[var(--st-primary)]/10 text-xs text-[var(--st-primary)] font-mono">
                  {t.pricing.construction.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold font-mono">{t.pricing.construction.price}</span>
                <span className="text-[var(--st-primary)] font-mono">{t.pricing.construction.currency}</span>
              </div>
              <p className="text-sm text-[var(--st-text-muted)]">{t.pricing.construction.note}</p>
            </div>

            <div className="bg-[var(--st-surface)] rounded-2xl p-6 border border-[var(--st-border)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--st-text-muted)] font-mono uppercase tracking-wider">
                  {t.pricing.maintenance.label}
                </span>
                <span className="px-2 py-1 rounded bg-[var(--st-secondary)]/10 text-xs text-[var(--st-secondary)] font-mono">
                  {t.pricing.maintenance.badge}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold font-mono">{t.pricing.maintenance.price}</span>
                <span className="text-[var(--st-secondary)] font-mono">{t.pricing.maintenance.currency}</span>
              </div>
              <p className="text-sm text-[var(--st-text-muted)]">{t.pricing.maintenance.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default STTransparency;
