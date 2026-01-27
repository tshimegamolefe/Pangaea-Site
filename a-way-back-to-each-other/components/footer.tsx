import { Github, Shield } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Mission */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Image
                src="/android-chrome-512x512.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-serif font-semibold text-lg text-foreground">Pangaea</span>
            </div>
            <p className="text-sm text-muted-foreground italic">A local coordination layer</p>
          </div>

          {/* Security & Open Source */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://github.com/PangaeaHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Audit the threat surface</span>
            </a>
            <a
              href="https://github.com/PangaeaHQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-4 py-2 hover:bg-muted/50"
            >
              <Github className="w-4 h-4" />
              <span>Source code</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Pangaea reduces coordination friction under real-world constraints.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-4">
            Open source • Offline-first • No surveillance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
