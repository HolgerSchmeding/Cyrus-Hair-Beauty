import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Über uns | CYRUS Hair & Beauty',
  description: 'Lernen Sie unser Team kennen – Mohsen und Beckie von CYRUS Hair & Beauty in Baden-Baden.',
};

export default function UeberUns() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="text-center mb-10 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Unser Team
            </h1>
            <div className="w-16 h-1 bg-amber-500 mx-auto" />
          </div>

          {/* Team Members */}
          <div className="space-y-16 sm:space-y-24">
            {/* Mohsen */}
            <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
              {/* Image */}
              <div className="relative aspect-[3/4] w-64 sm:w-72 md:w-80 mx-auto md:mx-0 rounded-lg overflow-hidden">
                <Image
                  src="/Selbstbildnis Mo copy.png"
                  alt="Mohsen - Inhaber von CYRUS Hair & Beauty"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Content */}
              <div className="md:pl-4 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white font-[family-name:var(--font-playfair)]">
                  Mohsen
                </h2>
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Mein Name ist Mohsen, aber die meisten nennen mich Mo. CYRUS Hair & Beauty ist mehr als nur Haareschneiden – es ist meine Leidenschaft für präzises Handwerk und individuellen Stil.
                </p>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Hier in Baden-Baden nehme ich mir Zeit für jeden einzelnen Kunden, um den perfekten Look zu kreieren, der deine Persönlichkeit unterstreicht. Qualität und deine Zufriedenheit stehen für mich an erster Stelle.
                </p>

                {/* Highlights */}
                <div className="space-y-3 inline-block text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 sm:w-8 h-0.5 bg-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-medium text-sm sm:text-base">Über 10 Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 sm:w-8 h-0.5 bg-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-medium text-sm sm:text-base">Präzision ist unser Standard</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Beckie */}
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
              {/* Content - auf Desktop links */}
              <div className="order-2 md:order-1 md:pr-4 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-white font-[family-name:var(--font-playfair)]">
                  Beckie
                </h2>
                <p className="text-amber-500 mb-4 font-medium text-sm sm:text-base">
                  Friseurmeisterin | Make-up & Styling
                </p>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  Vom Musical bis zum Salon: Ich bringe Bühnenerfahrung und handwerkliche Präzision zu Cyrus. Meine Leidenschaft liegt in der Verwandlung – egal ob durch neue Farbtechniken, Extensions oder kreatives Styling. Als Perfektionistin ist es mein Anspruch, deine Persönlichkeit genau und vielseitig in Szene zu setzen.
                </p>

                {/* Highlights */}
                <div className="space-y-3 inline-block text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 sm:w-8 h-0.5 bg-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-medium text-sm sm:text-base">Meisterin im Friseurhandwerk & professionelles Make-up</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 sm:w-8 h-0.5 bg-amber-500 flex-shrink-0" />
                    <span className="text-amber-500 font-medium text-sm sm:text-base">Vielseitig, genau und immer mit dem Blick fürs Detail</span>
                  </div>
                </div>
              </div>

              {/* Image - auf Desktop rechts */}
              <div className="order-1 md:order-2 relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-[420px] mx-auto md:ml-auto md:mr-0 rounded-lg overflow-hidden">
                <Image
                  src="/rebecca-beckie.jpg"
                  alt="Beckie - Friseurmeisterin bei CYRUS Hair & Beauty"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
