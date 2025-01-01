import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import MethodologySection from "@/components/Methodology/Methodology";
import AboutSection from "@/components/AboutSection/AboutSection";
import Carousel from "@/components/Carousel/Carousel";
import FaqSection from "@/components/FAQSection/FAQSection";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

const content = {
  title: "This is why Techahead is the",
  highlight: "#1 Healthcare App Development Company",
  description:
    "From diagnosis to recovery, our healthcare app development services and tools ensure streamlined processes & enhanced communication, ensuring world-class healthcare services.",
  features: [
    {
      title: "AI-Powered Diagnostics",
      description:
        "We leverage artificial intelligence to enhance diagnostic accuracy and speed, improving patient outcomes and treatment efficiency.",
    },
    {
      title: "Seamless Interoperability",
      description:
        "Ensuring smooth data exchange between various healthcare systems, enabling comprehensive patient care and informed decision-making.",
    },
    {
      title: "Secure Telemedicine Solutions",
      description:
        "Developing robust, HIPAA-compliant telehealth platforms that expand access to quality healthcare services anytime, anywhere.",
    },
  ],
};

const carouselData = [
  {
    icon: "🔬",
    title: "AI-Powered Diagnostics",
    description:
      "Leverage artificial intelligence to enhance diagnostic accuracy, identify patterns, and detect diseases at earlier stages. AI algorithms analyze medical images and data, supporting healthcare professionals in making quicker, more accurate decisions.",
  },
  {
    icon: "💊",
    title: "Telemedicine Platforms",
    description:
      "Empower remote healthcare with virtual consultations, reducing patient travel and expanding access to specialists. Telemedicine brings healthcare services to the comfort of patients' homes, improving accessibility, convenience, and affordability.",
  },
  {
    icon: "📱",
    title: "Mobile Health Apps",
    description:
      "Enable patients to manage health through personalized mobile apps for tracking medications, fitness, and vital stats. These apps give users the ability to access their health data, communicate with doctors, and take proactive steps to improve their well-being.",
  },
  {
    icon: "📡",
    title: "IoT-Enabled Devices",
    description:
      "Smart devices like wearables and monitors provide real-time health data for improved patient care and monitoring. IoT technology collects continuous health metrics, sending alerts to healthcare providers for timely interventions and better patient outcomes.",
  },
  {
    icon: "🧬",
    title: "Genomics & Precision Medicine",
    description:
      "Utilize genomics and data analytics to tailor treatments specific to an individual’s genetic profile. Precision medicine offers targeted therapies that are more effective, minimizing side effects and optimizing treatment plans.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Health Records",
    description:
      "Securely store and access patient health records on the cloud for seamless sharing and collaboration. Cloud-based systems improve the accuracy and efficiency of healthcare delivery by providing healthcare professionals with easy access to a patient’s complete medical history.",
  },
  {
    icon: "⚕️",
    title: "Robotic Surgery",
    description:
      "Enhance surgical precision and recovery times with advanced robotic systems in operating rooms. Robotic surgery minimizes human error, improves outcomes, and reduces recovery times, enabling patients to return to normal activities faster.",
  },
];
const faqData = [
  
      {
        question:
          "What services does WarelineTech Healthcare offer in app development?",
        answer:
          "WarelineTech Healthcare provides comprehensive app development services, including custom healthcare app design, telemedicine platform development, electronic health record (EHR) integration, mobile health (mHealth) solutions, and IoT-enabled device connectivity.",
      },
      {
        question:
          "How can healthcare app development services benefit my medical practice or hospital?",
        answer:
          "Our healthcare app development services enhance patient engagement, streamline workflows, improve data accessibility, and enable remote consultations, helping you deliver better care while optimizing operational efficiency.",
      },
      {
        question: "Do you develop apps for both iOS and Android platforms?",
        answer:
          "Yes, WarelineTech Healthcare develops apps for both iOS and Android platforms, ensuring your solution is accessible to a wide range of users and devices.",
      },
      {
        question:
          "Can I hire dedicated iOS app developers for my healthcare app project?",
        answer:
          "Absolutely! We offer dedicated iOS app developers who specialize in building secure and user-friendly healthcare apps tailored to your specific requirements.",
      },
      {
        question:
          "How long does it typically take to develop a healthcare app?",
        answer:
          "The development timeline depends on the app's complexity and features. On average, a healthcare app can take 3 to 6 months to develop, including design, development, testing, and deployment.",
      },
      {
        question:
          "Can you integrate my healthcare app with existing hospital systems?",
        answer:
          "Yes, we specialize in integrating apps with existing hospital systems, including EHRs, practice management software, and other healthcare infrastructure, ensuring seamless functionality.",
      },
      {
        question:
          "What sets WarelineTech Healthcare apart from other app development companies?",
        answer:
          "WarelineTech Healthcare stands out for its domain expertise, focus on compliance with healthcare regulations like HIPAA, innovative solutions, and a dedicated team committed to delivering secure, scalable, and user-friendly apps.",
      },
      {
        question:
          "Do you offer ongoing support and maintenance for healthcare apps?",
        answer:
          "Yes, we provide ongoing support and maintenance services to ensure your app remains secure, updated, and fully functional, adapting to evolving needs and technologies.",
      },
    ]
const methodologyData = {
  heading: "Healthcare App Development Methodology",
  description:
    "Our secret recipe for healthcare app development combines futuristic technology stacks with deep industry expertise. We prioritize patient-centric design, robust security measures, and seamless integration with existing healthcare systems. Our agile healthcare app development services methodology ensures rapid deployment and continuous improvement, resulting in innovative, compliant, and user-friendly healthcare applications that revolutionize patient care and streamline medical processes.",
  cards: [
    {
      icon: "👤",
      title: "User-Centric Design",
      text: "Our approach begins with comprehensive user research, involving patients, healthcare professionals, and administrators. We create intuitive interfaces and streamlined workflows that cater to diverse user needs. By incorporating feedback throughout the healthcare app development services process, we ensure our apps are functionally powerful and easy to use, promoting high adoption rates and improved patient outcomes.",
    },
    {
      icon: "🔒",
      title: "Data Security Framework",
      text: "We implement a multi-layered security framework to protect sensitive patient data. This includes end-to-end encryption, secure authentication protocols, and regular security audits. Our apps are designed to comply with HIPAA, GDPR, and other relevant healthcare regulations. We also integrate advanced features like blockchain for immutable record-keeping and AI-powered anomaly detection to prevent data breaches.",
    },
    {
      icon: "🌐",
      title: "Interoperability Solutions",
      text: "We focus on creating healthcare apps that seamlessly integrate with existing electronic health record (EHR) systems and medical devices. Our apps utilize standard healthcare data formats (like HL7 and FHIR) and APIs to ensure smooth data exchange. This interoperability enables comprehensive patient profiles, facilitates coordinated care, and supports data-driven decision-making across the healthcare ecosystem.",
    },
  ],
};

export default function Healthcare() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/HealthCareBg.jpeg"
        buttonGradient="bg-gradient-to-r from-green-400 to-yellow-500"
        title="Insurance App Development Company"
        description="Partner with TechAhead, a leading Insurance App development company to transform insurance processes & drive efficiency and unmatched customer satisfaction"
        imageSrc="/IndustriesImg/HealthCareHero.png"
      />
      <AboutSection
        imageSrc="/IndustriesImg/HealthCareAbout.png" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Revolutionizing Healthcare with Tech-Driven Solutions"
        subtitle="Explore how cutting-edge technologies are transforming modern healthcare. From AI-powered diagnostics to IoT-enabled devices, discover innovative solutions that enhance patient care, improve efficiency, and enable personalized treatment—empowering a healthier, connected future"
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient= "from-green-100 to-white-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
        buttonGradientFrom="#8a2be2"
        buttonGradientTo="#ff6347"
      />
    </>
  );
}
