"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  Users,
  MapPin,
  Handshake,
  Calendar,
  ArrowRight,
  Building,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

const content = {
  es: {
    badge: "Quiénes Somos",
    headline: ["Construyendo el", "Futuro de BCS"],
    storyTitle: "Somos sus",
    storyHighlight: "vecinos",
    storyTitleEnd: ", no una agencia remota.",
    storyP1: "Fundado por",
    founder1: "Bay Purcell",
    founder2: "Borja Ponce",
    storyP1Mid: ", empresarios con raíces profundas en Cabo. Nos conocimos en",
    school: "Colegio El Camino",
    storyP1End: "y nos frustramos por la falta de infraestructura tecnológica local de calidad.",
    storyP2: "Decidimos cambiar eso. Hoy, Search Operating Systems es el brazo tecnológico que Los Cabos necesitaba.",
    partnerBadge: "Partnership Oficial",
    partnerTitle: "Brazo Tecnológico de",
    partnerName: "Momentum PropTech",
    partnerDesc: "Acceso a proyectos de lujo y alta complejidad en LATAM, respaldado por la red de Momentum.",
    ctaHeadline: "Transforma tu Operación.",
    ctaSubhead: "Agenda tu",
    ctaHighlight: "Consulta de Arquitectura Digital",
    ctaSubheadEnd: "Gratuita.",
    ctaButton: "Agendar Reunión en Cabo",
    ctaNote: "Reunión presencial en Los Cabos · Sin compromiso · 45 minutos",
    agendarPath: "/agendar",
    founders: [
      { name: "Bay Purcell", role: "Co-Founder & Tech Lead" },
      { name: "Borja Ponce", role: "Co-Founder & Operations" },
    ],
  },
  en: {
    badge: "About Us",
    headline: ["Building the", "Future of BCS"],
    storyTitle: "We're your",
    storyHighlight: "neighbors",
    storyTitleEnd: ", not a remote agency.",
    storyP1: "Founded by",
    founder1: "Bay Purcell",
    founder2: "Borja Ponce",
    storyP1Mid: ", entrepreneurs with deep roots in Cabo. We met at",
    school: "Colegio El Camino",
    storyP1End: "and became frustrated by the lack of quality local technology infrastructure.",
    storyP2: "We decided to change that. Today, Search Operating Systems is the tech arm that Los Cabos needed.",
    partnerBadge: "Official Partnership",
    partnerTitle: "Technology Arm of",
    partnerName: "Momentum PropTech",
    partnerDesc: "Access to luxury and high-complexity projects in LATAM, backed by Momentum's network.",
    ctaHeadline: "Transform Your Operation.",
    ctaSubhead: "Schedule your",
    ctaHighlight: "Free Digital Architecture Consultation",
    ctaSubheadEnd: ".",
    ctaButton: "Schedule Meeting in Cabo",
    ctaNote: "In-person meeting in Los Cabos · No obligation · 45 minutes",
    agendarPath: "/en/schedule",
    founders: [
      { name: "Bay Purcell", role: "Co-Founder & Tech Lead" },
      { name: "Borja Ponce", role: "Co-Founder & Operations" },
    ],
  },
};

interface STTrustProps {
  locale?: "es" | "en";
}

const STTrust = ({ locale = "es" }: STTrustProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const t = content[locale];

  return (
    <section className="st-section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--st-surface-elevated)] to-[var(--background)]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[var(--st-primary)]/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--st-secondary)]/5 rounded-full blur-[120px]" />

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
            <Users className="w-4 h-4 text-[var(--st-primary)]" />
            <span className="font-mono text-sm text-[var(--st-primary)] tracking-wider uppercase">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="max-w-4xl mx-auto mb-6">
            <span className="block">{t.headline[0]}</span>
            <span className="block st-gradient-text">{t.headline[1]}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-[var(--st-surface)] rounded-2xl border border-[var(--st-border)] overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-[var(--st-primary)]" />
                  <span className="text-sm text-[var(--st-text-muted)]">
                    Los Cabos, Baja California Sur
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-6">
                  {t.storyTitle} <span className="text-[var(--st-primary)]">{t.storyHighlight}</span>{t.storyTitleEnd}
                </h3>

                <p className="text-[var(--st-text-secondary)] mb-6 leading-relaxed">
                  {t.storyP1}{" "}
                  <span className="text-[var(--st-text-primary)] font-medium">{t.founder1}</span> {locale === "es" ? "y" : "and"}{" "}
                  <span className="text-[var(--st-text-primary)] font-medium">{t.founder2}</span>
                  {t.storyP1Mid}{" "}
                  <span className="text-[var(--st-primary)]">{t.school}</span>{" "}
                  {t.storyP1End}
                </p>

                <p className="text-[var(--st-text-secondary)] leading-relaxed">
                  {t.storyP2}
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="flex items-center gap-2 text-sm text-[var(--st-text-muted)]">
                    <GraduationCap className="w-4 h-4 text-[var(--st-secondary)]" />
                    <span>Colegio El Camino</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[var(--st-border)]" />
                  <div className="flex items-center gap-2 text-sm text-[var(--st-text-muted)]">
                    <Building className="w-4 h-4 text-[var(--st-secondary)]" />
                    <span>Cabo San Lucas</span>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--st-primary)]/5 p-8 md:p-10 flex items-center border-t md:border-t-0 md:border-l border-[var(--st-border)]">
                <div className="w-full">
                  <div className="space-y-4">
                    {t.founders.map((founder, i) => (
                      <motion.div
                        key={founder.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                        className="bg-[var(--st-surface-elevated)] rounded-xl p-4 border border-[var(--st-border)]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)] flex items-center justify-center flex-shrink-0">
                            <span className="text-[var(--primary-foreground)] font-bold text-lg">
                              {founder.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold">{founder.name}</div>
                            <div className="text-xs text-[var(--st-text-muted)]">{founder.role}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)]">
              <Handshake className="w-6 h-6 text-[var(--st-secondary)]" />
              <div className="text-left">
                <div className="text-xs font-mono text-[var(--st-secondary)] uppercase tracking-wider mb-1">
                  {t.partnerBadge}
                </div>
                <div className="font-semibold">
                  {t.partnerTitle}{" "}
                  <span className="text-[var(--st-primary)]">{t.partnerName}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--st-text-muted)] mt-4 max-w-lg mx-auto">
              {t.partnerDesc}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-[var(--st-primary)]/10 rounded-3xl blur-2xl opacity-50" />

            <div className="relative bg-[var(--st-surface)] rounded-3xl border border-[var(--st-primary)]/30 p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 st-grid-bg opacity-20" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-16 h-16 rounded-2xl bg-[var(--st-primary)] flex items-center justify-center mx-auto mb-8"
                >
                  <Calendar className="w-8 h-8 text-[var(--primary-foreground)]" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.ctaHeadline}</h2>
                <p className="text-xl md:text-2xl text-[var(--st-text-secondary)] mb-8 max-w-2xl mx-auto">
                  {t.ctaSubhead}{" "}
                  <span className="text-[var(--st-primary)] font-semibold">{t.ctaHighlight}</span>
                  {t.ctaSubheadEnd}
                </p>

                <Button
                  asChild
                  size="lg"
                  className="h-16 px-10 text-lg font-semibold bg-[var(--st-primary)] hover:bg-[var(--st-primary-light)] rounded-full group transition-all duration-300 shadow-lg shadow-[var(--st-primary)]/20 text-white dark:text-black"
                >
                  <Link href={t.agendarPath} className="!text-white dark:!text-black flex items-center">
                    <Calendar className="w-5 h-5 mr-3" />
                    {t.ctaButton}
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <p className="text-sm text-[var(--st-text-muted)] mt-6">{t.ctaNote}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default STTrust;
