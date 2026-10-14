import { ScanEye } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/60 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <ScanEye className="h-5 w-5 text-primary" />
            <span className="font-bold gradient-text">OralGuard AI</span>
          </div>
          <p className="text-xs text-muted-foreground">See early. Seek care sooner.</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 OralGuard AI. All rights reserved.
          </p>
        </div>
        <div className="max-w-xs text-center md:text-right">
          <p className="text-xs text-muted-foreground leading-relaxed">
            ⚕️ This AI tool is a screening prototype and does not replace professional dental diagnosis.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
