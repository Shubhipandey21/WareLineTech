import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Hospitality App Development Company",
  description:
    "From guest management to room booking, our hospitality app development services ensure seamless operations, enhanced customer satisfaction, and business growth, revolutionizing the hospitality industry for hotels and resorts alike.",
  features: [
    {
      title: "Custom Room Booking Systems",
      description:
        "We design user-friendly and visually appealing booking platforms tailored to your brand, ensuring intuitive navigation and an engaging experience for guests.",
    },
    {
      title: "Guest Experience Management",
      description:
        "Leverage advanced technology to enhance guest experiences with personalized services, real-time updates, and seamless communication.",
    },
    {
      title: "Secure Payment Solutions",
      description:
        "Integrate secure payment gateways to simplify transactions and build trust with your guests for all bookings and services.",
    },
  ],
};

const carouselData = [
  {
    icon: "🏨",
    title: "Custom Room Booking Systems",
    description:
      "Develop bespoke platforms that allow users to book rooms, view availability, and explore hotel amenities effortlessly.",
  },
  {
    icon: "🤝",
    title: "Guest Experience Management",
    description:
      "Enhance guest satisfaction with tailored experiences, real-time service updates, and efficient communication tools.",
  },
  {
    icon: "📱",
    title: "Mobile Hospitality Apps",
    description:
      "Deliver feature-rich mobile apps that enable guests to manage bookings, check-in/out, and request services on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Transactions",
    description:
      "Enable secure online transactions with trusted payment gateways and robust data protection measures.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Empower hospitality businesses with analytics tools to track performance, understand customer behavior, and make data-driven decisions.",
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
      "Incorporate geolocation features to help guests discover nearby attractions, services, and points of interest with ease.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for hospitality app development?",
    answer:
      "WarelineTech offers comprehensive hospitality app development services, including room booking platforms, guest experience management apps, and analytics solutions.",
  },
  {
    question: "How can hospitality app development services benefit my business?",
    answer:
      "Our services help streamline hotel operations, enhance guest engagement, and improve bookings by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop hospitality apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops hospitality apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my hospitality app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly hospitality apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a hospitality app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a hospitality app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my hospitality app with existing platforms?",
    answer:
      "Yes, we specialize in integrating hospitality apps with existing platforms, including property management systems, CRM tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other hospitality app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality hospitality apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for hospitality apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Hospitality App Development Methodology",
  description:
    "Our methodology for hospitality app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance guest satisfaction, streamline operations, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand guest behaviors and business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize the guest experience journey.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment gateways, and advanced authentication methods to protect user data and transactions.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like property management systems, CRM platforms, and geolocation services. This ensures efficient operations and a superior guest experience.",
    },
  ],
};

export default function Hospitality() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/HospitalityBG.jpeg"
        buttonGradient="bg-gradient-to-r from-orange-400 to-yellow-400"
        title="Hospitality App Development Company"
        description="Partner with WareLineTech, a leading hospitality app development company, to transform your hospitality business, streamline operations, and deliver exceptional experiences to your guests."
        imageSrc="/IndustriesImg/HospitalityHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/HospitalityAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Hospitality with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the hospitality industry. From guest experience management to secure transactions, explore solutions that enhance customer satisfaction and drive business growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-yellow-200 to-orange-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ff9f43", to: "#ff6b6b" }}
        buttonGradientFrom="#ffa502"
        buttonGradientTo="#ff6348"
      />
    </>
  );
}
