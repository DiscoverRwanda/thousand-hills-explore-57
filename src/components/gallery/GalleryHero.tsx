
import React from 'react';

export const GalleryHero: React.FC = () => {
  return (
    <div className="relative h-[50vh] min-h-[400px] bg-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1571934811356-5cc061b6821f)', 
          opacity: 0.6 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Rwanda Gallery</h1>
        <p className="text-lg md:text-xl text-white md:max-w-2xl">
          Explore the beauty of Rwanda through captivating images showcasing its wildlife, landscapes, culture, and urban scenes.
        </p>
      </div>
    </div>
  );
};
