import { motion } from "framer-motion";
import { BookOpen, Globe, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full aspect-[4/3] rounded-2xl bg-secondary border border-border flex items-center justify-center shadow-card">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                <BookOpen className="text-primary" size={32} />
              </div>
              <p className="font-display text-lg text-foreground font-semibold">About Image</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Placeholder</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Dedicated to Excellence in Quran Education
          </h2>
          <p className="font-body text-muted-foreground mb-6 leading-relaxed">
            Nooh Quran Learning Center is a trusted online Quran academy providing personalized one-on-one classes to students of all ages worldwide. With over a decade of teaching experience, our certified tutors deliver engaging, structured lessons tailored to each student's pace and level.
          </p>
          <div className="space-y-4">
            {[
              { icon: Heart, text: "Personalized one-on-one attention for every student" },
              { icon: Globe, text: "Students from 30+ countries across the globe" },
              { icon: BookOpen, text: "Structured curriculum with progress tracking" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="text-primary" size={16} />
                </div>
                <p className="font-body text-sm text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
