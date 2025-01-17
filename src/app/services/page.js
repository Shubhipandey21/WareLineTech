"use client";

import HeroSection from "@/components/HeroSection/HeroSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import Expertise from "@/components/Expertise/Expertise";
import TechStack from "@/components/TechStack/TechStack";
import { Monitor, Smartphone, Tablet } from "lucide-react";

export default function Services() {
  const faqData = [
    {
      question: "How long has Wareline Tech been in the business?",
      answer:
        "Wareline Tech has been empowering businesses with innovative technology solutions for over 5 years. Our experience spans working with startups, established brands, and enterprises across various industries, delivering impactful digital solutions.",
    },
    {
      question: "What types of development services does Wareline Tech offer?",
      answer:
        "While Wareline Tech started with app development, we have expanded our expertise to cover all forms of development, including mobile apps, web applications, enterprise software, custom APIs, and more. Whatever your digital needs, we provide end-to-end solutions tailored to your goals.",
    },
    {
      question: "How does Wareline Tech ensure project success?",
      answer:
        "We follow a meticulous 360° approach that involves understanding your business, designing user-centric solutions, leveraging the latest technologies, and maintaining transparent communication throughout the project lifecycle. This ensures timely delivery, high-quality outputs, and alignment with your vision.",
    },
    {
      question: "Does Wareline Tech provide support after project completion?",
      answer:
        "Yes, we offer comprehensive post-project support, including maintenance, updates, bug fixes, and performance optimizations. Our goal is to ensure your solution remains functional, secure, and up-to-date as your business grows.",
    },
    {
      question: "What industries does Wareline Tech specialize in?",
      answer:
        "Wareline Tech has worked across diverse industries, including healthcare, education, e-commerce, finance, logistics, entertainment, and more. Our team specializes in adapting to the unique needs and challenges of various sectors to deliver customized solutions.",
    },
    {
      question: "How can I start a project with Wareline Tech?",
      answer:
        "Starting a project with Wareline Tech is simple! Reach out to us via our contact page or email. We'll schedule a consultation to discuss your needs, goals, and project requirements. From there, we'll create a tailored proposal to kickstart your journey with us.",
    },
    {
      question:
        "What is Wareline Tech's approach to client communication during a project?",
      answer:
        "At Wareline Tech, we prioritize transparent and regular communication. We assign a dedicated project manager to keep you updated on progress, gather feedback, and address any concerns. Additionally, we use tools like Slack, Trello, or email for seamless collaboration throughout the project.",
    },
  ];

  const expertiseData = [
    {
      id: 1,
      title: "Mobile App Development",
      description:
        "Create innovative and user-friendly mobile applications for iOS and Android.",
      bgImage: "./ServicesImages/smartphone.png", // Replace with your image URL
      icon: Smartphone,
      iconBg: "bg-blue-100",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Design and develop responsive and high-performance web applications.",
      bgImage: "./ServicesImages/web.png", // Replace with your image URL
      icon: Monitor,
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      title: "Cloud",
      description:
        "Build custom solutions for tablet devices tailored to your needs.",
      bgImage: "./ServicesImages/cloud.png", // Replace with your image URL
      icon: Tablet,
      iconBg: "bg-yellow-100",
    },
    {
      id: 4,
      title: "IoT Development",
      description: "Leverage the power of IoT with our cutting-edge solutions.",
      bgImage:
        "https://images.pexels.com/photos/28674408/pexels-photo-28674408/free-photo-of-historic-clock-tower-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with your image URL
      icon: Smartphone,
      iconBg: "bg-purple-100",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Craft intuitive and visually appealing interfaces for better engagement.",
      bgImage:
        "https://images.pexels.com/photos/29714309/pexels-photo-29714309/free-photo-of-majestic-iguazu-falls-in-lush-argentinian-jungle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with your image URL
      icon: Monitor,
      iconBg: "bg-pink-100",
    },
    {
      id: 6,
      title: "Digital Transformation",
      description:
        "Enable businesses to transform digitally with innovative solutions.",
      bgImage:
        "https://images.pexels.com/photos/29714309/pexels-photo-29714309/free-photo-of-majestic-iguazu-falls-in-lush-argentinian-jungle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", // Replace with your image URL
      icon: Tablet,
      iconBg: "bg-orange-100",
    },
  ];

  const techStackProps = {
    title: {
      main: "Explore Our",
      highlight: "Technology Stack",
    },
    categories: [
      { id: 1, name: "Frontend" },
      { id: 2, name: "Backend" },
      { id: 3, name: "Database" },
      { id: 4, name: "Cloud Storage" },
    ],
    sections: [
      {
        categoryId: 1, // Frontend
        coreTechnologies: [
          {
            name: "HTML",
            icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
          },
          {
            name: "CSS",
            icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
          },
          {
            name: "JavaScript",
            icon: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
          },
        ],
        frameworks: [
          {
            name: "React",
            icon: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
          },
          {
            name: "Vue.js",
            icon: "https://cdn-icons-png.flaticon.com/128/15484/15484278.png",
          },
          {
            name: "Angular",
            icon: "https://cdn-icons-png.flaticon.com/128/15484/15484402.png",
          },
        ],
      },
      {
        categoryId: 2, // Backend
        coreTechnologies: [
          {
            name: "Node.js",
            icon: "https://cdn-icons-png.flaticon.com/128/15380/15380914.png",
          },
          {
            name: "Java",
            icon: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
          },
          {
            name: "Python",
            icon: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
          },
        ],
        frameworks: [
          {
            name: "Express.js",
            icon: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png",
          },
          {
            name: "Django",
            icon: "https://icon.icepanel.io/Technology/png-shadow-512/Django.png",
          },
          {
            name: "Spring Boot",
            icon: "https://icon.icepanel.io/Technology/svg/Spring.svg",
          },
        ],
      },
      {
        categoryId: 3, // Database
        coreTechnologies: [
          {
            name: "MySQL",
            icon: "https://cdn-icons-png.flaticon.com/128/1199/1199128.png",
          },
          {
            name: "PostgreSQL",
            icon: "https://cdn-icons-png.flaticon.com/128/10464/10464247.png",
          },
          {
            name: "MongoDB",
            icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
          },
        ],
        frameworks: [
          {
            name: "Prisma",
            icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
          },
          {
            name: "Sequelize",
            icon: "https://icon.icepanel.io/Technology/svg/Sequelize.svg",
          },
        ],
      },
      {
        categoryId: 4, // Cloud Storage
        coreTechnologies: [
          {
            name: "AWS",
            icon: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
          },
          {
            name: "Google Cloud Storage",
            icon: "https://icon.icepanel.io/Technology/svg/Google-Cloud.svg",
          },
        ],
        frameworks: [
          {
            name: "Terraform",
            icon: "https://icon.icepanel.io/Technology/svg/HashiCorp-Terraform.svg",
          },
        ],
      },
    ],
  };

  return (
    <>
      <HeroSection
        bgImage="/Case-study/CaseStudyBg.jpg"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="Our Expertise in"
        headingFirstPart=" Cutting-Edge Technology Solutions"
        headingLastPart="Empowering Your Business"
        subtext="Explore our comprehensive services designed to drive innovation and deliver exceptional results for businesses worldwide."
        floatingImages={[
          "/Case-study/6.png",
          "/Case-study/7.png",
          "/Case-study/8.png",
        ]}
      />

      <Expertise
        title="Explore Our Expertise"
        subtitle="Transforming Businesses Across Platforms"
        description="Discover how we deliver excellence through innovative solutions and advanced technology."
        data={expertiseData}
        borderColor="border-purple-500"
        className="bg-white shadow-lg rounded-xl"
        headerClassName="text-center"
        showNavigation={true}
        navigationPosition={{ bottom: 4, right: 8 }}
      />

      <FeaturedWork />

      <TechStack {...techStackProps} />
      <FAQSection data={faqData} />
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
