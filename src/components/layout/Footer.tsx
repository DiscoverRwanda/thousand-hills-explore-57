
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Discover Rwanda</h3>
            <p className="mb-4 text-gray-300">
              Explore the land of a thousand hills, with its breathtaking landscapes, rich wildlife, and vibrant culture.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-rwanda-blue transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="hover:text-rwanda-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="hover:text-rwanda-yellow transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="hover:text-red-500 transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/attractions" className="text-gray-300 hover:text-white transition-colors">
                  Attractions
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-gray-300 hover:text-white transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/stay" className="text-gray-300 hover:text-white transition-colors">
                  Places to Stay
                </Link>
              </li>
              <li>
                <Link to="/plan" className="text-gray-300 hover:text-white transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-rwanda-yellow" />
                <span className="text-gray-300">
                  KN 5 Road, Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-rwanda-yellow" />
                <span className="text-gray-300">+250 788 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-rwanda-yellow" />
                <span className="text-gray-300">info@discoverRwanda.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 focus:border-rwanda-green"
              />
              <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Discover Rwanda. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 text-sm hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
