import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | CYRUS Hair & Beauty',
  description: 'Impressum und rechtliche Angaben von CYRUS Hair & Beauty in Baden-Baden.',
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Impressum
            </h1>
            <div className="w-16 h-1 bg-amber-500" />
          </div>

          {/* Content */}
          <div className="space-y-10 text-gray-300">
            {/* Angaben gemäß § 5 TMG */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 space-y-1">
                <p className="text-amber-500 font-semibold">CYRUS Hair & Beauty</p>
                <p>Inhaber: Mohsen Sadeghvand</p>
                <p>Sophienstrasse 13</p>
                <p>76530 Baden-Baden</p>
                <p>Deutschland</p>
                <p className="mt-3">
                  E-Mail:{' '}
                  <a href="mailto:cyrus.barber.2024@gmail.com" className="text-amber-500 hover:text-amber-400 transition-colors">
                    cyrus.barber.2024@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 space-y-2">
                <p>
                  Telefon:{' '}
                  <a href="tel:+4972213745816" className="text-amber-500 hover:text-amber-400 transition-colors">
                    +49 (0)7221 3745816
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:cyrus.barber.2024@gmail.com" className="text-amber-500 hover:text-amber-400 transition-colors">
                    cyrus.barber.2024@gmail.com
                  </a>
                </p>
                <p>
                  Instagram:{' '}
                  <a 
                    href="https://www.instagram.com/cyrus_hair_beauty/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-500 hover:text-amber-400 transition-colors"
                  >
                    @cyrus_hair_beauty
                  </a>
                </p>
              </div>
            </section>

            {/* Umsatzsteuer-ID */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="font-medium">DE 35 549 872 010</p>
            </section>

            {/* Verantwortlich für den Inhalt */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 space-y-1">
                <p>Mohsen Sadeghvand</p>
                <p>Sophienstrasse 13</p>
                <p>76530 Baden-Baden</p>
                <p className="mt-3">
                  E-Mail:{' '}
                  <a href="mailto:cyrus.barber.2024@gmail.com" className="text-amber-500 hover:text-amber-400 transition-colors">
                    cyrus.barber.2024@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* EU-Streitschlichtung */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">EU-Streitschlichtung</h2>
              <p className="mb-2">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-400 transition-colors break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </section>

            {/* Verbraucherstreitbeilegung */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            {/* Haftung für Inhalte */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            {/* Kontakt Footer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
              <p className="mb-4">Fragen zu dieser Datenschutzerklärung richten Sie bitte an:</p>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 space-y-1">
                <p className="text-amber-500 font-semibold">CYRUS Hair & Beauty</p>
                <p>Mohsen Sadeghvand</p>
                <p>
                  Telefon:{' '}
                  <a href="tel:+4972213745816" className="text-amber-500 hover:text-amber-400 transition-colors">
                    +49 (0)7221 3745816
                  </a>
                </p>
                <p>
                  E-Mail:{' '}
                  <a href="mailto:cyrus.barber.2024@gmail.com" className="text-amber-500 hover:text-amber-400 transition-colors">
                    cyrus.barber.2024@gmail.com
                  </a>
                </p>
              </div>
            </section>

            {/* Zurück zur Website */}
            <div className="pt-8">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Zurück zur Website
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
