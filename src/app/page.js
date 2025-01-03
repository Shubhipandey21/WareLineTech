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
          question:
            "What types of development services does Wareline Tech offer?",
          answer:
            "While Wareline Tech started with app development, we have expanded our expertise to cover all forms of development, including mobile apps, web applications, enterprise software, custom APIs, and more. Whatever your digital needs, we provide end-to-end solutions tailored to your goals.",
        },
        {
          question: "How does Wareline Tech ensure project success?",
          answer:
            "We follow a meticulous 360° approach that involves understanding your business, designing user-centric solutions, leveraging the latest technologies, and maintaining transparent communication throughout the project lifecycle. This ensures timely delivery, high-quality outputs, and alignment with your vision.",
        },
        {
          question:
            "Does Wareline Tech provide support after project completion?",
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
      ]

  const slides = [
    {
      backgroundImage: "https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/12/04100036/home-banner-img.webp",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #6b73ff, #000dff",
      heading: "Transform Your Business",
      highlightText: "with AI",
      highlightTextColor: "text-purple-500",
      subtext: "Leverage our AI-powered solutions to scale your business efficiently.",
      smallText: "AI SOLUTIONS FOR ENTERPRISES",
    },
    {
      backgroundImage: "https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117275.jpg?semt=ais_hybrid",
      rightSideImage: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/08/29052547/home_slide_5.webp",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #00008B, #add8e6",
      heading: "Achieve Your Goals2",
      highlightText: "Efficiently",
      highlightTextColor: "text-red-500",
      subtext: "Discover our innovative solutions tailored to your needs.",
      smallText: "INNOVATION & TECHNOLOGY",
    },
    {
      backgroundImage: "https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/08/29052547/home_slide_5.webp",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #9d00ff, #feb47b",
      heading: "Achieve Your Goals3",
      highlightText: "Efficiently",
      highlightTextColor: "text-red-500",
      subtext: "Discover our innovative solutions tailored to your needs.",
      smallText: "INNOVATION & TECHNOLOGY",
    },
    {
      backgroundImage: "https://images.pexels.com/photos/7134986/pexels-photo-7134986.jpeg?auto=compress&cs=tinysrgb&w=600",
      rightSideImage: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/08/29052547/home_slide_5.webp",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, ##6395ee, #305cde",
      heading: "Achieve Your Goals4",
      highlightText: "Efficiently",
      highlightTextColor: "text-red-500",
      subtext: "Discover our innovative solutions tailored to your needs.",
      smallText: "INNOVATION & TECHNOLOGY",
    },
    {
      backgroundImage: "https://t4.ftcdn.net/jpg/04/10/97/01/240_F_410970129_lSm48mOmp1HnrP4vjXvrjs0u30mlZmtA.jpg",
      rightSideImage: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-878bc3b/tamediacdn.techaheadcorp.com/wp-content/uploads/2024/08/29052547/home_slide_5.webp",
      showButtons: true,
      button1Text: "Case Study",
      button1Color: "bg-black text-white",
      button1HoverColor: "hover:bg-gray-200 hover:text-black",
      button2Text: "Contact Us",
      button2Gradient: "to right, #f2b949, #ff13f0",
      heading: "Achieve Your Goals5",
      highlightText: "Efficiently",
      highlightTextColor: "text-red-500",
      subtext: "Discover our innovative solutions tailored to your needs.",
      smallText: "INNOVATION & TECHNOLOGY",
    },
  ];

  return (
    <div className="min-h-screen">
      <LandingPageHeroSection
        slides={slides}
      />
      <TestimonialSlider />
      <Solution />
     
      <Process />
      <FeaturedWork/>
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
