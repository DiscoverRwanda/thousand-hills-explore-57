
import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DestinationProps {
  title: string;
  image: string;
  location: string;
  link: string;
  className?: string;
}

const Destination: React.FC<DestinationProps> = ({
  title,
  image,
  location,
  link,
  className
}) => {
  return (
    <Link 
      to={link}
      className={cn(
        "group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 block",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 p-6 z-20">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center text-white/80">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
};

interface DestinationSectionProps {
  title: string;
  subtitle: string;
  destinations: DestinationProps[];
}

const DestinationSection: React.FC<DestinationSectionProps> = ({
  title,
  subtitle,
  destinations
}) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {destinations.map((destination, index) => {
            let className = "";
            
            if (index === 0) {
              className = "lg:col-span-8 lg:row-span-2 h-96 md:h-[500px]";
            } else if (index === 1 || index === 2) {
              className = "lg:col-span-4 h-60 md:h-[240px]";
            } else {
              className = "lg:col-span-4 h-60 md:h-[240px]";
            }
            
            return (
              <Destination 
                key={index} 
                {...destination} 
                className={className}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
