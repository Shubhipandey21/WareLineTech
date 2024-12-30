import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
export default function MobileApps() {
  const carouselData = [
 
    {
      id: 1,
      title: "iOS App Development",
      description:
        "WarelineTech specializes in crafting exceptional iOS applications, making us the preferred choice for businesses targeting Apple users. Our experienced team develops top-notch, user-friendly apps adhering to Apple's stringent guidelines. We assist you through every stage, from initial concept to a successful App Store launch.",
      icon: "fas fa-apple", // iOS icon
    },
    {
      id: 2,
      title: "Android App Development",
      description:
        "WarelineTech excels in Android app development, providing innovative solutions that dominate Google Play Store. Our team delivers sleek, high-performing applications that captivate users and enhance business reach with cutting-edge functionality.",
      icon: "fab fa-android", // Android icon
    },
    {
      id: 3,
      title: "React Native App Development",
      description:
        "With expertise in React Native, WarelineTech builds versatile, platform-agnostic applications. Our developers create visually stunning, high-performing apps that work seamlessly on both iOS and Android devices, ensuring a unified user experience.",
      icon: "fas fa-code-branch", // React Native icon (branching represents multi-platform)
    },
    {
      id: 4,
      title: "Flutter App Development",
      description:
        "WarelineTech leverages the power of Flutter to create fast, scalable, and multi-platform mobile applications. Our solutions deliver a seamless user experience and help businesses expand their reach without compromising on quality or performance.",
      icon: "fas fa-layer-group", // Flutter icon (layering represents Flutter's widgets)
    },
    {
      id: 5,
      title: "dApp Development",
      description:
        "WarelineTech’s team of experts focuses on building secure, scalable, and decentralized applications for industries like gaming, healthcare, and finance. We transform your ideas into reliable, user-centric applications that provide exceptional experiences for users worldwide.",
      icon: "fas fa-lock", // dApp icon (lock for security)
    },
    {
      id: 6,
      title: "Cross-Platform Apps",
      description:
        "WarelineTech develops cross-platform applications that streamline maintenance and enhance performance. By integrating native and web technologies, we create apps that deliver a consistent experience across all devices, ensuring broad audience engagement without sacrificing quality.",
      icon: "fas fa-sync-alt", // Cross-platform icon (sync represents cross-platform compatibility)
    },
    {
      id: 7,
      title: "Progressive Web Apps",
      description:
        "WarelineTech’s Progressive Web App (PWA) solutions merge the benefits of native apps with the flexibility of web technologies. PWAs are fast, reliable, and engaging, offering seamless digital experiences across devices and enabling businesses to captivate audiences with high performance and accessibility.",
      icon: "fas fa-globe", // PWA icon (globe for web apps)
    },
  ];
  
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
       <Carousel
        title="Innovate at Scale"
        subtitle="At WarelineTech, we recognize that successfully launching an MVP is just the first step in your journey toward success. Now, it’s time to propel your product to greater heights."
        data={carouselData}
       
      />
     
      </>
    )
  }