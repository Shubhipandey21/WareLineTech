import React from "react";

const ContactUsSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
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
        <h2 className="text-sm font-bold text-gray-800 uppercase">Get In Touch</h2>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          Ready to <span className="text-purple-600">transform your vision</span> into reality?
        </h1>
        <p className="mt-4 text-gray-600">Let’s get started on your project!</p>
        <button className="px-6 py-3 mt-6 text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
          Request A Proposal
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;
