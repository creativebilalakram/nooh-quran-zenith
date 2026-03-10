import { MessageCircle, Mail, MapPin } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const Footer = () => (
  <footer className="py-14 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div>
          <img src={logoSvg} alt="Nooh's Quran Learning" className="h-12 brightness-0 invert mb-2" />
          <p className="font-body text-sm text-background/40">
            Premium online Quran education for students worldwide.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { icon: Mail, text: "sarwarhafizusman83@gmail.com" },
            { icon: MessageCircle, text: "+1 825 595 4870 | PK: +92 310 710 3142" },
            { icon: MapPin, text: "Available Worldwide" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <Icon className="text-accent" size={14} />
              <span className="font-body text-sm text-background/60">{text}</span>
            </div>
          ))}
        </div>
        <div className="md:text-right">
          <p className="font-body text-sm text-background/40">
            © {new Date().getFullYear()} Nooh Quran Learning Center.<br />All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
