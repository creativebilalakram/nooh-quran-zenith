const Footer = () => (
  <footer className="py-10 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-display text-lg font-bold text-background">
          Nooh <span className="text-accent">Quran</span>
        </p>
        <p className="font-body text-sm text-background/60">
          © {new Date().getFullYear()} Nooh Quran Learning Center. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
