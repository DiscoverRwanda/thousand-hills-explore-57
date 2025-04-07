
import React, { useState } from 'react';
import { Search, Filter, X, MapPin, Star, Wifi, Utensils, Car, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';

const accommodations = [
  {
    id: 1,
    name: 'Kigali Marriott Hotel',
    description: 'Luxury hotel in the heart of Kigali offering 5-star amenities, a pool, spa, and multiple dining options.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Downtown, Kigali',
    type: 'hotel',
    priceRange: 4,
    rating: 4.7,
    amenities: ['wifi', 'restaurant', 'pool', 'spa', 'gym', 'parking', 'ac', 'tv'],
    featured: true
  },
  {
    id: 2,
    name: 'Volcanoes Bwindi Lodge',
    description: 'Eco-friendly lodge near the entrance to Volcanoes National Park with stunning mountain views and gorilla trekking opportunities.',
    image: 'https://images.unsplash.com/photo-1566073771018-b0acfbdb4b82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Musanze, Northern Province',
    type: 'lodge',
    priceRange: 4,
    rating: 4.9,
    amenities: ['wifi', 'restaurant', 'guided tours', 'parking', 'ac'],
    featured: true
  },
  {
    id: 3,
    name: 'Lake Kivu Serena Hotel',
    description: 'Beachfront resort on the shores of Lake Kivu with water sports, gardens, and panoramic lake views.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Rubavu',
    type: 'hotel',
    priceRange: 3,
    rating: 4.6,
    amenities: ['wifi', 'restaurant', 'pool', 'beach access', 'parking', 'ac', 'tv'],
    featured: true
  },
  {
    id: 4,
    name: 'Nyungwe Forest Lodge',
    description: 'Contemporary lodge set within a working tea plantation on the edge of Nyungwe Forest National Park.',
    image: 'https://images.unsplash.com/photo-1583418607937-cfbe965c3a19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Nyungwe Forest, Southern Province',
    type: 'lodge',
    priceRange: 4,
    rating: 4.8,
    amenities: ['wifi', 'restaurant', 'guided tours', 'tea plantation', 'parking', 'ac'],
    featured: false
  },
  {
    id: 5,
    name: 'Kigali Guesthouse',
    description: 'Affordable accommodation with a homely atmosphere and traditional Rwandan hospitality in a quiet neighborhood.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kacyiru, Kigali',
    type: 'guesthouse',
    priceRange: 2,
    rating: 4.3,
    amenities: ['wifi', 'breakfast', 'parking', 'tv'],
    featured: false
  },
  {
    id: 6,
    name: 'Akagera Safari Lodge',
    description: 'Safari-style accommodations on the border of Akagera National Park with wildlife viewing and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1507934582144-bfa86c9c156e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Akagera National Park, Eastern Province',
    type: 'lodge',
    priceRange: 3,
    rating: 4.5,
    amenities: ['wifi', 'restaurant', 'safari tours', 'outdoor pool', 'parking'],
    featured: false
  },
  {
    id: 7,
    name: 'The Bishop\'s House',
    description: 'Boutique hotel in a renovated historic residence with beautiful gardens and colonial charm.',
    image: 'https://images.unsplash.com/photo-1574072070399-15ec3c084cf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kiyovu, Kigali',
    type: 'boutique',
    priceRange: 3,
    rating: 4.7,
    amenities: ['wifi', 'restaurant', 'garden', 'parking', 'ac', 'tv'],
    featured: false
  },
  {
    id: 8,
    name: 'Gisenyi Lakeside Inn',
    description: 'Charming and affordable guesthouse with direct access to Lake Kivu and comfortable rooms.',
    image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Rubavu',
    type: 'guesthouse',
    priceRange: 2,
    rating: 4.2,
    amenities: ['wifi', 'restaurant', 'beach access', 'parking', 'tv'],
    featured: false
  }
];

// Accommodation types
const accommodationTypes = [
  { value: 'hotel', label: 'Hotels' },
  { value: 'lodge', label: 'Lodges' },
  { value: 'guesthouse', label: 'Guesthouses' },
  { value: 'boutique', label: 'Boutique Hotels' }
];

// Amenities
const amenityOptions = [
  { value: 'wifi', label: 'Wi-Fi', icon: Wifi },
  { value: 'restaurant', label: 'Restaurant', icon: Utensils },
  { value: 'parking', label: 'Parking', icon: Car },
  { value: 'tv', label: 'TV', icon: Tv }
];

// Locations
const locations = [...new Set(accommodations.map(a => a.location))];

const Stay: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([1, 4]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type)
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };
  
  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedTypes([]);
    setSelectedLocations([]);
    setSelectedAmenities([]);
    setPriceRange([1, 4]);
  };

  const filteredAccommodations = accommodations.filter(accommodation => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      accommodation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accommodation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accommodation.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Type filter
    const matchesType = selectedTypes.length === 0 || 
      selectedTypes.includes(accommodation.type);
    
    // Location filter
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.includes(accommodation.location);
    
    // Amenities filter
    const matchesAmenities = selectedAmenities.length === 0 || 
      selectedAmenities.every(amenity => accommodation.amenities.includes(amenity));
    
    // Price range filter
    const matchesPrice = accommodation.priceRange >= priceRange[0] && accommodation.priceRange <= priceRange[1];
    
    return matchesSearch && matchesType && matchesLocation && matchesAmenities && matchesPrice;
  });

  return (
    <div>
      <div className="bg-gray-900 bg-cover bg-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Places to Stay in Rwanda</h1>
            <p className="text-xl mb-8">
              Find the perfect accommodation for your Rwanda adventure, from luxury hotels to cozy guesthouses.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search hotels, lodges, or locations..."
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
                {(selectedTypes.length > 0 || selectedLocations.length > 0 || selectedAmenities.length > 0 || priceRange[0] !== 1 || priceRange[1] !== 4) && (
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
                  <h3 className="font-medium mb-3">Accommodation Type</h3>
                  <div className="space-y-2">
                    {accommodationTypes.map((type) => (
                      <div key={type.value} className="flex items-center">
                        <Checkbox
                          id={`type-${type.value}`}
                          checked={selectedTypes.includes(type.value)}
                          onCheckedChange={() => toggleType(type.value)}
                          className="text-rwanda-green"
                        />
                        <label 
                          htmlFor={`type-${type.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {type.label}
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
                  <h3 className="font-medium mb-3">Amenities</h3>
                  <div className="space-y-2">
                    {amenityOptions.map((amenity) => (
                      <div key={amenity.value} className="flex items-center">
                        <Checkbox
                          id={`amenity-${amenity.value}`}
                          checked={selectedAmenities.includes(amenity.value)}
                          onCheckedChange={() => toggleAmenity(amenity.value)}
                          className="text-rwanda-green"
                        />
                        <label 
                          htmlFor={`amenity-${amenity.value}`}
                          className="ml-2 text-sm text-gray-700 flex items-center"
                        >
                          <amenity.icon className="h-4 w-4 mr-1" />
                          {amenity.label}
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
                Showing {filteredAccommodations.length} {filteredAccommodations.length === 1 ? 'property' : 'properties'}
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
                    <h3 className="font-medium mb-3">Accommodation Type</h3>
                    <div className="space-y-2">
                      {accommodationTypes.map((type) => (
                        <div key={type.value} className="flex items-center">
                          <Checkbox
                            id={`mobile-type-${type.value}`}
                            checked={selectedTypes.includes(type.value)}
                            onCheckedChange={() => toggleType(type.value)}
                            className="text-rwanda-green"
                          />
                          <label 
                            htmlFor={`mobile-type-${type.value}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {type.label}
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
                    <h3 className="font-medium mb-3">Amenities</h3>
                    <div className="space-y-2">
                      {amenityOptions.map((amenity) => (
                        <div key={amenity.value} className="flex items-center">
                          <Checkbox
                            id={`mobile-amenity-${amenity.value}`}
                            checked={selectedAmenities.includes(amenity.value)}
                            onCheckedChange={() => toggleAmenity(amenity.value)}
                            className="text-rwanda-green"
                          />
                          <label 
                            htmlFor={`mobile-amenity-${amenity.value}`}
                            className="ml-2 text-sm text-gray-700 flex items-center"
                          >
                            <amenity.icon className="h-4 w-4 mr-1" />
                            {amenity.label}
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
                  All Accommodations
                </TabsTrigger>
                <TabsTrigger 
                  value="hotels" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Hotels
                </TabsTrigger>
                <TabsTrigger 
                  value="lodges" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Lodges
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
                  {filteredAccommodations.map((accommodation) => (
                    <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                  ))}
                </div>
                
                {filteredAccommodations.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No accommodations found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="hotels" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredAccommodations
                    .filter(a => a.type === 'hotel' || a.type === 'boutique')
                    .map((accommodation) => (
                      <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                    ))}
                </div>
                
                {filteredAccommodations.filter(a => a.type === 'hotel' || a.type === 'boutique').length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No hotels found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="lodges" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredAccommodations
                    .filter(a => a.type === 'lodge')
                    .map((accommodation) => (
                      <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                    ))}
                </div>
                
                {filteredAccommodations.filter(a => a.type === 'lodge').length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No lodges found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="featured" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredAccommodations
                    .filter(a => a.featured)
                    .map((accommodation) => (
                      <AccommodationCard key={accommodation.id} accommodation={accommodation} />
                    ))}
                </div>
                
                {filteredAccommodations.filter(a => a.featured).length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No featured accommodations found</h3>
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

interface AccommodationCardProps {
  accommodation: typeof accommodations[0];
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  // Convert price level to $ symbols
  const priceSymbols = Array(accommodation.priceRange).fill('$').join('');
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={accommodation.image} 
          alt={accommodation.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{accommodation.name}</h3>
          {accommodation.featured && (
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
                className={`h-4 w-4 ${i < Math.floor(accommodation.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{accommodation.rating}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-sm text-gray-600">{priceSymbols}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{accommodation.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{accommodation.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.amenities.slice(0, 4).map((amenity, index) => {
            const AmenityIcon = amenityOptions.find(a => a.value === amenity)?.icon || null;
            return (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded flex items-center"
              >
                {AmenityIcon && <AmenityIcon className="h-3 w-3 mr-1" />}
                {amenityOptions.find(a => a.value === amenity)?.label || amenity}
              </span>
            );
          })}
          {accommodation.amenities.length > 4 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              +{accommodation.amenities.length - 4} more
            </span>
          )}
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <Link 
            to={`/stay/${accommodation.id}`} 
            className="text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
          >
            View Details
          </Link>
          <Button 
            className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Stay;
