"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "PUL",
    name: "Rohan Sharma",
    title: "Founder & CEO",
    quote: `I had the pleasure of working with Wareline Technologies on developing a mobile app for my grocery delivery business, and I couldn't be happier with the outcome. The app is user-friendly, visually appealing, and has significantly streamlined our operations. The team at Wareline truly understood our needs and delivered a product that exceeded our expectations. Their attention to detail and commitment to quality is commendable. I highly recommend them for anyone looking to develop a top-notch mobile application.`,
    image:
      "https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    company: "Alliance Communication Services",
    name: "Anaya",
    title: "Founder & CEO",
    quote: `Working with WarelineTech to create the ChicWear app was an absolute pleasure! They understood my vision perfectly and delivered an app that is both stylish and incredibly functional. The seamless shopping experience has not only delighted my customers but also boosted my sales. Special thanks to the project manager for keeping everything on track and the IT developers for their exceptional work. I highly recommend WarelineTech for anyone looking to bring their business online!`,
    image:
      "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    company: "Another Company",
    name: "Emma",
    title: "Founder & CEO",
    quote: `Partnering with WarelineTech to create our eCommerce platform was a game-changer for our coffee brand! They developed a sleek, user-friendly website that perfectly showcases our unique blends and makes online shopping a breeze for our customers. The team's attention to detail and commitment to our vision were unmatched. Since launching, we've seen a significant increase in traffic and sales. If you're looking for a team that truly understands your brand and delivers exceptional results, WarelineTech is the way to go!`,
    image:
      "https://images.pexels.com/photos/8871904/pexels-photo-8871904.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Start at the first real slide (index 1)
  const [isTransitioning, setIsTransitioning] = useState(false);

  const duplicatedSlides = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToNextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }
  };

  const goToPrevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((prev) => prev - 1);
      setIsTransitioning(true);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentSlide === 0) {
      // If we're at the fake first slide, jump to the real last slide
      setCurrentSlide(testimonials.length);
    } else if (currentSlide === duplicatedSlides.length - 1) {
      // If we're at the fake last slide, jump to the real first slide
      setCurrentSlide(1);
    }
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-0">
      <div className="bg-gray-900 p-6 sm:p-8 rounded-none overflow-hidden">
        <div className="text-white mb-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 ml-4 sm:ml-10 text-left">
            REAL USERS, REAL TRANSFORMATION
          </h1>
          <p className="text-lg sm:text-4xl mb-4 sm:mb-6 text-left ml-4 sm:ml-10">
            Discover how Wareline Tech has{" "}
            <span className="text-purple-400">transformed businesses</span> with
            innovative app development and ongoing support.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isTransitioning ? "" : "transition-none"
            }`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {duplicatedSlides.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-blue-900/30 p-4 sm:p-6 rounded-lg mx-auto max-w-md sm:max-w-5xl flex flex-col sm:flex-row items-center h-auto sm:h-[400px]">
                  {/* Review Section */}
                  <div className="flex-1 mb-4 sm:mb-0">
                    <div className="text-white mb-4">
                      <p className="font-bold text-lg sm:text-2xl">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-sm sm:text-xl mb-2">
                        {testimonial.title}
                      </p>
                      <p className="text-white">"{testimonial.quote}"</p>
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="flex-shrink-0 sm:ml-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.company}
                      className="w-48 h-48 sm:w-96 sm:h-96 rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-1 sm:p-2 text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-1 sm:p-2 text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
