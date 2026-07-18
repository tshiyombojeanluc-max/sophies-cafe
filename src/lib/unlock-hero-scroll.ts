export const UNLOCK_HERO_SCROLL_EVENT = "cafe:unlock-hero-scroll";

export function unlockHeroScroll() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(UNLOCK_HERO_SCROLL_EVENT));
  }
}
