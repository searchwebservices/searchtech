"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

/**
 * Comprehensive route mapping between Spanish and English versions
 * Format: [Spanish path, English path]
 */
const routeMappings: [string, string][] = [
  // Main pages
  ["/", "/en"],
  
  // Schedule/Demo pages (all point to the same equivalent)
  ["/agendar", "/en/demo"],
  
  // About pages
  ["/about", "/en/about"],
  
  // Blog pages
  ["/blog", "/en/blog"],
  
  // Resources/FAQ pages
  ["/recursos", "/en/resources"],
  
  // Products index
  ["/productos", "/en/products"],
  
  // Individual product pages
  ["/productos/golf-cart-os", "/en/products/golf-cart-os"],
  ["/productos/batchcraft-os", "/en/products/batchcraft-os"],
  ["/productos/cabo-concierge", "/en/products/cabo-concierge"],
  ["/productos/cabo-tails", "/en/products/cabo-tails"],
  ["/productos/experience-os", "/en/products/experience-os"],
  
  // Services pages
  ["/servicios/sistema-operativo-personalizado", "/en/services/custom-operating-system"],
  ["/servicios/software-empresarial-baja-california-sur", "/en/services/business-software-cabo"],
];

/**
 * Additional English paths that should map to Spanish equivalents
 * (for paths that have different names in English but weren't auto-matched)
 */
const additionalEnglishMappings: Record<string, string> = {
  "/en/schedule": "/agendar", // Legacy English schedule path
};

/**
 * Dynamic route patterns that need slug preservation
 * Format: [Spanish pattern, English pattern, slugPosition]
 */
const dynamicRoutePatterns: { es: RegExp; en: RegExp; esBase: string; enBase: string }[] = [
  {
    es: /^\/blog\/(.+)$/,
    en: /^\/en\/blog\/(.+)$/,
    esBase: "/blog/",
    enBase: "/en/blog/",
  },
];

/**
 * Get the equivalent path in the other language
 */
function getEquivalentPath(currentPath: string, isEnglish: boolean): string {
  // Normalize path (remove trailing slash)
  const normalizedPath = currentPath.endsWith("/") && currentPath !== "/" 
    ? currentPath.slice(0, -1) 
    : currentPath;
  
  // Check additional English mappings first (for special cases like /en/schedule)
  if (isEnglish && additionalEnglishMappings[normalizedPath]) {
    return additionalEnglishMappings[normalizedPath];
  }
  
  // Check static route mappings
  for (const [esPath, enPath] of routeMappings) {
    if (isEnglish && normalizedPath === enPath) {
      return esPath;
    }
    if (!isEnglish && normalizedPath === esPath) {
      return enPath;
    }
  }
  
  // Check dynamic route patterns (like blog slugs)
  for (const pattern of dynamicRoutePatterns) {
    if (isEnglish) {
      const match = normalizedPath.match(pattern.en);
      if (match && match[1]) {
        return pattern.esBase + match[1];
      }
    } else {
      const match = normalizedPath.match(pattern.es);
      if (match && match[1]) {
        return pattern.enBase + match[1];
      }
    }
  }
  
  // Fallback: Generic path transformation
  if (isEnglish) {
    // Remove /en prefix and return
    const pathWithoutEn = normalizedPath.replace(/^\/en/, "") || "/";
    return pathWithoutEn;
  } else {
    // Add /en prefix
    return `/en${normalizedPath === "/" ? "" : normalizedPath}`;
  }
}

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isEnglish = pathname.startsWith("/en");
  
  const toggleLanguage = () => {
    const newPath = getEquivalentPath(pathname, isEnglish);
    router.push(newPath);
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
