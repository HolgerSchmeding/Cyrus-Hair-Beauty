/**
 * Galerie-Generator Script
 * 
 * Dieses Script liest alle Bilder aus den Kategorie-Ordnern
 * und generiert den Code für die Galerie-Seite.
 * 
 * Verwendung:
 * 1. Lege Bilder in die Ordner:
 *    - public/galerie/haarschnitte/
 *    - public/galerie/bartpflege/
 *    - public/galerie/styling/
 * 
 * 2. Führe das Script aus:
 *    node scripts/generate-gallery.js
 * 
 * 3. Kopiere den generierten Code in src/app/galerie/page.tsx
 */

const fs = require('fs');
const path = require('path');

const galerieDir = path.join(__dirname, '..', 'public', 'galerie');
const categories = ['haarschnitte', 'bartpflege', 'styling'];
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

function generateGalleryCode() {
  const images = [];
  let idCounter = 1;

  for (const category of categories) {
    const categoryPath = path.join(galerieDir, category);
    
    if (!fs.existsSync(categoryPath)) {
      console.log(`⚠️  Ordner nicht gefunden: ${categoryPath}`);
      continue;
    }

    const files = fs.readdirSync(categoryPath);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      if (imageExtensions.includes(ext)) {
        const altText = path.basename(file, ext)
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase());
        
        images.push({
          id: String(idCounter++),
          src: `/galerie/${category}/${file}`,
          category: category,
          alt: altText
        });
      }
    }
  }

  // Generiere den Code
  console.log('\n' + '='.repeat(60));
  console.log('GENERIERTER CODE - Kopiere dies in src/app/galerie/page.tsx');
  console.log('='.repeat(60) + '\n');

  console.log('const galleryImages: GalleryImage[] = [');
  
  for (const img of images) {
    console.log(`  { id: '${img.id}', src: '${img.src}', category: '${img.category}', alt: '${img.alt}' },`);
  }
  
  console.log('];');

  console.log('\n' + '='.repeat(60));
  console.log(`✅ ${images.length} Bilder gefunden:`);
  
  for (const category of categories) {
    const count = images.filter(img => img.category === category).length;
    console.log(`   - ${category}: ${count} Bilder`);
  }
  
  console.log('='.repeat(60) + '\n');

  return images;
}

generateGalleryCode();
