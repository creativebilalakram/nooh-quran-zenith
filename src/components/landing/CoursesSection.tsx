import { motion } from "framer-motion";
import { BookOpen, Mic, Brain, Languages, BookMarked, GraduationCap, FileText, Sparkles } from "lucide-react";

const courses = [
  { icon: BookOpen, title: "Quran Reading", desc: "Learn to read the Quran fluently with proper pronunciation and confidence." },
  { icon: Mic, title: "Tajweed Course", desc: "Master the rules of Tajweed for beautiful, accurate Quran recitation." },
  { icon: Brain, title: "Quran Memorization", desc: "Structured Hifz program with proven memorization techniques." },
  { icon: Languages, title: "Quran Translation", desc: "Understand the meanings of the Quran with word-by-word translation." },
  { icon: BookMarked, title: "Tafseer Quran", desc: "Deep dive into the interpretation and context of Quranic verses." },
  { icon: GraduationCap, title: "Arabic Learning", desc: "Learn Arabic language fundamentals to connect with the Quran directly." },
  { icon: FileText, title: "Norani Qaida", desc: "Perfect beginner course for children and adults starting from scratch." },
  { icon: Sparkles, title: "Islamic Supplication", desc: "Learn essential daily duas and supplications with meaning." },
];

const CoursesSection = () => (
  <section id="courses" className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-3 block">Our Courses</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive Quran Curriculum</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">Explore our range of courses designed for students of all levels, from beginners to advanced learners.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
              <course.icon className="text-primary" size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{course.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
