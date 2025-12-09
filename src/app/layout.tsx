import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Search | Operating Systems",
    template: "%s | Search Operating Systems",
  },
  description:
    "Diseñamos y construimos sistemas operativos personalizados para negocios en Los Cabos y Baja California Sur. Custom OS empresarial, Agentic AI y software a la medida con soporte 24/7.",
  keywords: [
    // Core OS Keywords
    "sistema operativo personalizado",
    "sistema operativo empresarial",
    "sistema operativo para negocios",
    "custom operating system",
    "custom OS",
    "business operating system",
    "Search operating systems",
    // Local Keywords - Los Cabos
    "sistema operativo Los Cabos",
    "software Los Cabos",
    "custom OS Cabo San Lucas",
    "operating system Los Cabos",
    "software empresarial Cabo",
    // Local Keywords - Baja
    "sistemas operativos Baja California Sur",
    "software BCS México",
    "tecnología Baja California",
    "desarrollo software San José del Cabo",
    // Service Keywords
    "Agentic AI México",
    "inteligencia artificial negocios",
    "software personalizado",
    "arquitectos de software",
    "automatización empresarial",
    "PropTech México",
  ],
  authors: [{ name: "Search Operating Systems" }],
  creator: "Search Operating Systems",
  publisher: "Search Operating Systems",
  metadataBase: new URL("https://searchos.tech"),
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: "https://searchos.tech",
    siteName: "Search | Operating Systems",
    title: "Search | Operating Systems — Custom OS para Negocios en Los Cabos",
    description:
      "Creamos sistemas operativos personalizados y custom OS para negocios en Los Cabos y Baja California Sur. Software empresarial a la medida con Agentic AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search | Operating Systems — Custom OS for Los Cabos Businesses",
    description:
      "We build custom operating systems and business software for companies in Los Cabos and Baja California Sur. Agentic AI, PropTech, and 24/7 support.",
    creator: "@searchoperatingsystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WN4RXZ6Q');`}
        </Script>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://searchos.tech/#organization",
                  "name": "Search | Operating Systems",
                  "alternateName": "Search Operating Systems",
                  "description": "Diseñamos y construimos sistemas operativos personalizados para negocios en Los Cabos y Baja California Sur. Custom OS, Agentic AI y software empresarial.",
                  "url": "https://searchos.tech",
                  "logo": "https://searchos.tech/icon.svg",
                  "image": "https://searchos.tech/opengraph-image",
                  "telephone": "+526242644012",
                  "email": "info@searchwebservices.tech",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Los Cabos",
                    "addressRegion": "Baja California Sur",
                    "addressCountry": "MX"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "22.8905",
                    "longitude": "-109.9167"
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "Cabo San Lucas"
                    },
                    {
                      "@type": "City", 
                      "name": "San José del Cabo"
                    },
                    {
                      "@type": "City",
                      "name": "La Paz"
                    },
                    {
                      "@type": "City",
                      "name": "Todos Santos"
                    },
                    {
                      "@type": "State",
                      "name": "Baja California Sur"
                    }
                  ],
                  "priceRange": "$$$",
                  "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  "sameAs": [
                    "https://twitter.com/searchtech"
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Custom Operating System Development",
                  "name": "Sistema Operativo Personalizado",
                  "alternateName": "Custom OS",
                  "description": "Diseño y desarrollo de sistemas operativos personalizados para negocios. Custom business operating systems built specifically for your workflows.",
                  "provider": {
                    "@id": "https://searchos.tech/#organization"
                  },
                  "areaServed": {
                    "@type": "State",
                    "name": "Baja California Sur"
                  },
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://searchlabs.netlify.app/get-started"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Agentic AI Development",
                  "name": "Agentic AI",
                  "description": "Asistentes de inteligencia artificial integrados en tu sistema operativo para automatizar decisiones y responder preguntas de negocio.",
                  "provider": {
                    "@id": "https://searchos.tech/#organization"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Business Software Development",
                  "name": "Software Empresarial",
                  "alternateName": "Business Software",
                  "description": "Desarrollo de software empresarial a la medida para negocios en Los Cabos y Baja California Sur.",
                  "provider": {
                    "@id": "https://searchos.tech/#organization"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://searchos.tech/#website",
                  "url": "https://searchos.tech",
                  "name": "Search | Operating Systems",
                  "description": "Custom Operating Systems for Los Cabos & Baja California Sur",
                  "publisher": {
                    "@id": "https://searchos.tech/#organization"
                  },
                  "inLanguage": ["es-MX", "en-US"]
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WN4RXZ6Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorReporter />
          <Script
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
            strategy="afterInteractive"
            data-target-origin="*"
            data-message-type="ROUTE_CHANGE"
            data-include-search-params="true"
            data-only-in-iframe="true"
            data-debug="true"
            data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
          />
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
