
import React from 'react';
import { MapPin } from 'lucide-react';

interface MapLocationProps {
  title: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  className?: string;
}

const MapLocation: React.FC<MapLocationProps> = ({ title, address, coordinates, className }) => {
  // In a real app, you would use a proper maps integration like Google Maps or Mapbox
  // For now, we'll show a placeholder with the location details
  
  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="font-bold text-lg">Location</h3>
      </div>
      
      <div className="aspect-video bg-gray-200 flex items-center justify-center">
        <div className="text-center px-4">
          <MapPin className="mx-auto h-10 w-10 text-rwanda-green mb-2" />
          <p className="font-medium">Map integration would go here</p>
          <p className="text-sm text-gray-500">Coordinates: {coordinates.latitude}, {coordinates.longitude}</p>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-700">{address}</p>
      </div>
    </div>
  );
};

export default MapLocation;
