import React from "react";
import SEOHelmet from "../components/SEOHelmet";
import Hero from "../components/Hero";
import HomeStats from "../components/HomeStats";
import ServicesHighlight from "../components/ServicesHighlight";
import Testimonials from "../components/Testimonials";
import HomeCallToAction from "../components/HomeCallToAction";

function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "TEK Inspirations LLC",
    "image": "https://www.tekinspirations.com/wp-content/uploads/2022/01/TEK-Logo.png",
    "url": "https://www.tekinspirations.com",
    "telephone": "+1-469-555-0100",
    "email": "info@tekinspirations.com",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13573 Tabasco Cat Trail",
      "addressLocality": "Frisco",
      "addressRegion": "TX",
      "postalCode": "75035",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 33.1507, "longitude": -96.8236 },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "145" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Staffing & Recruitment" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT Consulting" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Managed IT Services" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Development" } }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHelmet
        title="Top IT Staffing & Technology Solutions in USA"
        description="TEK Inspirations LLC — Leading IT staffing, managed services & technology consulting firm in Frisco, Texas. We deliver expert IT talent, cloud solutions, and enterprise software to businesses across the USA and India. 4.9★ rated. Get a free consultation."
        canonical="/"
        keywords={["IT staffing company USA", "IT consulting Frisco Texas", "managed IT services", "technology solutions", "best staffing company USA", "software development company"]}
        jsonLd={homeJsonLd}
      />
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Banner */}
      <HomeStats />

      {/* 3. Core Services */}
      <ServicesHighlight />

      {/* 4. Client Testimonials */}
      <Testimonials />

      {/* 5. Powerful CTA */}
      <HomeCallToAction />
    </div>
  );
}

export default Home;
