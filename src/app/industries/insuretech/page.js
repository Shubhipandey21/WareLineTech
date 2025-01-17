import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 InsureTech App Development Company",
  description:
    "From policy management to customer engagement, our InsureTech app development services ensure streamlined operations, enhanced customer experiences, and compliance with industry regulations, driving trust and growth.",
  features: [
    {
      title: "Custom Policy Management Solutions",
      description:
        "We design user-friendly platforms tailored to your insurance business, enabling seamless policy creation, management, and renewal processes.",
    },
    {
      title: "AI-Powered Risk Assessment",
      description:
        "Leverage artificial intelligence to analyze data, predict risks, and offer personalized insurance plans, enhancing decision-making and customer satisfaction.",
    },
    {
      title: "Secure Claims Processing",
      description:
        "Integrate secure and efficient claims management systems that simplify the process for customers while reducing fraud risks and operational inefficiencies.",
    },
  ],
};

const carouselData = [
  {
    icon: "\uD83D\uDCDA",
    title: "Custom Policy Management",
    description:
      "Develop tailored solutions for policy creation, tracking, and management, ensuring compliance and operational efficiency.",
  },
  {
    icon: "\uD83E\uDD16",
    title: "AI-Powered Risk Assessment",
    description:
      "Improve underwriting processes with AI-driven insights, enabling accurate risk evaluation and competitive pricing.",
  },
  {
    icon: "\uD83D\uDCDE",
    title: "Customer Engagement Platforms",
    description:
      "Build intuitive apps that enhance customer interactions, provide policy information, and enable seamless communication with insurers.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Secure Claims Processing",
    description:
      "Streamline claims submission and approval workflows, improving efficiency and customer trust.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Data Analytics & Insights",
    description:
      "Harness advanced analytics to monitor performance, customer behavior, and risk patterns, enabling data-driven decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during peak demand.",
  },
  {
    icon: "\uD83D\uDE9A",
    title: "Integrated Partner Solutions",
    description:
      "Connect seamlessly with third-party services like reinsurers, brokers, and regulatory platforms for streamlined operations.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for InsureTech app development?",
    answer:
      "WarelineTech provides comprehensive InsureTech app development services, including policy management systems, AI-powered risk assessment tools, claims processing solutions, and customer engagement platforms.",
  },
  {
    question: "How can InsureTech app development services benefit my insurance business?",
    answer:
      "Our services enhance operational efficiency, improve customer satisfaction, reduce fraud risks, and ensure compliance with industry standards.",
  },
  {
    question: "Do you develop InsureTech apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops InsureTech solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my InsureTech project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly InsureTech solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop an InsureTech app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, an InsureTech app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my InsureTech app with existing platforms?",
    answer:
      "Yes, we specialize in integrating InsureTech apps with existing platforms, including CRMs, ERPs, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other InsureTech development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality InsureTech apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for InsureTech apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "InsureTech App Development Methodology",
  description:
    "Our methodology for InsureTech app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance customer trust, optimize operations, and drive business growth.",
  cards: [
    {
      icon: "\uD83D\uDCF1",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand policyholders' behaviors and your business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify insurance processes.",
    },
    {
      icon: "\uD83D\uDD12",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure claims processing, and fraud prevention systems to ensure sensitive customer data remains protected, fostering trust and compliance.",
    },
    {
      icon: "\uD83D\uDD17",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as underwriting systems, payment processors, CRM tools, and regulatory databases. This connected ecosystem ensures efficient operations and enhanced user experience.",
    },
  ],
};

export default function InsureTech() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/insuretechBG.jpeg"
        buttonGradient="bg-gradient-to-r from-violet-400 to-blue-400"
        title="InsureTech App Development Company"
        description="Partner with WareLineTech, a leading InsureTech app development company, to transform your insurance business, optimize operations, and deliver exceptional experiences to your customers."
        imageSrc="/IndustriesImg/insuretechHero.jpg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/insuretechAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Insurance with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the insurance industry. From AI-powered risk assessment to seamless claims processing, explore solutions that enhance customer trust and drive growth."
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
        highlightGradient={{ from: "#7c3aed", to: "#60a5fa" }}
        buttonGradientFrom="#7c3aed"
        buttonGradientTo="#60a5fa"
      />
    </>
  );
}
