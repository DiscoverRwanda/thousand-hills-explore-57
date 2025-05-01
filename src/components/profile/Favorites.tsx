
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';

interface Favorite {
  id: string;
  title: string;
  type: 'attraction' | 'restaurant' | 'hotel' | 'event';
  imageUrl: string;
  location: string;
  description: string;
  link: string;
}

interface FavoritesProps {
  favorites: Favorite[];
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filteredFavorites = activeTab === 'all' 
    ? favorites 
    : favorites.filter(fav => fav.type === activeTab);

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'attraction': return 'Attraction';
      case 'restaurant': return 'Dining';
      case 'hotel': return 'Accommodation';
      case 'event': return 'Event';
      default: return type;
    }
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Saved Favorites</h3>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="attraction">Attractions</TabsTrigger>
          <TabsTrigger value="restaurant">Restaurants</TabsTrigger>
          <TabsTrigger value="hotel">Hotels</TabsTrigger>
          <TabsTrigger value="event">Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFavorites.map((favorite) => (
              <div key={favorite.id} className="bg-white rounded-lg shadow-md overflow-hidden group relative">
                <Link to={favorite.link}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={favorite.imageUrl} 
                      alt={favorite.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-white rounded-full p-1.5">
                      <Heart className="h-5 w-5 text-rwanda-green fill-rwanda-green" />
                    </div>
                    <div className="absolute top-3 left-3 bg-gray-900/70 text-white text-xs px-2 py-1 rounded">
                      {getTypeLabel(favorite.type)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-rwanda-green transition-colors">
                      {favorite.title}
                    </h4>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1 text-rwanda-green" />
                      <span>{favorite.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{favorite.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Favorites;
