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
  <section id="pricing" className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">Pricing</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">Simple, Transparent Pricing</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Choose the plan that fits your learning goals. All plans include a free 3-day trial.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`group relative rounded-3xl border p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 ${
              plan.popular
                ? "border-primary bg-card shadow-card-hover scale-[1.03]"
                : "border-border bg-card shadow-card hover:shadow-card-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-accent-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-gold">
                <Star size={12} /> Most Popular
              </div>
            )}
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
            <p className="font-body text-sm text-muted-foreground mb-5">{plan.classes} • {plan.duration}</p>
            <div className="mb-7">
              <span className="font-display text-5xl font-bold text-foreground">{plan.price}</span>
              <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3.5 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="text-primary" size={12} />
                  </div>
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
