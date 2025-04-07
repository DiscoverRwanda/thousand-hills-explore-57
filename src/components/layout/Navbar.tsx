
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Primary navigation links
const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

// Secondary navigation links with dropdowns
const secondaryLinks = [
  { 
    name: 'Attractions', 
    path: '/attractions',
    dropdownItems: [
      { name: 'Natural Wonders', path: '/attractions?category=natural' },
      { name: 'Cultural Sites', path: '/attractions?category=cultural' },
      { name: 'Urban Experiences', path: '/attractions?category=urban' },
    ]
  },
  { 
    name: 'Events', 
    path: '/events',
    dropdownItems: [
      { name: 'Calendar', path: '/events/calendar' },
      { name: 'Festivals', path: '/events?category=festivals' },
      { name: 'Cultural Events', path: '/events?category=cultural' },
    ]
  },
  { 
    name: 'Dining', 
    path: '/dining',
    dropdownItems: [
      { name: 'Restaurants', path: '/dining?type=restaurants' },
      { name: 'Cafés', path: '/dining?type=cafes' },
      { name: 'Food Trails', path: '/dining/food-trails' },
    ]
  },
  { 
    name: 'Places to Stay', 
    path: '/stay',
    dropdownItems: [
      { name: 'Hotels', path: '/stay?type=hotels' },
      { name: 'Lodges', path: '/stay?type=lodges' },
      { name: 'Guest Houses', path: '/stay?type=guesthouses' },
    ]
  },
  { 
    name: 'Plan Your Visit', 
    path: '/plan',
    dropdownItems: [
      { name: 'Getting Here', path: '/plan/getting-here' },
      { name: 'Getting Around', path: '/plan/getting-around' },
      { name: 'Travel Tips', path: '/plan/travel-tips' },
      { name: 'Itinerary Builder', path: '/plan/itinerary-builder' },
    ]
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      {/* Primary Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-rwanda-green' : 'text-white'}`}>
              Discover Rwanda
            </span>
          </Link>

          {/* Primary Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {primaryLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`${scrolled ? 'text-gray-800' : 'text-white'} font-medium hover:text-rwanda-green transition-colors ${location.pathname === link.path ? 'border-b-2 border-rwanda-green' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
              Plan Your Trip
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Secondary Navigation - only visible on desktop when not scrolled or when scrolled with background */}
      <div className={`w-full bg-gray-50 border-b border-gray-200 ${scrolled ? 'block' : 'lg:block hidden'}`}>
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-center space-x-6 py-2">
            {secondaryLinks.map((link) => (
              <div key={link.name} className="relative group">
                <div 
                  className={`text-gray-700 font-medium cursor-pointer flex items-center gap-1`}
                >
                  <Link to={link.path}>{link.name}</Link>
                  {link.dropdownItems && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
                
                {link.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rwanda-green hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {/* Primary Mobile Menu */}
            <div className="border-b border-gray-200 pb-2 mb-2">
              {primaryLinks.map((link) => (
                <div key={link.name} className="py-2">
                  <Link 
                    to={link.path} 
                    onClick={toggleMenu} 
                    className="block text-base font-medium text-gray-800"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Secondary Mobile Menu */}
            {secondaryLinks.map((link) => (
              <div key={link.name} className="py-2">
                <div 
                  className="flex justify-between items-center text-gray-800"
                  onClick={() => link.dropdownItems && handleDropdown(link.name)}
                >
                  <Link to={link.path} onClick={toggleMenu} className="block text-base font-medium">
                    {link.name}
                  </Link>
                  {link.dropdownItems && (
                    <ChevronDown className={`h-4 w-4 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  )}
                </div>
                
                {link.dropdownItems && activeDropdown === link.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={toggleMenu}
                        className="block py-1 text-sm text-gray-600 hover:text-rwanda-green"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
