'use client';

import React from 'react';
import Image from 'next/image';

const TeamBanner = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('career-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full mb-16 bg-white">
      {/* Text Section */}
      <div className="py-12 px-4 ml-12">
        <h1 className="text-6xl md:text-5xl font-medium leading-tight text-black">
          Ignite your inner fire, unfurl a <br />
          boundless future of endless potential
        </h1>
        <button
          onClick={scrollToForm}
          className="mt-6 bg-red-500 text-white font-bold px-6 py-3 rounded-full transition-transform hover:scale-105 flex items-center justify-center"
        >
          Let’s Talk{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Image Section */}
      
    </div>
  );
};

export default TeamBanner;
