import React from 'react';

const Card = ({ 
  media,           // Can be an image or a video URL
  mediaType = "image", // "image" or "video" to define the type of media
  category, 
  badges = [], 
  heading, 
  subtext,
  href = "#"
}) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-102 group">
      {/* Category */}
      <div className="px-4 pt-4">
        <span className="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-[#dadff1] rounded-full">
          {category}
        </span>
      </div>

      {/* Media Container */}
      <a href={href} className="block mt-4 px-4 relative">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          {mediaType === "video" ? (
            <video 
              src={media} 
              alt={heading} 
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              autoPlay 
              loop 
              muted // Optional: mute the video
            />
          ) : (
            <img 
              src={media} 
              alt={heading} 
              className="object-contain w-full h-full transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>

        {/* "Explore" Circle Hover Button */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={href} 
            className="w-24 h-24 flex justify-center items-center bg-gray-600 bg-opacity-50 text-white text-lg font-semibold rounded-full"
          >
            Explore
          </a>
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
        <h2 className="text-xl font-bold text-gray-900 hover:text-gray-400">
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
