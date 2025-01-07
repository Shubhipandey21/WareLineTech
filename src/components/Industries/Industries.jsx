import React from 'react';
import {
  Code,
  PenTool,
  Video,
  BookOpen,
  LineChart,
  Globe,
  ShoppingBag,
  MessageSquare
} from 'lucide-react';

const IndustryGrid = () => {
  const industries = [
    { name: 'Web Development', icon: Code },
    { name: 'Graphic Design', icon: PenTool },
    { name: 'Video Editing', icon: Video },
    { name: 'Content Writing', icon: BookOpen },
    { name: 'Digital Marketing', icon: LineChart },
    { name: 'SEO Services', icon: Globe },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Social Media', icon: MessageSquare },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900">Industries We Serve</h2>
        <p className="text-gray-600 mt-2">Specialized solutions for diverse business needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-6 
                         transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:border-blue-100 hover:-translate-y-1
                         cursor-pointer flex flex-col items-center justify-center
                         space-y-4"
            >
              <Icon className="w-8 h-8 text-blue-400" />
              <h3 className="text-gray-900 font-medium text-lg text-center">
                {industry.name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryGrid;