"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Car,
  Palmtree,
  FlaskConical,
  Heart,
  Building2,
  MessageSquare,
  TrendingUp,
  ClipboardCheck,
  Sparkles,
  Bot,
  ChevronRight,
  Users,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Helper component to handle internal vs external links
const ProductLink = ({ href, external, children, className }: { href: string; external?: boolean; children: React.ReactNode; className?: string }) => {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={className}>{children}</Link>;
};
import STAIDemo from "./st-ai-demo";

const content = {
  es: {
    badge: "Nuestros Productos",
    headline: ["Sistemas Operativos", "Inteligentes"],
    subtitle: "Plataformas de software construidas con Agentic AI,",
    subtitleHighlight: "diseñadas para industrias específicas",
    subtitleEnd: "en Los Cabos y Baja California Sur.",
    capability: {
      badge: "Full Context Read",
      title: "Multi-Tool Cross-Analysis",
      databases: ["Inventario", "Ventas", "Clientes"],
      dbLabel: "Base de datos",
      insights: "→ Insights Accionables",
    },
    products: [
      {
        id: "golf-cart-os",
        href: "/productos/golf-cart-os",
        category: "Rentas de Vehículos",
        title: "Golf Cart OS",
        description: "Sistema operativo completo para negocios de renta de golf carts, UTVs y vehículos recreativos.",
        query: '"¿Qué carritos llevan más de 6 meses en inventario y cuáles tienen el margen más alto?"',
        features: ["Gestión de flota", "Mantenimiento predictivo", "Reservaciones automáticas"],
        partners: ["ZYCAR"],
        partnerLabel: "Socio Estratégico",
        cta: "Ver Producto",
      },
      {
        id: "cabo-concierge",
        href: "/productos/cabo-concierge",
        category: "Hospitalidad & Eventos",
        title: "Cabo Concierge AI",
        description: "Plataforma de concierge inteligente para planificación de bodas, eventos y experiencias en Los Cabos.",
        query: '"Planea un itinerario de 5 días para una familia, incluyendo reservaciones y transporte."',
        features: ["Itinerarios AI", "Coordinación multi-vendor", "Reservaciones automáticas"],
        partners: ["Unique Cabo Weddings", "Borja Ponce Eventos", "Momentum Cabo", "ExperienceLab"],
        partnerLabel: "Socios Estratégicos",
        cta: "Próximamente",
        comingSoon: true,
      },
      {
        id: "batchcraft-os",
        href: "/productos/batchcraft-os",
        category: "Manufactura & Calidad",
        title: "BatchCraft OS",
        description: "Sistema de trazabilidad y control de calidad para producción en lotes y manufactura artesanal.",
        query: '"Verifica que el lote #47 cumpla con todos los pasos de calidad antes de embotellar."',
        features: ["Trazabilidad de lotes", "Checklists obligatorios", "Cumplimiento normativo"],
        partners: ["Golden Sands", "Simbiotica MX"],
        partnerLabel: "Socios Estratégicos",
        cta: "Ver Producto",
      },
      {
        id: "cabo-tails",
        href: "https://cabotails.netlify.app/",
        category: "Open Source",
        title: "Cabo Tails",
        external: true,
        description: "OS de código abierto para refugios de animales: matching de adopciones con AI y coordinación de voluntarios.",
        query: '"Encuentra familias compatibles para Luna basándose en historial de adopciones exitosas."',
        features: ["Matching AI de adopciones", "App para voluntarios", "Gestión de refugio"],
        partners: [],
        partnerLabel: "Código Abierto",
        cta: "Contribuir",
        openSource: true,
      },
      {
        id: "experience-os",
        href: "https://experiencelab.tech/",
        category: "PropTech",
        title: "Experience OS",
        external: true,
        description: "Transforma property managers en empresas PropTech completas. Aumenta clientes, satisfacción y valuación.",
        query: '"¿Qué propiedades tienen mayor ROI y cuáles necesitan atención en reviews?"',
        features: ["Gestión de propiedades", "Experiencia de huéspedes", "Analytics avanzados"],
        partners: [],
        partnerLabel: "En Desarrollo",
        cta: "Lista de Espera",
        comingSoon: true,
      },
    ],
    bottomNote: "Cada producto incluye AI integrada que aprende de tus datos y mejora con cada interacción.",
    viewAll: "Ver Todos los Productos",
  },
  en: {
    badge: "Our Products",
    headline: ["Intelligent", "Operating Systems"],
    subtitle: "Software platforms built with Agentic AI,",
    subtitleHighlight: "designed for specific industries",
    subtitleEnd: "in Los Cabos and Baja California Sur.",
    capability: {
      badge: "Full Context Read",
      title: "Multi-Tool Cross-Analysis",
      databases: ["Inventory", "Sales", "Clients"],
      dbLabel: "Database",
      insights: "→ Actionable Insights",
    },
    products: [
      {
        id: "golf-cart-os",
        href: "/en/products/golf-cart-os",
        category: "Vehicle Rentals",
        title: "Golf Cart OS",
        description: "Complete operating system for golf cart, UTV, and recreational vehicle rental businesses.",
        query: '"Which carts have been in inventory for 6+ months and which have the highest margin?"',
        features: ["Fleet management", "Predictive maintenance", "Automatic reservations"],
        partners: ["ZYCAR"],
        partnerLabel: "Strategic Partner",
        cta: "View Product",
      },
      {
        id: "cabo-concierge",
        href: "/en/products/cabo-concierge",
        category: "Hospitality & Events",
        title: "Cabo Concierge AI",
        description: "Intelligent concierge platform for wedding planning, events, and experiences in Los Cabos.",
        query: '"Plan a 5-day itinerary for a family, including reservations and transport."',
        features: ["AI itineraries", "Multi-vendor coordination", "Automatic reservations"],
        partners: ["Unique Cabo Weddings", "Borja Ponce Eventos", "Momentum Cabo", "ExperienceLab"],
        partnerLabel: "Strategic Partners",
        cta: "Coming Soon",
        comingSoon: true,
      },
      {
        id: "batchcraft-os",
        href: "/en/products/batchcraft-os",
        category: "Manufacturing & Quality",
        title: "BatchCraft OS",
        description: "Traceability and quality control system for batch production and artisanal manufacturing.",
        query: '"Verify that batch #47 complies with all quality steps before bottling."',
        features: ["Batch traceability", "Mandatory checklists", "Regulatory compliance"],
        partners: ["Golden Sands", "Simbiotica MX"],
        partnerLabel: "Strategic Partners",
        cta: "View Product",
      },
      {
        id: "cabo-tails",
        href: "https://cabotails.netlify.app/",
        category: "Open Source",
        title: "Cabo Tails",
        external: true,
        description: "Open source OS for animal shelters: AI-powered adoption matching and volunteer coordination app.",
        query: '"Find compatible families for Luna based on successful adoption history."',
        features: ["AI adoption matching", "Volunteer app", "Shelter management"],
        partners: [],
        partnerLabel: "Open Source",
        cta: "Contribute",
        openSource: true,
      },
      {
        id: "experience-os",
        href: "https://experiencelab.tech/",
        category: "PropTech",
        title: "Experience OS",
        external: true,
        description: "Transform property managers into full PropTech companies. Increase clients, satisfaction, and valuation.",
        query: '"Which properties have highest ROI and which need attention on reviews?"',
        features: ["Property management", "Guest experience", "Advanced analytics"],
        partners: [],
        partnerLabel: "In Development",
        cta: "Join Waitlist",
        comingSoon: true,
      },
    ],
    bottomNote: "Each product includes integrated AI that learns from your data and improves with every interaction.",
    viewAll: "View All Products",
  },
};

const productIcons = [Car, Palmtree, FlaskConical, Heart, Building2];
const accentIcons = [TrendingUp, MessageSquare, ClipboardCheck, Users, Sparkles];

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

        {/* AI Capability Visual */}
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

        {/* Product Cards - Grid of 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.products.slice(0, 3).map((product, index) => {
            const Icon = productIcons[index];
            const AccentIcon = accentIcons[index];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="group relative"
              >
                <ProductLink href={product.href} external={product.external} className="block h-full">
                  <div className="relative h-full bg-gradient-to-b from-[var(--st-primary)]/10 to-transparent rounded-2xl overflow-hidden border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--st-primary)]/10">
                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--st-primary)]/10">
                          <Icon className="w-7 h-7 text-[var(--st-primary)]" />
                        </div>
                        <div className="flex items-center gap-2">
                          {product.comingSoon && (
                            <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              {locale === "es" ? "Próximamente" : "Coming Soon"}
                            </span>
                          )}
                          {product.openSource && (
                            <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                              Open Source
                            </span>
                          )}
                          <AccentIcon className="w-5 h-5 opacity-40 text-[var(--st-primary)]" />
                        </div>
                      </div>

                      <div className="mb-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--st-primary)]">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-sm text-[var(--st-text-muted)] mb-4">{product.description}</p>
                    </div>

                    <div className="px-6 py-3 bg-[var(--st-surface)]/50">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-[var(--st-border)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MessageSquare className="w-3.5 h-3.5 text-[var(--st-text-muted)]" />
                        </div>
                        <p className="text-xs text-[var(--st-text-secondary)] italic line-clamp-2">{product.query}</p>
                      </div>
                    </div>

                    <div className="p-6 pt-4">
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[var(--st-text-muted)]">
                            <span className="w-1 h-1 rounded-full bg-[var(--st-primary)]" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Partners Section */}
                      {product.partners.length > 0 && (
                        <div className="pt-4 border-t border-[var(--st-border)]">
                          <div className="text-[10px] uppercase tracking-wider text-[var(--st-text-muted)] mb-2">
                            {product.partnerLabel}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.partners.map((partner) => (
                              <span
                                key={partner}
                                className="px-2 py-1 text-[10px] rounded-md bg-[var(--st-surface-elevated)] border border-[var(--st-border)] text-[var(--st-text-muted)]"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="mt-4 flex items-center text-sm text-[var(--st-primary)] font-medium group-hover:gap-2 transition-all">
                        {product.cta}
                        {product.external ? (
                          <ExternalLink className="w-4 h-4 ml-1" />
                        ) : (
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,var(--st-primary)/8,transparent_60%)]" />
                  </div>
                </ProductLink>
              </motion.div>
            );
          })}
        </div>

        {/* Second Row - 2 Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 max-w-4xl mx-auto">
          {t.products.slice(3, 5).map((product, index) => {
            const Icon = productIcons[index + 3];
            const AccentIcon = accentIcons[index + 3];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="group relative"
              >
                <ProductLink href={product.href} external={product.external} className="block h-full">
                  <div className="relative h-full bg-gradient-to-b from-[var(--st-primary)]/10 to-transparent rounded-2xl overflow-hidden border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[var(--st-primary)]/10">
                    <div className="p-6 pb-0">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--st-primary)]/10">
                          <Icon className="w-7 h-7 text-[var(--st-primary)]" />
                        </div>
                        <div className="flex items-center gap-2">
                          {product.comingSoon && (
                            <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              {locale === "es" ? "Próximamente" : "Coming Soon"}
                            </span>
                          )}
                          {product.openSource && (
                            <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                              Open Source
                            </span>
                          )}
                          <AccentIcon className="w-5 h-5 opacity-40 text-[var(--st-primary)]" />
                        </div>
                      </div>

                      <div className="mb-1">
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--st-primary)]">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-sm text-[var(--st-text-muted)] mb-4">{product.description}</p>
                    </div>

                    <div className="px-6 py-3 bg-[var(--st-surface)]/50">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-md bg-[var(--st-border)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MessageSquare className="w-3.5 h-3.5 text-[var(--st-text-muted)]" />
                        </div>
                        <p className="text-xs text-[var(--st-text-secondary)] italic line-clamp-2">{product.query}</p>
                      </div>
                    </div>

                    <div className="p-6 pt-4">
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[var(--st-text-muted)]">
                            <span className="w-1 h-1 rounded-full bg-[var(--st-primary)]" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Open Source / Coming Soon Badge */}
                      {(product.openSource || product.comingSoon) && product.partners.length === 0 && (
                        <div className="pt-4 border-t border-[var(--st-border)]">
                          <div className="text-[10px] uppercase tracking-wider text-[var(--st-text-muted)]">
                            {product.partnerLabel}
                          </div>
                        </div>
                      )}

                      {/* CTA */}
                      <div className="mt-4 flex items-center text-sm text-[var(--st-primary)] font-medium group-hover:gap-2 transition-all">
                        {product.cta}
                        {product.external ? (
                          <ExternalLink className="w-4 h-4 ml-1" />
                        ) : (
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        )}
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,var(--st-primary)/8,transparent_60%)]" />
                  </div>
                </ProductLink>
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
          <p className="text-[var(--st-text-muted)] text-sm max-w-2xl mx-auto mb-6">{t.bottomNote}</p>
          <Link
            href={locale === "es" ? "/productos" : "/en/products"}
            className="inline-flex items-center gap-2 text-[var(--st-primary)] font-medium hover:underline"
          >
            {t.viewAll}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Interactive AI Demo */}
        <STAIDemo locale={locale} />
      </div>
    </section>
  );
};

export default STAI;
