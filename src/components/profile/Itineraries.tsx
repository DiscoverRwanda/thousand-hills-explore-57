
import React from 'react';
import { Clock, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Itinerary {
  id: string;
  title: string;
  dates: string;
  days: number;
  image: string;
  status: 'upcoming' | 'past' | 'draft';
  locations: string[];
}

interface ItinerariesProps {
  itineraries: Itinerary[];
}

const Itineraries: React.FC<ItinerariesProps> = ({ itineraries }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Your Rwanda Itineraries</h3>
        <Button variant="outline" asChild>
          <Link to="/plan/itinerary-builder" className="flex items-center gap-2">
            Create New Itinerary <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itineraries.map((itinerary) => (
          <Link 
            to={`/plan/itinerary/${itinerary.id}`} 
            key={itinerary.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={itinerary.image} 
                alt={itinerary.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className={`absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full ${
                itinerary.status === 'upcoming' ? 'bg-rwanda-green text-white' : 
                itinerary.status === 'past' ? 'bg-gray-600 text-white' : 
                'bg-yellow-500 text-white'
              }`}>
                {itinerary.status === 'upcoming' ? 'Upcoming' : 
                 itinerary.status === 'past' ? 'Past Trip' : 'Draft'}
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2 group-hover:text-rwanda-green transition-colors">
                {itinerary.title}
              </h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-rwanda-green" />
                  <span>{itinerary.dates}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-rwanda-green" />
                  <span>{itinerary.days} days</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-rwanda-green" />
                  <span>{itinerary.locations.join(', ')}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Itineraries;
