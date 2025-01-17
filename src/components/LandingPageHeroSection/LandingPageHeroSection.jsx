'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link

const LandingPageHeroSection = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      className="relative flex flex-col lg:flex-row min-h-[90vh] bg-white items-center justify-center"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Left Content Section */}
      <div className="lg:flex-[0.6] flex flex-col items-center lg:items-start justify-center p-4 lg:p-12 text-center lg:text-left">
        <div className="max-w-2xl space-y-6">
          {smallText && (
            <div className="inline-block px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-100 rounded-md">
              {smallText}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            {heading}{" "}
            <span className={`inline-block ${highlightTextColor}`}>
              {highlightText}
            </span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
            {subtext}
          </p>
          {showButtons && (
            <div className="flex flex-row gap-4 justify-center lg:justify-start">
              <Link href="/case-studies">
                <button
                  className={`px-6 py-3 text-sm sm:text-base rounded-full font-medium transform transition-transform duration-300 hover:scale-105 shadow-md ${button1Color} ${button1HoverColor}`}
                >
                  {button1Text}
                </button>
              </Link>
              <Link href="/contact-us">
                <button
                  className="px-6 py-3 text-sm sm:text-base rounded-full font-medium text-white shadow-md transform transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundImage: button2Gradient
                      ? `linear-gradient(${button2Gradient})`
                      : "none",
                  }}
                >
                  {button2Text}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:flex-[0.6] flex items-center justify-center p-4 lg:p-12">
        {rightSideImage && (
          <div className="max-w-lg w-full">
            <img
              src={rightSideImage}
              alt="Hero Right Side"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        )}
      </div>

      {/* Slider Bar and Pause Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        {/* Slider Dots */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${
                currentSlide === index ? "bg-sky-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Pause/Play Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          {isPaused ? (
            <span>&#9654;</span> // Play Icon (▶)
          ) : (
            <span>&#10073;&#10073;</span> // Pause Icon (||)
          )}
        </button>
      </div>
    </div>
  );
};

export default LandingPageHeroSection;
