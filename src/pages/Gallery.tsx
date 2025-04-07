
import React, { useState } from 'react';
import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { GalleryModal } from '@/components/gallery/GalleryModal';
import { GalleryFilter } from '@/components/gallery/GalleryFilter';

// Mock data for gallery images
export const galleryImages = [
  {
    id: '1',
    title: 'Mountain Gorillas',
    location: 'Volcanoes National Park',
    category: 'wildlife',
    description: 'A family of mountain gorillas in their natural habitat in Rwanda's Volcanoes National Park. Rwanda is one of only three countries where these endangered primates can be seen in the wild.',
    imageUrl: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f',
    photographer: 'Wildlife Explorer'
  },
  {
    id: '2',
    title: 'Kigali Cityscape',
    location: 'Kigali',
    category: 'urban',
    description: 'A panoramic view of Rwanda's capital city Kigali, known for its cleanliness, safety, and beautiful hillside setting.',
    imageUrl: 'https://images.unsplash.com/photo-1591037644354-faeb56de1b1d',
    photographer: 'Urban Photographer'
  },
  {
    id: '3',
    title: 'Traditional Dance Performance',
    location: 'Iby'Iwacu Cultural Village',
    category: 'culture',
    description: 'Intore dancers performing traditional Rwandan dance, showcasing the country's rich cultural heritage through music, dance, and colorful costumes.',
    imageUrl: 'https://images.unsplash.com/photo-1566149190185-1e5ecc66a184',
    photographer: 'Cultural Enthusiast'
  },
  {
    id: '4',
    title: 'Lake Kivu Sunset',
    location: 'Lake Kivu',
    category: 'landscape',
    description: 'A breathtaking sunset over Lake Kivu, one of Africa's Great Lakes that forms the border between Rwanda and the Democratic Republic of Congo.',
    imageUrl: 'https://images.unsplash.com/photo-1523805009345-7448936ea60a',
    photographer: 'Nature Lover'
  },
  {
    id: '5',
    title: 'Nyungwe Forest Canopy Walk',
    location: 'Nyungwe National Park',
    category: 'adventure',
    description: 'The famous canopy walkway suspended above Nyungwe Forest, offering visitors a unique perspective of one of Africa's oldest rainforests.',
    imageUrl: 'https://images.unsplash.com/photo-1620066786464-1e3122e9e6d9',
    photographer: 'Adventure Seeker'
  },
  {
    id: '6',
    title: 'Tea Plantations',
    location: 'Gisakura',
    category: 'landscape',
    description: 'Rwanda's verdant tea plantations are not only an important export crop but also create some of the country's most beautiful landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1589305241549-f8dc2f621d03',
    photographer: 'Landscape Artist'
  },
  {
    id: '7',
    title: 'Akagera Wildlife',
    location: 'Akagera National Park',
    category: 'wildlife',
    description: 'Elephants roaming freely in Akagera National Park, Rwanda's only savanna park and home to the Big Five.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    photographer: 'Safari Photographer'
  },
  {
    id: '8',
    title: 'Kigali Genocide Memorial',
    location: 'Kigali',
    category: 'history',
    description: 'A solemn place of remembrance that honors the victims of the 1994 genocide against the Tutsi. The memorial serves as an important educational center for visitors.',
    imageUrl: 'https://images.unsplash.com/photo-1580287917453-f10797794929',
    photographer: 'Historical Documentarian'
  },
  {
    id: '9',
    title: 'Local Market',
    location: 'Kimironko Market, Kigali',
    category: 'culture',
    description: 'Colorful displays of fresh produce, textiles, and crafts at a bustling local market in Rwanda, offering a glimpse into everyday life.',
    imageUrl: 'https://images.unsplash.com/photo-1615542162055-1d69617ef8e9',
    photographer: 'Street Photographer'
  }
];

// Categories for filtering
const categories = [
  { value: 'all', label: 'All Photos' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'landscape', label: 'Landscapes' },
  { value: 'culture', label: 'Culture' },
  { value: 'urban', label: 'Urban' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'history', label: 'History' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openImageModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <GalleryHero />
      
      <div className="container mx-auto px-4 py-12">
        <GalleryFilter 
          categories={categories} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <GalleryGrid 
          images={filteredImages} 
          onImageClick={openImageModal} 
        />
      </div>
      
      {selectedImage && (
        <GalleryModal 
          image={selectedImage} 
          onClose={closeImageModal} 
        />
      )}
    </div>
  );
};

export default Gallery;
