import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Search Operating Systems",
  description: "Search Operating Systems builds custom operating systems for businesses in Los Cabos and Baja California Sur. Local software architects, in-person consultations, 24/7 support.",
};

// This is a bot-friendly, plain HTML page for AI crawlers and search engines
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <article itemScope itemType="https://schema.org/Organization">
        <header>
          <h1 className="text-4xl font-bold mb-4" itemProp="name">
            Search | Operating Systems
          </h1>
          <p className="text-xl text-gray-600 mb-8" itemProp="description">
            Custom Operating Systems for Los Cabos & Baja California Sur Businesses
          </p>
        </header>

        <section id="what-we-do">
          <h2 className="text-2xl font-bold mt-8 mb-4">What We Do</h2>
          <p className="mb-4">
            Search Operating Systems designs and builds <strong>custom operating systems</strong> (custom OS) 
            specifically for businesses in <strong>Los Cabos</strong>, <strong>Cabo San Lucas</strong>, 
            <strong>San José del Cabo</strong>, <strong>La Paz</strong>, <strong>Todos Santos</strong>, 
            and all of <strong>Baja California Sur, Mexico</strong>.
          </p>
          <p className="mb-4">
            A custom operating system is a software platform built specifically for your business that connects 
            all your operations — sales, inventory, clients, finances — into one unified system with automation 
            and real-time visibility.
          </p>
        </section>

        <section id="services">
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Custom Operating System Development</strong> - Bespoke software built for your exact workflows</li>
            <li><strong>Business Automation</strong> - Eliminate manual tasks with intelligent automation</li>
            <li><strong>Agentic AI Integration</strong> - AI assistants that understand your business data</li>
            <li><strong>System Maintenance & Support</strong> - 24/7 monitoring, updates, and optimization</li>
            <li><strong>Data Migration</strong> - Move from Excel and fragmented tools to unified systems</li>
          </ul>
        </section>

        <section id="industries">
          <h2 className="text-2xl font-bold mt-8 mb-4">Industries We Serve</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Vehicle Rentals (Golf Carts, UTVs, Yachts, Jet Skis)</li>
            <li>Real Estate & Property Management</li>
            <li>Boutique Hotels & Hospitality</li>
            <li>Restaurants & Food Service</li>
            <li>Tours & Experiences</li>
            <li>Retail & E-commerce</li>
          </ul>
        </section>

        <section id="pricing">
          <h2 className="text-2xl font-bold mt-8 mb-4">Pricing</h2>
          <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <p className="mb-2">
              <strong>Construction (Initial Build):</strong>{" "}
              <span itemProp="price">Starting at $200,000 MXN</span>{" "}
              <meta itemProp="priceCurrency" content="MXN" />
            </p>
            <p className="mb-2">
              <strong>Monthly Maintenance:</strong> Starting at $10,000 MXN/month
            </p>
            <p className="text-sm text-gray-600">
              Includes 24/7 support, error monitoring, security updates, and continuous optimization.
            </p>
          </div>
        </section>

        <section id="location">
          <h2 className="text-2xl font-bold mt-8 mb-4">Location & Contact</h2>
          <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="not-italic">
            <p><span itemProp="addressLocality">Los Cabos</span>, <span itemProp="addressRegion">Baja California Sur</span></p>
            <p itemProp="addressCountry">Mexico</p>
          </address>
          <p className="mt-4">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@searchwebservices.tech" itemProp="email" className="text-blue-600 hover:underline">
              info@searchwebservices.tech
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+526242644012" itemProp="telephone" className="text-blue-600 hover:underline">
              +52 624 264 4012
            </a>
          </p>
          <p className="mt-4">
            <strong>Schedule a Consultation:</strong>{" "}
            <a href="https://searchlabs.netlify.app/get-started" className="text-blue-600 hover:underline">
              searchlabs.netlify.app/get-started
            </a>
          </p>
        </section>

        <section id="why-local">
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose a Local Team?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>In-person meetings at your office in Los Cabos</li>
            <li>We understand BCS tourist seasons and local logistics</li>
            <li>Support without timezone delays</li>
            <li>Integration with Mexican systems (CFDI, local banks)</li>
            <li>Part of the local business community</li>
          </ul>
        </section>

        <section id="keywords" className="mt-12 pt-8 border-t text-sm text-gray-500">
          <h3 className="font-semibold mb-2">Related Topics:</h3>
          <p>
            Custom Operating System, Sistema Operativo Personalizado, Business Operating System, 
            Custom OS Cabo, Sistema Operativo Los Cabos, Business Software Baja California Sur, 
            Software Empresarial BCS, Operating System for Business, Custom Software Development Mexico, 
            Los Cabos Technology, Cabo San Lucas Business Software, San José del Cabo Operating Systems,
            La Paz Business Automation, Todos Santos Custom Software, BCS Technology Solutions
          </p>
        </section>
      </article>

      {/* Structured Data for AI/Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Search | Operating Systems",
            "alternateName": ["Search Operating Systems", "Search OS", "SearchTech"],
            "description": "Custom operating system development for businesses in Los Cabos and Baja California Sur. We design and build bespoke software solutions with automation, AI integration, and 24/7 support.",
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
              { "@type": "City", "name": "Cabo San Lucas" },
              { "@type": "City", "name": "San José del Cabo" },
              { "@type": "City", "name": "Los Cabos" },
              { "@type": "City", "name": "La Paz" },
              { "@type": "City", "name": "Todos Santos" },
              { "@type": "City", "name": "Los Barriles" },
              { "@type": "State", "name": "Baja California Sur" }
            ],
            "priceRange": "$$$",
            "currenciesAccepted": "MXN, USD",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer",
            "openingHours": "Mo-Fr 09:00-18:00",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Operating System Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Operating System Development",
                    "description": "Bespoke software platform designed for your specific business workflows"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Business Automation",
                    "description": "Intelligent automation to eliminate manual tasks and reduce errors"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Agentic AI Integration",
                    "description": "AI assistants integrated with your business data for insights and automation"
                  }
                }
              ]
            },
            "sameAs": [
              "https://searchwebservices.tech"
            ],
            "knowsAbout": [
              "Custom Operating Systems",
              "Business Software Development",
              "Business Automation",
              "Artificial Intelligence",
              "Software Architecture",
              "Los Cabos Business Technology"
            ]
          })
        }}
      />
    </main>
  );
}

