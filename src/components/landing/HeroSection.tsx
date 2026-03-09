import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";

const trustPoints = [
  "3-Day Free Trial — No Card Required",
  "One-on-One Live Classes",
  "10+ Years Teaching Experience",
];

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-sm font-semibold tracking-wider uppercase text-accent mb-4">
              Online Quran Academy
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Learn Quran Online with a{" "}
              <span className="text-primary">Certified Teacher</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
              Join thousands of students worldwide learning Quran with personalized one-on-one classes from the comfort of your home.
            </p>
            <ul className="space-y-3 mb-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <CheckCircle className="text-primary shrink-0" size={20} />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Start Free Trial
              </Button>
              <Button variant="whatsapp" size="xl">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl bg-secondary border border-border flex items-center justify-center shadow-card">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-3xl text-primary">☪</span>
                </div>
                <p className="font-display text-xl text-foreground font-semibold">Hero Image</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Placeholder for academy visual</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
