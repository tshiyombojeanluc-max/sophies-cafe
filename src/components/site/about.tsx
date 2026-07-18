import Image from "next/image";
import { Leaf, MapPin, PawPrint, Wifi } from "lucide-react";
import { FadeIn } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const stats = [
  {
    icon: Leaf,
    label: "Freshly Roasted Daily",
  },
  {
    icon: MapPin,
    label: "Locally Sourced",
  },
  {
    icon: PawPrint,
    label: "Pet Friendly",
  },
  {
    icon: Wifi,
    label: "Free WiFi",
  },
];

export function About() {
  return (
    <section id="about" className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-20 md:px-10">
        <FadeIn direction="left">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={images.aboutInterior}
              alt="Sunlit interior of Sophie's Café with olive trees and wooden tables"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            About Us
          </p>
          <h2 className="mb-6 font-heading text-4xl leading-tight text-foreground md:text-5xl">
            A Café Designed Around Simplicity.
          </h2>
          <p className="mb-6 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            Sophie&rsquo;s Café believes great coffee deserves beautiful
            spaces. Every cup is poured slowly, every table is set with
            intention, and every corner is filled with natural light and
            greenery — because a good morning shouldn&rsquo;t be rushed.
          </p>
          <p className="mb-10 text-base font-light leading-relaxed text-foreground/70 md:text-lg">
            From our hand-thrown ceramics to our house-baked pastries, we
            design every detail around calm, quality, and quiet
            conversation.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl border border-sage/30 bg-white p-4 shadow-sm"
              >
                <stat.icon className="h-5 w-5 shrink-0 text-forest" />
                <span className="text-sm font-medium text-foreground/80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
