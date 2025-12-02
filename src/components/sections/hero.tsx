"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const GemIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 79 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M78.001 13.923 39.5 0 1 13.923l16.142 6.077L1 26.077l38.5 23.077 38.5-23.077-16.142-6.077L78.001 13.923Z" fill="#fff"></path>
    <path d="m39.5 5.539-31.848 11.538 12.923 4.808L39.5 5.539Zm0 43.153 31.848-18.77-12.923-4.807L39.5 48.692Zm19.078-28.384L39.5 24.385v16.153l19.078-11.538v-4.615Zm-38.155 0v4.615L39.5 30.538V14.385L20.423 20.308Z" fill="#B536F8"></path>
  </svg>
);

const CurlyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.58 1c-5.417 0-9.75 2.292-9.75 6.875v12.25c0 4.583 4.333 6.875 9.75 6.875M19.58 58c-5.417 0-9.75-2.292-9.75-6.875V38.875c0-4.583 4.333-6.875 9.75-6.875" stroke="#fff" strokeWidth="2"></path>
    <path d="M38.42 1c5.417 0 9.75 2.292 9.75 6.875v12.25c0 4.583-4.333 6.875-9.75 6.875M38.42 58c5.417 0 9.75-2.292-9.75-6.875V38.875c0-4.583-4.333-6.875-9.75-6.875" stroke="#fff" strokeWidth="2"></path>
  </svg>
);

const DevModeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m14.25 1 23.75 28L14.25 57M1 21.125V36.5h42.5" stroke="#fff" strokeWidth="2"></path>
  </svg>
);

const icons = [
  {
    component: GemIcon,
    bgClass: 'bg-gradient-to-br from-[#ff00e5] to-[#ff0050]',
    className: 'w-8 sm:w-12 lg:w-[79px]',
  },
  {
    component: CurlyIcon,
    bgClass: 'bg-gradient-to-br from-[#4285f4] to-[#5b9bf5]',
    className: 'w-6 sm:w-9 lg:w-[58px]',
  },
  {
    component: DevModeIcon,
    bgClass: 'bg-gradient-to-br from-lime-400 to-green-500',
    className: 'w-6 sm:w-9 lg:w-[57px]',
  },
];

const AnimatedIcon = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(
      "relative inline-block align-middle transition-colors duration-1000 ease-in-out size-10 sm:size-14 lg:size-[100px] rounded-md sm:rounded-[10px] lg:rounded-2xl translate-y-[-2px] sm:translate-y-[-2px] lg:translate-y-[-4px]",
      icons[activeIndex].bgClass
    )}>
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <span
            key={index}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out",
              activeIndex === index
                ? 'scale-100 opacity-100 blur-none'
                : 'scale-90 opacity-0 blur-md'
            )}
          >
            <IconComponent className={icon.className} />
          </span>
        );
      })}
    </div>
  );
};

const HeroShowcase = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimated(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative mx-auto mt-20 mb-12 flex w-[min(calc(100%-32px),90vw)] select-none items-center justify-center sm:mb-48 md:max-w-7xl z-10">
            {/* Left Panel - Placeholder */}
            <div className={cn(
                "absolute -left-2 bottom-16 z-20 w-[min(25vw,372px)] 2xl:-left-12 aspect-[372/489] rounded-2xl bg-muted transition-all duration-700 ease-out",
                isAnimated ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}>
                 <div className="flex items-center justify-center h-full">
                    <GemIcon className="w-1/3 h-auto text-muted-foreground" />
                 </div>
            </div>

            {/* Center Panel */}
            <div className={cn(
                "w-full max-w-7xl z-10 object-contain transition-all duration-700 ease-out",
                isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_6.png"
                    width={1280}
                    height={891}
                    alt="Code panel"
                    className="transform w-full"
                />
            </div>
            
            {/* Right Panel */}
            <div className={cn(
                "absolute -right-4 bottom-0 z-20 w-[min(25vw,372px)] 2xl:-right-10 object-contain transition-all duration-700 ease-out delay-200",
                isAnimated ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}>
                <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_1.png"
                    width={406}
                    height={733}
                    alt="Preview panel"
                />
            </div>
        </div>
    );
};


const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-x-clip pt-8 text-center">
            <div className="absolute top-0 w-full h-[150vh] pointer-events-none -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_100%,var(--color-gradient-orange)_0%,transparent_50%),radial-gradient(ellipse_at_70%_90%,var(--color-gradient-magenta)_0%,transparent_40%)] opacity-30 blur-3xl" />
            </div>

            <header className="container z-10 flex w-full flex-col items-center gap-8 pt-16 sm:max-w-5xl sm:flex-1 lg:pt-24">
                <h1 className="sr-only">Firebase Studio</h1>
                <p className="text-balance font-display text-5xl font-medium leading-[0.99] tracking-[-1.44px] text-white sm:text-7xl lg:text-9xl lg:tracking-[-3.72px] max-w-sm sm:max-w-lg lg:max-w-4xl mb-7">
                    <span className="flex items-center justify-center whitespace-nowrap">
                        The full&nbsp;
                        <AnimatedIcon />
                        &nbsp;stack
                    </span>
                    <span className="block">AI workspace</span>
                </p>
                <p className="max-w-xl text-lg !leading-relaxed text-white/80">
                    Firebase Studio accelerates your entire development lifecycle with AI agents. Build backends, front ends, and mobile apps, all in one place.
                </p>
                <Button asChild size="lg" className="h-auto w-full rounded-full bg-primary px-8 py-4 text-lg font-medium text-black hover:bg-primary/90 xs:w-auto">
                    <a href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dhero_tryfirebasestudio%26utm_term%3D-">
                        Try Firebase Studio
                    </a>
                </Button>
            </header>

            <HeroShowcase />
        </section>
    );
};

export default HeroSection;