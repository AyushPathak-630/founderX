import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/mockData';
import { GalleryImage } from '../types';
import { Maximize2, X, Camera } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 bg-slate-50 text-[#0F172A] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-semibold text-[#F97316] mb-2">
            <Camera className="h-3.5 w-3.5" />
            <span>MEMORIES & HIGHLIGHTS</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-[#0F172A]">
            FounderX Gallery
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Glimpses from keynotes, pitch arena finals, and networking mixers.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="relative h-64 rounded overflow-hidden group cursor-pointer border border-slate-200 bg-white shadow-xs"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F97316] text-white px-2 py-0.5 rounded">
                    {img.category}
                  </span>
                  <h3 className="font-bold text-sm text-white mt-1 leading-snug">
                    {img.title}
                  </h3>
                </div>

                <div className="p-2 bg-white/90 rounded text-[#0F172A] opacity-0 group-hover:opacity-100 transition-opacity border border-slate-200">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-[#0F172A]/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white border border-slate-200 rounded p-4 overflow-hidden shadow-xl">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 p-2.5 bg-slate-100 hover:bg-[#F97316] hover:text-white text-[#0F172A] rounded transition-colors border border-slate-200 cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="h-5 w-5" />
              </button>

              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded"
              />

              <div className="mt-4 p-2 text-center">
                <span className="text-xs font-bold uppercase text-[#F97316] bg-orange-50 px-3 py-1 rounded border border-orange-200">
                  {selectedImage.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-[#0F172A] mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
