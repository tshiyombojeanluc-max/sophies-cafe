import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://sophiescafe.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sophie's Café — Sip Slowly. Stay Longer.",
    template: "%s — Sophie's Café",
  },
  description:
    "Craft coffee, fresh pastries, and beautiful mornings in a calm, minimalist space. Visit Sophie's Café for freshly roasted coffee and a quiet place to stay longer.",
  keywords: [
    "Sophie's Café",
    "coffee shop",
    "specialty coffee",
    "café",
    "pastries",
    "coffee shop near me",
  ],
  authors: [{ name: "Sophie's Café" }],
  openGraph: {
    title: "Sophie's Café — Sip Slowly. Stay Longer.",
    description:
      "Craft coffee, fresh pastries, and beautiful mornings in a calm, minimalist space.",
    url: siteUrl,
    siteName: "Sophie's Café",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sophie's Café — a calm, minimalist coffee shop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sophie's Café — Sip Slowly. Stay Longer.",
    description:
      "Craft coffee, fresh pastries, and beautiful mornings in a calm, minimalist space.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "Sophie's Café",
    description:
      "Craft coffee, fresh pastries, and beautiful mornings in a calm, minimalist space.",
    url: siteUrl,
    telephone: "+1-555-201-9922",
    priceRange: "€€",
    servesCuisine: "Coffee, Pastries",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Linden Row",
      addressLocality: "Copenhagen",
      postalCode: "1050",
      addressCountry: "DK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.6761,
      longitude: 12.5683,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://instagram.com/sophiescafe",
      "https://facebook.com/sophiescafe",
      "https://tiktok.com/@sophiescafe",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
