"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredWorks = [
  {
    tags: ["AI", "ClimateTech", "IoT", "Mobile App"],
    title:
      "We revitalized UK's leading smart home heating control manufacturer by deploying smart IoT solutions, reducing energy bills by 50%",
    metrics: [
      { value: "50%", label: "Reduction in energy bills" },
      { value: "15 times", label: "More engagement triggered" },
      {
        value: "32 zones",
        label: "Facilitated via mobile app, covering the entire home",
      },
    ],
    image:
      "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tags: ["EdTech", "Web App", "SaaS", "Analytics"],
    title:
      "Enabled the growth of an EdTech startup by creating an advanced SaaS platform, delivering 10x scalability.",
    metrics: [
      { value: "10x", label: "Scalability achieved" },
      { value: "98%", label: "Reduction in manual effort" },
      { value: "100k+", label: "Active users onboarded" },
    ],
    image:
      "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tags: ["FinTech", "Blockchain", "Mobile App"],
    title:
      "Built a secure blockchain-based FinTech app, streamlining international payments with enhanced transparency.",
    metrics: [
      { value: "70%", label: "Reduction in transaction time" },
      { value: "30%", label: "Cost savings on fees" },
      { value: "24/7", label: "Cross-border transaction support" },
    ],
    image:
      "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const FeaturedWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredWorks.length);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to select a specific slide
  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">
          FEATURED WORK
        </h2>
        <div className="text-3xl font-bold mb-4">
          Discover how we{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            transform visions into digital realities,
          </span>
        </div>
        <p className="text-xl text-gray-700">
          creating success stories that redefine industry benchmarks
        </p>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {featuredWorks[currentSlide].tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm border border-red-200 text-red-500 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <div className="text-2xl font-bold text-gray-800">
              {featuredWorks[currentSlide].title}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              {featuredWorks[currentSlide].metrics.map((metric, index) => (
                <div key={index} className="bg-red-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-gray-800">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Case Study Button */}
            <Link href="/case-studies" passHref>
  <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
    Case Study
    <ArrowRight className="ml-2 h-4 w-4" />
  </button>
</Link>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden bg-black">
            <img
              src={featuredWorks[currentSlide].image}
              alt="Featured Work"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredWorks.map((_, index) => (
            <button
              key={index}
              onClick={() => selectSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-purple-600"
                  : "bg-gray-300 hover:bg-purple-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
