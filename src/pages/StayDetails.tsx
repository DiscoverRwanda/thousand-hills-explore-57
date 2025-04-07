
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, ArrowLeft, Heart, Star, Wifi, Coffee, Check, CreditCard, Globe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DetailHero from '@/components/shared/DetailHero';
import ImageGallery from '@/components/shared/ImageGallery';
import ReviewSection from '@/components/shared/ReviewSection';
import MapLocation from '@/components/shared/MapLocation';

// Mock data for a hotel
const mockHotel = {
  id: '1',
  title: 'Kigali Serena Hotel',
  description: `
    <p>Kigali Serena Hotel is a 5-star luxury hotel nestled in a lush garden setting in Rwanda's capital city. With its blend of pan-African and international architecture, art, and cuisine, this elegant hotel offers a sophisticated retreat in the heart of Kigali.</p>
    <p>The hotel features 148 beautifully appointed rooms and suites, each designed with contemporary African aesthetics and equipped with modern amenities. Guests can enjoy complimentary high-speed Wi-Fi, satellite TV, air conditioning, and 24-hour room service.</p>
    <p>The Milima Restaurant offers all-day dining with international and Rwandan cuisine, while the Sokoni Restaurant provides a more casual dining experience. The Kigali Serena's swimming pool is surrounded by tropical gardens, creating a tranquil oasis within the city. The Maisha Health Club includes a fully-equipped gym, spa treatments, and wellness facilities.</p>
    <p>Located just 10 kilometers from Kigali International Airport, the hotel offers easy access to key attractions including the Kigali Genocide Memorial, Kimironko Market, and the Presidential Palace Museum. The hotel's dedicated concierge can arrange city tours, gorilla trekking excursions, and other activities to enhance your stay in Rwanda.</p>
  `,
  category: 'Luxury Hotel',
  type: 'Hotel',
  stars: 5,
  priceRange: {
    standard: 'From $250 per night',
    deluxe: 'From $350 per night',
    suite: 'From $500 per night'
  },
  location: {
    name: 'Central Kigali',
    address: 'KN 3 Avenue, Kigali, Rwanda',
    coordinates: {
      latitude: -1.9536,
      longitude: 30.0606
    }
  },
  contact: {
    phone: '+250 788 184 500',
    email: 'reservations@serena.co.rw',
    website: 'www.serenahotels.com/kigali'
  },
  amenities: [
    'Free Wi-Fi',
    'Swimming Pool',
    'Spa & Wellness Center',
    'Fitness Center',
    'Multiple Restaurants',
    'Bar/Lounge',
    'Business Center',
    'Conference Facilities',
    'Airport Shuttle',
    'Concierge Services',
    '24-Hour Room Service',
    'Laundry Services',
    'Parking',
    'Air Conditioning'
  ],
  roomTypes: [
    {
      name: 'Standard Room',
      description: 'Elegant 30m² room with garden views, king or twin beds, and modern amenities',
      occupancy: '2 Adults',
      price: '$250',
      features: ['King or Twin Beds', 'Air Conditioning', 'Satellite TV', 'Mini Bar', 'En-suite Bathroom']
    },
    {
      name: 'Deluxe Room',
      description: 'Spacious 40m² room with premium furnishings and extended sitting area',
      occupancy: '2 Adults, 1 Child',
      price: '$350',
      features: ['King Bed', 'Lounge Area', 'Premium Bathroom', 'Enhanced Amenities', 'Work Desk']
    },
    {
      name: 'Executive Suite',
      description: 'Luxury 65m² suite with separate living room and executive privileges',
      occupancy: '2 Adults, 2 Children',
      price: '$500',
      features: ['Separate Living Room', 'King Bed', 'Luxury Bathroom', 'Club Lounge Access', 'Complimentary Minibar']
    }
  ],
  paymentOptions: [
    'Major Credit Cards',
    'Bank Transfer',
    'Mobile Money'
  ],
  checkInOut: {
    checkIn: '2:00 PM',
    checkOut: '12:00 PM'
  },
  policies: [
    'Pet friendly (additional charges apply)',
    'Non-smoking rooms available',
    'Extra bed available upon request',
    'Children under 6 stay free with parents'
  ],
  mainImageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  images: [
    { url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945', alt: 'Kigali Serena Hotel Exterior' },
    { url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461', alt: 'Luxury hotel suite' },
    { url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd', alt: 'Hotel swimming pool' },
    { url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7', alt: 'Hotel restaurant' },
    { url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a', alt: 'Hotel lobby' },
    { url: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c', alt: 'Spa treatment room' }
  ],
  reviews: [
    {
      id: '1',
      author: 'Richard Brown',
      date: 'March 28, 2024',
      rating: 5,
      comment: 'Exceptional service from the moment we arrived. The room was immaculate and the pool area is simply stunning. Staff were attentive without being intrusive. We particularly enjoyed the breakfast buffet with its variety of international and local dishes.',
      avatarUrl: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
      id: '2',
      author: 'Amanda Jones',
      date: 'February 15, 2024',
      rating: 4,
      comment: 'Beautiful property with lush gardens and excellent amenities. The room was spacious and well-appointed. Location is perfect for exploring Kigali. Only small issue was the slow service at the restaurant during dinner time.',
      avatarUrl: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
      id: '3',
      author: 'Thomas Lee',
      date: 'January 10, 2024',
      rating: 5,
      comment: 'One of the best hotels I\'ve stayed at in Africa. The staff went above and beyond to make our anniversary special. The executive suite was incredibly luxurious and the spa treatments were world-class. Will definitely return.',
      avatarUrl: 'https://randomuser.me/api/portraits/men/73.jpg'
    }
  ],
  relatedStays: [
    { id: '2', title: 'The Retreat by Heaven', category: 'Boutique Hotel', imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6' },
    { id: '3', title: 'Gorilla Mountain View Lodge', category: 'Eco Lodge', imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4' },
    { id: '4', title: 'Lake Kivu Serena Hotel', category: 'Lakeside Resort', imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4' }
  ]
};

const StayDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // In a real app, you would fetch the hotel data based on the ID
  // For now, we'll use our mock data
  const hotel = mockHotel;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const renderStarRating = (stars: number) => {
    return (
      <div className="flex">
        {Array(5).fill(0).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      <DetailHero 
        title={hotel.title}
        imageUrl={hotel.mainImageUrl}
        category={hotel.category}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <Link to="/stay" className="inline-flex items-center text-rwanda-green hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Places to Stay
              </Link>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  {renderStarRating(hotel.stars)}
                  <span className="ml-2 text-sm text-gray-600">{hotel.stars}-Star Hotel</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{hotel.location.name}</span>
                </div>
              </div>
              
              <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="rooms">Rooms</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: hotel.description }} />
                  <ImageGallery images={hotel.images} />
                  
                  <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Hotel Policies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 flex items-center">
                          <Calendar className="w-5 h-5 mr-2 text-rwanda-green" />
                          Check-in / Check-out
                        </h3>
                        <p>Check-in: {hotel.checkInOut.checkIn}</p>
                        <p>Check-out: {hotel.checkInOut.checkOut}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2 flex items-center">
                          <CreditCard className="w-5 h-5 mr-2 text-rwanda-green" />
                          Payment Options
                        </h3>
                        <ul className="list-disc pl-5">
                          {hotel.paymentOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">Other Policies</h3>
                      <ul className="space-y-2">
                        {hotel.policies.map((policy, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="w-4 h-4 mr-2 text-rwanda-green mt-1 flex-shrink-0" />
                            <span>{policy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="rooms">
                  <div className="space-y-6">
                    {hotel.roomTypes.map((room, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-6">
                          <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <h2 className="text-xl font-bold">{room.name}</h2>
                            <div className="text-rwanda-green font-bold mt-2 md:mt-0">{room.price} <span className="text-sm font-normal">per night</span></div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{room.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                              {room.occupancy}
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                            {room.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center">
                                <Check className="w-4 h-4 mr-2 text-rwanda-green" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Button className="w-full md:w-auto bg-rwanda-green hover:bg-rwanda-darkGreen">
                            Book This Room
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="amenities">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Hotel Amenities</h2>
                      <div className="grid grid-cols-1 gap-3">
                        {hotel.amenities.slice(0, Math.ceil(hotel.amenities.length / 2)).map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            {amenity.includes('Wi-Fi') ? (
                              <Wifi className="w-5 h-5 mr-3 text-rwanda-green" />
                            ) : amenity.includes('Coffee') || amenity.includes('Restaurant') ? (
                              <Coffee className="w-5 h-5 mr-3 text-rwanda-green" />
                            ) : (
                              <Check className="w-5 h-5 mr-3 text-rwanda-green" />
                            )}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-bold mb-4 md:opacity-0">.</h2>
                      <div className="grid grid-cols-1 gap-3">
                        {hotel.amenities.slice(Math.ceil(hotel.amenities.length / 2)).map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            {amenity.includes('Wi-Fi') ? (
                              <Wifi className="w-5 h-5 mr-3 text-rwanda-green" />
                            ) : amenity.includes('Coffee') || amenity.includes('Restaurant') ? (
                              <Coffee className="w-5 h-5 mr-3 text-rwanda-green" />
                            ) : (
                              <Check className="w-5 h-5 mr-3 text-rwanda-green" />
                            )}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {activeTab === 'overview' && (
              <ReviewSection 
                reviews={hotel.reviews} 
                averageRating={4.7} 
                serviceId={hotel.id}
                serviceType="accommodation"
              />
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-lg">Book Your Stay</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Rates</h4>
                  <p>Standard Room: {hotel.priceRange.standard}</p>
                  <p>Deluxe Room: {hotel.priceRange.deluxe}</p>
                  <p>Suite: {hotel.priceRange.suite}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Check-in / Check-out</h4>
                  <p>Check-in: {hotel.checkInOut.checkIn}</p>
                  <p>Check-out: {hotel.checkInOut.checkOut}</p>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                    Check Availability
                  </Button>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Heart className="mr-2 h-4 w-4" />
                    Save to Wishlist
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-lg">Contact Information</h3>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-rwanda-green" />
                  <span>{hotel.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-3 text-rwanda-green" />
                  <a href={`https://${hotel.contact.website}`} className="text-rwanda-green hover:underline">
                    {hotel.contact.website}
                  </a>
                </div>
              </div>
            </div>
            
            <MapLocation 
              title={hotel.title}
              address={hotel.location.address}
              coordinates={hotel.location.coordinates}
            />
          </div>
        </div>
        
        {/* Related Hotels */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Similar Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotel.relatedStays.map((related) => (
              <Link to={`/stay/${related.id}`} key={related.id} className="group">
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

export default StayDetails;
