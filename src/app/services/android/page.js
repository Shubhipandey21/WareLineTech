import {
    FaAndroid,
    FaMobileAlt,
    FaLaptop,
    FaTools,
    FaSearch,
    FaCogs,
    FaCode,
    FaProjectDiagram,
} from "react-icons/fa";

import Roadmap from "@/components/Roadmap/Roadmap";
import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import FaqSection from "@/components/FAQSection/FAQSection";
import Features from "@/components/Features/Features";
import Carousel from "@/components/Carousel/Carousel";
import ProgressiveCarousel from "@/components/ProgressiveCarousel/ProgressiveCarousel";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

export default function AndroidServices() {
    const carouselData = [
        {
            id: 1,
            title: "Custom Android App Development",
            description:
                "Design, develop, and deploy custom Android applications tailored to meet your business needs and user expectations.",
            icon: <FaAndroid />,
        },
        {
            id: 2,
            title: "Android App UI/UX Design",
            description:
                "Craft intuitive and user-friendly Android app designs that ensure seamless user experiences on smartphones and tablets.",
            icon: <FaMobileAlt />,
        },
        {
            id: 3,
            title: "App Maintenance and Support",
            description:
                "Offer ongoing support and maintenance to keep your Android apps running smoothly with regular updates and bug fixes.",
            icon: <FaCogs />,
        },
        {
            id: 4,
            title: "App Store Optimization (ASO)",
            description:
                "Boost your app’s visibility and downloads with expert App Store Optimization techniques to stand out on the Play Store.",
            icon: <FaSearch />,
        },
        {
            id: 5,
            title: "Android App Consultation",
            description:
                "Get expert advice and consultations to define your Android app's features, architecture, and launch strategy.",
            icon: <FaCode />,
        },
        {
            id: 6,
            title: "Cross-Platform Mobile Solutions",
            description:
                "Develop apps that work seamlessly across multiple platforms, ensuring consistent user experiences on Android and iOS.",
            icon: <FaTools />,
        },
    ];

    const roadmapData = {
        title: "Your Path to Android App Excellence",
        description:
            "Partner with us to create innovative Android apps that meet your business needs, ensuring scalability and long-term success.",
        items: [
            {
                icon: FaAndroid,
                title: "Discovery and Ideation",
                description:
                    "Collaborate with us to identify the unique features of your Android app, focusing on user needs and business goals.",
            },
            {
                icon: FaProjectDiagram,
                title: "Design and Prototyping",
                description:
                    "Develop design prototypes and UI/UX solutions that match the brand identity and provide an engaging user experience.",
            },
            {
                icon: FaLaptop,
                title: "App Development",
                description:
                    "Build robust, high-performance Android apps with modern frameworks and programming practices tailored to your business.",
            },
            {
                icon: FaCode,
                title: "Quality Assurance and Testing",
                description:
                    "Perform rigorous testing to ensure your Android app is bug-free, performs well, and offers a smooth experience across all devices.",
            },
            {
                icon: FaAndroid,
                title: "Launch and Post-Launch Support",
                description:
                    "Successfully deploy your app on the Play Store and offer post-launch support to ensure long-term success and improvements.",
            },
        ],
    };

    const features = [
        {
            id: 1,
            title: "Native Android Solutions",
            description:
                "Develop Android apps that are optimized for performance, reliability, and the latest Android features, offering superior user experiences.",
        },
        {
            id: 2,
            title: "User-Centric Design",
            description:
                "Create intuitive and visually appealing Android app interfaces that align with your brand and engage your users.",
        },
        {
            id: 3,
            title: "App Store Optimization",
            description:
                "Ensure your Android app ranks higher on the Play Store with ASO strategies, leading to more visibility and downloads.",
        },
        {
            id: 4,
            title: "End-to-End App Development",
            description:
                "From concept to launch and maintenance, we provide comprehensive Android app development services that cover every stage.",
        },
        {
            id: 5,
            title: "Cross-Device Compatibility",
            description:
                "Ensure your Android app performs seamlessly on all Android devices, including smartphones, tablets, and Android Wear.",
        },
    ];

    const progressiveCarouselData = [
        {
            title: "Mobile App Development",
            description:
                "Build cutting-edge mobile applications that offer high performance, advanced features, and smooth user interactions.",
            image: "/ServicesImages/Android/MobileApp.jpg",
        },
        {
            title: "Cloud Integration for Android Apps",
            description:
                "Leverage cloud technology to scale your Android app and manage data storage, ensuring high availability and performance.",
            image: "/ServicesImages/Android/CloudApp.jpg",
        },
        {
            title: "Augmented Reality (AR) App Development",
            description:
                "Design and develop immersive AR experiences for Android that engage users with interactive and cutting-edge technology.",
            image: "/ServicesImages/Android/ARApp.jpg",
        },
        {
            title: "App Performance Optimization",
            description:
                "Enhance the performance of your Android app, ensuring fast loading times, smooth animations, and high responsiveness.",
            image: "/ServicesImages/Android/AppPerformanceOptimaization.jpg",
        },
        {
            title: "Mobile App Security",
            description:
                "Implement advanced security measures to protect your Android apps from data breaches and ensure compliance with industry standards.",
            image: "/ServicesImages/Android/AppSecurity.jpg",
        },
    ];

    const faqData = [
        {
            question: "How long does it take to develop an Android app?",
            answer:
                "The development timeline depends on the complexity and features of the app, but we ensure rapid prototyping and timely delivery.",
        },
        {
            question: "Do you offer post-launch support for Android apps?",
            answer:
                "Yes, we provide continuous support and maintenance services after the launch to ensure your app performs optimally.",
        },
        {
            question: "What industries do you serve with Android apps?",
            answer:
                "We serve various industries, including retail, healthcare, education, entertainment, and more, delivering tailored Android solutions.",
        },
        {
            question: "How can I improve my app’s visibility on the Play Store?",
            answer:
                "We specialize in App Store Optimization (ASO) to improve your app’s ranking and visibility, driving more organic downloads.",
        },
        {
            question: "Can you develop apps for both Android and iOS?",
            answer:
                "Yes, we offer cross-platform development services, ensuring your app works seamlessly on both Android and iOS devices.",
        },
    ];

    return (
        <>
            <HeroSection2
                backgroundImage="/ServicesImages/Android/AndroidBG.jpeg"
                buttonGradient="bg-gradient-to-r from-green-500 to-blue-600"
                title="Transform Your Business with Custom Android Apps"
                description="Deliver seamless and innovative Android app solutions to enhance user experience and meet your business goals."
                imageSrc="/ServicesImages/Android/AndroidHero.jpg"
            />
            <AboutSection
                heading="Empowering Your Business with Android Apps"
                description="Unlock the potential of Android by leveraging our expertise in app development, design, and support to drive your business forward."
                imageSrc="/ServicesImages/Android/AndroidAbout.jpg"
            />
            <Carousel
                title="Custom Android Solutions for Every Need"
                subtitle="Tailored to meet the unique demands of modern businesses."
                data={carouselData}
            />
            <ProgressiveCarousel
          mainHeading="Advanced Android Technologies for Business Growth"
          mainDescription="Explore the latest Android technologies that are transforming businesses worldwide."
          data={progressiveCarouselData}
          duration={5000}
        />
        <Roadmap
          title={roadmapData.title}
          description={roadmapData.description}
          items={roadmapData.items}
        />
        <Features
          heading="Why Choose Android App Development?"
          subheading="Empower Your Business with Cutting-Edge Android Solutions"
          description="Our Android development services ensure your app is optimized, secure, and designed for an exceptional user experience."
          features={features}
        />
        <FaqSection data={faqData} />
        <ContactUsSection
          title="Get in Touch with Our Android Experts"
          subtitle="We're Ready to Support Your Android App Development Needs"
          description="Contact us today to start your Android app development journey or for any inquiries about our services."
          buttonText="Contact Now"
          highlightText="schedule a consultation now!"
          highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
          buttonGradientFrom="#00c6ff"
          buttonGradientTo="#0072ff"
        />
      </>
    );
  }

