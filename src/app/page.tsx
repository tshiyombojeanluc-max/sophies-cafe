import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { SignatureDrinks } from "@/components/site/signature-drinks";
import { Pastries } from "@/components/site/pastries";
import { Gallery } from "@/components/site/gallery";
import { OurSpace } from "@/components/site/our-space";
import { Reviews } from "@/components/site/reviews";
import { VisitUs } from "@/components/site/visit-us";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <SignatureDrinks />
        <Pastries />
        <Gallery />
        <OurSpace />
        <Reviews />
        <VisitUs />
      </main>
      <Footer />
    </div>
  );
}
