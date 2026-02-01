export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": "https://cyrus-hair-beauty.de/#organization",
    name: "CYRUS Hair & Beauty",
    alternateName: "Cyrus Friseur Baden-Baden",
    description: "Premium Friseur in Baden-Baden. Haarschnitte, Styling, Bartpflege und mehr für Damen und Herren.",
    url: "https://cyrus-hair-beauty.de",
    telephone: "+49-7221-3745816",
    email: "cyrus.barber.2024@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sophienstrasse 13",
      addressLocality: "Baden-Baden",
      postalCode: "76530",
      addressCountry: "DE",
      addressRegion: "Baden-Württemberg",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.7606,
      longitude: 8.2405,
    },
    image: [
      "https://cyrus-hair-beauty.de/Selbstbildnis Mo copy.png",
      "https://cyrus-hair-beauty.de/Background hero section.jpg",
    ],
    sameAs: [
      "https://www.instagram.com/cyrus_hair_beauty/",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, EC Card",
    areaServed: {
      "@type": "City",
      name: "Baden-Baden",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Friseurdienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Herrenhaarschnitt",
            description: "Professioneller Haarschnitt für Herren",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Damenhaarschnitt",
            description: "Styling und Schnitt für Damen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bartpflege",
            description: "Professionelle Bartpflege und Rasur",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kinderhaarschnitt",
            description: "Haarschnitte für Kinder",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
