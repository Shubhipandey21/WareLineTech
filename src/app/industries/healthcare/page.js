import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import methodologyData from "@/Data/HealthCareMethodology.js";
import AboutSection from "@/components/AboutSection/AboutSection";

const content = {
  title: "This is why Techahead is the",
  highlight: "#1 Healthcare App Development Company",
  description:
    "From diagnosis to recovery, our healthcare app development services and tools ensure streamlined processes & enhanced communication, ensuring world-class healthcare services.",
  features: [
    {
      title: "AI-Powered Diagnostics",
      description: "We leverage artificial intelligence to enhance diagnostic accuracy and speed, improving patient outcomes and treatment efficiency.",
    },
    {
      title: "Seamless Interoperability",
      description: "Ensuring smooth data exchange between various healthcare systems, enabling comprehensive patient care and informed decision-making.",
    },
    {
      title: "Secure Telemedicine Solutions",
      description: "Developing robust, HIPAA-compliant telehealth platforms that expand access to quality healthcare services anytime, anywhere.",
    },
  ],
};

export default  function Healthcare() {
    return(
        <>

      <HeroSection2
        backgroundImage="/IndustriesImg/HealthCareBg.jpeg"
        buttonGradient="bg-gradient-to-r from-green-400 to-yellow-500"
        title="Insurance App Development Company"
        description="Partner with TechAhead, a leading Insurance App development company to transform insurance processes & drive efficiency and unmatched customer satisfaction"
        imageSrc="/IndustriesImg/HealthCareHero.png"
      />
       <AboutSection
        imageSrc="/IndustriesImg/HealthCareAbout.png" // Replace with your actual image path
        content={content}
      />
       <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
      />

      
   
</>
    )

}