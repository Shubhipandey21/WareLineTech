import React from "react";
import LandingPageHeroSection from "@/components/LandingPageHeroSection/LandingPageHeroSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import Process from "@/components/Process/Process";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import Solution from "@/components/Solution/Solution";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";

export default function Home() {
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

  const slides = [
    {
      backgroundImage:
        "https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg?semt=ais_hybrid",
      rightSideImage: "/LandingpgImg/3.png",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #00008B, #add8e6",
      heading: "Unmatched Experience Awaits",
      highlightText: "With Ease",
      highlightTextColor: "text-blue-500",
      subtext:
        "Discover services crafted to elevate your business with seamless efficiency, unparalleled support, and outstanding performance.",

      smallText: "INNOVATION & TECHNOLOGY",
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "/LandingpgImg/2.png",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #6b73ff, #000dff",
      heading: "Transform Your Business",
      highlightText: "with AI",
      highlightTextColor: "text-purple-500",
      subtext:
        "Leverage our AI-powered solutions to scale your business efficiently.",
      smallText: "AI SOLUTIONS FOR ENTERPRISES",
    },
    
    {
      backgroundImage:
        "https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "/LandingpgImg/4.png",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #9d00ff, #feb47b",
      heading: "Maximize Savings Effortlessly",
      highlightText: "Smartly",
      highlightTextColor: "text-green-500",
      subtext:
        "Our app has empowered customers to cut costs and optimize resources effectively. Join them today and unlock your savings potential!",

      smallText: "INNOVATION & TECHNOLOGY",
    },
    {
      backgroundImage:
        "https://images.pexels.com/photos/7134986/pexels-photo-7134986.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "/LandingpgImg/5.png",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, ##6395ee, #305cde",
      heading: "Elevate with Enterprise-Level Solutions",
      highlightText: "Seamlessly",
      highlightTextColor: "text-blue-500",
      subtext:
        "Equip your business with innovative tools designed to enhance efficiency, scalability, and performance at every level.",

      smallText: "INNOVATION & TECHNOLOGY",
    },
  ];

  return (
    <div className="min-h-screen">
      <LandingPageHeroSection slides={slides} />
      <TestimonialSlider />
      <Solution />
      <Process />
      <FeaturedWork />
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
    </div>
  );
}
