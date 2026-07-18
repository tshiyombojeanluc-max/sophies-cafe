import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const pastries = [
  {
    name: "Croissant",
    description: "Butter-laminated, baked at dawn",
    price: "3.2",
    image: images.pastries.croissant,
  },
  {
    name: "Almond Croissant",
    description: "Frangipane cream, toasted almonds",
    price: "4.0",
    image: images.pastries.almondCroissant,
  },
  {
    name: "Cinnamon Roll",
    description: "Cardamom dough, brown butter glaze",
    price: "4.5",
    image: images.pastries.cinnamonRoll,
  },
  {
    name: "Cheesecake",
    description: "Basque style, caramelized top",
    price: "5.5",
    image: images.pastries.cheesecake,
  },
  {
    name: "Lemon Tart",
    description: "Sicilian lemon curd, shortcrust",
    price: "4.8",
    image: images.pastries.lemonTart,
  },
  {
    name: "Blueberry Muffin",
    description: "Wild blueberries, streusel top",
    price: "3.8",
    image: images.pastries.blueberryMuffin,
  },
];

export function Pastries() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            Fresh Daily
          </p>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Pastries
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
          {pastries.map((pastry) => (
            <FadeIn key={pastry.name} direction="up">
              <Card className="group overflow-hidden rounded-2xl border-beige/60 bg-white p-0 shadow-none transition-shadow duration-300 hover:shadow-lg">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={pastry.image}
                    alt={pastry.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(min-width: 768px) 30vw, 50vw"
                  />
                </div>
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg text-foreground md:text-xl">
                      {pastry.name}
                    </h3>
                    <span className="whitespace-nowrap text-sm text-forest">
                      €{pastry.price}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-light text-foreground/60">
                    {pastry.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
