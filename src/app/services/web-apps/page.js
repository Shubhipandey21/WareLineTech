import {
  FaEye,
  FaChartLine,
  FaCode,
  FaCogs,
  FaTools,
  FaSyncAlt,
  FaApple,
  FaAndroid,
  FaCodeBranch,
  FaLayerGroup,
  FaLock,
  FaGlobe,
} from "react-icons/fa";

import Roadmap from "@/components/Roadmap/Roadmap";
import HeroSection2 from "@/components/HeroSection2/HeroSection2";
import AboutSection from "@/components/ServicesAbout/ServicesAbout";
import FaqSection from "@/components/FAQSection/FAQSection";
import Features from "@/components/Features/Features";
import Carousel from "@/components/Carousel/Carousel";
import ProgressiveCarousel from "@/components/ProgressiveCarousel/ProgressiveCarousel";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
export default function WebApps() {
  const carouselData = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "At WarelineTech, we specialize in creating custom websites tailored to your business needs. Our team builds fully responsive, user-friendly websites that offer seamless experiences across all devices. Whether you need a simple landing page or a complex web application, we have the skills to bring your vision to life.",
      icon: <FaGlobe />, // Web Development icon
    },
    {
      id: 2,
      title: "E-Commerce Web Development",
      description:
        "We build feature-rich, secure, and scalable e-commerce platforms that help businesses grow their online presence. Our solutions are designed to enhance user experience, streamline operations, and boost sales.",
      icon: <FaApple />, // E-commerce icon
    },
    {
      id: 3,
      title: "Web App Development",
      description:
        "WarelineTech offers robust and scalable web app development solutions that empower businesses to thrive in the digital era. From responsive front-end development to powerful back-end architecture, we deliver highly functional and performance-driven web applications.",
      icon: <FaCodeBranch />, // Web App Development icon
    },
    {
      id: 4,
      title: "Content Management Systems (CMS)",
      description:
        "We design and develop intuitive CMS platforms that make it easy for businesses to manage their digital content. With our custom CMS solutions, you can update, manage, and scale your content with ease.",
      icon: <FaCogs />, // CMS icon
    },
    {
      id: 5,
      title: "Progressive Web Apps (PWAs)",
      description:
        "Our Progressive Web Apps combine the best of web and mobile apps, providing fast, reliable, and engaging experiences. PWAs are accessible on any device and work seamlessly, even offline, ensuring continuous business operations.",
      icon: <FaSyncAlt />, // PWA icon
    },
    {
      id: 6,
      title: "API Integrations",
      description:
        "We offer expert API integration services, helping businesses connect with third-party services and tools seamlessly. Our API solutions boost functionality, improve efficiency, and enable smooth data exchange.",
      icon: <FaLock />, // API icon
    },
    {
      id: 7,
      title: "Web Design & UI/UX",
      description:
        "Our design experts focus on creating aesthetically pleasing, user-centered designs that drive engagement. We ensure your website or web app offers an intuitive experience for every user.",
      icon: <FaLayerGroup />, // Design icon
    },
  ];

  const roadmapData = {
    title: "Building Web Solutions for the Future",
    description:
      "WarelineTech is redefining web development with cutting-edge technologies that drive growth and engagement. From web apps to custom solutions, we deliver innovative digital experiences.",
    items: [
      {
        icon: FaEye,
        title: "Vision",
        description:
          "Define clear web app objectives, user needs, and desired outcomes to ensure a successful development strategy.",
      },
      {
        icon: FaChartLine,
        title: "Analysis",
        description:
          "Evaluate user behaviors, market trends, and technological demands to inform the design and development process.",
      },
      {
        icon: FaCode,
        title: "Strategy",
        description:
          "Create a tailored roadmap to integrate features and technologies that deliver maximum value to the users.",
      },
      {
        icon: FaCogs,
        title: "Execution",
        description:
          "Develop, integrate, and optimize features for seamless functionality and enhanced user engagement.",
      },
      {
        icon: FaTools,
        title: "Monitoring",
        description:
          "Track performance metrics, user engagement, and system functionality to gather valuable insights for future enhancements.",
      },
      {
        icon: FaSyncAlt,
        title: "Optimization",
        description:
          "Refine features, improve load times, and enhance user experience based on real-time data and feedback.",
      },
    ],
  };

  const features = [
    {
      id: 1,
      title: "Responsive Web Design",
      description:
        "Our web apps and websites are built to be fully responsive, ensuring an optimal viewing experience across a wide range of devices, from desktop monitors to mobile phones.",
    },
    {
      id: 2,
      title: "Scalable Architecture",
      description:
        "We develop web solutions that can scale seamlessly as your business grows, ensuring long-term sustainability and performance.",
    },
    {
      id: 3,
      title: "SEO-Optimized Websites",
      description:
        "Our web solutions are designed with SEO in mind, ensuring that your website ranks well on search engines and attracts more organic traffic.",
    },
    {
      id: 4,
      title: "Custom Web Applications",
      description:
        "We create custom web apps designed to meet the specific needs of your business. Whether it's for internal tools or customer-facing solutions, we deliver high-performance web applications.",
    },
    {
      id: 5,
      title: "Cross-Browser Compatibility",
      description:
        "We ensure your website or web app works flawlessly across all major browsers, providing a consistent user experience.",
    },
  ];

  const progressiveCarouseldata = [
    {
      title: "Artificial Intelligence",
      description:
        "Enhancing web apps with AI to automate tasks and predict user behavior.",
      image: "https://i.pinimg.com/736x/fc/d8/31/fcd8310354601ee5a6f161324cee0ada.jpg", // Replace with actual image paths
    },
    {
      title: "Cloud Computing",
      description:
        "Leveraging cloud technologies for scalable and secure web apps.",
      image: "https://i.pinimg.com/736x/51/75/f2/5175f2a55bc8d44fc4c1b132477ac3ff.jpg",
    },
    {
      title: "Internet of Things",
      description:
        "Integrating IoT for real-time data and control from web apps.",
      image: "https://i.pinimg.com/736x/67/37/2f/67372feaf379406aeaa4bfde4d8b8318.jpg",
    },
    {
      title: "Augmented Reality (AR)",
      description:
        "Delivering immersive AR experiences directly through your browser.",
      image: "https://i.pinimg.com/474x/f8/d2/f2/f8d2f2a04b9d567a67bd17e0fe59664b.jpg",
    },
    {
      title: "Blockchain",
      description:
        "Incorporating blockchain technology into web apps for secure transactions.",
      image: "https://i.pinimg.com/736x/f0/ad/cf/f0adcfdc5a372181f4358be3cb330af2.jpg",
    },
  ];

  const faqData = [
    {
      "question": "Why do businesses need customized web app development?",
      "answer": "Customized web app development is essential for businesses that require tailored solutions to meet their specific needs. Unlike generic, off-the-shelf software, custom web apps are built to align with a business's unique workflows, objectives, and customer requirements. This ensures higher efficiency, a better user experience, and the flexibility to scale as the business grows. With a customized solution, businesses can integrate specific features that support their operations and stand out in the competitive market."
    },
    {
      "question": "How do you help address challenges during web app development?",
      "answer": "At WarelineTech, we address challenges during web app development by maintaining a proactive and transparent approach throughout the project. We work closely with clients to understand their vision and break down the project into manageable phases. Our team handles technical hurdles, including performance optimization, security concerns, and integration issues, through strategic planning and continuous testing. We ensure that any roadblocks are identified early and resolved efficiently to avoid delays and meet business goals on time."
    },
    {
      "question": "How long does it take to develop a web app?",
      "answer": "The timeline for web app development depends on the complexity of the app and the features required. Simple web applications may take around 3 to 6 months to develop, while more complex projects, such as e-commerce platforms or enterprise-level apps, may take 6 to 12 months or more. The development process includes planning, design, development, testing, and deployment, and we work with clients to define realistic timelines and ensure progress through clear milestones and regular updates."
    },
    {
      "question": "How much does it cost to develop a web application?",
      "answer": "The cost of web application development can vary based on factors like the complexity of features, technology stack, and design requirements. Simple web apps may cost between $5,000 and $15,000, while more complex projects can range from $30,000 to $100,000 or more. To provide an accurate estimate, we evaluate the specific needs of your business and project scope. We offer a detailed consultation and proposal to ensure that the final solution is both cost-effective and aligned with your objectives."
    },
    {
      "question": "Why should you choose WarelineTech for web app development?",
      "answer": "WarelineTech stands out for its expertise in delivering innovative, scalable, and secure web applications that meet the unique needs of businesses. We are committed to providing high-performance solutions through a user-centered design approach, using the latest technologies and industry best practices. Our team works closely with clients throughout the development process, offering transparency and collaboration at every step. With a focus on long-term support and maintenance, WarelineTech ensures that your web app evolves with your business, staying relevant and competitive in the market."
    }
  ];
  

  return (
    <>
      <HeroSection2
        backgroundImage="/ServicesImages/WebAppImg/WebAppbg.jpeg"
        buttonGradient="bg-gradient-to-r from-blue-400 to-gray-900"
        title="Your Trusted Web App Development Partner"
        description="From custom websites to scalable web apps, we offer end-to-end solutions that drive your business forward."
        imageSrc="https://images.pexels.com/photos/16129703/pexels-photo-16129703/free-photo-of-man-coding-on-computers-sitting-at-desk.jpeg"
      />
      <AboutSection
        heading="Partner with WarelineTech for Exceptional Web Development"
        description="Choose WarelineTech for web app development services that are reliable, scalable, and secure. Our team stays ahead of the curve, continuously updating their skills to leverage the latest web technologies."
        imageSrc="/ServicesImages/WebAppImg/WebAppAbout.png"
        altText="About WarelineTech Web Development"
      />
      <Features
        heading="Discover the Future of Web App Development"
        subheading="Why Web Apps?"
        description="Web apps are transforming the digital landscape, providing businesses with scalable, flexible, and powerful solutions. By combining the best of web technologies and seamless user experiences, modern web apps offer accessibility across devices and platforms, enabling businesses to reach and engage users in innovative ways."
        features={features}
      />
      <Roadmap
        title={roadmapData.title}
        description={roadmapData.description}
        items={roadmapData.items}
      />
      <ProgressiveCarousel
        mainHeading="Latest Advanced Technologies For Your Web App"
        mainDescription="We utilize cutting-edge technologies to create innovative and high-performance web apps that drive business growth and engagement."
        data={progressiveCarouseldata}
        duration={5000}
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
