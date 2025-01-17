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
    "From virtual classrooms to administrative tools, our education app development services ensure innovative solutions, seamless communication, and enhanced learning experiences, driving success and growth in the education sector.",
  features: [
    {
      title: "Custom Learning Platforms",
      description:
        "We design user-friendly platforms tailored to educational institutions, enabling streamlined learning processes, enhanced student experiences, and efficient management.",
    },
    {
      title: "Interactive Learning Modules",
      description:
        "Leverage technology to deliver engaging and interactive educational content, enhancing knowledge retention and student participation.",
    },
    {
      title: "Secure Administrative Tools",
      description:
        "Integrate secure tools for student data management, attendance tracking, and grade reporting, ensuring efficient and reliable administration.",
    },
  ],
};

const carouselData = [
  {
    icon: "📚",
    title: "Custom Learning Platforms",
    description:
      "Develop tailored solutions for virtual classrooms, online courses, and educational management, ensuring superior outcomes for institutions and learners.",
  },
  {
    icon: "🎓",
    title: "Student Engagement Tools",
    description:
      "Enhance student participation with gamified learning, live quizzes, and collaborative tools, fostering a dynamic learning environment.",
  },
  {
    icon: "📱",
    title: "Mobile Education Apps",
    description:
      "Build intuitive mobile apps that provide access to courses, study materials, and progress tracking on the go.",
  },
  {
    icon: "🔒",
    title: "Secure Data Management",
    description:
      "Streamline data storage and sharing with secure systems, improving collaboration and protecting sensitive student information.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with scalable cloud solutions, ensuring reliable performance during high-demand periods.",
  },
  {
    icon: "🎯",
    title: "Performance Analytics",
    description:
      "Monitor and improve student performance with detailed metrics and reporting capabilities.",
  },
  {
    icon: "💻",
    title: "Integrated Learning Systems",
    description:
      "Connect seamlessly with tools for content delivery, assessment, and administrative tasks to create a unified ecosystem.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for education app development?",
    answer:
      "WarelineTech provides comprehensive education app development services, including virtual classrooms, student engagement tools, administrative systems, and mobile app solutions.",
  },
  {
    question: "How can education app development services benefit my institution?",
    answer:
      "Our services enhance learning experiences, improve student engagement, streamline operations, and provide real-time insights, ensuring success in the education sector.",
  },
  {
    question: "Do you develop education apps for both web and mobile platforms?",
    answer:
      "Yes, WarelineTech develops education solutions for both web and mobile platforms, ensuring a seamless experience across devices.",
  },
  {
    question: "Can I hire dedicated developers for my education app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly education solutions tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop an education app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, an education app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my education app with existing platforms?",
    answer:
      "Yes, we specialize in integrating education apps with existing platforms, including learning management systems, assessment tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other education app development companies?",
    answer:
      "WarelineTech stands out for its innovative solutions, user-centric designs, secure architecture, and a dedicated team committed to delivering high-quality education apps.",
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
    "Our methodology for education app development focuses on delivering secure, scalable, and user-centric solutions. By leveraging cutting-edge technology and agile principles, we create applications that enhance learning experiences, optimize administrative workflows, and drive institutional growth.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct extensive research to deeply understand educational workflows and your institution’s goals. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and simplify operations.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure data storage, and fraud prevention measures to ensure sensitive data remains protected, fostering trust and compliance.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      text: "Our apps are designed to integrate flawlessly with existing platforms such as learning management systems, assessment tools, and third-party APIs. This connected ecosystem ensures efficient operations and enhanced educational capabilities.",
    },
  ],
};

export default function Education() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/educationBG.jpeg"
        buttonGradient="bg-gradient-to-r from-purple-400 to-pink-400"
        title="Education App Development Company"
        description="Partner with WareLineTech, a leading education app development company, to transform your institution, optimize operations, and deliver exceptional learning experiences."
        imageSrc="/IndustriesImg/educationHero.jpg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/educationAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Education with Innovative Solutions"
        subtitle="Discover how advanced technologies are reshaping the education sector. From virtual classrooms to administrative tools, explore solutions that enhance learning and drive growth."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-yellow-200 to-white-50"
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
