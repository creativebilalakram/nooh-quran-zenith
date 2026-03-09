import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import whatsappImg from "@/assets/whatsapp-3d.png";
import qrCode from "@/assets/community-qr.png";
import ImageWithSkeleton from "@/components/ui/image-skeleton";

const trustItems = ["Free Trial Available", "One-on-One Classes", "Flexible Schedule"];

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-cta-gradient relative overflow-hidden">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground/[0.02] blur-[120px]"
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
    <div
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    />

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-[240px_1fr_240px] gap-6 lg:gap-10 items-stretch">

        {/* Left — WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex"
        >
          <div className="relative w-full bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/[0.1] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_-8px_hsl(var(--primary-foreground)/0.08)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary-foreground/[0.03] to-transparent pointer-events-none" />
            <div className="relative flex flex-col items-center">
              <div className="relative w-28 h-28 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 scale-150 rounded-full bg-[hsl(142,70%,40%)]/[0.07] blur-2xl" />
                <ImageWithSkeleton src={whatsappImg} alt="WhatsApp" className="relative w-full h-full object-contain drop-shadow-xl" containerClassName="w-full h-full" />
              </div>
              <p className="font-body text-[13px] text-primary-foreground/45 tracking-wide">
                Chat with us instantly
              </p>
            </div>
          </div>
        </motion.div>

        {/* Center — CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center justify-center text-center py-4"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-[1.15]">
            Start Learning Quran Today<br />Your First Class is Free
          </h2>
          <p className="font-body text-[15px] text-primary-foreground/50 mb-8 max-w-md leading-relaxed">
            Experience personalized one-on-one Quran learning from the comfort of your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center mb-7">
            <Button variant="gold" size="xl">Start Free Trial</Button>
            <Button variant="whatsapp" size="xl">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="text-accent" size={13} />
                <span className="font-body text-xs text-primary-foreground/40">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — QR */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex"
        >
          <div className="relative w-full bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/[0.1] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_8px_32px_-8px_hsl(var(--primary-foreground)/0.08)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary-foreground/[0.03] to-transparent pointer-events-none" />
            <div className="relative flex flex-col items-center">
              <h3 className="font-display text-[15px] font-bold text-primary-foreground mb-3">
                Join Our Free Community
              </h3>
              <div className="relative w-28 h-28 mb-3">
                <div className="absolute -inset-2 rounded-xl bg-accent/[0.05] blur-md" />
                <div className="relative bg-primary-foreground rounded-lg p-1.5 shadow-md">
                  <ImageWithSkeleton src={qrCode} alt="Community QR Code" className="w-full h-full" containerClassName="w-full h-full" />
                </div>
              </div>
              <p className="font-body text-[10px] text-primary-foreground/30 uppercase tracking-[0.15em]">
                Free to join
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
