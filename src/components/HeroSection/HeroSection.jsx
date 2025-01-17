"use client";

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
          <h1 className="text-4xl text-black md:text-5xl lg:text-6xl font-bold mb-6">
            
            <span className="block mb-2">
              <span className="inline-block px-4 py-2 text-purple-600 rounded-lg">
                {headingHighlight}
              </span>
            </span>
            <span className="block mb-2">{headingFirstPart}</span>
            <span className="block text-black">{headingLastPart}</span>
          </h1>

          {/* Optional Subtext */}
          {subtext && (
            <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
              {subtext}
            </p>
          )}

          {/* CTA Button */}
          <button
            className={`${buttonColor} text-white px-8 py-3 rounded-full font-medium 
            transform transition-transform duration-300 hover:scale-105 
            shadow-lg hover:shadow-xl`}
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-pink-200/30 rounded-full blur-2xl"></div>

      {/* Floating Images */}
      <div className="absolute w-full h-full">
        {floatingImages.map((image, index) => {
          const positions = [
            { top: "70%", left: "15%" }, // First image
            { top: "70%", left: "70%" }, // Second image
            { top: "78%", left: "45%" }, // Third image
          ];

          const { top, left } = positions[index % positions.length];

          return (
            <img
              key={index}
              src={image}
              alt={`Floating Image ${index + 1}`}
              className="w-24 md:w-32 lg:w-56 h-auto transition-transform transform hover:scale-105 absolute"
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
