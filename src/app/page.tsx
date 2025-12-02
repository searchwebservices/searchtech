"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import WorkspacePreview from "@/components/sections/workspace-preview";
import QuickstartSection from "@/components/sections/quickstart-section";
import GeminiSection from "@/components/sections/gemini-section";
import CollaborationSection from "@/components/sections/collaboration-section";
import TestingSection from "@/components/sections/testing-section";
import DeploymentSection from "@/components/sections/deployment-section";
import InnovationSection from "@/components/sections/innovation-section";
import Footer from "@/components/sections/footer";

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
      <Navigation />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <HeroSection />
        <WorkspacePreview />
        <QuickstartSection />
        <GeminiSection />
        <CollaborationSection />
        <TestingSection />
        <DeploymentSection />
        <InnovationSection />
      </main>
      <Footer />
    </>
  );
}