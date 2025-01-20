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
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 to account for the duplicated first slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [screenSize, setScreenSize] = useState('large');

  // Prepare images with duplicates
  const extendedImages = [images[images.length - 1], ...images, images[0]];

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
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Reset position when reaching duplicate slides
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(images.length);
      }, 300); // Match transition duration
    } else if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300); // Match transition duration
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Match transition duration
    }
  }, [currentIndex, extendedImages.length, images.length]);

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
            transform: `translateX(-${currentIndex * (100 / getVisibleSlides())}%)`,
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none',
          }}
        >
          {extendedImages.map((src, index) => (
            <div
              key={index}
              className={`px-2 flex-shrink-0`}
              style={{ width: `${100 / getVisibleSlides()}%` }}
            >
              <img
                src={src}
                alt={`carousel-image-${index}`}
                className={`w-full h-full ${imageClassName}`}
              />
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default ImageCarousel;
