"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import STNavigation from "@/components/sections/st-navigation";
import STFooter from "@/components/sections/st-footer";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function SchedulePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30-minute-tech-strategy-session" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <STNavigation locale="en" />
      <main className="flex-grow container py-16 md:py-24 pt-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--st-text-primary)] mb-4">
            Schedule Your Free Consultation
          </h1>
          <p className="text-lg text-[var(--st-text-secondary)]">
            Select a date and time for your 30-minute strategy session.
            We'll analyze your operations and explore how technology can
            drive your business in Los Cabos.
          </p>
        </div>

        <div className="bg-[var(--card)] rounded-xl shadow-lg overflow-hidden mb-16 border border-[var(--st-border)]">
          <Cal
            namespace="30-minute-tech-strategy-session"
            calLink="bay-search/30-minute-tech-strategy-session"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--st-border)] flex items-center gap-4">
            <Mail className="w-6 h-6 text-[var(--st-primary)]" />
            <div>
              <div className="text-[var(--st-text-secondary)] text-sm">Email</div>
              <Link
                href="mailto:info@searchwebservices.tech"
                className="text-[var(--st-text-primary)] font-medium hover:text-[var(--st-primary)] transition-colors"
              >
                info@searchwebservices.tech
              </Link>
            </div>
          </div>
          <div className="bg-[var(--card)] rounded-xl p-6 border border-[var(--st-border)] flex items-center gap-4">
            <Phone className="w-6 h-6 text-[var(--st-primary)]" />
            <div>
              <div className="text-[var(--st-text-secondary)] text-sm">Phone</div>
              <Link
                href="tel:+526242644012"
                className="text-[var(--st-text-primary)] font-medium hover:text-[var(--st-primary)] transition-colors"
              >
                +52 624 264 4012
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--card)] rounded-full px-4 py-2 border border-[var(--st-border)] text-[var(--st-text-secondary)] text-sm">
            <MapPin className="w-4 h-4 text-[var(--st-primary)]" />
            Los Cabos, BCS, Mexico
          </div>
        </div>
      </main>
      <STFooter locale="en" />
    </div>
  );
}

