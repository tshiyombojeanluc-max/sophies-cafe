"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { unlockHeroScroll } from "@/lib/unlock-hero-scroll";

const links = [
  { href: "#about", label: "About" },
  { href: "#drinks", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,44,44,0.06)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className={`font-heading text-xl tracking-wide transition-colors ${
              scrolled ? "text-forest" : "text-white"
            }`}
          >
            Sophie&rsquo;s Café
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={unlockHeroScroll}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-sage ${
                    scrolled ? "text-foreground/80 hover:text-forest" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button className="rounded-full bg-forest px-6 text-white hover:bg-forest/90">
              Reserve a Table
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className={`transition-colors md:hidden ${scrolled ? "text-forest" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => {
                      unlockHeroScroll();
                      setOpen(false);
                    }}
                    className="block py-3 text-lg font-medium text-foreground/80 transition-colors hover:text-forest"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <Button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-full bg-forest text-white hover:bg-forest/90"
                >
                  Reserve a Table
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky reservation button (mobile) */}
      <div className="fixed bottom-5 inset-x-0 z-40 flex justify-center md:hidden">
        <Button className="rounded-full bg-forest px-8 py-6 text-base text-white shadow-lg shadow-forest/30 hover:bg-forest/90">
          Reserve a Table
        </Button>
      </div>
    </>
  );
}
