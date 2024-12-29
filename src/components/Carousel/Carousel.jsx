"use client";
import React from "react";
import Slider from "react-slick";
import { carouselData } from "../../Data/MobileAppCarouselData";

export default function Carousel() {
    const settings = {
        dots: true, // Show pagination dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed in ms
        slidesToShow: 4, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in ms
      };
    
      return (
        <div className="bg-gray-900 text-white py-12">
          <h2 className="text-center text-3xl font-bold mb-6">Innovate at Scale</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            At <span className="text-blue-500">WarelineTech</span>, we recognize that
            successfully launching an MVP is just the first step in your journey
            toward success. Now, it’s time to propel your product to greater
            heights.
          </p>
          <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
              {carouselData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center"
                  style={{
                    padding: "0 15px", // Add spacing between cards
                  }}
                >
                  <div
                    className="bg-gray-800 rounded-md text-center flex flex-col items-center"
                    style={{
                      width: "280px", // Fixed width for cards
                      height: "350px", // Fixed height for cards
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
    