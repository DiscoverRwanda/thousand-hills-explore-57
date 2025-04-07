
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink
}) => {
  return (
    <div className="hero-section relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild
              className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white text-lg px-6 py-6"
            >
              <Link to={buttonLink}>
                {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild
              className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-6 py-6"
            >
              <Link to="/attractions">
                Explore Attractions <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
