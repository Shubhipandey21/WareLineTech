'use client'

import React, { useState } from "react";
import HeroSection from "@/components/HeroSection/HeroSection";
import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBadges, setSelectedBadges] = useState([]);

  const cardsData = [
    {
      media: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/51/6d/9e/516d9ee3-6047-f76f-a165-b690b76743f2/01_EN_1290x2796.png/300x0w.webp",
      mediaType: "image",
      category: "IOS",
      badges: ["Mobile App", "HealthTech", "Tracking System"],
      heading: "Fitness App: Gym Workout Plan",
      subtext: "Whether you are trying to lose weight, gain muscle mass or want to have well-defined 6-pack abs – our gym planner fitness app offers full body workout plans with many free 3D exercises. You can choose from a variety of exercise plans targeted at specific muscle groups, such as chest workout, abs workout (stomach workout), arm workout and full body workout at home, or tailor them to a certain goal, such as fat burning workouts, conditioning workouts, or bodyweight workouts. This fitness app stands out from other free gym workout apps, as it has a gym progress tracker and a workout planner that allows you to have your own workout diary, maintain your workout routines",
      href: "https://apps.apple.com/us/app/fitness-app-gym-workout-plan/id1114387800",
    },
    {
      media: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource126/v4/30/ac/8d/30ac8da1-2782-5faf-a87c-999b54ce8978/8e83d573-8f68-404f-99f4-bed26c107bbf_Screenshot1.jpg/300x0w.webp",
      category: "Mobile App",
      mediaType: "image",
      badges: ["Mobile App", "IOS", "Android App", "Travel"],
      heading: "Atlanta Motor Speedway",
      subtext: "Welcome to the official app of the Atlanta Motor Speedway, bringing fans closer to the action and enriching your event experience. Get all the info you need for race day and beyond, plus exclusive content, and personalized offers and experiences. This is a mobile experience to help you find what you love whether it’s event information, special access, or offers and discounts.",
      href: "https://apps.apple.com/us/app/atlanta-motor-speedway/id549120407",
    },
    {
      media: "https://lykfit.com/wp-content/uploads/2023/09/Untitled-video-Made-with-Clipchamp-23-1-1.mp4",
      category: "Website",
      mediaType: "video",
      badges: ["Web App", "Fashion"],
      heading: "Lykfit",
      subtext: "Lykfit is an online ecommerce marketplace website for selling apparels, hoodies, t-shirts etc and our team have designed and developed via using Shopify, Jquery etc",
      href: "https://lykfit.com/",
    },
    {
      media: "https://play-lh.googleusercontent.com/OCNsOLc8N_aNj5Nvsmts2kO9KnRCfgLIEMpUSnzO2zA6s5HCDfipbN9vvzm2vsgk7g=w526-h296-rw",
      category: "Android App",
      mediaType: "image",
      badges: ["Android App","Mobile App", "Travel"],
      heading: "Track My Bus",
      subtext: "Track My Bus is a innovative solution by XSSecure to all users who are traveling by buses or having fleet of vehicles. Track my bus allow them to track their buses live from app and help them to set alert based on their Events",
      href: "https://play.google.com/store/apps/details?id=com.conjoinix.xssecure.trackmybus&hl=en",
    },
    {
      media: "https://play-lh.googleusercontent.com/GOMPhZ-3sJBloMbwEQN2bvaX0fYwNSB1vNPJOOqoghRJwG-x5V-S_4zjFiwJA2t4wQ=w526-h296-rw",
      category: "Android App",
      mediaType: "image",
      badges: ["Android App", "Mobile App", "Travel"],
      heading: "Charlotte Motor Speedway",
      subtext: "Welcome to the official app of the Charlotte Motor Speedway, bringing fans closer to the action and enriching your event experience. Get all the info you need for race day and beyond, plus exclusive content, and personalized offers and experiences. This is a mobile experience to help you find what you love whether it’s event information, special access, or offers and discounts. Powered by Uphoria.",
      href: "https://play.google.com/store/apps/details?id=com.sportinginnovations.smicms",
    },
    {
      media: "https://suntosolar.com.au/wp-content/uploads/2023/05/ss-2.png",
      category: "Website",
      mediaType: "image",
      badges: ["Web App", "IOT", "Construction"],
      heading: "Sun 2 Solar",
      subtext: "We drive the transition to more sustainable, reliable & affordable energy systems. With our innovative technologies, we energize society, that’s our aim!​",
      href: "https://suntosolar.com.au/",
    },
    {
      media: "https://www.dipmenu.com/media/banner/bf1e48731a3f9fd0a07a7105b0280254.png",
      category: "Website",
      mediaType: "image",
      badges: ["Web App", "Food", "Restaurant"],
      heading: "Velvet V cream",
      subtext: "In its current state, Velvet Cream is a symbol of adaptability, evolution, and experimentation. With a menu spanning an entire wall, one would be hard-pressed not to find something interesting. What began as a small burger shack after the war has grown and expanded. Today, Velvet Cream is a self-proclaimed Burger Bazaar and Ice Cream Emporium​",
      href: "https://www.dipmenu.com/",
    },
    {
      media: "https://www.amarisjewels.com/cdn/shop/files/logo_320x.svg?v=1726556300",
      category: "Website",
      mediaType: "image",
      badges: ["Web App", "Fashion", "E-commerce"],
      heading: "Amaris Jewels",
      subtext: "AMARIS is India's leading jewelry design house of precious jewellery with a touch of tradition and a long-standing reputation built on quality craftsmanship.​",
      href: "https://www.amarisjewels.com/",
    },
    {
      media: "https://gym.townmedialabs.com/wp-content/uploads/2022/11/logo.png",
      category: "Website",
      mediaType: "image",
      badges: ["Web App", "Fitness", "Nutrition"],
      heading: "Mysha Nutrition",
      subtext: "Build Your Muscle Mass.Blend of Potent natural ingredients​",
      href: "https://gym.townmedialabs.com/",
    },
    {
      media: "/Case-study/FashionWebsite.png",
      category: "UI/UX",
      mediaType: "image",
      badges: ["UI UX", "Fashion", "E-commerce"],
      heading: "Fashion Website",
      subtext: "UI UX of a Fashion Website.​",
      href: "https://www.behance.net/gallery/196894435/Fashion-Website",
    },
    {
      media: "/Case-study/AgencyWebsite.png",
      category: "UI/UX",
      mediaType: "image",
      badges: ["UI UX", "Agency"],
      heading: "Agency Website",
      subtext: "UI UX of a Agency Website.​",
      href: "https://www.behance.net/gallery/177286097/Agency-Website",
    },
  ];

  const availableCategories = [...new Set(cardsData.map((card) => card.category))];
  const availableBadges = [
    ...new Set(cardsData.flatMap((card) => card.badges)),
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleBadgeChange = (badge) => {
    setSelectedBadges((prev) =>
      prev.includes(badge)
        ? prev.filter((item) => item !== badge)
        : [...prev, badge]
    );
  };

  const filteredCards = cardsData.filter((card) => {
    const categoryMatch =
      selectedCategory.length === 0 || selectedCategory.includes(card.category);
    const badgesMatch =
      selectedBadges.length === 0 ||
      card.badges.some((badge) => selectedBadges.includes(badge));
    return categoryMatch && badgesMatch;
  });

  return (
    <section className="relative">
      <HeroSection
        bgImage="/Case-study/CaseStudyBg.jpg"
        buttonColor="bg-black"
        buttonText="Get Started"
        headingHighlight="We craft tomorrow’s"
        headingFirstPart=" digital experiences products, and ventures"
        headingLastPart="Tailored for You"
        subtext="The Success Stories of TechAhead, that brought light to many Startups and Global Brands."
        floatingImages={[
          "/Case-study/6.png",
          "/Case-study/7.png",
          "/Case-study/8.png",
        ]}
      />

      <div className="z-10 relative">

      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedBadges={selectedBadges}
        setSelectedBadges={setSelectedBadges}
        handleCategoryChange={handleCategoryChange}
        handleBadgeChange={handleBadgeChange}
        availableBadges={availableBadges}
        availableCategories={availableCategories}
      />
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredCards.map((card, index) => (
              <Card key={index} {...card} imageHeight="h-80" />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default CaseStudies;
