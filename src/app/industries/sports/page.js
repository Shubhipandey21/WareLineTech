import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Sports App Development Company",
  description:
    "From player performance tracking to fan engagement, our sports app development services ensure innovative solutions, seamless communication, and data-driven insights, driving success and growth in the sports industry.",
  features: [
    {
      title: "Custom Sports Solutions",
      description:
        "We design user-friendly platforms tailored to the sports industry, enabling streamlined operations, enhanced fan experiences, and efficient team management.",
    },
    {
      title: "Real-Time Performance Analytics",
      description:
        "Leverage technology to monitor player performance, analyze game statistics, and provide actionable insights in real time.",
    },
    {
      title: "Fan Engagement Platforms",
      description:
        "Integrate engaging platforms for fans to connect with teams, access exclusive content, and participate in live events, enhancing loyalty and interaction.",
    },
  ],
};

const carouselData = [
  {
    icon: "⚽",
    title: "Custom Sports Solutions",
    description:
      "Develop tailored solutions for team management, event coordination, and fan engagement, ensuring superior outcomes for sports organizations.",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description:
      "Gain insights into player performance and team strategies through advanced analytics tools, enabling data-driven decisions.",
  },
  {
    icon: "📱",
    title: "Mobile Sports Apps",
    description:
      "Build intuitive mobile apps that provide real-time updates, fan interactions, and player statistics on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Data Management",
    description:
      "Streamline data storage and sharing with secure systems, improving collaboration and protecting sensitive information.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during high-traffic events.",
  },
  {
    icon: "🎯",
    title: "Event Management Tools",
    description:
      "Connect seamlessly with tools for scheduling, ticketing, and live event streaming to create a unified ecosystem.",
  },
  {
    icon: "📈",
    title: "Fan Engagement Insights",
    description:
      "Monitor and improve fan engagement with detailed metrics and reporting capabilities.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for sports app development?",
    answer:
      "WarelineTech provides comprehensive sports app development services, including performance analytics, fan engagement platforms, event management tools, and mobile app solutions.",
  },
  {
    question: "How can sports app development services benefit my organization?",
    answer:
      "Our services enhance team performance, improve fan engagement, streamline operations, and provide real-time insights, ensuring success in the sports industry.",
  },
  {
    question: "Do you develop sports apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops sports solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my sports app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly sports solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a sports app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a sports app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my sports app with existing platforms?",
    answer:
      "Yes, we specialize in integrating sports apps with existing platforms, including data analytics tools, ticketing systems, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other sports app development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality sports apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for sports apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Sports App Development Methodology",
  description:
    "Our methodology for sports app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance team performance, optimize fan engagement, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand sports workflows and your organization’s goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify operations.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure data storage, and fraud prevention measures to ensure sensitive data remains protected, fostering trust and compliance.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as analytics tools, ticketing systems, and third-party APIs. This connected ecosystem ensures efficient operations and enhanced performance capabilities.",
    },
  ],
};

export default function Sports() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/sportsBG.jpeg"
        buttonGradient="bg-gradient-to-r from-purple-400 to-pink-400"
        title="Sports App Development Company"
        description="Partner with WareLineTech, a leading sports app development company, to transform your sports organization, optimize operations, and deliver exceptional fan and team experiences."
        imageSrc="/IndustriesImg/sportsHero.png"
      />

      <AboutSection
        imageSrc="/IndustriesImg/sportsAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Sports with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the sports industry. From real-time analytics to seamless fan engagement, explore solutions that enhance performance and drive growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-green-100 to-white-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#7c3aed", to: "#f472b6" }}
        buttonGradientFrom="#7c3aed"
        buttonGradientTo="#f472b6"
      />
    </>
  );
}
