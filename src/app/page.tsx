"use client";

import { useEffect, useState } from "react";
import STNavigation from "@/components/sections/st-navigation";
import STHero from "@/components/sections/st-hero";
import STProblem from "@/components/sections/st-problem";
import STArchitecture from "@/components/sections/st-architecture";
import STAI from "@/components/sections/st-ai";
import STTransparency from "@/components/sections/st-transparency";
import STTrust from "@/components/sections/st-trust";
import STFooter from "@/components/sections/st-footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <STNavigation locale="es" />
      <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
        <STHero locale="es" />
        <div id="problema">
          <STProblem locale="es" />
        </div>
        <div id="arquitectura">
          <STArchitecture locale="es" />
        </div>
        <STAI locale="es" />
        <div id="transparencia">
          <STTransparency locale="es" />
        </div>
        <div id="nosotros">
          <STTrust locale="es" />
        </div>
      </main>
      <STFooter locale="es" />
    </>
  );
}
