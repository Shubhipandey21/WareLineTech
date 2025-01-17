import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import IndustryGrid from "@/components/Industries/Industries";
import IndustriesGrowthSection from "@/components/IndustriesGrowthSection/IndustriesGrowthSection";

export default function Industries() {
  return (
    <>
      <HeroSection
        bgImage="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=600"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="Empowering Industries with"
        headingFirstPart="innovative digital solutions,"
        headingLastPart="tailored to industry needs"
        subtext="TechAhead drives transformation across diverse sectors, delivering impactful solutions for startups and global brands alike."
        floatingImages={[
          "https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/5716042/pexels-photo-5716042.jpeg?auto=compress&cs=tinysrgb&w=600",
          "https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=600",
          
        ]}
      />
      <IndustryGrid />
      <FeaturedWork />
      <IndustriesGrowthSection />
      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Contact Us"
        highlightText="today!"
        highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
        buttonGradientFrom="#8a2be2"
        buttonGradientTo="#ff6347"
      />
    </>
  );
}
