"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isEnglish = pathname.startsWith("/en");
  
  const toggleLanguage = () => {
    if (isEnglish) {
      // Go to Spanish (remove /en)
      const newPath = pathname.replace(/^\/en/, "") || "/";
      router.push(newPath);
    } else {
      // Go to English (add /en)
      router.push(`/en${pathname === "/" ? "" : pathname}`);
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 px-3 text-sm font-medium hover:bg-[var(--st-primary)]/10 rounded-full"
      onClick={toggleLanguage}
    >
      <span className={`${isEnglish ? "text-[var(--st-text-muted)]" : "text-[var(--st-primary)] font-semibold"}`}>
        ES
      </span>
      <span className="mx-1.5 text-[var(--st-border)]">/</span>
      <span className={`${isEnglish ? "text-[var(--st-primary)] font-semibold" : "text-[var(--st-text-muted)]"}`}>
        EN
      </span>
    </Button>
  );
}

