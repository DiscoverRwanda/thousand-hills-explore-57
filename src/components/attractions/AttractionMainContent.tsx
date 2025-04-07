
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ArrowLeft } from 'lucide-react';
import ImageGallery from '@/components/shared/ImageGallery';
import ReviewSection from '@/components/shared/ReviewSection';

interface AttractionMainContentProps {
  attraction: any; // Using any temporarily, should be properly typed in a real app
}

const AttractionMainContent: React.FC<AttractionMainContentProps> = ({ attraction }) => {
  return (
    <div className="lg:w-2/3">
      <div className="mb-6">
        <Link to="/attractions" className="inline-flex items-center text-rwanda-green hover:underline mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Attractions
        </Link>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-rwanda-green" />
            <span>{attraction.location.name}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 text-rwanda-green" />
            <span>{attraction.openingHours.monFri}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-rwanda-green" />
            <span>Best time: {attraction.bestTimeToVisit}</span>
          </div>
        </div>
        
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: attraction.description }} />
      </div>
      
      <ImageGallery images={attraction.images} />
      
      <AttractionTips tips={attraction.tips} />
      
      <ReviewSection 
        reviews={attraction.reviews} 
        averageRating={4.7} 
        serviceId={attraction.id}
        serviceType="attraction"
      />
    </div>
  );
};

interface AttractionTipsProps {
  tips: string[];
}

const AttractionTips: React.FC<AttractionTipsProps> = ({ tips }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Visitor Tips</h2>
      <ul className="list-disc pl-5 space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="text-gray-700">{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionMainContent;
