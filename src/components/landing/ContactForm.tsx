import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, HeartHandshake, MessageCircle, Mail, CalendarCheck, User, BookOpen } from "lucide-react";

const guarantees = [
  { icon: Shield, text: "No credit card required" },
  { icon: Clock, text: "Response within 24 hours" },
  { icon: HeartHandshake, text: "100% satisfaction guarantee" },
];

const benefits = [
  { icon: CalendarCheck, text: "3-Day Free Trial" },
  { icon: User, text: "One-on-One Classes" },
  { icon: BookOpen, text: "Flexible Schedule" },
];

const ContactForm = () => (
  <section id="contact" className="py-28 bg-muted/30 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">
          Get Started
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
          Book Your Free Trial
        </h2>
        <p className="font-body text-muted-foreground text-base md:text-lg">
          Fill in the form below and we'll get back to you within 24 hours.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_1.85fr] gap-6 lg:gap-8">
        {/* Left - Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[image:var(--cta-gradient)] rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden"
        >
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Contact Us
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed mb-8">
              Reach out to us anytime. We're here to help you start your Quran learning journey.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wider">WhatsApp</p>
                  <p className="font-body text-sm text-primary-foreground font-medium">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary-foreground" size={18} />
                </div>
                <div>
                  <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wider">Email</p>
                  <p className="font-body text-sm text-primary-foreground font-medium">info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-primary-foreground/10">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="text-primary-foreground/70" size={16} />
                <span className="font-body text-sm text-primary-foreground/70">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Form Card */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          <Button variant="hero" size="lg" className="w-full h-14 text-base rounded-xl">
            Start Your Free Trial
          </Button>

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
