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
    "From hotel management to guest engagement, our hospitality app development services ensure seamless operations, exceptional experiences, and personalized solutions, driving satisfaction and growth.",
  features: [
    {
      title: "Custom Hotel Management Solutions",
      description:
        "We design user-friendly platforms tailored to your hospitality business, enabling seamless booking, guest engagement, and operational efficiency.",
    },
    {
      title: "AI-Powered Guest Recommendations",
      description:
        "Leverage artificial intelligence to analyze guest preferences, predict trends, and offer personalized services, enhancing guest satisfaction.",
    },
    {
      title: "Secure Payment Gateways",
      description:
        "Integrate secure and efficient payment systems that simplify transactions and enhance guest trust across platforms.",
    },
  ],
};

const carouselData = [
  {
    icon: "🏨",
    title: "Custom Hospitality Solutions",
    description:
      "Develop tailored solutions for hotel management, guest engagement, and operational excellence, ensuring superior hospitality experiences.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Guest Insights",
    description:
      "Improve guest experiences with AI-driven recommendations, enabling personalized services and enhanced satisfaction.",
  },
  {
    icon: "📱",
    title: "Mobile Hospitality Apps",
    description:
      "Build intuitive mobile apps that provide booking options, concierge services, and real-time updates for guests.",
  },
  {
    icon: "🔒",
    title: "Secure Payment Solutions",
    description:
      "Streamline payments with secure and efficient systems, improving trust and simplifying transactions.",
  },
  {
    icon: "📊",
    title: "Data Analytics & Insights",
    description:
      "Harness advanced analytics to monitor trends, guest behavior, and operational performance, enabling data-driven decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during peak seasons.",
  },
  {
    icon: "🌟",
    title: "Integrated Hospitality Solutions",
    description:
      "Connect seamlessly with third-party services like booking engines, CRM tools, and property management systems for a unified ecosystem.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for hospitality app development?",
    answer:
      "WarelineTech provides comprehensive hospitality app development services, including hotel management systems, AI-powered recommendation tools, booking solutions, and guest engagement platforms.",
  },
  {
    question: "How can hospitality app development services benefit my business?",
    answer:
      "Our services enhance operational efficiency, improve guest satisfaction, provide personalized services, and ensure scalability for businesses of all sizes.",
  },
  {
    question: "Do you develop hospitality apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops hospitality solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my hospitality app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly hospitality solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a hospitality app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a hospitality app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my hospitality app with existing platforms?",
    answer:
      "Yes, we specialize in integrating hospitality apps with existing platforms, including CRMs, property management systems, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other hospitality app development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality hospitality apps.",
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
    "Our methodology for hospitality app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance guest satisfaction, optimize operations, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand guest behaviors and your business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify hospitality operations.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment systems, and fraud prevention measures to ensure sensitive guest data remains protected, fostering trust and compliance.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as booking engines, CRM tools, and third-party APIs. This connected ecosystem ensures efficient operations and an enhanced guest experience.",
    },
  ],
};

export default function Hospitality() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/hospitalityBg.jpeg"
        buttonGradient="bg-gradient-to-r from-yellow-400 to-pink-400"
        title="Hospitality App Development Company"
        description="Partner with WareLineTech, a leading hospitality app development company, to transform your hospitality business, optimize operations, and deliver exceptional guest experiences."
        imageSrc="/IndustriesImg/hospitalityHero.jpg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/hospitalityAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Hospitality with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the hospitality industry. From AI-powered recommendations to seamless guest management, explore solutions that enhance guest satisfaction and drive growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-pink-200 to-white-50"
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
