
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Mountain, Coffee, Utensils, Calendar, Map, Hotel, Camera, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SlideProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
  buttonText: string;
}

const slides: SlideProps[] = [
  {
    icon: <Mountain className="h-12 w-12 text-white" />,
    title: "Explore Rwanda's Natural Wonders",
    description: "From volcanic mountains to pristine lakes, discover breathtaking landscapes and unique wildlife.",
    backgroundImage: "https://images.unsplash.com/photo-1598377143849-60e151f89653?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/attractions",
    buttonText: "Discover Attractions"
  },
  {
    icon: <Calendar className="h-12 w-12 text-white" />,
    title: "Experience Cultural Festivals",
    description: "Immerse yourself in Rwanda's vibrant cultural events, celebrations and traditional ceremonies.",
    backgroundImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/events",
    buttonText: "Browse Events"
  },
  {
    icon: <Utensils className="h-12 w-12 text-white" />,
    title: "Savor Rwandan Cuisine",
    description: "Experience authentic flavors from traditional dishes to contemporary fusion at top-rated restaurants.",
    backgroundImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/dining",
    buttonText: "Find Dining Options"
  },
  {
    icon: <Hotel className="h-12 w-12 text-white" />,
    title: "Luxury to Authentic Stays",
    description: "From 5-star lodges to charming homestays, find the perfect accommodation for your Rwanda adventure.",
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/stay",
    buttonText: "View Accommodations"
  },
  {
    icon: <Coffee className="h-12 w-12 text-white" />,
    title: "Rwanda's Coffee Experience",
    description: "Tour world-renowned coffee plantations and enjoy tastings of Rwanda's exceptional beans.",
    backgroundImage: "https://images.unsplash.com/photo-1523242942520-c81fbdf78767?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/attractions/coffee-tours",
    buttonText: "Discover Coffee Tours"
  },
  {
    icon: <Camera className="h-12 w-12 text-white" />,
    title: "Photography Safaris",
    description: "Capture stunning wildlife and landscapes with specialized photography tours and expert guides.",
    backgroundImage: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/attractions/photography-safaris",
    buttonText: "Book a Safari"
  },
  {
    icon: <Map className="h-12 w-12 text-white" />,
    title: "Hiking Adventures",
    description: "Explore Rwanda's scenic trails, from the Congo Nile Trail to the volcanoes of the northwest.",
    backgroundImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/attractions/hiking",
    buttonText: "Find Trails"
  },
  {
    icon: <Music className="h-12 w-12 text-white" />,
    title: "Cultural Performances",
    description: "Experience traditional dance, music, and storytelling in authentic Rwandan cultural settings.",
    backgroundImage: "https://images.unsplash.com/photo-1560021621-3a8a54eda2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1900&q=80",
    link: "/events/cultural-performances",
    buttonText: "Find Performances"
  }
];

const Slide: React.FC<SlideProps> = ({ icon, title, description, backgroundImage, link, buttonText }) => {
  return (
    <div className="relative h-screen w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="bg-rwanda-green bg-opacity-20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
            {icon}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white text-lg px-6 py-6"
            >
              <Link to={link}>
                {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-6 py-6"
            >
              <Link to="/plan">
                Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AutoSlider: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set up auto sliding
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    // Update current index when slide changes
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', handleSelect);

    // Clean up
    return () => {
      clearInterval(interval);
      api?.off('select', handleSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Slide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
