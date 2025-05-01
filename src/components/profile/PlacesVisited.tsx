
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Star } from 'lucide-react';

interface Place {
  id: string;
  name: string;
  region: string;
  category: 'park' | 'city' | 'landmark' | 'lake';
  imageUrl: string;
  visitDate: string;
  rating: number;
  notes: string;
}

interface PlacesVisitedProps {
  places: Place[];
}

const PlacesVisited: React.FC<PlacesVisitedProps> = ({ places }) => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredPlaces = filter === 'all' 
    ? places 
    : places.filter(place => place.category === filter);
    
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'park': return 'National Park';
      case 'city': return 'City/Town';
      case 'landmark': return 'Landmark';
      case 'lake': return 'Lake';
      default: return category;
    }
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Places You've Visited</h3>
      
      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Places</TabsTrigger>
          <TabsTrigger value="park">Parks</TabsTrigger>
          <TabsTrigger value="city">Cities</TabsTrigger>
          <TabsTrigger value="landmark">Landmarks</TabsTrigger>
          <TabsTrigger value="lake">Lakes</TabsTrigger>
        </TabsList>
        
        <TabsContent value={filter} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPlaces.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={place.imageUrl} 
                    alt={place.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 md:w-2/3">
                  <div className="mb-1">
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {getCategoryLabel(place.category)}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg mb-1">{place.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{place.region}</p>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < place.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">Your rating</span>
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-xs text-gray-500">Visited on:</span>
                    <span className="text-sm ml-1">{place.visitDate}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm line-clamp-2">{place.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlacesVisited;
