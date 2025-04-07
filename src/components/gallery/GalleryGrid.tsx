
import React from 'react';
import { galleryImages } from '@/pages/Gallery';

interface GalleryGridProps {
  images: typeof galleryImages;
  onImageClick: (image: typeof galleryImages[0]) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
          onClick={() => onImageClick(image)}
        >
          <div className="aspect-square overflow-hidden">
            <img 
              src={image.imageUrl} 
              alt={image.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="p-4 bg-white">
            <h3 className="font-bold text-lg text-gray-900">{image.title}</h3>
            <p className="text-rwanda-green text-sm mt-1">{image.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
