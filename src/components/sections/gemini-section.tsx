import React from 'react';
import Image from 'next/image';

const GeminiIcon = () => (
  <svg
    width="129"
    height="45"
    viewBox="0 0 129 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block w-24 md:w-[122px] h-auto -translate-y-[9px] md:-translate-y-[11px] ml-2"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="gemini-b" x1="5.5" y1="11.5" x2="33" y2="11.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4285F4"></stop>
        <stop offset="0.5" stopColor="#9333EA"></stop>
        <stop offset="1" stopColor="#4285F4"></stop>
      </linearGradient>
      <linearGradient id="gemini-c" x1="26" y1="12" x2="52.5" y2="12" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"></stop>
        <stop offset="0.5" stopColor="#9333EA"></stop>
        <stop offset="1" stopColor="#4285F4"></stop>
      </linearGradient>
      <linearGradient id="gemini-d" x1="48" y1="14" x2="74.5" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9333EA"></stop>
        <stop offset="0.5" stopColor="#D946EF"></stop>
        <stop offset="1" stopColor="#4285F4"></stop>
      </linearGradient>
      <linearGradient id="gemini-e" x1="72" y1="16" x2="95.5" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#D946EF"></stop>
        <stop offset="0.5" stopColor="#E879F9"></stop>
        <stop offset="1" stopColor="#9333EA"></stop>
      </linearGradient>
      <linearGradient id="gemini-f" x1="94" y1="17.5" x2="117" y2="17.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E879F9"></stop>
        <stop offset="0.5" stopColor="#EC4899"></stop>
        <stop offset="1" stopColor="#9333EA"></stop>
      </linearGradient>
      <linearGradient id="gemini-g" x1="117.5" y1="17" x2="128.5" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366F1"></stop>
        <stop offset="0.5" stopColor="#E879F9"></stop>
        <stop offset="1" stopColor="#9333EA"></stop>
      </linearGradient>
    </defs>
    <g clipPath="url(#clip0_gemini_section)">
      <path d="M12.92 29.32c-3.12 0-5.8-1.56-6.68-4.52l2.36-.6c.64 2.04 2.68 3.32 4.32 3.32 1.84 0 3.24-.96 3.24-2.32 0-1.52-1.32-2.12-3.36-2.92-2.52-.96-4.2-2.12-4.2-4.68 0-2.48 2-4.28 4.76-4.28 2.2 0 4.2.96 5.16 3.12l-2.28.88c-.6-1.44-2-2.2-2.88-2.2-1.08 0-1.8.64-1.8 1.6s.76 1.48 2.92 2.28c2.6.96 4.64 2.08 4.64 4.96.04 2.8-2.12 4.68-5.48 4.68Z" fill="url(#gemini-b)"></path>
      <path d="M34.33 29.32c-3.12 0-5.8-1.56-6.68-4.52l2.36-.6c.64 2.04 2.68 3.32 4.32 3.32 1.84 0 3.24-.96 3.24-2.32 0-1.52-1.32-2.12-3.36-2.92-2.52-.96-4.2-2.12-4.2-4.68 0-2.48 2-4.28 4.76-4.28 2.2 0 4.2.96 5.16 3.12l-2.28.88c-.6-1.44-2-2.2-2.88-2.2-1.08 0-1.8.64-1.8 1.6s.76 1.48 2.92 2.28c2.6.96 4.64 2.08 4.64 4.96.04 2.8-2.12 4.68-5.48 4.68Z" fill="url(#gemini-c)"></path>
      <path d="M56.28 29.32c-3.16 0-5.52-2.08-5.52-5.48s2.36-5.48 5.52-5.48c1.64 0 3.2.56 4.24 1.64V18.6h2.4v10.12h-2.2l-.2-.84c-1.2 1.4-2.84 2.44-4.84 2.44Zm.32-2.2c1.92 0 3.2-1.24 3.2-3.28s-1.28-3.28-3.2-3.28-3.24 1.24-3.24 3.28 1.32 3.28 3.24 3.28Z" fill="url(#gemini-d)"></path>
      <path d="M80.08 29.12V18.6h2.4v10.52h-2.4Z" fill="url(#gemini-e)"></path>
      <path d="M99.63 29.32c-3.16 0-5.52-2.08-5.52-5.48s2.36-5.48 5.52-5.48c3.16 0 5.52 2.08 5.52 5.48s-2.36 5.48-5.52 5.48Zm0-2.2c1.96 0 3.24-1.24 3.24-3.28s-1.28-3.28-3.24-3.28-3.24 1.24-3.24 3.28 1.28 3.28 3.24 3.28Z" fill="url(#gemini-f)"></path>
      <path d="M123.63 29.12l-6.2-10.52h2.64l4.92 8.64 4.92-8.64h2.64l-6.2 10.52h-2.72Z" fill="url(#gemini-g)"></path>
    </g>
    <clipPath id="clip0_gemini_section">
      <path fill="#fff" transform="translate(0 11)" d="M0 0h129v23H0z"></path>
    </clipPath>
  </svg>
);

const GeminiSection = () => {
  return (
    <section className="relative w-[calc(100%-32px)] md:w-[calc(100%-80px)] m-4 md:m-10 max-w-[1600px] xl:mx-auto">
      <div className="relative group rounded-3xl">
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-gradient-orange via-gradient-red to-gradient-magenta rounded-[30px] opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"
          aria-hidden="true"
        ></div>
        <div className="relative p-px bg-gradient-to-r from-white/10 to-white/5 rounded-3xl">
          <div className="bg-surface-dark rounded-[23px]">
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-6 md:p-10 lg:p-14 xl:p-24 flex flex-col gap-8 items-center text-center lg:items-start lg:text-left">
                <span className="bg-badge-gray text-black/60 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-medium">
                  AI powered
                </span>
                <h2 className="font-display text-3xl md:text-[38px] text-text-primary leading-[1.1] tracking-[-0.5px] max-w-md text-balance">
                  Build with <GeminiIcon />
                  <span className="sr-only">Gemini</span> in Firebase
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed max-w-md">
                  Work quickly and efficiently with Gemini in Firebase. Complete a variety of tasks like coding, debugging, testing, refactoring, explaining, and documenting code with AI assistance that interacts with your codebase and takes actions on your behalf. Use the built-in model or select your preferred model.
                  <br />
                  <br />
                  New Gemini Code Assist agents help with everything from migration to AI testing. <a href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fdevelopers.google.com%2Fprofile%2Fbadges%2Fcommunity%2Fsdlcagents%2Fgca-agents%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Daipowered_signup%26utm_term%3D-" className="text-blue-accent hover:underline">Sign up</a> for the waitlist to get early access to Code Assist agents via the Google Developer Program.
                </p>
                <a
                  href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Daipowered_getstarted%26utm_term%3D-"
                  className="text-primary-orange font-medium text-lg hover:text-primary-orange-light transition-colors"
                >
                  Get Started
                </a>
              </div>
              <div className="relative overflow-hidden w-full max-w-2xl mx-auto flex justify-center aspect-[4/3] select-none max-lg:pb-10">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_7.png"
                  alt="An illustration of Gemini assisting with code in a chat interface"
                  width={640}
                  height={480}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiSection;