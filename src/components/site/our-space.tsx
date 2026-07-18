import Image from "next/image";
import { Laptop2, Sun, Sprout, Users } from "lucide-react";
import { FadeIn } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const features = [
  {
    icon: Sun,
    title: "Natural Lighting",
    description:
      "Floor-to-ceiling windows fill every table with soft morning light throughout the day.",
  },
  {
    icon: Sprout,
    title: "Indoor Greenery",
    description:
      "Olive trees, hanging plants, and fresh flowers bring the outdoors gently inside.",
  },
  {
    icon: Laptop2,
    title: "Remote Work Friendly",
    description:
      "Quiet corners, ample outlets, and fast WiFi for slow, focused mornings.",
  },
  {
    icon: Users,
    title: "Perfect for Friends",
    description:
      "Communal tables and cozy nooks designed for lingering conversation.",
  },
];

export function OurSpace() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <FadeIn direction="up">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            Our Space
          </p>
          <h2 className="mb-8 font-heading text-4xl leading-tight text-foreground md:text-5xl">
            A Quiet Room to Breathe.
          </h2>

          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <feature.icon className="mt-1 h-5 w-5 shrink-0 text-forest" />
                <div>
                  <h3 className="mb-1 font-heading text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed text-foreground/65">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={images.ourSpaceOne}
                alt="Quiet corner with plants and natural light at Sophie's Café"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22vw, 45vw"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={images.ourSpaceTwo}
                alt="Friends sharing coffee at a wooden table"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 22vw, 45vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
