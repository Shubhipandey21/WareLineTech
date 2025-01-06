// components/MethodologySection.jsx
import React from 'react';

const MethodologySection = ({ heading, description, cards, gradient }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-16 px-4">
      <div className="max-w-7xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
          {description}
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${gradient} shadow-lg rounded-lg p-6 sm:p-8 text-center text-black flex flex-col`}
          >
            <div className="text-3xl sm:text-4xl">{card.icon}</div>
            <h3 className="mt-4 text-xl sm:text-2xl font-semibold">
              {card.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MethodologySection;
