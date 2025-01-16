import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why WarelineTech is the",
  highlight: "#1 Education App Development Company",
  description:
    "From e-learning platforms to virtual classrooms, our education app development services ensure seamless learning experiences, enhanced engagement, and academic success, transforming the education industry for students and educators alike.",
  features: [
    {
      title: "Custom E-Learning Platforms",
      description:
        "We design user-friendly and interactive platforms tailored to your institution's needs, offering engaging content and intuitive navigation for learners.",
    },
    {
      title: "Virtual Classrooms",
      description:
        "Leverage advanced technology to provide live virtual classrooms, enabling students and teachers to connect in real time from anywhere.",
    },
    {
      title: "Secure Data Management",
      description:
        "Integrate secure systems to manage student records, course content, and academic data, ensuring privacy and trust.",
    },
  ],
};

const carouselData = [
  {
    icon: "📚",
    title: "Custom E-Learning Platforms",
    description:
      "Develop bespoke platforms that allow students to access courses, track progress, and interact with instructors effortlessly, enhancing the overall learning experience.",
  },
  {
    icon: "🎥",
    title: "Virtual Classrooms",
    description:
      "Offer immersive virtual classrooms to provide real-time interaction and collaboration between students and educators.",
  },
  {
    icon: "📱",
    title: "Mobile Education Apps",
    description:
      "Deliver feature-rich mobile apps that enable students to learn, take quizzes, and access educational resources anytime, anywhere.",
  },
  {
    icon: "🔒",
    title: "Secure Data Systems",
    description:
      "Ensure secure management of student records, academic data, and sensitive information with robust security measures.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Empower educators with analytics tools to track student performance, engagement levels, and course effectiveness.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based platforms that scale effortlessly as your educational institution grows, ensuring seamless performance.",
  },
  {
    icon: "📍",
    title: "Location-Based Features",
    description:
      "Incorporate geolocation features to help students and teachers find nearby resources, events, or institutions.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for education app development?",
    answer:
      "WarelineTech offers comprehensive education app development services, including e-learning platforms, virtual classrooms, and analytics solutions.",
  },
  {
    question: "How can education app development services benefit my institution?",
    answer:
      "Our services help streamline learning processes, enhance student engagement, and improve educational outcomes by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop education apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops education apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my education app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly education apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop an education app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, an education app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my education app with existing platforms?",
    answer:
      "Yes, we specialize in integrating education apps with existing platforms, including LMS systems, analytics tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other education app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality education apps.",
  },
  {
    question: "Do you offer ongoing support and maintenance for education apps?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving market needs.",
  },
];

const methodologyData = {
  heading: "Education App Development Methodology",
  description:
    "Our methodology for education app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that enhance learning experiences, streamline operations, and drive success for students and educators.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand student and teacher needs. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize learning.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure data storage, and advanced authentication methods to protect sensitive user and academic data.",
    },
    {
      icon: "📍",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing tools like LMS platforms, analytics systems, and geolocation services. This ensures efficient operations and a superior user experience.",
    },
  ],
};

export default function Education() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/EducationBG.jpeg"
        buttonGradient="bg-gradient-to-r from-green-400 to-blue-400"
        title="Education App Development Company"
        description="Partner with WareLineTech, a leading education app development company, to transform your institution, enhance learning experiences, and deliver exceptional educational solutions for students and educators alike."
        imageSrc="/IndustriesImg/EducationHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/EducationAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Education with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the education industry. From virtual classrooms to analytics tools, explore solutions that enhance learning experiences and drive academic success."
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
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#00c6ff", to: "#0072ff" }}
        buttonGradientFrom="#32cd32"
        buttonGradientTo="#00bfff"
      />
    </>
  );
}
