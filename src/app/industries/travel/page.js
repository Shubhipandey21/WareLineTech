import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Travel App Development Company",
  description:
    "From trip planning to booking management, our travel app development services ensure seamless operations, enhanced customer experiences, and personalized travel solutions, driving satisfaction and growth.",
  features: [
    {
      title: "Custom Travel Planning Solutions",
      description:
        "We design user-friendly platforms tailored to your travel business, enabling seamless itinerary planning, booking, and customer engagement.",
    },
    {
      title: "AI-Powered Recommendations",
      description:
        "Leverage artificial intelligence to analyze preferences, predict trends, and offer personalized travel packages, enhancing customer satisfaction.",
    },
    {
      title: "Secure Payment Gateways",
      description:
        "Integrate secure and efficient payment systems that simplify transactions and enhance customer trust across platforms.",
    },
  ],
};

const carouselData = [
  {
    icon: "\uD83C\uDF0D",
    title: "Custom Travel Planning",
    description:
      "Develop tailored solutions for itinerary creation, tracking, and management, ensuring seamless travel experiences.",
  },
  {
    icon: "\uD83E\uDD16",
    title: "AI-Powered Travel Insights",
    description:
      "Improve customer journeys with AI-driven recommendations, enabling personalized travel planning and enhanced satisfaction.",
  },
  {
    icon: "\uD83D\uDCF2",
    title: "Mobile Travel Apps",
    description:
      "Build intuitive mobile apps that provide travel information, booking options, and real-time updates for travelers.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Secure Payment Solutions",
    description:
      "Streamline payments with secure and efficient systems, improving trust and simplifying transactions.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Data Analytics & Insights",
    description:
      "Harness advanced analytics to monitor trends, customer behavior, and booking patterns, enabling data-driven decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during peak travel seasons.",
  },
  {
    icon: "✈️",
    title: "Integrated Travel Solutions",
    description:
      "Connect seamlessly with third-party services like airlines, hotels, and car rentals for a unified travel ecosystem.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for travel app development?",
    answer:
      "WarelineTech provides comprehensive travel app development services, including trip planning systems, AI-powered recommendation tools, booking solutions, and customer engagement platforms.",
  },
  {
    question: "How can travel app development services benefit my business?",
    answer:
      "Our services enhance operational efficiency, improve customer satisfaction, provide personalized travel experiences, and ensure scalability for businesses of all sizes.",
  },
  {
    question: "Do you develop travel apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops travel solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my travel app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly travel solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a travel app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a travel app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my travel app with existing platforms?",
    answer:
      "Yes, we specialize in integrating travel apps with existing platforms, including CRMs, ERPs, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other travel app development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality travel apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for travel apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Travel App Development Methodology",
  description:
    "Our methodology for travel app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance customer satisfaction, optimize operations, and drive business growth.",
  cards: [
    {
      icon: "\uD83D\uDCF1",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand travelers' behaviors and your business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify travel planning.",
    },
    {
      icon: "\uD83D\uDD12",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment systems, and fraud prevention measures to ensure sensitive customer data remains protected, fostering trust and compliance.",
    },
    {
      icon: "\uD83D\uDD17",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as airline booking systems, payment processors, CRM tools, and third-party APIs. This connected ecosystem ensures efficient operations and an enhanced user experience.",
    },
  ],
};

export default function Travel() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/trabelBG.jpeg"
        buttonGradient="bg-gradient-to-r from-pink-400 to-yellow-400"
        title="Travel App Development Company"
        description="Partner with WareLineTech, a leading travel app development company, to transform your travel business, optimize operations, and deliver exceptional experiences to your customers."
        imageSrc="/IndustriesImg/travelHero.jpg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/travelAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Travel with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the travel industry. From AI-powered recommendations to seamless travel planning, explore solutions that enhance customer satisfaction and drive growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-green-200 to-white-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ffc0cb", to: "#ffd700" }}
        buttonGradientFrom="#ffc0cb"
        buttonGradientTo="#ffd700"
      />
    </>
  );
}
