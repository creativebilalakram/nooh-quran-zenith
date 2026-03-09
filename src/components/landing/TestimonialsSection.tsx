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

const images = [review1, review2, review3, review4, review5, review6, review7, review8, review9];
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
    // Map duplicated index back to original
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
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-14">
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
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Students & Parents Say
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            Real feedback from our students and parents who are learning Quran with us.
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
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />

        {/* Scrolling track */}
        <div
          className="flex gap-8 py-6 px-4"
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
              className="w-[260px] sm:w-[280px] md:w-[320px] h-[340px] sm:h-[360px] md:h-[400px] flex-shrink-0 rounded-2xl border border-border/60 bg-card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_hsl(var(--gold)/0.15)] shadow-card"
            >
              <div className="relative w-full h-full bg-card">
                <img
                  src={src}
                  alt={`Student review ${(i % images.length) + 1}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(i)}
                  className={`w-full h-full object-contain transition-opacity duration-500 ${
                    loadedImages.has(i) ? "opacity-100" : "opacity-0"
                  }`}
                />
                {!loadedImages.has(i) && (
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-muted flex flex-col items-center justify-center gap-3 p-4">
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
        className="text-center mt-14"
      >
        <p className="font-body text-muted-foreground mb-4">Want to see more reviews?</p>
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
              className="relative max-w-lg w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]}
                alt={`Review ${lightboxIndex + 1}`}
                className="w-full h-auto rounded-2xl shadow-lg object-contain"
              />

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-card hover:bg-muted transition-colors"
              >
                <X size={18} className="text-foreground" />
              </button>

              {/* Prev */}
              <button
                onClick={() => navigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-card hover:bg-card transition-colors"
              >
                <ChevronLeft size={20} className="text-foreground" />
              </button>

              {/* Next */}
              <button
                onClick={() => navigate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-card hover:bg-card transition-colors"
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
