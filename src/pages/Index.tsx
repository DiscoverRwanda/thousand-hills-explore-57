
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import DestinationSection from '@/components/home/DestinationSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import ServicesCarousel from '@/components/home/ServicesCarousel';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredExperiences = [
  {
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Gorilla Trekking',
    description: 'Get up close with mountain gorillas in their natural habitat at Volcanoes National Park, a once-in-a-lifetime wildlife encounter.',
    link: '/attractions/gorilla-trekking'
  },
  {
    image: 'https://images.unsplash.com/photo-1516939977171-9181a2dc1e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Cultural Heritage',
    description: 'Immerse yourself in Rwanda\'s rich traditions with village visits, traditional dance performances, and artisan workshops.',
    link: '/attractions/cultural-heritage'
  },
  {
    image: 'https://images.unsplash.com/photo-1576356689199-cb17c544494a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Scenic Trails',
    description: 'Hike through breathtaking landscapes, from the Congo Nile Trail along Lake Kivu to the canopy walkway in Nyungwe Forest.',
    link: '/attractions/scenic-trails'
  }
];

const upcomingEvents = [
  {
    image: 'https://images.unsplash.com/photo-1516571748332-f19761b5c880?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Kwita Izina',
    description: 'The annual Gorilla Naming Ceremony, a celebration of Rwanda\'s conservation efforts and cultural heritage.',
    link: '/events/kwita-izina'
  },
  {
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Kigali Jazz Junction',
    description: 'Experience the vibrant music scene of Rwanda with performances by local and international jazz artists.',
    link: '/events/kigali-jazz-junction'
  },
  {
    image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Umuganura Festival',
    description: 'A traditional harvest thanksgiving festival celebrating Rwanda\'s agricultural achievements and cultural unity.',
    link: '/events/umuganura-festival'
  }
];

const destinations = [
  {
    title: 'Volcanoes National Park',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    location: 'Northern Province',
    link: '/attractions/volcanoes-national-park'
  },
  {
    title: 'Lake Kivu',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Western Province',
    link: '/attractions/lake-kivu'
  },
  {
    title: 'Nyungwe Forest',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Southern Province',
    link: '/attractions/nyungwe-forest'
  },
  {
    title: 'Kigali City',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Kigali Province',
    link: '/attractions/kigali-city'
  },
  {
    title: 'Akagera National Park',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Eastern Province',
    link: '/attractions/akagera-national-park'
  }
];

const testimonials = [
  {
    quote: "Gorilla trekking in Volcanoes National Park was a profound experience. The guides were knowledgeable and the encounter with gorillas was intimate and respectful.",
    author: "Sarah Johnson",
    location: "United States",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Rwanda's stunning landscape took my breath away. From the rolling hills to the pristine lakes, every view was picture-perfect.",
    author: "David Chen",
    location: "Canada",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "The cultural experiences in Rwanda were deeply moving. Learning about the country's history and witnessing its remarkable progress was truly inspiring.",
    author: "Emma Williams",
    location: "United Kingdom",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Index: React.FC = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://images.unsplash.com/photo-1598978575311-22fb84145728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80"
        title="Discover Rwanda: Land of a Thousand Hills"
        subtitle="Experience breathtaking landscapes, incredible wildlife, and rich cultural heritage in the heart of East Africa."
        buttonText="Plan Your Trip"
        buttonLink="/plan"
      />
      
      {/* Services Carousel - New Component */}
      <ServicesCarousel />
      
      <section className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-rwanda-lightYellow/30 px-4 py-2 rounded-full mb-4">
            <span className="text-rwanda-darkGreen font-medium">Explore the Pearl of Africa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Rwanda Awaits Your Discovery</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From the mist-covered mountains of Volcanoes National Park to the pristine shores of Lake Kivu, 
            Rwanda offers unforgettable experiences for every traveler. Immerse yourself in our rich culture, 
            encounter incredible wildlife, and witness the remarkable story of a nation transformed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-green/10 flex items-center justify-center mb-4">
                <img src="/images/gorilla-icon.svg" alt="Wildlife" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Unique Wildlife</h3>
              <p className="text-gray-600">Encounter mountain gorillas, chimpanzees, and an abundance of bird species</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-blue/10 flex items-center justify-center mb-4">
                <img src="/images/landscape-icon.svg" alt="Landscapes" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Stunning Landscapes</h3>
              <p className="text-gray-600">Explore volcanic mountains, lush rainforests, and serene lakes</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rwanda-yellow/10 flex items-center justify-center mb-4">
                <img src="/images/culture-icon.svg" alt="Culture" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Rich Culture</h3>
              <p className="text-gray-600">Experience traditional dance, crafts, and warm Rwandan hospitality</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="section-divider"></div>
      
      <FeaturedSection 
        title="Top Experiences"
        subtitle="Discover the most unforgettable activities and attractions that Rwanda has to offer."
        items={featuredExperiences}
      />
      
      <DestinationSection 
        title="Must-Visit Destinations"
        subtitle="Explore Rwanda's most beautiful and culturally significant locations."
        destinations={destinations}
      />
      
      <section className="py-16 bg-rwanda-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                <span className="text-white font-medium">Rwanda Spotlight</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Africa's Leading Eco-Tourism Destination</h2>
              <p className="text-white/80 mb-6">
                Rwanda is internationally recognized for its conservation efforts and sustainable tourism practices. 
                From banning plastic bags to restoring forests and protecting endangered species, we're committed to 
                preserving our natural heritage for future generations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-rwanda-blue hover:bg-white/90">
                  <Link to="/about/conservation">Learn About Conservation</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Cleanest Country</h3>
                  <p className="text-white/80">Rwanda is known as one of the cleanest countries in Africa</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Growing Gorilla Population</h3>
                  <p className="text-white/80">Mountain gorilla numbers have increased by over 25% since 2010</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Plastic Bag Ban</h3>
                  <p className="text-white/80">First country in Africa to implement a nationwide plastic bag ban</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5">
                  <h3 className="text-xl font-bold mb-2">Forest Restoration</h3>
                  <p className="text-white/80">Committed to restoring forest cover to 30% of total land area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedSection 
        title="Upcoming Events"
        subtitle="Don't miss these exciting festivals, cultural celebrations, and special occasions."
        items={upcomingEvents}
      />
      
      <TestimonialSection testimonials={testimonials} />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Rwanda Journey</h2>
                <p className="text-gray-600 mb-6">
                  Ready to experience Rwanda? Our planning tools and resources make it easy to create your perfect trip. 
                  Find information on transportation, accommodations, guided tours, and must-see attractions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    asChild
                    className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
                  >
                    <Link to="/plan">
                      Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline"
                    asChild
                    className="border-gray-300"
                  >
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/2 lg:pl-12">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <Link to="/plan/getting-here" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center">
                          Getting Here
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Flights, visas, and entry requirements</p>
                      </div>
                    </Link>
                    <Link to="/plan/itinerary" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center">
                          Itinerary Builder
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Create your custom travel plan</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <Link to="/plan/getting-around" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center">
                          Getting Around
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Transportation options within Rwanda</p>
                      </div>
                    </Link>
                    <Link to="/plan/travel-tips" className="block group">
                      <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:translate-y-[-2px]">
                        <h3 className="font-bold mb-2 flex items-center">
                          Travel Tips
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-600">Weather, packing advice, and safety</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </div>
  );
};

export default Index;
