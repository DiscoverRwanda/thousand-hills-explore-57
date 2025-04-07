
import React from 'react';

interface DetailHeroProps {
  title: string;
  imageUrl: string;
  category?: string;
  date?: string;
}

const DetailHero: React.FC<DetailHeroProps> = ({ title, imageUrl, category, date }) => {
  return (
    <div className="relative h-[60vh] max-h-[600px] min-h-[400px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10">
        {category && (
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-rwanda-green text-white rounded-full text-sm uppercase tracking-wide">
              {category}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>
        
        {date && (
          <div className="text-white text-lg">
            {date}
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailHero;
