'use client';
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";
import FaqSection from "@/components/FAQSection/FAQSection";
import Carousel from "@/components/Carousel/Carousel";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import WhyHireUs from "@/components/WhyHireUs/WhyHireUs";
import Team from "@/components/Team/Team";

const AboutUs = () => {

    const cardsData = [
        {
            title: "One Stop Partner",
            description: "We are a true one-stop agency and specialists in providing turnkey services covering all aspects of Digital Transformation- Mobile, Web, Cloud, IoT, DevOps, and AI."
        },
        {
            title: "Diversified Team",
            description: "Our creative designers from Los Angeles collaborate with our geeky programmers from New Delhi to deliver next-gen digital solutions."
        },
        {
            title: "Thinking Ahead",
            description: 'Our development philosophy is based on "Thinking Ahead", with a deep-rooted Product Mindset and Customer-centric approach.'
        }
    ];


    const imageUrls = [
        'https://lh3.googleusercontent.com/p/AF1QipPaNZtmVrxlCdxfyQGz7dLTSj_sbJIUjgddXKpM=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipOwSEHKJ-xiq_VLmMfMRT11GrKadWTLSjepAGBZ=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipMMrKujBu8mg2odbJTDFhhLmpWt9SISEkHM8gfU=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipNidwr9PYFmfSEWufTnd9v0TwjhxIAwwNXTOUMj=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipMiUxZF67BRsV1Go7hSIDKXy3xCxt6KeE_3t4hi=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipNOydCHVDm9dy97EruAthOqk-1-jSP62CC_64OK=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipPaNZtmVrxlCdxfyQGz7dLTSj_sbJIUjgddXKpM=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipOwSEHKJ-xiq_VLmMfMRT11GrKadWTLSjepAGBZ=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipMMrKujBu8mg2odbJTDFhhLmpWt9SISEkHM8gfU=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipNidwr9PYFmfSEWufTnd9v0TwjhxIAwwNXTOUMj=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipMiUxZF67BRsV1Go7hSIDKXy3xCxt6KeE_3t4hi=s680-w680-h510',
        'https://lh3.googleusercontent.com/p/AF1QipNOydCHVDm9dy97EruAthOqk-1-jSP62CC_64OK=s680-w680-h510',
    ];

    const faqData = [

        {
            question: "How long has Wareline Tech been in the business?",
            answer:
                "Wareline Tech has been empowering businesses with innovative technology solutions for over 5 years. Our experience spans working with startups, established brands, and enterprises across various industries, delivering impactful digital solutions.",
        },
        {
            question:
                "What types of development services does Wareline Tech offer?",
            answer:
                "While Wareline Tech started with app development, we have expanded our expertise to cover all forms of development, including mobile apps, web applications, enterprise software, custom APIs, and more. Whatever your digital needs, we provide end-to-end solutions tailored to your goals.",
        },
        {
            question: "How does Wareline Tech ensure project success?",
            answer:
                "We follow a meticulous 360° approach that involves understanding your business, designing user-centric solutions, leveraging the latest technologies, and maintaining transparent communication throughout the project lifecycle. This ensures timely delivery, high-quality outputs, and alignment with your vision.",
        },
        {
            question:
                "Does Wareline Tech provide support after project completion?",
            answer:
                "Yes, we offer comprehensive post-project support, including maintenance, updates, bug fixes, and performance optimizations. Our goal is to ensure your solution remains functional, secure, and up-to-date as your business grows.",
        },
        {
            question: "What industries does Wareline Tech specialize in?",
            answer:
                "Wareline Tech has worked across diverse industries, including healthcare, education, e-commerce, finance, logistics, entertainment, and more. Our team specializes in adapting to the unique needs and challenges of various sectors to deliver customized solutions.",
        },
        {
            question: "How can I start a project with Wareline Tech?",
            answer:
                "Starting a project with Wareline Tech is simple! Reach out to us via our contact page or email. We'll schedule a consultation to discuss your needs, goals, and project requirements. From there, we'll create a tailored proposal to kickstart your journey with us.",
        },
        {
            question:
                "What is Wareline Tech's approach to client communication during a project?",
            answer:
                "At Wareline Tech, we prioritize transparent and regular communication. We assign a dedicated project manager to keep you updated on progress, gather feedback, and address any concerns. Additionally, we use tools like Slack, Trello, or email for seamless collaboration throughout the project.",
        },
    ]

    const carouselData = [
        {
            icon: "🛒",
            title: "E-Commerce",
            description:
                "Revolutionize online stores with custom solutions, from secure payment gateways to inventory management systems and AI-driven product recommendations.",
        },
        {
            icon: "🏥",
            title: "Healthcare",
            description:
                "Streamline healthcare services with robust booking systems, telemedicine platforms, and secure data management tailored to the needs of the medical industry.",
        },
        {
            icon: "🏦",
            title: "Fintech",
            description:
                "Empower financial institutions with secure payment systems, fraud detection tools, and mobile banking applications for a seamless customer experience.",
        },
        {
            icon: "🏢",
            title: "Real Estate",
            description:
                "Modernize real estate with intuitive property listing platforms, virtual tours, and CRM systems that connect buyers, sellers, and agents effortlessly.",
        },
        {
            icon: "🛍️",
            title: "Retail",
            description:
                "Enhance retail operations with cloud-based POS systems, loyalty programs, and analytics tools to drive in-store and online growth.",
        },
        {
            icon: "🚚",
            title: "Logistics & Supply Chain",
            description:
                "Simplify operations with integrated logistics platforms, real-time tracking, and automated shipment management for streamlined delivery services.",
        },
        {
            icon: "📈",
            title: "Startups",
            description:
                "Accelerate growth with scalable cloud-based solutions, mobile apps, and customized platforms that bring innovative ideas to life.",
        },
        {
            icon: "🎨",
            title: "Creative Agencies",
            description:
                "Enable agencies to deliver compelling digital experiences with tailored project management systems, collaborative tools, and branded websites.",
        },
    ];

    const teamData = [
      {
        name: "Akul Malhotra",
        title: "CEO",
        description: `Akul Suhail Malhotra, COO of Wareline Technologies, blends expertise in technology and business, with experience at the US Department of Defense and Apple. Committed to transparency and innovation, he drives strategic growth, redefining application development in India.`
      },
      {
        name: "Sambhrant Tiwari",
        title: "CTO",
        description: "Sambhrant Tiwari, CTO at Wareline Technologies , with valuable industry experience in Android and Flutter development, excels in crafting innovative mobile solutions. His expertise in enhancing user experiences and optimizing performance underscores his dedication to delivering high-quality, impactful applications."
      },
     
    ];
  
    return (
        <>
            <HeroSection
                bgImage="https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=600"
                buttonColor="bg-black"
                buttonText="Get Started"
                headingHighlight="We craft tomorrow’s"
                headingFirstPart=" digital experiences products, and ventures"
                headingLastPart="Tailored for You"
                subtext="The Success Stories of TechAhead, that brought light to many Startups and Global Brands."

            />

            <div className="container mx-auto mt-10">
                <ImageCarousel images={imageUrls} />
            </div>

            <WhyHireUs
                cards={cardsData}
            // Optional: override any default props
            // title="Custom Title"
            // highlightText="3000+ apps"
            // className="custom-section-class"
            />

            <Carousel
                title="Industries We Serve"
                subtitle="Digital transformation-fuelled growth
                across different industries & sectors"
                data={carouselData}
            />
            <FeaturedWork />
            <Team teamMembers={teamData} />

            <FaqSection data={faqData} />
            <ContactUsSection
                title=""
                subtitle="We'd love to hear from you!"
                description="Ready to transform your "
                buttonText="Request a Proposal"
                highlightText="vision into reality?."
                highlightGradient={{ from: "#ff7eb3", to: "#ff758c" }}
                buttonGradientFrom="#8a2be2"
                buttonGradientTo="#ff6347"
            />

        </>
    );
};
export default AboutUs;