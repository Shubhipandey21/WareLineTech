import React, { useState } from "react";

const Filter = ({
  selectedCategory,
  setSelectedCategory,
  selectedBadges,
  setSelectedBadges,
  handleCategoryChange,
  handleBadgeChange,
  availableBadges,
  availableCategories,
}) => {
  const [isBadgeDropdownOpen, setBadgeDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <section className="py-6 bg-gray-50 relative z-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8 relative">
        {/* Badge Filter */}
        <div className="relative w-full md:w-1/3">
          <div className="border border-gray-100 rounded-md shadow-sm">
            <div
              onClick={() => setBadgeDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center px-4 py-3 z-50 cursor-pointer bg-gray-100 hover:bg-gray-200"
            >
              <h3 className="text-black font-semibold">Badges</h3>
              <span className="text-xl text-black font-bold">{isBadgeDropdownOpen ? "-" : "+"}</span>
            </div>
            <div
              className={`absolute top-full left-0 w-full bg-white border border-gray-100 rounded-md shadow-md mt-2 transform transition-transform duration-300 ${
                isBadgeDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              } origin-top`}
            >
              <ul className="space-y-2 px-4 py-3">
                {availableBadges.map((badge) => (
                  <li key={badge} className="flex items-center">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={badge}
                        checked={selectedBadges.includes(badge)}
                        onChange={() => handleBadgeChange(badge)}
                      />
                      <span className="text-black">{badge}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      
        </div>

        {/* Category Filter */}
        <div className="relative w-full md:w-1/3">
          <div className="border border-gray-100 rounded-md shadow-sm">
            <div
              onClick={() => setCategoryDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
            >
              <h3 className="text-black font-semibold">Categories</h3>
              <span className="text-xl text-black font-bold">{isCategoryDropdownOpen ? "-" : "+"}</span>
            </div>
            <div
              className={`absolute top-full left-0 w-full bg-white border border-gray-100 rounded-md shadow-md mt-2 transform transition-transform duration-300 ${
                isCategoryDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              } origin-top`}
            >
              <ul className="space-y-2 px-4 py-3">
                {availableCategories.map((category) => (
                  <li key={category} className="flex items-center">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={category}
                        checked={selectedCategory.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="text-black">{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        
        </div>

        {/* Clear Filters */}
        <div className="w-full md:w-1/3">
          <button
            onClick={() => {
              setSelectedCategory([]);
              setSelectedBadges([]);
            }}
            className="w-full bg-white text-black px-4 py-3 rounded-md hover:bg-red-300"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filter;
