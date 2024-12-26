import React from "react";

const HeroSection = ({ gradient, title, subtitle, buttonText, imageUrl }) => {
  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-16 lg:py-16 bg-gradient-to-r ${gradient} text-black`}
    >
      {/* Text Content */}
      <div className="flex-1 max-w-lg mb-8 lg:mb-0">
        <nav className="text-sm text-gray-500 mb-4">
          <span>Home</span> &gt; <span>Services</span> &gt; <span>Machine Learning Application Development</span>
        </nav>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-6">{subtitle}</p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 rounded text-white font-medium">
          {buttonText}
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src={imageUrl}
          alt="Hero Image"
          className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
