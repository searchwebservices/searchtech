"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { getBlogPostsByLocale } from "@/lib/blog-data";

export default function BlogIndexEN() {
  const posts = getBlogPostsByLocale("en");

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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--st-primary)]/10 via-transparent to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[var(--st-primary)]/10 border border-[var(--st-primary)]/30 text-[var(--st-primary)] text-sm font-medium mb-6">
              Blog · Operating Systems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Resources on{" "}
              <span className="bg-gradient-to-r from-[var(--st-primary)] to-[var(--st-primary-hover)] bg-clip-text text-transparent">
                Operating Systems
              </span>{" "}
              for Business
            </h1>
            <p className="text-xl text-[var(--st-text-muted)]">
              Learn how a custom operating system can transform your business in Los Cabos and Baja California Sur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/en/blog/${post.slug}`}>
                    <div className="p-6 md:p-8 rounded-2xl bg-[var(--st-surface)] border border-[var(--st-border)] hover:border-[var(--st-primary)]/50 transition-all hover:shadow-lg hover:shadow-[var(--st-primary)]/5">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[var(--st-primary)]/10 text-[var(--st-primary)] text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-[var(--st-text-muted)]">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--st-primary)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[var(--st-text-muted)] mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-[var(--st-primary)] font-medium">
                        Read article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--st-surface)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Your Operating System?
            </h2>
            <p className="text-[var(--st-text-muted)] mb-6">
              Schedule a free consultation with our operating system architects in Los Cabos.
            </p>
            <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] text-white dark:text-black">
              <Link href="/en/schedule">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
          </div>
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

