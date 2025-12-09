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
    question: "What areas of Baja California Sur do you cover?",
    answer: "We serve all of Baja California Sur: Los Cabos (Cabo San Lucas and San José del Cabo), La Paz, Todos Santos, Los Barriles, East Cape, and any community on the peninsula. We meet with you wherever you are.",
  },
  {
    question: "Why do I need local business software in BCS?",
    answer: "Remote agencies don't understand BCS tourist seasons, peninsula logistics, or international client expectations. A local team designs solutions that adapt to the reality of doing business in Baja California Sur.",
  },
  {
    question: "What types of businesses do you serve in BCS?",
    answer: "We serve vehicle rentals (golf carts, UTVs, yachts), real estate, boutique hotels, restaurants, tours and experiences, retail, and any business that needs to automate operations and have real-time visibility.",
  },
  {
    question: "Can you integrate my existing software?",
    answer: "Yes, we design operating systems that integrate with your existing tools — point of sale systems, booking platforms, accounting tools, and more. Your custom OS becomes the center of your entire operation.",
  },
  {
    question: "How much does business software for BCS cost?",
    answer: "Minimum investment is $200,000 MXN for initial construction, plus maintenance from $10,000 MXN/month. We start small to understand your business and scale modularly. No surprises — transparent pricing from day one.",
  },
  {
    question: "Do you offer support in English and Spanish?",
    answer: "Yes, we're fully bilingual. Many of our clients have teams that speak English or Spanish, and we adapt to your communication needs.",
  },
];

const industries = [
  {
    icon: Ship,
    title: "Vehicle Rentals",
    description: "Golf carts, UTVs, yachts and boats. Reservation systems, inventory and maintenance.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property management, client CRM and automated real estate marketing.",
  },
  {
    icon: Building2,
    title: "Boutique Hotels",
    description: "Reservation management, housekeeping and personalized guest experiences.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Inventory, suppliers, reservations and per-dish performance analytics.",
  },
  {
    icon: Palmtree,
    title: "Tours & Experiences",
    description: "Online booking, guide management and automated logistics coordination.",
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
  { value: "100%", label: "Proprietary Code" },
  { value: "24/7", label: "Technical Support" },
  { value: "Local", label: "Team in BCS" },
];

export default function BusinessSoftwareCabo() {
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
              <Button asChild size="sm" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] !text-white dark:!text-black">
                <Link href="https://searchlabs.netlify.app/get-started">
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 text-[var(--st-primary)] text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Business Software · Los Cabos & Baja
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Business Software for{" "}
              <span className="bg-gradient-to-r from-[var(--st-primary)] to-[var(--st-primary-hover)] bg-clip-text text-transparent">
                Los Cabos & Baja California Sur
              </span>
            </h1>
            <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
              Custom operating systems for businesses in Los Cabos, La Paz, Todos Santos and all of BCS. 
              Local software architects who understand your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 !text-white dark:!text-black">
                <Link href="https://searchlabs.netlify.app/get-started">
                  Free In-Person Consultation
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
                We Understand the BCS Market
              </h2>
              <p className="text-lg text-[var(--st-text-muted)]">
                We're not a remote agency — we're local software architects
              </p>
            </motion.div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-[var(--st-text-muted)] mb-6">
                Baja California Sur has a unique business ecosystem: luxury tourism, high-value real estate, 
                recreational vehicle rentals, and hospitality services that require 
                <strong className="text-foreground"> specialized technology solutions</strong>.
              </p>
              <p className="text-[var(--st-text-muted)] mb-6">
                Remote software agencies don't understand tourist seasons, peninsula logistics, 
                or the expectations of international clients visiting the region. We do.
              </p>
              <p className="text-[var(--st-text-muted)]">
                We build <strong className="text-foreground">custom operating systems</strong> that adapt 
                to the reality of doing business in Los Cabos, La Paz, Todos Santos, and all of Baja California Sur.
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
              Industries We Serve in BCS
            </h2>
            <p className="text-lg text-[var(--st-text-muted)]">
              Custom operating systems for every sector
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
                Why Choose a Local Team?
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "In-person meetings at your office",
                "We understand BCS seasons",
                "Technical support without timezone delays",
                "We know local vendors",
                "We speak your language (Spanish & English)",
                "Part of the business community",
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
      <FAQSchema faqs={faqs} locale="en" />

      {/* Related Services */}
      <RelatedServices locale="en" currentPage="/en/services/business-software-cabo" />

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
              Schedule an In-Person Meeting
            </h2>
            <p className="text-lg text-[var(--st-text-muted)] mb-8">
              We'll meet with you in Los Cabos, La Paz, or any location in BCS to understand your business.
            </p>
            <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-lg px-8 !text-white dark:!text-black">
              <Link href="https://searchlabs.netlify.app/get-started">
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
              © 2024 Search | Operating Systems. Custom OS in Los Cabos & Baja California Sur.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

