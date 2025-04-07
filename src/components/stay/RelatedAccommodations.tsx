
import React from 'react';
import { Link } from 'react-router-dom';

interface RelatedAccommodation {
  id: string;
  title: string;
  type: string;
  imageUrl: string;
}

interface RelatedAccommodationsProps {
  accommodations: RelatedAccommodation[];
}

const RelatedAccommodations: React.FC<RelatedAccommodationsProps> = ({ accommodations }) => {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Similar Places to Stay</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {accommodations.map((related) => (
          <Link to={`/stay/${related.id}`} key={related.id} className="group">
            <div className="rounded-lg overflow-hidden shadow-md h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={related.imageUrl} 
                  alt={related.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="text-rwanda-green text-sm mb-1">{related.type}</div>
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

export default RelatedAccommodations;
