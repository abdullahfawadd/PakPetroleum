import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";

const NationalFootprint = dynamic(() => import("@/components/sections/NationalFootprint"));
const CoreOperations = dynamic(() => import("@/components/sections/CoreOperations"));
const TechnologySafety = dynamic(() => import("@/components/sections/TechnologySafety"));
const Sustainability = dynamic(() => import("@/components/sections/Sustainability"));
const MetricsTrust = dynamic(() => import("@/components/sections/MetricsTrust"));
const Leadership = dynamic(() => import("@/components/sections/Leadership"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PAK Petroleum",
    url: "https://pakpetroleum.com",
    logo: "https://pakpetroleum.com/logo.png",
    sameAs: [
      "https://www.facebook.com/pakpetroleum",
      "https://twitter.com/pakpetroleum",
      "https://www.linkedin.com/company/pakpetroleum",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-51-1234567",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: "en",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <Hero />
        <NationalFootprint />
        <CoreOperations />
        <TechnologySafety />
        <Sustainability />
        <MetricsTrust />
        <Leadership />
        <Contact />
      </main>
    </>
  );
}
