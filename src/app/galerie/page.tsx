'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  category: 'haarschnitte' | 'bartpflege' | 'styling';
  alt: string;
}

// Galerie-Bilder
const galleryImages: GalleryImage[] = [
  { id: '1', src: '/galerie/haarschnitte/1764943561174-9j1la.jpeg', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '2', src: '/galerie/haarschnitte/1764943668593-0238i.jpeg', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '3', src: '/galerie/haarschnitte/1764944001217-8vr7gb (1).png', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '4', src: '/galerie/haarschnitte/Gemini_Generated_Image_q8zxctq8zxctq8zx (2).png', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '5', src: '/galerie/haarschnitte/Gemini_Generated_Image_q8zxctq8zxctq8zx (3).png', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '6', src: '/galerie/haarschnitte/Gemini_Generated_Image_q8zxctq8zxctq8zx (5).png', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '7', src: '/galerie/haarschnitte/Gemini_Generated_Image_q8zxctq8zxctq8zx (6).png', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '8', src: '/galerie/haarschnitte/IMG_2635.jpeg', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '9', src: '/galerie/haarschnitte/IMG_2636.jpeg', category: 'haarschnitte', alt: 'Haarschnitt' },
  { id: '10', src: '/galerie/bartpflege/118-DSCF2336.jpg', category: 'bartpflege', alt: 'Bartpflege' },
  { id: '11', src: '/galerie/bartpflege/1764944513535-syll44.png', category: 'bartpflege', alt: 'Bartpflege' },
  { id: '12', src: '/galerie/bartpflege/Gemini_Generated_Image_q8zxctq8zxctq8zx (4).png', category: 'bartpflege', alt: 'Bartpflege' },
  { id: '13', src: '/galerie/styling/1764943493349-fed8ti.png', category: 'styling', alt: 'Styling' },
  { id: '14', src: '/galerie/styling/1764943614421-kwx2xd (1).jpeg', category: 'styling', alt: 'Styling' },
  { id: '15', src: '/galerie/styling/1764943614421-kwx2xd.jpeg', category: 'styling', alt: 'Styling' },
  { id: '16', src: '/galerie/styling/1764944001217-8vr7gb.png', category: 'styling', alt: 'Styling' },
  { id: '17', src: '/galerie/styling/IMG_2743.jpeg', category: 'styling', alt: 'Flechtfrisur' },
];

type Category = 'alle' | 'haarschnitte' | 'bartpflege' | 'styling';

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState<Category>('alle');

  const categories: { key: Category; label: string }[] = [
    { key: 'alle', label: 'Alle' },
    { key: 'haarschnitte', label: 'Haarschnitte' },
    { key: 'bartpflege', label: 'Bartpflege' },
    { key: 'styling', label: 'Styling' },
  ];

  const filteredImages = activeCategory === 'alle' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const getCategoryCount = (category: Category) => {
    if (category === 'alle') return galleryImages.length;
    return galleryImages.filter(img => img.category === category).length;
  };

  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-[family-name:var(--font-playfair)]">
              Unsere Arbeiten
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Entdecke unsere neuesten Haarschnitte und Styles
            </p>
          </div>

          {/* Kategorien Filter */}
          <div className="mb-6 sm:mb-10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-gray-300 font-medium text-sm sm:text-base">Kategorien</span>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.key
                      ? 'bg-amber-600 text-white'
                      : 'bg-[#0d1520] text-gray-300 hover:bg-[#1a2535] border border-gray-700'
                  }`}
                >
                  {cat.label} ({getCategoryCount(cat.key)})
                </button>
              ))}
            </div>
          </div>

          {/* Galerie Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <svg className="w-12 sm:w-16 h-12 sm:h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-400 text-base sm:text-lg">Noch keine Bilder in dieser Kategorie</p>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Lade neue Bilder hoch, um die Galerie zu füllen</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
