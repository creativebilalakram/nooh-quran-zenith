import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import whatsappImg from "@/assets/whatsapp-3d.png";
import qrCode from "@/assets/community-qr.png";

const trustItems = ["Free Trial Available", "One-on-One Classes", "Flexible Schedule"];

const FinalCTA = () => (
  <section className="py-28 md:py-36 bg-cta-gradient relative overflow-hidden">
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary-foreground/[0.02] blur-[120px]"
      animate={{ scale: [1, 1.15, 1] }}
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
      <div className="grid lg:grid-cols-[1fr_1.8fr_1fr] gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

        {/* Left — WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative bg-primary-foreground/[0.05] backdrop-blur-sm border border-primary-foreground/[0.08] rounded-3xl p-7 text-center w-full max-w-[220px]">
            <div className="relative mx-auto w-28 h-28 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 scale-[1.6] rounded-full bg-[hsl(142,70%,40%)]/[0.06] blur-2xl" />
              <img
                src={whatsappImg}
                alt="WhatsApp"
                className="relative w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            <p className="font-body text-sm text-primary-foreground/45 tracking-wider">
              Chat with us instantly
            </p>
          </div>
        </motion.div>

        {/* Center — Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-primary-foreground mb-6 leading-tight">
            Start Learning Quran Today —<br className="hidden sm:block" />
            Your First Class is Free
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/50 mb-10 max-w-lg mx-auto leading-relaxed">
            Begin with a free trial class and experience personalized one-on-one Quran learning from the comfort of your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="gold" size="xl">Start Free Trial</Button>
            <Button variant="whatsapp" size="xl">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="text-accent" size={14} />
                <span className="font-body text-xs text-primary-foreground/45">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — QR Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative bg-primary-foreground/[0.05] backdrop-blur-sm border border-primary-foreground/[0.08] rounded-3xl p-7 text-center w-full max-w-[220px]">
            <h3 className="font-display text-base font-bold text-primary-foreground mb-1.5">
              Join Our Free Community
            </h3>
            <p className="font-body text-[11px] text-primary-foreground/40 mb-5 leading-relaxed">
              Scan to join our learning community and stay connected.
            </p>

            <div className="relative mx-auto w-32 h-32 mb-4">
              <div className="absolute -inset-2 rounded-2xl bg-accent/[0.05] blur-md" />
              <div
                className="absolute -inset-4 opacity-[0.05] pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                }}
              />
              <div className="relative bg-primary-foreground rounded-xl p-2 shadow-md">
                <img src={qrCode} alt="Community QR Code" className="w-full h-full" />
              </div>
            </div>

            <p className="font-body text-[10px] text-primary-foreground/30 uppercase tracking-[0.2em]">
              Free to join
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FinalCTA;
