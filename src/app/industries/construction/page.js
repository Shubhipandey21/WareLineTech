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
    "From project management to on-site collaboration, our construction app development services ensure streamlined operations, enhanced productivity, and business growth, revolutionizing the construction industry for contractors and builders alike.",
  features: [
    {
      title: "Custom Project Management Tools",
      description:
        "We design user-friendly and visually appealing project management platforms tailored to your business needs, ensuring efficient collaboration and resource management.",
    },
    {
      title: "Real-Time Collaboration",
      description:
        "Leverage advanced technology to enable real-time communication and collaboration among teams, ensuring projects stay on track and within budget.",
    },
    {
      title: "Secure Data Handling",
      description:
        "Integrate secure data storage and sharing solutions to protect sensitive project information and build trust with your stakeholders.",
    },
  ],
};

const carouselData = [
  {
    icon: "🏗️",
    title: "Custom Project Management Tools",
    description:
      "Develop bespoke platforms that allow contractors and teams to plan, track, and execute projects seamlessly, enhancing efficiency.",
  },
  {
    icon: "📈",
    title: "Analytics & Reporting",
    description:
      "Empower construction businesses with analytics tools to monitor progress, forecast trends, and make informed decisions.",
  },
  {
    icon: "📱",
    title: "Mobile Construction Apps",
    description:
      "Deliver feature-rich mobile apps that enable on-site teams to manage tasks, report issues, and access project data on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Data Management",
    description:
      "Enable secure data sharing and storage with trusted solutions, ensuring the protection of sensitive project information.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based platforms that scale effortlessly as your business grows, ensuring seamless performance.",
  },
  {
    icon: "🔧",
    title: "On-Site Collaboration Tools",
    description:
      "Facilitate real-time collaboration and communication between on-site and off-site teams to streamline project workflows.",
  },
  {
    icon: "📍",
    title: "Geolocation Services",
    description:
      "Incorporate geolocation features to track equipment, monitor job sites, and improve logistical efficiency.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for construction app development?",
    answer:
      "WarelineTech offers comprehensive construction app development services, including project management tools, on-site collaboration apps, and analytics solutions.",
  },
  {
    question: "How can construction app development services benefit my business?",
    answer:
      "Our services help streamline construction processes, enhance team collaboration, and improve project outcomes by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop construction apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops construction apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my construction app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly construction apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop a construction app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, a construction app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my construction app with existing platforms?",
    answer:
      "Yes, we specialize in integrating construction apps with existing platforms, including ERP systems, project management tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other construction app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality construction apps.",
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
    "Our methodology for construction app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance productivity, streamline operations, and drive business growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand contractor needs and business goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize construction workflows.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure data storage, and advanced authentication methods to protect sensitive project information.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like ERP systems, project management platforms, and geolocation services. This ensures efficient operations and a superior user experience.",
    },
  ],
};

export default function Construction() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/ConstructionBG.jpeg"
        buttonGradient="bg-gradient-to-r from-gray-400 to-yellow-500"
        title="Construction App Development Company"
        description="Partner with WareLineTech, a leading construction app development company, to transform your construction business, streamline operations, and deliver exceptional project outcomes."
        imageSrc="/IndustriesImg/ConstructionHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/ConstructionAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Construction with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the construction industry. From project management to secure data handling, explore solutions that enhance productivity and drive business growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-yellow-200 to-gray-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ffd700", to: "#ffa500" }}
        buttonGradientFrom="#ffcc00"
        buttonGradientTo="#ff8c00"
      />
    </>
  );
}
