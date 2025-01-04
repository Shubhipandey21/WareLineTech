import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ 
  images,
  autoPlayInterval = 5000,
  className = "w-full relative overflow-hidden",
  height = "h-[500px]",
  imageClassName = "object-cover rounded-lg shadow-lg",
  buttonClassName = "absolute z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors duration-300",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [screenSize, setScreenSize] = useState('large');

  // Screen size breakpoints
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('small');
      } else if (window.innerWidth < 1024) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get number of visible slides based on screen size
  const getVisibleSlides = () => {
    switch (screenSize) {
      case 'small':
        return 1;
      case 'medium':
        return 3;
      case 'large':
        return 5;
      default:
        return 5;
    }
  };

  // Get slide width percentage based on visible slides
  const getSlideWidth = () => {
    const visibleSlides = getVisibleSlides();
    return 100 / visibleSlides;
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className={`${className} ${height}`}>
      <div 
        className="h-full w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images container */}
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out relative"
          style={{
            transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`
          }}
        >
          {images.map((src, index) => {
            // Calculate styles based on position and screen size
            const isCenter = index === currentIndex;
            const isAdjacent = (
              index === (currentIndex + 1) % images.length || 
              index === (currentIndex - 1 + images.length) % images.length
            );

            return (
              <div
                key={index}
                className={`
                  transition-all duration-500
                  px-2
                  flex-shrink-0
                  ${screenSize === 'small' ? 'w-full' : 
                    screenSize === 'medium' ? 'w-1/3' : 'w-1/5'}
                  ${screenSize !== 'small' && isCenter ? 'scale-105' : ''}
                  ${screenSize !== 'small' && isAdjacent ? 'scale-95' : ''}
                `}
                style={{ width: `${100 / getVisibleSlides()}%` }}
              >
                <img
                  src={src}
                  alt={`carousel-image-${index}`}
                  className={`
                    w-full h-full
                    transition-opacity duration-300
                    ${imageClassName}
                  `}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation buttons */}
        <button
          className={`${buttonClassName} left-4 top-1/2 -translate-y-1/2`}
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          className={`${buttonClassName} right-4 top-1/2 -translate-y-1/2`}
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots navigation (only for mobile) */}
        {screenSize === 'small' && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 
                  ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCarousel;
