"use client";
import React from "react";
import Slider from "react-slick";

export default function Carousel({ title, subtitle, data, settings }) {
  // Default settings for the carousel
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 items
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    ...settings, // Allow custom settings to override defaults
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 items on medium screens
          arrows: false, // Optional: Hide arrows for better layout on smaller screens
        },
      },
      {
        breakpoint: 768, // Small screens (phones in landscape)
        settings: {
          slidesToShow: 1, // Show 1 item on smaller screens
          arrows: false,
        },
      },
      {
        breakpoint: 480, // Very small screens (phones in portrait)
        settings: {
          slidesToShow: 1, // Show 1 item on smaller screens
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white py-12 overflow-hidden">
      {title && <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>}
      {subtitle && (
        <p className="text-center mb-8 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="max-w-full mx-auto">
        <Slider {...defaultSettings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-center"
              style={{
                padding: "5px", // Reduced padding between cards
              }}
            >
              <div
                className="bg-gradient-to-b gap-9 from-gray-700 to-slate-800 rounded-md text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow mx-auto"
                style={{
                  width: "360px", // Increased card width
                  height: "450px", // Increased card height
                  padding: "32px", // Increased padding inside the cards
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="text-center mb-6 flex justify-center items-center"
                  style={{
                    width: "100px", // Increased circle diameter
                    height: "100px", // Increased circle diameter
                    borderRadius: "50%", // Make the div circular
                    backgroundColor: "#2D3748", // Circle background color
                    fontSize: "2.5rem", // Icon size
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
