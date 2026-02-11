"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { getBlogPostBySlug } from "@/lib/blog-data";
import ReactMarkdown from "react-markdown";

export default function BlogPostEN() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug, "en");

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link href="/en/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

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
                <Link href="/en/schedule">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/en/blog"
              className="inline-flex items-center text-[var(--st-text-muted)] hover:text-[var(--st-primary)] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--st-primary)]/10 text-[var(--st-primary)] text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-[var(--st-text-muted)]">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-[var(--st-text-muted)]">
                {post.excerpt}
              </p>
            </motion.header>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-[var(--st-text-muted)] prose-p:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-[var(--st-text-muted)]
                prose-li:my-2
                prose-a:text-[var(--st-primary)] prose-a:no-underline hover:prose-a:underline"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </motion.div>
          </div>
        </div>
      </article>

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
            <Button asChild size="lg" className="bg-[var(--st-primary)] hover:bg-[var(--st-primary-hover)] !text-white dark:!text-black">
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

