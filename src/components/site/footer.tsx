import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-beige/60 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <p className="font-heading text-lg text-forest">Sophie&rsquo;s Café</p>

        <div className="flex items-center gap-6 text-sm font-medium text-foreground/60">
          <a
            href="https://instagram.com/sophiescafe"
            className="transition-colors hover:text-forest"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/sophiescafe"
            className="transition-colors hover:text-forest"
          >
            Facebook
          </a>
          <a
            href="https://tiktok.com/@sophiescafe"
            className="transition-colors hover:text-forest"
          >
            TikTok
          </a>
          <a
            href="mailto:hello@sophiescafe.com"
            aria-label="Email"
            className="transition-colors hover:text-forest"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-xs text-foreground/40">
          {`© ${new Date().getFullYear()} Sophie's Café. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
