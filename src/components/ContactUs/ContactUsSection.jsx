import React from "react";
import Link from "next/link"; 

const ContactUsSection = ({
  title,
  subtitle,
  description,
  buttonText,
  highlightText,
  highlightGradient, // New prop for gradient colors of the highlighted text
  buttonGradientFrom, // New prop for button gradient start color
  buttonGradientTo, // New prop for button gradient end color
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[60vh] bg-white overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f8f8ff"
            fillOpacity="0.8"
            d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,149.3C672,160,768,128,864,133.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-bold text-gray-800 uppercase">{title}</h2>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {subtitle}
        </h1>
        <p className="mt-4 text-gray-600">
          {description}{" "}
          <span
            className={`bg-clip-text text-transparent font-bold`}
            style={{
              backgroundImage: `linear-gradient(to right, ${highlightGradient.from}, ${highlightGradient.to})`,
            }}
          >
            {highlightText}
          </span>
        </p>
        <Link href="/contact-us">
          <button
            className="px-6 py-3 mt-6 text-white rounded-full focus:outline-none focus:ring-2"
            style={{
              backgroundImage: `linear-gradient(to right, ${buttonGradientFrom}, ${buttonGradientTo})`,
            }}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactUsSection;
