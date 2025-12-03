"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, HelpCircle, Lightbulb, FileText, ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { blogPosts } from "@/lib/blog-data";

type ContentType = "all" | "articles" | "faqs" | "guides";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Pricing & Costs
  { question: "¿Cuánto cuesta un sistema operativo personalizado?", answer: "La inversión mínima es $200,000 MXN para construcción inicial, más mantenimiento desde $10,000 MXN/mes. Escalamos según tus necesidades.", category: "Precios" },
  { question: "¿Hay costos ocultos?", answer: "No. Nuestro modelo es transparente: construcción inicial + mantenimiento mensual. Sin sorpresas, sin cargos adicionales por usuarios o funciones.", category: "Precios" },
  { question: "¿Qué incluye el mantenimiento mensual?", answer: "Soporte técnico 24/7, monitoreo de errores, corrección de bugs, actualizaciones de seguridad, y optimización continua del sistema.", category: "Precios" },
  
  // Technical
  { question: "¿Cuánto tiempo toma desarrollar un custom OS?", answer: "Un sistema base está listo en 8-12 semanas. Trabajamos de forma modular, entregando funcionalidades incrementalmente.", category: "Técnico" },
  { question: "¿Necesito conocimientos técnicos para usarlo?", answer: "No. Diseñamos interfaces intuitivas pensadas para usuarios de negocio, no para programadores.", category: "Técnico" },
  { question: "¿Quién es dueño del código?", answer: "Tú. El código del sistema es 100% tuyo. Puedes mantenerlo con cualquier desarrollador si decides cambiar de proveedor.", category: "Técnico" },
  { question: "¿Dónde se almacenan mis datos?", answer: "En servidores que tú controlas. Usamos infraestructura en la nube (AWS, Google Cloud) con ubicación en México o Estados Unidos según tu preferencia.", category: "Técnico" },
  
  // Process
  { question: "¿Cómo es el proceso de desarrollo?", answer: "1) Consulta inicial gratuita, 2) Propuesta y alcance, 3) Desarrollo iterativo con entregas semanales, 4) Lanzamiento y capacitación, 5) Soporte continuo.", category: "Proceso" },
  { question: "¿Puedo seguir operando durante la implementación?", answer: "Sí. El sistema nuevo se desarrolla en paralelo. Cuando está listo, hacemos una migración planificada que minimiza la interrupción.", category: "Proceso" },
  { question: "¿Qué pasa si no funciona como esperaba?", answer: "Trabajamos de forma iterativa con entregas semanales. Si algo no funciona, lo ajustamos inmediatamente. No avanzamos hasta que estés satisfecho.", category: "Proceso" },
  
  // Services
  { question: "¿Qué industrias atienden?", answer: "Rentas de vehículos, bienes raíces, hoteles boutique, restaurantes, tours y experiencias, retail, y cualquier negocio que necesite automatizar operaciones.", category: "Servicios" },
  { question: "¿Pueden integrar mi software existente?", answer: "Sí. Diseñamos sistemas que se integran con tus herramientas existentes — POS, plataformas de reservas, contabilidad, y más.", category: "Servicios" },
  { question: "¿Qué áreas de BCS cubren?", answer: "Toda Baja California Sur: Los Cabos, La Paz, Todos Santos, Los Barriles, East Cape, y cualquier comunidad de la península.", category: "Servicios" },
  
  // Support
  { question: "¿Qué tan rápido responden si hay un problema?", answer: "Problemas críticos: menos de 1 hora. Problemas menores: mismo día. Somos locales en Los Cabos — sin demoras de zona horaria.", category: "Soporte" },
  { question: "¿Puedo solicitar nuevas funciones después del lanzamiento?", answer: "Sí. El mantenimiento incluye pequeñas mejoras. Para funciones mayores, cotizamos de forma separada y transparente.", category: "Soporte" },
  { question: "¿Ofrecen capacitación?", answer: "Sí. Incluimos capacitación completa para tu equipo durante el lanzamiento, más documentación y videos de referencia.", category: "Soporte" },
];

const categories = ["Todos", "Precios", "Técnico", "Proceso", "Servicios", "Soporte"];
const articleCategories = ["Todos", "Sistemas Operativos", "Automatización", "Casos de Éxito", "FAQ"];

export default function RecursosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contentType, setContentType] = useState<ContentType>("all");
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("Todos");
  const [selectedArticleCategory, setSelectedArticleCategory] = useState("Todos");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const spanishArticles = blogPosts.filter(post => post.locale === "es");

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedFaqCategory === "Todos" || faq.category === selectedFaqCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedFaqCategory]);

  const filteredArticles = useMemo(() => {
    return spanishArticles.filter(article => {
      const matchesSearch = searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedArticleCategory === "Todos" || article.category === selectedArticleCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedArticleCategory, spanishArticles]);

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
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Centro de Recursos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--st-text-muted)] mb-8"
          >
            Artículos, guías y respuestas sobre sistemas operativos personalizados
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--st-text-muted)]" />
            <input
              type="text"
              placeholder="Buscar artículos, preguntas frecuentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] focus:border-[var(--st-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--st-primary)]/20 transition-all text-lg"
            />
          </motion.div>
        </div>

        {/* Content Type Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mb-12"
        >
          {[
            { type: "all" as ContentType, label: "Todo", icon: Lightbulb },
            { type: "articles" as ContentType, label: "Artículos", icon: BookOpen },
            { type: "faqs" as ContentType, label: "Preguntas Frecuentes", icon: HelpCircle },
          ].map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setContentType(type)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                contentType === type
                  ? "bg-[var(--st-primary)] text-white"
                  : "bg-[var(--st-surface)] text-[var(--st-text-muted)] hover:bg-[var(--st-surface-elevated)]"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Articles Section */}
          <AnimatePresence mode="wait">
            {(contentType === "all" || contentType === "articles") && (
              <motion.section
                key="articles"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-16"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-[var(--st-primary)]" />
                    Artículos
                  </h2>
                  {contentType === "all" && (
                    <button 
                      onClick={() => setContentType("articles")}
                      className="text-sm text-[var(--st-primary)] hover:underline flex items-center gap-1"
                    >
                      Ver todos <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Article Category Filter */}
                {contentType === "articles" && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {articleCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedArticleCategory(cat)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedArticleCategory === cat
                            ? "bg-[var(--st-primary)]/10 text-[var(--st-primary)] border border-[var(--st-primary)]/30"
                            : "bg-[var(--st-surface)] text-[var(--st-text-muted)] hover:bg-[var(--st-surface-elevated)]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  {(contentType === "all" ? filteredArticles.slice(0, 4) : filteredArticles).map((article, index) => (
                    <motion.article
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={`/blog/${article.slug}`}
                        className="block p-6 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 hover:shadow-lg hover:shadow-[var(--st-primary)]/5 transition-all group"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-0.5 rounded-full bg-[var(--st-primary)]/10 text-[var(--st-primary)] text-xs font-medium">
                            {article.category}
                          </span>
                          <span className="text-xs text-[var(--st-text-muted)] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2 group-hover:text-[var(--st-primary)] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[var(--st-text-muted)] line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex items-center text-sm text-[var(--st-primary)] font-medium">
                          Leer artículo <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <p className="text-center text-[var(--st-text-muted)] py-8">
                    No se encontraron artículos que coincidan con tu búsqueda.
                  </p>
                )}
              </motion.section>
            )}
          </AnimatePresence>

          {/* FAQs Section */}
          <AnimatePresence mode="wait">
            {(contentType === "all" || contentType === "faqs") && (
              <motion.section
                key="faqs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-[var(--st-primary)]" />
                    Preguntas Frecuentes
                  </h2>
                  {contentType === "all" && (
                    <button 
                      onClick={() => setContentType("faqs")}
                      className="text-sm text-[var(--st-primary)] hover:underline flex items-center gap-1"
                    >
                      Ver todas <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* FAQ Category Filter */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedFaqCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all flex items-center gap-1 ${
                        selectedFaqCategory === cat
                          ? "bg-[var(--st-primary)]/10 text-[var(--st-primary)] border border-[var(--st-primary)]/30"
                          : "bg-[var(--st-surface)] text-[var(--st-text-muted)] hover:bg-[var(--st-surface-elevated)]"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="space-y-3">
                  {(contentType === "all" ? filteredFaqs.slice(0, 5) : filteredFaqs).map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="rounded-xl border border-[var(--st-border)] overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full p-5 flex items-start justify-between text-left bg-[var(--st-surface)] hover:bg-[var(--st-surface-elevated)] transition-colors"
                      >
                        <div className="flex-1 pr-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs text-[var(--st-text-muted)] px-2 py-0.5 rounded-full bg-background">
                              {faq.category}
                            </span>
                          </div>
                          <span className="font-medium">{faq.question}</span>
                        </div>
                        <ChevronRight 
                          className={`w-5 h-5 text-[var(--st-primary)] flex-shrink-0 transition-transform ${
                            expandedFaq === index ? "rotate-90" : ""
                          }`} 
                        />
                      </button>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-0 text-[var(--st-text-muted)] leading-relaxed">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {filteredFaqs.length === 0 && (
                  <p className="text-center text-[var(--st-text-muted)] py-8">
                    No se encontraron preguntas que coincidan con tu búsqueda.
                  </p>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-center mt-16 p-8 rounded-2xl bg-gradient-to-br from-[var(--st-primary)]/10 to-[var(--st-primary)]/5 border border-[var(--st-primary)]/20"
        >
          <h3 className="text-xl font-bold mb-2">¿No encontraste lo que buscabas?</h3>
          <p className="text-[var(--st-text-muted)] mb-6">
            Agenda una consulta gratuita y resolvemos todas tus dudas en persona.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] text-white dark:text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
          >
            Agendar Consulta Gratuita
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
              © 2024 Search | Operating Systems. Los Cabos, BCS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

