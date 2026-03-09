import { motion } from "framer-motion";
import { CalendarCheck, Clock, BookOpen } from "lucide-react";

const steps = [
  { icon: CalendarCheck, step: "01", title: "Book Free Trial", desc: "Sign up and book your free 3-day trial class." },
  { icon: Clock, step: "02", title: "Schedule Your Class", desc: "Choose a time that works best for your schedule." },
  { icon: BookOpen, step: "03", title: "Start Learning Quran", desc: "Begin your journey with a personalized learning plan." },
];

const HowItWorks = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Get Started in 3 Easy Steps</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg relative z-10">
              <s.icon className="text-primary-foreground" size={26} />
            </div>
            <span className="font-body text-xs font-bold text-accent uppercase tracking-widest mb-2">{s.step}</span>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
