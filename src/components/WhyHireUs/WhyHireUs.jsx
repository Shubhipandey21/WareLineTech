import React from 'react';

const WhyHireUs = ({
  // Section title props
  title = "WHY SHOULD YOU HIRE TECHAHEAD DEVELOPERS?",
  titleClassName = "text-center text-2xl font-bold mb-8",
  
  // Subtitle props
  subtitleStart = "For over 15 years, we've built",
  highlightText = "2000+ apps",
  subtitleEnd = "and portals, impacting millions.",
  subtitleClassName = "text-center text-4xl font-normal mb-16",
  highlightClassName = "bg-black text-white px-3 py-1 mx-2",
  
  // Cards container props
  cardsContainerClassName = "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 ",
  
  // Card props
  cards = [],
  cardClassName = "relative p-8 rounded-3xl bg-gradient-to-br from-pink-100 via-white to-blue-100 border border-blue-300",
  
  // Section container props
  className = "py-16 px-4",
}) => {
  return (
    <section className={className}>
      {/* Main title */}
      <h2 className={titleClassName}>{title}</h2>
      
      {/* Subtitle with highlight */}
      <p className={subtitleClassName}>
        {subtitleStart}
        <span className={highlightClassName}>{highlightText}</span>
        {subtitleEnd}
      </p>
      
      {/* Cards grid */}
      <div className={cardsContainerClassName}>
        {cards.map((card, index) => (
          <div key={index} className={cardClassName}>
            {/* Numbered circle */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 rounded-full border-2 border-blue-400 bg-white flex items-center justify-center">
                <span className="text-lg font-semibold text-blue-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
            
            {/* Card content */}
            <div className="mt-8 text-center">
              <h3 className="font-semibold text-xl mb-4">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default WhyHireUs;