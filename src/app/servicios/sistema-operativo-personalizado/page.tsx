"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, Search, Cpu, Database, Zap, Shield, Users } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { FAQSchema } from "@/components/faq-schema";
import { RelatedServices } from "@/components/related-services";

const faqs = [
  {
    question: "¿Qué es un sistema operativo personalizado para negocios?",
    answer: "Un sistema operativo personalizado (custom OS) es una plataforma de software diseñada específicamente para tu negocio. A diferencia de software genérico, un custom OS conecta todas tus operaciones — ventas, inventario, clientes, finanzas — en un solo sistema integrado que automatiza tus procesos únicos y te da visibilidad completa de tu negocio en tiempo real.",
  },
  {
    question: "¿Cuánto cuesta un sistema operativo personalizado en Los Cabos?",
    answer: "La inversión mínima para un sistema operativo personalizado es de $200,000 MXN para la construcción inicial, más una cuota de mantenimiento desde $10,000 MXN/mes. Preferimos empezar con proyectos más pequeños y fundamentales para conocer tu negocio, y luego escalar modularmente según tus necesidades.",
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un custom OS?",
    answer: "El tiempo de desarrollo varía según la complejidad, pero típicamente un sistema operativo base está listo en 8-12 semanas. Trabajamos de forma modular, entregando funcionalidades incrementalmente para que puedas empezar a ver valor desde las primeras semanas.",
  },
  {
    question: "¿Por qué elegir un equipo local en Los Cabos?",
    answer: "Un equipo local entiende el mercado de BCS — temporadas turísticas, logística de la península, y expectativas de clientes internacionales. Además, ofrecemos reuniones en persona, soporte sin demoras de zona horaria, y somos parte de la comunidad empresarial local.",
  },
  {
    question: "¿Qué industrias se benefician de un sistema operativo personalizado?",
    answer: "Cualquier negocio que maneje datos, clientes e inventario se beneficia: rentas de vehículos (golf carts, UTVs, yates), bienes raíces, hoteles boutique, restaurantes, tours y experiencias, y más. Si operas con Excel y WhatsApp, un custom OS transformará tu eficiencia.",
  },
  {
    question: "¿Incluyen soporte técnico después del lanzamiento?",
    answer: "Sí, la cuota de mantenimiento mensual incluye soporte técnico 24/7, monitoreo de errores, actualizaciones de seguridad, y optimización continua del sistema. Estamos a una llamada de distancia aquí en Los Cabos.",
  },
];
import type { Metadata } from "next";

const features = [
  {
    icon: Cpu,
    title: "Sistema Operativo a la Medida",
    description: "Un OS diseñado específicamente para los flujos de trabajo de tu negocio en Los Cabos.",
  },
  {
    icon: Database,
    title: "Tus Datos, Tu Control",
    description: "Base de datos propietaria con acceso total a tu información empresarial.",
  },
  {
    icon: Zap,
    title: "Automatización Inteligente",
    description: "Procesos automatizados que eliminan tareas repetitivas y errores humanos.",
  },
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Protección de datos de nivel bancario desde el primer día.",
  },
  {
    icon: Users,
    title: "Soporte Local 24/7",
    description: "Equipo técnico en Los Cabos disponible cuando lo necesites.",
  },
];

const benefits = [
  "Elimina el caos de Excel y WhatsApp",
  "Visibilidad en tiempo real de tu negocio",
  "Integración con herramientas existentes",
  "Escalable según tu crecimiento",
  "Código propietario, no plantillas",
  "Reuniones en persona en Cabo",
];

export default function SistemaOperativoPersonalizado() {
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
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 text-[var(--st-primary)] text-sm font-medium mb-6">
              Sistema Operativo Personalizado · Los Cabos, BCS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tu Negocio Merece un{" "}
              <span className="bg-gradient-to-r from-[var(--st-primary)] to-[var(--st-primary-hover)] bg-clip-text text-transparent">
                Sistema Operativo Personalizado
              </span>
            </h1>
            <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
              Diseñamos y construimos sistemas operativos personalizados para negocios en Los Cabos y Baja California Sur. 
              Un custom OS que unifica todas tus operaciones en una sola plataforma inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 text-white dark:text-black">
                <Link href="/agendar">
                  Solicitar Demo Gratuita
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-[var(--st-border)]">
                <Link href="/#arquitectura">
                  Ver Precios
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Custom OS */}
      <section className="py-20 bg-[var(--st-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Qué es un Sistema Operativo Empresarial?
              </h2>
              <p className="text-lg text-[var(--st-text-muted)]">
                Un sistema operativo personalizado para tu negocio
              </p>
            </motion.div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-[var(--st-text-muted)] mb-6">
                Así como tu computadora necesita Windows o macOS para funcionar, tu negocio necesita un 
                <strong className="text-foreground"> sistema operativo empresarial</strong> — una plataforma central que 
                conecte todas tus operaciones, datos y equipos en un solo lugar.
              </p>
              <p className="text-[var(--st-text-muted)] mb-6">
                En Search Operating Systems, construimos <strong className="text-foreground">sistemas operativos personalizados (custom OS)</strong> 
                específicamente para negocios en Los Cabos y Baja California Sur. No usamos plantillas genéricas — 
                cada línea de código está diseñada para tu flujo de trabajo único.
              </p>
              <p className="text-[var(--st-text-muted)]">
                Desde rentas de vehículos hasta bienes raíces, desde restaurantes hasta hoteles boutique, 
                tu sistema operativo personalizado te da <strong className="text-foreground">visibilidad completa y control total</strong> de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Características de tu Custom OS
            </h2>
            <p className="text-lg text-[var(--st-text-muted)]">
              Todo lo que necesitas para operar tu negocio de forma inteligente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[var(--st-primary)]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--st-text-muted)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--st-surface)]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beneficios de un Sistema Operativo Personalizado
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background border border-[var(--st-border)]"
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
      <RelatedServices locale="es" currentPage="/servicios/sistema-operativo-personalizado" />

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para tu Sistema Operativo?
            </h2>
            <p className="text-lg text-[var(--st-text-muted)] mb-8">
              Agenda una consulta gratuita con nuestros arquitectos de sistemas operativos en Los Cabos.
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
              © 2024 Search | Operating Systems. Custom OS en Los Cabos, BCS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

