import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer a free trial class?",
    answer:
      "Yes! We offer a free 3-day trial so you can experience our teaching style, meet your instructor, and see if it's the right fit — with no commitment or credit card required.",
  },
  {
    question: "Are the classes one-on-one?",
    answer:
      "Absolutely. Every class is a private one-on-one session between the student and their dedicated instructor, ensuring personalized attention and faster progress.",
  },
  {
    question: "Can students from any country join?",
    answer:
      "Yes, we welcome students from all around the world. Our classes are conducted online, so you can join from anywhere with an internet connection.",
  },
  {
    question: "What platform are the classes conducted on?",
    answer:
      "Classes are conducted via Zoom or Skype — whichever platform is most convenient for you. We also provide supplementary materials through our student portal.",
  },
  {
    question: "Are classes available for kids and adults?",
    answer:
      "Yes, we have specialized programs for all age groups. Whether you're enrolling a young child or yourself, our instructors adapt their teaching approach to suit each student's needs.",
  },
  {
    question: "How flexible are the class timings?",
    answer:
      "Very flexible! We offer classes 24/7 across multiple time zones. You can choose a schedule that works best for you and reschedule when needed.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-28 bg-muted/30 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl -translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          Everything you need to know about our Quran learning programs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 md:px-8 shadow-card data-[state=open]:shadow-card-hover transition-shadow duration-300"
            >
              <AccordionTrigger className="font-display text-base md:text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-sm md:text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
