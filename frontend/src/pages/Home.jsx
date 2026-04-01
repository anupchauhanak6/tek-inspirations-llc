import React from "react";
import Hero from "../components/Hero";
import HomeStats from "../components/HomeStats";
import ServicesHighlight from "../components/ServicesHighlight";
import Testimonials from "../components/Testimonials";
import HomeCallToAction from "../components/HomeCallToAction";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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
