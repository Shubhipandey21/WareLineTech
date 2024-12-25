import React from "react";

const AboutSection = ({ title, description, image, bgColor }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center p-8 lg:p-16`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <img
          src={image}
          alt="About Section Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutSection;
