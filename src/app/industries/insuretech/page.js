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
    "From policy management to claims processing, our InsureTech app development services ensure seamless operations, enhanced user engagement, and business growth, transforming the insurance industry for both providers and customers.",
  features: [
    {
      title: "Custom Policy Management",
      description:
        "We design user-friendly platforms tailored to your business, ensuring intuitive navigation and efficient management of insurance policies.",
    },
    {
      title: "Automated Claims Processing",
      description:
        "Leverage advanced technology to provide faster and more efficient claims processing, enhancing customer satisfaction and trust.",
    },
    {
      title: "Secure Data Handling",
      description:
        "Integrate robust security measures to manage sensitive customer and policyholder data, ensuring privacy and compliance.",
    },
  ],
};

const carouselData = [
  {
    icon: "📄",
    title: "Custom Policy Management",
    description:
      "Develop bespoke platforms that allow users to manage, renew, and explore policies effortlessly, enhancing the overall customer experience.",
  },
  {
    icon: "⚙️",
    title: "Automated Claims Processing",
    description:
      "Streamline claims management with automated workflows, reducing processing times and improving accuracy.",
  },
  {
    icon: "📱",
    title: "Mobile Insurance Apps",
    description:
      "Deliver feature-rich mobile apps that enable users to access policies, file claims, and receive updates anytime, anywhere.",
  },
  {
    icon: "🔒",
    title: "Secure Data Systems",
    description:
      "Ensure secure handling of sensitive customer information with encryption and advanced authentication protocols.",
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description:
      "Empower insurers with data analytics tools to track performance, understand customer behavior, and make informed decisions.",
  },
  {
    icon: "☁️",
    title: "Cloud-Based Scalability",
    description:
      "Optimize operations with cloud-based platforms that scale effortlessly as your business grows, ensuring seamless performance.",
  },
  {
    icon: "🤝",
    title: "Customer Engagement Tools",
    description:
      "Incorporate interactive features to keep policyholders engaged, informed, and connected with your services.",
  },
];

const faqData = [
  {
    question: "What services does WarelineTech offer for InsureTech app development?",
    answer:
      "WarelineTech offers comprehensive InsureTech app development services, including policy management platforms, claims processing solutions, and analytics tools.",
  },
  {
    question: "How can InsureTech app development services benefit my business?",
    answer:
      "Our services help streamline insurance operations, enhance customer engagement, and improve profitability by offering innovative and user-friendly solutions.",
  },
  {
    question: "Do you develop InsureTech apps for both iOS and Android platforms?",
    answer:
      "Yes, WarelineTech develops InsureTech apps for both iOS and Android platforms, ensuring a seamless experience across all devices.",
  },
  {
    question: "Can I hire dedicated developers for my InsureTech app project?",
    answer:
      "Absolutely! We offer dedicated developers who specialize in building secure, scalable, and user-friendly InsureTech apps tailored to your specific needs.",
  },
  {
    question: "How long does it typically take to develop an InsureTech app?",
    answer:
      "The development timeline depends on the app's complexity and features. On average, an InsureTech app can take 4 to 8 months to develop, including design, development, testing, and deployment.",
  },
  {
    question: "Can you integrate my InsureTech app with existing platforms?",
    answer:
      "Yes, we specialize in integrating InsureTech apps with existing platforms, including CRM systems, analytics tools, and third-party APIs, to ensure seamless functionality.",
  },
  {
    question: "What sets WarelineTech apart from other InsureTech app development companies?",
    answer:
      "WarelineTech stands out for its focus on innovative solutions, user-centric designs, scalable architecture, and a dedicated team committed to delivering high-quality InsureTech apps.",
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
    "Our methodology for InsureTech app development focuses on delivering innovative, secure, and user-centric solutions. By leveraging advanced technology and agile principles, we create applications that streamline operations, enhance customer satisfaction, and drive business growth for insurers.",
  cards: [
    {
      icon: "📱",
      title: "User-Centric Design",
      text: "We conduct in-depth research to understand policyholder and insurer needs. By focusing on intuitive and seamless interfaces, we craft user-friendly designs that improve engagement and optimize processes.",
    },
    {
      icon: "🔒",
      title: "Robust Security Measures",
      text: "Security is at the core of our development process. We employ SSL encryption, secure data storage, and advanced authentication methods to protect sensitive customer and business data.",
    },
    {
      icon: "☁️",
      title: "Scalable Cloud Solutions",
      text: "Our apps are designed to leverage cloud-based platforms for scalability and performance, ensuring your business can adapt to growing demands effortlessly.",
    },
  ],
};

export default function InsureTech() {
  return (
    <>
      <HeroSection2
        backgroundImage="/IndustriesImg/InsureTechBG.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-400 to-purple-400"
        title="InsureTech App Development Company"
        description="Partner with WareLineTech, a leading InsureTech app development company, to transform your insurance business, streamline operations, and deliver exceptional digital experiences for policyholders."
        imageSrc="/IndustriesImg/InsureTechHome.jpeg"
      />

      <AboutSection
        imageSrc="/IndustriesImg/InsureTechAbout.jpeg" // Replace with your actual image path
        content={content}
      />
      <Carousel
        title="Transforming Insurance with Innovative Solutions"
        subtitle="Discover how cutting-edge technologies are reshaping the insurance industry. From automated claims processing to analytics tools, explore solutions that enhance operations and drive customer satisfaction."
        data={carouselData}
      />
      <MethodologySection
        heading={methodologyData.heading}
        description={methodologyData.description}
        cards={methodologyData.cards}
        gradient="from-purple-200 to-blue-50"
      />
      <FaqSection data={faqData} />

      <ContactUsSection
        title="Contact Us"
        subtitle="We'd love to hear from you!"
        description="Reach out to us for more information about our services."
        buttonText="Get in Touch"
        highlightText="today!"
        highlightGradient={{ from: "#6a11cb", to: "#2575fc" }}
        buttonGradientFrom="#7b4397"
        buttonGradientTo="#dc2430"
      />
    </>
  );
}
