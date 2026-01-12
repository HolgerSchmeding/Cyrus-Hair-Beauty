import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung | CYRUS Hair & Beauty',
  description: 'Datenschutzerklärung von CYRUS Hair & Beauty in Baden-Baden.',
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Datenschutzerklärung
            </h1>
            <p className="text-gray-400">Stand: Januar 2026</p>
          </div>

          {/* Intro Text */}
          <p className="text-gray-300 mb-10">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen 
            Daten ist uns wichtig. Nachfolgend informieren wir Sie gemäß Art. 13 DSGVO über die 
            Verarbeitung Ihrer Daten.
          </p>

          {/* Content */}
          <div className="space-y-10 text-gray-300">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher</h2>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 space-y-1">
                <p className="text-amber-500 font-semibold">CYRUS Hair & Beauty</p>
                <p>Inhaber: Mohsen Sadeghvand</p>
                <p>Sophienstrasse 13</p>
                <p>76530 Baden-Baden</p>
                <p>Deutschland</p>
                <p className="mt-3">
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

            {/* 2. Erhebung und Speicherung */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung
              </h2>
              
              <h3 className="text-lg font-medium text-white mb-3">a) Beim Besuch der Website</h3>
              <p className="mb-4">
                Beim Aufrufen unserer Website werden automatisch Informationen an den Server unseres 
                Providers gesendet (sog. Server-Logfiles). Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und Betriebssystem</li>
              </ul>
              <p className="mb-6">
                Die Verarbeitung erfolgt zur Gewährleistung eines reibungslosen Verbindungsaufbaus 
                und Systemsicherheit (Art. 6 Abs. 1 lit. f DSGVO).
              </p>

              <h3 className="text-lg font-medium text-white mb-3">b) Bei Kontaktaufnahme</h3>
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre Angaben zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert 
                (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
            </section>

            {/* 3. Weitergabe von Daten */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Weitergabe von Daten</h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nur, wenn dies 
                gesetzlich erlaubt ist oder Sie eingewilligt haben.
              </p>
            </section>

            {/* 4. Instagram */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Instagram</h2>
              <p className="mb-4">
                Unsere Website verlinkt auf unser Instagram-Profil. Betreiber ist die Meta 
                Platforms Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
              </p>
              <p className="mb-2">
                Bitte beachten Sie, dass bei Aufruf von Instagram personenbezogene Daten durch 
                Meta verarbeitet werden können. Weitere Informationen finden Sie in der 
                Datenschutzerklärung von Instagram:
              </p>
              <a 
                href="https://privacycenter.instagram.com/policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors break-all"
              >
                https://privacycenter.instagram.com/policy
              </a>
            </section>

            {/* 5. Ihre Rechte */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
              <p className="mb-4">Sie haben das Recht auf:</p>
              <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                <li>Auskunft nach Art. 15 DSGVO</li>
                <li>Berichtigung nach Art. 16 DSGVO</li>
                <li>Löschung nach Art. 17 DSGVO</li>
                <li>Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
                <li>Datenübertragbarkeit nach Art. 20 DSGVO</li>
                <li>Widerspruch nach Art. 21 DSGVO</li>
              </ul>
              <p>
                Zudem haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. 
                Zuständig ist in Baden-Württemberg: Landesbeauftragter für den Datenschutz und 
                die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 
                70173 Stuttgart.
              </p>
            </section>

            {/* 6. Speicherdauer */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es zur Erfüllung der 
                genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
              </p>
            </section>

            {/* 7. SSL- bzw. TLS-Verschlüsselung */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Unsere Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
              </p>
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
