'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  service: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: 'Zufälligerweise bin ich auf diesen Laden gestoßen und bin äußerst positiv überrascht worden. Sauberkeit und Hygiene werden hier groß geschrieben. Der Haarschnitt und die Rasur waren sehr gründlich.',
    author: 'Lars Trepel',
    service: 'The Full CYRUS',
    date: 'Oktober 2025',
    rating: 5,
  },
  {
    id: 2,
    text: 'Ich bin super zufrieden mit meinem Besuch! Der Haarschnitt ist genau so geworden, wie ich ihn mir vorgestellt habe – sauber, präzise und typgerecht. Die Atmosphäre im Salon war angenehm, das Team freundlich und professionell. Es wurde auf meine Wünsche eingegangen und ich habe mich gut beraten gefühlt. Ich komme gerne wieder und kann den Friseur wirklich weiterempfehlen.',
    author: 'Luan Rrahmani',
    service: 'Trend Haircut',
    date: 'April 2025',
    rating: 5,
  },
  {
    id: 3,
    text: 'Endlich mal einen Friseur gefunden, der weiß was er tut! War schon bei etlichen Läden und bin nie wirklich zufrieden rausgegangen. Hier passt einfach alles, von der Beratung bis zum Endergebnis. Preis ist auch völlig fair für die Qualität. Hab endlich meinen Stammfriseur gefunden und kann nur jeden weiterempfehlen hier mal vorbeizuschauen!',
    author: 'Justin Ensici',
    service: 'Trend Haircut',
    date: 'August 2025',
    rating: 5,
  },
  {
    id: 4,
    text: 'Das Team ist freundlich, kompetent und nimmt sich Zeit für eine gute Beratung. Ich bin mit dem Ergebnis (Haare und Bart) super zufrieden! Ich komme auf jeden Fall wieder!',
    author: 'Peter',
    service: 'Beard Trim & Style',
    date: 'Oktober 2025',
    rating: 5,
  },
  {
    id: 5,
    text: 'Super freundlicher Haarkünstler! Haare und Bart super geschnitten! Und dazu gab es noch kostenlos ein Getränk! Super, sehr zu empfehlen!!! Wenn ich wieder nach Baden-Baden komme dann sehen wir uns sicher wieder. Danke!',
    author: 'Wolfgang Drechsel',
    service: 'The Full CYRUS',
    date: 'September 2025',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-amber-500' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#0d1520]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
            Was unsere Kunden sagen
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto" />
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#0a0a0a] border border-[#1a2535] rounded-2xl p-8 md:p-12">
          {/* Quote Icon */}
          <div className="text-amber-500 mb-6">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Rating */}
          <div className="flex justify-center mb-6">
            <StarRating rating={currentTestimonial.rating} />
          </div>

          {/* Quote Text */}
          <blockquote className="text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
            &quot;{currentTestimonial.text}&quot;
          </blockquote>

          {/* Author Info */}
          <div className="text-center">
            <p className="font-semibold text-white text-lg">{currentTestimonial.author}</p>
            <p className="text-amber-500">{currentTestimonial.service}</p>
            {currentTestimonial.date && <p className="text-gray-500 text-sm">{currentTestimonial.date}</p>}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
            aria-label="Vorherige Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-200 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-amber-500 rounded-full'
                    : 'w-2 h-2 bg-gray-600 rounded-full hover:bg-gray-500'
                }`}
                aria-label={`Bewertung ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full border border-gray-600 hover:border-gray-400 transition-colors"
            aria-label="Nächste Bewertung"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Link to all reviews */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Sophienstrasse+13,+76530+Baden-Baden"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            Alle Bewertungen ansehen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
