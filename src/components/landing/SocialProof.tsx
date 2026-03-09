import { motion } from "framer-motion";

const stats = [
  { value: "1,000+", label: "Students Enrolled" },
  { value: "30+", label: "Countries Reached" },
  { value: "10+", label: "Years Experience" },
  { value: "50,000+", label: "Classes Delivered" },
];

const SocialProof = () => (
  <section className="py-20 bg-cta-gradient">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{s.value}</p>
            <p className="font-body text-sm text-primary-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
