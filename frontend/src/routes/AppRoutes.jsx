import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import WhoWeAre from "../pages/WhoWeAre";
import OurLeaders from "../pages/OurLeaders";
import OurSolutions from "../pages/OurSolutions";
import ITConsulting from "../pages/ITConsulting";
import ManagedServices from "../pages/ManagedServices";
import RPO from "../pages/RPO";
import SoftwareDevelopment from "../pages/SoftwareDevelopment";
import Gallery from "../pages/Gallery";
import PrivacyPolicy from "../pages/Policy";
import TermsOfService from "../pages/TermsOfService";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/who-we-are" element={<WhoWeAre />} />
      <Route path="/who-we-are/our-leaders" element={<OurLeaders />} />

      {/* plural routes */}
      <Route path="/our-solutions" element={<OurSolutions />} />
      <Route path="/our-solutions/it-consulting" element={<ITConsulting />} />
      <Route path="/our-solutions/managed-services" element={<ManagedServices />} />
      <Route path="/our-solutions/rpo" element={<RPO />} />
      <Route path="/our-solutions/software-development" element={<SoftwareDevelopment />} />
      {/* singular aliases — used by Header nav */}
      <Route path="/our-solution" element={<OurSolutions />} />
      <Route path="/our-solution/it-consulting" element={<ITConsulting />} />
      <Route path="/our-solution/managed-services" element={<ManagedServices />} />
      <Route path="/our-solution/rpo" element={<RPO />} />
      <Route path="/our-solution/software-development" element={<SoftwareDevelopment />} />

      <Route path="/gallery" element={<Gallery />} />

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  );
}

export default AppRoutes;
