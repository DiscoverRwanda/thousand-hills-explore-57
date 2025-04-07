
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Map, Calendar, DollarSign, Sun, Umbrella, Landmark, Coffee, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Plan: React.FC = () => {
  return (
    <div>
      <div className="bg-rwanda-blue py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Plan Your Rwanda Journey</h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know to create your perfect Rwandan adventure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                className="bg-white text-rwanda-blue hover:bg-white/90"
              >
                <Link to="/plan/itinerary">
                  Create Itinerary <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link to="/plan/travel-tips">
                  Travel Tips
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Essential Travel Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know before and during your visit to Rwanda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-rwanda-green/10 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-rwanda-green" />
                </div>
                <CardTitle>Getting Here</CardTitle>
                <CardDescription>Information about flights, visas, and entry requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-rwanda-green mr-2">•</span>
                    Direct flights to Kigali International Airport from major cities
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-green mr-2">•</span>
                    Visa on arrival available for many nationalities
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-green mr-2">•</span>
                    Land border crossings from Uganda, Tanzania, and DRC
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/getting-here">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-rwanda-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-rwanda-blue" />
                </div>
                <CardTitle>Getting Around</CardTitle>
                <CardDescription>Transportation options within Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-rwanda-blue mr-2">•</span>
                    Private car hire with driver
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-blue mr-2">•</span>
                    Public buses and minibuses between cities
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-blue mr-2">•</span>
                    Motorcycle taxis for short distances
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/getting-around">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-rwanda-yellow/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-rwanda-yellow" />
                </div>
                <CardTitle>When to Visit</CardTitle>
                <CardDescription>Best times to visit and seasonal information</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-rwanda-yellow mr-2">•</span>
                    Dry seasons: June-September and December-February
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-yellow mr-2">•</span>
                    Rainy seasons: March-May and October-November
                  </li>
                  <li className="flex items-start">
                    <span className="text-rwanda-yellow mr-2">•</span>
                    Year-round moderate temperatures due to high elevation
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/when-to-visit">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Travel Tips</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Practical advice to help you make the most of your Rwandan adventure.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-3 text-rwanda-green" />
                    <span className="font-medium">Currency and Money</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-gray-600 space-y-2">
                    <p>The Rwandan Franc (RWF) is the official currency. ATMs are available in Kigali and other major towns. Credit cards are accepted at upscale hotels and restaurants, but cash is preferred for small businesses and rural areas.</p>
                    <p>It's advisable to carry some US dollars or Euros for emergencies. Currency exchange services are available at the airport, banks, and authorized forex bureaus.</p>
                  </div>
                  <div className="mt-4">
                    <Link to="/plan/travel-tips#currency" className="text-rwanda-blue hover:underline">
                      More about currency and money →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <Sun className="h-5 w-5 mr-3 text-rwanda-yellow" />
                    <span className="font-medium">Weather and What to Pack</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-gray-600 space-y-2">
                    <p>Rwanda has a moderate climate year-round due to its high elevation. Days are warm and nights can be cool, especially in higher altitude areas like Volcanoes National Park.</p>
                    <p>Essential items to pack include light layers, a waterproof jacket, hiking boots for treks, sun protection, insect repellent, and any personal medications. Formal attire is only necessary if planning to attend upscale events.</p>
                  </div>
                  <div className="mt-4">
                    <Link to="/plan/travel-tips#packing" className="text-rwanda-blue hover:underline">
                      Detailed packing list →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <Umbrella className="h-5 w-5 mr-3 text-rwanda-blue" />
                    <span className="font-medium">Health and Safety</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-gray-600 space-y-2">
                    <p>Rwanda is one of the safest countries in Africa. Basic precautions like in any travel destination are sufficient. The country has a strict plastic bag ban, so avoid bringing any.</p>
                    <p>Yellow fever vaccination is required for entry. Malaria prophylaxis is recommended for some areas. Travel insurance with medical coverage is strongly advised. Tap water should be avoided - stick to bottled water.</p>
                  </div>
                  <div className="mt-4">
                    <Link to="/plan/travel-tips#health" className="text-rwanda-blue hover:underline">
                      Health and safety information →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <Landmark className="h-5 w-5 mr-3 text-rwanda-green" />
                    <span className="font-medium">Cultural Etiquette</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-gray-600 space-y-2">
                    <p>Rwandans are generally reserved and polite. Greetings are important - a handshake is appropriate. Dress modestly, especially when visiting religious sites or rural communities.</p>
                    <p>It's respectful to ask permission before taking photos of people. Discussion of ethnicity and the 1994 genocide should be approached with sensitivity. Learning a few basic Kinyarwanda phrases is appreciated.</p>
                  </div>
                  <div className="mt-4">
                    <Link to="/plan/travel-tips#etiquette" className="text-rwanda-blue hover:underline">
                      Cultural guidelines →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center">
                    <Coffee className="h-5 w-5 mr-3 text-rwanda-yellow" />
                    <span className="font-medium">Food and Dining</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="text-gray-600 space-y-2">
                    <p>Rwandan cuisine features staples like beans, sweet potatoes, plantains, cassava, and corn. Local specialties include brochettes (grilled meat skewers) and isombe (cassava leaves with eggplant and spinach).</p>
                    <p>Kigali offers a variety of international restaurants. In rural areas, options may be more limited. Rwanda produces excellent coffee and tea, which are worth trying during your visit.</p>
                  </div>
                  <div className="mt-4">
                    <Link to="/dining" className="text-rwanda-blue hover:underline">
                      Explore Rwandan cuisine →
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8 text-center">
              <Button
                asChild
                className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
              >
                <Link to="/plan/travel-tips">
                  View All Travel Tips
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Suggested Itineraries</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Inspiration for your Rwanda journey based on your interests and time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Short visit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-rwanda-green text-sm font-medium px-3 py-1 rounded-full">
                  3-5 Days
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Essential Rwanda</h3>
                <p className="text-gray-600 mb-4">
                  A quick trip focusing on Kigali and gorilla trekking in Volcanoes National Park.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-green mr-2">Day 1:</span>
                    <span>Kigali City Tour</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-green mr-2">Day 2-3:</span>
                    <span>Gorilla Trekking</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-green mr-2">Day 4:</span>
                    <span>Cultural Experiences</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/itineraries/essential">
                    View Full Itinerary
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Medium visit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-rwanda-blue text-sm font-medium px-3 py-1 rounded-full">
                  7-10 Days
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Discover Rwanda</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive tour covering wildlife, landscapes, and cultural highlights.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-blue mr-2">Day 1-2:</span>
                    <span>Kigali Exploration</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-blue mr-2">Day 3-5:</span>
                    <span>Volcanoes National Park</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-blue mr-2">Day 6-7:</span>
                    <span>Lake Kivu Relaxation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-blue mr-2">Day 8-9:</span>
                    <span>Nyungwe Forest</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/itineraries/discover">
                    View Full Itinerary
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Long visit" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 text-rwanda-yellow text-sm font-medium px-3 py-1 rounded-full">
                  14+ Days
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">Complete Rwanda</h3>
                <p className="text-gray-600 mb-4">
                  An immersive experience covering all regions and hidden gems.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-yellow mr-2">Day 1-3:</span>
                    <span>Kigali & Surroundings</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-yellow mr-2">Day 4-7:</span>
                    <span>Northern Highlights</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-yellow mr-2">Day 8-10:</span>
                    <span>Western Rwanda</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium text-rwanda-yellow mr-2">Day 11-14:</span>
                    <span>Eastern & Southern Regions</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/plan/itineraries/complete">
                    View Full Itinerary
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
            >
              <Link to="/plan/itinerary">
                Create Your Custom Itinerary <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-rwanda-yellow/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Rwanda Visitor Guide</h2>
              <p className="text-gray-700 mb-4">
                Download our comprehensive guide to Rwanda and have all essential information at your fingertips, 
                even when offline. The guide includes maps, attractions, accommodation recommendations, 
                cultural insights, and practical travel tips.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-rwanda-green mr-3" />
                  <span>Detailed maps of major destinations</span>
                </li>
                <li className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-rwanda-green mr-3" />
                  <span>Top attractions and hidden gems</span>
                </li>
                <li className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-rwanda-green mr-3" />
                  <span>Practical travel information</span>
                </li>
                <li className="flex items-center">
                  <ShoppingBag className="h-5 w-5 text-rwanda-green mr-3" />
                  <span>Cultural insights and language tips</span>
                </li>
              </ul>
              <Button className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
                Download Visitor Guide (PDF)
              </Button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-64 h-80 shadow-lg">
                <div className="absolute inset-0 bg-rwanda-blue rounded-lg transform rotate-3"></div>
                <img 
                  src="/images/guidebook-cover.jpg" 
                  alt="Rwanda Visitor Guide" 
                  className="relative z-10 w-full h-full object-cover rounded-lg border-4 border-white shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plan;
