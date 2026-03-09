import { motion } from "framer-motion";
import { User, Award, Users, Globe, BarChart3, HeartHandshake, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: User, title: "One-on-One Personalized Classes", desc: "Every student gets dedicated attention from their teacher." },
  { icon: Award, title: "Experienced Quran Teacher", desc: "10+ years of experience in Quran teaching and education." },
  { icon: Users, title: "Classes for Kids & Adults", desc: "Tailored lessons for all age groups and skill levels." },
  { icon: Globe, title: "Flexible Schedule Worldwide", desc: "Book classes at times that suit your timezone." },
  { icon: BarChart3, title: "Weekly Progress Reports", desc: "Stay updated with detailed progress tracking." },
  { icon: HeartHandshake, title: "Parent Community Support", desc: "Dedicated support and communication for parents." },
  { icon: ShieldCheck, title: "Money Back Guarantee", desc: "100% satisfaction guaranteed or your money back." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">The Nooh Quran Difference</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">We go above and beyond to deliver an exceptional learning experience.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <b.icon className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-body text-sm font-semibold text-foreground mb-1">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
