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
        title: "AI Strategy and Consulting",
        description:
          "Develop a tailored AI strategy to drive innovation and solve your business challenges effectively.",
        icon: <FaBrain />, // AI brain icon
      },
      {
        id: 2,
        title: "Custom AI Models",
        description:
          "Design and deploy AI models customized to your business needs for maximum impact and efficiency.",
        icon: <FaRobot />, // AI robot icon
      },
      {
        id: 3,
        title: "Machine Learning Development",
        description:
          "Harness the power of machine learning to uncover insights, automate tasks, and optimize processes.",
        icon: <FaCogs />, // Machine learning icon
      },
      {
        id: 4,
        title: "Data Analytics and Visualization",
        description:
          "Transform raw data into actionable insights with advanced analytics and compelling visualizations.",
        icon: <FaChartLine />, // Analytics icon
      },
      {
        id: 5,
        title: "Natural Language Processing (NLP)",
        description:
          "Leverage NLP to enhance customer experiences with chatbots, sentiment analysis, and more.",
        icon: <FaSearch />, // NLP icon
      },
      {
        id: 6,
        title: "AI-Powered Automation",
        description:
          "Streamline operations and improve efficiency with AI-driven automation solutions.",
        icon: <FaRegLightbulb />, // Automation icon
      },
    ];
  
    const roadmapData = {
      title: "Your Journey to AI-Powered Success",
      description:
        "Partner with us to transform your business with cutting-edge AI and ML technologies.",
      items: [
        {
          icon: FaBrain,
          title: "Discovery and Ideation",
          description:
            "Understand your business needs and identify opportunities where AI and ML can create value.",
        },
        {
          icon: FaProjectDiagram,
          title: "Model Design",
          description:
            "Develop AI/ML models tailored to your specific use cases and goals.",
        },
        {
          icon: FaDatabase,
          title: "Data Preparation",
          description:
            "Collect, clean, and prepare data to train machine learning models effectively.",
        },
        {
          icon: FaRobot,
          title: "Model Training",
          description:
            "Train and fine-tune models to achieve optimal performance and accuracy.",
        },
        {
          icon: FaChartLine,
          title: "Deployment and Optimization",
          description:
            "Deploy AI models into production and continuously optimize for performance.",
        },
      ],
    };
  
    const features = [
      {
        id: 1,
        title: "Personalization",
        description:
          "Deliver personalized customer experiences using AI-driven insights and recommendations.",
      },
      {
        id: 2,
        title: "Predictive Analytics",
        description:
          "Anticipate trends and make data-driven decisions with predictive analytics.",
      },
      {
        id: 3,
        title: "Efficiency and Automation",
        description:
          "Automate repetitive tasks and improve operational efficiency with AI solutions.",
      },
      {
        id: 4,
        title: "Scalability",
        description:
          "Scale AI solutions effortlessly to handle increasing data and operational demands.",
      },
      {
        id: 5,
        title: "Real-Time Insights",
        description:
          "Get real-time insights into your business performance and customer behavior.",
      },
    ];
  
    const progressiveCarouselData = [
      {
        title: "Computer Vision",
        description:
          "Enable machines to interpret and process visual data with advanced computer vision technologies.",
        image: "/ServicesImages/AI&MLimg/ComputerVision.jpg",
      },
      {
        title: "Deep Learning",
        description:
          "Implement deep learning techniques for image recognition, speech processing, and more.",
        image: "/ServicesImages/AI&MLimg/DeepLearning.jpg",
      },
      {
        title: "Reinforcement Learning",
        description:
          "Leverage reinforcement learning to solve complex decision-making problems.",
        image: "/ServicesImages/AI&MLimg/ReinforcementLearning.jpg",
      },
      {
        title: "AI Ethics and Fairness",
        description:
          "Design AI systems that are ethical, fair, and free from bias.",
        image: "/ServicesImages/AI&MLimg/AIethics.jpg",
      },
    ];
  
    const faqData = [
      {
        question: "What is the difference between AI and ML?",
        answer:
          "AI refers to the broader concept of machines simulating human intelligence, while ML is a subset of AI focused on systems that learn and improve from data.",
      },
      {
        question: "How can AI and ML benefit my business?",
        answer:
          "AI and ML can automate tasks, enhance decision-making, improve customer experiences, and uncover valuable insights from data.",
      },
      {
        question: "Do you provide end-to-end AI solutions?",
        answer:
          "Yes, we offer comprehensive AI solutions, from strategy and model development to deployment and ongoing support.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We work with a wide range of industries, including healthcare, finance, retail, manufacturing, and more.",
      },
      {
        question: "How do you ensure data privacy and security?",
        answer:
          "We follow industry best practices and implement robust security measures to ensure your data is protected at all times.",
      },
    ];
  
    return (
      <>
        <HeroSection2
          backgroundImage="/ServicesImages/AI&MLimg/AIMLBg.jpeg"
          buttonGradient="bg-gradient-to-r from-blue-500 to-purple-600"
          title="Empower Your Business with AI & ML"
          description="Revolutionize your operations with intelligent AI and ML solutions designed for success."
          imageSrc="/ServicesImages/AI&MLimg/AI&MLHero.jpeg"
        />
        <AboutSection
          heading="Innovate with WarelineTech's AI & ML Services"
          description="Drive transformation and stay ahead of the curve with our state-of-the-art AI and ML solutions. From predictive analytics to automation, we deliver results."
          imageSrc="/ServicesImages/AI&MLimg/AI&MLAbout.png"
        />
        <Carousel
          title="Harness the Power of AI & ML"
          subtitle="Unlock new opportunities with cutting-edge technologies."
          data={carouselData}
        />
        <ProgressiveCarousel
          mainHeading="Explore Advanced AI & ML Technologies"
          mainDescription="Discover the tools and techniques transforming industries worldwide."
          data={progressiveCarouselData}
          duration={5000}
        />
        <Roadmap
          title={roadmapData.title}
          description={roadmapData.description}
          items={roadmapData.items}
        />
        <Features
          heading="Why Choose AI & ML Solutions?"
          subheading="Transform Your Business Today"
          description="AI and ML provide a competitive edge, enabling data-driven innovation and process optimization."
          features={features}
        />
        <FaqSection data={faqData} />
        <ContactUsSection
          title="Get in Touch"
          subtitle="We'd be happy to assist you!"
          description="Contact us for any questions or inquiries about our cloud solutions."
          buttonText="Contact Now"
          highlightText="right now!"
          highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
          buttonGradientFrom="#00c6ff"
          buttonGradientTo="#0072ff"
        />
      </>
    );
  }
  