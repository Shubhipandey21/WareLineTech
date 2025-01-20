"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import ScheduleCall from "@/components/ScheduleCall/ScheduleCall";
import BenefitsSection from "@/components/Benefit/BenefitSection";
import DevTeam from "@/components/DevTeam/DevTeam";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

// Dynamically load the HeroSection component without SSR
const HireHeroSection = dynamic(
  () => import("@/components/HeroSection/HeroSection"),
  {
    ssr: false, // Disable server-side rendering for this component
  }
);

export default function HireDevelopers() {
  const [isClient, setIsClient] = useState(false);

  // Ensure that useEffect runs only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If the page is being rendered on the server, return a loading state
  if (!isClient) {
    return <div>Loading...</div>; // Or a custom loader
  }

  return (
    <>
      <HireHeroSection
        bgImage="/HireDeveloperImg/hireDevBG.jpeg" // Replace with your background image
        buttonColor="bg-black"
        buttonText="Start Your Project"
        headingHighlight="Innovating with"
        headingFirstPart=" cutting-edge technology solutions"
        headingLastPart=" to empower your business"
        subtext="Join hands with our expert developers to shape the future of your business with scalable and high-performance software solutions."
        floatingImages={[
          "/HireDeveloperImg/9.png", // Replace with your first image
          "/HireDeveloperImg/10.png", // Replace with your second image
          "/HireDeveloperImg/11.png", // Replace with your third image
        ]}
      />
      <DevTeam />
      <ScheduleCall />
      <ComparisonTable />
      <BenefitsSection />
      <ContactUsSection
        title="Get in Touch"
        subtitle="We'd be happy to assist you!"
        description="Contact us for any questions or inquiries about our cloud solutions."
        buttonText="Contact Now"
        highlightText="right now!"
        highlightGradient={{ from: "#8b5cf6", to: "#6d28d9" }}
        buttonGradientFrom="#8b5cf6"
        buttonGradientTo="#6d28d9"
      />
    </>
  );
}
