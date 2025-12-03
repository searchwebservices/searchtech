import STNavigation from "@/components/sections/st-navigation";
import STHero from "@/components/sections/st-hero";
import STProblem from "@/components/sections/st-problem";
import STArchitecture from "@/components/sections/st-architecture";
import STAI from "@/components/sections/st-ai";
import STTransparency from "@/components/sections/st-transparency";
import STTrust from "@/components/sections/st-trust";
import STFooter from "@/components/sections/st-footer";

export const metadata = {
  title: "Search Technologies | Software Architects in Los Cabos",
  description: "We design, build, and maintain intelligent operating systems exclusively for your business in Los Cabos and Baja California Sur.",
};

export default function EnglishPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <STNavigation locale="en" />
      <STHero locale="en" />
      <section id="problem">
        <STProblem locale="en" />
      </section>
      <section id="architecture">
        <STArchitecture locale="en" />
      </section>
      <STAI locale="en" />
      <section id="pricing">
        <STTransparency locale="en" />
      </section>
      <section id="about">
        <STTrust locale="en" />
      </section>
      <STFooter locale="en" />
    </main>
  );
}

