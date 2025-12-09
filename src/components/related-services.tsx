"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, MapPin, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

interface RelatedServicesProps {
  locale?: "es" | "en";
  currentPage?: string;
}

const services = {
  es: [
    {
      href: "/servicios/sistema-operativo-personalizado",
      icon: Cpu,
      title: "Sistema Operativo Personalizado",
      description: "Custom OS diseñado para tu negocio en Los Cabos",
    },
    {
      href: "/servicios/software-empresarial-baja-california-sur",
      icon: MapPin,
      title: "Software Empresarial BCS",
      description: "Soluciones para toda Baja California Sur",
    },
    {
      href: "/blog",
      icon: BookOpen,
      title: "Blog: Sistemas Operativos",
      description: "Recursos y guías sobre custom OS",
    },
    {
      href: "https://searchlabs.netlify.app/get-started",
      icon: Calendar,
      title: "Agendar Consulta",
      description: "Consulta gratuita en persona en Cabo",
    },
  ],
  en: [
    {
      href: "/en/services/custom-operating-system",
      icon: Cpu,
      title: "Custom Operating System",
      description: "Custom OS designed for your Los Cabos business",
    },
    {
      href: "/en/services/business-software-cabo",
      icon: MapPin,
      title: "Business Software Cabo",
      description: "Solutions for all of Baja California Sur",
    },
    {
      href: "/en/blog",
      icon: BookOpen,
      title: "Blog: Operating Systems",
      description: "Resources and guides on custom OS",
    },
    {
      href: "https://searchlabs.netlify.app/get-started",
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Free in-person consultation in Cabo",
    },
  ],
};

export function RelatedServices({ locale = "es", currentPage }: RelatedServicesProps) {
  const items = services[locale].filter((s) => s.href !== currentPage);
  const title = locale === "es" ? "Recursos Relacionados" : "Related Resources";

  return (
    <section className="py-16 bg-[var(--st-surface)]">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          {title}
        </motion.h3>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="block p-5 rounded-xl bg-background border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--st-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[var(--st-primary)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 group-hover:text-[var(--st-primary)] transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-[var(--st-text-muted)]">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--st-text-muted)] group-hover:text-[var(--st-primary)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Blog-specific related posts component
interface RelatedBlogPostsProps {
  locale?: "es" | "en";
  currentSlug?: string;
}

export function RelatedBlogPosts({ locale = "es", currentSlug }: RelatedBlogPostsProps) {
  const title = locale === "es" ? "Artículos Relacionados" : "Related Articles";
  const viewAll = locale === "es" ? "Ver todos los artículos" : "View all articles";
  const blogHref = locale === "es" ? "/blog" : "/en/blog";

  return (
    <section className="py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <Link
            href={blogHref}
            className="inline-flex items-center gap-2 text-[var(--st-primary)] hover:underline"
          >
            {viewAll}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

