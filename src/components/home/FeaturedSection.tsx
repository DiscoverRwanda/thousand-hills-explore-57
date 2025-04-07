
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FeaturedItemProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({ image, title, description, link }) => {
  return (
    <Card className="overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow h-full">
      <div className="h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-rwanda-blue hover:text-rwanda-darkBlue font-medium"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  items: FeaturedItemProps[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <FeaturedItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
