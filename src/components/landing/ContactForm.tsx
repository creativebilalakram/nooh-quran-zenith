import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, HeartHandshake } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "No credit card required" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: HeartHandshake, text: "100% satisfaction guarantee" },
];

const ContactForm = () => (
  <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">Get Started</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">Book Your Free Trial</h2>
          <p className="font-body text-muted-foreground text-base md:text-lg">Fill in the form below and we'll get back to you within 24 hours.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-card-hover space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
              <Input placeholder="Your full name" className="font-body h-12 rounded-xl" />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
              <Input type="email" placeholder="your@email.com" className="font-body h-12 rounded-xl" />
            </div>
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">WhatsApp Number</label>
            <Input placeholder="+1 234 567 890" className="font-body h-12 rounded-xl" />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
            <Textarea placeholder="Tell us about your learning goals..." rows={4} className="font-body rounded-xl" />
          </div>
          <Button variant="hero" size="lg" className="w-full h-13 text-base">
            Start Your Free Trial
          </Button>

          {/* Trust badges below form */}
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            {guarantees.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="text-primary" size={14} />
                <span className="font-body text-xs text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactForm;
