import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://cyrus-hair-beauty.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CYRUS Hair & Beauty | Friseur in Baden-Baden",
    template: "%s | CYRUS Hair & Beauty",
  },
  description: "Dein Style. Unsere Leidenschaft. Premium Friseur in Baden-Baden. Haarschnitte, Styling, Bartpflege und mehr für Damen und Herren. Jetzt Termin vereinbaren!",
  keywords: [
    "Friseur Baden-Baden",
    "Haarschnitt Baden-Baden",
    "Barbershop Baden-Baden",
    "Bartpflege Baden-Baden",
    "Damenfriseur Baden-Baden",
    "Herrenfriseur Baden-Baden",
    "Hair & Beauty",
    "CYRUS Friseur",
    "Friseursalon Baden-Baden",
    "Hairstyling Baden-Baden",
    "Friseur Sophienstrasse",
  ],
  authors: [{ name: "CYRUS Hair & Beauty" }],
  creator: "CYRUS Hair & Beauty",
  publisher: "CYRUS Hair & Beauty",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "CYRUS Hair & Beauty",
    title: "CYRUS Hair & Beauty | Friseur in Baden-Baden",
    description: "Dein Style. Unsere Leidenschaft. Premium Friseur in Baden-Baden für Damen und Herren. Haarschnitte, Styling, Bartpflege und mehr.",
    images: [
      {
        url: "/Selbstbildnis Mo copy.png",
        width: 1200,
        height: 630,
        alt: "CYRUS Hair & Beauty - Friseur in Baden-Baden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CYRUS Hair & Beauty | Friseur in Baden-Baden",
    description: "Dein Style. Unsere Leidenschaft. Premium Friseur in Baden-Baden für Damen und Herren.",
    images: ["/Selbstbildnis Mo copy.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification (falls vorhanden)
    // google: "your-google-verification-code",
  },
};

import LocalBusinessSchema from "@/components/LocalBusinessSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
