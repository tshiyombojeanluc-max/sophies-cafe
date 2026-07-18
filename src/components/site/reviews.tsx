import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn, Stagger } from "@/components/site/fade-in";

const reviews = [
  {
    name: "Amelie R.",
    location: "Copenhagen",
    quote:
      "The most calming café I've found in the city. The light in the morning is unreal, and the flat white is even better.",
  },
  {
    name: "Jonas T.",
    location: "Melbourne",
    quote:
      "Feels like a Scandinavian living room. I've done half my freelance work from that corner table by the olive tree.",
  },
  {
    name: "Haruki M.",
    location: "Tokyo",
    quote:
      "Minimal, quiet, and the pastries are baked to perfection. My new Sunday morning ritual.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-forest">
            Reviews
          </p>
          <h2 className="font-heading text-4xl text-foreground md:text-5xl">
            Kind Words
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <FadeIn key={review.name} direction="up">
              <Card className="h-full rounded-2xl border-beige/60 bg-offwhite p-2 shadow-none">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex gap-0.5 text-forest">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mb-6 flex-1 text-sm font-light leading-relaxed text-foreground/75">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-foreground/50">
                      {review.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
