
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, MapPin, DollarSign, Plane, Bus, Bed, Coffee } from 'lucide-react';
import BudgetCalculator from '@/components/plan/BudgetCalculator';
import DetailHero from '@/components/shared/DetailHero';

const Plan: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("budget-planner");

  return (
    <div>
      <DetailHero
        title="Plan Your Rwanda Journey"
        imageUrl="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        category="Travel Planning"
      />

      <div className="container mx-auto px-4 py-12">
        <Tabs 
          defaultValue="budget-planner" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
              <TabsTrigger value="budget-planner" className="px-4 py-3">
                <DollarSign className="w-4 h-4 mr-2" />
                <span>Budget Planner</span>
              </TabsTrigger>
              <TabsTrigger value="getting-here" className="px-4 py-3">
                <Plane className="w-4 h-4 mr-2" />
                <span>Getting Here</span>
              </TabsTrigger>
              <TabsTrigger value="getting-around" className="px-4 py-3">
                <Bus className="w-4 h-4 mr-2" />
                <span>Getting Around</span>
              </TabsTrigger>
              <TabsTrigger value="travel-tips" className="px-4 py-3">
                <Coffee className="w-4 h-4 mr-2" />
                <span>Travel Tips</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="budget-planner" className="mt-0">
            <BudgetCalculator />
          </TabsContent>

          <TabsContent value="getting-here" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Getting to Rwanda</h2>
              <p className="text-gray-600 mb-8">
                Rwanda is accessible by air through Kigali International Airport (KGL), which is served by several international airlines.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>International Flights</CardTitle>
                    <CardDescription>Airlines serving Kigali International Airport</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>RwandAir - Direct flights from Brussels, London, Dubai, and multiple African cities</li>
                      <li>KLM - Connections via Amsterdam</li>
                      <li>Brussels Airlines - Connections via Brussels</li>
                      <li>Qatar Airways - Connections via Doha</li>
                      <li>Ethiopian Airlines - Connections via Addis Ababa</li>
                      <li>Kenya Airways - Connections via Nairobi</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visa Information</CardTitle>
                    <CardDescription>Entry requirements for visiting Rwanda</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Most visitors can obtain a visa on arrival or apply online through the Rwanda Immigration website.
                    </p>
                    <p className="font-medium">Visa options include:</p>
                    <ul className="list-disc ml-5 space-y-1 mt-2">
                      <li>30-day tourist visa: $50 USD</li>
                      <li>East African Tourist Visa (valid for Rwanda, Kenya, and Uganda): $100 USD</li>
                      <li>Transit visa (up to 72 hours): $30 USD</li>
                    </ul>
                    <p className="mt-4 text-sm">
                      Note: Visa requirements and fees may change. Always check the official 
                      Rwanda Immigration website for the most up-to-date information.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline">
                      <a 
                        href="https://www.migration.gov.rw/anounce" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Visit Rwanda Immigration <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="getting-around" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Getting Around Rwanda</h2>
              <p className="text-gray-600 mb-8">
                Rwanda has excellent road infrastructure and multiple transportation options for tourists.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Private Drivers & Tours</CardTitle>
                    <CardDescription>The most convenient option for tourists</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Hiring a private driver/guide is the most comfortable and efficient way to explore Rwanda. 
                      Your driver will handle navigation, provide local insights, and help with language barriers.
                    </p>
                    <p className="mt-2">
                      Cost: $80-150 USD per day depending on the vehicle and itinerary.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Public Transportation</CardTitle>
                    <CardDescription>Budget-friendly options for getting around</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-1">Buses</h4>
                        <p>
                          Long-distance buses connect major cities and towns. Companies like Virunga Express and 
                          Ritco offer comfortable services.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Minibuses (Matatus)</h4>
                        <p>
                          These shared taxis operate on fixed routes within and between cities. They're inexpensive 
                          but can be crowded and run on flexible schedules.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Moto-taxis</h4>
                        <p>
                          Motorcycle taxis are abundant in urban areas and offer a quick way to navigate through traffic. 
                          Drivers should provide helmets for passengers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Car Rentals</CardTitle>
                    <CardDescription>For independent travelers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Self-drive options are available, but we recommend hiring a car with a driver due to the 
                      challenging driving conditions in some areas and the value of having a local guide.
                    </p>
                    <p className="mt-2">
                      If you choose to drive yourself, an International Driving Permit is required along with your 
                      home country's license.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="travel-tips" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Rwanda Travel Tips</h2>
              <p className="text-gray-600 mb-8">
                Essential information to help you plan a smooth and enjoyable trip to Rwanda.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>When to Visit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Dry Seasons (Best Time to Visit)</h4>
                        <p>June to September and December to February</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Rainy Seasons</h4>
                        <p>March to May and October to November</p>
                      </div>
                      <p className="text-sm mt-2">
                        Note: Gorilla trekking and other activities operate year-round, but trails can be more 
                        challenging during rainy seasons.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Health & Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">Vaccinations:</span> Yellow fever vaccination is required for entry.
                        Consult with a travel doctor for other recommended vaccinations.
                      </li>
                      <li>
                        <span className="font-medium">Malaria:</span> Rwanda is a malaria zone. Take appropriate 
                        precautions including antimalarial medication and insect repellent.
                      </li>
                      <li>
                        <span className="font-medium">Safety:</span> Rwanda is one of the safest countries in Africa with 
                        low crime rates. Normal precautions apply.
                      </li>
                      <li>
                        <span className="font-medium">Altitude:</span> Much of Rwanda is at high elevation. Take time to 
                        acclimatize and stay hydrated.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Money & Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-medium">Currency:</span> Rwandan Franc (RWF) is the local currency.
                      </li>
                      <li>
                        <span className="font-medium">Cash:</span> Carry some US dollars in cash (newer bills, 2009 or later). 
                        ATMs are available in major cities.
                      </li>
                      <li>
                        <span className="font-medium">Credit Cards:</span> Major hotels and restaurants in Kigali accept 
                        credit cards, but many places outside the capital are cash-only.
                      </li>
                      <li>
                        <span className="font-medium">Mobile Money:</span> Mobile payment systems are widely used in Rwanda.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Packing Essentials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc ml-5 space-y-1">
                      <li>Lightweight, moisture-wicking clothing</li>
                      <li>Long-sleeved shirts and pants for protection from sun and insects</li>
                      <li>Sturdy hiking boots for trekking</li>
                      <li>Rain jacket or poncho</li>
                      <li>Hat and sunglasses</li>
                      <li>Sunscreen and insect repellent</li>
                      <li>Daypack for excursions</li>
                      <li>Camera with extra batteries and memory cards</li>
                      <li>Binoculars for wildlife viewing</li>
                      <li>Reusable water bottle</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Plan;
