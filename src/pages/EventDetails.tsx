
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, ArrowLeft, Share2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DetailHero from '@/components/shared/DetailHero';
import ImageGallery from '@/components/shared/ImageGallery';
import MapLocation from '@/components/shared/MapLocation';
import { format, parseISO } from 'date-fns';

// Mock data for an event
const mockEvent = {
  id: '1',
  title: 'Kwita Izina (Gorilla Naming Ceremony)',
  description: `
    <p>Kwita Izina is Rwanda's annual gorilla naming ceremony, a vibrant celebration of conservation success and cultural heritage. Inspired by the ancient Rwandan tradition of naming babies, this ceremony gives names to newborn mountain gorillas in Volcanoes National Park.</p>
    <p>Since its inception in 2005, Kwita Izina has transformed into a major international event, drawing conservationists, celebrities, and tourists from around the world. Each year, selected namers—ranging from local community leaders to international celebrities—bestow culturally significant names upon the baby gorillas born during the previous year.</p>
    <p>The ceremony includes traditional Rwandan music, dance performances, and community exhibitions that showcase Rwanda's rich cultural heritage. Beyond the naming ritual itself, the week-long celebration features conservation workshops, community outreach programs, and ecotourism activities that promote Rwanda's natural beauty.</p>
    <p>Kwita Izina symbolizes Rwanda's dedication to preserving its natural heritage and highlights the remarkable recovery of the mountain gorilla population from near extinction. The event also demonstrates how conservation efforts can positively impact local communities through tourism revenue and sustainable development initiatives.</p>
  `,
  category: 'Cultural Festival',
  date: '2024-09-05T10:00:00Z',
  endDate: '2024-09-05T16:00:00Z',
  location: {
    name: 'Kinigi, Volcanoes National Park',
    address: 'Kinigi, Musanze District, Northern Province, Rwanda',
    coordinates: {
      latitude: -1.4833,
      longitude: 29.4833
    }
  },
  organizer: 'Rwanda Development Board',
  ticketInfo: {
    general: 'Free for general access',
    vip: 'RWF 50,000 for VIP seating'
  },
  schedule: [
    { time: '10:00 AM', activity: 'Opening Ceremony and Cultural Performances' },
    { time: '11:30 AM', activity: 'Gorilla Naming Ceremony' },
    { time: '1:00 PM', activity: 'Lunch Break and Networking' },
    { time: '2:30 PM', activity: 'Conservation Panel Discussion' },
    { time: '4:00 PM', activity: 'Closing Remarks and Traditional Dance Showcase' }
  ],
  mainImageUrl: 'https://images.unsplash.com/photo-1610373710639-4af3d42c4a23',
  images: [
    { url: 'https://images.unsplash.com/photo-1610373710639-4af3d42c4a23', alt: 'Kwita Izina ceremony celebration' },
    { url: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f', alt: 'Traditional Rwandan dancers at Kwita Izina' },
    { url: 'https://images.unsplash.com/photo-1528734056081-e1a39f4a5974', alt: 'Mountain gorilla in Volcanoes National Park' },
    { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801', alt: 'Volcanoes National Park landscape' },
    { url: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f', alt: 'VIP attendees at the naming ceremony' },
    { url: 'https://images.unsplash.com/photo-1591022369091-0a735ab14d52', alt: 'Community participants at the festival' }
  ],
  relatedEvents: [
    { id: '2', title: 'Umuganura Harvest Festival', date: '2024-08-01T09:00:00Z', imageUrl: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f' },
    { id: '3', title: 'Rwanda Film Festival', date: '2024-07-15T18:00:00Z', imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728' },
    { id: '4', title: 'Kigali Jazz Junction', date: '2024-06-28T19:30:00Z', imageUrl: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c' }
  ]
};

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, you would fetch the event data based on the ID
  // For now, we'll use our mock data
  const event = mockEvent;
  
  const formattedDate = format(parseISO(event.date), 'MMMM d, yyyy');
  const startTime = format(parseISO(event.date), 'h:mm a');
  const endTime = format(parseISO(event.endDate), 'h:mm a');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailHero 
        title={event.title}
        imageUrl={event.mainImageUrl}
        category={event.category}
        date={formattedDate}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <Link to="/events" className="inline-flex items-center text-rwanda-green hover:underline mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{startTime} - {endTime}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>{event.location.name}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-rwanda-green" />
                  <span>Organized by: {event.organizer}</span>
                </div>
              </div>
              
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
            
            <ImageGallery images={event.images} />
            
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-4">Event Schedule</h2>
              <div className="space-y-4">
                {event.schedule.map((item, index) => (
                  <div key={index} className="flex border-b border-gray-200 pb-4">
                    <div className="w-24 font-medium text-rwanda-green">{item.time}</div>
                    <div>{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="font-bold text-lg">Event Information</h3>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Date & Time</h4>
                  <p>{formattedDate}</p>
                  <p>{startTime} - {endTime}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Ticket Information</h4>
                  <p>General Entry: {event.ticketInfo.general}</p>
                  <p>VIP Access: {event.ticketInfo.vip}</p>
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                    Book Tickets
                  </Button>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Event
                  </Button>
                </div>
              </div>
            </div>
            
            <MapLocation 
              title={event.title}
              address={event.location.address}
              coordinates={event.location.coordinates}
            />
          </div>
        </div>
        
        {/* Related Events */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Other Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {event.relatedEvents.map((related) => (
              <Link to={`/events/${related.id}`} key={related.id} className="group">
                <div className="rounded-lg overflow-hidden shadow-md h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={related.imageUrl} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-rwanda-green text-sm mb-1">
                      {format(parseISO(related.date), 'MMMM d, yyyy')}
                    </p>
                    <h3 className="font-bold text-lg group-hover:text-rwanda-green transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
