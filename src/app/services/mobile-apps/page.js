import HeroSection from "@/components/ServicesHeroSection/ServicesHeroSection";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import Image from "next/image";
export default function MobileApps() {
    return (
      <>
        <HeroSection
          gradient="from-purple-200 to-slate-200"
          title="Transform Ideas into Intelligent Apps with ML Application Development Services"
          subtitle="Become Future-Ready with AI Applications Provided By ML Application Development Company"
          buttonText="Get a Free Quote"
          imageUrl="/ServicesImages/MobileAppsImg/MobileAppsHero.jpg" // Place the image in the public folder
        />
         <AboutSection
        title="Developing User-Centric Android Apps for Your Business"
        description="As a top mobile app development company, TechAhead excels in creating innovative mobile and web applications that transform how businesses connect with customers. Our development process maximizes user engagement and ensures high satisfaction. Partner with us, a leader among top Android app development companies, to create apps that inspire."
        image="/ServicesImages/MobileAppsImg/MobileApssAbout.png" // Update with the actual image path
        bgColor="#F9FAFB" // Example light gray background
      />
      </>
    )
}
  
