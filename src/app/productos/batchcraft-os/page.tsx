"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Check, ArrowLeft, Calendar, ClipboardCheck, BarChart3, Shield, FileText, Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ProductWaitlistForm } from "@/components/product-waitlist-form";

export default function BatchCraftOSPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20 mb-6">
                <FlaskConical className="w-4 h-4 text-[var(--st-primary)]" />
                <span className="text-sm font-medium text-[var(--st-primary)]">Manufactura & Calidad</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BatchCraft <span className="st-gradient-text">OS</span>
              </h1>

              <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
                Sistema de trazabilidad y control de calidad para producción en lotes y manufactura artesanal.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="https://searchlabs.netlify.app/get-started"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] !text-white dark:!text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar Demo
                </Link>
              </div>

              {/* Partners */}
              <div className="mb-12">
                <div className="text-xs uppercase tracking-wider text-[var(--st-text-muted)] mb-4">
                  Socios Estratégicos
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-[var(--st-surface)] border border-[var(--st-border)] text-sm">
                    Golden Sands <span className="text-[var(--st-text-muted)]">(Cliente)</span>
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-[var(--st-surface)] border border-[var(--st-border)] text-sm">
                    Simbiotica MX
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Control Total de Producción</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: ClipboardCheck,
                    title: "Checklists Obligatorios",
                    description: "El sistema obliga a completar cada paso de seguridad antes de avanzar la producción.",
                  },
                  {
                    icon: FlaskConical,
                    title: "Trazabilidad de Lotes",
                    description: "Sigue cada lote desde materia prima hasta producto final con trazabilidad completa.",
                  },
                  {
                    icon: Shield,
                    title: "Cumplimiento Normativo",
                    description: "Genera reportes automáticos para cumplir con regulaciones de COFEPRIS y exportación.",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics de Producción",
                    description: "Identifica cuellos de botella, optimiza tiempos y reduce desperdicios.",
                  },
                  {
                    icon: FileText,
                    title: "Documentación Automática",
                    description: "Genera certificados de calidad, hojas de datos y reportes con un clic.",
                  },
                  {
                    icon: Check,
                    title: "Control de pH y Métricas",
                    description: "Monitoreo de variables críticas en tiempo real con alertas automáticas.",
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

        {/* Pricing */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Inversión</h2>
              <p className="text-[var(--st-text-muted)] mb-8">
                Precios transparentes para manufactura artesanal
              </p>

              <div className="p-8 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)]">
                <div className="mb-6">
                  <div className="text-sm text-[var(--st-text-muted)] mb-2">Construcción Inicial</div>
                  <div className="text-4xl font-bold">$200,000+ <span className="text-lg font-normal text-[var(--st-text-muted)]">MXN</span></div>
                </div>

                <div className="mb-8 pb-8 border-b border-[var(--st-border)]">
                  <div className="text-sm text-[var(--st-text-muted)] mb-2">Mantenimiento Mensual</div>
                  <div className="text-2xl font-bold">$10,000+ <span className="text-lg font-normal text-[var(--st-text-muted)]">MXN/mes</span></div>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Sistema de trazabilidad completo",
                    "Checklists y validaciones personalizadas",
                    "Reportes de cumplimiento normativo",
                    "Soporte 24/7 local",
                    "Código 100% tuyo",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-[var(--st-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://searchlabs.netlify.app/get-started"
                  className="block w-full py-4 rounded-xl bg-[var(--st-primary)] !text-white dark:!text-black font-medium text-center hover:bg-[var(--st-primary-hover)] transition-colors"
                >
                  Agendar Consulta Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <ProductWaitlistForm productName="BatchCraft OS" locale="es" />
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

