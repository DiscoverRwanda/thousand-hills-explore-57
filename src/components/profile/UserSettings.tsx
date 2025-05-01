
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

interface UserSettingsProps {
  userData: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    bio: string;
    location: string;
    language: string;
    currency: string;
    emailNotifications: boolean;
    marketingEmails: boolean;
    travelPreferences: {
      accommodation: string;
      transportation: string;
      activities: string[];
      budget: string;
    }
  }
}

const UserSettings: React.FC<UserSettingsProps> = ({ userData }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: userData.name,
      email: userData.email,
      bio: userData.bio,
      location: userData.location,
    }
  });
  
  const [language, setLanguage] = useState(userData.language);
  const [currency, setCurrency] = useState(userData.currency);
  const [emailNotifications, setEmailNotifications] = useState(userData.emailNotifications);
  const [marketingEmails, setMarketingEmails] = useState(userData.marketingEmails);
  
  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Profile updated",
        description: "Your profile settings have been saved successfully.",
        duration: 3000,
      });
      
      console.log("Form data:", {
        ...data,
        language,
        currency,
        emailNotifications,
        marketingEmails,
      });
    }, 1000);
  };
  
  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Account Settings</h3>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h4 className="font-medium text-lg mb-2">Profile Information</h4>
              <p className="text-gray-500 text-sm">
                Update your basic profile information
              </p>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="flex flex-col items-center sm:flex-row sm:items-end gap-4 mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={userData.avatar} alt={userData.name} />
                  <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Button type="button" variant="outline">Change Photo</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    {...register("name", { required: "Name is required" })} 
                    error={errors.name?.message}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name.message?.toString()}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })} 
                    error={errors.email?.message}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email.message?.toString()}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" {...register("location")} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Tell us about yourself and your travel interests" 
                  {...register("bio")} 
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h4 className="font-medium text-lg mb-2">Preferences</h4>
              <p className="text-gray-500 text-sm">
                Update your language and currency preferences
              </p>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="rw">Kinyarwanda</SelectItem>
                      <SelectItem value="sw">Swahili</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={currency} onValueChange={setCurrency}>
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      <SelectItem value="EUR">Euro (EUR)</SelectItem>
                      <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                      <SelectItem value="RWF">Rwandan Franc (RWF)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <h4 className="font-medium text-lg mb-2">Email Preferences</h4>
              <p className="text-gray-500 text-sm">
                Manage your email notification settings
              </p>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="emailNotifications" className="flex-grow">
                  Booking & trip notifications
                  <span className="block text-xs text-gray-500 mt-1">
                    Receive updates about your bookings and travel plans
                  </span>
                </Label>
                <Switch 
                  id="emailNotifications" 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="marketingEmails" className="flex-grow">
                  Marketing emails
                  <span className="block text-xs text-gray-500 mt-1">
                    Receive special offers, travel tips and destination recommendations
                  </span>
                </Label>
                <Switch 
                  id="marketingEmails" 
                  checked={marketingEmails} 
                  onCheckedChange={setMarketingEmails} 
                />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6 flex justify-end">
            <Button 
              type="submit" 
              className="bg-rwanda-green hover:bg-rwanda-darkGreen"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
