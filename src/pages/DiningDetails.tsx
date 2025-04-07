
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ArrowLeft, Heart, Star, Utensils, Globe, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailHero from '@/components/shared/DetailHero';
import ImageGallery from '@/components/shared/ImageGallery';
import ReviewSection from '@/components/shared/ReviewSection';
import MapLocation from '@/components/shared/MapLocation';

// Mock data for a restaurant
const mockRestaurant = {
  id: '1',
  title: 'Fusion Restaurant Kigali',
  description: `
    <p>Fusion Restaurant Kigali is an upscale dining establishment that blends traditional Rwandan flavors with international culinary techniques. Set in a stunning location with panoramic views of Kigali city, this restaurant offers a sophisticated dining experience with an emphasis on locally-sourced ingredients.</p>
    <p>Our executive chef has created a menu that celebrates Rwanda's rich agricultural heritage while incorporating global influences. Signature dishes include slow-cooked goat with cassava dumplings, lake fish ceviche with passion fruit, and herb-crusted rack of lamb with sweet potato puree.</p>
    <p>The restaurant features an elegant interior with contemporary Rwandan artwork and a spacious outdoor terrace for al fresco dining. Our extensive wine list includes both international selections and emerging African vineyards. The bar offers creative cocktails inspired by local fruits and herbs.</p>
    <p>Whether you're celebrating a special occasion, hosting a business dinner, or simply enjoying a night out, Fusion Restaurant provides an unforgettable culinary journey through Rwanda's flavors in a refined atmosphere.</p>
  `,
  category: 'Fine Dining',
  type: 'Restaurant',
  cuisine: 'Rwandan Fusion',
  priceRange: '$$$',
  location: {
    name: 'Kigali Heights, Kigali',
    address: 'KG 7 Ave, Kigali Heights, Kigali, Rwanda',
    coordinates: {
      latitude: -1.9536,
      longitude: 30.0606
    }
  },
  contact: {
    phone: '+250 788 123 456',
    email: 'info@fusionkigali.com',
    website: 'www.fusionkigali.com'
  },
  hours: {
    monFri: '11:30 AM - 10:00 PM',
    satSun: '12:00 PM - 11:00 PM'
  },
  features: [
    'Outdoor Seating',
    'Vegetarian Options',
    'Private Dining',
    'Full Bar',
    'Wheelchair Accessible',
    'Free Wi-Fi',
    'Reservations Recommended'
  ],
  paymentOptions: [
    'Credit Cards',
    'Mobile Money',
    'Cash'
  ],
  popularDishes: [
    { name: 'Grilled Lake Kivu Fish', price: 'RWF 15,000' },
    { name: 'Kigali Spiced Lamb Rack', price: 'RWF 22,000' },
    { name: 'Vegetable Isombe with Plantains', price: 'RWF 12,000' },
    { name: 'Passion Fruit Panna Cotta', price: 'RWF 8,000' }
  ],
  mainImageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
  images: [
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', alt: 'Interior of Fusion Restaurant Kigali' },
    { url: 'https://images.unsplash.com/photo-1592861956120-e524fc739696', alt: 'Plated dish at Fusion Restaurant' },
    { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0', alt: 'Fine dining table setting' },
    { url: 'https://images.unsplash.com/photo-1515669097368-22e68427d265', alt: 'Bar area at Fusion Restaurant' },
    { url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c', alt: 'Chef preparing food in the kitchen' },
    { url: 'https://images.unsplash.com/photo-1502301103665-0b95cc738daf', alt: 'Outdoor dining terrace with city views' }
  ],
  reviews: [
    {
      id: '1',
      author: 'David Smith',
      date: 'April 2, 2024',
      rating: 5,
      comment: 'Exceptional dining experience with incredible views of Kigali. The fusion of Rwandan and international flavors was innovative and delicious. Service was impeccable.',
      avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: '2',
      author: 'Lisa Thompson',
      date: 'March 18, 2024',
      rating: 4,
      comment: 'Beautiful restaurant with excellent food. The Lake Kivu fish was particularly outstanding. Slightly expensive but worth it for a special occasion.',
      avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: '3',
      author: 'James Wilson',
      date: 'February 25, 2024',
      rating: 5,
      comment: 'One of the best dining experiences I\'ve had in Kigali. The atmosphere is refined yet comfortable, and the tasting menu was superb. Will definitely return.',
      avatarUrl: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ],
  relatedRestaurants: [
    { id: '2', title: 'Poivre Noir', category: 'French', imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c' },
    { id: '3', title: 'Sakae Sushi', category: 'Japanese', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c' },
    { id: '4', title: 'Kigali Café', category: 'Café & Bakery', imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0' }
  ]
};

const DiningDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the restaurant data based on the ID
  // For now, we'll use our mock data
  const restaurant = mockRestaurant;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const renderPriceRange = (range: string) => {
    const symbols = range.length;
    return (
      <div className="flex">
        {Array(symbols).fill(0).map((_, i) => (
          <span key={i} className="text-rwanda-green">$</span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <DetailHero 
        title={restaurant.title}
        imageUrl={restaurant.mainImageUrl}
        category={restaurant.category}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <Link to="/dining" className="inline-flex items-center text-rwanda-green hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dining
              </Link>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Utensils className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{restaurant.cuisine}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{restaurant.hours.monFri}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{restaurant.location.name}</span>
                </div>
              </div>
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: restaurant.description }} />
            </div>
            
            <ImageGallery images={restaurant.images} />
            
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-4">Popular Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {restaurant.popularDishes.map((dish, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                    <span className="font-medium">{dish.name}</span>
                    <span className="text-rwanda-green">{dish.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-4">Restaurant Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {restaurant.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-rwanda-green" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <ReviewSection reviews={restaurant.reviews} averageRating={4.7} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-lg">Restaurant Information</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Opening Hours</h4>
                  <p>Monday-Friday: {restaurant.hours.monFri}</p>
                  <p>Weekends: {restaurant.hours.satSun}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Price Range</h4>
                  <div className="flex items-center">
                    {renderPriceRange(restaurant.priceRange)}
                    <span className="ml-2 text-gray-600">Fine Dining</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Contact</h4>
                  <div className="flex items-center mt-1">
                    <Phone className="w-4 h-4 mr-2 text-rwanda-green" />
                    <span>{restaurant.contact.phone}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <Globe className="w-4 h-4 mr-2 text-rwanda-green" />
                    <a href={`https://${restaurant.contact.website}`} className="text-rwanda-green hover:underline">
                      {restaurant.contact.website}
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Payment Options</h4>
                  <div className="flex items-center flex-wrap gap-2 mt-1">
                    {restaurant.paymentOptions.map((option, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CreditCard className="w-3 h-3 mr-1 text-rwanda-green" />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                    Reserve a Table
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
              title={restaurant.title}
              address={restaurant.location.address}
              coordinates={restaurant.location.coordinates}
            />
          </div>
        </div>
        
        {/* Related Restaurants */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurant.relatedRestaurants.map((related) => (
              <Link to={`/dining/${related.id}`} key={related.id} className="group">
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={related.imageUrl} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-rwanda-green text-sm mb-1">{related.category}</div>
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

export default DiningDetails;
