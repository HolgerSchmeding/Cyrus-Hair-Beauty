'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Service {
  name: string;
  description: string;
  image: string;
}

interface ServiceList {
  category: string;
  services: string[];
  description?: string;
}

const herrenServices: Service[] = [
  {
    name: 'Trend Haircut',
    description: 'Schnitt, Föhnen, Styling',
    image: '/Trend%20Haircut.png',
  },
  {
    name: 'Kids Haircut',
    description: 'Kompletter Haarschnitt für Kinder bis 10 Jahre',
    image: '/Kids%20Cut.png',
  },
  {
    name: 'Beard Trim & Style',
    description: 'Bartpflege mit Messer und Pflegeprodukten',
    image: '/Beard%20Trim%20%26%20Style.png',
  },
];

const damenServices: Service[] = [
  {
    name: 'Wellness für die Haare',
    description: 'Waschen, Föhnen/Legen',
    image: '/beispiel_wellness_fur_die_haaren_damen.png',
  },
  {
    name: 'Signature Cut & Style',
    description: 'Schnitt, Waschen, Föhnen, Styling',
    image: '/beispiel_haircut_damen.png',
  },
  {
    name: 'Color & Gloss',
    description: 'Veredelung, Glanz & kreative Farbe',
    image: '/beispiel_gloss_und_farben.png',
  },
];

const herrenFullList: ServiceList[] = [
  {
    category: 'Haarschnitte',
    services: [
      'Classic Haircut - Traditioneller Trockenhaarschnitt',
      'Trend Haircut - Schnitt, Föhnen, Styling',
      'Schüler Trend Haircut - Haarschnitt für Schüler unter 18 Jahre',
      'Kids Haircut - Kompletter Haarschnitt für Kinder bis 10 Jahre',
      'Maschinencut - Kurzer Schnitt mit der Maschine',
    ],
  },
  {
    category: 'Bartpflege',
    services: [
      'Beard Trim & Style - Bartpflege mit Messer und Pflegeprodukten',
      'Beard Contouring - Konturen nachziehen',
      'Full Beard Service - Waschen, Trimmen, Styling',
    ],
  },
  {
    category: 'Treatments',
    services: [
      'Augenbrauen zupfen - Fadentechnik',
      'Haare waschen',
      'Nasen- & Ohrenhaare waxen',
    ],
  },
];

const damenFullList: ServiceList[] = [
  {
    category: 'Look & Feel',
    services: [
      'Wellness für die Haare - Waschen, Föhnen/Legen',
      'Express Blow-Dry - Schnelles Styling',
      'Special Styling - Aufwendiges Styling für Events',
      'Hochsteckfrisuren',
      'Hair Extension',
      'Dauerwelle',
      'Make-up',
    ],
  },
  {
    category: 'Haarschnitte',
    services: [
      'Signature Cut & Style - Schnitt, Waschen, Föhnen, Styling',
    ],
  },
  {
    category: 'Farbe & Tönung',
    services: [
      'Color & Gloss - Brillante Farbveredelung',
      'Balayage / Ombré - Moderne Färbetechniken',
      'Strähnen - Highlights & Lowlights',
    ],
  },
  {
    category: 'Treatments',
    services: [
      'Augenbrauen zupfen - Fadentechnik',
      'Augenbrauen färben',
      'Wimpern färben',
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="flex items-center gap-4 bg-[#1a2332] rounded-lg overflow-hidden group hover:bg-[#243044] transition-colors">
      <div className="relative w-24 h-24 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a2332] z-10" />
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="py-3 pr-4">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
          </svg>
          <h4 className="font-semibold text-amber-500">{service.name}</h4>
        </div>
        <p className="text-sm text-gray-400">{service.description}</p>
      </div>
    </div>
  );
}

function ServicesList({ lists, title }: { lists: ServiceList[]; title: string }) {
  return (
    <div className="bg-[#0d1520] border border-[#1a2535] rounded-lg p-6 mt-4">
      <h3 className="text-xl font-semibold text-amber-500 mb-6">{title}</h3>
      {lists.map((list, index) => (
        <div key={list.category} className={index > 0 ? 'mt-6' : ''}>
          <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            {list.category}
          </h4>
          <ul className="space-y-2 pl-4">
            {list.services.map((service) => {
              const [name, desc] = service.split(' - ');
              return (
                <li key={service} className="text-sm">
                  <span className="font-medium text-white">{name}</span>
                  {desc && <p className="text-gray-500">{desc}</p>}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500">
          <span className="text-amber-500 font-medium">Wichtiger Hinweis:</span> Bei Absage von vereinbarten Terminen weniger als 24 Stunden vor dem Termin entstehen 50% der Dienstleistungskosten.
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  const [showHerrenFull, setShowHerrenFull] = useState(false);
  const [showDamenFull, setShowDamenFull] = useState(false);

  return (
    <section id="leistungen" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Unsere Leistungen
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Herren */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Herren</h3>
              <div className="w-full h-0.5 bg-amber-500" />
            </div>
            <div className="space-y-4">
              {herrenServices.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </div>
            <button
              onClick={() => setShowHerrenFull(!showHerrenFull)}
              className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showHerrenFull ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {showHerrenFull ? 'Leistungen schließen' : 'Alle Leistungen anzeigen'}
            </button>
            {showHerrenFull && <ServicesList lists={herrenFullList} title="Leistungen Herren" />}
          </div>

          {/* Damen */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Damen</h3>
              <div className="w-full h-0.5 bg-amber-500" />
            </div>
            <div className="space-y-4">
              {damenServices.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </div>
            <button
              onClick={() => setShowDamenFull(!showDamenFull)}
              className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showDamenFull ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {showDamenFull ? 'Leistungen schließen' : 'Alle Leistungen anzeigen'}
            </button>
            {showDamenFull && <ServicesList lists={damenFullList} title="Leistungen Damen" />}
          </div>
        </div>
      </div>
    </section>
  );
}
