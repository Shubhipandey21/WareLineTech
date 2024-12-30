import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FAQSection from "@/components/FAQSection/FAQSection";
import Process from "@/components/Process/Process";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Process />
            <FAQSection />
            <ContactUsSection />
        </div>
    );
}