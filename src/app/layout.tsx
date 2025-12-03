import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "Search Technologies | Arquitectos de Software en Los Cabos",
    template: "%s | Search Technologies",
  },
  description:
    "Diseñamos, construimos y mantenemos sistemas operativos inteligentes para negocios en Los Cabos y Baja California Sur. Agentic AI, software personalizado y soporte 24/7.",
  keywords: [
    "software Los Cabos",
    "desarrollo software Cabo San Lucas",
    "sistemas empresariales BCS",
    "Agentic AI México",
    "inteligencia artificial negocios",
    "software personalizado",
    "arquitectos de software",
    "PropTech México",
    "automatización empresarial",
    "Baja California Sur tecnología",
  ],
  authors: [{ name: "Search Technologies" }],
  creator: "Search Technologies",
  publisher: "Search Technologies",
  metadataBase: new URL("https://searchtech.mx"),
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
    url: "https://searchtech.mx",
    siteName: "Search Technologies",
    title: "Search Technologies | Arquitectos de Software en Los Cabos",
    description:
      "Diseñamos, construimos y mantenemos sistemas operativos inteligentes para negocios en Los Cabos y Baja California Sur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Technologies | Arquitectos de Software en Los Cabos",
    description:
      "Diseñamos, construimos y mantenemos sistemas operativos inteligentes para negocios en Los Cabos y Baja California Sur.",
    creator: "@searchtech",
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
    icon: "/icon.svg",
    apple: "/apple-icon.png",
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
