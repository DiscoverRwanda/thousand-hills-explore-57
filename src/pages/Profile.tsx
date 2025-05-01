
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Map, 
  Heart, 
  Calendar, 
  Wallet,
  Settings,
  Bell,
  MapPin
} from 'lucide-react';

// Components
import Itineraries from '@/components/profile/Itineraries';
import Favorites from '@/components/profile/Favorites';
import Bookings from '@/components/profile/Bookings';
import Budget from '@/components/profile/Budget';
import PlacesVisited from '@/components/profile/PlacesVisited';
import UserSettings from '@/components/profile/UserSettings';
import ProfileTabContent from '@/components/profile/ProfileTabContent';

// Dummy data
const user = {
  id: 'user123',
  name: 'Michael Johnson',
  email: 'michael.johnson@example.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: "Enthusiastic traveler with a passion for wildlife photography and experiencing diverse cultures. I've visited over 25 countries and Rwanda has been on my bucket list for years.",
  location: 'Toronto, Canada',
  language: 'en',
  currency: 'USD',
  emailNotifications: true,
  marketingEmails: false,
  travelPreferences: {
    accommodation: 'midrange',
    transportation: 'car',
    activities: ['wildlife', 'hiking', 'cultural'],
    budget: 'moderate'
  }
};

// Itineraries dummy data
const itinerariesData = [
  {
    id: 'itin1',
    title: 'Rwanda Wildlife Adventure',
    dates: 'Jun 15-22, 2023',
    days: 7,
    image: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552',
    status: 'past' as const,
    locations: ['Kigali', 'Volcanoes NP', 'Akagera NP']
  },
  {
    id: 'itin2',
    title: 'Gorillas & Golden Monkeys',
    dates: 'Sep 10-18, 2023',
    days: 8,
    image: 'https://images.unsplash.com/photo-1559308448-de7e81f4d442',
    status: 'upcoming' as const,
    locations: ['Kigali', 'Volcanoes NP', 'Lake Kivu']
  },
  {
    id: 'itin3',
    title: 'Rwanda Cultural Tour',
    dates: 'Not scheduled',
    days: 5,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
    status: 'draft' as const,
    locations: ['Kigali', 'Nyanza', 'Huye']
  }
];

// Favorites dummy data
const favoritesData = [
  {
    id: 'fav1',
    title: 'Volcanoes National Park',
    type: 'attraction' as const,
    imageUrl: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d',
    location: 'Northern Province',
    description: 'Home to the endangered mountain gorilla and golden monkeys, with stunning volcanic landscapes.',
    link: '/attractions/volcanoes-national-park'
  },
  {
    id: 'fav2',
    title: 'Bourbon Coffee',
    type: 'restaurant' as const,
    imageUrl: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065',
    location: 'Kigali',
    description: "Premium coffee shop serving Rwanda's finest coffee beans in a relaxed atmosphere.",
    link: '/dining/bourbon-coffee'
  },
  {
    id: 'fav3',
    title: 'Kigali Marriott Hotel',
    type: 'hotel' as const,
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    location: 'Kigali City Center',
    description: 'Luxury hotel with modern amenities, multiple restaurants and a central location.',
    link: '/stay/kigali-marriott'
  },
  {
    id: 'fav4',
    title: 'Akagera National Park',
    type: 'attraction' as const,
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
    location: 'Eastern Province',
    description: "Rwanda's only savannah park with elephants, lions, giraffes and more.",
    link: '/attractions/akagera-national-park'
  },
  {
    id: 'fav5',
    title: 'Kwita Izina Festival',
    type: 'event' as const,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    location: 'Volcanoes National Park',
    description: 'Annual gorilla naming ceremony showcasing conservation efforts and cultural performances.',
    link: '/events/kwita-izina'
  },
  {
    id: 'fav6',
    title: 'The Retreat',
    type: 'hotel' as const,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    location: 'Kigali',
    description: 'Boutique eco-luxury hotel with farm-to-table dining and solar-powered accommodations.',
    link: '/stay/the-retreat'
  }
];

// Bookings dummy data
const bookingsData = [
  {
    id: 'book1',
    type: 'accommodation' as const,
    name: 'Kigali Serena Hotel',
    date: new Date('2023-09-10'),
    status: 'confirmed' as const,
    reference: 'KSH2023091001',
    price: 980,
    currency: 'USD'
  },
  {
    id: 'book2',
    type: 'tour' as const,
    name: 'Gorilla Trekking Permit',
    date: new Date('2023-09-12'),
    status: 'confirmed' as const,
    reference: 'GTP2023091201',
    price: 1500,
    currency: 'USD'
  },
  {
    id: 'book3',
    type: 'transport' as const,
    name: 'Private Airport Transfer',
    date: new Date('2023-09-10'),
    status: 'confirmed' as const,
    reference: 'PAT2023091001',
    price: 50,
    currency: 'USD'
  },
  {
    id: 'book4',
    type: 'event' as const,
    name: 'Traditional Dance Performance',
    date: new Date('2023-09-15'),
    status: 'pending' as const,
    reference: 'TDP2023091501',
    price: 45,
    currency: 'USD'
  },
  {
    id: 'book5',
    type: 'tour' as const,
    name: 'Coffee Plantation Tour',
    date: new Date('2023-09-17'),
    status: 'pending' as const,
    reference: 'CPT2023091701',
    price: 85,
    currency: 'USD'
  },
  {
    id: 'book6',
    type: 'accommodation' as const,
    name: 'Volcanoes Virunga Lodge',
    date: new Date('2023-06-15'),
    status: 'completed' as const,
    reference: 'VVL2023061501',
    price: 1200,
    currency: 'USD'
  }
];

// Budget dummy data
const budgetData = {
  totalBudget: 4000,
  totalSpent: 3100,
  currency: 'USD',
  tripName: 'Gorillas & Golden Monkeys',
  tripId: 'itin2',
  categories: [
    {
      name: 'Accommodation',
      allocated: 1200,
      spent: 980,
      color: 'bg-rwanda-green'
    },
    {
      name: 'Transportation',
      allocated: 400,
      spent: 320,
      color: 'bg-blue-500'
    },
    {
      name: 'Activities & Tours',
      allocated: 1800,
      spent: 1585,
      color: 'bg-purple-500'
    },
    {
      name: 'Food & Dining',
      allocated: 400,
      spent: 215,
      color: 'bg-yellow-500'
    },
    {
      name: 'Shopping',
      allocated: 200,
      spent: 0,
      color: 'bg-pink-500'
    }
  ]
};

// Places visited dummy data
const placesVisitedData = [
  {
    id: 'place1',
    name: 'Volcanoes National Park',
    region: 'Northern Province',
    category: 'park' as const,
    imageUrl: 'https://images.unsplash.com/photo-1518709414768-a88981a4515d',
    visitDate: 'June 17-18, 2023',
    rating: 5,
    notes: 'Amazing experience trekking to see the mountain gorillas. Our guide was very knowledgeable and we spent a full hour with the Susa family. Challenging hike but totally worth it.'
  },
  {
    id: 'place2',
    name: 'Kigali',
    region: 'Kigali Province',
    category: 'city' as const,
    imageUrl: 'https://images.unsplash.com/photo-1580746738515-3dbad9c6bf23',
    visitDate: 'June 15-16 & 22, 2023',
    rating: 5,
    notes: 'Clean and organized city with friendly locals. Visited the Genocide Memorial which was moving and important. Great restaurants and coffee shops.'
  },
  {
    id: 'place3',
    name: 'Lake Kivu',
    region: 'Western Province',
    category: 'lake' as const,
    imageUrl: 'https://images.unsplash.com/photo-1590791897858-e08a0939a8d1',
    visitDate: 'June 19-20, 2023',
    rating: 4,
    notes: 'Beautiful lake with stunning sunsets. Took a boat tour and visited some of the islands. Very relaxing after the gorilla trek.'
  },
  {
    id: 'place4',
    name: 'Akagera National Park',
    region: 'Eastern Province',
    category: 'park' as const,
    imageUrl: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e',
    visitDate: 'June 21, 2023',
    rating: 4,
    notes: "Great day safari. Saw elephants, zebras, giraffes and hippos. The landscape is diverse with savannah and lakes. Didn't see any lions but still a wonderful experience."
  },
  {
    id: 'place5',
    name: 'Kigali Genocide Memorial',
    region: 'Kigali',
    category: 'landmark' as const,
    imageUrl: 'https://images.unsplash.com/photo-1563795876452-c394f2bd8fb9',
    visitDate: 'June 16, 2023',
    rating: 5,
    notes: "Deeply moving and educational. Essential visit to understand Rwanda's history and incredible recovery. The memorial is beautifully maintained and the audio guide is excellent."
  },
  {
    id: 'place6',
    name: 'Nyungwe Forest National Park',
    region: 'Western Province',
    category: 'park' as const,
    imageUrl: 'https://images.unsplash.com/photo-1542401886-65d6c61db217',
    visitDate: 'Planned for September 14-15, 2023',
    rating: 0,
    notes: "Excited to visit for chimpanzee trekking and the canopy walk. Have heard great things about the rainforest biodiversity."
  }
];

const Profile: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('itineraries');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Info */}
        <div className="md:w-1/3 lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="h-24 w-24 rounded-full overflow-hidden">
                  <img 
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-rwanda-green text-white rounded-full p-1">
                  <Bell className="h-4 w-4" />
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.location}</p>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold">{itinerariesData.filter(i => i.status === "past").length}</div>
                  <div className="text-xs text-gray-600">Trips</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">{favoritesData.filter(f => f.type === "attraction").length}</div>
                  <div className="text-xs text-gray-600">Attractions</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold">{placesVisitedData.filter(p => p.rating > 0).length}</div>
                  <div className="text-xs text-gray-600">Places</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{user.bio}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mt-4 text-left">
              <h4 className="font-medium mb-2">Travel Preferences</h4>
              <div className="text-sm space-y-1">
                <div className="flex">
                  <span className="font-medium w-32">Accommodation:</span>
                  <span className="text-gray-600">Mid-range</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Transportation:</span>
                  <span className="text-gray-600">Private vehicle</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Activities:</span>
                  <span className="text-gray-600">Wildlife, Hiking, Culture</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-32">Budget:</span>
                  <span className="text-gray-600">Moderate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs Content */}
        <div className="md:w-2/3 lg:w-3/4">
          <Tabs defaultValue="itineraries" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="w-full mb-8 overflow-x-auto flex-nowrap justify-start">
              <TabsTrigger value="itineraries" className="flex items-center gap-2">
                <Map className="h-4 w-4" />
                <span>Itineraries</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Bookings</span>
              </TabsTrigger>
              <TabsTrigger value="budget" className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                <span>Budget</span>
              </TabsTrigger>
              <TabsTrigger value="places" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Places</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="itineraries" className="mt-0">
              <ProfileTabContent active={selectedTab === "itineraries"}>
                <Itineraries itineraries={itinerariesData} />
              </ProfileTabContent>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-0">
              <ProfileTabContent active={selectedTab === "favorites"}>
                <Favorites favorites={favoritesData} />
              </ProfileTabContent>
            </TabsContent>
            
            <TabsContent value="bookings" className="mt-0">
              <ProfileTabContent active={selectedTab === "bookings"}>
                <Bookings bookings={bookingsData} />
              </ProfileTabContent>
            </TabsContent>
            
            <TabsContent value="budget" className="mt-0">
              <ProfileTabContent active={selectedTab === "budget"}>
                <Budget 
                  totalBudget={budgetData.totalBudget}
                  totalSpent={budgetData.totalSpent}
                  currency={budgetData.currency}
                  categories={budgetData.categories}
                  tripName={budgetData.tripName}
                  tripId={budgetData.tripId}
                />
              </ProfileTabContent>
            </TabsContent>
            
            <TabsContent value="places" className="mt-0">
              <ProfileTabContent active={selectedTab === "places"}>
                <PlacesVisited places={placesVisitedData} />
              </ProfileTabContent>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <ProfileTabContent active={selectedTab === "settings"}>
                <UserSettings userData={user} />
              </ProfileTabContent>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
