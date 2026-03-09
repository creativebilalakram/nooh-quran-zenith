import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import AboutSection from "@/components/landing/AboutSection";
import CoursesSection from "@/components/landing/CoursesSection";
import SocialProof from "@/components/landing/SocialProof";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQSection from "@/components/landing/FAQSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <CoursesSection />
      <SocialProof />
      <TestimonialsSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <FinalCTA />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
