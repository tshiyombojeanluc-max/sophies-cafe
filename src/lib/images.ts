const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const images = {
  heroBg: unsplash("photo-1521017432531-fbd92d768814", 1920),
  heroMedia: unsplash("photo-1554118811-1e0d58224f24", 1600),
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
    unsplash("photo-1495474472287-4d71bcdd2085", 900),
    unsplash("photo-1442512595331-e89e73853f31", 900),
    unsplash("photo-1447933601403-0c6688de566e", 900),
    unsplash("photo-1445116572660-236099ec97a0", 900),
    unsplash("photo-1524350876685-274059332603", 900),
    unsplash("photo-1600093463592-8e36ae95ef56", 900),
    unsplash("photo-1559925393-8be0ec4767c8", 900),
    unsplash("photo-1493857671505-72967e2e2760", 900),
  ],
  ourSpaceOne: unsplash("photo-1567521464027-f127ff144326", 1200),
  ourSpaceTwo: unsplash("photo-1517486808906-6ca8b3f04846", 1200),
  visitMap: unsplash("photo-1524661135-423995f22d0b", 1200),
};
