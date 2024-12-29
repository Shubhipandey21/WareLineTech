import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import Carousel from "@/components/Carousel/Carousel";
export default function MobileApps() {
    return (
      <>
        
        <HeroSection
        bgImage="https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/10/15052418/bg@2x.png"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="We craft tomorrow’s"
        headingFirstPart=" digital experiences products, and ventures"
        headingLastPart="Tailored for You"
        subtext="The Success Stories of TechAhead, that brought light to many Startups and Global Brands."
        floatingImages={[
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054608/Group-16898@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054607/Group-16897@2x.png",
          "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-b8cf3a0/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/07/29054605/Group-16896@2x.png",
        ]}
      />
         <AboutSection
        title="Developing User-Centric Android Apps for Your Business"
        description="As a top mobile app development company, TechAhead excels in creating innovative mobile and web applications that transform how businesses connect with customers. Our development process maximizes user engagement and ensures high satisfaction. Partner with us, a leader among top Android app development companies, to create apps that inspire."
        image="/ServicesImages/MobileAppsImg/MobileApssAbout.png" // Update with the actual image path
        bgColor="#F9FAFB" // Example light gray background
      />
        <Carousel />
      </>
    )
  }