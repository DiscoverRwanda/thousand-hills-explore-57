
import React, { useState } from 'react';
import { Search, Filter, X, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';

const restaurants = [
  {
    id: 1,
    name: 'Heaven Restaurant & Boutique Hotel',
    description: 'Farm-to-table cuisine featuring locally sourced ingredients in a beautiful garden setting.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kiyovu, Kigali',
    cuisine: 'international',
    priceRange: 3,
    rating: 4.7,
    featured: true
  },
  {
    id: 2,
    name: 'Poivre Noir',
    description: 'Elegant French cuisine with Rwandan influences, offering a sophisticated dining experience.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kacyiru, Kigali',
    cuisine: 'french',
    priceRange: 4,
    rating: 4.5,
    featured: true
  },
  {
    id: 3,
    name: 'Inzora Rooftop Café',
    description: 'Specialty coffee shop serving Rwandan beans with panoramic views of Kigali.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kacyiru, Kigali',
    cuisine: 'cafe',
    priceRange: 2,
    rating: 4.6,
    featured: false
  },
  {
    id: 4,
    name: 'Ubumwe Grande Restaurant',
    description: 'Upscale dining with a mix of international dishes and traditional Rwandan specialties.',
    image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Downtown, Kigali',
    cuisine: 'rwandan',
    priceRange: 3,
    rating: 4.4,
    featured: false
  },
  {
    id: 5,
    name: 'Kivu Lake View Restaurant',
    description: 'Lakeside dining experience with fresh fish and stunning views of Lake Kivu.',
    image: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Rubavu',
    cuisine: 'seafood',
    priceRange: 3,
    rating: 4.8,
    featured: true
  },
  {
    id: 6,
    name: 'Fasty\'s Bar and Restaurant',
    description: 'Casual spot for Rwandan and East African comfort food at reasonable prices.',
    image: 'https://images.unsplash.com/photo-1570560258879-af7f8e9da8b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Nyamirambo, Kigali',
    cuisine: 'rwandan',
    priceRange: 1,
    rating: 4.3,
    featured: false
  },
  {
    id: 7,
    name: 'The Bistro',
    description: 'Mediterranean-inspired menu with a wide selection of wines in an elegant setting.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kimihurura, Kigali',
    cuisine: 'mediterranean',
    priceRange: 3,
    rating: 4.5,
    featured: false
  },
  {
    id: 8,
    name: 'Flame Café',
    description: 'Cozy café serving specialty Rwandan coffee, pastries, and light meals.',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Remera, Kigali',
    cuisine: 'cafe',
    priceRange: 2,
    rating: 4.4,
    featured: false
  }
];

// Cuisine categories
const cuisineCategories = [
  { value: 'rwandan', label: 'Rwandan' },
  { value: 'international', label: 'International' },
  { value: 'french', label: 'French' },
  { value: 'cafe', label: 'Café & Bakery' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'seafood', label: 'Seafood' }
];

// Locations
const locations = [...new Set(restaurants.map(r => r.location))];

const Dining: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([1, 4]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines(prev => 
      prev.includes(cuisine)
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    );
  };
  
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCuisines([]);
    setSelectedLocations([]);
    setPriceRange([1, 4]);
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Cuisine filter
    const matchesCuisine = selectedCuisines.length === 0 || 
      selectedCuisines.includes(restaurant.cuisine);
    
    // Location filter
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.includes(restaurant.location);
    
    // Price range filter
    const matchesPrice = restaurant.priceRange >= priceRange[0] && restaurant.priceRange <= priceRange[1];
    
    return matchesSearch && matchesCuisine && matchesLocation && matchesPrice;
  });

  return (
    <div>
      <div className="bg-dining-pattern bg-cover bg-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dining in Rwanda</h1>
            <p className="text-xl mb-8">
              Experience a blend of traditional Rwandan flavors and international cuisine at the country's best restaurants and cafés.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search restaurants, cafés, or locations..."
                className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/60"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters for desktop */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 sticky top-20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                {(selectedCuisines.length > 0 || selectedLocations.length > 0 || priceRange[0] !== 1 || priceRange[1] !== 4) && (
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 hover:text-gray-700 p-0 h-auto"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Cuisine</h3>
                  <div className="space-y-2">
                    {cuisineCategories.map((cuisine) => (
                      <div key={cuisine.value} className="flex items-center">
                        <Checkbox
                          id={`cuisine-${cuisine.value}`}
                          checked={selectedCuisines.includes(cuisine.value)}
                          onCheckedChange={() => toggleCuisine(cuisine.value)}
                          className="text-rwanda-green"
                        />
                        <label 
                          htmlFor={`cuisine-${cuisine.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {cuisine.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center">
                        <Checkbox
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={() => toggleLocation(location)}
                          className="text-rwanda-green"
                        />
                        <label 
                          htmlFor={`location-${location}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[1, 4]}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={1}
                    max={4}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>$</span>
                    <span>$$</span>
                    <span>$$$</span>
                    <span>$$$$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile filters button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">
                Showing {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'restaurant' : 'restaurants'}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Mobile filters modal */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
              <div className="bg-white w-4/5 max-w-md h-full overflow-y-auto">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Filters</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-transparent"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Cuisine</h3>
                    <div className="space-y-2">
                      {cuisineCategories.map((cuisine) => (
                        <div key={cuisine.value} className="flex items-center">
                          <Checkbox
                            id={`mobile-cuisine-${cuisine.value}`}
                            checked={selectedCuisines.includes(cuisine.value)}
                            onCheckedChange={() => toggleCuisine(cuisine.value)}
                            className="text-rwanda-green"
                          />
                          <label 
                            htmlFor={`mobile-cuisine-${cuisine.value}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {cuisine.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Location</h3>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <div key={location} className="flex items-center">
                          <Checkbox
                            id={`mobile-location-${location}`}
                            checked={selectedLocations.includes(location)}
                            onCheckedChange={() => toggleLocation(location)}
                            className="text-rwanda-green"
                          />
                          <label 
                            htmlFor={`mobile-location-${location}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {location}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <Slider
                      defaultValue={[1, 4]}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={1}
                      max={4}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>$</span>
                      <span>$$</span>
                      <span>$$$</span>
                      <span>$$$$</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t p-4 flex gap-3">
                  <Button 
                    variant="outline" 
                    className="w-1/2"
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                  <Button 
                    className="w-1/2 bg-rwanda-green hover:bg-rwanda-darkGreen"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Main content */}
          <div className="lg:w-3/4">
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="all" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  All Dining
                </TabsTrigger>
                <TabsTrigger 
                  value="restaurants" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Restaurants
                </TabsTrigger>
                <TabsTrigger 
                  value="cafes" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Cafés
                </TabsTrigger>
                <TabsTrigger 
                  value="featured" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Featured
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                  ))}
                </div>
                
                {filteredRestaurants.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No dining options found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="restaurants" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredRestaurants
                    .filter(r => r.cuisine !== 'cafe')
                    .map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
                
                {filteredRestaurants.filter(r => r.cuisine !== 'cafe').length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No restaurants found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="cafes" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredRestaurants
                    .filter(r => r.cuisine === 'cafe')
                    .map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
                
                {filteredRestaurants.filter(r => r.cuisine === 'cafe').length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No cafés found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="featured" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredRestaurants
                    .filter(r => r.featured)
                    .map((restaurant) => (
                      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
                
                {filteredRestaurants.filter(r => r.featured).length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No featured dining options found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

interface RestaurantCardProps {
  restaurant: typeof restaurants[0];
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  // Convert price level to $ symbols
  const priceSymbols = Array(restaurant.priceRange).fill('$').join('');
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{restaurant.name}</h3>
          {restaurant.featured && (
            <span className="bg-rwanda-yellow/20 text-rwanda-darkGreen text-xs font-medium px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex mr-3">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(restaurant.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{restaurant.rating}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{priceSymbols}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{restaurant.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{restaurant.description}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <Link 
            to={`/dining/${restaurant.id}`} 
            className="text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
          >
            View Details
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-rwanda-green border-rwanda-green hover:bg-rwanda-green/10"
          >
            Reserve a Table
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dining;
