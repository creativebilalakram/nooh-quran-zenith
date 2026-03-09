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
  <section id="pricing" className="py-28 bg-background relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative"
            >
              {/* Snake border animation for popular card */}
              {plan.popular && (
                <div className="absolute -inset-[1px] rounded-3xl overflow-hidden z-0">
                  <motion.div
                    className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, hsl(var(--accent)) 80%, hsl(var(--gold)) 90%, transparent 100%)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-[1.5px] rounded-3xl bg-card" />
                </div>
              )}

              <div
                className={`relative z-10 rounded-3xl border py-10 px-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover ${
                  plan.popular
                    ? "border-transparent bg-card shadow-card-hover scale-[1.03]"
                    : "border-border bg-card shadow-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-gradient text-accent-foreground font-body text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-gold z-20">
                    <Star size={12} className="drop-shadow-sm" /> Most Popular
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">{plan.classes} • {plan.duration}</p>
                <div className="mb-8">
                  <span className="font-display text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="text-primary" size={12} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={plan.popular ? "hero" : "heroOutline"} size="lg" className="w-full transition-all duration-300 hover:scale-[1.02]">
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
