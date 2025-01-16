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
    "From trip planning to booking management, our travel app development services ensure seamless travel experiences, enhanced user engagement, and business growth, transforming the travel industry for agencies and travelers alike.",
  features: [
    {
      title: "Custom Trip Planning",
      description:
        "We design user-friendly and visually appealing trip planning platforms tailored to your brand, ensuring intuitive navigation and an engaging user experience.",
    },
    {
      title: "Real-Time Booking Systems",
      description:
        "Leverage advanced technology to provide real-time booking capabilities for flights, hotels, and activities, ensuring a hassle-free experience for travelers.",
    },
    {
      title: "Secure Payment Gateways",
      description:
        "Integrate secure payment gateways to simplify transactions and enhance user trust for all travel-related bookings.",
    },
  ],
};

const carouselData = [
  {
    icon: "✈️",
    title: "Custom Trip Planning",
    description:
      "Develop bespoke platforms that allow users to plan trips, create itineraries, and explore travel destinations effortlessly, enhancing the overall experience.",
  },
  {
    icon: "🏨",
    title: "Real-Time Booking Systems",
    description:
      "Offer real-time booking options for flights, hotels, and activities to provide a seamless and efficient travel experience.",
  },
  {
    icon: "📱",
    title: "Mobile Travel Apps",
    description:
      "Deliver feature-rich mobile apps that enable users to search, book, and manage their trips anytime, anywhere.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description:
      "Enable secure online transactions with trusted payment gateways and robust security measures.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Empower travel businesses with analytics tools to track performance, understand customer behavior, and make data-driven decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based platforms that scale effortlessly as your business grows, ensuring seamless performance.",
  },
  {
    icon: "📍",
    title: "Location-Based Services",
    description:
      "Incorporate geolocation features to help users discover destinations, nearby attractions, and travel options with ease.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for travel app development?",
    answer:
      "WarelineTech offers comprehensive travel app development services, including trip planning platforms, mobile apps, real-time booking systems, and analytics solutions.",
  },
  {
    question: "How can travel app development services benefit my business?",
    answer:
      "Our services help streamline travel planning, enhance customer engagement, and improve bookings by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop travel apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops travel apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my travel app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly travel apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a travel app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a travel app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my travel app with existing platforms?",
    answer:
      "Yes, we specialize in integrating travel apps with existing platforms, including CRM systems, booking engines, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other travel app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality travel apps.",
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
    "Our methodology for travel app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance customer engagement, streamline travel management, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand traveler behaviors and business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize the travel planning journey.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment gateways, and advanced authentication methods to protect user data and transactions.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like booking engines, CRM systems, and geolocation services. This ensures efficient operations and a superior user experience.",
    },
  ],
};

export default function Travel() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/TravelBG.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-400 to-purple-400"
        title="Travel App Development Company"
        description="Partner with WareLineTech, a leading travel app development company, to transform your travel business, streamline operations, and deliver exceptional experiences to your customers."
        imageSrc="/IndustriesImg/TravelHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/TravelAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Travel with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the travel industry. From trip planning to secure transactions, explore solutions that enhance customer satisfaction and drive business growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-purple-200 to-blue-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
        buttonGradientFrom="#ff6347"
        buttonGradientTo="#32cd32"
      />
    </>
  );
}
