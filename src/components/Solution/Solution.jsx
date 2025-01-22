import React from "react";
import Link from "next/link";

const Solution = () => {
  const solutions = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6">
          <circle
            cx="12"
            cy="12"
            r="10"
            className="stroke-purple-400 fill-none"
          />
          <path d="M9 12h6m-3-3v6" className="stroke-purple-400 stroke-2" />
        </svg>
      ),
      title: "I have an app idea",
      description: "I need to transform my vision into a market-ready product.",
      gradient: "bg-gradient-to-br from-pink-500/10 to-purple-500/10",
      link: "/services", // Link for the first card
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6">
          <circle
            cx="12"
            cy="12"
            r="10"
            className="stroke-purple-400 fill-none"
          />
          <path
            d="M8 14s1.5 2 4 2 4-2 4-2"
            className="stroke-purple-400 stroke-2"
          />
          <circle cx="9" cy="9" r="1" className="fill-purple-400" />
          <circle cx="15" cy="9" r="1" className="fill-purple-400" />
        </svg>
      ),
      title: "I need a team",
      description: "I want to hire top-tier developers for my project.",
      gradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
      link: "/hire-developers", // Link for the second card
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6">
          <circle
            cx="12"
            cy="12"
            r="10"
            className="stroke-purple-400 fill-none"
          />
          <path d="M7 13l3 3 7-7" className="stroke-purple-400 stroke-2" />
        </svg>
      ),
      title: "I need to optimize my app",
      description:
        "I want to optimize and maintain my app for peak performance.",
      gradient: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10",
      link: "/services", // Link for the third card
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h3 className="text-sm font-bold tracking-wider text-gray-600 uppercase mb-4">
          SELECT YOUR BESPOKE SOLUTION
        </h3>
        <h2 className="text-3xl font-bold mb-4">
          Choose your path to{" "}
          <span className="text-gray-900">digital success</span>
        </h2>
        <p className="text-xl text-gray-600">
          Whether ideating, scaling, or optimizing, we've got you covered with
          our expert solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 ${solution.gradient} border border-gray-200 hover:shadow-lg transition-shadow duration-300`}
          >
            {solution.icon}
            <h3 className="text-xl font-bold mb-4 text-center">
              {solution.title}
            </h3>
            <p className="text-gray-600 text-center mb-8">
              {solution.description}
            </p>
            <div className="flex justify-center">
              <Link href={solution.link} passHref>
                <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200">
                  Get started
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
