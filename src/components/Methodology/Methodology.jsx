// components/MethodologySection.jsx
import React from 'react';

const MethodologySection = ({ heading, description, cards, gradient }) => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="max-w-7xl text-center px-6">
        <h2 className="text-3xl font-extrabold text-gray-900">{heading}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-3 w-full px-6 max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-gradient-to-b ${gradient} shadow-lg rounded-lg p-8 text-center text-black flex flex-col justify-between`}
            style={{ height: '600px' }}
          >
            <div className="text-4xl">{card.icon}</div>
            <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
            <p className="mt-2 text-lg">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MethodologySection;
