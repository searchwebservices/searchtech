import React from 'react';

const InnovationSection = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#FF8C00] via-[#FF0050] to-[#FF6B00] py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-[64px] sm:leading-none">
            Innovate with Firebase
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-white/80">
            For years, millions of you have relied on Firebase to accelerate your app development and run your apps with confidence. We hope you join us as we continue to evolve Firebase to help you take advantage of generative AI and a new way to build APIs, backends, web and mobile apps, custom agents, and more!
          </p>
          <a
            href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Dinnovation_tryfirebasestudio%26utm_term%3D-"
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Try Firebase Studio
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;