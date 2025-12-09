"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, HelpCircle, Lightbulb, ChevronRight, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { blogPosts } from "@/lib/blog-data";

type ContentType = "all" | "articles" | "faqs";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Pricing & Costs
  { question: "How much does a custom operating system cost?", answer: "Minimum investment is $200,000 MXN (~$10,000 USD) for initial construction, plus maintenance from $10,000 MXN/month (~$500 USD). We scale based on your needs.", category: "Pricing" },
  { question: "Are there hidden costs?", answer: "No. Our model is transparent: initial construction + monthly maintenance. No surprises, no additional charges for users or features.", category: "Pricing" },
  { question: "What's included in monthly maintenance?", answer: "24/7 technical support, error monitoring, bug fixes, security updates, and continuous system optimization.", category: "Pricing" },
  
  // Technical
  { question: "How long does it take to develop a custom OS?", answer: "A base system is ready in 8-12 weeks. We work modularly, delivering features incrementally.", category: "Technical" },
  { question: "Do I need technical knowledge to use it?", answer: "No. We design intuitive interfaces meant for business users, not programmers.", category: "Technical" },
  { question: "Who owns the code?", answer: "You do. The system code is 100% yours. You can maintain it with any developer if you decide to switch providers.", category: "Technical" },
  { question: "Where is my data stored?", answer: "On servers you control. We use cloud infrastructure (AWS, Google Cloud) with location in Mexico or United States per your preference.", category: "Technical" },
  
  // Process
  { question: "What's the development process like?", answer: "1) Free initial consultation, 2) Proposal and scope, 3) Iterative development with weekly deliveries, 4) Launch and training, 5) Ongoing support.", category: "Process" },
  { question: "Can I keep operating during implementation?", answer: "Yes. The new system develops in parallel. When ready, we do a planned migration that minimizes disruption.", category: "Process" },
  { question: "What if it doesn't work as expected?", answer: "We work iteratively with weekly deliveries. If something doesn't work, we adjust immediately. We don't move forward until you're satisfied.", category: "Process" },
  
  // Services
  { question: "What industries do you serve?", answer: "Vehicle rentals, real estate, boutique hotels, restaurants, tours and experiences, retail, and any business that needs to automate operations.", category: "Services" },
  { question: "Can you integrate my existing software?", answer: "Yes. We design systems that integrate with your existing tools — POS, booking platforms, accounting software, and more.", category: "Services" },
  { question: "What areas of BCS do you cover?", answer: "All of Baja California Sur: Los Cabos, La Paz, Todos Santos, Los Barriles, East Cape, and any community on the peninsula.", category: "Services" },
  
  // Support
  { question: "How fast do you respond if there's a problem?", answer: "Critical problems: less than 1 hour. Minor issues: same day. We're local in Los Cabos — no timezone delays.", category: "Support" },
  { question: "Can I request new features after launch?", answer: "Yes. Maintenance includes small improvements. For major features, we quote separately and transparently.", category: "Support" },
  { question: "Do you provide training?", answer: "Yes. We include complete training for your team during launch, plus documentation and reference videos.", category: "Support" },
];

const categories = ["All", "Pricing", "Technical", "Process", "Services", "Support"];
const articleCategories = ["All", "Operating Systems", "Automation", "Case Studies", "FAQ"];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [contentType, setContentType] = useState<ContentType>("all");
  const [selectedFaqCategory, setSelectedFaqCategory] = useState("All");
  const [selectedArticleCategory, setSelectedArticleCategory] = useState("All");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const englishArticles = blogPosts.filter(post => post.locale === "en");

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = searchQuery === "" || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedFaqCategory === "All" || faq.category === selectedFaqCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedFaqCategory]);

  const filteredArticles = useMemo(() => {
    return englishArticles.filter(article => {
      const matchesSearch = searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedArticleCategory === "All" || article.category === selectedArticleCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedArticleCategory, englishArticles]);

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
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Resource Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[var(--st-text-muted)] mb-8"
          >
            Articles, guides, and answers about custom operating systems
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
              placeholder="Search articles, FAQs..."
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
            { type: "all" as ContentType, label: "All", icon: Lightbulb },
            { type: "articles" as ContentType, label: "Articles", icon: BookOpen },
            { type: "faqs" as ContentType, label: "FAQs", icon: HelpCircle },
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
                    Articles
                  </h2>
                  {contentType === "all" && (
                    <button 
                      onClick={() => setContentType("articles")}
                      className="text-sm text-[var(--st-primary)] hover:underline flex items-center gap-1"
                    >
                      View all <ChevronRight className="w-4 h-4" />
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
                        href={`/en/blog/${article.slug}`}
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
                          Read article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <p className="text-center text-[var(--st-text-muted)] py-8">
                    No articles found matching your search.
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
                    Frequently Asked Questions
                  </h2>
                  {contentType === "all" && (
                    <button 
                      onClick={() => setContentType("faqs")}
                      className="text-sm text-[var(--st-primary)] hover:underline flex items-center gap-1"
                    >
                      View all <ChevronRight className="w-4 h-4" />
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
                    No FAQs found matching your search.
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
          <h3 className="text-xl font-bold mb-2">Didn't find what you're looking for?</h3>
          <p className="text-[var(--st-text-muted)] mb-6">
            Schedule a free consultation and we'll answer all your questions in person.
          </p>
          <Link
            href="https://searchlabs.netlify.app/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--st-primary)] !text-white dark:!text-black font-medium hover:bg-[var(--st-primary-hover)] transition-colors"
          >
            Schedule Free Consultation
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
              © 2024 Search | Operating Systems. Los Cabos, BCS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

