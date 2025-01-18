"use client";

import Link from "next/link";

const HeroSection = ({
  bgImage,
  buttonColor,
  buttonText,
  headingFirstPart,
  headingHighlight,
  headingLastPart,
  subtext,
  floatingImages = [],
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-bold mb-6">
            <span className="block mb-2">
              <span className="inline-block px-4 py-2 text-purple-600 bg-white rounded-lg">
                {headingHighlight}
              </span>
            </span>
            <span className="block mb-2 text-xl md:text-2xl lg:text-3xl">
              {headingFirstPart}
            </span>
            <span className="block text-black text-xl md:text-2xl lg:text-3xl">
              {headingLastPart}
            </span>
          </h1>

          {/* Optional Subtext */}
          {subtext && (
            <p className="text-base md:text-lg lg:text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
              {subtext}
            </p>
          )}

          {/* CTA Button */}
          <Link href="/services">
            <button
              className={`${buttonColor} text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              {buttonText}
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-4 w-16 h-16 md:w-24 md:h-24 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/4 right-4 w-20 h-20 md:w-28 md:h-28 bg-purple-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-pink-200/30 rounded-full blur-2xl"></div>

      {/* Floating Images */}
      <div className="absolute w-full h-full">
        {floatingImages.map((image, index) => {
          const positions = [
            { top: "75%", left: "10%" },
            { top: "80%", left: "60%" },
            { top: "85%", left: "40%" },
          ];

          const { top, left } = positions[index % positions.length];

          return (
            <img
              key={index}
              src={image}
              alt={`Floating Image ${index + 1}`}
              className="w-16 md:w-24 lg:w-32 h-auto transition-transform transform hover:scale-105 absolute"
              style={{
                top,
                left,
                animation: `float${index % 2 === 0 ? 1 : 2} 6s ease-in-out infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Floating Animations */}
      <style jsx>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
