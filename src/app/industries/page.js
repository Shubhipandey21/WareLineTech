import FeaturedWork from "@/components/FeaturedWork/FeaturedWork"
import HeroSection from "@/components/HeroSection/HeroSection"
import ContactUsSection from "@/components/ContactUs/ContactUsSection"
import IndustryGrid from "@/components/Industries/Industries"

export default function Industries() {
    
    return (
        <>
            <HeroSection
                bgImage="/Case-study/CaseStudyBg.jpg"
                buttonColor="bg-black"
                buttonText="Get Started"
                headingHighlight="We craft tomorrow’s"
                headingFirstPart=" digital experiences products, and ventures"
                headingLastPart="Tailored for You"
                subtext="The Success Stories of TechAhead, that brought light to many Startups and Global Brands."
                floatingImages={[
                    "/Case-study/6.png",
                    "/Case-study/7.png",
                    "/Case-study/8.png",
                ]}
            />
            <IndustryGrid />
            <FeaturedWork />
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
    )
}