import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import AboutSection from "@/components/landing/AboutSection";
import CoursesSection from "@/components/landing/CoursesSection";
import SocialProof from "@/components/landing/SocialProof";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTA from "@/components/landing/FinalCTA";
import FAQSection from "@/components/landing/FAQSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import PageLoader from "@/components/PageLoader";
import { PlanProvider } from "@/context/PlanContext";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <PlanProvider>
      <div className="min-h-screen bg-background">
        <PageLoader onComplete={handleComplete} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Navbar />
          <HeroSection />
          <TrustBar />
          <AboutSection />
          <CoursesSection />
          <SocialProof />
          <WhyChooseUs />
          <HowItWorks />
          <TestimonialsSection />
          <PricingSection />
          <FinalCTA />
          <FAQSection />
          <ContactForm />
          <Footer />
        </motion.div>
      </div>
    </PlanProvider>
  );
};

export default Index;
