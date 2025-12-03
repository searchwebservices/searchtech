"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palmtree, MessageSquare, Calendar, Users, Sparkles, Globe, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ProductWaitlistForm } from "@/components/product-waitlist-form";

export default function CaboConciergePage() {
  const partners = [
    "Unique Cabo Weddings",
    "Borja Ponce Eventos",
    "Momentum Cabo Properties",
    "ExperienceLab.tech",
  ];

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

      <main>
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--st-primary)]/5 to-transparent" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-500">Próximamente</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20 mb-6 ml-2">
                <Palmtree className="w-4 h-4 text-[var(--st-primary)]" />
                <span className="text-sm font-medium text-[var(--st-primary)]">Hospitalidad & Eventos</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cabo Concierge <span className="st-gradient-text">AI</span>
              </h1>

              <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
                La plataforma de concierge inteligente para planificación de bodas, eventos y experiencias en Los Cabos.
              </p>

              {/* Strategic Partners */}
              <div className="mb-12">
                <div className="text-xs uppercase tracking-wider text-[var(--st-text-muted)] mb-4">
                  Socios Estratégicos
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {partners.map((partner) => (
                    <span
                      key={partner}
                      className="px-4 py-2 rounded-lg bg-[var(--st-surface)] border border-[var(--st-border)] text-sm"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Planeadas</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Itinerarios con AI",
                    description: "Crea itinerarios completos día por día con una sola conversación.",
                  },
                  {
                    icon: Users,
                    title: "Coordinación Multi-Vendor",
                    description: "Conecta proveedores de transporte, restaurantes, tours y más en un solo flujo.",
                  },
                  {
                    icon: Calendar,
                    title: "Reservaciones Automáticas",
                    description: "El AI reserva directamente con proveedores conectados a la plataforma.",
                  },
                  {
                    icon: Globe,
                    title: "Multilingüe",
                    description: "Comunicación fluida en inglés y español para clientes internacionales.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 rounded-xl bg-background border border-[var(--st-border)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[var(--st-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-sm text-[var(--st-text-muted)]">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sé de los Primeros</h2>
              <p className="text-[var(--st-text-muted)]">
                Únete a la lista de espera y recibe acceso anticipado cuando lancemos.
              </p>
            </div>
            <ProductWaitlistForm productName="Cabo Concierge AI" locale="es" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)]">
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

