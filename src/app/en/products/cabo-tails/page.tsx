"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Users, Sparkles, Globe, PawPrint, Search, ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ProductWaitlistForm } from "@/components/product-waitlist-form";

export default function CaboTailsPage() {
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

      <main>
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Github className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">Open Source</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cabo <span className="text-green-500">Tails</span>
              </h1>

              <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
                Open source operating system for animal shelters: AI-powered adoption matching and volunteer coordination.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="https://github.com/searchwebservices/cabo-tails"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-surface)] border border-[var(--st-border)] font-medium hover:border-[var(--st-primary)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </Link>
                <Link
                  href="/en/demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
                >
                  <Heart className="w-4 h-4" />
                  Contribute
                </Link>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]">
                <Heart className="w-4 h-4 text-pink-500" />
                <span className="text-sm">Made with love for shelters in Mexico 🇲🇽</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-[var(--st-text-muted)] mb-8">
                To give every animal shelter, regardless of size or budget, access to world-class technology for finding loving homes for their animals.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "100%", label: "Free" },
                  { value: "∞", label: "Shelters" },
                  { value: "🌎", label: "Global" },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background border border-[var(--st-border)]">
                    <div className="text-2xl font-bold text-green-500 mb-1">{stat.value}</div>
                    <div className="text-sm text-[var(--st-text-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Sparkles,
                    title: "AI Adoption Matching",
                    description: "Algorithm that connects families with pets based on successful adoption history.",
                  },
                  {
                    icon: Users,
                    title: "Volunteer App",
                    description: "Coordinate shifts, tasks, and communication with your volunteer network.",
                  },
                  {
                    icon: PawPrint,
                    title: "Animal Management",
                    description: "Complete profiles with medical history, behavior, and photos.",
                  },
                  {
                    icon: Globe,
                    title: "Public Portal",
                    description: "Ready-made website for potential adopters to meet available animals.",
                  },
                  {
                    icon: Calendar,
                    title: "Appointment Scheduler",
                    description: "Scheduling system for visits and adoption interviews.",
                  },
                  {
                    icon: Heart,
                    title: "Post-Adoption Tracking",
                    description: "Stay in contact with adoptive families to ensure animal welfare.",
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
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-500" />
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

        {/* Call to Action */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Are You a Shelter?</h2>
              <p className="text-[var(--st-text-muted)] mb-8">
                Join our list to be among the first to use Cabo Tails. We're also looking for developers who want to contribute to the project.
              </p>
              <ProductWaitlistForm productName="Cabo Tails" locale="en" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/en" className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo tracking-widest text-sm">SEARCH</span>
            </Link>
            <p className="text-sm text-[var(--st-text-muted)]">
              © 2024 Search | Operating Systems · Cabo Tails is Open Source
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

