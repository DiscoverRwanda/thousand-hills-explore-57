
import React, { useState } from 'react';
import { MapPin, Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const attractions = [
  {
    id: 1,
    name: 'Volcanoes National Park',
    description: 'Home to endangered mountain gorillas and golden monkeys, offering trekking experiences in a stunning volcanic landscape.',
    image: 'https://images.unsplash.com/photo-1598978575311-22fb84145728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Northern Province',
    category: 'natural',
    tags: ['wildlife', 'hiking', 'gorillas'],
    featured: true
  },
  {
    id: 2,
    name: 'Nyungwe Forest National Park',
    description: 'Ancient rainforest with incredible biodiversity, canopy walkway, and chimpanzee trekking opportunities.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Southern Province',
    category: 'natural',
    tags: ['wildlife', 'hiking', 'canopy walk'],
    featured: true
  },
  {
    id: 3,
    name: 'Lake Kivu',
    description: 'One of Africa\'s Great Lakes offering beautiful beaches, boat tours, and water sports in a serene setting.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Western Province',
    category: 'natural',
    tags: ['water', 'beaches', 'relaxation'],
    featured: true
  },
  {
    id: 4,
    name: 'Kigali Genocide Memorial',
    description: 'A place of remembrance and learning about Rwanda\'s tragic history and remarkable journey of reconciliation.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali',
    category: 'cultural',
    tags: ['history', 'education', 'memorial'],
    featured: false
  },
  {
    id: 5,
    name: 'Ethnographic Museum',
    description: 'Explore Rwanda\'s cultural heritage through traditional artifacts, art, and historical exhibits.',
    image: 'https://images.unsplash.com/photo-1516939977171-9181a2dc1e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Huye',
    category: 'cultural',
    tags: ['museum', 'culture', 'history'],
    featured: false
  },
  {
    id: 6,
    name: 'Akagera National Park',
    description: 'Savannah park with lions, elephants, giraffes and hippos in a stunning landscape of lakes and valleys.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Eastern Province',
    category: 'natural',
    tags: ['wildlife', 'safari', 'big five'],
    featured: true
  },
  {
    id: 7,
    name: 'Kimironko Market',
    description: 'Vibrant local market offering colorful textiles, crafts, fresh produce, and an authentic shopping experience.',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali',
    category: 'urban',
    tags: ['shopping', 'local experience', 'crafts'],
    featured: false
  },
  {
    id: 8,
    name: 'King\'s Palace Museum',
    description: 'Historical royal residence showcasing traditional Rwandan monarchy and cultural practices.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Southern Province',
    category: 'cultural',
    tags: ['history', 'museum', 'royal'],
    featured: false
  },
  {
    id: 9,
    name: 'Congo Nile Trail',
    description: 'Scenic hiking and biking route along Lake Kivu, passing through rural villages and beautiful landscapes.',
    image: 'https://images.unsplash.com/photo-1508107506371-1c56ff83192f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Western Province',
    category: 'natural',
    tags: ['hiking', 'biking', 'scenery'],
    featured: false
  }
];

const Attractions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const uniqueLocations = [...new Set(attractions.map(item => item.location))];
  const categories = [
    { value: 'natural', label: 'Natural Wonders' },
    { value: 'cultural', label: 'Cultural Sites' },
    { value: 'urban', label: 'Urban Experiences' }
  ];
  
  const filteredAttractions = attractions.filter(attraction => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(attraction.category);
    
    // Location filter
    const matchesLocation = selectedLocations.length === 0 || 
      selectedLocations.includes(attraction.location);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
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
    setSelectedCategories([]);
    setSelectedLocations([]);
  };

  return (
    <div>
      <div className="bg-attractions-pattern bg-cover bg-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Rwanda's Attractions</h1>
            <p className="text-xl mb-8">
              Explore Rwanda's stunning natural wonders, rich cultural heritage, and vibrant urban experiences.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search attractions..."
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
                {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
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
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.value} className="flex items-center">
                        <Checkbox
                          id={`category-${category.value}`}
                          checked={selectedCategories.includes(category.value)}
                          onCheckedChange={() => toggleCategory(category.value)}
                          className="text-rwanda-green"
                        />
                        <label 
                          htmlFor={`category-${category.value}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Locations</h3>
                  <div className="space-y-2">
                    {uniqueLocations.map((location) => (
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
              </div>
            </div>
          </div>
          
          {/* Mobile filters button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">
                Showing {filteredAttractions.length} {filteredAttractions.length === 1 ? 'attraction' : 'attractions'}
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
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.value} className="flex items-center">
                          <Checkbox
                            id={`mobile-category-${category.value}`}
                            checked={selectedCategories.includes(category.value)}
                            onCheckedChange={() => toggleCategory(category.value)}
                            className="text-rwanda-green"
                          />
                          <label 
                            htmlFor={`mobile-category-${category.value}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {category.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Locations</h3>
                    <div className="space-y-2">
                      {uniqueLocations.map((location) => (
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
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="featured" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Featured
                </TabsTrigger>
                <TabsTrigger 
                  value="natural" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Natural
                </TabsTrigger>
                <TabsTrigger 
                  value="cultural" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Cultural
                </TabsTrigger>
                <TabsTrigger 
                  value="urban" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Urban
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredAttractions.map((attraction) => (
                    <AttractionCard key={attraction.id} attraction={attraction} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="featured" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredAttractions
                    .filter(a => a.featured)
                    .map((attraction) => (
                      <AttractionCard key={attraction.id} attraction={attraction} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="natural" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredAttractions
                    .filter(a => a.category === 'natural')
                    .map((attraction) => (
                      <AttractionCard key={attraction.id} attraction={attraction} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="cultural" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredAttractions
                    .filter(a => a.category === 'cultural')
                    .map((attraction) => (
                      <AttractionCard key={attraction.id} attraction={attraction} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="urban" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredAttractions
                    .filter(a => a.category === 'urban')
                    .map((attraction) => (
                      <AttractionCard key={attraction.id} attraction={attraction} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredAttractions.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">No attractions found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AttractionCardProps {
  attraction: typeof attractions[0];
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow attractions-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 bg-rwanda-green text-white px-3 py-1 text-sm font-medium">
          {attraction.category === 'natural' ? 'Natural Wonder' : 
           attraction.category === 'cultural' ? 'Cultural Site' : 'Urban Experience'}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{attraction.name}</h3>
          {attraction.featured && (
            <span className="bg-rwanda-yellow/20 text-rwanda-darkGreen text-xs font-medium px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{attraction.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{attraction.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {attraction.tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/attractions/${attraction.id}`} 
            className="text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
          >
            View Details
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-rwanda-green border-rwanda-green hover:bg-rwanda-green/10"
          >
            Add to Itinerary
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Attractions;
