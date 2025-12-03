"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Car,
  Palmtree,
  FlaskConical,
  MessageSquare,
  TrendingUp,
  ClipboardCheck,
  Sparkles,
  Bot,
} from "lucide-react";
import STAIDemo from "./st-ai-demo";

const content = {
  es: {
    badge: "Inteligencia Artificial",
    headline: ["Agentic AI:", "Tu Asistente de Negocios 24/7"],
    subtitle: "Nuestro AI no es un chatbot genérico. Está",
    subtitleHighlight: "integrado en tu base de datos",
    subtitleEnd: "para entender tu inventario, finanzas y clientes, dándote respuestas y sugerencias concretas.",
    capability: {
      badge: "Full Context Read",
      title: "Multi-Tool Cross-Analysis",
      databases: ["Inventario", "Ventas", "Clientes"],
      dbLabel: "Base de datos",
      insights: "→ Insights Accionables",
    },
    useCases: [
      {
        id: "zycar",
        subtitle: "Ventas y Trazabilidad",
        title: "ZYCAR OS",
        query: '"¿Qué carritos en inventario llevan más de 6 meses y cuáles tienen el margen más alto?"',
        response: "El AI responde con la lista de unidades más antiguas y sugiere acciones para moverlas, priorizando por margen de ganancia.",
        features: ["Análisis de inventario en tiempo real", "Predicción de rotación", "Alertas de stock inteligentes"],
      },
      {
        id: "concierge",
        subtitle: "Planificación y Flujo",
        title: "Cabo Concierge",
        query: '"Planea un itinerario de 5 días para una familia con niños, incluyendo reservaciones y transporte."',
        response: "Automatiza flujos de trabajo conversacionales complejos—planear un viaje completo día a día sin llenar formularios.",
        features: ["Itinerarios personalizados", "Reservaciones automáticas", "Coordinación multi-proveedor"],
      },
      {
        id: "golden",
        subtitle: "Validación de Procesos",
        title: "Golden Sands",
        query: '"Verifica que el lote #47 cumpla con todos los pasos de calidad antes de embotellar."',
        response: "Un sistema que obliga a sus operadores a seguir los pasos de seguridad críticos (ej. monitoreo de pH) antes de avanzar la producción.",
        features: ["Checklists obligatorios", "Trazabilidad de lotes", "Cumplimiento normativo"],
      },
    ],
    bottomNote: "Cada sistema es diseñado específicamente para tu industria y flujo de trabajo. El AI aprende de tus datos y mejora con cada interacción.",
  },
  en: {
    badge: "Artificial Intelligence",
    headline: ["Agentic AI:", "Your 24/7 Business Assistant"],
    subtitle: "Our AI is not a generic chatbot. It's",
    subtitleHighlight: "integrated into your database",
    subtitleEnd: "to understand your inventory, finances, and clients, giving you concrete answers and suggestions.",
    capability: {
      badge: "Full Context Read",
      title: "Multi-Tool Cross-Analysis",
      databases: ["Inventory", "Sales", "Clients"],
      dbLabel: "Database",
      insights: "→ Actionable Insights",
    },
    useCases: [
      {
        id: "zycar",
        subtitle: "Sales & Traceability",
        title: "ZYCAR OS",
        query: '"Which carts in inventory have been sitting for more than 6 months and which have the highest margin?"',
        response: "The AI responds with the list of oldest units and suggests actions to move them, prioritizing by profit margin.",
        features: ["Real-time inventory analysis", "Turnover prediction", "Smart stock alerts"],
      },
      {
        id: "concierge",
        subtitle: "Planning & Workflow",
        title: "Cabo Concierge",
        query: '"Plan a 5-day itinerary for a family with kids, including reservations and transport."',
        response: "Automates complex conversational workflows—plan a complete day-by-day trip without filling out forms.",
        features: ["Personalized itineraries", "Automatic reservations", "Multi-vendor coordination"],
      },
      {
        id: "golden",
        subtitle: "Process Validation",
        title: "Golden Sands",
        query: '"Verify that batch #47 complies with all quality steps before bottling."',
        response: "A system that forces your operators to follow critical safety steps (e.g., pH monitoring) before advancing production.",
        features: ["Mandatory checklists", "Batch traceability", "Regulatory compliance"],
      },
    ],
    bottomNote: "Each system is specifically designed for your industry and workflow. The AI learns from your data and improves with every interaction.",
  },
};

const useCaseIcons = [Car, Palmtree, FlaskConical];
const accentIcons = [TrendingUp, MessageSquare, ClipboardCheck];

interface STAIProps {
  locale?: "es" | "en";
}

const STAI = ({ locale = "es" }: STAIProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = content[locale];
  const sectionId = locale === "en" ? "cases" : "casos";

  return (
    <section id={sectionId} className="st-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--st-surface)] to-[var(--background)]" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[var(--st-primary)]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[var(--st-secondary)]/5 rounded-full blur-[120px]" />

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
            className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20"
          >
            <Bot className="w-4 h-4 text-[var(--st-primary)]" />
            <span className="font-mono text-sm text-[var(--st-primary)] tracking-wider uppercase">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="max-w-4xl mx-auto mb-6">
            <span className="block">{t.headline[0]}</span>
            <span className="block st-gradient-text">{t.headline[1]}</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--st-text-secondary)] max-w-3xl mx-auto">
            {t.subtitle}{" "}
            <span className="text-[var(--st-text-primary)]">{t.subtitleHighlight}</span>{" "}
            {t.subtitleEnd}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="relative bg-[var(--st-surface)] rounded-2xl p-6 md:p-8 border border-[var(--st-border)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--st-primary)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[var(--primary-foreground)]" />
              </div>
              <div>
                <div className="text-sm font-mono text-[var(--st-primary)]">{t.capability.badge}</div>
                <div className="font-medium">{t.capability.title}</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {t.capability.databases.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="bg-[var(--st-surface-elevated)] rounded-lg p-4 text-center border border-[var(--st-border)]"
                >
                  <div className="text-xs text-[var(--st-text-muted)] mb-1">{t.capability.dbLabel}</div>
                  <div className="text-sm font-medium">{item}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-[var(--st-primary)]/50 to-[var(--st-primary)]"
              />
              <div className="px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 mx-4">
                <span className="text-sm font-mono text-[var(--st-primary)]">{t.capability.insights}</span>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex-1 h-[2px] bg-gradient-to-l from-transparent via-[var(--st-primary)]/50 to-[var(--st-primary)]"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {t.useCases.map((useCase, index) => {
            const Icon = useCaseIcons[index];
            const AccentIcon = accentIcons[index];
            return (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-b from-[var(--st-primary)]/10 to-transparent rounded-2xl overflow-hidden border border-[var(--st-border)] hover:border-[var(--st-primary)]/30 transition-all duration-500">
                  <div className="p-6 pb-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--st-primary)]/10">
                        <Icon className="w-7 h-7 text-[var(--st-primary)]" />
                      </div>
                      <AccentIcon className="w-5 h-5 opacity-40 text-[var(--st-primary)]" />
                    </div>

                    <div className="mb-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-[var(--st-primary)]">
                        {useCase.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                  </div>

                  <div className="px-6 py-4 bg-[var(--st-surface)]/50">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-[var(--st-border)] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[var(--st-text-muted)]" />
                      </div>
                      <p className="text-sm text-[var(--st-text-secondary)] italic">{useCase.query}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <p className="text-sm text-[var(--st-text-muted)] mb-6">{useCase.response}</p>

                    <div className="space-y-2">
                      {useCase.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[var(--st-text-muted)]">
                          <span className="w-1 h-1 rounded-full bg-[var(--st-primary)]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,var(--st-primary)/8,transparent_60%)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--st-text-muted)] text-sm max-w-2xl mx-auto">{t.bottomNote}</p>
        </motion.div>

        {/* Interactive AI Demo */}
        <STAIDemo locale={locale} />
      </div>
    </section>
  );
};

export default STAI;
