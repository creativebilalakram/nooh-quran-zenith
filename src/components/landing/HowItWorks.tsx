import { motion } from "framer-motion";
import { CalendarCheck, Clock, BookOpen } from "lucide-react";

const steps = [
  { icon: CalendarCheck, step: "01", title: "Book Free Trial", desc: "Sign up and book your free 3-day trial class. No credit card required." },
  { icon: Clock, step: "02", title: "Schedule Your Class", desc: "Choose a time that works best for your schedule from any timezone." },
  { icon: BookOpen, step: "03", title: "Start Learning Quran", desc: "Begin your personalized learning journey with a certified teacher." },
];

const HowItWorks = () => (
  <section className="py-24 bg-muted/30 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">How It Works</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">Get Started in 3 Easy Steps</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Your Quran learning journey begins with just a few simple steps.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Desktop connecting line */}
        <div className="hidden md:block absolute top-[4.5rem] left-[16%] right-[16%] h-[2px]">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6, type: "spring", damping: 20 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Mobile connecting line */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute top-[5.5rem] left-1/2 w-[2px] h-16 -translate-x-1/2">
                  <div className="h-full bg-gradient-to-b from-primary/30 to-transparent" />
                </div>
              )}

              {/* Step number badge */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative mb-6"
              >
                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
                />
                <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 group-hover:border-primary/50 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                    <s.icon className="text-primary" size={28} />
                  </div>
                </div>
                {/* Step number */}
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-body text-xs font-bold z-20 shadow-md">
                  {s.step}
                </div>
              </motion.div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[260px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
