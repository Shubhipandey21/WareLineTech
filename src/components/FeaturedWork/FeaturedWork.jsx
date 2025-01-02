import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedWork = () => {
  const tags = ['AI', 'ClimateTech', 'IoT', 'Mobile App'];
  const metrics = [
    { value: '50%', label: 'Reduction in energy bills' },
    { value: '15 times', label: 'More engagement triggered' },
    { value: '32 zones', label: 'Facilitated via mobile app, covering the entire home' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-gray-800 uppercase mb-4">
          FEATURED WORK
        </h2>
        <div className="text-3xl font-bold mb-4">
          Discover how we{' '}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            transform visions into digital realities,
          </span>
        </div>
        <p className="text-xl text-gray-700">
          creating success stories that redefine industry benchmarks
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm border border-red-200 text-red-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main text */}
          <div className="text-2xl font-bold text-gray-800">
            We revitalized UK's leading smart home heating control manufacturer by deploying smart IoT solutions, reducing energy bills by 50%
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-red-50 p-4 rounded-lg">
                <div className="text-xl font-bold text-gray-800">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Button */}
          <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
            Case Study
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative rounded-2xl overflow-hidden bg-black">
          <img
            src="/api/placeholder/800/600"
            alt="Earth view at night"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl">neo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;