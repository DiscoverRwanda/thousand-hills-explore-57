
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: { url: string; alt: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white z-10 p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 text-white z-10 p-2"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute right-4 text-white z-10 p-2"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-h-[90vh] max-w-[90vw]">
            <img 
              src={images[currentImageIndex].url} 
              alt={images[currentImageIndex].alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
