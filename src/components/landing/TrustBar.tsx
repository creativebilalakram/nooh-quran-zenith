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
  <section className="py-12 bg-card border-y border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
              <item.icon className="text-primary" size={22} />
            </div>
            <p className="font-body text-sm font-semibold text-foreground">{item.label}</p>
            <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
