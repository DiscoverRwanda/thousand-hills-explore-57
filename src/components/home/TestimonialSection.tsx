
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  location,
  rating,
  image
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <img 
            src={image} 
            alt={author} 
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  );
};

interface TestimonialSectionProps {
  testimonials: TestimonialProps[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visitor Experiences</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear what travelers have to say about their unforgettable journeys through Rwanda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
