'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        company: 'PUL',
        name: 'Miles Bowles',
        title: 'Chief Product Officer',
        quote: 'You guys helped us through challenging times as a company!',
        image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        company: 'Alliance Communication Services',
        name: 'Devin Tustin',
        title: 'President',
        quote: "You're a great team and I'm very happy with the product you guys produced",
        image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        company: 'Another Company',
        name: 'John Smith',
        title: 'CEO',
        quote: 'Exceptional service and outstanding results!',
        image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
];

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="w-full mx-auto px-4 sm:px-0">
            <div className="bg-gray-900 p-6 sm:p-8 rounded-none overflow-hidden">
                <div className="text-white mb-4">
                    <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8 ml-4 sm:ml-10 text-left">
                        REAL USERS, REAL TRANSFORMATION
                    </h1>
                    <p className="text-lg sm:text-4xl mb-4 sm:mb-6 text-left ml-4 sm:ml-10">
                        Discover how Wareline Tech has{' '}
                        <span className="text-purple-400">transformed businesses</span> with
                        exceptional user experience design, innovative app development,
                        cutting-edge product optimization, and dedicated ongoing support.
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-full flex-shrink-0 px-4"
                            >
                                <div className="bg-blue-900/30 p-4 sm:p-6 rounded-lg mx-auto max-w-md sm:max-w-5xl flex flex-col sm:flex-row items-center h-auto sm:h-[400px]">
                                    {/* Review Section */}
                                    <div className="flex-1 mb-4 sm:mb-0">
                                        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">
                                            {testimonial.company}
                                        </h3>
                                        <div className="text-white mb-4">
                                            <p className="font-bold text-lg sm:text-2xl">{testimonial.name}</p>
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
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-1 sm:p-2 text-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
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
