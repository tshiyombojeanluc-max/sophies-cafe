import Image from "next/image";
import { FadeIn } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const captions = [
  "A room built for lingering",
  "Espresso pulled fresh, cup by cup",
  "Regulars catching up over coffee",
  "Monstera and morning light by the window",
  "Rattan pendants over the espresso bar",
  "Ceramics and pantry jars on display",
  "Boucle chairs beneath the banana leaves",
  "Behind the counter, calm and unhurried",
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            Gallery
          </p>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Moments at Sophie&rsquo;s
          </h2>
        </FadeIn>

        <div className="columns-2 gap-4 md:columns-3 md:gap-6 [&>*]:mb-4 md:[&>*]:mb-6">
          {images.gallery.map((src, i) => (
            <FadeIn key={src} direction="scale" delay={(i % 3) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl break-inside-avoid">
                <Image
                  src={src}
                  alt={captions[i] ?? "Sophie's Café"}
                  width={600}
                  height={i % 2 === 0 ? 750 : 600}
                  className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
