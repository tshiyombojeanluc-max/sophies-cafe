import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/site/fade-in";
import { images } from "@/lib/images";

const hours = [
  { day: "Monday – Friday", time: "7:00 AM – 6:00 PM" },
  { day: "Saturday", time: "8:00 AM – 5:00 PM" },
  { day: "Sunday", time: "8:00 AM – 3:00 PM" },
];

export function VisitUs() {
  return (
    <section id="visit" className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <FadeIn direction="left">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={images.visitMap}
              alt="Map location of Sophie's Café"
              fill
              className="object-cover grayscale"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-white shadow-lg">
                <MapPin className="h-6 w-6" />
              </span>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            Visit Us
          </p>
          <h2 className="mb-10 font-heading text-4xl leading-tight text-foreground md:text-5xl">
            Come Say Hello.
          </h2>

          <div className="flex flex-col gap-7">
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground">
                  Opening Hours
                </p>
                {hours.map((h) => (
                  <p
                    key={h.day}
                    className="text-sm font-light text-foreground/65"
                  >
                    {h.day} — {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-medium text-foreground">Address</p>
                <p className="text-sm font-light text-foreground/65">
                  14 Linden Row, Copenhagen 1050, Denmark
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a
                  href="tel:+15552019922"
                  className="text-sm font-light text-foreground/65 hover:text-forest"
                >
                  +1 (555) 201-9922
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-forest" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href="mailto:hello@sophiescafe.com"
                  className="text-sm font-light text-foreground/65 hover:text-forest"
                >
                  hello@sophiescafe.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
