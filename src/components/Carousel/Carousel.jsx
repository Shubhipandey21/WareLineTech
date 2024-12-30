"use client";
import React from "react";
import Slider from "react-slick";

export default function Carousel({ title, subtitle, data, settings }) {
  // Default settings for the carousel
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
                padding: "0 15px",
              }}
            >
              <div
                className="bg-gradient-to-b from-gray-700  to-slate-800  rounded-md text-center flex flex-col items-center"
                style={{
                  width: "280px",
                  height: "350px",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <div className="text-5xl text-center mb-4">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
