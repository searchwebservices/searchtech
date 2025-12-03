"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Palmtree, FlaskConical, Heart, Building2, ChevronRight, Search, ArrowLeft, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

const products = [
  {
    id: "golf-cart-os",
    href: "/productos/golf-cart-os",
    icon: Car,
    category: "Rentas de Vehículos",
    title: "Golf Cart OS",
    description: "Sistema operativo completo para negocios de renta de golf carts, UTVs y vehículos recreativos.",
    partners: ["ZYCAR"],
    status: "available",
  },
  {
    id: "cabo-concierge",
    href: "/productos/cabo-concierge",
    icon: Palmtree,
    category: "Hospitalidad & Eventos",
    title: "Cabo Concierge AI",
    description: "Plataforma de concierge inteligente para planificación de bodas, eventos y experiencias.",
    partners: ["Unique Cabo Weddings", "Borja Ponce Eventos", "Momentum Cabo", "ExperienceLab"],
    status: "coming-soon",
  },
  {
    id: "batchcraft-os",
    href: "/productos/batchcraft-os",
    icon: FlaskConical,
    category: "Manufactura & Calidad",
    title: "BatchCraft OS",
    description: "Sistema de trazabilidad y control de calidad para producción en lotes.",
    partners: ["Golden Sands", "Simbiotica MX"],
    status: "available",
  },
  {
    id: "cabo-tails",
    href: "https://cabotails.netlify.app/",
    icon: Heart,
    category: "Open Source",
    title: "Cabo Tails",
    description: "OS de código abierto para refugios de animales: matching de adopciones con AI.",
    partners: ["ExperienceLab.tech"],
    status: "open-source",
    external: true,
  },
  {
    id: "experience-os",
    href: "https://experiencelab.tech/",
    icon: Building2,
    category: "PropTech",
    title: "Experience OS",
    description: "Transforma property managers en empresas PropTech completas.",
    partners: ["ExperienceLab.tech"],
    status: "coming-soon",
    external: true,
  },
];

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[var(--st-border)]">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
            <span className="font-logo tracking-widest text-sm">SEARCH</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-[var(--st-text-muted)] hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Inicio
            </Link>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container py-12">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Nuestros <span className="st-gradient-text">Productos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--st-text-muted)]"
          >
            Sistemas operativos inteligentes diseñados para industrias específicas en Los Cabos y Baja California Sur.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {product.external ? (
                <a href={product.href} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="h-full p-6 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 hover:shadow-xl hover:shadow-[var(--st-primary)]/5 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center">
                        <product.icon className="w-7 h-7 text-[var(--st-primary)]" />
                      </div>
                      {product.status === "coming-soon" && (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Próximamente
                        </span>
                      )}
                      {product.status === "open-source" && (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                          Open Source
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--st-primary)] mb-1">
                      {product.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--st-primary)] transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm text-[var(--st-text-muted)] mb-4">
                      {product.description}
                    </p>

                    {product.partners.length > 0 && (
                      <div className="mb-4">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--st-text-muted)] mb-2">
                          Socios
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {product.partners.slice(0, 3).map((partner) => (
                            <span
                              key={partner}
                              className="px-2 py-0.5 text-[10px] rounded bg-[var(--st-surface-elevated)] border border-[var(--st-border)]"
                            >
                              {partner}
                            </span>
                          ))}
                          {product.partners.length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] rounded bg-[var(--st-surface-elevated)] border border-[var(--st-border)]">
                              +{product.partners.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center text-sm text-[var(--st-primary)] font-medium">
                      Visitar sitio <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </a>
              ) : (
                <Link href={product.href} className="block group">
                  <div className="h-full p-6 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 hover:shadow-xl hover:shadow-[var(--st-primary)]/5 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center">
                        <product.icon className="w-7 h-7 text-[var(--st-primary)]" />
                      </div>
                      {product.status === "coming-soon" && (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Próximamente
                        </span>
                      )}
                      {product.status === "open-source" && (
                        <span className="px-2 py-1 text-[10px] font-medium rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                          Open Source
                        </span>
                      )}
                    </div>

                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--st-primary)] mb-1">
                      {product.category}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-[var(--st-primary)] transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm text-[var(--st-text-muted)] mb-4">
                      {product.description}
                    </p>

                    {product.partners.length > 0 && (
                      <div className="mb-4">
                        <div className="text-[10px] uppercase tracking-wider text-[var(--st-text-muted)] mb-2">
                          Socios
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {product.partners.slice(0, 3).map((partner) => (
                            <span
                              key={partner}
                              className="px-2 py-0.5 text-[10px] rounded bg-[var(--st-surface-elevated)] border border-[var(--st-border)]"
                            >
                              {partner}
                            </span>
                          ))}
                          {product.partners.length > 3 && (
                            <span className="px-2 py-0.5 text-[10px] rounded bg-[var(--st-surface-elevated)] border border-[var(--st-border)]">
                              +{product.partners.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center text-sm text-[var(--st-primary)] font-medium">
                      Ver más <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--st-primary)]/10 to-[var(--st-primary)]/5 border border-[var(--st-primary)]/20"
        >
          <Sparkles className="w-8 h-8 text-[var(--st-primary)] mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">¿Necesitas algo diferente?</h3>
          <p className="text-[var(--st-text-muted)] mb-6">
            También construimos sistemas operativos 100% personalizados para tu negocio único.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] text-white dark:text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
          >
            Agendar Consulta
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)] mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo tracking-widest text-sm">SEARCH</span>
            </Link>
            <p className="text-sm text-[var(--st-text-muted)]">
              © 2024 Search | Operating Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

