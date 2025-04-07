import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailHero from '@/components/shared/DetailHero';
import AttractionMainContent from '@/components/attractions/AttractionMainContent';
import AttractionSidebar from '@/components/attractions/AttractionSidebar';
import RelatedAttractions from '@/components/attractions/RelatedAttractions';

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
          <AttractionMainContent attraction={attraction} />
          
          {/* Sidebar */}
          <AttractionSidebar attraction={attraction} />
        </div>
        
        {/* Related Attractions */}
        <RelatedAttractions attractions={attraction.relatedAttractions} />
      </div>
    </div>
  );
};

export default AttractionDetails;
