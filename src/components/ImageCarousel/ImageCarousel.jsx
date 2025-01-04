import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Auto-scroll the carousel every 5 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // 5 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Carousel container */}
            <div className="flex items-center justify-center w-full h-full">
                {/* Previous Button */}
                <button
                    className="absolute left-0 z-10 p-4 bg-gray-700 text-white rounded-full top-1/2 transform -translate-y-1/2"
                    onClick={handlePrev}
                >
                    &lt;
                </button>

                {/* Carousel images */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / 5}%)`, // Move 20% per image
                    }}
                >
                    {images.map((src, index) => {
                        // Determine the class for images based on their position
                        let classNames = "relative flex-shrink-0 mx-2 transition-all duration-500 ease-in-out";
                        
                        // For the center image, make it bigger
                        if (index === currentIndex) {
                            classNames += " scale-110"; // Scale up the center image
                        }

                        // For images to the left and right, shrink them a bit
                        if (index === (currentIndex + 1) % images.length || index === (currentIndex - 1 + images.length) % images.length) {
                            classNames += " scale-90"; // Scale down the left and right images
                        }

                        return (
                            <div key={index} className={`w-1/5 ${classNames}`}>
                                <img
                                    src={src}
                                    alt={`carousel-image-${index}`}
                                    className="w-full h-96 object-cover rounded-md shadow-lg"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Next Button */}
                <button
                    className="absolute right-0 z-10 p-4 bg-gray-700 text-white rounded-full top-1/2 transform -translate-y-1/2"
                    onClick={handleNext}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ImageCarousel;
