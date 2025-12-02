"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, FileText, LifeBuoy, Menu, X } from "lucide-react";

const FirebaseStudioLogo = () => (
  <Link href="/" aria-label="Firebase Studio homepage" className="z-50 shrink-0">
    <svg
      viewBox="0 0 211 40"
      className="w-40 md:w-48 lg:w-[211px] h-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="paint0_linear_logo" x1="22.4" y1="0" x2="22.4" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFA000"/>
          <stop offset="1" stopColor="#F57C00"/>
        </linearGradient>
        <linearGradient id="paint1_linear_logo" x1="16.924" y1="21.12" x2="31.6" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFCA28"/>
          <stop offset="1" stopColor="#FFA000" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="clip0_logo">
            <rect width="44.8" height="38" fill="white"/>
        </clipPath>
      </defs>
      <g clipPath="url(#clip0_logo)">
          {/* A more accurate representation of the Firebase flame icon using paths inspired by its common shape */}
          <path d="M21.2 0.899994L18.4 4.09999L5.6 22.8C4.39999 24.4 3.79999 26.3 3.79999 28.2C3.79999 33.1 7.79999 37.1 12.7 37.1C17.6 37.1 21.6 33.1 21.6 28.2C21.6 27 21.4 25.9 20.9 24.8L21.2 0.899994Z" fill="url(#paint1_linear_logo)"/>
          <path d="M21.2 0.899994L5.6 22.8C4.39999 24.4 3.79999 26.3 3.79999 28.2C3.79999 33.1 7.79999 37.1 12.7 37.1C17.6 37.1 21.6 33.1 21.6 28.2C21.6 27 21.4 25.9 20.9 24.8L34 4.09999L21.2 0.899994Z" fill="url(#paint0_linear_logo)"/>
      </g>
      <text x="48" y="27" fontFamily="Google Sans, sans-serif" fontSize="22" fontWeight="500" fill="white">
        Firebase Studio
      </text>
    </svg>
    <span className="sr-only">Firebase Studio</span>
  </Link>
);


export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      document.body.style.paddingTop = '96px';
    } else {
      document.body.style.paddingTop = '';
    }
  }, [menuOpen]);

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled || menuOpen ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`} style={{boxShadow: scrolled || menuOpen ? 'rgba(0, 0, 0, 0.05) 0px 2px 4px 0px': 'none'}}
    >
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-4 sm:px-10">
        <div className="flex flex-1 justify-start">
            <FirebaseStudioLogo />
        </div>

        <nav className="hidden md:flex items-center gap-8">
            <a href="https://firebase.google.com/docs/studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base font-normal">
              <FileText size={16} /> Docs
            </a>
            <a href="https://firebase.google.com/support/troubleshooter/studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-base font-normal">
              <LifeBuoy size={16} /> Support
            </a>
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-4">
          <a
            href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dnav_getstarted%26utm_term%3D-"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black font-medium text-sm hover:bg-primary-orange-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-24 left-0 w-full h-[calc(100vh-96px)] bg-black/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <a href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-white text-xl font-medium">
            <Home size={22} /> Home
          </a>
          <a href="https://firebase.google.com/docs/studio" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white text-xl font-medium">
            <FileText size={22} /> Docs
          </a>
          <a href="https://firebase.google.com/support/troubleshooter/studio" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white text-xl font-medium">
            <LifeBuoy size={22} /> Support
          </a>
          <a
            href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dnav_getstarted%26utm_term%3D-"
            className="inline-flex items-center justify-center px-8 py-3 mt-6 rounded-full bg-primary text-black font-medium hover:bg-primary-orange-light transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}