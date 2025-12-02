import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const DeploymentSection = () => {
  return (
    <section className="container py-24 md:py-48">
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10 sm:items-center sm:text-center">
        <span className="text-gray-900 bg-gray-200 px-5 py-2.5 rounded-full font-mono uppercase text-xs opacity-60 w-fit">
          Deployment &amp; monitoring
        </span>

        <h2 className="text-white text-4xl md:text-[64px] leading-[1] sm:max-w-md text-balance">
          Develop faster, deliver with confidence
        </h2>
        
        <p className="text-white/80 text-lg leading-[1.45] max-w-md">
          Publish your apps to Firebase App Hosting with a few clicks, and monitor the usage and behavior at a glance. You can also deploy your production apps to Firebase Hosting, Cloud Run, or your own custom infrastructure with complete control of your deployment approach.
        </p>

        <div className="w-full my-5 sm:my-10">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fadfe2a2-b6ac-49f6-ae78-bcdca92f7694-firebase-studio/assets/images/images_9.png"
            alt="Illustrations of deployment workflow showing a deploy button, an app preview, and an analytics graph"
            width={893}
            height={210}
            className="w-full h-auto pointer-events-none"
          />
        </div>

        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-8 h-auto py-3 text-base w-full sm:w-auto">
          <a href="https://accounts.google.com/AccountChooser/signinchooser?continue=https%3A%2F%2Fstudio.firebase.google.com%2F%3Futm_source%3Dfirebase_studio_marketing%26utm_medium%3Det%26utm_campaign%3DFY25-Q2-firebasestudio_nextlaunch%26utm_content%3Ddeployment_tryfirebasestudio%26utm_term%3D-">
            Try Firebase Studio
          </a>
        </Button>
      </div>
    </section>
  );
};

export default DeploymentSection;