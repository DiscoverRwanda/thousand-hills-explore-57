
import React from 'react';
import { X, MapPin, User } from 'lucide-react';
import { galleryImages } from '@/pages/Gallery';

interface GalleryModalProps {
  image: typeof galleryImages[0];
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-2/3 h-[300px] md:h-auto">
          <img 
            src={image.imageUrl} 
            alt={image.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="md:w-1/3 p-6 flex flex-col">
          <button 
            className="absolute top-4 right-4 bg-white rounded-full p-1 text-gray-700 hover:text-gray-900"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900">{image.title}</h2>
          
          <div className="flex items-center text-rwanda-green mt-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{image.location}</span>
          </div>
          
          {image.photographer && (
            <div className="flex items-center text-gray-600 mt-1 text-sm">
              <User className="w-3 h-3 mr-1" />
              <span>Photo by {image.photographer}</span>
            </div>
          )}
          
          <div className="mt-4 text-gray-700 flex-grow overflow-y-auto">
            <p>{image.description}</p>
          </div>
          
          <div className="mt-4">
            <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm">
              #{image.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
