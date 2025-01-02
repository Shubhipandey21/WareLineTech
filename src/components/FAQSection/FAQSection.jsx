'use client';
import React, { useState } from "react";

const FaqSection = ({ data }) => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
      <div className="max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-700">
            <button
              className="flex justify-between items-center w-full py-3 text-left text-xl"
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span className="text-2xl">{openQuestion === index ? "-" : "+"}</span>
            </button>
            {openQuestion === index && (
              <div className="pl-4 pb-3 text-gray-300 transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
