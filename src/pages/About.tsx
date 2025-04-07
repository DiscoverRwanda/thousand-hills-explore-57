
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      <div className="bg-rwanda-green py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Discover Rwanda</h1>
            <p className="text-xl text-white/90 mb-8">
              Promoting Rwanda's beauty, culture, and hospitality to the world.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Discover Rwanda is the official tourism platform of the Rwanda Development Board, 
                dedicated to showcasing the incredible experiences, landscapes, and cultural heritage 
                that make Rwanda a unique and unforgettable destination.
              </p>
              <p className="text-gray-700 mb-4">
                Known as the "Land of a Thousand Hills," Rwanda offers visitors a remarkable mix of 
                wildlife encounters, scenic beauty, and cultural immersion. From the endangered mountain 
                gorillas in Volcanoes National Park to the pristine shores of Lake Kivu, our country 
                provides diverse experiences for every traveler.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to support sustainable tourism that benefits local communities, preserves 
                our natural environment, and shares our rich heritage with the world. We work closely with 
                tourism operators, accommodation providers, and local artisans to ensure authentic and 
                high-quality experiences for all visitors.
              </p>
              <p className="text-gray-700">
                Through this platform, we aim to provide you with all the information and resources needed 
                to plan an unforgettable journey through Rwanda, whether you're interested in wildlife safaris, 
                cultural experiences, adventure activities, or simply relaxing in our beautiful landscapes.
              </p>
            </div>
            
            <div className="md:w-1/2">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Kigali cityscape" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Mountain gorilla" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Rwandan landscape" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We collaborate with organizations committed to promoting sustainable tourism and 
              showcasing Rwanda's unique offerings to the world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-1.svg" alt="Rwanda Development Board" className="h-12" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-2.svg" alt="Visit Rwanda" className="h-12" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-3.svg" alt="Rwanda Tours and Travel Association" className="h-12" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-4.svg" alt="Rwanda Hospitality Association" className="h-12" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-5.svg" alt="Rwanda Convention Bureau" className="h-12" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/images/partner-6.svg" alt="RwandAir" className="h-12" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working to promote Rwanda as a premier tourism destination.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Jean-Paul Kagame" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Jean-Paul Kagame</h3>
              <p className="text-gray-500 mb-2">Tourism Director</p>
              <p className="text-gray-600 text-sm">
                Leads our strategic initiatives and partnerships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Diane Mukasine" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Diane Mukasine</h3>
              <p className="text-gray-500 mb-2">Marketing Manager</p>
              <p className="text-gray-600 text-sm">
                Develops our brand and promotional campaigns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/67.jpg" 
                  alt="Eric Mutabazi" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Eric Mutabazi</h3>
              <p className="text-gray-500 mb-2">Conservation Specialist</p>
              <p className="text-gray-600 text-sm">
                Oversees our sustainable tourism initiatives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/17.jpg" 
                  alt="Grace Uwineza" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Grace Uwineza</h3>
              <p className="text-gray-500 mb-2">Community Relations</p>
              <p className="text-gray-600 text-sm">
                Coordinates with local stakeholders and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Have questions about visiting Rwanda? We're here to help.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-rwanda-green mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Discover Rwanda Office</p>
                        <p className="text-gray-600">KN 5 Road, Kigali, Rwanda</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-rwanda-green mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+250 788 123 456</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-rwanda-green mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@discoverRwanda.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <table className="w-full text-left">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Monday - Friday</td>
                        <td className="py-2 text-gray-600">8:00 AM - 5:00 PM</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-medium">Saturday</td>
                        <td className="py-2 text-gray-600">9:00 AM - 2:00 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Sunday</td>
                        <td className="py-2 text-gray-600">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rwanda-green focus:border-rwanda-green"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rwanda-green focus:border-rwanda-green"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rwanda-green focus:border-rwanda-green"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-rwanda-green focus:border-rwanda-green"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit"
                    className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
