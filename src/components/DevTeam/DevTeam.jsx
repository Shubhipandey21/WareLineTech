"use client";
import { useState, useEffect } from "react";

const DevTeam = () => {
  const team = [
    {
      title: "Project Managers",
      description:
        "Oversee and guide the entire development process to guarantee project success.",
      badge: "End-to-End Project Leadership",
    },
    {
      title: "QA Engineers",
      description:
        "Guarantee flawless application performance with zero errors.",
      badge: "Seamless Application Functionality",
    },
    {
      title: "Business Analysts",
      description:
        "Uncover key data insights to enhance business and development strategies.",
      badge: "Data-Driven Decision Making",
    },
    {
      title: "Frontend Developers",
      description:
        "Craft visually appealing and user-friendly interfaces to ensure an exceptional user experience.",
      badge: "Pixel-Perfect UI Design",
    },
    {
      title: "Backend Developers",
      description:
        "Build robust and scalable server-side logic to support seamless application functionality.",
      badge: "Powerful Backend Architecture",
    },
    {
      title: "UI/UX Designers",
      description:
        "Design intuitive and visually engaging interfaces to maximize user satisfaction.",
      badge: "User-Centered Design Expertise",
    },
    {
      title: "DevOps Engineers",
      description:
        "Implement CI/CD pipelines and manage cloud infrastructure for efficient deployment and operations.",
      badge: "Efficient Deployment & Operations",
    },
    {
      title: "Database Administrators",
      description:
        "Ensure efficient data storage, retrieval, and security for seamless application performance.",
      badge: "Optimized Database Management",
    },
    {
      title: "Security Engineers",
      description:
        "Safeguard the application and data from vulnerabilities and cyber threats.",
      badge: "Fortified Security Measures",
    },
    {
      title: "Content Writers",
      description:
        "Create compelling and informative content to support user engagement and documentation.",
      badge: "Clear & Engaging Communication",
    },
    {
      title: "System Architects",
      description:
        "Design the overall system architecture to ensure scalability, performance, and maintainability.",
      badge: "Scalable System Design",
    },
  ];

  const [slides, setSlides] = useState([...team, ...team, ...team]);
  const [currentIndex, setCurrentIndex] = useState(team.length);

  const pastelColors = [
    "bg-pink-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-blue-100",
    "bg-teal-100",
    "bg-indigo-100",
    "bg-orange-100",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= slides.length - 1 ? team.length : prevIndex + 1
    );
  };

  const getVisibleSlides = () => {
    return window.innerWidth < 768 ? 1 : 3; // 1 card on small screens, 3 on larger screens
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-6 min-h-[70vh]">
      <h2 className="text-3xl font-extrabold text-center mb-10">
        Build Your Ideal Dev Team
      </h2>
      <h3 className="text-2xl md:text-2xl text-center font-semibold mb-12 text-black">
        What a typical software development team consists of
      </h3>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / getVisibleSlides()}%)`,
          }}
        >
          {slides.map((member, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full md:w-1/3 px-8 py-12 rounded-lg shadow-xl text-center ${
                pastelColors[index % pastelColors.length]
              }`}
            >
              <h3 className="text-xl font-bold mb-3">{member.title}</h3>
              <p className="text-sm text-gray-700 mb-5">{member.description}</p>
              <div className="inline-block bg-white text-gray-700 px-6 py-2 rounded-full text-sm font-medium shadow">
                {member.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevTeam;
