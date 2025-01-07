import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Expertise = ({
    title = "BREAK NEW GROUND",
    subtitle = "Our Expertise Across Platforms",
    description = "At TechAhead, we specialize in developing innovative solutions across a diverse range of platforms. Our expertise spans:",
    data = [],
    className = "",
    headerClassName = "",
    borderColor = "border-blue-500",
    navigationPosition = { bottom: "4", right: "4" },
    showNavigation = true,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);

    useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerSlide(3); // Large screens
            } else if (window.innerWidth >= 640) {
                setItemsPerSlide(2); // Medium screens
            } else {
                setItemsPerSlide(1); // Small screens
            }
        };

        updateItemsPerSlide();
        window.addEventListener('resize', updateItemsPerSlide);

        return () => window.removeEventListener('resize', updateItemsPerSlide);
    }, []);

    const totalSlides = Math.ceil(data.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 < 0 ? totalSlides - 1 : prev - 1));
    };

    if (!data.length) return null;

    return (
        <div className={`w-full mx-auto px-4 py-8 ${className}`}>
            {/* Header Section */}
            {(title || subtitle || description) && (
                <div className={`mb-8 ${headerClassName}`}>
                    {(title || subtitle) && (
                        <div className={`bg-white p-4 border-l-4 ${borderColor}`}>
                            {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
                            {subtitle && <h3 className="text-xl text-gray-700">{subtitle}</h3>}
                        </div>
                    )}
                    {description && <p className="mt-4 text-gray-600">{description}</p>}
                </div>
            )}

            {/* Cards Slider */}
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 gap-x-4"
                    style={{
                        transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
                    }}
                >
                    {data.map((item, index) => (
                        <div
                            key={item.id || index}
                            className="rounded-3xl overflow-hidden"
                            style={{
                                flex: `0 0 calc(${100 / itemsPerSlide}% - 1rem)`,
                            }}
                        >
                            {/* Main Image Section */}
                            <div
                                className="relative h-64 bg-gradient-to-b from-pink-100/50 to-pink-50/50 p-6"
                                style={{
                                    backgroundImage: `url(${item.bgImage || '/path/to/your/image.jpg'})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>

                            {/* Content Section */}
                            <div className="p-8">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    {item.icon && (
                                        <div className={`p-2 rounded-full ${item.iconBg || 'bg-pink-200/60'}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                    )}
                                    <h4 className="text-lg font-semibold">{item.title}</h4>
                                </div>

                                {/* Description */}
                                <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            {showNavigation && totalSlides > 1 && (
                <div
                    className="flex justify-center gap-4 mt-4"
                    style={{
                        marginTop: `${navigationPosition.bottom}rem`,
                    }}
                >
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Expertise;
