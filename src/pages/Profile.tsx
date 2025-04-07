
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  User,
  Heart,
  Calendar,
  Calculator,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
} from 'lucide-react';
import { toast } from 'sonner';

const Profile: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [editMode, setEditMode] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd save to an API
    toast.success('Profile updated successfully');
    setEditMode(false);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-rwanda-green p-6 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <Avatar className="w-24 h-24 border-4 border-white">
                {user.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.name} />
                ) : (
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="opacity-80">{user.email}</p>
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    onClick={() => setEditMode(!editMode)}
                  >
                    {editMode ? 'Cancel Edit' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="itineraries" className="p-6">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="itineraries" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden md:inline">Itineraries</span>
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="hidden md:inline">Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="budgets" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span className="hidden md:inline">Budgets</span>
              </TabsTrigger>
              <TabsTrigger value="bookings" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Bookings</span>
              </TabsTrigger>
              <TabsTrigger value="places" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden md:inline">Places</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden md:inline">Settings</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="itineraries" className="space-y-4">
              <h2 className="text-xl font-semibold">Your Itineraries</h2>
              <div className="text-gray-500">
                <Link to="/plan/itinerary-builder" className="text-rwanda-green hover:underline">
                  Create a new itinerary
                </Link>
                <p className="mt-4">You haven't created any itineraries yet.</p>
              </div>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <h2 className="text-xl font-semibold">Your Favorites</h2>
              <p className="text-gray-500">You haven't saved any favorites yet.</p>
            </TabsContent>

            <TabsContent value="budgets" className="space-y-4">
              <h2 className="text-xl font-semibold">Your Budget Calculations</h2>
              <div className="text-gray-500">
                <Link to="/plan" className="text-rwanda-green hover:underline">
                  Create a new budget
                </Link>
                <p className="mt-4">You haven't saved any budget calculations yet.</p>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-4">
              <h2 className="text-xl font-semibold">Your Bookings</h2>
              <p className="text-gray-500">You don't have any bookings yet.</p>
            </TabsContent>

            <TabsContent value="places" className="space-y-4">
              <h2 className="text-xl font-semibold">Visited Places</h2>
              <p className="text-gray-500">You haven't marked any places as visited yet.</p>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <h2 className="text-xl font-semibold">Profile Settings</h2>
              
              {editMode ? (
                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-md">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
                    >
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <p className="text-gray-500">
                    Manage your account settings and preferences.
                  </p>
                  
                  <Button
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
