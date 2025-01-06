import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaCogs,
  FaSearch,
  FaRegLightbulb,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";

import Roadmap from "@/components/Roadmap/Roadmap";
import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import FaqSection from "@/components/FAQSection/FAQSection";
import Features from "@/components/Features/Features";
import Carousel from "@/components/Carousel/Carousel";
import ProgressiveCarousel from "@/components/ProgressiveCarousel/ProgressiveCarousel";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

export default function AIMLServices() {
  const carouselData = [
    {
      id: 1,
      title: "Enterprise AI Strategy and Consulting",
      description:
        "Develop a comprehensive AI strategy tailored to your organization's goals, ensuring alignment with business objectives and scalability.",
      icon: <FaBrain />,
    },
    {
      id: 2,
      title: "Custom AI Solutions",
      description:
        "Design, develop, and deploy AI models tailored to your enterprise needs, integrating seamlessly into your existing infrastructure.",
      icon: <FaRobot />,
    },
    {
      id: 3,
      title: "Advanced Machine Learning Development",
      description:
        "Build robust ML systems to analyze data, predict trends, and drive actionable insights at scale.",
      icon: <FaCogs />,
    },
    {
      id: 4,
      title: "Enterprise Data Analytics and Insights",
      description:
        "Leverage powerful analytics to unlock hidden opportunities, drive efficiency, and support data-driven decision-making.",
      icon: <FaChartLine />,
    },
    {
      id: 5,
      title: "Natural Language Processing (NLP) at Scale",
      description:
        "Enhance enterprise-level communication and customer service through scalable NLP solutions like chatbots and sentiment analysis.",
      icon: <FaSearch />,
    },
    {
      id: 6,
      title: "AI-Driven Automation for Enterprises",
      description:
        "Automate complex workflows and improve operational efficiency with cutting-edge AI technologies.",
      icon: <FaRegLightbulb />,
    },
  ];

  const roadmapData = {
    title: "Your Path to Enterprise AI Excellence",
    description:
      "Partner with us to integrate transformative AI and ML technologies into your enterprise ecosystem, ensuring scalability and long-term success.",
    items: [
      {
        icon: FaBrain,
        title: "Discovery and Ideation",
        description:
          "Collaborate to identify high-impact areas for AI and ML within your enterprise, focusing on ROI and strategic goals.",
      },
      {
        icon: FaProjectDiagram,
        title: "Solution Design and Prototyping",
        description:
          "Develop prototypes and solutions aligned with your business workflows, ensuring seamless integration.",
      },
      {
        icon: FaDatabase,
        title: "Enterprise Data Strategy",
        description:
          "Design robust data pipelines to collect, clean, and manage data for large-scale AI applications.",
      },
      {
        icon: FaRobot,
        title: "Model Development and Training",
        description:
          "Leverage advanced ML techniques to train models that meet enterprise performance benchmarks.",
      },
      {
        icon: FaChartLine,
        title: "Deployment and Continuous Optimization",
        description:
          "Deploy AI solutions into production with enterprise-grade monitoring, maintenance, and optimization strategies.",
      },
    ],
  };

  const features = [
    {
      id: 1,
      title: "Scalable Solutions",
      description:
        "Deploy AI solutions that grow with your business, ensuring consistent performance as demands increase.",
    },
    {
      id: 2,
      title: "Predictive Analytics for Enterprises",
      description:
        "Forecast trends and optimize decision-making with powerful predictive analytics capabilities.",
    },
    {
      id: 3,
      title: "Enhanced Operational Efficiency",
      description:
        "Streamline complex processes and improve productivity across your organization with AI-driven automation.",
    },
    {
      id: 4,
      title: "Enterprise-Grade Security",
      description:
        "Ensure the highest standards of data security and compliance with industry regulations.",
    },
    {
      id: 5,
      title: "Real-Time Insights",
      description:
        "Access actionable insights in real-time to make informed business decisions faster.",
    },
  ];

  const progressiveCarouselData = [
    {
        title: "Cloud Migration Services",
        description:
          "Seamlessly transition your enterprise infrastructure to the cloud for improved scalability, flexibility, and cost efficiency.",
        image: "/ServicesImages/enterpriseSolImg/cloudMigration.jpg",
      },
      {
        title: "Enterprise Resource Planning (ERP) Solutions",
        description:
          "Streamline your business operations with customizable ERP systems for finance, supply chain, and human resource management.",
        image: "/ServicesImages/enterpriseSolImg/ERPSolution.jpg",
      },
    {
        title: "Custom Software Development",
        description:
          "Design and deploy bespoke software tailored to your business needs, driving efficiency and innovation.",
        image: "/ServicesImages/enterpriseSolImg/customSDE.jpg",
      },
      {
        title: "IT Consulting and Strategy",
        description:
          "Align technology with your business goals through expert consulting and strategic planning services.",
        image: "/ServicesImages/enterpriseSolImg/ITConsulting.jpg",
      },
      
    {
        title: "Unified Communications Solutions",
        description:
          "Integrate voice, video, and messaging into a single platform to enhance collaboration across your enterprise.",
        image: "/ServicesImages/enterpriseSolImg/unifiedCommunication.jpg",
      },
  ];

  const faqData = [
    {
      question: "How does AI scale for enterprise needs?",
      answer:
        "Our solutions are designed to integrate seamlessly with your existing infrastructure, supporting scalability and flexibility as your business grows.",
    },
    {
      question: "What industries benefit most from enterprise AI?",
      answer:
        "We serve industries including finance, healthcare, retail, manufacturing, logistics, and more, with tailored AI solutions for each sector's unique challenges.",
    },
    {
      question: "How do you handle data security and compliance?",
      answer:
        "We adhere to strict industry standards and implement advanced security measures to protect your data and ensure compliance with regulations like GDPR and HIPAA.",
    },
    {
      question: "What is the typical implementation timeline?",
      answer:
        "Implementation timelines vary based on complexity, but we prioritize rapid prototyping and iterative deployment to deliver value quickly.",
    },
    {
      question: "Do you offer post-deployment support?",
      answer:
        "Yes, we provide comprehensive support and maintenance services to ensure optimal performance and continuous improvement of AI solutions.",
    },
  ];

  return (
    <>
      <HeroSection2
        backgroundImage="/ServicesImages/enterpriseSolImg/enterpriseBG.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-500 to-purple-600"
        title="Transform Your Enterprise with AI & ML"
        description="Unlock unparalleled efficiency, insights, and innovation with our enterprise-grade AI & ML solutions."
        imageSrc="/ServicesImages/enterpriseSolImg/enterpriseHero.png"
      />
      <AboutSection
        heading="Empowering Enterprises with AI & ML"
        description="Leverage the full potential of AI and ML to drive enterprise innovation, optimize operations, and achieve strategic objectives."
        imageSrc="/ServicesImages/enterpriseSolImg/enterpriseAbout.jpg"
      />
      <Carousel
        title="Comprehensive AI & ML Solutions for Enterprises"
        subtitle="Tailored to meet the demands of modern businesses."
        data={carouselData}
      />
      <ProgressiveCarousel
        mainHeading="Advanced AI & ML Technologies for Enterprises"
        mainDescription="Explore cutting-edge technologies driving enterprise transformation worldwide."
        data={progressiveCarouselData}
        duration={5000}
      />
      <Roadmap
        title={roadmapData.title}
        description={roadmapData.description}
        items={roadmapData.items}
      />
      <Features
        heading="Why Choose Enterprise AI & ML Solutions?"
        subheading="Empower Your Business with Scalable and Secure Innovation"
        description="Our enterprise-grade AI and ML solutions drive operational efficiency, enhance decision-making, and ensure seamless scalability to meet your business’s growing needs."
        features={features}
      />
      <FaqSection data={faqData} />
      <ContactUsSection
        title="Get in Touch with Our Experts"
        subtitle="We're Ready to Support Your Enterprise Needs"
        description="Reach out to us for any questions, customizations, or inquiries about our advanced AI & ML solutions tailored for large-scale enterprises."
        buttonText="Contact Now"
        highlightText="schedule a consultation now!"
        highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
        buttonGradientFrom="#00c6ff"
        buttonGradientTo="#0072ff"
      />
    </>
  );
}
