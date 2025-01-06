"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection/HeroSection";
import ScheduleCall from "@/components/ScheduleCall/ScheduleCall";
import BenefitsSection from "@/components/Benefit/BenefitSection";
import DevTeam from "@/components/DevTeam/DevTeam";
import ComparisonTable from "@/components/ComparisonTable/ComparisonTable";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const HireHeroSection = dynamic(() => import('@/components/HeroSection/HeroSection'), {
  ssr: false, // Disable server-side rendering for this component
});
export default function HireDevelopers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only in the browser after the component mounts
    setIsClient(true);
  }, []);

  // If not client-side, return nothing or a loading indicator
  if (!isClient) {
    return null; // Or a loading spinner
  }
  return (
    <>
      <HireHeroSection
        bgImage="https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/10/15052418/bg@2x.png"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="We craft tomorrow’s"
        headingFirstPart=" digital experiences products, and ventures"
        headingLastPart="Tailored for You"
        subtext="The Success Stories of WarelineTech, that brought light to many Startups and Global Brands."
        floatingImages={[
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054608/Group-16898@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054607/Group-16897@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054605/Group-16896@2x.png",
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
        highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
        buttonGradientFrom="#00c6ff"
        buttonGradientTo="#0072ff"
      />
    </>
  );
}
