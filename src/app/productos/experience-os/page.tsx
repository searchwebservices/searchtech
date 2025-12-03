"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Sparkles, TrendingUp, Users, Star, BarChart3, Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ProductWaitlistForm } from "@/components/product-waitlist-form";

export default function ExperienceOSPage() {
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
                <span className="text-sm font-medium text-amber-500">En Desarrollo</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20 mb-6 ml-2">
                <Building2 className="w-4 h-4 text-[var(--st-primary)]" />
                <span className="text-sm font-medium text-[var(--st-primary)]">PropTech</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Experience <span className="st-gradient-text">OS</span>
              </h1>

              <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
                Transforma tu negocio de property management en una empresa PropTech completa. Aumenta clientes, satisfacción y valuación casi instantáneamente.
              </p>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm">De Property Manager a PropTech Company</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Experience OS?</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Users,
                    value: "+40%",
                    label: "Más Clientes",
                    description: "Portales de propiedades que convierten mejor",
                  },
                  {
                    icon: Star,
                    value: "4.9★",
                    label: "Satisfacción",
                    description: "Experiencia de huésped de clase mundial",
                  },
                  {
                    icon: TrendingUp,
                    value: "3x",
                    label: "Valuación",
                    description: "De operador a empresa tecnológica",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-background border border-[var(--st-border)]"
                  >
                    <stat.icon className="w-8 h-8 text-[var(--st-primary)] mx-auto mb-3" />
                    <div className="text-3xl font-bold text-[var(--st-primary)] mb-1">{stat.value}</div>
                    <div className="font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-[var(--st-text-muted)]">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Planeadas</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Home,
                    title: "Gestión de Propiedades",
                    description: "Dashboard unificado para todas tus propiedades con métricas en tiempo real.",
                  },
                  {
                    icon: Star,
                    title: "Experiencia de Huéspedes",
                    description: "Comunicación automatizada, guías digitales y concierge virtual.",
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics Avanzados",
                    description: "ROI por propiedad, análisis de precios, y predicción de ocupación.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Optimización de Revenue",
                    description: "AI que ajusta precios dinámicamente basándose en demanda y competencia.",
                  },
                  {
                    icon: Users,
                    title: "Portal de Propietarios",
                    description: "Cada propietario ve reportes y métricas de sus propiedades.",
                  },
                  {
                    icon: Sparkles,
                    title: "AI Asistente",
                    description: "Responde preguntas de huéspedes y sugiere mejoras basándose en reviews.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]"
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

        {/* Waitlist */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Sé de los Primeros</h2>
              <p className="text-[var(--st-text-muted)]">
                Experience OS está en desarrollo activo. Únete a la lista de espera para acceso anticipado y precios de early adopter.
              </p>
            </div>
            <ProductWaitlistForm productName="Experience OS" locale="es" />
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

