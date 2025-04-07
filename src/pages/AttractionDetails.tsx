import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, ArrowLeft, Calendar, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailHero from '@/components/shared/DetailHero';
import ImageGallery from '@/components/shared/ImageGallery';
import ReviewSection from '@/components/shared/ReviewSection';
import MapLocation from '@/components/shared/MapLocation';

// Mock data for an attraction
const mockAttraction = {
  id: '1',
  title: 'Volcanoes National Park',
  description: `
    <p>Volcanoes National Park is a national park in northwestern Rwanda. It covers 160 sq km of rainforest and encompasses five of the eight volcanoes in the Virunga Mountains, namely Karisimbi, Bisoke, Muhabura, Gahinga and Sabyinyo.</p>
    <p>Volcanoes National Park is best known as a sanctuary for the region's rare mountain gorillas. Visitors trek up the volcano slopes to spend a predetermined time with a gorilla family. The park also hosts golden monkeys, spotted hyenas, buffaloes, elephants, black-fronted duikers, and bushbucks. There are also reported sightings of the forest elephants. There are 178 bird species recorded, with at least 13 species and 16 subspecies endemic to the Virunga area.</p>
    <p>The park was first gazetted in 1925, as a small area bounded by Karisimbi, Bisoke and Mikeno volcanoes, intended to protect the gorillas from poachers. It was the first National Park to be created in Africa. Subsequently, in 1929, the borders of the park were extended into Rwanda and the then Belgian Congo. During the Rwandan Civil War, the park suffered terribly. The park headquarters were attacked, and the tourism infrastructure destroyed. During this time, poaching depleted the park's wildlife populations. After the war, the park headquarters were rebuilt, and the park was reopened to tourists in 1999.</p>
  `,
  category: 'Natural Wonders',
  location: {
    name: 'Kinigi, Musanze District',
    address: 'Kinigi, Musanze District, Northern Province, Rwanda',
    coordinates: {
      latitude: -1.4833,
      longitude: 29.4833
    }
  },
  openingHours: {
    monFri: '8:00 AM - 6:00 PM',
    satSun: '9:00 AM - 5:00 PM'
  },
  bestTimeToVisit: 'June to September (Dry Season)',
  priceRange: {
    foreigners: '$1,500 for gorilla trekking permit',
    citizens: 'RWF 30,000 for park entry'
  },
  tips: [
    'Book your gorilla trekking permit well in advance (6+ months recommended)',
    'Wear sturdy hiking boots and long pants for trekking',
    'Bring a waterproof jacket even in dry season',
    'Hire a porter to help with your backpack and assist on steep sections',
    'Photography is allowed but without flash'
  ],
  mainImageUrl: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f',
  images: [
    { url: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f', alt: 'Mountain gorilla in Volcanoes National Park' },
    { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801', alt: 'Lush green landscapes in Volcanoes National Park' },
    { url: 'https://images.unsplash.com/photo-1568710865155-e116447df82f', alt: 'Hiking trail in Volcanoes National Park' },
    { url: 'https://images.unsplash.com/photo-1581126051773-9dab0a98c046', alt: 'View of volcanoes in Rwanda' },
    { url: 'https://images.unsplash.com/photo-1590072349685-c58d77c26ee4', alt: 'Gorilla mother and baby in natural habitat' },
    { url: 'https://images.unsplash.com/photo-1568710865155-e116447df82f', alt: 'Park rangers guiding tourists in Volcanoes National Park' }
  ],
  reviews: [
    {
      id: '1',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      rating: 5,
      comment: 'Gorilla trekking was the most incredible wildlife experience of my life. Worth every penny. Our guide was knowledgeable and we spent an amazing hour with a gorilla family.'
    },
    {
      id: '2',
      author: 'Michael Chen',
      date: 'February 28, 2024',
      rating: 4,
      comment: 'Beautiful park and amazing gorilla encounter. The trek was more strenuous than I expected, but our guide was patient and helpful. Bring good hiking boots!'
    },
    {
      id: '3',
      author: 'Emma Williams',
      date: 'January 10, 2024',
      rating: 5,
      comment: 'Absolutely breathtaking experience. We were fortunate to see a silverback gorilla up close. The park is well-maintained and staff are professional.'
    }
  ],
  relatedAttractions: [
    { id: '2', title: 'Akagera National Park', imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801' },
    { id: '3', title: 'Nyungwe Forest National Park', imageUrl: 'https://images.unsplash.com/photo-1620066786464-1e3122e9e6d9' },
    { id: '4', title: 'Lake Kivu', imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448936ea60a' }
  ]
};

const AttractionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the attraction data based on the ID
  // For now, we'll use our mock data
  const attraction = mockAttraction;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailHero 
        title={attraction.title}
        imageUrl={attraction.mainImageUrl}
        category={attraction.category}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
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
            
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-4">Visitor Tips</h2>
              <ul className="list-disc pl-5 space-y-2">
                {attraction.tips.map((tip, index) => (
                  <li key={index} className="text-gray-700">{tip}</li>
                ))}
              </ul>
            </div>
            
            <ReviewSection 
              reviews={attraction.reviews} 
              averageRating={4.7} 
              serviceId={attraction.id}
              serviceType="attraction"
            />
          </div>
          
          {/* Sidebar */}
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
        </div>
        
        {/* Related Attractions */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attraction.relatedAttractions.map((related) => (
              <Link to={`/attractions/${related.id}`} key={related.id} className="group">
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={related.imageUrl} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg group-hover:text-rwanda-green transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionDetails;
