import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Mic, Brain, Languages, BookMarked, GraduationCap, FileText, Sparkles, ArrowRight, Check, X } from "lucide-react";
import courseQuranReading from "@/assets/course-quran-reading.webp";
import courseTajweed from "@/assets/course-tajweed.webp";
import courseMemorization from "@/assets/course-memorization.webp";
import courseTranslation from "@/assets/course-translation.webp";
import courseArabic from "@/assets/course-arabic.webp";
import courseNoraniQaida from "@/assets/course-norani-qaida.webp";
import courseTafseer from "@/assets/course-tafseer.webp";
import courseSupplication from "@/assets/course-supplication.webp";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: BookOpen,
    title: "Quran Reading",
    desc: "Learn to read the Quran fluently with proper pronunciation and confidence.",
    longDesc: "Our Quran Reading course is designed for students at every level. Whether you're a complete beginner or looking to improve fluency, our certified teachers guide you step-by-step through the Arabic script, pronunciation rules, and reading flow.",
    learns: ["Read Arabic letters and words accurately", "Build fluency in Quran recitation", "Develop proper pronunciation (Makharij)", "Read independently with confidence"],
    image: courseQuranReading,
  },
  {
    icon: Mic,
    title: "Tajweed Course",
    desc: "Master the rules of Tajweed for beautiful, accurate Quran recitation.",
    longDesc: "Tajweed is the art of reciting the Quran with precision and beauty. This course covers all essential Tajweed rules so you can recite the Quran exactly as it was revealed.",
    learns: ["Master all Tajweed rules systematically", "Perfect your Makharij (articulation points)", "Learn Ghunnah, Idgham, Ikhfa, and more", "Recite with beauty and accuracy"],
    image: courseTajweed,
  },
  {
    icon: Brain,
    title: "Quran Memorization",
    desc: "Structured Hifz program with proven memorization techniques.",
    longDesc: "Our Hifz program uses time-tested memorization techniques combined with modern teaching methods to help students memorize the Quran at their own pace with strong retention.",
    learns: ["Memorize with proven revision techniques", "Build a consistent Hifz schedule", "Strengthen retention through repetition", "Track progress with weekly assessments"],
    image: courseMemorization,
  },
  {
    icon: Languages,
    title: "Quran Translation",
    desc: "Understand the meanings of the Quran with word-by-word translation.",
    longDesc: "Go beyond reading — understand what Allah is saying. This course provides word-by-word translation and contextual meaning of Quranic verses to deepen your connection with the Quran.",
    learns: ["Understand word-by-word Quran translation", "Learn key Arabic vocabulary from the Quran", "Connect deeply with the Quran's message", "Study Tafseer-based contextual meanings"],
    image: courseTranslation,
  },
  {
    icon: BookMarked,
    title: "Tafseer Quran",
    desc: "Deep dive into the interpretation and context of Quranic verses.",
    longDesc: "Explore the depth and wisdom of the Quran through detailed Tafseer. Understand the historical context, reasons for revelation, and scholarly interpretations of each Surah.",
    learns: ["Study classical and modern Tafseer", "Understand Asbab al-Nuzul (reasons of revelation)", "Explore scholarly interpretations", "Apply Quranic wisdom to daily life"],
    image: courseTafseer,
  },
  {
    icon: GraduationCap,
    title: "Arabic Learning",
    desc: "Learn Arabic language fundamentals to connect with the Quran directly.",
    longDesc: "Learn the Arabic language from scratch or improve your existing skills. This course covers grammar, vocabulary, and conversation skills with a focus on understanding the Quran.",
    learns: ["Learn Arabic grammar (Nahw & Sarf)", "Build practical vocabulary", "Read and understand Arabic texts", "Connect with the Quran in its original language"],
    image: courseArabic,
  },
  {
    icon: FileText,
    title: "Norani Qaida",
    desc: "Perfect beginner course for children and adults starting from scratch.",
    longDesc: "The Norani Qaida is the ideal starting point for anyone new to reading Arabic. This foundational course teaches the alphabet, joining rules, and basic reading skills in a fun, structured way.",
    learns: ["Learn the Arabic alphabet from scratch", "Master letter joining and formation", "Read basic words and sentences", "Prepare for Quran reading with confidence"],
    image: courseNoraniQaida,
  },
  {
    icon: Sparkles,
    title: "Islamic Supplication",
    desc: "Learn essential daily duas and supplications with meaning.",
    longDesc: "Enrich your daily worship with authentic duas from the Quran and Sunnah. Learn the meaning, pronunciation, and occasions for each supplication.",
    learns: ["Learn essential daily duas", "Understand meanings and context", "Memorize with proper Arabic pronunciation", "Apply duas in daily worship routine"],
    image: courseSupplication,
  },
];

const CoursesSection = () => {
  const [selected, setSelected] = useState<typeof courses[0] | null>(null);

  return (
    <>
      <section id="courses" className="py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">Our Courses</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-5">Comprehensive Quran Curriculum</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Explore our range of courses designed for students of all levels, from beginners to advanced learners.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                onClick={() => setSelected(course)}
                className="group cursor-pointer bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-500"
              >
                {/* Course thumbnail */}
                <div className="relative h-40 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <course.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{course.title}</h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{course.desc}</p>
                  <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-primary group-hover:gap-2.5 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl border border-border shadow-card-hover w-full max-w-lg max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                >
                  <X size={16} className="text-foreground" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-center -mt-8 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg">
                    <selected.icon className="text-primary" size={28} />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3 text-center">{selected.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{selected.longDesc}</p>

                <h4 className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">What You'll Learn</h4>
                <ul className="space-y-3 mb-8">
                  {selected.learns.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="font-body text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="hero" size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CoursesSection;
