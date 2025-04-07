
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MapLocation from '@/components/shared/MapLocation';

interface AttractionSidebarProps {
  attraction: any; // Using any temporarily, should be properly typed in a real app
}

const AttractionSidebar: React.FC<AttractionSidebarProps> = ({ attraction }) => {
  return (
    <div className="lg:w-1/3 space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 bg-gray-50 border-b border-gray-200">
          <h3 className="font-bold text-lg">Visit Information</h3>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Opening Hours</h4>
            <p>Monday-Friday: {attraction.openingHours.monFri}</p>
            <p>Weekends: {attraction.openingHours.satSun}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700">Admission</h4>
            <p>International Visitors: {attraction.priceRange.foreigners}</p>
            <p>Rwandan Citizens: {attraction.priceRange.citizens}</p>
          </div>
          <div className="pt-2">
            <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
              Book Experience
            </Button>
          </div>
          <div className="pt-2">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Heart className="mr-2 h-4 w-4" />
              Add to Favorites
            </Button>
          </div>
        </div>
      </div>
      
      <MapLocation 
        title={attraction.title}
        address={attraction.location.address}
        coordinates={attraction.location.coordinates}
      />
    </div>
  );
};

export default AttractionSidebar;
