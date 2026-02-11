"use client";

import { Mail, MessageCircle, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import STNavigation from "@/components/sections/st-navigation";
import STFooter from "@/components/sections/st-footer";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_DISPLAY,
  CONTACT_TEL_LINK,
  CONTACT_WHATSAPP_LINK,
} from "@/lib/contact";

type Locale = "es" | "en";

const content = {
  es: {
    title: "Contáctanos",
    subtitle: "Elige tu canal preferido para hablar con nuestro equipo.",
    whatsappLabel: "WhatsApp",
    whatsappHint: "Enviar mensaje",
    emailLabel: "Email",
    emailHint: "Enviar correo",
    location: "Los Cabos, Baja California Sur, México",
    backHome: "Volver al inicio",
  },
  en: {
    title: "Contact Us",
    subtitle: "Choose your preferred channel to reach our team.",
    whatsappLabel: "WhatsApp",
    whatsappHint: "Send message",
    emailLabel: "Email",
    emailHint: "Send email",
    location: "Los Cabos, Baja California Sur, Mexico",
    backHome: "Back to home",
  },
} as const;

interface ContactPageProps {
  locale?: Locale;
}

export default function ContactPage({ locale = "es" }: ContactPageProps) {
  const t = content[locale];
  const homePath = locale === "en" ? "/en" : "/";

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)]">
      <STNavigation locale={locale} />

      <main className="container flex-grow pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--st-text-secondary)]">
            {t.subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          <a
            href={CONTACT_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-[var(--st-border)] bg-[var(--st-surface)] p-6 transition-all hover:border-[var(--st-primary)]/40 hover:shadow-lg hover:shadow-[var(--st-primary)]/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--st-primary)]/10 transition-colors group-hover:bg-[var(--st-primary)]/20">
              <MessageCircle className="h-6 w-6 text-[var(--st-primary)]" />
            </div>
            <div className="text-sm uppercase tracking-wider text-[var(--st-text-muted)]">{t.whatsappLabel}</div>
            <div className="mt-1 text-lg font-semibold text-[var(--st-text-primary)]">{CONTACT_PHONE_DISPLAY}</div>
            <div className="mt-2 text-sm text-[var(--st-primary)]">{t.whatsappHint}</div>
          </a>

          <a
            href={CONTACT_EMAIL_LINK}
            className="group rounded-2xl border border-[var(--st-border)] bg-[var(--st-surface)] p-6 transition-all hover:border-[var(--st-primary)]/40 hover:shadow-lg hover:shadow-[var(--st-primary)]/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--st-primary)]/10 transition-colors group-hover:bg-[var(--st-primary)]/20">
              <Mail className="h-6 w-6 text-[var(--st-primary)]" />
            </div>
            <div className="text-sm uppercase tracking-wider text-[var(--st-text-muted)]">{t.emailLabel}</div>
            <div className="mt-1 text-lg font-semibold text-[var(--st-text-primary)]">{CONTACT_EMAIL}</div>
            <div className="mt-2 text-sm text-[var(--st-primary)]">{t.emailHint}</div>
          </a>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-5 text-sm text-[var(--st-text-muted)]">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[var(--st-primary)]" />
            {t.location}
          </span>
          <a
            href={CONTACT_TEL_LINK}
            className="inline-flex items-center gap-2 text-[var(--st-text-muted)] transition-colors hover:text-[var(--st-primary)]"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={homePath}
            className="inline-flex items-center gap-2 text-sm text-[var(--st-text-muted)] transition-colors hover:text-[var(--st-text-primary)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backHome}
          </Link>
        </div>

      </main>

      <STFooter locale={locale} />
    </div>
  );
}
