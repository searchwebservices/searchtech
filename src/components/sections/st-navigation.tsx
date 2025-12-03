"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

const navLinksEs = [
  { href: "#problema", label: "El Problema" },
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#casos", label: "Casos de Éxito" },
  { href: "#transparencia", label: "Precios" },
  { href: "/recursos", label: "FAQ", isPage: true },
];

const navLinksEn = [
  { href: "#problem", label: "The Problem" },
  { href: "#architecture", label: "Architecture" },
  { href: "#cases", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "/en/resources", label: "FAQ", isPage: true },
];

interface STNavigationProps {
  locale?: "es" | "en";
}

const STNavigation = ({ locale = "es" }: STNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = locale === "en" ? navLinksEn : navLinksEs;
  const ctaText = locale === "en" ? "Schedule" : "Agendar";
  const ctaTextMobile = locale === "en" ? "Schedule Meeting" : "Agendar Reunión";
  const homePath = locale === "en" ? "/en" : "/";
  const agendarPath = locale === "en" ? "/en/schedule" : "/agendar";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--st-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href={homePath} className="flex items-center gap-2.5">
              <Search className="w-6 h-6 text-[var(--st-primary)]" strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
              <span
                className="text-[var(--st-text-primary)] text-lg tracking-[0.2em]"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 300 }}
              >
                SEARCH
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--st-text-muted)] hover:text-[var(--st-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-[var(--st-text-muted)] hover:text-[var(--st-text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>

            {/* CTA + Language Toggle + Theme Toggle + Mobile menu button */}
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              
              <Button
                asChild
                size="sm"
                className="hidden md:inline-flex h-10 px-5 text-sm font-medium bg-[var(--st-primary)] hover:bg-[var(--st-primary-light)] rounded-full transition-all duration-300"
              >
                <Link href={agendarPath} className="!text-white dark:!text-black flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {ctaText}
                </Link>
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--st-text-primary)]"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--background)]/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-20 left-0 right-0 bg-[var(--st-surface)] border-b border-[var(--st-border)] p-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  link.isPage ? (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg text-[var(--st-text-secondary)] hover:text-[var(--st-primary)] transition-colors py-2"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg text-[var(--st-text-secondary)] hover:text-[var(--st-primary)] transition-colors py-2"
                    >
                      {link.label}
                    </motion.a>
                  )
                ))}
                <div className="pt-4 border-t border-[var(--st-border)]">
                  <Button
                    asChild
                    className="w-full h-12 text-base font-medium bg-[var(--st-primary)] hover:bg-[var(--st-primary-light)] rounded-full"
                  >
                    <Link href={agendarPath} onClick={() => setIsMobileMenuOpen(false)} className="!text-white dark:!text-black flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      {ctaTextMobile}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default STNavigation;
