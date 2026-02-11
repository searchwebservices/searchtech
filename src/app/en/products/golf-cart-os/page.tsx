"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Check, ArrowLeft, Calendar, Wrench, BarChart3, Clock, Users, Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { ProductWaitlistForm } from "@/components/product-waitlist-form";

export default function GolfCartOSPageEN() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--st-primary)]/5 to-transparent" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/20 mb-6">
                <Car className="w-4 h-4 text-[var(--st-primary)]" />
                <span className="text-sm font-medium text-[var(--st-primary)]">Vehicle Rentals</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Golf Cart <span className="st-gradient-text">OS</span>
              </h1>

              <p className="text-xl text-[var(--st-text-muted)] mb-8 max-w-2xl mx-auto">
                The complete operating system for golf cart, UTV, and recreational vehicle rental businesses in Los Cabos.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/en/schedule"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] !text-white dark:!text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule Demo
                </Link>
              </div>

              {/* Partner Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]">
                <span className="text-xs text-[var(--st-text-muted)]">Strategic Partner</span>
                <span className="font-semibold">ZYCAR</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Car,
                    title: "Fleet Management",
                    description: "Complete control of your vehicle inventory, locations, and real-time status.",
                  },
                  {
                    icon: Wrench,
                    title: "Predictive Maintenance",
                    description: "AI that predicts when each unit needs service before it fails.",
                  },
                  {
                    icon: Calendar,
                    title: "Automatic Reservations",
                    description: "24/7 booking system with WhatsApp and email confirmations.",
                  },
                  {
                    icon: BarChart3,
                    title: "Per-Unit Analytics",
                    description: "Know the exact profitability of each vehicle in your fleet.",
                  },
                  {
                    icon: Clock,
                    title: "Complete History",
                    description: "Full traceability: every rental, every service, every customer.",
                  },
                  {
                    icon: Users,
                    title: "Client Management",
                    description: "Integrated CRM with documents, contracts, and loyalty program.",
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

        {/* Results */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Real Results</h2>
              <p className="text-center text-[var(--st-text-muted)] mb-12">
                What our partners achieve with Golf Cart OS
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "0", label: "Double Bookings", suffix: "" },
                  { value: "-83%", label: "Admin Time", suffix: "" },
                  { value: "+28%", label: "Revenue", suffix: "" },
                  { value: "4.8★", label: "Client Satisfaction", suffix: "" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-xl bg-[var(--st-surface)] border border-[var(--st-border)]"
                  >
                    <div className="text-3xl font-bold text-[var(--st-primary)] mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-[var(--st-text-muted)]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-[var(--st-surface)]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Investment</h2>
              <p className="text-[var(--st-text-muted)] mb-8">
                Transparent pricing, no surprises
              </p>

              <div className="p-8 rounded-2xl bg-background border border-[var(--st-border)]">
                <div className="mb-6">
                  <div className="text-sm text-[var(--st-text-muted)] mb-2">Initial Construction</div>
                  <div className="text-4xl font-bold">$200,000+ <span className="text-lg font-normal text-[var(--st-text-muted)]">MXN</span></div>
                  <div className="text-sm text-[var(--st-text-muted)]">~$10,000 USD</div>
                </div>

                <div className="mb-8 pb-8 border-b border-[var(--st-border)]">
                  <div className="text-sm text-[var(--st-text-muted)] mb-2">Monthly Maintenance</div>
                  <div className="text-2xl font-bold">$10,000+ <span className="text-lg font-normal text-[var(--st-text-muted)]">MXN/month</span></div>
                  <div className="text-sm text-[var(--st-text-muted)]">~$500 USD</div>
                </div>

                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Complete custom system",
                    "AI integrated with your data",
                    "24/7 local support in Cabo",
                    "Team training included",
                    "100% code ownership",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-[var(--st-primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/en/schedule"
                  className="block w-full py-4 rounded-xl bg-[var(--st-primary)] !text-white dark:!text-black font-medium text-center hover:bg-[var(--st-primary-hover)] transition-colors"
                >
                  Schedule Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section className="py-20">
          <div className="container">
            <ProductWaitlistForm productName="Golf Cart OS" locale="en" />
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
              © 2024 Search | Operating Systems
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

