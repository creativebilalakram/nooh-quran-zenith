import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

import review1 from "@/assets/reviews/review-1.png";
import review2 from "@/assets/reviews/review-2.png";
import review3 from "@/assets/reviews/review-3.png";
import review4 from "@/assets/reviews/review-4.png";
import review5 from "@/assets/reviews/review-5.png";
import review6 from "@/assets/reviews/review-6.png";
import review7 from "@/assets/reviews/review-7.png";
import review8 from "@/assets/reviews/review-8.png";
import review9 from "@/assets/reviews/review-9.png";
import review10 from "@/assets/reviews/review-10.png";
import review11 from "@/assets/reviews/review-11.png";
import review12 from "@/assets/reviews/review-12.png";
import review13 from "@/assets/reviews/review-13.png";
import review14 from "@/assets/reviews/review-14.png";
import review15 from "@/assets/reviews/review-15.png";
import review16 from "@/assets/reviews/review-16.png";
import review17 from "@/assets/reviews/review-17.png";
import review18 from "@/assets/reviews/review-18.png";
import review19 from "@/assets/reviews/review-19.png";
import review20 from "@/assets/reviews/review-20.png";
import review21 from "@/assets/reviews/review-21.png";
import review22 from "@/assets/reviews/review-22.png";
import review23 from "@/assets/reviews/review-23.png";
import review24 from "@/assets/reviews/review-24.png";
import review25 from "@/assets/reviews/review-25.png";
import review26 from "@/assets/reviews/review-26.png";
import review27 from "@/assets/reviews/review-27.png";
import review28 from "@/assets/reviews/review-28.png";
import review29 from "@/assets/reviews/review-29.png";
import review30 from "@/assets/reviews/review-30.png";
import review31 from "@/assets/reviews/review-31.png";
import review32 from "@/assets/reviews/review-32.png";
import review33 from "@/assets/reviews/review-33.png";

const images = [review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24, review25, review26, review27, review28, review29, review30, review31, review32, review33];
const allImages = [...images, ...images];

const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/profile.php?id=61557616937602&sk=reviews";

const TestimonialsSection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index % images.length);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      setLightboxIndex((lightboxIndex + dir + images.length) % images.length);
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, navigate]);

  const isLightboxOpen = lightboxIndex !== null;

  return (
    <section className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-accent fill-accent" size={20} />
            ))}
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
            Trusted by Students Worldwide
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Real feedback from learners who are studying Quran with us.
          </p>
        </motion.div>
      </div>

      {/* Carousel wrapper */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-r from-[hsl(var(--secondary)/0.3)] via-[hsl(var(--secondary)/0.24)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-44 z-10 bg-gradient-to-l from-[hsl(var(--secondary)/0.3)] via-[hsl(var(--secondary)/0.24)] to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex gap-6 py-4 px-4"
          style={{
            animation: "scrollLeft 45s linear infinite",
            animationPlayState: isPaused || isLightboxOpen ? "paused" : "running",
            width: "max-content",
          }}
        >
          {allImages.map((src, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="w-[260px] sm:w-[280px] md:w-[320px] flex-shrink-0 rounded-2xl border border-border/60 bg-card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-[var(--shadow-md)]"
            >
              <div className="relative w-full">
                <img
                  src={src}
                  alt={`Student review ${(i % images.length) + 1}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(i)}
                  className={`w-full h-auto object-contain transition-opacity duration-500 ${
                    loadedImages.has(i) ? "opacity-100" : "opacity-0"
                  }`}
                />
                {!loadedImages.has(i) && (
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-muted flex flex-col items-center justify-center gap-3 p-4 min-h-[280px]">
                    <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
                    <div className="h-3 w-3/4 rounded-md bg-muted-foreground/10" />
                    <div className="h-3 w-1/2 rounded-md bg-muted-foreground/10" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <p className="font-body text-sm text-muted-foreground mb-3">See more verified reviews on our Facebook page.</p>
        <Button variant="hero" size="lg" asChild>
          <a href={FACEBOOK_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            View All Reviews on Facebook
            <ExternalLink size={16} className="ml-1" />
          </a>
        </Button>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex items-center gap-4 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev - outside image */}
              <button
                onClick={() => navigate(-1)}
                className="flex-shrink-0 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-muted transition-colors"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>

              {/* Image container */}
              <div className="relative flex-1 min-w-0">
                <img
                  src={images[lightboxIndex]}
                  alt={`Review ${lightboxIndex + 1}`}
                  className="w-full h-auto rounded-2xl shadow-lg object-contain bg-card"
                />
                {/* Close - corner of container */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-muted transition-colors"
                >
                  <X size={18} className="text-foreground" />
                </button>
              </div>

              {/* Next - outside image */}
              <button
                onClick={() => navigate(1)}
                className="flex-shrink-0 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-muted transition-colors"
              >
                <ChevronRight size={20} className="text-foreground" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
