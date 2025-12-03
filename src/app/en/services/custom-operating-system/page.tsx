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
    question: "What is a custom operating system for business?",
    answer: "A custom operating system (custom OS) is a software platform designed specifically for your business. Unlike generic software, a custom OS connects all your operations — sales, inventory, clients, finances — into one integrated system that automates your unique processes and gives you complete real-time visibility into your business.",
  },
  {
    question: "How much does a custom operating system cost in Los Cabos?",
    answer: "The minimum investment for a custom operating system is $200,000 MXN for initial construction, plus maintenance starting at $10,000 MXN/month. We prefer to start with smaller, fundamental projects to understand your business, then scale modularly based on your needs.",
  },
  {
    question: "How long does it take to develop a custom OS?",
    answer: "Development time varies by complexity, but typically a base operating system is ready in 8-12 weeks. We work modularly, delivering features incrementally so you can start seeing value from the first weeks.",
  },
  {
    question: "Why choose a local team in Los Cabos?",
    answer: "A local team understands the BCS market — tourist seasons, peninsula logistics, and international client expectations. Plus, we offer in-person meetings, support without timezone delays, and we're part of the local business community.",
  },
  {
    question: "What industries benefit from a custom operating system?",
    answer: "Any business that handles data, clients, and inventory benefits: vehicle rentals (golf carts, UTVs, yachts), real estate, boutique hotels, restaurants, tours and experiences, and more. If you're running on Excel and WhatsApp, a custom OS will transform your efficiency.",
  },
  {
    question: "Do you include technical support after launch?",
    answer: "Yes, the monthly maintenance fee includes 24/7 technical support, error monitoring, security updates, and continuous system optimization. We're just a call away here in Los Cabos.",
  },
];

const features = [
  {
    icon: Cpu,
    title: "Custom Operating System",
    description: "An OS designed specifically for your Los Cabos business workflows.",
  },
  {
    icon: Database,
    title: "Your Data, Your Control",
    description: "Proprietary database with full access to your business information.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Automated processes that eliminate repetitive tasks and human errors.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level data protection from day one.",
  },
  {
    icon: Users,
    title: "24/7 Local Support",
    description: "Technical team in Los Cabos available when you need them.",
  },
];

const benefits = [
  "Eliminate Excel and WhatsApp chaos",
  "Real-time visibility into your business",
  "Integration with existing tools",
  "Scalable as you grow",
  "Proprietary code, not templates",
  "In-person meetings in Cabo",
];

export default function CustomOperatingSystem() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-[var(--st-border)]">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/en" className="flex items-center gap-2.5">
              <Search className="w-6 h-6 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo text-lg tracking-widest text-foreground">SEARCH</span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageToggle locale="en" />
              <Button asChild size="sm" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-white dark:text-black">
                <Link href="/en/schedule">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
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
              Custom Operating System · Los Cabos, BCS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Business Deserves a{" "}
              <span className="bg-gradient-to-r from-[var(--st-primary)] to-[var(--st-primary-hover)] bg-clip-text text-transparent">
                Custom Operating System
              </span>
            </h1>
            <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
              We design and build custom operating systems for businesses in Los Cabos and Baja California Sur. 
              A custom OS that unifies all your operations into one intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 text-white dark:text-black">
                <Link href="/en/schedule">
                  Request Free Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-[var(--st-border)]">
                <Link href="/en#architecture">
                  View Pricing
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
                What is a Business Operating System?
              </h2>
              <p className="text-lg text-[var(--st-text-muted)]">
                A custom operating system for your business
              </p>
            </motion.div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-[var(--st-text-muted)] mb-6">
                Just as your computer needs Windows or macOS to function, your business needs a 
                <strong className="text-foreground"> business operating system</strong> — a central platform that 
                connects all your operations, data, and teams in one place.
              </p>
              <p className="text-[var(--st-text-muted)] mb-6">
                At Search Operating Systems, we build <strong className="text-foreground">custom operating systems (custom OS)</strong> 
                specifically for businesses in Los Cabos and Baja California Sur. We don't use generic templates — 
                every line of code is designed for your unique workflow.
              </p>
              <p className="text-[var(--st-text-muted)]">
                From vehicle rentals to real estate, from restaurants to boutique hotels, 
                your custom operating system gives you <strong className="text-foreground">complete visibility and total control</strong> of your business.
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
              Features of Your Custom OS
            </h2>
            <p className="text-lg text-[var(--st-text-muted)]">
              Everything you need to run your business intelligently
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
                Benefits of a Custom Operating System
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
      <FAQSchema faqs={faqs} locale="en" />

      {/* Related Services */}
      <RelatedServices locale="en" currentPage="/en/services/custom-operating-system" />

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
              Ready for Your Operating System?
            </h2>
            <p className="text-lg text-[var(--st-text-muted)] mb-8">
              Schedule a free consultation with our operating system architects in Los Cabos.
            </p>
            <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 text-white dark:text-black">
              <Link href="/en/schedule">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--st-border)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/en" className="flex items-center gap-2">
              <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span className="font-logo tracking-widest text-sm">SEARCH</span>
            </Link>
            <p className="text-sm text-[var(--st-text-muted)]">
              © 2024 Search | Operating Systems. Custom OS in Los Cabos, BCS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

