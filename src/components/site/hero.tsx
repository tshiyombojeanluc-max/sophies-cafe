"use client";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/images";
import { motion } from "framer-motion";
import { unlockHeroScroll } from "@/lib/unlock-hero-scroll";

export function Hero() {
  return (
    <div id="top" className="relative">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={images.heroMedia}
        bgImageSrc={images.heroBg}
        title="Sip Slowly. Stay Longer."
        date="Sophie's Café"
        scrollToExpand="Scroll to Explore"
      >
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <p className="text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
            Craft coffee, fresh pastries, and beautiful mornings in a calm,
            minimalist space.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              render={<a href="#visit" />}
              nativeButton={false}
              onClick={unlockHeroScroll}
              className="rounded-full bg-forest px-8 py-6 text-base text-white hover:bg-forest/90"
            >
              Visit Us
            </Button>
            <Button
              render={<a href="#drinks" />}
              nativeButton={false}
              onClick={unlockHeroScroll}
              variant="outline"
              className="rounded-full border-forest/30 px-8 py-6 text-base text-forest hover:bg-forest/5"
            >
              View Menu
            </Button>
          </div>
        </div>
      </ScrollExpandMedia>

      {/* floating leaves — very subtle */}
      <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${12 + i * 15}%`,
              top: `-5%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              rotate: [0, 180],
            }}
            transition={{
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2.5,
            }}
          >
            🍃
          </motion.span>
        ))}
      </div>
    </div>
  );
}
