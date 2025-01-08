import React, { useState } from 'react';

const TechStack = ({
  title = { main: 'Our Preferred', highlight: 'Tech Stack' },
  categories = [],
  sections = [],
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || null); // Default to the first category

  // Filter sections based on the selected category
  const filteredSections = sections.filter(
    (section) => section.categoryId === selectedCategory
  );

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 py-16 ${className}`}>
      {/* Title Section */}
      <h2 className="text-center text-4xl font-medium text-gray-800 mb-16">
        {title.main} <span className="font-bold">{title.highlight}</span>
      </h2>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="flex justify-between items-center mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`text-center relative cursor-pointer ${
                selectedCategory === category.id ? 'text-indigo-500 font-bold' : 'text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <h3 className="text-xl">{category.name}</h3>
              {selectedCategory === category.id && (
                <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tech Sections */}
      {filteredSections.length > 0 ? (
        <div className="space-y-16">
          {filteredSections.map((section) => (
            <div key={section.categoryId} className="space-y-8">
              {/* Core Technologies and Frameworks in a Flex Container */}
              <div className="flex space-x-16">
                {/* Core Technologies Section */}
                {section.coreTechnologies.length > 0 && (
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-700 mb-4">Core Technologies</h4>
                    <div className="grid grid-cols-4 gap-8">
                      {section.coreTechnologies.map((item) => (
                        <div key={item.name} className="flex flex-col items-center space-y-2">
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img
                              src={item.icon}
                              alt={`${item.name} icon`}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Frameworks Section */}
                {section.frameworks.length > 0 && (
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-700 mb-4">Frameworks</h4>
                    <div className="grid grid-cols-4 gap-8">
                      {section.frameworks.map((item) => (
                        <div key={item.name} className="flex flex-col items-center space-y-2">
                          <div className="w-16 h-16 flex items-center justify-center">
                            <img
                              src={item.icon}
                              alt={`${item.name} icon`}
                              className="w-12 h-12 object-contain"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No technologies available for this category.</p>
      )}
    </div>
  );
};

export default TechStack;
