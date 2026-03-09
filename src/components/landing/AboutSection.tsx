import { motion } from "framer-motion";
import { BookOpen, Globe, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2" />

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl bg-secondary border border-border flex items-center justify-center shadow-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="text-center p-8 relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <p className="font-display text-lg text-foreground font-semibold">About Image</p>
                <p className="font-body text-sm text-muted-foreground mt-1">Placeholder</p>
              </div>
            </div>
            {/* Floating stat */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-card rounded-2xl border border-border shadow-lg px-5 py-3"
            >
              <p className="font-display text-2xl font-bold text-primary">10+</p>
              <p className="font-body text-[10px] text-muted-foreground font-medium">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">About Us</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Dedicated to Excellence in Quran Education
          </h2>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
            Nooh Quran Learning Center is a trusted online Quran academy providing personalized one-on-one classes to students of all ages worldwide. With over a decade of teaching experience, our certified tutors deliver engaging, structured lessons tailored to each student's pace.
          </p>
          <div className="space-y-5">
            {[
              { icon: Heart, text: "Personalized one-on-one attention for every student" },
              { icon: Globe, text: "Students from 30+ countries across the globe" },
              { icon: BookOpen, text: "Structured curriculum with progress tracking" },
            ].map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Icon className="text-primary" size={18} />
                </div>
                <p className="font-body text-sm md:text-base text-foreground font-medium pt-2">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
