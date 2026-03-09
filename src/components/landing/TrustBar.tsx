import { motion } from "framer-motion";
import { Users, User, Award, Clock, Gift } from "lucide-react";

const items = [
  { icon: Users, label: "1000+ Students", sub: "Worldwide" },
  { icon: User, label: "One-on-One", sub: "Classes" },
  { icon: Award, label: "Certified", sub: "Quran Teacher" },
  { icon: Clock, label: "Flexible", sub: "Timing" },
  { icon: Gift, label: "3-Day", sub: "Free Trial" },
];

const TrustBar = () => (
  <section className="py-14 bg-card border-y border-border relative">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-3 group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300"
            >
              <item.icon className="text-primary" size={24} />
            </motion.div>
            <div>
              <p className="font-body text-sm font-bold text-foreground">{item.label}</p>
              <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
