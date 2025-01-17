import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Construction App Development Company",
  description:
    "From project management to real-time tracking, our construction app development services ensure efficient operations, seamless communication, and data-driven solutions, driving productivity and growth.",
  features: [
    {
      title: "Custom Construction Solutions",
      description:
        "We design user-friendly platforms tailored to your construction business, enabling streamlined project management, team coordination, and operational efficiency.",
    },
    {
      title: "Real-Time Project Tracking",
      description:
        "Leverage technology to monitor project progress, manage timelines, and address issues in real time, ensuring successful project delivery.",
    },
    {
      title: "Secure Document Management",
      description:
        "Integrate secure systems for managing blueprints, contracts, and other vital documents, ensuring data protection and easy accessibility.",
    },
  ],
};

const carouselData = [
  {
    icon: "🏗️",
    title: "Custom Construction Solutions",
    description:
      "Develop tailored solutions for project management, communication, and operational excellence, ensuring superior outcomes.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Gain insights into project performance and resource utilization through advanced analytics tools, enabling data-driven decisions.",
  },
  {
    icon: "📱",
    title: "Mobile Construction Apps",
    description:
      "Build intuitive mobile apps that provide real-time updates, team communication, and task management on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Document Management",
    description:
      "Streamline document storage and sharing with secure systems, improving collaboration and protecting sensitive information.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during peak workloads.",
  },
  {
    icon: "🛠️",
    title: "Integrated Construction Tools",
    description:
      "Connect seamlessly with tools like CAD software, ERP systems, and third-party APIs for a unified ecosystem.",
  },
  {
    icon: "📈",
    title: "Project Performance Insights",
    description:
      "Monitor and improve project outcomes with detailed performance metrics and reporting capabilities.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for construction app development?",
    answer:
      "WarelineTech provides comprehensive construction app development services, including project management tools, real-time tracking, document management, and team collaboration platforms.",
  },
  {
    question: "How can construction app development services benefit my business?",
    answer:
      "Our services enhance operational efficiency, improve communication, reduce delays, and provide real-time insights, ensuring successful project delivery.",
  },
  {
    question: "Do you develop construction apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops construction solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my construction app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly construction solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a construction app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a construction app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my construction app with existing platforms?",
    answer:
      "Yes, we specialize in integrating construction apps with existing platforms, including ERP systems, CAD tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other construction app development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality construction apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for construction apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Construction App Development Methodology",
  description:
    "Our methodology for construction app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance project efficiency, optimize resource management, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand construction workflows and your business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify project management.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure document storage, and fraud prevention measures to ensure sensitive data remains protected, fostering trust and compliance.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as ERP systems, CAD tools, and third-party APIs. This connected ecosystem ensures efficient operations and enhanced project management capabilities.",
    },
  ],
};

export default function Construction() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/constructionBg.jpeg"
        buttonGradient="bg-gradient-to-r from-purple-400 to-pink-400"
        title="Construction App Development Company"
        description="Partner with WareLineTech, a leading construction app development company, to transform your construction business, optimize operations, and deliver exceptional project outcomes."
        imageSrc="/IndustriesImg/constructionHero.jpg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/constructionAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Construction with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the construction industry. From real-time tracking to seamless project management, explore solutions that enhance productivity and drive growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-teal-100 to-white-50"
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
