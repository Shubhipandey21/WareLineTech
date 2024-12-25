import React from 'react';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import Card from "@/components/Card/Card";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <HeroSection 
                bgImage="https://images.pexels.com/photos/28186188/pexels-photo-28186188/free-photo-of-a-woman-with-an-umbrella-standing-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                buttonColor="bg-yellow-600"
                buttonText="Let's Talk"
                headingFirstPart="Digital Transformation"
                headingHighlight="fuelled"
                headingLastPart="growth across different industries & sectors"
                subtext="Transform your business with our innovative digital solutions across multiple domains"
            />

            {/* Portfolio Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Portfolio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our innovative solutions across different industries
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* IoT Smart Home Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="IoT"
                            badges={["Mobile App", "IoT", "ClimateTech"]}
                            heading="IoT-Powered Smart Homes"
                            subtext="We Leveraged IoT, Human-Centric Design & Powerful Tech To Bring A Never Seen Before Smart Home Solution."
                            href="/portfolio/smart-homes"
                        />

                        {/* Healthcare Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="Healthcare"
                            badges={["Mobile App", "AI", "HealthTech"]}
                            heading="AI-Powered Health Monitoring"
                            subtext="Revolutionizing patient care with real-time health monitoring and predictive analytics."
                            href="/portfolio/health-monitoring"
                        />

                        {/* Education Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="Education"
                            badges={["Web App", "EdTech", "AI"]}
                            heading="Smart Learning Platform"
                            subtext="Personalized learning experiences powered by AI and advanced analytics."
                            href="/portfolio/smart-learning"
                        />

                        {/* Fintech Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="Fintech"
                            badges={["Web App", "Mobile App", "Blockchain"]}
                            heading="Digital Banking Solution"
                            subtext="Next-generation banking platform with seamless integration of traditional and crypto assets."
                            href="/portfolio/digital-banking"
                        />

                        {/* E-commerce Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="E-commerce"
                            badges={["Mobile App", "Web App", "UI/UX"]}
                            heading="Smart Retail Platform"
                            subtext="Omnichannel retail solution with AI-powered inventory management and personalized shopping experience."
                            href="/portfolio/smart-retail"
                        />

                        {/* Manufacturing Card */}
                        <Card
                            image="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            category="Manufacturing"
                            badges={["IoT", "AI", "Industrial"]}
                            heading="Smart Factory System"
                            subtext="Industry 4.0 solution with real-time monitoring, predictive maintenance, and automated quality control."
                            href="/portfolio/smart-factory"
                        />
                    </div>
                </div>
            </section>

            <ContactUsSection />
            <Footer />
        </div>
    );
}