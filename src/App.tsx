import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

export default function App() {
  const [selectedService, setSelectedService] = useState("Sofa & Upholstery Steam Clean");

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceSelect = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection("booking-section");
  };

  const handleCallNow = () => {
    window.location.href = "tel:2409181700";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden antialiased font-sans">
      
      {/* 1. Sticky Header Navigation */}
      <Header
        onBookClick={() => scrollToSection("booking-section")}
        onServicesClick={() => scrollToSection("services")}
        onContactClick={() => scrollToSection("contact-section")}
      />

      {/* 2. Visual Rich Hero Section */}
      <Hero
        onQuoteClick={() => scrollToSection("booking-section")}
        onCallClick={handleCallNow}
      />

      {/* 3. Comprehensive Cleaning Solutions grid */}
      <Services onServiceSelect={handleServiceSelect} />

      {/* 4. Deep-dive value proposition */}
      <WhyChooseUs onBookClick={() => scrollToSection("booking-section")} />

      {/* 5. Interactive Before/After swipe slider */}
      <BeforeAfter />

      {/* 6. Social trust Testimonials */}
      <Testimonials />

      {/* 7. Structured process timeline */}
      <HowItWorks
        onQuoteClick={() => scrollToSection("booking-section")}
        onCallClick={handleCallNow}
      />

      {/* 8. Interactive quotation & Booking Form */}
      <BookingForm selectedService={selectedService} />

      {/* 9. Open/Close FAQs Accordion */}
      <FAQ />

      {/* 10. Direct Contact detail blocks */}
      <ContactInfo
        onCallClick={handleCallNow}
        onMessageClick={() => scrollToSection("booking-section")}
      />

      {/* 11. Custom branded Footer block */}
      <Footer
        onServicesClick={() => scrollToSection("services")}
        onContactClick={() => scrollToSection("contact-section")}
      />

    </div>
  );
}
