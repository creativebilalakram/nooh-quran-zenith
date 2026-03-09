import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => (
  <section id="contact" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">Get Started</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Free Trial</h2>
          <p className="font-body text-muted-foreground">Fill in the form below and we'll get back to you within 24 hours.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-8 shadow-card space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Name</label>
              <Input placeholder="Your full name" className="font-body" />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" placeholder="your@email.com" className="font-body" />
            </div>
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">WhatsApp Number</label>
            <Input placeholder="+1 234 567 890" className="font-body" />
          </div>
          <div>
            <label className="font-body text-sm font-medium text-foreground mb-1.5 block">Message</label>
            <Textarea placeholder="Tell us about your learning goals..." rows={4} className="font-body" />
          </div>
          <Button variant="hero" size="lg" className="w-full">
            Start Your Free Trial
          </Button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactForm;
