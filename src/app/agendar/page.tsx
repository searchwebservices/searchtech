"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Mail, Phone, MapPin, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export default function AgendarPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30-minute-tech-strategy-session" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--st-border)]">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Search className="w-6 h-6 text-[var(--st-primary)]" strokeWidth={1.5} />
              <span
                className="text-[var(--st-text-primary)] text-lg tracking-[0.2em]"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 300 }}
              >
                SEARCH
              </span>
            </Link>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-[var(--st-text-muted)] hover:text-[var(--st-text-primary)] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Agenda tu{" "}
              <span className="st-gradient-text">Consulta Gratuita</span>
            </h1>
            <p className="text-lg text-[var(--st-text-secondary)] max-w-2xl mx-auto">
              Reserve 30 minutos con nuestro equipo para discutir cómo podemos
              transformar la operación de tu negocio en Los Cabos.
            </p>
          </div>

          {/* Calendar widget */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-[var(--st-surface)] rounded-2xl border border-[var(--st-border)] overflow-hidden">
              <div className="h-[650px] md:h-[700px]">
                <Cal
                  namespace="30-minute-tech-strategy-session"
                  calLink="bay-search/30-minute-tech-strategy-session"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{ layout: "month_view" }}
                />
              </div>
            </div>
          </div>

          {/* Contact info section */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                ¿Prefiere contactarnos directamente?
              </h2>
              <p className="text-[var(--st-text-muted)]">
                Estamos disponibles para atenderle por correo o teléfono.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:info@searchwebservices.tech"
                className="group bg-[var(--st-surface)] rounded-xl p-6 border border-[var(--st-border)] hover:border-[var(--st-primary)]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center group-hover:bg-[var(--st-primary)]/20 transition-colors">
                    <Mail className="w-6 h-6 text-[var(--st-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--st-text-muted)] uppercase tracking-wider mb-1">
                      Correo Electrónico
                    </div>
                    <div className="font-medium group-hover:text-[var(--st-primary)] transition-colors">
                      info@searchwebservices.tech
                    </div>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+526242644012"
                className="group bg-[var(--st-surface)] rounded-xl p-6 border border-[var(--st-border)] hover:border-[var(--st-primary)]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--st-primary)]/10 flex items-center justify-center group-hover:bg-[var(--st-primary)]/20 transition-colors">
                    <Phone className="w-6 h-6 text-[var(--st-primary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--st-text-muted)] uppercase tracking-wider mb-1">
                      Teléfono
                    </div>
                    <div className="font-medium group-hover:text-[var(--st-primary)] transition-colors">
                      +52 624 264 4012
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Location note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-[var(--st-text-muted)]">
              <MapPin className="w-4 h-4" />
              <span>Los Cabos, Baja California Sur, México</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--st-border)] py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Search className="w-5 h-5 text-[var(--st-primary)]" strokeWidth={1.5} />
              <span
                className="text-sm tracking-[0.2em]"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 300 }}
              >
                SEARCH
              </span>
            </div>
            <div className="text-sm text-[var(--st-text-muted)]">
              © {new Date().getFullYear()} Search | Operating Systems. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
