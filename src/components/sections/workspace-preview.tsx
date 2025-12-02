"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const WorkspacePreview = () => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const geminiPanelSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_2.png";
  const codePanelSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_3.png";
  const previewPanelSrc = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_4.png";

  return (
    <>
      <div
        ref={containerRef}
        className="w-[min(calc(100%-32px),90vw)] md:max-w-7xl mx-auto relative mt-20 mb-12 sm:mb-48 flex items-center justify-center select-none z-20"
      >
        <Image
          src={geminiPanelSrc}
          alt="Gemini panel"
          width={372}
          height={489}
          className={cn(
            "absolute -left-2 2xl:-left-12 bottom-16 w-[min(25vw,372px)] z-20 object-contain transition-all duration-1000 ease-in-out",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}
        />

        <Image
          src={codePanelSrc}
          alt="Code panel"
          width={1280}
          height={891}
          className={cn(
            "transform w-full max-w-7xl z-10 object-contain transition-all duration-1000 ease-in-out delay-200",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        />
        
        <Image
          src={previewPanelSrc}
          alt="Preview panel"
          width={406}
          height={733}
          className={cn(
            "absolute right-4 2xl:-right-10 bottom-0 w-[min(25vw,372px)] z-20 object-contain transition-all duration-1000 ease-in-out delay-100",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute w-full h-[650px] sm:h-[150vh] top-[530px] sm:top-[calc(600px-10vh)] object-cover object-top pointer-events-none -z-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 50% 40% at 50% 20%, hsl(26 100% 50% / 0.3), transparent 80%),
            radial-gradient(ellipse 40% 30% at 20% 30%, hsl(50 100% 50% / 0.2), transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 30%, hsl(340 100% 50% / 0.2), transparent 70%)
          `,
          filter: 'blur(100px)',
        }}
      />
    </>
  );
};

export default WorkspacePreview;