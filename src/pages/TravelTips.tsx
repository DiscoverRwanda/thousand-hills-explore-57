
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, X, Info, AlertTriangle, Calendar, MapPin, Banknote, Utensils, Car, Plane, Hotel, Camera, Landmark, Wifi, CreditCard, Phone, ShieldCheck } from 'lucide-react';

const TravelTips: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Rwanda Travel Tips</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Essential information and advice to help you plan and enjoy your visit to Rwanda.
          </p>
        </div>
        
        <Tabs defaultValue="essentials">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="essentials">Essentials</TabsTrigger>
            <TabsTrigger value="transportation">Transportation</TabsTrigger>
            <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
            <TabsTrigger value="costs">Costs & Budgeting</TabsTrigger>
          </TabsList>
          
          {/* Essentials Tab */}
          <TabsContent value="essentials" className="pt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Visa Information</CardTitle>
                <CardDescription>Entry requirements for Rwanda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Most visitors can obtain a visa on arrival or apply online through the Rwanda Immigration website.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <h3 className="font-medium flex items-center text-green-800">
                      <Check className="h-5 w-5 mr-2" />
                      Visa on Arrival
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Available for most nationalities at $50 for a 30-day single entry visa
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <h3 className="font-medium flex items-center text-green-800">
                      <Check className="h-5 w-5 mr-2" />
                      E-Visa
                    </h3>
                    <p className="text-sm text-green-700 mt-1">
                      Can be applied for online before travel at <a href="https://www.migration.gov.rw" className="underline">migration.gov.rw</a>
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h3 className="font-medium flex items-center text-blue-800">
                    <Info className="h-5 w-5 mr-2" />
                    East Africa Tourist Visa
                  </h3>
                  <p className="text-sm text-blue-700 mt-1">
                    If you're also visiting Kenya and Uganda, consider the $100 East Africa Tourist Visa valid for 90 days
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Best Time to Visit</CardTitle>
                <CardDescription>Seasonal considerations for your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-rwanda-green" />
                      <h3 className="font-medium">Dry Seasons (Peak)</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li><strong>June to September:</strong> Ideal for gorilla trekking and safaris</li>
                      <li><strong>December to February:</strong> Short dry season, good wildlife viewing</li>
                      <li>Higher prices and more tourists during these periods</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                      <h3 className="font-medium">Wet Seasons</h3>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li><strong>March to May:</strong> Long rains, lush landscapes</li>
                      <li><strong>October to November:</strong> Short rains</li>
                      <li>Lower prices and fewer tourists</li>
                      <li>Trekking can be more challenging, but still possible</li>
                    </ul>
                  </div>
                </div>
                
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-800" />
                  <AlertTitle className="text-yellow-800">Travel Tip</AlertTitle>
                  <AlertDescription className="text-yellow-700">
                    Book accommodations and gorilla permits well in advance (4-6 months) if traveling during peak season.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Health & Safety</CardTitle>
                <CardDescription>Important health and safety information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-medium mb-2">Required Vaccinations</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        Yellow Fever (required for entry)
                      </li>
                    </ul>
                    
                    <h3 className="font-medium mb-2 mt-4">Recommended Vaccinations</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        Hepatitis A & B
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        Typhoid
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        Tetanus
                      </li>
                      <li className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        COVID-19 (check current requirements)
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Safety Considerations</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                        Rwanda is one of Africa's safest countries
                      </li>
                      <li className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                        Low crime rate, especially against tourists
                      </li>
                      <li className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                        Well-maintained roads and infrastructure
                      </li>
                      <li className="flex items-center">
                        <ShieldCheck className="h-4 w-4 mr-2 text-green-600" />
                        Clean cities with strict anti-littering laws
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-5 w-5 text-blue-800" />
                  <AlertTitle className="text-blue-800">Health Insurance</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    Comprehensive travel insurance with medical coverage and emergency evacuation is strongly recommended.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Communication & Connectivity</CardTitle>
                <CardDescription>Staying connected during your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-rwanda-green" />
                      Mobile Networks
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Major providers:</strong> MTN, Airtel, and Tigo</li>
                      <li><strong>SIM cards:</strong> Available at the airport or in shops</li>
                      <li><strong>Cost:</strong> $2-5 for a SIM with data packages starting from $5</li>
                      <li><strong>Requirements:</strong> Passport needed for registration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2 flex items-center">
                      <Wifi className="h-5 w-5 mr-2 text-rwanda-green" />
                      Internet Access
                    </h3>
                    <ul className="space-y-1 text-sm">
                      <li><strong>WiFi:</strong> Available in hotels, restaurants, and cafés in urban areas</li>
                      <li><strong>Quality:</strong> Generally good in Kigali, variable in rural areas</li>
                      <li><strong>4G coverage:</strong> Excellent in urban areas and most tourist destinations</li>
                      <li><strong>Remote areas:</strong> Limited connectivity in some national parks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cultural Etiquette</CardTitle>
                <CardDescription>Respectful behavior and local customs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Do's</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                        <span>Greet people with a handshake and maintain eye contact</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                        <span>Ask permission before taking photos of people</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                        <span>Dress modestly, especially when visiting religious sites</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                        <span>Learn a few basic Kinyarwanda phrases (e.g., "Muraho" for hello)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Don'ts</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 mt-0.5" />
                        <span>Avoid discussions about ethnicity or the 1994 genocide unless initiated by locals</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 mt-0.5" />
                        <span>Don't litter – Rwanda has strict cleanliness regulations</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 mt-0.5" />
                        <span>Avoid public displays of affection</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-4 w-4 mr-2 text-red-600 mt-0.5" />
                        <span>Don't photograph military installations or government buildings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Transportation Tab */}
          <TabsContent value="transportation" className="pt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Getting to Rwanda</CardTitle>
                <CardDescription>International travel options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Plane className="h-5 w-5 mr-2 text-rwanda-green" />
                    International Flights
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="mb-3">
                      Kigali International Airport (KGL) is the main gateway to Rwanda, with connections to major cities in Africa, the Middle East, and Europe.
                    </p>
                    
                    <h4 className="font-medium text-sm mb-2">Major Airlines Serving Kigali:</h4>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                      <li>• RwandAir (national carrier)</li>
                      <li>• Kenya Airways</li>
                      <li>• Ethiopian Airlines</li>
                      <li>• KLM Royal Dutch Airlines</li>
                      <li>• Brussels Airlines</li>
                      <li>• Qatar Airways</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Car className="h-5 w-5 mr-2 text-rwanda-green" />
                    Land Border Crossings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-md p-4">
                      <h4 className="font-medium mb-2">From Uganda</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Gatuna/Katuna:</strong> Main crossing, north of Kigali</li>
                        <li><strong>Cyanika:</strong> Near Kisoro, access to Volcanoes National Park</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4">
                      <h4 className="font-medium mb-2">From Tanzania</h4>
                      <ul className="space-y-1 text-sm">
                        <li><strong>Rusumo:</strong> Main crossing, east of Rwanda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Getting Around Rwanda</CardTitle>
                <CardDescription>Transportation options within the country</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Car className="h-5 w-5 mr-2 text-rwanda-green" />
                      Car Rental & Private Drivers
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium mb-2">Self-Drive Rental</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Cost:</strong> $60-100 per day (standard vehicle)</li>
                          <li><strong>Requirements:</strong> International driving permit, minimum 23 years old</li>
                          <li><strong>Roads:</strong> Good condition in most areas, some mountain roads may require 4x4</li>
                          <li><strong>Traffic:</strong> Right-hand drive, well-marked roads in urban areas</li>
                          <li><strong>Fuel:</strong> ~$1.30/liter, available in all major towns</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Private Driver/Guide</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Cost:</strong> $80-150 per day (including vehicle)</li>
                          <li><strong>Benefits:</strong> Local knowledge, navigation, language assistance</li>
                          <li><strong>Booking:</strong> Through tour operators or hotels</li>
                          <li><strong>Recommended for:</strong> First-time visitors, those unfamiliar with driving in Africa</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                      <h4 className="font-medium flex items-center text-yellow-800">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Recommended Rental Companies
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                        <li>• Kigali Car Rental: High-quality vehicles, English-speaking staff</li>
                        <li>• Rwanda Self Drive: Affordable options with good service</li>
                        <li>• Europcar: International standards with local office in Kigali</li>
                        <li>• Enagea Tours & Car Rentals: Specializing in 4x4 vehicles for safari</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3">Public Transportation</h3>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-md p-4">
                          <h4 className="font-medium mb-2">Buses & Minibuses</h4>
                          <ul className="space-y-1 text-sm">
                            <li><strong>Intercity buses:</strong> $5-15 depending on distance</li>
                            <li><strong>Companies:</strong> Virunga Express, Kigali Coach, Ritco</li>
                            <li><strong>Comfort:</strong> Modern buses with AC on main routes</li>
                            <li><strong>Frequency:</strong> Regular departures between major cities</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-md p-4">
                          <h4 className="font-medium mb-2">Motorcycle Taxis ("Moto")</h4>
                          <ul className="space-y-1 text-sm">
                            <li><strong>Cost:</strong> $0.50-3 per ride within cities</li>
                            <li><strong>Identification:</strong> Drivers wear green helmets</li>
                            <li><strong>Safety:</strong> Helmets provided for passengers</li>
                            <li><strong>Negotiation:</strong> Agree on price before starting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Taxis & Ride Services</h3>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-md p-4">
                          <h4 className="font-medium mb-2">Traditional Taxis</h4>
                          <ul className="space-y-1 text-sm">
                            <li><strong>Cost:</strong> $5-10 for trips within Kigali</li>
                            <li><strong>Identification:</strong> White with orange stripe</li>
                            <li><strong>Negotiation:</strong> Agree on fare before departure</li>
                            <li><strong>Availability:</strong> Easy to find in urban areas</li>
                          </ul>
                        </div>
                        
                        <div className="border border-gray-200 rounded-md p-4">
                          <h4 className="font-medium mb-2">Ride-Hailing Apps</h4>
                          <ul className="space-y-1 text-sm">
                            <li><strong>Options:</strong> Yego Cab, Move, Bolt</li>
                            <li><strong>Cost:</strong> 10-20% cheaper than traditional taxis</li>
                            <li><strong>Payment:</strong> Cash or card (depending on service)</li>
                            <li><strong>Coverage:</strong> Mainly in Kigali</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-5 w-5 text-blue-800" />
                    <AlertTitle className="text-blue-800">Transport to National Parks</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      For visiting Rwanda's national parks, it's highly recommended to use a tour operator or hire a private driver due to the remote locations and occasionally challenging road conditions.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Transportation Cost Comparison</CardTitle>
                <CardDescription>Comparing different transportation options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-2 px-4 border-b text-left">Transport Type</th>
                        <th className="py-2 px-4 border-b text-left">Cost Range</th>
                        <th className="py-2 px-4 border-b text-left">Comfort Level</th>
                        <th className="py-2 px-4 border-b text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Car Rental (Self-drive)</td>
                        <td className="py-2 px-4 border-b">$60-100/day</td>
                        <td className="py-2 px-4 border-b">High</td>
                        <td className="py-2 px-4 border-b">Independent travelers, flexible schedules</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Private Driver/Guide</td>
                        <td className="py-2 px-4 border-b">$80-150/day</td>
                        <td className="py-2 px-4 border-b">Very High</td>
                        <td className="py-2 px-4 border-b">First-time visitors, tours across multiple destinations</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Intercity Buses</td>
                        <td className="py-2 px-4 border-b">$5-15 per journey</td>
                        <td className="py-2 px-4 border-b">Medium</td>
                        <td className="py-2 px-4 border-b">Budget travelers, single destination trips</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Motorcycle Taxi</td>
                        <td className="py-2 px-4 border-b">$0.50-3 per trip</td>
                        <td className="py-2 px-4 border-b">Low</td>
                        <td className="py-2 px-4 border-b">Short distances within cities, avoiding traffic</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Regular Taxi</td>
                        <td className="py-2 px-4 border-b">$5-10 within city</td>
                        <td className="py-2 px-4 border-b">Medium-High</td>
                        <td className="py-2 px-4 border-b">Airport transfers, city exploration</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border-b">Ride-Hailing Apps</td>
                        <td className="py-2 px-4 border-b">$4-8 within city</td>
                        <td className="py-2 px-4 border-b">Medium-High</td>
                        <td className="py-2 px-4 border-b">Urban travel, fixed pricing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Accommodation Tab */}
          <TabsContent value="accommodation" className="pt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Accommodation Types</CardTitle>
                <CardDescription>Different lodging options in Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 text-rwanda-green mr-2" />
                        <h3 className="font-medium">Luxury Hotels & Lodges</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Price Range:</strong> $200-800+ per night</li>
                        <li><strong>Locations:</strong> Kigali, near national parks</li>
                        <li><strong>Amenities:</strong> Full-service restaurants, pools, spas</li>
                        <li><strong>Examples:</strong> Kigali Marriott, Bisate Lodge, One&Only Nyungwe House</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        Perfect for travelers seeking premium experiences with exceptional service and amenities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 text-rwanda-green mr-2" />
                        <h3 className="font-medium">Mid-Range Hotels</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Price Range:</strong> $80-200 per night</li>
                        <li><strong>Locations:</strong> Major cities and tourist areas</li>
                        <li><strong>Amenities:</strong> Restaurants, WiFi, air conditioning</li>
                        <li><strong>Examples:</strong> Park Inn by Radisson, Gorillas Lake Kivu Hotel</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        Good balance of comfort and value, suitable for most travelers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 text-rwanda-green mr-2" />
                        <h3 className="font-medium">Budget Hotels & Guesthouses</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Price Range:</strong> $30-80 per night</li>
                        <li><strong>Locations:</strong> Throughout the country</li>
                        <li><strong>Amenities:</strong> Basic rooms, sometimes shared facilities</li>
                        <li><strong>Examples:</strong> Step Town Motel, Discover Rwanda Hostels</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        Simple accommodations for budget-conscious travelers who prioritize location over luxury.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 text-rwanda-green mr-2" />
                        <h3 className="font-medium">Airbnb & Vacation Rentals</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Price Range:</strong> $40-250+ per night</li>
                        <li><strong>Locations:</strong> Mainly Kigali, with some in tourist areas</li>
                        <li><strong>Amenities:</strong> Kitchen facilities, privacy, local experience</li>
                        <li><strong>Types:</strong> Apartments, houses, private rooms</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-600">
                        Great for longer stays, families, or those wanting a more local experience.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-100">
                  <h3 className="font-medium flex items-center text-blue-800">
                    <Info className="h-5 w-5 mr-2" />
                    Accommodation During Gorilla Trekking
                  </h3>
                  <p className="mt-2 text-sm text-blue-700">
                    When planning gorilla trekking in Volcanoes National Park, consider staying in Musanze (Ruhengeri), which offers accommodations at all price points. Lodges closest to the park headquarters command premium prices but provide convenient access for early morning treks.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Popular Accommodation Areas</CardTitle>
                <CardDescription>Key locations and their benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rwanda-green mr-2" />
                          <h3 className="font-medium">Kigali</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best Areas:</strong> Kiyovu, Nyarutarama, Kimihurura</li>
                          <li><strong>Pros:</strong> Modern amenities, shopping, dining, nightlife</li>
                          <li><strong>Perfect For:</strong> Business travelers, first/last nights</li>
                          <li><strong>Types:</strong> International hotels, boutique hotels, Airbnbs</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rwanda-green mr-2" />
                          <h3 className="font-medium">Musanze/Ruhengeri (Volcanoes NP)</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best Areas:</strong> Near park headquarters, Kinigi</li>
                          <li><strong>Pros:</strong> Close to gorilla trekking, mountain views</li>
                          <li><strong>Perfect For:</strong> Wildlife enthusiasts, gorilla trekkers</li>
                          <li><strong>Types:</strong> Luxury lodges, mid-range hotels, guesthouses</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rwanda-green mr-2" />
                          <h3 className="font-medium">Lake Kivu</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best Areas:</strong> Gisenyi/Rubavu, Kibuye/Karongi</li>
                          <li><strong>Pros:</strong> Lake views, beaches, water activities</li>
                          <li><strong>Perfect For:</strong> Relaxation, post-trekking recovery</li>
                          <li><strong>Types:</strong> Lake resorts, boutique hotels, guesthouses</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-rwanda-green mr-2" />
                          <h3 className="font-medium">Nyungwe Forest Area</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Best Areas:</strong> Within or near the forest</li>
                          <li><strong>Pros:</strong> Immersive forest experience, chimp trekking</li>
                          <li><strong>Perfect For:</strong> Nature lovers, bird watchers</li>
                          <li><strong>Types:</strong> Luxury forest lodges, tea plantation lodges</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="bg-yellow-50 border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-800" />
                    <AlertTitle className="text-yellow-800">Booking Advice</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      During high season (June-September, December-February), book accommodations at least 3-4 months in advance, especially for properties near national parks and for luxury lodges.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Accommodation Tips</CardTitle>
                <CardDescription>Making the most of your stay</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <h3 className="font-medium mb-2">Money-Saving Tips</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Book directly with hotels when possible for better rates</li>
                        <li>• Consider package deals that include transport and activities</li>
                        <li>• Travel during shoulder seasons for lower rates (Mar-May, Oct-Nov)</li>
                        <li>• Many hotels offer discounts for stays of 3+ nights</li>
                        <li>• Some accommodations include meals, reducing overall food costs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <h3 className="font-medium mb-2">What to Expect</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Power outages can occur; many properties have generators</li>
                        <li>• WiFi quality varies, even in higher-end properties</li>
                        <li>• Luggage porters are common at mid-range and luxury properties</li>
                        <li>• Tipping housekeeping staff ($1-2 per day) is appreciated</li>
                        <li>• Many hotels can arrange airport transfers (for a fee)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-rwanda-green/10 p-4 rounded-md border border-rwanda-green/20">
                    <h3 className="font-medium mb-2 text-rwanda-green">Eco-Friendly Accommodations</h3>
                    <p className="text-sm mb-2">
                      Rwanda emphasizes sustainable tourism, with many lodges committed to environmental conservation and community support.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Bisate Lodge:</strong> Luxury eco-lodge with reforestation program</li>
                      <li>• <strong>Wilderness Safaris Properties:</strong> Focus on conservation and community projects</li>
                      <li>• <strong>Red Rocks Rwanda:</strong> Community-based accommodation with cultural programs</li>
                      <li>• <strong>Kingfisher Journeys:</strong> Eco-friendly lakeside accommodations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Costs & Budgeting Tab */}
          <TabsContent value="costs" className="pt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Cost Overview</CardTitle>
                <CardDescription>Understanding expenses in Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md border border-blue-100 flex flex-col items-center justify-center text-center">
                      <Banknote className="h-8 w-8 text-blue-600 mb-2" />
                      <h3 className="font-medium text-blue-800">Budget Traveler</h3>
                      <p className="text-2xl font-bold text-blue-900 my-2">$50-100<span className="text-sm">/day</span></p>
                      <p className="text-xs text-blue-700">Hostels, local food, public transport</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-md border border-green-100 flex flex-col items-center justify-center text-center">
                      <Banknote className="h-8 w-8 text-green-600 mb-2" />
                      <h3 className="font-medium text-green-800">Mid-Range Traveler</h3>
                      <p className="text-2xl font-bold text-green-900 my-2">$150-250<span className="text-sm">/day</span></p>
                      <p className="text-xs text-green-700">Mid-range hotels, varied dining, guided tours</p>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-md border border-purple-100 flex flex-col items-center justify-center text-center">
                      <Banknote className="h-8 w-8 text-purple-600 mb-2" />
                      <h3 className="font-medium text-purple-800">Luxury Traveler</h3>
                      <p className="text-2xl font-bold text-purple-900 my-2">$350+<span className="text-sm">/day</span></p>
                      <p className="text-xs text-purple-700">Luxury lodges, fine dining, private tours</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                    <h3 className="font-medium text-yellow-800 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Special Experiences Cost Extra
                    </h3>
                    <p className="text-sm text-yellow-700 mt-2">
                      The ranges above do not include signature activities like gorilla trekking ($1,500 permit) or golden monkey trekking ($100 permit), which significantly increase daily costs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Detailed Cost Breakdown</CardTitle>
                <CardDescription>Average prices for common expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Hotel className="h-5 w-5 mr-2 text-rwanda-green" />
                      Accommodation
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Type</th>
                            <th className="py-2 px-4 border-b text-left">Price Range</th>
                            <th className="py-2 px-4 border-b text-left">What to Expect</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Hostel/Budget Guesthouse</td>
                            <td className="py-2 px-4 border-b">$15-40</td>
                            <td className="py-2 px-4 border-b">Basic room, sometimes shared bathroom, simple breakfast</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Mid-range Hotel</td>
                            <td className="py-2 px-4 border-b">$80-150</td>
                            <td className="py-2 px-4 border-b">Clean private rooms, en-suite, breakfast, WiFi</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Boutique Hotel</td>
                            <td className="py-2 px-4 border-b">$150-250</td>
                            <td className="py-2 px-4 border-b">Stylish rooms, quality amenities, restaurant, service</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Luxury Lodge/Hotel</td>
                            <td className="py-2 px-4 border-b">$250-800+</td>
                            <td className="py-2 px-4 border-b">High-end amenities, exceptional service, often all-inclusive</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Utensils className="h-5 w-5 mr-2 text-rwanda-green" />
                      Food & Dining
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Type</th>
                            <th className="py-2 px-4 border-b text-left">Price Range</th>
                            <th className="py-2 px-4 border-b text-left">Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Street Food/Local Eatery</td>
                            <td className="py-2 px-4 border-b">$2-5</td>
                            <td className="py-2 px-4 border-b">Brochettes (meat skewers), plantains, beans, rice</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Casual Restaurant</td>
                            <td className="py-2 px-4 border-b">$10-20</td>
                            <td className="py-2 px-4 border-b">Local dishes, basic international cuisine</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Mid-range Restaurant</td>
                            <td className="py-2 px-4 border-b">$20-40</td>
                            <td className="py-2 px-4 border-b">Quality local and international dishes</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Fine Dining</td>
                            <td className="py-2 px-4 border-b">$40-100+</td>
                            <td className="py-2 px-4 border-b">Gourmet experiences, often in high-end hotels</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Coffee & Drinks</td>
                            <td className="py-2 px-4 border-b">$1-7</td>
                            <td className="py-2 px-4 border-b">Local coffee, beer, soft drinks</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 flex items-center">
                      <Landmark className="h-5 w-5 mr-2 text-rwanda-green" />
                      Activities & Attractions
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 border-b text-left">Activity</th>
                            <th className="py-2 px-4 border-b text-left">Cost</th>
                            <th className="py-2 px-4 border-b text-left">Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-2 px-4 border-b">Gorilla Trekking Permit</td>
                            <td className="py-2 px-4 border-b">$1,500</td>
                            <td className="py-2 px-4 border-b">One-time fee, book months in advance</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Golden Monkey Trekking</td>
                            <td className="py-2 px-4 border-b">$100</td>
                            <td className="py-2 px-4 border-b">Alternative wildlife experience</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Chimpanzee Trekking</td>
                            <td className="py-2 px-4 border-b">$90</td>
                            <td className="py-2 px-4 border-b">In Nyungwe Forest</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Safari in Akagera NP</td>
                            <td className="py-2 px-4 border-b">$40 (entry) + $50-200 (vehicle)</td>
                            <td className="py-2 px-4 border-b">Additional cost for guide/vehicle</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Canopy Walk (Nyungwe)</td>
                            <td className="py-2 px-4 border-b">$60</td>
                            <td className="py-2 px-4 border-b">Plus park entry fee</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Museum Entry</td>
                            <td className="py-2 px-4 border-b">$10-20</td>
                            <td className="py-2 px-4 border-b">Genocide Memorial is free (donations welcome)</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Boat Trip (Lake Kivu)</td>
                            <td className="py-2 px-4 border-b">$25-100</td>
                            <td className="py-2 px-4 border-b">Depends on duration and type of boat</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="py-2 px-4 border-b">Cultural Village Visit</td>
                            <td className="py-2 px-4 border-b">$20-40</td>
                            <td className="py-2 px-4 border-b">Includes demonstrations and performances</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4 border-b">Coffee/Tea Plantation Tour</td>
                            <td className="py-2 px-4 border-b">$30-80</td>
                            <td className="py-2 px-4 border-b">Often includes tasting experience</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Money & Payment Tips</CardTitle>
                <CardDescription>Managing your finances in Rwanda</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium mb-3 flex items-center">
                        <CreditCard className="h-5 w-5 mr-2 text-rwanda-green" />
                        Currency & Payment Methods
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <ul className="space-y-2 text-sm">
                          <li><strong>Local Currency:</strong> Rwandan Franc (RWF)</li>
                          <li><strong>Exchange Rate:</strong> ~1 USD = 1,200 RWF (check current rates)</li>
                          <li><strong>Credit Cards:</strong> Accepted at hotels, restaurants, and larger establishments in cities</li>
                          <li><strong>Cards Accepted:</strong> Visa and Mastercard widely accepted; American Express less so</li>
                          <li><strong>Mobile Money:</strong> MTN Mobile Money and Airtel Money are widely used</li>
                          <li><strong>ATMs:</strong> Available in major cities, especially Kigali</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3 flex items-center">
                        <Info className="h-5 w-5 mr-2 text-rwanda-green" />
                        Money Tips
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <ul className="space-y-2 text-sm">
                          <li>• Bring USD or EUR for exchanging; clean, newer bills preferred</li>
                          <li>• Always have some cash for markets, small establishments, and rural areas</li>
                          <li>• Inform your bank of travel plans to avoid card blocks</li>
                          <li>• ATMs sometimes run out of cash, especially on weekends</li>
                          <li>• Major hotels often accept payment in USD</li>
                          <li>• Tipping (~10%) is appreciated but not always expected</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-5 w-5 text-blue-800" />
                    <AlertTitle className="text-blue-800">Budget Saving Tips</AlertTitle>
                    <AlertDescription className="text-blue-700">
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Travel during shoulder seasons for lower accommodation rates</li>
                        <li>Consider package tours that bundle activities and transportation</li>
                        <li>Stay in guesthouses or Airbnbs with kitchen access to prepare some meals</li>
                        <li>Use local transportation when safe and practical</li>
                        <li>Purchase crafts and souvenirs from cooperatives rather than high-end shops</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TravelTips;
