import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FAQSection from "@/components/FAQSection/FAQSection";
import Process from "@/components/Process/Process";
import ContactUsSection from "@/components/ContactUs/ContactUsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Process />
      <FAQSection />
      <ContactUsSection />

      <Footer />
    </>
  );
}