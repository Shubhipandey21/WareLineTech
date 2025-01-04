"use client";
import React from "react";
import Slider from "react-slick";

export default function Carousel({ title, subtitle, data, settings }) {
  // Default settings for the carousel
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjusted to fit larger cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ...settings, // Allow custom settings to override defaults
  };

  return (
    <div className="bg-gray-900 text-white py-12">
      {title && <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>}
      {subtitle && (
        <p className="text-center mb-8 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="max-w-6xl mx-auto">
        <Slider {...defaultSettings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center"
              style={{
                padding: "10px 20px", // Added more padding for spacing between cards
              }}
            >
              <div
                className="bg-gradient-to-b gap-6 from-gray-700 to-slate-800 rounded-md text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow"
                style={{
                  width: "320px", // Increased card width
                  height: "400px", // Increased card height
                  padding: "24px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="text-center mb-6 flex justify-center items-center"
                  style={{
                    width: "90px", // Circle diameter
                    height: "90px", // Circle diameter
                    borderRadius: "50%", // Make the div circular
                    backgroundColor: "#2D3748", // Circle background color
                    fontSize: "2rem", // Icon size (adjust as needed)
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
