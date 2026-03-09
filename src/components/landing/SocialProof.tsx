import { motion } from "framer-motion";
import { Users, Globe, Award, BookOpen } from "lucide-react";

const stats = [
  { value: "1,000+", label: "Students Enrolled", icon: Users },
  { value: "30+", label: "Countries Reached", icon: Globe },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "50,000+", label: "Classes Delivered", icon: BookOpen },
];

const SocialProof = () => (
  <section className="py-20 bg-cta-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4"
            >
              <s.icon className="text-primary-foreground" size={24} />
            </motion.div>
            <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{s.value}</p>
            <p className="font-body text-sm text-primary-foreground/60 font-medium">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
