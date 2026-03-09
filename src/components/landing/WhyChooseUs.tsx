import { motion } from "framer-motion";
import { User, Award, Users, Globe, BarChart3, HeartHandshake, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: User, title: "One-on-One Personalized Classes", desc: "Every student gets dedicated attention from their teacher for maximum learning." },
  { icon: Award, title: "Experienced Quran Teacher", desc: "10+ years of experience in Quran teaching and Islamic education." },
  { icon: Users, title: "Classes for Kids & Adults", desc: "Tailored lessons for all age groups and skill levels." },
  { icon: Globe, title: "Flexible Schedule Worldwide", desc: "Book classes at times that suit your timezone, any day of the week." },
  { icon: BarChart3, title: "Weekly Progress Reports", desc: "Stay updated with detailed progress tracking and feedback." },
  { icon: HeartHandshake, title: "Parent Community Support", desc: "Dedicated support and open communication for parents." },
  { icon: ShieldCheck, title: "Money Back Guarantee", desc: "100% satisfaction guaranteed or your money back — no questions asked." },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">The Nooh Quran Difference</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">We go above and beyond to deliver an exceptional learning experience.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="group relative bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-500"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300"
              >
                <b.icon className="text-primary" size={24} />
              </motion.div>
              <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
