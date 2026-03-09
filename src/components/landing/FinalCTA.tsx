import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCTA = () => (
  <section className="py-20 bg-cta-gradient">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Start Your Quran Learning Journey Today
        </h2>
        <p className="font-body text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
          Join 1,000+ students worldwide. Begin with a free 3-day trial — no commitment, no card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="xl">
            Start Free Trial
          </Button>
          <Button variant="whatsapp" size="xl">
            <MessageCircle size={20} />
            Chat on WhatsApp
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
