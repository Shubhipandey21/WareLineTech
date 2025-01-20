import {
  FaEye,
  FaChartLine,
  FaCode,
  FaCogs,
  FaTools,
  FaSyncAlt,
  FaApple, FaAndroid, FaCodeBranch, FaLayerGroup, FaLock,  FaGlobe
} from "react-icons/fa";


import Roadmap from "@/components/Roadmap/Roadmap";
import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import FaqSection from "@/components/FAQSection/FAQSection";
import Features from "@/components/Features/Features";
import Carousel from "@/components/Carousel/Carousel";
import ProgressiveCarousel from "@/components/ProgressiveCarousel/ProgressiveCarousel";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
export default function MobileApps() {
  const carouselData = [
    {
      id: 1,
      title: "iOS App Development",
      description:
        "WarelineTech specializes in crafting exceptional iOS applications, making us the preferred choice for businesses targeting Apple users. Our experienced team develops top-notch, user-friendly apps adhering to Apple's stringent guidelines. We assist you through every stage, from initial concept to a successful App Store launch.",
      icon: <FaApple />, // iOS icon
    },
    {
      id: 2,
      title: "Android App Development",
      description:
        "WarelineTech excels in Android app development, providing innovative solutions that dominate Google Play Store. Our team delivers sleek, high-performing applications that captivate users and enhance business reach with cutting-edge functionality.",
      icon: <FaAndroid />, // Android icon
    },
    {
      id: 3,
      title: "React Native App Development",
      description:
        "With expertise in React Native, WarelineTech builds versatile, platform-agnostic applications. Our developers create visually stunning, high-performing apps that work seamlessly on both iOS and Android devices, ensuring a unified user experience.",
      icon: <FaCodeBranch />, // React Native icon
    },
    {
      id: 4,
      title: "Flutter App Development",
      description:
        "WarelineTech leverages the power of Flutter to create fast, scalable, and multi-platform mobile applications. Our solutions deliver a seamless user experience and help businesses expand their reach without compromising on quality or performance.",
      icon: <FaLayerGroup />, // Flutter icon
    },
    {
      id: 5,
      title: "DApp Development",
      description:
        "WarelineTech’s team of experts focuses on building secure, scalable, and decentralized applications for industries like gaming, healthcare, and finance. We transform your ideas into reliable, user-centric applications that provide exceptional experiences for users worldwide.",
      icon: <FaLock />, // dApp icon
    },
    {
      id: 6,
      title: "Cross-Platform Apps",
      description:
        "WarelineTech develops cross-platform applications that streamline maintenance and enhance performance. By integrating native and web technologies, we create apps that deliver a consistent experience across all devices, ensuring broad audience engagement without sacrificing quality.",
      icon: <FaSyncAlt />, // Cross-platform icon
    },
    {
      id: 7,
      title: "Progressive Web Apps",
      description:
        "WarelineTech’s Progressive Web App (PWA) solutions merge the benefits of native apps with the flexibility of web technologies. PWAs are fast, reliable, and engaging, offering seamless digital experiences across devices and enabling businesses to captivate audiences with high performance and accessibility.",
      icon: <FaGlobe />, // PWA icon
    },
  ];
  const roadmapData = {
    title: "Redefining User Engagement & Loyalty",
    description:
      "We at WarelineTech are spearheading an AI-powered revolution in mobile app development, leveraging data, user preferences, and technology for sculpting cutting-edge mobile solutions.",
    items: [
      {
        icon: FaEye,
        title: "Vision",
        description:
          "Define clear AI app objectives, target audience, and desired outcomes for successful development.",
      },
      {
        icon: FaChartLine,
        title: "Analysis",
        description:
          "Assess data, user preferences, and market trends to inform AI app development decisions.",
      },
      {
        icon: FaCode,
        title: "Strategy",
        description:
          "Create a comprehensive AI app roadmap, prioritizing features and technologies for maximum impact.",
      },
      {
        icon: FaCogs,
        title: "Execution",
        description:
          "Develop, integrate, and test AI components to ensure seamless functionality and user experience.",
      },
      {
        icon: FaTools,
        title: "Monitoring",
        description:
          "Continuously track AI app performance, user engagement, and key metrics for data-driven insights.",
      },
      {
        icon: FaSyncAlt,
        title: "Optimization",
        description:
          "Refine AI models, features, and user experiences based on monitoring insights for ongoing improvement.",
      },
    ],
  };
  const features = [
    {
      id: 1,
      title: "Personalized User Interface",
      description:
        "AI powers highly personalized interfaces, tailoring the app layout, themes, and content to individual user preferences for enhanced mobile experiences.",
    },
    {
      id: 2,
      title: "Task Automation",
      description:
        "Automates repetitive mobile tasks, such as notifications, reminders, and form autofills, saving users time and reducing effort.",
    },
    {
      id: 3,
      title: "Predictive User Behavior",
      description:
        "Analyzes user interactions to predict future app usage patterns, offering timely suggestions and optimizing app performance.",
    },
    {
      id: 4,
      title: "Smart Recommendations",
      description:
        "Provides context-aware, personalized recommendations for apps, content, and features, improving user engagement.",
    },
    {
      id: 5,
      title: "Seamless Scalability",
      description:
        "Ensures the app performs smoothly and handles increasing user demands, from small-scale use to millions of active users.",
    },
  ];

 const progressiveCarouseldata = [
  {
      title: "Artificial Intelligence",
      description: "We leverage AI technologies to enhance app capabilities.",
      image: "/ServicesImages/MobileAppsImg/AIApp.png", // Replace with actual image paths
  },
  
  {
    title: "Cloud Computing",
    description: "Scalable and secure cloud solutions for your business.",
    image: "/ServicesImages/MobileAppsImg/CCApp.png",
},
  {
    title: "Internet of Things",
    description: "Integrating IoT for real-time insights and improved efficiency.",
    image: "/ServicesImages/MobileAppsImg/IOTApp.png",
},
  {
      title: "AR/VR",
      description: "Immersive AR/VR experiences tailored for various industries.",
      image: "/ServicesImages/MobileAppsImg/ARVRApp.jpg",
  },
  {
      title: "Metaverse",
      description: "Building interconnected virtual environments for the future.",
      image: "/ServicesImages/MobileAppsImg/METAApp.png",
  },
];

const faqData = [

  {
    "question": "What are the benefits of mobile app development?",
    "answer": "Mobile app development offers several key benefits. It allows businesses to reach a wider audience, as mobile apps can be accessed anytime and anywhere. Apps enhance customer engagement through push notifications, enabling direct communication. They also provide a superior user experience by being optimized for mobile devices, offering smooth and fast interactions. A well-designed app can significantly boost brand visibility. Many apps also offer offline functionality, allowing users to access core features without internet connectivity. Additionally, mobile apps provide various monetization opportunities, including in-app purchases, ads, and subscription models."
  },
  {
    "question": "How to choose a reliable partner for mobile app development services?",
    "answer": "When choosing a reliable partner for mobile app development, it’s essential to consider several factors. Start by looking for a partner with a proven track record and experience in developing apps within your industry. Reviewing their portfolio can help determine if they have worked on similar projects and whether their style matches your needs. Client reviews and testimonials can provide insight into their reputation and service quality. It’s also important to ensure that the development team possesses technical expertise in the specific platform (iOS, Android, or cross-platform) you require. Transparent communication is key, as a good partner will keep you informed throughout the development process. Finally, ensure that they offer post-launch support and maintenance services to ensure long-term success."
  },
  {
    "question": "Are cross-platform applications better than native apps?",
    "answer": "Choosing between cross-platform and native apps depends on your project’s specific requirements. Cross-platform apps are cost-effective as they allow a single codebase to work on both iOS and Android platforms, making them ideal for businesses on a budget. However, cross-platform apps may not fully leverage platform-specific features, potentially affecting performance. Native apps, on the other hand, are developed for specific platforms, offering better performance, speed, and access to all device features. They are suitable for complex, high-performance applications but require separate development for each platform, which can be more expensive. Ultimately, the choice depends on your priorities regarding budget, functionality, and performance."
  },
  {
    "question": "What are the different features that you have integrated into the mobile apps developed by you?",
    "answer": "At Warelinetech, we integrate a wide range of features into the mobile apps we develop. Our apps include push notifications to engage users in real-time, keeping them updated with relevant information. We ensure secure user authentication, offering login systems that include social media options for ease of access. For location-based services, we integrate GPS functionality to provide mapping and location tracking features. We also offer seamless payment gateway integration, enabling secure in-app transactions. Additionally, our apps support multimedia features like audio, video, and image integration, allowing for richer, more interactive user experiences."
  },
  {
    "question": "Will you provide documentation for my solution or mobile app development?",
    "answer": "Yes, we provide thorough documentation for all the mobile apps we develop. This includes technical specifications, API integration details, and user manuals to help guide you through the app’s setup, usage, and troubleshooting. Our documentation ensures that you have a comprehensive understanding of the app’s functionalities and architecture."
  },
  {
    "question": "Do I own the code?",
    "answer": "Yes, once the project is completed and the final payment is made, you will own the rights to the code and all intellectual property related to your mobile app. We ensure that all deliverables, including the source code, are fully transferred to you, giving you complete ownership and control."
  },
  {
    "question": "Which cities in the USA are your services focused on?",
    "answer": "At Warelinetech, we provide mobile app development services to clients across the USA, including major cities like New York, San Francisco, Chicago, Los Angeles, and Miami. Our services are not limited to these cities, as we offer remote development solutions to clients nationwide, ensuring quality support wherever you are located."
  },
]

  return (
    <>
    <HeroSection2
        backgroundImage="/ServicesImages/MobileAppsImg/MobileAppsbg.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-400 to-gray-900"
        title="Your Trusted Mobile App Development Partner"
        description=" From innovative app design to seamless development and ongoing maintenance, we offer end-to-end solutions that drive success and growth."
        imageSrc="/ServicesImages/MobileAppsImg/MobileAppHero.jpg"
      />
      <AboutSection
        heading="Partner with WarelineTech for Success"
        description="Choose WarelineTech for unparalleled mobile app development services. Our focus on client satisfaction, combined with our expertise in Android and iOS platforms, guarantees exceptional results. Our developers continually update their skills with the latest mobile technologies. We use advanced tools and techniques to build your app, ensuring it's modern, efficient, and competitive in today's fast-paced digital marketplace."
        imageSrc="/ServicesImages/MobileAppsImg/MobileAbout.png"
      />
      <Carousel
        title="Innovate at Scale"
        subtitle="At WarelineTech, we recognize that successfully launching an MVP is just the first step in your journey toward success. Now, it’s time to propel your product to greater heights."
        data={carouselData}
      />
       <ProgressiveCarousel
       mainHeading="Latest Advanced Technologies For Your App"
        mainDescription="We leverage cutting-edge technologies to build innovative mobile apps that drive growth and success."
        data={progressiveCarouseldata} duration={5000} />
      <Roadmap
        title={roadmapData.title}
        description={roadmapData.description}
        items={roadmapData.items}
      />
       
      <Features
        heading="Discover Why AI-Led Mobile Apps Are The Future Of Technology And Business"
        subheading="Why Artificial Intelligence?"
        description="AI-powered mobile apps are revolutionizing the way businesses engage with users and drive growth. By leveraging the power of machine learning, natural language processing, and predictive analytics, AI-led apps deliver personalized, intuitive, and seamless experiences that boost user satisfaction and loyalty."
        features={features}
      />
      <FaqSection data={faqData} />
      <ContactUsSection
        title="Get in Touch"
        subtitle="We'd be happy to assist you!"
        description="Contact us for any questions or inquiries about our services."
        buttonText="Contact Now"
        highlightText="right now!"
        highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
        buttonGradientFrom="#00c6ff"
        buttonGradientTo="#0072ff"
      />

    </>
  );
}
