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
            <p className="text-gray-400">Stand: Februar 2026</p>
          </div>

          {/* Intro Text */}
          <p className="text-gray-300 mb-10">
            Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen 
            Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie ausführlich über 
            den Umgang mit Ihren Daten gemäß Art. 13 der Datenschutz-Grundverordnung (DSGVO) und 
            dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG).
          </p>

          {/* Content */}
          <div className="space-y-10 text-gray-300">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Verantwortlicher für die Datenverarbeitung</h2>
              <p className="mb-4">Verantwortlicher im Sinne der Datenschutzgesetze ist:</p>
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
              <p className="mt-4">
                <strong className="text-white">Datenschutzbeauftragter:</strong> Wir sind gesetzlich nicht verpflichtet, 
                einen Datenschutzbeauftragten zu bestellen, und haben daher keinen Datenschutzbeauftragten benannt.
              </p>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Hosting (IONOS)</h2>
              <p className="mb-4">
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
                die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei handelt 
                es sich v. a. um IP-Adressen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, 
                die über eine Website generiert werden.
              </p>
              <p className="mb-4">
                Unser Hoster ist: <strong className="text-white">IONOS SE</strong>, Elgendorfer Str. 57, 56410 Montabaur.
              </p>
              <p>
                <strong className="text-white">Auftragsverarbeitung:</strong> Wir haben einen Vertrag über Auftragsverarbeitung (AVV) 
                mit IONOS geschlossen. Dieser gewährleistet, dass die Daten unserer Websitebesucher nur nach unseren 
                Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
              </p>
            </section>

            {/* 3. Datenerfassung und Technik */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Datenerfassung und Technik</h2>
              
              <h3 className="text-lg font-medium text-white mb-3">SSL- bzw. TLS-Verschlüsselung</h3>
              <p className="mb-6">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die 
                Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h3 className="text-lg font-medium text-white mb-3">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mb-6">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber 
                hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner 
                Website – hierzu müssen die Server-Log-Files erfasst werden. <strong className="text-white">Speicherdauer:</strong> Die 
                Logfiles werden für maximal 14 Tage gespeichert und anschließend gelöscht, sofern keine sicherheitsrelevante 
                Aufbewahrung (z.B. bei Missbrauchsverdacht) erforderlich ist.
              </p>

              <h3 className="text-lg font-medium text-white mb-3">Cookies & TDDDG</h3>
              <p className="mb-6">
                Wir setzen auf unserer Website keine Cookies zu Analyse-, Marketing- oder Trackingzwecken ein. 
                Sofern technisch zwingend erforderliche Cookies oder vergleichbare Technologien (z.B. Session-Storage) 
                verwendet werden, um die Grundfunktionen der Website darzustellen, erfolgt dies auf Grundlage von 
                § 25 Abs. 2 TDDDG. Die darauffolgende Datenverarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse am Betrieb der Website).
              </p>

              <h3 className="text-lg font-medium text-white mb-3">Google Fonts (Lokales Hosting)</h3>
              <p>
                Auf dieser Website nutzen wir zur einheitlichen Darstellung von Schriftarten Google Fonts. 
                Diese sind lokal auf unserem Server installiert. Eine Verbindung zu Servern von Google findet 
                dabei nicht statt. Es werden hierbei keine Daten an Google übertragen.
              </p>
            </section>

            {/* 4. Kontaktaufnahme */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Kontaktaufnahme</h2>
              <p className="mb-4">
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus 
                hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens 
                bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO 
                (Vertragserfüllung/Vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Bearbeitung von Anfragen).
              </p>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5 mb-4">
                <p className="text-amber-500 font-semibold mb-2">Hinweis zur E-Mail-Kommunikation:</p>
                <p>
                  Bitte beachten Sie, dass die Kommunikation per E-Mail Sicherheitslücken aufweisen kann. 
                  Wir nutzen für den E-Mail-Verkehr einen Dienstleister (Google/Gmail). Wir weisen darauf hin, 
                  dass bei der Nutzung der kostenfreien Version von Gmail die Datenverarbeitung teilweise in 
                  Drittstaaten (USA) erfolgen kann und gesonderten Nutzungsbedingungen des Anbieters unterliegt.
                </p>
              </div>
              <p>
                <strong className="text-white">Speicherdauer:</strong> Wir löschen Ihre Anfragen, sobald diese 
                abschließend geklärt sind und keine gesetzlichen Aufbewahrungspflichten (z.B. 10 Jahre bei 
                steuerlich relevanten E-Mails) entgegenstehen.
              </p>
            </section>

            {/* 5. Verlinkungen zu Drittanbietern */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Verlinkungen zu Drittanbietern (Social Media & Karten)</h2>
              
              <h3 className="text-lg font-medium text-white mb-3">Google Maps (Link)</h3>
              <p className="mb-6">
                Wir nutzen auf unserer Website keine eingebetteten Karten, sondern verlinken lediglich auf Google Maps. 
                Wenn Sie den Link zu Google Maps anklicken, verlassen Sie unsere Website und werden zu Google weitergeleitet. 
                Erst dann werden Daten an Google (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) übertragen.
              </p>

              <h3 className="text-lg font-medium text-white mb-3">Instagram (Link)</h3>
              <p>
                Auf unserer Website ist ein Link zum Social-Media-Dienst Instagram eingebunden. Es handelt sich hierbei 
                um kein Plugin (wie einen „Like-Button"). Erst wenn Sie den Link anklicken, werden Sie zu Instagram 
                (Meta Platforms Ireland Limited) weitergeleitet und Daten werden dort verarbeitet.
              </p>
            </section>

            {/* 6. Ihre Rechte */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Ihre Rechte als Betroffener</h2>
              <p className="mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
              <ul className="space-y-3 mb-6">
                <li>
                  <strong className="text-white">Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre 
                  von uns verarbeiteten Daten verlangen.
                </li>
                <li>
                  <strong className="text-white">Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung 
                  unrichtiger oder die Vervollständigung Ihrer Daten verlangen.
                </li>
                <li>
                  <strong className="text-white">Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer 
                  gespeicherten Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie 
                  Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des 
                  öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen 
                  erforderlich ist.
                </li>
                <li>
                  <strong className="text-white">Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können 
                  die Einschränkung der Verarbeitung Ihrer Daten verlangen.
                </li>
                <li>
                  <strong className="text-white">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, 
                  Ihre Daten in einem strukturierten, gängigen Format zu erhalten.
                </li>
                <li>
                  <strong className="text-white">Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sofern 
                  wir Daten auf Grundlage Ihrer Einwilligung verarbeiten, können Sie diese jederzeit für die 
                  Zukunft widerrufen.
                </li>
                <li>
                  <strong className="text-white">Beschwerderecht:</strong> Sie haben das Recht, sich bei einer 
                  Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Zuständig ist in der Regel die Aufsichtsbehörde 
                  Ihres üblichen Aufenthaltsortes oder unseres Unternehmenssitzes (Landesbeauftragter für den 
                  Datenschutz und die Informationsfreiheit Baden-Württemberg).
                </li>
              </ul>
            </section>

            {/* 7. Widerspruchsrecht */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Widerspruchsrecht (Art. 21 DSGVO)</h2>
              <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5">
                <p className="uppercase font-semibold text-white">
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 
                  S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen 
                  die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich 
                  aus Ihrer besonderen Situation ergeben.
                </p>
              </div>
            </section>

            {/* 8. Sonstiges */}
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Sonstiges</h2>
              <p>
                <strong className="text-white">Automatisierte Entscheidungsfindung:</strong> Eine automatische 
                Entscheidungsfindung oder ein Profiling finden nicht statt.
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
