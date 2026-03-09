import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MessageCircle, Play } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.webp";
import heroStudent1 from "@/assets/hero-student-1.jpg";
import heroStudent2 from "@/assets/hero-student-2.jpg";
import ImageWithSkeleton from "@/components/ui/image-skeleton";

const trustPoints = [
  "3-Day Free Trial — No Card Required",
  "One-on-One Live Classes",
  "10+ Years Teaching Experience",
];

const carouselImages = [
  { src: heroStudent1, alt: "Student learning Quran online" },
  { src: heroStudent2, alt: "Teacher conducting online Quran class" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex items-center">
      {/* Background image - rendered first */}
      <div className="absolute inset-0 z-0">
        <ImageWithSkeleton src={heroBg} alt="" className="w-full h-full object-cover" containerClassName="w-full h-full" />
      </div>

      {/* Gradient overlay with transparency so bg shows through */}
      <div className="absolute inset-0 z-[1] bg-background/70" />

      {/* Animated light orbs */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -30, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-[2] top-20 right-[20%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute z-[2] bottom-0 left-[10%] w-[400px] h-[400px] bg-accent rounded-full blur-[100px]"
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 z-[3] opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 relative z-[4]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-body text-sm font-semibold tracking-wider uppercase text-accent mb-5 bg-accent/10 px-4 py-1.5 rounded-full"
            >
              Online Quran Academy
            </motion.span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.1] mb-7">
              Learn Quran Online with a{" "}
              <span className="text-primary relative">
                Certified Teacher
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-accent/40 origin-left rounded-full"
                />
              </span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Join thousands of students worldwide learning Quran with personalized one-on-one classes from the comfort of your home.
            </p>
            <ul className="space-y-3.5 mb-9">
              {trustPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 font-body text-sm font-medium text-foreground"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  {point}
                </motion.li>
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Image Carousel */}
              <div className="aspect-square rounded-3xl bg-card border border-border shadow-card-hover overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <ImageWithSkeleton
                      src={carouselImages[currentSlide].src}
                      alt={carouselImages[currentSlide].alt}
                      className="w-full h-full object-cover"
                      containerClassName="w-full h-full"
                      skeletonClassName="rounded-3xl"
                    />
                  </motion.div>
                </AnimatePresence>
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "bg-primary-foreground w-6" : "bg-primary-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-card rounded-2xl border border-border shadow-lg px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="text-primary" size={16} />
                </div>
                <div>
                  <p className="font-body text-xs font-bold text-foreground">50,000+</p>
                  <p className="font-body text-[10px] text-muted-foreground">Classes Delivered</p>
                </div>
              </motion.div>
              {/* Floating badge top-right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -right-3 bg-accent text-accent-foreground rounded-xl shadow-gold px-4 py-2"
              >
                <p className="font-body text-xs font-bold">⭐ 4.9/5 Rating</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
