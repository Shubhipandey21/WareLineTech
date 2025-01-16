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
    "From fan engagement to player performance tracking, our sports app development services ensure seamless experiences, enhanced performance analysis, and business growth, revolutionizing the sports industry for teams, fans, and organizations alike.",
  features: [
    {
      title: "Custom Fan Engagement Platforms",
      description:
        "We design interactive and visually appealing platforms to engage fans, offering live updates, social features, and exclusive content tailored to your brand.",
    },
    {
      title: "Player Performance Tracking",
      description:
        "Leverage advanced technology to track player stats, performance metrics, and health data, enabling better analysis and decision-making.",
    },
    {
      title: "Secure Transactions",
      description:
        "Integrate secure payment gateways and ticketing systems to simplify transactions and enhance user trust.",
    },
  ],
};

const carouselData = [
  {
    icon: "⚽",
    title: "Fan Engagement Platforms",
    description:
      "Develop bespoke platforms that allow fans to connect, follow live events, and access exclusive content, enhancing their overall experience.",
  },
  {
    icon: "📊",
    title: "Performance Analytics",
    description:
      "Empower teams and coaches with analytics tools to monitor player performance, plan strategies, and improve outcomes.",
  },
  {
    icon: "📱",
    title: "Mobile Sports Apps",
    description:
      "Deliver feature-rich mobile apps that provide live scores, news, and fan engagement features on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Ticketing Systems",
    description:
      "Enable secure online ticketing with trusted payment gateways, ensuring a seamless and trustworthy experience for fans.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based platforms that scale effortlessly as your fan base grows, ensuring seamless performance.",
  },
  {
    icon: "🏟️",
    title: "Venue Management Tools",
    description:
      "Facilitate efficient venue management and logistics with tools designed for smooth operations during events.",
  },
  {
    icon: "📍",
    title: "Geolocation Features",
    description:
      "Incorporate geolocation features to help fans find venues, track live events, and discover nearby activities.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for sports app development?",
    answer:
      "WarelineTech offers comprehensive sports app development services, including fan engagement platforms, performance analytics tools, and secure ticketing systems.",
  },
  {
    question: "How can sports app development services benefit my organization?",
    answer:
      "Our services help streamline operations, enhance fan engagement, and improve team performance by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop sports apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops sports apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my sports app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly sports apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a sports app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a sports app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my sports app with existing platforms?",
    answer:
      "Yes, we specialize in integrating sports apps with existing platforms, including CRM systems, analytics tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other sports app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality sports apps.",
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
    "Our methodology for sports app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance fan engagement, streamline operations, and drive success for teams and organizations.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand fan and team needs. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize workflows.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure payment gateways, and advanced authentication methods to protect sensitive user and transaction data.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like analytics platforms, ticketing systems, and geolocation services. This ensures efficient operations and a superior user experience.",
    },
  ],
};

export default function Sports() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/SportsBG.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-400 to-green-500"
        title="Sports App Development Company"
        description="Partner with WareLineTech, a leading sports app development company, to transform your organization, enhance fan engagement, and deliver exceptional experiences for teams and supporters alike."
        imageSrc="/IndustriesImg/SportsHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/SportsAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Sports with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the sports industry. From fan engagement to player analytics, explore solutions that enhance experiences and drive success."
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
        highlightGradient={{ from: "#32cd32", to: "#00bfff" }}
        buttonGradientFrom="#32cd32"
        buttonGradientTo="#00bfff"
      />
    </>
  );
}
