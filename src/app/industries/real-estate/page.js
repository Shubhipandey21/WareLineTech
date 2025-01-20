import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Real Estate App Development Company",
  description:
    "From property listings to virtual tours, our real estate app development services ensure seamless property management, enhanced user engagement, and business growth, transforming the real estate experience for both buyers and sellers.",
  features: [
    {
      title: "Custom Property Listings",
      description:
        "We design user-friendly and visually appealing property listing platforms tailored to your brand, ensuring intuitive navigation and an engaging browsing experience for buyers and renters.",
    },
    {
      title: "Virtual Property Tours",
      description:
        "Leverage advanced technology to provide 360-degree virtual tours, enabling prospective buyers and renters to explore properties from the comfort of their homes.",
    },
    {
      title: "Secure Transactions",
      description:
        "Integrate secure payment gateways and document management systems to simplify property transactions and enhance user trust.",
    },
  ],
};

const carouselData = [
  {
    icon: "🏡",
    title: "Custom Property Listings",
    description:
      "Develop bespoke platforms that allow users to browse, search, and filter properties effortlessly, enhancing the overall user experience.",
  },
  {
    icon: "🎥",
    title: "Virtual Property Tours",
    description:
      "Offer immersive 3D virtual tours to provide potential buyers and renters with a detailed and realistic view of the properties.",
  },
  {
    icon: "📱",
    title: "Mobile Real Estate Apps",
    description:
      "Deliver feature-rich mobile apps that enable users to search, save, and inquire about properties anytime, anywhere.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description:
      "Enable secure online property transactions with trusted payment gateways and robust document management systems.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Empower real estate businesses with analytics tools to track performance, understand customer behavior, and make data-driven decisions.",
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
      "Incorporate geolocation features to help users find properties in their desired areas with precise location data and proximity-based filters.",
  },
];

const faqData = [
  {
    question:
      "What services does WarelineTech offer for real estate app development?",
    answer:
      "WarelineTech offers comprehensive real estate app development services, including property listing platforms, mobile apps, virtual tours, and analytics solutions.",
  },
  {
    question:
      "How can real estate app development services benefit my business?",
    answer:
      "Our services help streamline property management, enhance customer engagement, and improve sales by offering innovative and user-friendly solutions.",
  },
  {
    question:
      "Do you develop real estate apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops real estate apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my real estate app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly real estate apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a real estate app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a real estate app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my real estate app with existing platforms?",
    answer:
      "Yes, we specialize in integrating real estate apps with existing platforms, including CRM systems, property management tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question:
      "What sets WarelineTech apart from other real estate app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality real estate apps.",
  },
  {
    question:
      "Do you offer ongoing support and maintenance for real estate apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Real Estate App Development Methodology",
  description:
    "Our methodology for real estate app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance customer engagement, streamline property management, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand customer behaviors and business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize the property search journey.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment gateways, and advanced authentication methods to protect user data and transactions.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like CRM systems, property management platforms, and geolocation services. This ensures efficient operations and a superior user experience.",
    },
  ],
};

export default function RealEstate() {
  return (
    <>
      <HeroSection2
        backgroundImage="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        buttonGradient="bg-gradient-to-r from-pink-400 to-violet-400"
        title="Real Estate App Development Company"
        description="Partner with WareLineTech, a leading real estate app development company, to transform your property business, streamline operations, and deliver exceptional experiences to your customers."
        imageSrc="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <AboutSection
        imageSrc="/IndustriesImg/RealEstateAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Real Estate with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the real estate industry. From virtual tours to location-based services, explore solutions that enhance customer satisfaction and drive business growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-blue-200 to-green-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ec4899", to: "#a78bfa" }}
        buttonGradientFrom="#ec4899"
        buttonGradientTo="#a78bfa"
      />
    </>
  );
}
