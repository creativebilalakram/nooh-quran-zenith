import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Clock, HeartHandshake, MessageCircle, Mail, CalendarCheck, User, BookOpen } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { generateUserId, openWhatsAppWithBooking } from "@/lib/whatsapp";
import { toast } from "sonner";

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

const ContactForm = () => {
  const { selectedPlan, setSelectedPlan } = usePlan();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {

  e.preventDefault();

  if (!name.trim() || !email.trim() || !selectedPlan) {
    toast.error("Please fill in your name, email, and select a plan.");
    return;
  }

  const userId = generateUserId();

  const data = {
    userId: userId,
    name: name.trim(),
    email: email.trim(),
    whatsapp: whatsapp.trim(),
    plan: selectedPlan,
    message: message.trim(),
    source: "Landing Page",
    sourceUrl: window.location.href,
    device: navigator.userAgent,
    country: ""
  };

  try {

    await fetch(
      "https://script.google.com/macros/s/AKfycbwJBRMWhuHprklJSOJ3-hA3wrDy1e8b3ad6vS7QwwIbi7YV8I11XwHGh5KrgHM3y1ba/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      }
    );

    toast.success(`Booking confirmed! Your ID: ${userId}`);

    openWhatsAppWithBooking(userId, name.trim(), selectedPlan);

  } catch (err) {

    console.error("Error sending data:", err);

    toast.error("Something went wrong. Please try again.");

  }

};

  return (
    <section id="book-trial" className="py-28 bg-muted/30 relative overflow-hidden">
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
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[image:var(--cta-gradient)] rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden order-2 lg:order-1"
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
                    <p className="font-body text-sm text-primary-foreground font-medium">+1 825 595 4870</p>
                    <p className="font-body text-xs text-primary-foreground/60">PK: +92 310 710 3142</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary-foreground" size={18} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-primary-foreground/50 uppercase tracking-wider">Email</p>
                    <p className="font-body text-sm text-primary-foreground font-medium">sarwarhafizusman83@gmail.com</p>
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

          {/* Form Card */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-card-hover space-y-5 order-1 lg:order-2"
            onSubmit={handleSubmit}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Name</label>
                <Input placeholder="Your full name" className="font-body h-12 rounded-xl" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="font-body h-12 rounded-xl" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">WhatsApp Number</label>
                <Input placeholder="+1 234 567 890" className="font-body h-12 rounded-xl" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">Select Plan</label>
                <Select value={selectedPlan} onValueChange={setSelectedPlan}>
                  <SelectTrigger className="font-body h-12 rounded-xl">
                    <SelectValue placeholder="Choose a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Day / Week">1 Day / Week — $50/month</SelectItem>
                    <SelectItem value="5 Days / Week">5 Days / Week — $150/month</SelectItem>
                    <SelectItem value="3 Days / Week">3 Days / Week — $100/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Message</label>
              <Textarea placeholder="Tell us about your learning goals..." rows={4} className="font-body rounded-xl" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <Button variant="hero" size="lg" className="w-full h-14 text-base rounded-xl" type="submit">
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
};

export default ContactForm;
