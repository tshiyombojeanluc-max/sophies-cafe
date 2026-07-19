const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  heroBg: "/images/hero-bg.jpg",
  heroMedia: "/images/hero-media.jpg",
  drinks: {
    vanillaLatte: unsplash("photo-1541167760496-1628856ab772", 900),
    matchaLatte: unsplash("photo-1515823064-d6e0c04616a7", 900),
    flatWhite: unsplash("photo-1517701604599-bb29b565090c", 900),
    coldBrew: unsplash("photo-1517701550927-30cf4ba1dba5", 900),
    honeyCappuccino: unsplash("photo-1509042239860-f550ce710b93", 900),
    affogato: unsplash("photo-1621263764928-df1444c5e859", 900),
  },
  pastries: {
    croissant: unsplash("photo-1555507036-ab1f4038808a", 900),
    almondCroissant: unsplash("photo-1623334044303-241021148842", 900),
    cinnamonRoll: unsplash("photo-1509365465985-25d11c17e812", 900),
    cheesecake: unsplash("photo-1524351199678-941a58a3df50", 900),
    lemonTart: unsplash("photo-1519915028121-7d3463d20b13", 900),
    blueberryMuffin: unsplash("photo-1607958996333-41aef7caefaa", 900),
  },
  gallery: [
    "/images/gallery-0.jpg",
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
    "/images/gallery-7.jpg",
  ],
  ourSpaceOne: "/images/ourspace-1.jpg",
  ourSpaceTwo: "/images/ourspace-2.jpg",
  visitMap: unsplash("photo-1524661135-423995f22d0b", 1200),
};
