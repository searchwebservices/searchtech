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
    href: "/en/products/golf-cart-os",
    icon: Car,
    category: "Vehicle Rentals",
    title: "Golf Cart OS",
    description: "Complete operating system for golf cart, UTV, and recreational vehicle rental businesses.",
    partners: ["ZYCAR"],
    status: "available",
  },
  {
    id: "cabo-concierge",
    href: "/en/products/cabo-concierge",
    icon: Palmtree,
    category: "Hospitality & Events",
    title: "Cabo Concierge AI",
    description: "Intelligent concierge platform for wedding planning, events, and experiences.",
    partners: ["Unique Cabo Weddings", "Borja Ponce Eventos", "Momentum Cabo", "ExperienceLab"],
    status: "coming-soon",
  },
  {
    id: "batchcraft-os",
    href: "/en/products/batchcraft-os",
    icon: FlaskConical,
    category: "Manufacturing & Quality",
    title: "BatchCraft OS",
    description: "Traceability and quality control system for batch production.",
    partners: ["Golden Sands", "Simbiotica MX"],
    status: "available",
  },
  {
    id: "cabo-tails",
    href: "https://cabotails.netlify.app/",
    icon: Heart,
    category: "Open Source",
    title: "Cabo Tails",
    description: "Open source OS for animal shelters: AI-powered adoption matching.",
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
    description: "Transform property managers into full PropTech companies.",
    partners: ["ExperienceLab.tech"],
    status: "coming-soon",
    external: true,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[var(--st-border)]">
        <div className="container flex items-center justify-between h-16">
          <Link href="/en" className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
            <span className="font-logo tracking-widest text-sm">SEARCH</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/en" className="text-sm text-[var(--st-text-muted)] hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Home
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
            Our <span className="st-gradient-text">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--st-text-muted)]"
          >
            Intelligent operating systems designed for specific industries in Los Cabos and Baja California Sur.
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
                          Coming Soon
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
                          Partners
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
                      Visit site <ExternalLink className="w-4 h-4 ml-1" />
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
                          Coming Soon
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
                          Partners
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
                      Learn more <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
          <h3 className="text-xl font-bold mb-2">Need something different?</h3>
          <p className="text-[var(--st-text-muted)] mb-6">
            We also build 100% custom operating systems for your unique business.
          </p>
          <Link
            href="/en/schedule"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] text-white dark:text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
          >
            Schedule Consultation
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)] mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/en" className="flex items-center gap-2">
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

