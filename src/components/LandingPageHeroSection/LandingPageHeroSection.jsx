'use client';

import React, { useState, useEffect } from 'react';

const LandingPageHeroSection = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to control pause/play

  // Automatically cycle through slides
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [slides.length, isPaused]);

  const {
    backgroundImage = "",
    rightSideImage = "",
    showButtons = false,
    button1Text = "Button 1",
    button1Color = "bg-black text-white",
    button1HoverColor = "hover:bg-gray-800",
    button2Text = "Button 2",
    button2Gradient = "",
    heading = "Default Heading",
    highlightText = "Highlight Text",
    highlightTextColor = "text-purple-500",
    subtext = "Default Subtext",
    smallText = "Small Text Above Heading",
  } = slides[currentSlide] || {};

  return (
    <div
      className="relative flex flex-col lg:flex-row min-h-screen bg-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content Section */}
      <div className="flex-1 p-4 sm:p-6 lg:p-12 flex flex-col justify-center text-center lg:text-left">
        <div className="max-w-xl">
          {smallText && (
            <div className="inline-block px-3 py-1 mb-4 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 rounded-md">
              {smallText}
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {heading}{" "}
            <span className={`inline-block px-2 ${highlightTextColor}`}>
              {highlightText}
            </span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6">
            {subtext}
          </p>
          {showButtons && (
            <div className="flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
              <button
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${button1Color} ${button1HoverColor}`}
              >
                {button1Text}
              </button>
              <button
                className={`text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-bold transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
                style={{
                  backgroundImage: button2Gradient
                    ? `linear-gradient(${button2Gradient})`
                    : "none",
                }}
              >
                {button2Text}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 p-4 sm:p-6 lg:p-12 flex items-center justify-center bg-white rounded-t-[30px] lg:rounded-l-[100px] overflow-hidden">
        <div className="max-w-md">
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src={rightSideImage}
              alt="Hero Right Side"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Slider Bar and Pause Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        {/* Slider Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-sky-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 transition"
        >
          {isPaused ? (
            <span>&#9654;</span> // Play Icon (▶)
          ) : (
            <span>&#10073;&#10073;</span> // Pause Icon (||)
          )}
        </button>
      </div>

      {/* Styles for fade-in animation */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPageHeroSection;
