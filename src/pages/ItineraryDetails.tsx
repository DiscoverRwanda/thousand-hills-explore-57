
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Download, Share2, ArrowLeft, Edit, Printer, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format, addDays } from 'date-fns';

// Mock data for a pre-planned itinerary
const mockItinerary = {
  id: 'custom-1',
  title: 'Rwanda Highlights: 7-Day Adventure',
  description: 'Experience the best of Rwanda with this carefully crafted 7-day itinerary. From mountain gorillas to cultural experiences, this journey showcases the natural beauty and rich heritage of the Land of a Thousand Hills.',
  duration: '7 days, 6 nights',
  idealFor: ['Nature lovers', 'Wildlife enthusiasts', 'Adventure seekers'],
  coverImage: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc',
  days: [
    {
      day: 1,
      date: new Date(2024, 8, 1), // September 1, 2024
      title: 'Arrival in Kigali',
      description: 'Welcome to Rwanda! Upon arrival at Kigali International Airport, you\'ll be met by your guide and transferred to your hotel. Depending on your arrival time, you may have the opportunity to explore Rwanda\'s clean and vibrant capital city.',
      activities: [
        {
          time: '10:00 AM - 12:00 PM',
          title: 'Airport Pickup',
          location: 'Kigali International Airport',
          type: 'transportation',
          description: 'Meet and greet with your guide at the arrivals area.'
        },
        {
          time: '1:00 PM - 3:00 PM',
          title: 'Kigali City Tour',
          location: 'Kigali',
          type: 'attraction',
          description: 'Visit key sites including the Genocide Memorial, Presidential Palace Museum, and local markets.'
        },
        {
          time: '6:00 PM - 8:00 PM',
          title: 'Welcome Dinner',
          location: 'Fusion Restaurant Kigali',
          type: 'dining',
          description: 'Enjoy a welcome dinner featuring Rwandan and international cuisine.'
        }
      ],
      accommodation: {
        name: 'Kigali Serena Hotel',
        type: 'Luxury Hotel',
        included: true
      }
    },
    {
      day: 2,
      date: new Date(2024, 8, 2), // September 2, 2024
      title: 'Transfer to Volcanoes National Park',
      description: 'After breakfast, journey north through Rwanda\'s beautiful terraced hillsides to Volcanoes National Park. This scenic drive takes approximately 2.5 hours, offering wonderful views of the countryside and rural life.',
      activities: [
        {
          time: '8:00 AM - 10:30 AM',
          title: 'Drive to Volcanoes National Park',
          location: 'Kigali to Musanze',
          type: 'transportation',
          description: 'Scenic drive through Rwanda\'s beautiful landscapes.'
        },
        {
          time: '11:30 AM - 1:30 PM',
          title: 'Community Visit',
          location: 'Local Village near Musanze',
          type: 'cultural',
          description: 'Visit a local community to learn about traditional practices and daily life.'
        },
        {
          time: '3:00 PM - 5:00 PM',
          title: 'Twin Lakes Excursion',
          location: 'Lake Burera and Lake Ruhondo',
          type: 'attraction',
          description: 'Visit the scenic twin lakes to enjoy the landscapes and possibly spot waterbirds.'
        }
      ],
      accommodation: {
        name: 'Mountain Gorilla View Lodge',
        type: 'Lodge',
        included: true
      }
    },
    {
      day: 3,
      date: new Date(2024, 8, 3), // September 3, 2024
      title: 'Gorilla Trekking',
      description: 'The highlight of your journey! After an early breakfast, you\'ll be transferred to the park headquarters for a briefing before setting off into the forest to track a habituated gorilla family. The trek can take 1-4 hours, and you\'ll have one magical hour with these magnificent creatures.',
      activities: [
        {
          time: '7:00 AM - 8:00 AM',
          title: 'Park Briefing',
          location: 'Volcanoes National Park Headquarters',
          type: 'attraction',
          description: 'Receive instructions and guidelines for gorilla trekking.'
        },
        {
          time: '8:30 AM - 1:30 PM',
          title: 'Gorilla Trekking',
          location: 'Volcanoes National Park',
          type: 'wildlife',
          description: 'Trek through the forest to spend one hour with a mountain gorilla family. This is a once-in-a-lifetime experience.'
        },
        {
          time: '3:00 PM - 5:00 PM',
          title: 'Rest and Reflection',
          location: 'Lodge',
          type: 'leisure',
          description: 'Relax after your trekking adventure and document your experience.'
        }
      ],
      accommodation: {
        name: 'Mountain Gorilla View Lodge',
        type: 'Lodge',
        included: true
      }
    },
    {
      day: 4,
      date: new Date(2024, 8, 4), // September 4, 2024
      title: 'Golden Monkey Tracking & Transfer to Lake Kivu',
      description: 'In the morning, enjoy another primate experience as you track playful golden monkeys. Afterward, journey to the shores of Lake Kivu, one of Africa\'s great lakes, for relaxation.',
      activities: [
        {
          time: '7:00 AM - 11:00 AM',
          title: 'Golden Monkey Tracking',
          location: 'Volcanoes National Park',
          type: 'wildlife',
          description: 'Track the endangered golden monkeys in their bamboo forest habitat.'
        },
        {
          time: '12:00 PM - 3:00 PM',
          title: 'Drive to Lake Kivu',
          location: 'Musanze to Kibuye',
          type: 'transportation',
          description: 'Scenic drive to Lake Kivu through beautiful landscapes.'
        },
        {
          time: '4:00 PM - 6:00 PM',
          title: 'Sunset Boat Ride',
          location: 'Lake Kivu',
          type: 'attraction',
          description: 'Enjoy a peaceful boat ride on Lake Kivu as the sun sets.'
        }
      ],
      accommodation: {
        name: 'Lake Kivu Serena Hotel',
        type: 'Lakeside Resort',
        included: true
      }
    },
    {
      day: 5,
      date: new Date(2024, 8, 5), // September 5, 2024
      title: 'Lake Kivu Exploration',
      description: 'Spend the day exploring Lake Kivu, with opportunities for water activities, island visits, and relaxation on the shores of this beautiful lake.',
      activities: [
        {
          time: '9:00 AM - 12:00 PM',
          title: 'Island Hopping Tour',
          location: 'Lake Kivu Islands',
          type: 'attraction',
          description: 'Visit some of Lake Kivu\'s islands and learn about local fishing communities.'
        },
        {
          time: '1:00 PM - 3:00 PM',
          title: 'Lunch at Local Restaurant',
          location: 'Kibuye Waterfront',
          type: 'dining',
          description: 'Enjoy fresh fish and Rwandan specialties at a local restaurant.'
        },
        {
          time: '3:30 PM - 5:30 PM',
          title: 'Coffee Experience',
          location: 'Local Coffee Cooperative',
          type: 'cultural',
          description: 'Learn about Rwanda\'s coffee production and participate in a tasting session.'
        }
      ],
      accommodation: {
        name: 'Lake Kivu Serena Hotel',
        type: 'Lakeside Resort',
        included: true
      }
    },
    {
      day: 6,
      date: new Date(2024, 8, 6), // September 6, 2024
      title: 'Transfer to Nyungwe Forest National Park',
      description: 'Journey south to Nyungwe Forest National Park, home to diverse wildlife including 13 primate species. The drive along Lake Kivu and through tea plantations is scenic and engaging.',
      activities: [
        {
          time: '8:00 AM - 12:00 PM',
          title: 'Drive to Nyungwe Forest',
          location: 'Kibuye to Nyungwe',
          type: 'transportation',
          description: 'Scenic drive along Lake Kivu and through tea plantations.'
        },
        {
          time: '1:00 PM - 3:00 PM',
          title: 'Tea Plantation Visit',
          location: 'Gisakura Tea Estate',
          type: 'attraction',
          description: 'Tour a tea plantation and learn about Rwanda\'s tea production.'
        },
        {
          time: '4:00 PM - 6:00 PM',
          title: 'Forest Walk',
          location: 'Nyungwe Forest National Park',
          type: 'attraction',
          description: 'Take an introductory walk in the forest to acclimate to the environment.'
        }
      ],
      accommodation: {
        name: 'Nyungwe House',
        type: 'Luxury Forest Lodge',
        included: true
      }
    },
    {
      day: 7,
      date: new Date(2024, 8, 7), // September 7, 2024
      title: 'Chimpanzee Tracking & Return to Kigali',
      description: 'Early morning chimpanzee tracking in Nyungwe Forest, then return to Kigali for your departure. If time allows, you\'ll have the opportunity for last-minute shopping.',
      activities: [
        {
          time: '5:30 AM - 11:00 AM',
          title: 'Chimpanzee Tracking',
          location: 'Nyungwe Forest National Park',
          type: 'wildlife',
          description: 'Track wild chimpanzees in their natural habitat with experienced guides.'
        },
        {
          time: '12:00 PM - 4:00 PM',
          title: 'Drive to Kigali',
          location: 'Nyungwe to Kigali',
          type: 'transportation',
          description: 'Return journey to Kigali.'
        },
        {
          time: '5:00 PM - 7:00 PM',
          title: 'Farewell Dinner',
          location: 'Repub Lounge Kigali',
          type: 'dining',
          description: 'Enjoy a farewell dinner reflecting on your Rwandan adventure.'
        }
      ],
      accommodation: {
        name: 'Day Use Room at Kigali Serena',
        type: 'Hotel',
        included: true,
        notes: 'Available until your departure flight'
      }
    }
  ],
  includedServices: [
    'All accommodations as specified',
    'All transportation within Rwanda',
    'English-speaking guide throughout',
    'Gorilla and chimpanzee permits',
    'All activities and entrance fees as listed',
    'Daily breakfast, 5 lunches, and 7 dinners',
    'Bottled water during activities and transfers'
  ],
  excludedServices: [
    'International flights',
    'Visa fees',
    'Travel insurance',
    'Personal expenses and gratuities',
    'Alcoholic beverages',
    'Activities not mentioned in the itinerary'
  ],
  startingPrice: '$4,250 per person (based on double occupancy)'
};

const ItineraryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the itinerary data based on the ID
  // For now, we'll use our mock data
  const itinerary = mockItinerary;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="relative h-[50vh] max-h-[500px] min-h-[300px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${itinerary.coverImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <div className="mb-4">
            <span className="inline-block px-4 py-1 bg-rwanda-green text-white rounded-full text-sm uppercase tracking-wide">
              {itinerary.duration}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {itinerary.title}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            {itinerary.idealFor.map((tag, index) => (
              <span key={index} className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <Link to="/plan/itinerary-builder" className="inline-flex items-center text-rwanda-green hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Itinerary Builder
              </Link>
              
              <p className="text-lg text-gray-700 mb-8">{itinerary.description}</p>
              
              <div className="space-y-12">
                {itinerary.days.map((day) => (
                  <div key={day.day} className="relative">
                    <div className="absolute left-0 top-0 w-px h-full bg-gray-200 ml-6"></div>
                    
                    <div className="flex">
                      <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-rwanda-green text-white flex items-center justify-center z-10">
                        {day.day}
                      </div>
                      
                      <div className="ml-6 pb-12">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                          <div className="p-4 md:p-6 border-b border-gray-200 bg-gray-50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                              <h2 className="text-xl font-bold">{day.title}</h2>
                              <div className="flex items-center text-gray-600">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{format(day.date, 'MMMM d, yyyy')}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="p-4 md:p-6">
                            <p className="text-gray-700 mb-6">{day.description}</p>
                            
                            <h3 className="font-bold text-lg mb-4">Day Activities</h3>
                            <div className="space-y-6">
                              {day.activities.map((activity, index) => (
                                <div key={index} className="flex">
                                  <div className="w-24 flex-shrink-0 text-sm text-rwanda-green font-medium">
                                    {activity.time.split(' - ')[0]}
                                  </div>
                                  <div className="flex-grow border-l-2 border-gray-200 pl-4 pb-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                                      <h4 className="font-bold">{activity.title}</h4>
                                      <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full uppercase">
                                        {activity.type}
                                      </span>
                                    </div>
                                    <div className="flex items-start text-gray-600 mb-2">
                                      <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                                      <span>{activity.location}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm">{activity.description}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 bg-rwanda-green bg-opacity-10 p-2 rounded-full">
                                  <Clock className="w-5 h-5 text-rwanda-green" />
                                </div>
                                <div className="ml-4">
                                  <h4 className="font-bold">Overnight Stay</h4>
                                  <p className="text-gray-700">{day.accommodation.name}</p>
                                  <p className="text-sm text-gray-600">{day.accommodation.type}</p>
                                  {day.accommodation.notes && (
                                    <p className="text-sm text-gray-600 mt-1">{day.accommodation.notes}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-20">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-lg">Itinerary Details</h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-rwanda-green mb-1">
                    {itinerary.startingPrice}
                  </div>
                  <p className="text-sm text-gray-600">
                    This is a suggested itinerary. Prices may vary based on season and customizations.
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                    Inquire About This Trip
                  </Button>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Customize This Itinerary
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 flex items-center justify-center text-sm">
                      <Download className="mr-1 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1 flex items-center justify-center text-sm">
                      <Printer className="mr-1 h-4 w-4" />
                      Print
                    </Button>
                    <Button variant="outline" className="flex-1 flex items-center justify-center text-sm">
                      <Share2 className="mr-1 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="font-bold mb-3">Included</h4>
                  <ul className="space-y-2">
                    {itinerary.includedServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-rwanda-green mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-3">Not Included</h4>
                  <ul className="space-y-2">
                    {itinerary.excludedServices.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sm text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;
