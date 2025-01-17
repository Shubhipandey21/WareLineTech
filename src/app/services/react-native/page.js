import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "Empowering Businesses with",
  highlight: "React Native App Development",
  description:
    "Revolutionize your business with cutting-edge React Native app solutions. Our expertise in building scalable, high-performance, and cross-platform mobile applications ensures a seamless user experience and accelerates your time-to-market.",
  features: [
    {
      title: "Custom React Native Development",
      description:
        "Create tailored mobile applications designed to meet your specific business requirements and deliver optimal performance.",
    },
    {
      title: "Cross-Platform Solutions",
      description:
        "Leverage React Native to build apps that work seamlessly on both iOS and Android platforms with a single codebase.",
    },
    {
      title: "Scalable and Secure Apps",
      description:
        "Develop secure, scalable, and future-ready applications with robust performance and advanced features.",
    },
  ],
};

const carouselData = [
  {
    icon: "📱",
    title: "Cross-Platform Development",
    description:
      "Deliver apps with a native-like experience across multiple platforms using a single codebase, ensuring cost efficiency.",
  },
  {
    icon: "⚡",
    title: "High Performance Apps",
    description:
      "Optimize app performance with React Native’s fast rendering and efficient frameworks for a smooth user experience.",
  },
  {
    icon: "🎨",
    title: "Custom UI/UX Design",
    description:
      "Craft intuitive and visually appealing designs tailored to your brand identity and user expectations.",
  },
  {
    icon: "🔒",
    title: "Advanced Security Features",
    description:
      "Incorporate encryption, secure authentication, and data protection to ensure the safety of user information.",
  },
  {
    icon: "📊",
    title: "Analytics and Insights",
    description:
      "Integrate powerful analytics tools to monitor app performance, track user behavior, and drive business decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud Integration",
    description:
      "Seamlessly connect your app to cloud services for real-time updates, data management, and scalability.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "Offer continuous support and maintenance to ensure your React Native apps run smoothly and remain up to date.",
  },
];

const faqData = [
  {
    question: "What is React Native app development?",
    answer:
      "React Native is a popular framework that enables cross-platform app development using a single codebase, providing a native-like experience on iOS and Android.",
  },
  {
    question: "Why should I choose React Native for my app?",
    answer:
      "React Native is cost-effective, reduces development time, and ensures a consistent experience across platforms, making it ideal for businesses looking to reach a broader audience quickly.",
  },
  {
    question: "Do you provide post-launch support for React Native apps?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your app stays updated and performs optimally.",
  },
  {
    question: "How long does it take to develop a React Native app?",
    answer:
      "The timeline depends on the complexity of the app, but most projects are completed within 3 to 6 months, including development, testing, and deployment.",
  },
  {
    question: "Can you integrate third-party APIs into React Native apps?",
    answer:
      "Absolutely! We specialize in integrating various third-party APIs to enhance functionality and provide a seamless user experience.",
  },
  {
    question: "Is React Native suitable for large-scale applications?",
    answer:
      "Yes, React Native is scalable and capable of handling complex, large-scale applications with high performance and reliability.",
  },
];

const methodologyData = {
  heading: "React Native Development Methodology",
  description:
    "Our approach to React Native app development emphasizes agility, innovation, and user-centric solutions. We combine modern technology with proven methodologies to deliver high-quality apps that meet business goals and exceed user expectations.",
  cards: [
    {
      icon: "🎨",
      title: "Innovative UI/UX Design",
      text: "Focus on crafting user-friendly interfaces and engaging designs that provide seamless navigation and enhance user satisfaction.",
    },
    {
      icon: "⚡",
      title: "Agile Development",
      text: "Leverage agile practices to ensure efficient project management, rapid development, and timely delivery of your app.",
    },
    {
      icon: "☁️",
      title: "Cloud-Based Scalability",
      text: "Design apps with cloud integration to ensure scalability and real-time data synchronization for growing businesses.",
    },
  ],
};

export default function ReactNativeServices() {
  return (
    <>
      <HeroSection2
        backgroundImage="https://images.pexels.com/photos/7134994/pexels-photo-7134994.jpeg?auto=compress&cs=tinysrgb&w=600"
        buttonGradient="bg-gradient-to-r from-green-400 to-blue-500"
        title="React Native App Development Company"
        descriptions="Partner with WarelineTech to deliver feature-rich, scalable, and cross-platform React Native applications tailored to your business needs."
        imageSrc="/ServicesImages/reactnative/reactnativeHero.jpeg"
      />

      <AboutSection
        imageSrc="/ServicesImages/reactnative/reactnativeAbout.jpeg"
        content={content}
      />
      <Carousel
        title="Empowering Businesses with React Native Solutions"
        subtitle="Discover how our React Native expertise drives innovation and efficiency."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-green-200 to-blue-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="Let's bring your app idea to life!"
        description="Reach out to our team for more information about our React Native app development services."
        buttonText="Get in Touch"
        highlightText="now!"
        highlightGradient={{ from: "#43cea2", to: "#185a9d" }}
        buttonGradientFrom="#11998e"
        buttonGradientTo="#38ef7d"
      />
    </>
  );
}
