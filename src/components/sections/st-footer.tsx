"use client";

import React from "react";
import { Mail, Phone, MapPin, ExternalLink, Search } from "lucide-react";

const content = {
  es: {
    tagline: "Diseñamos, construimos y mantenemos sistemas operativos inteligentes para negocios en Los Cabos y Baja California Sur.",
    location: "Los Cabos, BCS, México",
    servicesTitle: "Servicios",
    services: [
      "Sistemas Operativos Custom",
      "Agentic AI Integration",
      "Automatización de Flujos",
      "Apps Móviles & Web",
      "Consultoría Técnica",
    ],
    contactTitle: "Contacto",
    phoneNote: "Teléfonos disponibles en consulta",
    copyright: "Todos los derechos reservados.",
    terms: "Términos",
    privacy: "Privacidad",
  },
  en: {
    tagline: "We design, build, and maintain intelligent operating systems for businesses in Los Cabos and Baja California Sur.",
    location: "Los Cabos, BCS, Mexico",
    servicesTitle: "Services",
    services: [
      "Custom Operating Systems",
      "Agentic AI Integration",
      "Workflow Automation",
      "Mobile & Web Apps",
      "Technical Consulting",
    ],
    contactTitle: "Contact",
    phoneNote: "Phone numbers available upon request",
    copyright: "All rights reserved.",
    terms: "Terms",
    privacy: "Privacy",
  },
};

interface STFooterProps {
  locale?: "es" | "en";
}

const STFooter = ({ locale = "es" }: STFooterProps) => {
  const currentYear = new Date().getFullYear();
  const t = content[locale];

  return (
    <footer className="relative bg-[var(--st-surface-elevated)] border-t border-[var(--st-border)]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="mb-6">
              <div className="flex items-center gap-2.5 mb-4">
                <Search className="w-7 h-7 text-[var(--st-primary)]" strokeWidth={1.5} />
                <span
                  className="text-[var(--st-text-primary)] text-xl tracking-[0.2em]"
                  style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 300 }}
                >
                  SEARCH
                </span>
              </div>
            </div>

            <p className="text-[var(--st-text-muted)] text-sm leading-relaxed mb-6 max-w-sm">
              {t.tagline}
            </p>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--st-primary)]" />
              <span className="text-sm text-[var(--st-text-muted)]">{t.location}</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {t.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[var(--st-text-muted)] hover:text-[var(--st-primary)] transition-colors cursor-default">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              {t.contactTitle}
            </h4>

            <div className="space-y-4">
              <div className="bg-[var(--st-surface)] rounded-xl p-4 border border-[var(--st-border)]">
                <div className="font-medium mb-2">Bay Purcell</div>
                <a
                  href="mailto:bay@searchwebservices.tech"
                  className="flex items-center gap-2 text-sm text-[var(--st-primary)] hover:text-[var(--st-primary-light)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  bay@searchwebservices.tech
                </a>
              </div>

              <div className="bg-[var(--st-surface)] rounded-xl p-4 border border-[var(--st-border)]">
                <div className="font-medium mb-2">Borja Ponce</div>
                <a
                  href="mailto:info@searchwebservices.tech"
                  className="flex items-center gap-2 text-sm text-[var(--st-primary)] hover:text-[var(--st-primary-light)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@searchwebservices.tech
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-[var(--st-text-muted)]">
                <Phone className="w-4 h-4 text-[var(--st-secondary)]" />
                <span>{t.phoneNote}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--st-border)]">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[var(--st-text-muted)]">
              © {currentYear} Search Technologies. {t.copyright}
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-[var(--st-text-muted)] hover:text-[var(--st-primary)] transition-colors"
              >
                {t.terms}
              </a>
              <a
                href="#"
                className="text-sm text-[var(--st-text-muted)] hover:text-[var(--st-primary)] transition-colors"
              >
                {t.privacy}
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--st-text-muted)] hover:text-[var(--st-primary)] transition-colors"
              >
                searchtech.lat
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--st-primary)]/30 to-transparent" />
    </footer>
  );
};

export default STFooter;
