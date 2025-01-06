import {
    FaCloud,
    FaServer,
    FaNetworkWired,
    FaDatabase,
    FaShieldAlt,
    FaSyncAlt,
    FaChartPie,
    FaCogs,
  } from "react-icons/fa";
  
  import Roadmap from "@/components/Roadmap/Roadmap";
  import HeroSection2 from "@/components/HeroSection2/HeroSection2";
  import AboutSection from "@/components/ServicesAbout/ServicesAbout";
  import FaqSection from "@/components/FAQSection/FAQSection";
  import Features from "@/components/Features/Features";
  import Carousel from "@/components/Carousel/Carousel";
  import ProgressiveCarousel from "@/components/ProgressiveCarousel/ProgressiveCarousel";
  import ContactUsSection from "@/components/ContactUs/ContactUsSection";
  
  export default function CloudSolutions() {
    const carouselData = [
      {
        id: 1,
        title: "Cloud Infrastructure Services",
        description:
          "WarelineTech provides robust cloud infrastructure services that ensure scalable, secure, and high-performance environments tailored to your business needs.",
        icon: <FaServer />, // Cloud server icon
      },
      {
        id: 2,
        title: "Cloud Migration",
        description:
          "Our expert team specializes in seamless cloud migration services, ensuring minimal downtime and enhanced efficiency during the transition.",
        icon: <FaCloud />, // Cloud icon
      },
      {
        id: 3,
        title: "Hybrid Cloud Solutions",
        description:
          "Combine the best of public and private cloud environments with WarelineTech's hybrid cloud solutions for flexibility and optimized performance.",
        icon: <FaNetworkWired />, // Hybrid cloud icon
      },
      {
        id: 4,
        title: "Data Management and Analytics",
        description:
          "Leverage the power of cloud-based data management and analytics to gain actionable insights and drive smarter business decisions.",
        icon: <FaChartPie />, // Data analytics icon
      },
      {
        id: 5,
        title: "Cloud Security",
        description:
          "Our comprehensive cloud security services protect your data and applications with advanced encryption, firewalls, and proactive monitoring.",
        icon: <FaShieldAlt />, // Security icon
      },
      {
        id: 6,
        title: "DevOps in the Cloud",
        description:
          "Streamline your development and operations with our DevOps solutions, enabling faster deployment and improved efficiency in cloud environments.",
        icon: <FaCogs />, // DevOps icon
      },
    ];
  
    const roadmapData = {
      title: "Transforming Businesses with Cloud Solutions",
      description:
        "At WarelineTech, we enable businesses to unlock their full potential by leveraging the power of cloud technology to drive innovation, scalability, and efficiency.",
      items: [
        {
          icon: FaCloud,
          title: "Planning",
          description:
            "Assess your business needs and create a strategic roadmap for cloud adoption and integration.",
        },
        {
          icon: FaServer,
          title: "Implementation",
          description:
            "Set up and configure cloud infrastructure tailored to your organization’s goals and workflows.",
        },
        {
          icon: FaDatabase,
          title: "Data Migration",
          description:
            "Securely migrate your data and applications to the cloud with minimal disruption.",
        },
        {
          icon: FaShieldAlt,
          title: "Security Integration",
          description:
            "Implement robust security measures to protect your data and ensure compliance.",
        },
        {
          icon: FaSyncAlt,
          title: "Optimization",
          description:
            "Continuously monitor and optimize your cloud environment for peak performance and cost-efficiency.",
        },
      ],
    };
  
    const features = [
      {
        id: 1,
        title: "Scalability",
        description:
          "Easily scale your cloud infrastructure to match your business needs and handle increased workloads without downtime.",
      },
      {
        id: 2,
        title: "Cost Efficiency",
        description:
          "Reduce IT costs with pay-as-you-go models and eliminate the need for costly on-premise hardware.",
      },
      {
        id: 3,
        title: "Flexibility",
        description:
          "Deploy and manage cloud resources dynamically to meet the changing demands of your business.",
      },
      {
        id: 4,
        title: "Disaster Recovery",
        description:
          "Ensure business continuity with reliable cloud-based disaster recovery and backup solutions.",
      },
      {
        id: 5,
        title: "Collaboration",
        description:
          "Enhance teamwork with cloud-based tools that enable real-time collaboration across distributed teams.",
      },
    ];
  
    const progressiveCarouselData = [
      {
        title: "Multi-Cloud Solutions",
        description: "Integrate services from multiple cloud providers for enhanced capabilities.",
        image: "/ServicesImages/cloudImg/multiCloud.jpg",
      },
      {
        title: "Edge Computing",
        description: "Process data closer to its source for reduced latency and real-time insights.",
        image: "/ServicesImages/cloudImg/edgeComputing.jpg",
      },
      {
        title: "AI and Machine Learning in the Cloud",
        description: "Leverage cloud-based AI/ML tools to automate processes and uncover insights.",
        image: "/ServicesImages/cloudImg/AIincloud.jpg",
      },
      {
        title: "Serverless Architecture",
        description: "Focus on your code while we handle the server infrastructure for you.",
        image: "/ServicesImages/cloudImg/serverlessArchitechure.jpg",
      },
    ];
  
    const faqData = [
      {
        question: "What are the benefits of using cloud solutions?",
        answer:
          "Cloud solutions offer scalability, cost efficiency, flexibility, enhanced security, and disaster recovery options. They enable businesses to innovate faster and reduce IT costs.",
      },
      {
        question: "How does cloud migration work?",
        answer:
          "Cloud migration involves assessing your current infrastructure, planning the transition, securely transferring data and applications, and optimizing the cloud environment for peak performance.",
      },
      {
        question: "What cloud providers do you work with?",
        answer:
          "We work with leading cloud providers such as AWS, Microsoft Azure, Google Cloud, and more, ensuring solutions tailored to your needs.",
      },
      {
        question: "Can you help with hybrid cloud setups?",
        answer:
          "Yes, we specialize in hybrid cloud solutions, combining public and private clouds for optimized performance, security, and flexibility.",
      },
      {
        question: "Do you offer support after deployment?",
        answer:
          "Yes, we provide ongoing support and maintenance to ensure your cloud environment remains secure, efficient, and up-to-date.",
      },
    ];
  
    return (
      <>
        <HeroSection2
          backgroundImage="/ServicesImages/cloudImg/cloudBG.jpeg"
          buttonGradient="bg-gradient-to-r from-pink-400 to-gray-600"
          title="Your Trusted Cloud Solutions Partner"
          description="Unlock the full potential of the cloud with our comprehensive solutions for scalability, innovation, and efficiency."
          imageSrc="/ServicesImages/cloudImg/cloudHero.png"
        />
        <AboutSection
          heading="Partner with WarelineTech for Cloud Excellence"
          description="Choose WarelineTech for industry-leading cloud solutions. Our expertise in cloud infrastructure, migration, and security ensures your business stays ahead in today's competitive digital landscape."
          imageSrc="/ServicesImages/cloudImg/cloudAbout.png"
        />
        <Carousel
          title="Transform Your Business"
          subtitle="Empowering your digital transformation with cutting-edge cloud technologies."
          data={carouselData}
        />
        <ProgressiveCarousel
          mainHeading="Explore Advanced Cloud Technologies"
          mainDescription="Harness the latest cloud innovations to drive your business forward."
          data={progressiveCarouselData}
          duration={5000}
        />
        <Roadmap
          title={roadmapData.title}
          description={roadmapData.description}
          items={roadmapData.items}
        />
        <Features
          heading="Discover the Advantages of Cloud Solutions"
          subheading="Why Choose the Cloud?"
          description="Cloud solutions are reshaping the way businesses operate, offering unparalleled scalability, flexibility, and cost efficiency."
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
  