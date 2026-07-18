import { ExperienceSection } from "@/components/ui/carousel-cards";
import { FadeIn } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const drinks = [
  {
    id: "vanilla-latte",
    title: "Vanilla Latte",
    image: images.drinks.vanillaLatte,
    location: "House espresso, steamed milk, Madagascar vanilla",
    price: 4.8,
    badge: "Bestseller",
  },
  {
    id: "matcha-latte",
    title: "Matcha Latte",
    image: images.drinks.matchaLatte,
    location: "Ceremonial-grade matcha, oat milk",
    price: 5.2,
  },
  {
    id: "flat-white",
    title: "Flat White",
    image: images.drinks.flatWhite,
    location: "Double ristretto, velvet micro-foam",
    price: 4.2,
  },
  {
    id: "cold-brew",
    title: "Cold Brew",
    image: images.drinks.coldBrew,
    location: "18-hour steeped, single origin",
    price: 4.5,
  },
  {
    id: "honey-cappuccino",
    title: "Honey Cappuccino",
    image: images.drinks.honeyCappuccino,
    location: "Wildflower honey, cinnamon dust",
    price: 4.9,
  },
  {
    id: "affogato",
    title: "Affogato",
    image: images.drinks.affogato,
    location: "Vanilla bean gelato, double espresso",
    price: 5.6,
  },
];

export function SignatureDrinks() {
  return (
    <section id="drinks" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            The Menu
          </p>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Signature Drinks
          </h2>
        </FadeIn>

        <FadeIn direction="scale" delay={0.1}>
          <ExperienceSection title="" items={drinks} showViewAll={false} />
        </FadeIn>
      </div>
    </section>
  );
}
