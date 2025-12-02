"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const AsteriskIcon = () => (
  <svg
    className="size-12 sm:size-full"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.9999 1.66675L54.4666 45.5334L98.3333 50.0001L54.4666 54.4667L49.9999 98.3334L45.5333 54.4667L1.66658 50.0001L45.5333 45.5334L49.9999 1.66675Z"
      fill="#F439A0"
    />
  </svg>
);

const CurlyBracesIcon = () => (
  <svg
    className="size-12 sm:size-full"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M47.9157 91.6668C38.0157 91.6668 31.249 84.8668 31.249 75.0002V58.3335H39.5824V75.0002C39.5824 80.3335 43.6824 83.3335 47.9157 83.3335C52.249 83.3335 56.249 80.3335 56.249 75.0002V25.0002C56.249 19.6668 52.249 16.6668 47.9157 16.6668C43.6824 16.6668 39.5824 19.6668 39.5824 25.0002V41.6668H31.249V25.0002C31.249 15.1335 38.0157 8.3335 47.9157 8.3335C57.9157 8.3335 64.5824 15.1335 64.5824 25.0002V75.0002C64.5824 84.8668 57.9157 91.6668 47.9157 91.6668Z"
      fill="#FFA726"
    />
    <path
      transform="matrix(-1, 0, 0, 1, 100, 0)"
      d="M47.9157 91.6668C38.0157 91.6668 31.249 84.8668 31.249 75.0002V58.3335H39.5824V75.0002C39.5824 80.3335 43.6824 83.3335 47.9157 83.3335C52.249 83.3335 56.249 80.3335 56.249 75.0002V25.0002C56.249 19.6668 52.249 16.6668 47.9157 16.6668C43.6824 16.6668 39.5824 19.6668 39.5824 25.0002V41.6668H31.249V25.0002C31.249 15.1335 38.0157 8.3335 47.9157 8.3335C57.9157 8.3335 64.5824 15.1335 64.5824 25.0002V75.0002C64.5824 84.8668 57.9157 91.6668 47.9157 91.6668Z"
      fill="#FFA726"
    />
  </svg>
);

const QuickstartSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-x-clip">
      <div className="absolute w-full h-svh -top-1/4 bg-[url('https://rstr.in/google/firebase-studio/Q7ttD_XZy9p-source')] bg-cover bg-top pointer-events-none -z-10 md:blur-md scale-110" />
      <div className="container py-24 md:pb-40">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-20 relative">
          <div
            className={`absolute top-32 sm:top-48 lg:top-1/3 -left-2 sm:-left-12 rotate-[10deg] z-10 transition-all duration-1000 ease-in-out pointer-events-none ${
              isVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 -translate-x-1/2 md:-translate-x-full md:-translate-y-10"
            }`}
          >
            <AsteriskIcon />
          </div>

          <div
            className={`absolute top-10 sm:top-20 lg:top-[15%] -right-2 sm:-right-12 -rotate-[12deg] z-10 transition-all duration-1000 ease-in-out pointer-events-none ${
              isVisible
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-1/2 md:translate-x-full translate-y-10"
            }`}
          >
            <CurlyBracesIcon />
          </div>

          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_5.png"
            alt="Firebase Studio welcome screen"
            width={1280}
            height={720}
            className="w-full select-none"
          />

          <div className="flex flex-col sm:items-center sm:text-center gap-8 max-w-lg md:max-w-2xl mx-auto">
            <span className="text-gray-900 bg-gray-200 px-5 py-2.5 rounded-full font-mono uppercase text-xs opacity-60 w-fit">
              QUICKSTART
            </span>

            <h2 className="font-display text-4xl md:text-[64px] tracking-tight leading-[1] text-balance text-white">
              Get to work quickly wherever you are
            </h2>

            <p className="text-white/80 text-lg leading-relaxed">
              Go from opening your browser to building in minutes, not hours.
              Import your existing repositories from GitHub, GitLab, Bitbucket,
              or your local machine, with support for most tech stacks. Or use
              the App Prototyping agent to quickly create a new application
              using natural language, mockups, drawing tools, and screenshots,
              or select from a large catalog of popular framework or language
              templates. You can also customize your environment with Nix.
              <br />
              <br />
              Firebase Studio is currently available with 3 workspaces at no
              cost during preview. Members of the{" "}
              <a
                href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdevelopers.google.com%2Fprogram%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dquickstart_gdp%26utm_term%3D-"
                className="text-blue-accent hover:underline"
              >
                Google Developer Program
              </a>{" "}
              get up to 30 workspaces.
            </p>

            <a
              href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dquickstart_getstarted%26utm_term%3D-"
              className="inline-block bg-primary text-primary-foreground font-medium py-3 px-6 rounded-full transition-colors hover:bg-primary/90 max-xs:w-full text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickstartSection;