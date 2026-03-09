import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const links = ["About", "Courses", "Pricing", "Contact"];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "top"}
      variants={{
        top: { y: 0 },
        scrolled: { y: 8 },
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "mx-4 md:mx-8 lg:mx-12 mt-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Nooh <span className="text-accent">Quran</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm">Start Free Trial</Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 px-4 pb-4 space-y-3 rounded-b-2xl">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="block font-body text-sm text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          <Button variant="hero" size="sm" className="w-full">Start Free Trial</Button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
