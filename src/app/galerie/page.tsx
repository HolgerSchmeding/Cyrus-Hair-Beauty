'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface GalleryImage {
  id: string;
  src: string;
  category: 'haarschnitte' | 'bartpflege' | 'styling';
  alt: string;
}

// Galerie-Bilder - hier die Bilder aus dem public/galerie Ordner eintragen
const galleryImages: GalleryImage[] = [
  // Beispiel-Einträge - diese werden mit echten Bildern ersetzt
  // { id: '1', src: '/galerie/bild1.jpg', category: 'haarschnitte', alt: 'Haarschnitt 1' },
];

type Category = 'alle' | 'haarschnitte' | 'bartpflege' | 'styling';

export default function Galerie() {
  const [activeCategory, setActiveCategory] = useState<Category>('alle');
  const [images, setImages] = useState<GalleryImage[]>(galleryImages);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories: { key: Category; label: string }[] = [
    { key: 'alle', label: 'Alle' },
    { key: 'haarschnitte', label: 'Haarschnitte' },
    { key: 'bartpflege', label: 'Bartpflege' },
    { key: 'styling', label: 'Styling' },
  ];

  const filteredImages = activeCategory === 'alle' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const getCategoryCount = (category: Category) => {
    if (category === 'alle') return images.length;
    return images.filter(img => img.category === category).length;
  };

  // ============================================
  // UPLOAD FUNKTION - Kann später entfernt werden
  // ============================================
  const [uploadCategory, setUploadCategory] = useState<'haarschnitte' | 'bartpflege' | 'styling'>('haarschnitte');

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    for (const file of Array.from(files)) {
      // Erstelle eine temporäre URL für die Vorschau
      const objectUrl = URL.createObjectURL(file);
      
      const newImage: GalleryImage = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        src: objectUrl,
        category: uploadCategory,
        alt: file.name.replace(/\.[^/.]+$/, ''),
      };

      setImages(prev => [...prev, newImage]);

      // Log für manuelles Kopieren
      console.log(`Bild hochgeladen: ${file.name}`);
      console.log(`Kategorie: ${uploadCategory}`);
      console.log(`Bitte kopiere das Bild in: public/galerie/${file.name}`);
      console.log(`Dann füge folgenden Eintrag zu galleryImages hinzu:`);
      console.log(`{ id: '${newImage.id}', src: '/galerie/${file.name}', category: '${uploadCategory}', alt: '${newImage.alt}' },`);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  // ============================================
  // ENDE UPLOAD FUNKTION
  // ============================================

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-[#0a0a0a] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Unsere Arbeiten
            </h1>
            <p className="text-gray-400">
              Entdecke unsere neuesten Haarschnitte und Styles
            </p>
          </div>

          {/* ============================================ */}
          {/* UPLOAD BEREICH - Kann später entfernt werden */}
          {/* ============================================ */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleUploadClick}
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Neues Bild hochladen
              </button>
              
              <select
                value={uploadCategory}
                onChange={(e) => setUploadCategory(e.target.value as 'haarschnitte' | 'bartpflege' | 'styling')}
                className="bg-[#0d1520] border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-amber-500"
              >
                <option value="haarschnitte">Haarschnitte</option>
                <option value="bartpflege">Bartpflege</option>
                <option value="styling">Styling</option>
              </select>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {/* ============================================ */}
          {/* ENDE UPLOAD BEREICH */}
          {/* ============================================ */}

          {/* Kategorien Filter */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="text-gray-300 font-medium">Kategorien</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-400 text-lg">Noch keine Bilder in dieser Kategorie</p>
              <p className="text-gray-500 mt-2">Lade neue Bilder hoch, um die Galerie zu füllen</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
