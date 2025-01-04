import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 eCommerce App Development Company",
  description:
    "From online stores to marketplaces, our eCommerce app development services and tools ensure streamlined operations and exceptional shopping experiences, driving business growth and customer loyalty.",
  features: [
    {
      title: "Custom Online Stores",
      description:
        "We design user-friendly and visually appealing online stores tailored to your brand, ensuring seamless navigation, scalability, and an engaging shopping experience.",
    },
    {
      title: "AI-Driven Product Recommendations",
      description:
        "Leverage artificial intelligence to analyze customer behavior, predict trends, and offer personalized product recommendations, boosting sales and user engagement.",
    },
    {
      title: "Secure Payment Gateways",
      description:
        "Integrate secure and reliable payment solutions that enhance customer trust and simplify transactions across multiple platforms.",
    },
  ],
};

const carouselData = [
  {
    icon: "🛒",
    title: "Custom Online Stores",
    description:
      "Develop bespoke eCommerce platforms with advanced features like inventory management, multi-currency support, and responsive design to captivate and retain customers.",
  },
  {
    icon: "🤖",
    title: "AI-Driven Product Recommendations",
    description:
      "Enhance customer experience with AI-powered product suggestions, improving conversion rates and personalizing the shopping journey.",
  },
  {
    icon: "📱",
    title: "Mobile Shopping Apps",
    description:
      "Deliver a seamless shopping experience with feature-rich mobile apps that allow users to browse, shop, and track orders anytime, anywhere.",
  },
  {
    icon: "🔒",
    title: "Secure Payment Systems",
    description:
      "Enable secure and seamless online transactions with trusted payment gateway integrations, ensuring customer data protection and smooth checkouts.",
  },
  {
    icon: "📈",
    title: "Analytics & Insights",
    description:
      "Empower your business with advanced analytics to track performance, customer behavior, and sales trends, enabling data-driven decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based eCommerce platforms that scale with your business needs, ensuring smooth performance during high-traffic events.",
  },
  {
    icon: "🚚",
    title: "Integrated Logistics Solutions",
    description:
      "Simplify order fulfillment with integrated logistics and shipping solutions, offering real-time tracking and efficient delivery management.",
  },
];

const faqData = [

  {
    question: "What services does WarelineTech offer for eCommerce app development?",
    answer:
      "WarelineTech offers comprehensive eCommerce app development services, including custom online stores, mobile apps, payment gateway integration, and advanced analytics solutions.",
  },
  {
    question: "How can eCommerce app development services benefit my business?",
    answer:
      "Our services help streamline operations, enhance customer experience, improve sales, and ensure scalability for businesses of all sizes.",
  },
  {
    question: "Do you develop eCommerce apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops eCommerce apps for both iOS and Android platforms, ensuring a seamless shopping experience across all devices.",
  },
  {
    question: "Can I hire dedicated app developers for my eCommerce project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly eCommerce apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop an eCommerce app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, an eCommerce app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my eCommerce app with existing platforms?",
    answer:
      "Yes, we specialize in integrating eCommerce apps with existing platforms, including CRMs, ERPs, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other eCommerce app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality eCommerce apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for eCommerce apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "eCommerce App Development Methodology",
  description:
    "Our methodology for eCommerce app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance customer engagement, streamline operations, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand customer behaviors and your business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement, optimize the shopping journey, and boost conversion rates.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment gateways, and fraud prevention systems to ensure customer data remains protected. Trust and security are fundamental to building long-term relationships with your customers.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as inventory management systems, payment processors, CRM tools, and logistics solutions. This connected ecosystem ensures efficient operations and an enhanced user experience for your customers.",
    },
  ],
};


export default function Healthcare() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/ECommerceBG.jpeg"
        buttonGradient="bg-gradient-to-r from-orange-400 to-gray-400"
        title=" eCommerce App Development Company"
        description="Partner with WareLineTech, a leading eCommerce app development company, to transform your online business, streamline operations, and deliver unparalleled shopping experiences to your customers."
        imageSrc="/IndustriesImg/EcommerceHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/ECommerceAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming eCommerce with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the eCommerce landscape. From AI-driven recommendations to seamless mobile shopping experiences, explore solutions that enhance customer satisfaction, boost sales, and drive business growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-blue-200 to-white-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
        buttonGradientFrom="#8a2be2"
        buttonGradientTo="#ff6347"
      />
    </>
  );
}
