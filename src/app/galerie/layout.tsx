import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Entdecken Sie unsere Arbeiten – Haarschnitte, Bartpflege und Styling von CYRUS Hair & Beauty in Baden-Baden. Inspiration für Ihren neuen Look.',
  keywords: ['Friseur Galerie', 'Haarschnitte Beispiele', 'Bartpflege Fotos', 'Styling Baden-Baden', 'Vorher Nachher Friseur'],
  openGraph: {
    title: 'Galerie | CYRUS Hair & Beauty',
    description: 'Entdecken Sie unsere Arbeiten – Haarschnitte, Bartpflege und Styling von CYRUS Hair & Beauty.',
    images: ['/galerie/haarschnitte/IMG_2635.jpeg'],
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
