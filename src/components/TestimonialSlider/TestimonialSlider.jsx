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
        <div className="w-screen mx-auto px-0">
            <div className="bg-gray-900 p-8 rounded-none">
                <div className="text-white mb-4">
                    <h1 className="text-2xl font-bold mb-8 ml-10 text-left">REAL USERS, REAL TRANSFORMATION</h1>
                    <p className="text-4xl mb-6 text-left ml-10">
                        Discover how TechAhead has{' '}
                        <span className="text-purple-400">transformed businesses</span> with
                        exceptional user experience design, innovative app development,
                        cutting-edge product optimization, and dedicated ongoing support.
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="w-screen flex-shrink-0 px-8"
                            >
                                <div className="bg-blue-900/30 p-6 rounded-lg mx-auto max-w-5xl flex items-center h-[400px]">
                                    {/* Review Section */}
                                    <div className="flex-1">
                                        <h3 className="text-white text-3xl font-bold mb-2">{testimonial.company}</h3>
                                        <div className="text-white  mb-4">
                                            <p className="font-bold text-2xl">{testimonial.name}</p>
                                            <p className="text-gray-400 text-xl mb-2">{testimonial.title}</p>
                                            <p className="text-white">"{testimonial.quote}"</p>
                                        </div>
                                    </div>
                                    {/* Image Section */}
                                    <div className="flex-shrink-0 ml-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.company}
                                            className="w-96 h-96 rounded-lg object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 text-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-2 text-white"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
