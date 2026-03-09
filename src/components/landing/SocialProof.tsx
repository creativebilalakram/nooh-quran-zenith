import { motion } from "framer-motion";
import { Users, Globe, Award, BookOpen } from "lucide-react";

const stats = [
  { value: "1,000+", label: "Students Enrolled", icon: Users },
  { value: "30+", label: "Countries Reached", icon: Globe },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "50,000+", label: "Classes Delivered", icon: BookOpen },
];

const SocialProof = () => (
  <section className="py-28 bg-cta-gradient relative overflow-hidden">
    {/* Dot pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    {/* Animated gradient orbs */}
    <motion.div
      className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.08]"
      style={{ background: 'hsl(var(--accent))' }}
      animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.06]"
      style={{ background: 'hsl(var(--primary-foreground))' }}
      animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Floating particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary-foreground/10"
        style={{
          left: `${15 + i * 15}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4 + i * 0.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.5,
        }}
      />
    ))}

    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-2xl bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/[0.08] flex items-center justify-center mx-auto mb-5 shadow-[0_0_20px_hsl(var(--primary-foreground)/0.05)]"
            >
              <s.icon className="text-primary-foreground" size={26} />
            </motion.div>
            <p className="font-display text-4xl md:text-[3.25rem] font-bold text-primary-foreground mb-2 leading-tight">{s.value}</p>
            <p className="font-body text-sm text-primary-foreground/60 font-medium tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
