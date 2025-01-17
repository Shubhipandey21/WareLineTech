import {
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

export default function FlutterServices() {
    const carouselData = [
        {
            id: 1,
            title: "Custom Flutter App Development",
            description:
                "Design, develop, and deploy custom Flutter applications tailored to meet your business needs and user expectations.",
            icon: <FaCode />,
        },
        {
            id: 2,
            title: "Flutter App UI/UX Design",
            description:
                "Craft intuitive and user-friendly Flutter app designs that ensure seamless user experiences across devices.",
            icon: <FaMobileAlt />,
        },
        {
            id: 3,
            title: "App Maintenance and Support",
            description:
                "Offer ongoing support and maintenance to keep your Flutter apps running smoothly with regular updates and bug fixes.",
            icon: <FaCogs />,
        },
        {
            id: 4,
            title: "App Store Optimization (ASO)",
            description:
                "Boost your app’s visibility and downloads with expert App Store Optimization techniques to stand out on app stores.",
            icon: <FaSearch />,
        },
        {
            id: 5,
            title: "Flutter App Consultation",
            description:
                "Get expert advice and consultations to define your Flutter app's features, architecture, and launch strategy.",
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
        title: "Your Path to Flutter App Excellence",
        description:
            "Partner with us to create innovative Flutter apps that meet your business needs, ensuring scalability and long-term success.",
        items: [
            {
                icon: FaCode,
                title: "Discovery and Ideation",
                description:
                    "Collaborate with us to identify the unique features of your Flutter app, focusing on user needs and business goals.",
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
                    "Build robust, high-performance Flutter apps with modern frameworks and programming practices tailored to your business.",
            },
            {
                icon: FaCode,
                title: "Quality Assurance and Testing",
                description:
                    "Perform rigorous testing to ensure your Flutter app is bug-free, performs well, and offers a smooth experience across all devices.",
            },
            {
                icon: FaCode,
                title: "Launch and Post-Launch Support",
                description:
                    "Successfully deploy your app on app stores and offer post-launch support to ensure long-term success and improvements.",
            },
        ],
    };

    const features = [
        {
            id: 1,
            title: "Native-Like Flutter Solutions",
            description:
                "Develop Flutter apps that deliver native-like performance, reliability, and advanced features for superior user experiences.",
        },
        {
            id: 2,
            title: "User-Centric Design",
            description:
                "Create intuitive and visually appealing Flutter app interfaces that align with your brand and engage your users.",
        },
        {
            id: 3,
            title: "App Store Optimization",
            description:
                "Ensure your Flutter app ranks higher on app stores with ASO strategies, leading to more visibility and downloads.",
        },
        {
            id: 4,
            title: "End-to-End App Development",
            description:
                "From concept to launch and maintenance, we provide comprehensive Flutter app development services that cover every stage.",
        },
        {
            id: 5,
            title: "Cross-Platform Compatibility",
            description:
                "Ensure your Flutter app performs seamlessly on both Android and iOS devices, providing a consistent experience for users.",
        },
    ];

    const progressiveCarouselData = [
        {
            title: "Mobile App Development",
            description:
                "Build cutting-edge mobile applications with Flutter that offer high performance, advanced features, and smooth user interactions.",
            image: "https://i.pinimg.com/736x/27/5d/2f/275d2f2edeab40d1b332c78c4b818819.jpg",
        },
        {
            title: "Cloud Integration for Flutter Apps",
            description:
                "Leverage cloud technology to scale your Flutter app and manage data storage, ensuring high availability and performance.",
            image: "https://i.pinimg.com/736x/c3/2b/de/c32bde4da88b61811975e67fbaa2bc31.jpg",
        },
        {
            title: "Augmented Reality (AR) App Development",
            description:
                "Design and develop immersive AR experiences for Flutter that engage users with interactive and cutting-edge technology.",
            image: "https://i.pinimg.com/736x/c5/eb/0c/c5eb0cdf46379779dad728323c6ef9af.jpg",
        },
        {
            title: "App Performance Optimization",
            description:
                "Enhance the performance of your Flutter app, ensuring fast loading times, smooth animations, and high responsiveness.",
            image: "https://i.pinimg.com/736x/83/09/92/830992596142f8bbfcaafa20ab9fe36a.jpg",
        },
        {
            title: "Mobile App Security",
            description:
                "Implement advanced security measures to protect your Flutter apps from data breaches and ensure compliance with industry standards.",
            image: "https://i.pinimg.com/736x/d9/90/59/d9905958e523450c2768414fc651e43a.jpg",
        },
    ];

    const faqData = [
        {
            question: "How long does it take to develop a Flutter app?",
            answer:
                "The development timeline depends on the complexity and features of the app, but we ensure rapid prototyping and timely delivery.",
        },
        {
            question: "Do you offer post-launch support for Flutter apps?",
            answer:
                "Yes, we provide continuous support and maintenance services after the launch to ensure your app performs optimally.",
        },
        {
            question: "What industries do you serve with Flutter apps?",
            answer:
                "We serve various industries, including retail, healthcare, education, entertainment, and more, delivering tailored Flutter solutions.",
        },
        {
            question: "How can I improve my app’s visibility on app stores?",
            answer:
                "We specialize in App Store Optimization (ASO) to improve your app’s ranking and visibility, driving more organic downloads.",
        },
        {
            question: "Can you develop apps for both Android and iOS?",
            answer:
                "Yes, with Flutter, we offer cross-platform development services, ensuring your app works seamlessly on both Android and iOS devices.",
        },
    ];

    return (
        <>
            <HeroSection2
                backgroundImage="https://images.pexels.com/photos/7135057/pexels-photo-7135057.jpeg?auto=compress&cs=tinysrgb&w=600"
                buttonGradient="bg-gradient-to-r from-blue-500 to-purple-600"
                title="Transform Your Business with Custom Flutter Apps"
                description="Deliver seamless and innovative Flutter app solutions to enhance user experience and meet your business goals."
                imageSrc="https://images.pexels.com/photos/4467737/pexels-photo-4467737.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <AboutSection
                heading="Empowering Your Business with Flutter Apps"
                description="Unlock the potential of Flutter by leveraging our expertise in app development, design, and support to drive your business forward."
                imageSrc="/ServicesImages/flutter/FlutterAbout.jpg"
            />
            <Carousel
                title="Custom Flutter Solutions for Every Need"
                subtitle="Tailored to meet the unique demands of modern businesses."
                data={carouselData}
            />
            <ProgressiveCarousel
          mainHeading="Advanced Flutter Technologies for Business Growth"
          mainDescription="Explore the latest Flutter technologies that are transforming businesses worldwide."
          data={progressiveCarouselData}
          duration={5000}
        />
        <Roadmap
          title={roadmapData.title}
          description={roadmapData.description}
          items={roadmapData.items}
        />
        <Features
          heading="Why Choose Flutter App Development?"
          subheading="Empower Your Business with Cutting-Edge Flutter Solutions"
          description="Our Flutter development services ensure your app is optimized, secure, and designed for an exceptional user experience."
          features={features}
        />
        <FaqSection data={faqData} />
        <ContactUsSection
          title="Get in Touch with Our Flutter Experts"
          subtitle="We're Ready to Support Your Flutter App Development Needs"
          description="Contact us today to start your Flutter app development journey or for any inquiries about our services."
          buttonText="Contact Now"
          highlightText="schedule a consultation now!"
          highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
          buttonGradientFrom="#00c6ff"
          buttonGradientTo="#0072ff"
        />
      </>
    );
  }
