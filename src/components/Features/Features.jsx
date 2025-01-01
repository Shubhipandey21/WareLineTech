"use client";
import { useState } from "react";

const Features = ({ heading, subheading, description, features }) => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] p-8 bg-gray-50">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left md:mr-8 max-w-lg">
        <h2 className="text-pink-500 uppercase font-bold text-sm">{subheading}</h2>
        <h1 className="text-3xl font-bold mt-4 leading-snug">
          {heading}
        </h1>
        <p className="text-gray-600 mt-6">
          {description}
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 max-w-md mt-10 md:mt-0">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`border px-6 py-4 mb-4 rounded-lg cursor-pointer shadow transition-all duration-300 ease-in-out ${
              activeFeature === feature.id
                ? "bg-pink-100 border-pink-500"
                : "bg-white hover:bg-gray-100"
            }`}
            onMouseEnter={() => setActiveFeature(feature.id)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <h3 className="font-bold text-lg">
              {feature.id}. {feature.title}
            </h3>
            <p
              className={`text-sm text-gray-600 mt-2 transition-opacity duration-300 ease-in-out ${
                activeFeature === feature.id ? "opacity-100" : "opacity-0 h-0"
              }`}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
