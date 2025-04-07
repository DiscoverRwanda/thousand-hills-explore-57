
import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedRestaurant {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface RelatedRestaurantsProps {
  restaurants: RelatedRestaurant[];
}

const RelatedRestaurants: React.FC<RelatedRestaurantsProps> = ({ restaurants }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restaurants.map((related) => (
          <Link to={`/dining/${related.id}`} key={related.id} className="group">
            <div className="rounded-lg overflow-hidden shadow-md h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={related.imageUrl} 
                  alt={related.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="text-rwanda-green text-sm mb-1">{related.category}</div>
                <h3 className="font-bold text-lg group-hover:text-rwanda-green transition-colors">
                  {related.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedRestaurants;
