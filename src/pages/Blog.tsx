
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format, parseISO } from 'date-fns';

// Mock data for blog posts
const mockBlogPosts = [
  {
    id: '1',
    title: 'A Gorilla Trekking Experience in Rwanda's Volcanoes National Park',
    excerpt: 'Follow along with our adventure as we trek through the misty forests of Volcanoes National Park in search of Rwanda's iconic mountain gorillas.',
    content: `
      <p>The early morning mist hangs low over the volcanic slopes as we gather at the park headquarters. After a briefing from our guide, we begin our trek through thick bamboo forests, climbing higher into the domain of the endangered mountain gorillas.</p>
      <p>The trek is challenging but rewarding. Our expert trackers lead us through dense vegetation, pointing out fresh signs of gorilla activity. After nearly three hours of hiking, our guide signals us to stop and whispers that the gorilla family is just ahead.</p>
      <p>Nothing can prepare you for your first sighting of these magnificent creatures in their natural habitat. We spend a precious hour observing a family of twelve gorillas, including a commanding silverback and playful youngsters swinging from vines. The connection you feel when a gorilla meets your gaze is profound and humbling—a reminder of our evolutionary kinship.</p>
      <p>Gorilla conservation in Rwanda is a remarkable success story. Through sustainable tourism and community engagement, the population has steadily increased. Your permit fee directly contributes to protection efforts and local development projects.</p>
      <p>This unforgettable experience not only brings you face-to-face with one of our closest relatives in the animal kingdom but also supports Rwanda's visionary conservation initiatives that have become a model for wildlife protection worldwide.</p>
    `,
    category: 'Wildlife',
    date: '2024-03-15T10:00:00Z',
    author: {
      name: 'Sarah Miller',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      bio: 'Wildlife photographer and conservation advocate with a passion for African wilderness.'
    },
    tags: ['Gorilla Trekking', 'Wildlife', 'Conservation', 'Volcanoes National Park'],
    featuredImage: 'https://images.unsplash.com/photo-1563299796-17596ed6b017',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'Rwanda's Cultural Renaissance: Traditional Arts and Modern Expressions',
    excerpt: 'Explore how Rwanda is revitalizing its rich cultural heritage while embracing contemporary artistic expressions.',
    content: `
      <p>In the heart of Kigali, Rwanda's capital, traditional Intore dancers move with precision and grace, their performances narrating stories of courage and celebration. After the dance, we visit a workshop where artisans craft the iconic Agaseke peace baskets, continuing a tradition that has been passed down through generations.</p>
      <p>Rwanda's cultural scene is experiencing a remarkable renaissance, blending time-honored traditions with bold, contemporary expressions. The country's troubled past has not diminished its cultural wealth but rather infused it with deeper meaning and purpose.</p>
      <p>At the Inema Arts Center, we meet young painters and sculptors whose work addresses themes of reconciliation, identity, and hope. Their creative vision is helping shape Rwanda's future while honoring its past. The center also runs community programs that use art as a healing tool, particularly for children.</p>
      <p>Music is another vibrant element of Rwanda's cultural landscape. The beat of traditional drums (ingoma) provides the foundation for innovative fusion sounds that incorporate jazz, afrobeat, and electronic influences. Local music festivals are growing in popularity, attracting both domestic and international audiences.</p>
      <p>Rwanda's investment in its cultural heritage demonstrates the understanding that national identity and pride are essential components of sustainable development. By preserving traditions while encouraging innovation, Rwanda is creating a unique cultural identity that resonates both locally and globally.</p>
    `,
    category: 'Culture',
    date: '2024-02-28T14:30:00Z',
    author: {
      name: 'David Ngugi',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Cultural anthropologist specializing in East African artistic traditions.'
    },
    tags: ['Rwandan Culture', 'Arts', 'Music', 'Traditional Crafts'],
    featuredImage: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'The Ultimate Guide to Rwanda's Coffee Trails',
    excerpt: 'Discover the journey of Rwanda's specialty coffee from fertile volcanic soils to your cup.',
    content: `
      <p>The cool morning air carries the earthy aroma of coffee cherries as we join workers at a hillside plantation near Lake Kivu. Here, at an elevation of 1,800 meters, Rwanda's exceptional coffee begins its journey. The rich volcanic soil and ideal climate conditions provide the perfect environment for growing arabica coffee of remarkable quality.</p>
      <p>Over the past two decades, Rwanda has transformed its coffee industry from a producer of ordinary beans to a source of some of the world's most sought-after specialty coffees. This remarkable evolution has been driven by a focus on quality over quantity, investment in washing stations, and training programs for farmers.</p>
      <p>We visit a coffee washing station where the harvested cherries undergo careful processing. The station manager explains how attention to detail during the washing, fermentation, and drying stages is crucial for developing the complex flavor profile that Rwandan coffee is known for—bright acidity, full body, and notes of citrus, floral, and spice.</p>
      <p>In Kigali, we meet with local entrepreneurs who are establishing café cultures and roasteries that add value to Rwandan coffee within the country. By controlling more stages of the value chain, more revenue stays within Rwanda, benefiting local communities.</p>
      <p>Rwanda's coffee industry represents more than an agricultural sector; it embodies the country's approach to development—focusing on quality, sustainability, and maximizing value. For coffee enthusiasts, following Rwanda's coffee trails offers not only exceptional tastings but also insights into a remarkable success story of agricultural transformation.</p>
    `,
    category: 'Food & Drink',
    date: '2024-01-20T09:15:00Z',
    author: {
      name: 'Michelle Wong',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      bio: 'Food writer and specialty coffee expert exploring culinary traditions around the world.'
    },
    tags: ['Coffee', 'Culinary Tourism', 'Sustainable Agriculture', 'Lake Kivu'],
    featuredImage: 'https://images.unsplash.com/photo-1595828272657-f2544f0e03f8',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'Hiking the Congo Nile Trail: Rwanda's Hidden Adventure Gem',
    excerpt: 'Experience the stunning landscapes and welcoming communities along Rwanda's 227 km hiking route.',
    content: `
      <p>The morning sun illuminates Lake Kivu's blue waters as we set out on our first day of trekking the Congo Nile Trail. This 227-kilometer route stretches along the lake's eastern shores, passing through rural villages, coffee plantations, and forested hills. Though less known than Rwanda's gorilla treks, this multi-day hike offers an immersive experience of the country's natural beauty and rural life.</p>
      <p>We've chosen to complete a five-day section of the trail, starting from Rubavu (Gisenyi) and heading south. Our guide, Jean-Pierre, explains that the trail's name comes from its position along the Congo-Nile watershed divide—rainwater falling on the western side flows toward the Congo River, while that on the eastern side makes its way to the Nile.</p>
      <p>The trail varies from easy lakeside paths to challenging ascents through terraced hillsides. Each day brings new perspectives of the lake and encounters with local communities. In one village, we're invited to participate in the coffee harvesting process, carefully picking the ripe red cherries alongside local farmers.</p>
      <p>Accommodations along the trail range from simple homestays to eco-lodges. We opt for a mix of both, allowing for authentic cultural exchange and comfortable recovery after long hiking days. The homestay experience provides insight into daily Rwandan life—shared meals, stories, and even traditional dance performances organized by our hosts.</p>
      <p>The Congo Nile Trail showcases Rwanda's commitment to sustainable tourism development. By creating infrastructure for hikers while preserving natural environments and benefiting local communities, Rwanda is diversifying its tourism offerings beyond wildlife experiences. For adventurous travelers seeking both physical challenge and cultural immersion, this trail represents one of East Africa's best-kept secrets.</p>
    `,
    category: 'Adventure',
    date: '2024-04-02T11:45:00Z',
    author: {
      name: 'James Torres',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      bio: 'Adventure travel writer specializing in off-the-beaten-path experiences in Africa.'
    },
    tags: ['Hiking', 'Adventure', 'Lake Kivu', 'Sustainable Tourism'],
    featuredImage: 'https://images.unsplash.com/photo-1502726299822-6f583f972e02',
    readTime: '8 min read'
  },
  {
    id: '5',
    title: 'Sustainable Tourism in Rwanda: A Model for Conservation',
    excerpt: 'How Rwanda's high-value, low-impact tourism approach is protecting biodiversity and empowering communities.',
    content: `
      <p>The concept of sustainable tourism has found one of its most successful implementations in Rwanda. Standing at the edge of Nyungwe Forest National Park, listening to the distant calls of chimpanzees, I'm struck by how the country has managed to align conservation objectives with tourism development and community benefits.</p>
      <p>Rwanda's approach stands in contrast to mass tourism models. By focusing on high-value, low-impact experiences, the country limits environmental pressure while maximizing economic benefits. The policy of charging premium prices for gorilla permits ($1,500) ensures both exclusivity and substantial revenue for conservation efforts.</p>
      <p>During our visit to a community project near Volcanoes National Park, we learn how tourism revenue is shared with local communities. The revenue-sharing program allocates 10% of all national park fees to community projects—building schools, health centers, and water systems. This creates direct incentives for communities to support conservation efforts.</p>
      <p>Environmental education is another key component. Local guides explain how they work with schools to raise awareness about conservation from an early age. Many former poachers have become passionate conservationists, now employed as trackers or anti-poaching rangers.</p>
      <p>Rwanda's comprehensive approach demonstrates that when properly managed, tourism can be a powerful force for environmental protection and community development. By creating economic value around the preservation of natural resources, Rwanda has transformed conservation from a constraint to an opportunity. This model offers valuable lessons for other destinations seeking to balance tourism growth with ecological sustainability.</p>
    `,
    category: 'Sustainability',
    date: '2024-01-05T15:20:00Z',
    author: {
      name: 'Elena Gomez',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      bio: 'Sustainable tourism consultant working with destinations in Africa and Asia.'
    },
    tags: ['Sustainable Tourism', 'Conservation', 'Community Development', 'Ecotourism'],
    featuredImage: 'https://images.unsplash.com/photo-1589556763393-78d3d4b17152',
    readTime: '6 min read'
  },
  {
    id: '6',
    title: 'Rwanda's Vibrant Festival Scene: A Year-Round Celebration',
    excerpt: 'From traditional ceremonies to modern music festivals, explore Rwanda's dynamic event calendar.',
    content: `
      <p>The rhythmic beats of traditional drums reverberate through the air as dancers in vibrant costumes perform at the Umuganura Harvest Festival. This ancient celebration, revitalized in modern Rwanda, honors the country's agricultural heritage and gives thanks for a successful harvest. It's just one highlight in Rwanda's diverse and growing festival scene.</p>
      <p>Throughout the year, Rwanda hosts events that showcase its cultural heritage, artistic talents, and contemporary creative energy. The calendar begins with Umuganura in August, followed by the Rwanda Film Festival that brings international and local productions to screens across Kigali.</p>
      <p>September brings the highlight of Rwanda's conservation calendar—Kwita Izina, the gorilla naming ceremony. This unique event combines ancient naming traditions with conservation awareness, attracting international celebrities and conservationists to Volcanoes National Park.</p>
      <p>For music enthusiasts, the Kigali Jazz Junction offers monthly performances featuring local and international jazz artists. The larger Rwanda Drum Festival celebrates the country's percussive traditions alongside contemporary interpretations.</p>
      <p>The growing Kigali Fashion Week showcases the work of emerging Rwandan designers who blend traditional motifs with modern aesthetics. Meanwhile, the Rwanda Cultural Fashion Show specifically highlights clothing and accessories inspired by traditional Rwandan attire.</p>
      <p>These festivals not only provide entertainment but also serve important social and economic functions—preserving cultural heritage, providing platforms for artistic expression, creating employment opportunities, and attracting tourism throughout the year. For visitors, timing a trip to coincide with one of these celebrations offers a deeper understanding of Rwanda's cultural vitality and creative renaissance.</p>
    `,
    category: 'Events',
    date: '2024-02-12T13:10:00Z',
    author: {
      name: 'Thomas Mutabazi',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      bio: 'Cultural journalist and documentary filmmaker focused on East African performing arts.'
    },
    tags: ['Festivals', 'Cultural Events', 'Music', 'Traditional Ceremonies'],
    featuredImage: 'https://images.unsplash.com/photo-1560021621-3a8a54eda2a9',
    readTime: '5 min read'
  }
];

// Categories for filtering
const categories = [
  'All',
  'Wildlife',
  'Culture',
  'Food & Drink',
  'Adventure',
  'Sustainability',
  'Events'
];

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Filter blog posts based on search term and category
  const filteredPosts = mockBlogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Featured post is the first one
  const featuredPost = mockBlogPosts[0];
  
  // Recent posts excluding the featured one
  const recentPosts = mockBlogPosts.slice(1, 4);
  
  return (
    <div>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Discover Rwanda Blog</h1>
            <p className="text-lg text-gray-600">
              Stories, tips, and insights about Rwanda's wildlife, culture, adventure, and more.
            </p>
          </div>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs 
              defaultValue="All" 
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="w-full flex overflow-x-auto my-categories">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="flex-shrink-0"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          {/* Featured Post */}
          {!searchTerm && activeCategory === 'All' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-3 h-96 rounded-lg overflow-hidden">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2">
                  <div className="text-sm text-rwanda-green mb-2 font-medium">
                    {featuredPost.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center mb-4">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-medium">{featuredPost.author.name}</div>
                      <div className="text-sm text-gray-500">
                        {format(parseISO(featuredPost.date), 'MMMM d, yyyy')}
                      </div>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-block px-6 py-2 bg-rwanda-green text-white rounded-lg hover:bg-rwanda-darkGreen transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {/* Recent Posts */}
          {!searchTerm && activeCategory === 'All' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Recent Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="border-gray-200 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-rwanda-green font-medium">
                          {post.category}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {format(parseISO(post.date), 'MMM d, yyyy')}
                        </div>
                      </div>
                      <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm">{post.author.name}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-rwanda-green hover:text-rwanda-darkGreen flex items-center text-sm"
                      >
                        Read more <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {/* All Posts / Search Results */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {searchTerm || activeCategory !== 'All' 
                ? `${filteredPosts.length} Search Results` 
                : 'All Stories'}
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('All');
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="border-gray-200 overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-rwanda-green font-medium">
                          {post.category}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {format(parseISO(post.date), 'MMM d, yyyy')}
                        </div>
                      </div>
                      <CardTitle className="text-xl mt-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm">{post.author.name}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-rwanda-green hover:text-rwanda-darkGreen flex items-center text-sm"
                      >
                        Read more <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
          
          {/* Newsletter */}
          <div className="mt-16 bg-rwandda-green bg-opacity-5 p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Get the latest stories, travel tips, and exclusive offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-3">
                <Input 
                  placeholder="Your email address" 
                  className="md:flex-grow"
                />
                <Button className="bg-rwanda-green hover:bg-rwanda-darkGreen">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
