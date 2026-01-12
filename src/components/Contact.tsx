import Link from 'next/link';

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Besuche uns
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-4">
            {/* Address Card */}
            <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-semibold">Adresse</h3>
              </div>
              <div className="pl-8">
                <p className="text-gray-400">Sophienstrasse 13</p>
                <p className="text-gray-400">76530 Baden-Baden</p>
                <a
                  href="https://www.google.com/maps/place/Sophienstrasse+13,+76530+Baden-Baden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 mt-2 text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  In Google Maps öffnen
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-semibold">Telefon</h3>
              </div>
              <div className="pl-8">
                <a
                  href="tel:+4972213745816"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +49 (0)7221 3745816
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
              </div>
              <div className="pl-8 space-y-1 text-sm">
                <p className="text-gray-500">Mo: Geschlossen</p>
                <p className="text-amber-500">Di - Fr: 09:00 - 18:30 Uhr</p>
                <p className="text-amber-500">Sa: 09:00 - 18:00 Uhr</p>
                <p className="text-gray-500">So: Geschlossen</p>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-[#0d1520] border-l-2 border-amber-500 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="text-amber-500 font-semibold">Wichtiger Hinweis</h3>
              </div>
              <div className="pl-8">
                <p className="text-amber-500 text-sm">
                  Termine vergeben wir ausschliesslich telefonisch oder persönlich im Shop. Wir bieten keine Online-Buchung an.
                </p>
              </div>
            </div>

            {/* Owner */}
            <div className="text-center pt-4">
              <p className="text-gray-500 text-sm">Inhaber</p>
              <p className="text-white font-medium">Mohsen Sadeghvand</p>
            </div>
          </div>

          {/* Right Column - Map & Links */}
          <div className="space-y-4">
            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.7!2d8.2406!3d48.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970698c93ff93d%3A0x0!2sSophienstrasse%2013%2C%2076530%20Baden-Baden!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CYRUS Hair & Beauty Standort"
              />
            </div>

            {/* Instagram Card */}
            <div className="bg-[#0d1520] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3 className="text-lg font-semibold">Finde uns auf Instagram</h3>
              </div>
              <a
                href="https://www.instagram.com/cyrus_hair_beauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-center py-3 rounded-lg font-medium transition-all duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @cyrus_hair_beauty
                </span>
              </a>
            </div>

            {/* Gallery Card */}
            <div className="bg-[#0d1520] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold">Galerie</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Schau dir unsere neuesten Arbeiten und Styles in unserer Galerie an.
              </p>
              <Link
                href="/galerie"
                className="block w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-center py-3 rounded-lg font-medium transition-all duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Zur Galerie
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
