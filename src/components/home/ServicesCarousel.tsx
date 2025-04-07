
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Shield, Users, Coffee, Mountains, Camera, Utensils, Plane, Hotel } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center text-center">
      <div className="p-3 bg-rwanda-green/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const services = [
  {
    icon: <Mountains className="h-8 w-8 text-rwanda-green" />,
    title: "Gorilla Trekking",
    description: "Expert guides lead you through forests to witness endangered mountain gorillas in their natural habitat."
  },
  {
    icon: <Shield className="h-8 w-8 text-rwanda-green" />,
    title: "Safe Travel",
    description: "Rwanda is one of Africa's safest destinations with excellent infrastructure and friendly locals."
  },
  {
    icon: <Users className="h-8 w-8 text-rwanda-green" />,
    title: "Cultural Experiences",
    description: "Immerse yourself in Rwandan culture with traditional dance, crafts, and community visits."
  },
  {
    icon: <Coffee className="h-8 w-8 text-rwanda-green" />,
    title: "Coffee Tours",
    description: "Discover Rwanda's renowned coffee industry through plantation tours and tasting experiences."
  },
  {
    icon: <Camera className="h-8 w-8 text-rwanda-green" />,
    title: "Photography Safaris",
    description: "Capture breathtaking landscapes and wildlife with specialized photography tours."
  },
  {
    icon: <Utensils className="h-8 w-8 text-rwanda-green" />,
    title: "Culinary Experiences",
    description: "Sample authentic Rwandan cuisine from local markets to fine dining establishments."
  },
  {
    icon: <Plane className="h-8 w-8 text-rwanda-green" />,
    title: "Airport Transfers",
    description: "Convenient and reliable transportation from Kigali International Airport to your accommodation."
  },
  {
    icon: <Hotel className="h-8 w-8 text-rwanda-green" />,
    title: "Accommodation Booking",
    description: "From luxury lodges to charming guesthouses, we help you find the perfect place to stay."
  }
];

const ServicesCarousel: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-block bg-rwanda-lightYellow/30 px-4 py-2 rounded-full mb-4">
            <span className="text-rwanda-darkGreen font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Rwanda with Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From wildlife adventures to cultural experiences, we offer a range of services to make your Rwanda journey unforgettable.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ServiceCard 
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;
