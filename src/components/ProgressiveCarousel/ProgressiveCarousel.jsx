"use client";

import { useState, useEffect } from "react";

const ProgressiveCarousel = ({
  data,
  mainHeading,
  mainDescription,
  heading,
  subheading,
  duration = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current slide
  const [progress, setProgress] = useState(0); // Tracks the progress bar
  const [isAnimating, setIsAnimating] = useState(true); // Ensures smooth transitions
  useEffect(() => {
    // Function to handle slide transition
    const transitionSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to the next slide or loop back
    };
  
    if (isAnimating) {
      let progress = 0; // Local progress state
      const progressInterval = setInterval(() => {
        progress += 100 / (duration / 50); // Increment progress locally
        if (progress >= 100) {
          progress = 0; // Reset progress locally
          transitionSlide(); // Move to the next slide
        }
        setProgress(progress); // Update the progress state
      }, 50);
  
      return () => clearInterval(progressInterval); // Cleanup interval on unmount
    }
  }, [data.length, duration, isAnimating]);

  const handleManualSelection = (index) => {
    setIsAnimating(false); // Pause automatic transitions
    setCurrentIndex(index); // Move to selected slide
    setProgress(0); // Reset progress bar
    setTimeout(() => setIsAnimating(true), 500); // Resume animation after a short delay
  };

  const { title, description, image } = data[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto p-8 flex flex-col min-h-[90vh] items-center">
      {/* Main Heading and Description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">{mainHeading}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {mainDescription}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left Section: Dropdown and Text */}
        <div className="flex-1 w-full max-w-md px-4">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <p className="text-gray-600">{subheading}</p>
          </div>

          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  onClick={() => handleManualSelection(index)} // Handle manual selection
                  className={`text-left w-full text-lg font-medium focus:outline-none hover:text-blue-600 ${
                    index === currentIndex ? "text-blue-600" : ""
                  }`}
                >
                  {item.title}
                </button>
                {currentIndex === index && (
                  <div className="mt-4 text-gray-600">
                    <p>{item.description}</p>
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded mt-4 overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-blue-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex items-center justify-center max-w-lg px-4 mt-8 md:mt-0">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressiveCarousel;
