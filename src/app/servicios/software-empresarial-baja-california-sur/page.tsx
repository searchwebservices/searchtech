"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, Search, MapPin, Building2, Palmtree, Ship, Home, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { FAQSchema } from "@/components/faq-schema";
import { RelatedServices } from "@/components/related-services";

const faqs = [
  {
    question: "¿Qué áreas de Baja California Sur cubren?",
    answer: "Servimos toda Baja California Sur: Los Cabos (Cabo San Lucas y San José del Cabo), La Paz, Todos Santos, Los Barriles, East Cape, y cualquier comunidad de la península. Nos reunimos contigo donde estés.",
  },
  {
    question: "¿Por qué necesito software empresarial local en BCS?",
    answer: "Las agencias remotas no entienden las temporadas turísticas de BCS, la logística de la península, ni las expectativas de los clientes internacionales. Un equipo local diseña soluciones que se adaptan a la realidad de hacer negocios en Baja California Sur.",
  },
  {
    question: "¿Qué tipo de negocios atienden en BCS?",
    answer: "Atendemos rentas de vehículos (golf carts, UTVs, yates), bienes raíces, hoteles boutique, restaurantes, tours y experiencias, retail, y cualquier negocio que necesite automatizar operaciones y tener visibilidad en tiempo real.",
  },
  {
    question: "¿Pueden integrar mi software existente?",
    answer: "Sí, diseñamos sistemas operativos que se integran con tus herramientas existentes — sistemas de punto de venta, plataformas de reservas, herramientas de contabilidad, y más. Tu custom OS se convierte en el centro de toda tu operación.",
  },
  {
    question: "¿Cuánto cuesta el software empresarial para BCS?",
    answer: "La inversión mínima es de $200,000 MXN para construcción inicial, más mantenimiento desde $10,000 MXN/mes. Empezamos pequeño para conocerte y escalamos modularmente. Sin sorpresas — precios transparentes desde el día uno.",
  },
  {
    question: "¿Ofrecen soporte en inglés y español?",
    answer: "Sí, somos completamente bilingües. Muchos de nuestros clientes tienen equipos que hablan inglés o español, y nos adaptamos a tus necesidades de comunicación.",
  },
];

const industries = [
  {
    icon: Ship,
    title: "Rentas de Vehículos",
    description: "Golf carts, UTVs, yates y embarcaciones. Sistemas de reservas, inventario y mantenimiento.",
  },
  {
    icon: Home,
    title: "Bienes Raíces",
    description: "Property management, CRM de clientes y automatización de marketing inmobiliario.",
  },
  {
    icon: Building2,
    title: "Hoteles Boutique",
    description: "Gestión de reservaciones, housekeeping y experiencias personalizadas para huéspedes.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "Inventario, proveedores, reservaciones y análisis de rendimiento por platillo.",
  },
  {
    icon: Palmtree,
    title: "Tours y Experiencias",
    description: "Booking online, gestión de guías y coordinación logística automatizada.",
  },
];

const locations = [
  "Cabo San Lucas",
  "San José del Cabo",
  "La Paz",
  "Todos Santos",
  "Los Barriles",
  "East Cape",
];

const stats = [
  { value: "100%", label: "Código Propietario" },
  { value: "24/7", label: "Soporte Técnico" },
  { value: "Local", label: "Equipo en BCS" },
];

export default function SoftwareEmpresarialBCS() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[var(--st-border)]">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <Search className="w-6 h-6 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo text-lg tracking-widest text-foreground">SEARCH</span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle locale="es" />
              <Button asChild size="sm" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-white dark:text-black">
                <Link href="/agendar">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--st-primary)]/10 via-transparent to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 text-[var(--st-primary)] text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Software Empresarial · Baja California Sur
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Software Empresarial para{" "}
              <span className="bg-gradient-to-r from-[var(--st-primary)] to-[var(--st-primary-hover)] bg-clip-text text-transparent">
                Baja California Sur
              </span>
            </h1>
            <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
              Sistemas operativos personalizados para negocios en Los Cabos, La Paz, Todos Santos y toda la región de BCS. 
              Arquitectos de software locales que entienden tu mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 text-white dark:text-black">
                <Link href="/agendar">
                  Consulta Gratuita en Persona
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--st-surface)] border-y border-[var(--st-border)]">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--st-primary)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--st-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Entendemos el Mercado de BCS
              </h2>
              <p className="text-lg text-[var(--st-text-muted)]">
                No somos una agencia remota — somos arquitectos de software locales
              </p>
            </motion.div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-[var(--st-text-muted)] mb-6">
                Baja California Sur tiene un ecosistema empresarial único: turismo de lujo, bienes raíces de alto valor, 
                rentas de vehículos recreativos, y servicios de hospitalidad que requieren 
                <strong className="text-foreground"> soluciones tecnológicas especializadas</strong>.
              </p>
              <p className="text-[var(--st-text-muted)] mb-6">
                Las agencias de software remotas no entienden las temporadas turísticas, la logística de la península, 
                ni las expectativas de los clientes internacionales que visitan la región. Nosotros sí.
              </p>
              <p className="text-[var(--st-text-muted)]">
                Construimos <strong className="text-foreground">sistemas operativos personalizados</strong> que se adaptan 
                a la realidad de hacer negocios en Los Cabos, La Paz, Todos Santos, y toda Baja California Sur.
              </p>
            </div>

            {/* Location badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((location) => (
                <span
                  key={location}
                  className="px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 text-sm font-medium"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[var(--st-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industrias que Servimos en BCS
            </h2>
            <p className="text-lg text-[var(--st-text-muted)]">
              Sistemas operativos personalizados para cada sector
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-[var(--st-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-[var(--st-text-muted)]">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por Qué Elegir un Equipo Local?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Reuniones en persona en tu oficina",
                "Entendemos las temporadas de BCS",
                "Soporte técnico sin demoras de zona horaria",
                "Conocemos a los proveedores locales",
                "Hablamos tu idioma (español e inglés)",
                "Parte de la comunidad empresarial",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[var(--st-primary)]" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSchema faqs={faqs} locale="es" />

      {/* Related Services */}
      <RelatedServices locale="es" currentPage="/servicios/software-empresarial-baja-california-sur" />

      {/* CTA */}
      <section className="py-20 bg-[var(--st-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agenda una Reunión en Persona
            </h2>
            <p className="text-lg text-[var(--st-text-muted)] mb-8">
              Nos reunimos contigo en Los Cabos, La Paz, o cualquier ubicación en BCS para entender tu negocio.
            </p>
            <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 text-white dark:text-black">
              <Link href="/agendar">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Consulta Gratuita
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo tracking-widest text-sm">SEARCH</span>
            </Link>
            <p className="text-sm text-[var(--st-text-muted)]">
              © 2024 Search | Operating Systems. Custom OS en Baja California Sur.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

