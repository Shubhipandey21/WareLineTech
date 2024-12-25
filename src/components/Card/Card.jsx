import React from 'react';

const Card = ({ 
  image, 
  category, 
  badges = [], 
  heading, 
  subtext,
  href = "#"
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-102">
      {/* Category */}
      <div className="px-4 pt-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-[#dadff1] rounded-full">
          {category}
        </span>
      </div>

      {/* Image Container */}
      <a href={href} className="block mt-4 px-4">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={heading}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </a>

      {/* Badges */}
      <div className="px-4 mt-4">
        <ul className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <li 
              key={index}
              className="px-3 py-1 text-sm font-medium text-gray-400 bg-blue-50 rounded-full"
            >
              {badge}
            </li>
          ))}
        </ul>
      </div>

      {/* Heading */}
      <div className="px-4 mt-4">
        <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600">
          <a href={href}>{heading}</a>
        </h2>
      </div>

      {/* Subtext */}
      <div className="px-4 py-4">
        <p className="text-gray-600">
          <a href={href}>{subtext}</a>
        </p>
      </div>
    </div>
  );
};


export default Card;