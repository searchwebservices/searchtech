import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Search Operating Systems",
  description: "Search Operating Systems builds custom operating systems for businesses in Los Cabos and Baja California Sur. Local software architects, in-person consultations, 24/7 support.",
};

// This is a bot-friendly, plain HTML page for AI crawlers and search engines
export default function AboutPageEN() {
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
              <span itemProp="price">Starting at $200,000 MXN (~$10,000 USD)</span>{" "}
              <meta itemProp="priceCurrency" content="MXN" />
            </p>
            <p className="mb-2">
              <strong>Monthly Maintenance:</strong> Starting at $10,000 MXN/month (~$500 USD)
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

        <section id="faq">
          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">What is a custom operating system for business?</h3>
              <p className="text-gray-600">A custom operating system (custom OS) is a software platform designed specifically for your business. It connects all your operations — sales, inventory, clients, finances — into one integrated system with automation and real-time visibility.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">How much does a custom operating system cost in Los Cabos?</h3>
              <p className="text-gray-600">The minimum investment is $200,000 MXN (~$10,000 USD) for initial construction, plus maintenance starting at $10,000 MXN/month (~$500 USD). We start small and scale based on your needs.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">How long does it take to build a custom OS?</h3>
              <p className="text-gray-600">A base operating system is typically ready in 8-12 weeks. We work modularly, delivering features incrementally so you see value from the first weeks.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">Why choose a local team in Los Cabos?</h3>
              <p className="text-gray-600">A local team understands the BCS market — tourist seasons, peninsula logistics, and international client expectations. Plus, we offer in-person meetings, support without timezone delays, and we're part of the local business community.</p>
            </div>
            
            <div>
              <h3 className="font-semibold">What industries do you serve?</h3>
              <p className="text-gray-600">We serve vehicle rentals (golf carts, UTVs, yachts), real estate, boutique hotels, restaurants, tours and experiences, and any business that needs to automate operations and have real-time visibility.</p>
            </div>
          </div>
        </section>

        <section id="keywords" className="mt-12 pt-8 border-t text-sm text-gray-500">
          <h3 className="font-semibold mb-2">Related Topics:</h3>
          <p>
            Custom Operating System, Business Operating System, Custom OS Cabo, Custom OS Los Cabos, 
            Business Software Baja California Sur, Operating System for Business, Custom Software Development Mexico, 
            Los Cabos Technology, Cabo San Lucas Business Software, San José del Cabo Operating Systems,
            La Paz Business Automation, Todos Santos Custom Software, BCS Technology Solutions,
            Custom Operating System Mexico, Business OS Development, Enterprise Operating System
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
            "telephone": "+526242644012",
            "email": "info@searchwebservices.tech",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Los Cabos",
              "addressRegion": "Baja California Sur",
              "addressCountry": "MX"
            },
            "areaServed": [
              { "@type": "City", "name": "Cabo San Lucas" },
              { "@type": "City", "name": "San José del Cabo" },
              { "@type": "City", "name": "Los Cabos" },
              { "@type": "City", "name": "La Paz" },
              { "@type": "City", "name": "Todos Santos" },
              { "@type": "State", "name": "Baja California Sur" }
            ],
            "priceRange": "$$$",
            "knowsAbout": [
              "Custom Operating Systems",
              "Business Software Development", 
              "Business Automation",
              "Artificial Intelligence",
              "Los Cabos Business Technology"
            ]
          })
        }}
      />
    </main>
  );
}

