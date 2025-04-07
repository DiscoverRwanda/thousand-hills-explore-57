
import React, { useState } from 'react';
import { 
  Calendar, 
  CalendarCell, 
  CalendarCellTrigger, 
  CalendarGrid, 
  CalendarHeader, 
  CalendarHeadCell, 
  CalendarNextButton, 
  CalendarPrevButton, 
  CalendarTitle
} from '@/components/ui/calendar';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, Calendar as CalendarIcon, Info, Clock, Tag } from 'lucide-react';
import { format, parse, getYear, addYears } from 'date-fns';
import DetailHero from '@/components/shared/DetailHero';

interface RwandaEvent {
  id: string;
  title: string;
  date: string; // ISO date string
  description: string;
  location: string;
  eventType: 'national' | 'cultural' | 'tourism' | 'conference';
  imageUrl: string;
}

const eventTypes = {
  national: 'bg-blue-100 text-blue-800 border-blue-200',
  cultural: 'bg-green-100 text-green-800 border-green-200',
  tourism: 'bg-purple-100 text-purple-800 border-purple-200',
  conference: 'bg-amber-100 text-amber-800 border-amber-200',
};

// Mock events data
const rwandaEvents: RwandaEvent[] = [
  {
    id: '1',
    title: 'New Year\'s Day',
    date: '2025-01-01',
    description: 'National holiday celebrating the beginning of the new year.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Heroes\' Day',
    date: '2025-02-01',
    description: 'A day honoring national heroes who contributed to Rwanda\'s liberation.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1486149985744-f3fc0fa8c3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'International Women\'s Day',
    date: '2025-03-08',
    description: 'Celebration of women\'s achievements and a call for gender equality.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '4',
    title: 'Genocide Memorial Day',
    date: '2025-04-07',
    description: 'Day of remembrance for the victims of the 1994 genocide against the Tutsi.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    title: 'Labour Day',
    date: '2025-05-01',
    description: 'Celebration of workers\' rights and contributions.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '6',
    title: 'Liberation Day',
    date: '2025-07-04',
    description: 'Commemorates the end of the genocide and the beginning of peace.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '7',
    title: 'Umuganura Festival',
    date: '2025-08-02',
    description: 'Traditional harvest thanksgiving festival celebrating Rwanda\'s agricultural achievements and cultural unity.',
    location: 'Kigali',
    eventType: 'cultural',
    imageUrl: 'https://images.unsplash.com/photo-1473649085228-583485206ea2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '8',
    title: 'Kwita Izina (Gorilla Naming)',
    date: '2025-09-05',
    description: 'Annual ceremony where newborn gorillas are named, celebrating conservation efforts.',
    location: 'Volcanoes National Park',
    eventType: 'tourism',
    imageUrl: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '9',
    title: 'Kigali International Peace Marathon',
    date: '2025-05-25',
    description: 'Annual marathon promoting peace and reconciliation.',
    location: 'Kigali',
    eventType: 'tourism',
    imageUrl: 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '10',
    title: 'Rwanda Film Festival',
    date: '2025-07-21',
    description: 'Week-long festival showcasing Rwandan and international films.',
    location: 'Kigali',
    eventType: 'cultural',
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '11',
    title: 'Christmas Day',
    date: '2025-12-25',
    description: 'Christian holiday celebrating the birth of Jesus Christ.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '12',
    title: 'Kigali Jazz Junction',
    date: '2025-02-28',
    description: 'Monthly event featuring local and international jazz performers.',
    location: 'Kigali Serena Hotel',
    eventType: 'cultural',
    imageUrl: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '13',
    title: 'EXPO Rwanda',
    date: '2025-07-28',
    description: 'International trade fair showcasing Rwandan products and services.',
    location: 'Kigali Convention Center',
    eventType: 'conference',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '14',
    title: 'Africa CEO Forum',
    date: '2025-03-25',
    description: 'Leading international conference dedicated to African private sector development.',
    location: 'Kigali Convention Center',
    eventType: 'conference',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '15',
    title: 'Easter Sunday',
    date: '2025-04-20',
    description: 'Christian holiday celebrating the resurrection of Jesus Christ.',
    location: 'Nationwide',
    eventType: 'national',
    imageUrl: 'https://images.unsplash.com/photo-1521127474489-d524412fd439?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '16',
    title: 'Kigali Fashion Week',
    date: '2025-11-15',
    description: 'Annual fashion event showcasing Rwandan and African designers.',
    location: 'Kigali',
    eventType: 'cultural',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Function to generate events for next year
const generateNextYearEvents = (events: RwandaEvent[], targetYear: number): RwandaEvent[] => {
  return events.map(event => {
    const eventDate = parse(event.date, 'yyyy-MM-dd', new Date());
    const currentYear = getYear(eventDate);
    const yearDiff = targetYear - currentYear;
    
    return {
      ...event,
      id: `${event.id}-${targetYear}`,
      date: format(addYears(eventDate, yearDiff), 'yyyy-MM-dd')
    };
  });
};

// Generate events for 2024, 2025, and 2026
const allEvents: Record<number, RwandaEvent[]> = {
  2024: generateNextYearEvents(rwandaEvents, 2024),
  2025: rwandaEvents,
  2026: generateNextYearEvents(rwandaEvents, 2026),
  2027: generateNextYearEvents(rwandaEvents, 2027),
  2028: generateNextYearEvents(rwandaEvents, 2028),
};

const EventsCalendar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(2025);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<RwandaEvent | null>(null);
  
  const yearOptions = [2024, 2025, 2026, 2027, 2028];
  
  // Get events for the selected date
  const getEventsForDate = (date: Date) => {
    const dateString = format(date, 'yyyy-MM-dd');
    return allEvents[year].filter(event => event.date === dateString);
  };
  
  // Get all events for the current selected year
  const eventsForYear = allEvents[year] || [];
  
  // Get dates that have events
  const eventDates = eventsForYear.map(event => parse(event.date, 'yyyy-MM-dd', new Date()));
  
  // Get events for the selected date
  const eventsForSelectedDate = selectedDate ? getEventsForDate(selectedDate) : [];
  
  return (
    <div>
      <DetailHero
        title="Rwanda Events Calendar"
        imageUrl="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        category="Events"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Rwanda's National & Cultural Events</h2>
          <p className="text-gray-600">
            Explore Rwanda's vibrant calendar of events including national holidays, cultural 
            festivals, tourism events, and international conferences. Plan your visit to 
            coincide with these special occasions.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Calendar and Year Selector */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Events Calendar</h3>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-5 w-5 text-gray-500" />
                  <Select
                    value={year.toString()}
                    onValueChange={(value) => setYear(parseInt(value))}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      {yearOptions.map(yearOption => (
                        <SelectItem key={yearOption} value={yearOption.toString()}>
                          {yearOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border pointer-events-auto"
                modifiers={{
                  event: eventDates,
                }}
                modifiersClassNames={{
                  event: "bg-rwanda-green/20 font-bold text-rwanda-darkGreen rounded-md",
                }}
              />
              
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>National Holidays</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Cultural Events</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <span>Tourism Events</span>
                </div>
              </div>
            </div>
            
            {/* Event List for Selected Date */}
            <div className="mt-8 bg-white rounded-lg shadow p-6">
              <div className="flex items-center mb-4">
                <CalendarDays className="h-5 w-5 text-rwanda-green mr-2" />
                <h3 className="text-xl font-bold">
                  {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Select a date'}
                </h3>
              </div>
              
              {eventsForSelectedDate.length > 0 ? (
                <div className="space-y-4">
                  {eventsForSelectedDate.map(event => (
                    <div 
                      key={event.id}
                      className={`border p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${eventTypes[event.eventType]}`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      <h4 className="font-bold">{event.title}</h4>
                      <div className="flex items-center mt-2 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                      <p className="mt-2 text-sm line-clamp-2">{event.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Info className="h-12 w-12 mx-auto mb-2 opacity-30" />
                  <p>No events scheduled for this date</p>
                  <p className="mt-2 text-sm">Select a date with an event or browse the full event list below</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Event Details or Full Event List */}
          <div className="lg:w-5/12">
            {selectedEvent ? (
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{selectedEvent.title}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {format(parse(selectedEvent.date, 'yyyy-MM-dd', new Date()), 'MMMM d, yyyy')}
                      </CardDescription>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedEvent(null)}
                      className="h-8 px-2 text-gray-500"
                    >
                      Close
                    </Button>
                  </div>
                </CardHeader>
                <div className="px-6">
                  <div className="aspect-video rounded-md overflow-hidden mb-4">
                    <img 
                      src={selectedEvent.imageUrl} 
                      alt={selectedEvent.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Tag className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Event Type</p>
                      <p className="capitalize">{selectedEvent.eventType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Location</p>
                      <p>{selectedEvent.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-1">Description</p>
                    <p className="text-gray-700">{selectedEvent.description}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                    Add to My Itinerary
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 h-full">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <CalendarDays className="h-5 w-5 text-rwanda-green mr-2" />
                  All Events in {year}
                </h3>
                
                <div className="space-y-6">
                  {['national', 'cultural', 'tourism', 'conference'].map((type) => (
                    <div key={type}>
                      <h4 className="font-medium capitalize mb-3 pb-1 border-b">{type} Events</h4>
                      <div className="space-y-3">
                        {eventsForYear
                          .filter(event => event.eventType === type)
                          .sort((a, b) => a.date.localeCompare(b.date))
                          .map(event => (
                            <div 
                              key={event.id}
                              className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                              onClick={() => {
                                setSelectedEvent(event);
                                setSelectedDate(parse(event.date, 'yyyy-MM-dd', new Date()));
                              }}
                            >
                              <div>
                                <div className="font-medium">{event.title}</div>
                                <div className="text-sm text-gray-500">{event.location}</div>
                              </div>
                              <div className="text-sm text-right">
                                {format(parse(event.date, 'yyyy-MM-dd', new Date()), 'MMM d')}
                              </div>
                            </div>
                          ))}
                        {eventsForYear.filter(event => event.eventType === type).length === 0 && (
                          <p className="text-sm text-gray-500 py-1">No {type} events scheduled.</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
