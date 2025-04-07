
import React, { useState, useMemo } from 'react';
import { Calendar, Search, Filter, X, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from 'react-router-dom';
import { format, parseISO, isBefore, isAfter, isSameMonth } from 'date-fns';

// Sample events data - in a real app, this would come from an API
const events = [
  {
    id: 1,
    name: 'Kwita Izina - Gorilla Naming Ceremony',
    description: 'Annual ceremony celebrating Rwanda\'s gorilla conservation efforts where newly born baby gorillas are named in a colorful cultural event.',
    image: 'https://images.unsplash.com/photo-1516571748332-f19761b5c880?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kinigi, Northern Province',
    date: '2024-09-01T09:00:00',
    endDate: '2024-09-01T17:00:00',
    category: 'cultural',
    featured: true
  },
  {
    id: 2,
    name: 'Kigali Jazz Junction',
    description: 'A monthly jazz event featuring local and international artists performing in Rwanda\'s capital.',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali Convention Centre, Kigali',
    date: '2024-07-26T19:00:00',
    endDate: '2024-07-26T23:00:00',
    category: 'music',
    featured: true
  },
  {
    id: 3,
    name: 'Umuganura Festival',
    description: 'Traditional harvest thanksgiving festival celebrating Rwanda\'s agricultural achievements and cultural unity.',
    image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Nyanza, Southern Province',
    date: '2024-08-05T10:00:00',
    endDate: '2024-08-05T18:00:00',
    category: 'cultural',
    featured: true
  },
  {
    id: 4,
    name: 'Rwanda Film Festival',
    description: 'Annual event showcasing the best of African and international cinema, with screenings across Kigali.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Various locations, Kigali',
    date: '2024-10-10T08:00:00',
    endDate: '2024-10-17T23:00:00',
    category: 'arts',
    featured: false
  },
  {
    id: 5,
    name: 'Kigali International Peace Marathon',
    description: 'A running event promoting peace and reconciliation that attracts both local and international participants.',
    image: 'https://images.unsplash.com/photo-1576187689482-9be32665ca79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Amahoro Stadium, Kigali',
    date: '2024-06-16T06:00:00',
    endDate: '2024-06-16T13:00:00',
    category: 'sports',
    featured: false
  },
  {
    id: 6,
    name: 'Rwanda Cultural Fashion Show',
    description: 'Showcasing traditional and contemporary Rwandan fashion designs and textile arts.',
    image: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali Conference Center, Kigali',
    date: '2024-09-28T18:30:00',
    endDate: '2024-09-28T22:00:00',
    category: 'arts',
    featured: false
  },
  {
    id: 7,
    name: 'Rwanda Coffee Festival',
    description: 'Celebrating Rwanda\'s coffee culture with tastings, competitions, and workshops focusing on Rwanda\'s premium coffee industry.',
    image: 'https://images.unsplash.com/photo-1511081692775-05ccc75c7ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali Convention Centre, Kigali',
    date: '2024-08-12T09:00:00',
    endDate: '2024-08-13T17:00:00',
    category: 'food',
    featured: false
  },
  {
    id: 8,
    name: 'East African Business Forum',
    description: 'Regional business summit bringing together entrepreneurs, investors, and policy makers from across East Africa.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Radisson Blu Hotel, Kigali',
    date: '2024-11-05T08:00:00',
    endDate: '2024-11-07T17:00:00',
    category: 'business',
    featured: false
  }
];

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const categories = [
    { value: 'cultural', label: 'Cultural Events' },
    { value: 'music', label: 'Music & Concerts' },
    { value: 'sports', label: 'Sports Events' },
    { value: 'arts', label: 'Arts & Film' },
    { value: 'food', label: 'Food & Drink' },
    { value: 'business', label: 'Business & Conferences' }
  ];
  
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedMonth("all");
  };

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Search term filter
      const matchesSearch = searchTerm === "" || 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(event.category);
      
      // Month filter
      const matchesMonth = selectedMonth === "all" || 
        (event.date && isSameMonth(parseISO(event.date), new Date(2024, parseInt(selectedMonth) - 1, 1)));
      
      return matchesSearch && matchesCategory && matchesMonth;
    });
  }, [searchTerm, selectedCategories, selectedMonth]);

  // Sort events by date (upcoming first)
  const sortedEvents = useMemo(() => {
    return [...filteredEvents].sort((a, b) => {
      const dateA = parseISO(a.date);
      const dateB = parseISO(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }, [filteredEvents]);

  // Separate upcoming and past events
  const today = new Date();
  const upcomingEvents = sortedEvents.filter(event => isAfter(parseISO(event.date), today));
  const pastEvents = sortedEvents.filter(event => isBefore(parseISO(event.date), today));

  return (
    <div>
      <div className="bg-events-pattern bg-cover bg-center py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events in Rwanda</h1>
            <p className="text-xl mb-8">
              Discover cultural celebrations, music festivals, sporting events, and more throughout Rwanda.
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
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
                {(selectedCategories.length > 0 || selectedMonth !== "all") && (
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
                  <h3 className="font-medium mb-3">Event Categories</h3>
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
                  <h3 className="font-medium mb-3">Month</h3>
                  <Select 
                    value={selectedMonth} 
                    onValueChange={setSelectedMonth}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      {months.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile filters button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-700">
                Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
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
                    <h3 className="font-medium mb-3">Event Categories</h3>
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
                    <h3 className="font-medium mb-3">Month</h3>
                    <Select 
                      value={selectedMonth} 
                      onValueChange={setSelectedMonth}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Months</SelectItem>
                        {months.map((month) => (
                          <SelectItem key={month.value} value={month.value}>
                            {month.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <Tabs defaultValue="upcoming" className="mb-8">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="upcoming" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger 
                  value="all" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  All Events
                </TabsTrigger>
                <TabsTrigger 
                  value="past" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-rwanda-green data-[state=active]:bg-transparent text-gray-600 data-[state=active]:text-gray-900 py-3"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-6">
                {upcomingEvents.length > 0 ? (
                  <div className="space-y-6">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No upcoming events found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="all" className="mt-6">
                {filteredEvents.length > 0 ? (
                  <div className="space-y-6">
                    {sortedEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No events found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
                    <Button onClick={resetFilters}>Reset Filters</Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="past" className="mt-6">
                {pastEvents.length > 0 ? (
                  <div className="space-y-6">
                    {pastEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">No past events found</h3>
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

interface EventCardProps {
  event: typeof events[0];
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = parseISO(event.date);
  const isPastEvent = isBefore(eventDate, new Date());
  
  return (
    <Card className={`overflow-hidden transition-shadow hover:shadow-md ${isPastEvent ? 'opacity-75' : ''}`}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-60 md:h-auto">
          <img 
            src={event.image} 
            alt={event.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="flex-1 p-6">
          <div className="flex flex-col h-full">
            <div className="mb-auto">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold">{event.name}</h3>
                {event.featured && (
                  <span className="bg-rwanda-yellow/20 text-rwanda-darkGreen text-xs font-medium px-2 py-1 rounded ml-2">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="flex items-center text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-sm">{format(eventDate, 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">{format(eventDate, 'h:mm a')}</span>
              </div>
              
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{event.location}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="mt-2 mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  event.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                  event.category === 'music' ? 'bg-blue-100 text-blue-800' :
                  event.category === 'sports' ? 'bg-green-100 text-green-800' :
                  event.category === 'arts' ? 'bg-pink-100 text-pink-800' :
                  event.category === 'food' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-2">
              <Link 
                to={`/events/${event.id}`} 
                className="text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
              >
                View Details
              </Link>
              {!isPastEvent && (
                <Button 
                  className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
                >
                  Get Tickets
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Events;
