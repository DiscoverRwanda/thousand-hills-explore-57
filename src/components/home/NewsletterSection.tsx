
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-rwanda-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Rwanda
          </h2>
          <p className="text-white/80 mb-8">
            Subscribe to our "This Weekend in Rwanda" newsletter and receive weekly updates on events, attractions, and travel tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 flex-grow"
              required
            />
            <Button 
              type="submit"
              className="bg-rwanda-yellow hover:bg-rwanda-lightYellow text-gray-900 font-medium"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            By subscribing, you agree to receive our newsletter and marketing communications. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
