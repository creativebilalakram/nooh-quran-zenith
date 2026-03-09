import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$35",
    period: "/month",
    classes: "2 Classes/Week",
    duration: "30 min each",
    features: ["Quran Reading", "Basic Tajweed", "Progress Reports", "Flexible Timing"],
    popular: false,
  },
  {
    name: "Standard",
    price: "$60",
    period: "/month",
    classes: "4 Classes/Week",
    duration: "30 min each",
    features: ["All Basic Features", "Advanced Tajweed", "Hifz Program", "Priority Support", "Weekly Reports"],
    popular: true,
  },
  {
    name: "Premium",
    price: "$90",
    period: "/month",
    classes: "5 Classes/Week",
    duration: "45 min each",
    features: ["All Standard Features", "1-on-1 Mentorship", "Custom Curriculum", "Parent Meetings", "Certificate"],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">Pricing</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your learning goals. All plans include a free 3-day trial.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`relative rounded-2xl border p-8 flex flex-col ${
              plan.popular
                ? "border-primary bg-card shadow-card-hover scale-[1.03]"
                : "border-border bg-card shadow-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-foreground font-body text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Star size={12} /> Most Popular
              </div>
            )}
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
            <p className="font-body text-sm text-muted-foreground mb-4">{plan.classes} • {plan.duration}</p>
            <div className="mb-6">
              <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-sm text-foreground">
                  <Check className="text-primary shrink-0" size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "hero" : "heroOutline"} size="lg" className="w-full">
              Start Free Trial
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
