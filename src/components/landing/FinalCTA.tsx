import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const FinalCTA = () => (
  <section className="py-24 bg-cta-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
    <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary-foreground/[0.03] rounded-full blur-3xl" />

    <div className="container mx-auto px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-8"
        >
          <Sparkles className="text-primary-foreground" size={28} />
        </motion.div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
          Start Your Quran Learning<br className="hidden sm:block" /> Journey Today
        </h2>
        <p className="font-body text-lg md:text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
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
