
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Plus, Trash2, Map, Save, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';

// Types
interface Activity {
  id: string;
  title: string;
  type: string;
  location: string;
  startTime: string;
  endTime: string;
  notes: string;
}

interface Day {
  id: string;
  date: Date;
  activities: Activity[];
}

const activityTypes = [
  { value: 'attraction', label: 'Attraction' },
  { value: 'dining', label: 'Dining' },
  { value: 'accommodation', label: 'Accommodation' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'wildlife', label: 'Wildlife' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'cultural', label: 'Cultural Experience' },
  { value: 'other', label: 'Other' }
];

const popularLocations = [
  { id: '1', name: 'Volcanoes National Park', type: 'attraction' },
  { id: '2', name: 'Kigali Genocide Memorial', type: 'attraction' },
  { id: '3', name: 'Nyungwe Forest National Park', type: 'attraction' },
  { id: '4', name: 'Lake Kivu', type: 'attraction' },
  { id: '5', name: 'Akagera National Park', type: 'attraction' },
  { id: '6', name: 'Fusion Restaurant Kigali', type: 'dining' },
  { id: '7', name: 'Kigali Serena Hotel', type: 'accommodation' },
  { id: '8', name: 'The Retreat by Heaven', type: 'accommodation' },
  { id: '9', name: 'Kigali International Airport', type: 'transportation' },
  { id: '10', name: 'Kimironko Market', type: 'shopping' }
];

const ItineraryBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [itineraryName, setItineraryName] = useState('My Rwanda Trip');
  const [days, setDays] = useState<Day[]>([{
    id: '1',
    date: new Date(),
    activities: []
  }]);
  const [activeDay, setActiveDay] = useState<string>('1');
  
  // Activity creation states
  const [newActivity, setNewActivity] = useState<Omit<Activity, 'id'>>({
    title: '',
    type: '',
    location: '',
    startTime: '09:00',
    endTime: '11:00',
    notes: ''
  });
  
  const addDay = () => {
    const lastDay = days[days.length - 1];
    const newDate = new Date(lastDay.date);
    newDate.setDate(newDate.getDate() + 1);
    
    const newDay: Day = {
      id: (days.length + 1).toString(),
      date: newDate,
      activities: []
    };
    
    setDays([...days, newDay]);
    setActiveDay(newDay.id);
  };
  
  const removeDay = (dayId: string) => {
    if (days.length <= 1) return;
    
    const updatedDays = days.filter(day => day.id !== dayId);
    setDays(updatedDays);
    
    if (activeDay === dayId) {
      setActiveDay(updatedDays[0].id);
    }
  };
  
  const addActivity = () => {
    if (!newActivity.title || !newActivity.type) return;
    
    const activity: Activity = {
      ...newActivity,
      id: Math.random().toString(36).substring(2, 9)
    };
    
    const updatedDays = days.map(day => {
      if (day.id === activeDay) {
        return {
          ...day,
          activities: [...day.activities, activity].sort((a, b) => 
            a.startTime.localeCompare(b.startTime)
          )
        };
      }
      return day;
    });
    
    setDays(updatedDays);
    
    // Reset the form
    setNewActivity({
      title: '',
      type: '',
      location: '',
      startTime: '09:00',
      endTime: '11:00',
      notes: ''
    });
  };
  
  const removeActivity = (dayId: string, activityId: string) => {
    const updatedDays = days.map(day => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.filter(activity => activity.id !== activityId)
        };
      }
      return day;
    });
    
    setDays(updatedDays);
  };
  
  const updateDayDate = (dayId: string, newDate: Date) => {
    const updatedDays = days.map(day => {
      if (day.id === dayId) {
        return { ...day, date: newDate };
      }
      return day;
    });
    
    setDays(updatedDays);
  };
  
  const saveItinerary = () => {
    // In a real app, you would save the itinerary to a database
    // For now, we'll just navigate to a mock details page
    navigate('/plan/itinerary/custom-1');
  };
  
  const activeDayData = days.find(day => day.id === activeDay);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Itinerary Builder</h1>
        <p className="text-lg text-gray-600">
          Plan your perfect Rwanda adventure day by day, activity by activity.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar - Days */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-bold text-lg">Your Itinerary</h2>
              <Button onClick={saveItinerary} className="bg-rwanda-green hover:bg-rwanda-darkGreen">
                <Save className="mr-2 h-4 w-4" />
                Save Itinerary
              </Button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <Label htmlFor="itinerary-name">Itinerary Name</Label>
                <Input 
                  id="itinerary-name" 
                  value={itineraryName} 
                  onChange={(e) => setItineraryName(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                {days.map((day) => (
                  <div
                    key={day.id}
                    className={`p-3 border rounded-md cursor-pointer transition-colors ${
                      activeDay === day.id ? 'border-rwanda-green bg-green-50' : 'border-gray-200 hover:border-rwanda-green'
                    }`}
                    onClick={() => setActiveDay(day.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-rwanda-green" />
                        <span className="font-medium">Day {day.id}</span>
                      </div>
                      
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="h-8 px-2 text-xs">
                            {format(day.date, 'MMM dd, yyyy')}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                          <CalendarComponent
                            mode="single"
                            selected={day.date}
                            onSelect={(date) => date && updateDayDate(day.id, date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="mt-2 text-sm text-gray-600">
                      {day.activities.length === 0 ? (
                        <span className="italic">No activities yet</span>
                      ) : (
                        <span>{day.activities.length} activities</span>
                      )}
                    </div>
                    
                    {days.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 h-7 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 p-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeDay(day.id);
                        }}
                      >
                        <Trash2 className="h-3.5 w-3.5 mr-1" />
                        Remove Day
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={addDay} 
                className="mt-4 w-full bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Day
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h2 className="font-bold text-lg">Popular Locations</h2>
            </div>
            <div className="p-4">
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {popularLocations.map((location) => (
                  <div
                    key={location.id}
                    className="p-3 border border-gray-200 rounded-md hover:border-rwanda-green transition-colors cursor-pointer"
                    onClick={() => setNewActivity({
                      ...newActivity,
                      title: location.name,
                      type: location.type,
                      location: location.name
                    })}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{location.name}</span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {location.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content - Activities */}
        <div className="lg:col-span-2">
          {activeDayData && (
            <>
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-lg">
                    Day {activeDayData.id} - {format(activeDayData.date, 'MMMM d, yyyy')}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <Map className="w-4 h-4 mr-1" />
                    <span>{activeDayData.activities.length} activities planned</span>
                  </div>
                </div>
                
                <div className="p-4">
                  {activeDayData.activities.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p className="mb-2">No activities planned for this day yet.</p>
                      <p className="text-sm">Use the form below to add activities to your itinerary.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {activeDayData.activities.map((activity) => (
                        <Card key={activity.id} className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between">
                              <div>
                                <CardTitle>{activity.title}</CardTitle>
                                <CardDescription>{activity.location}</CardDescription>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                                onClick={() => removeActivity(activeDayData.id, activity.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex items-center text-gray-600 mb-2">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{activity.startTime} - {activity.endTime}</span>
                              <span className="mx-2">•</span>
                              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs uppercase">
                                {activity.type}
                              </span>
                            </div>
                            {activity.notes && (
                              <p className="text-gray-700 text-sm">{activity.notes}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="font-bold text-lg">Add New Activity</h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="activity-title">Activity Title</Label>
                      <Input 
                        id="activity-title" 
                        value={newActivity.title}
                        onChange={(e) => setNewActivity({...newActivity, title: e.target.value})}
                        placeholder="e.g., Gorilla Trekking"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="activity-type">Activity Type</Label>
                      <Select 
                        value={newActivity.type}
                        onValueChange={(value) => setNewActivity({...newActivity, type: value})}
                      >
                        <SelectTrigger id="activity-type" className="mt-1">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          {activityTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="activity-location">Location</Label>
                      <Input 
                        id="activity-location" 
                        value={newActivity.location}
                        onChange={(e) => setNewActivity({...newActivity, location: e.target.value})}
                        placeholder="e.g., Volcanoes National Park"
                        className="mt-1"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="start-time">Start Time</Label>
                        <Input 
                          id="start-time" 
                          type="time"
                          value={newActivity.startTime}
                          onChange={(e) => setNewActivity({...newActivity, startTime: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="end-time">End Time</Label>
                        <Input 
                          id="end-time" 
                          type="time"
                          value={newActivity.endTime}
                          onChange={(e) => setNewActivity({...newActivity, endTime: e.target.value})}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="activity-notes">Notes (Optional)</Label>
                    <Textarea 
                      id="activity-notes" 
                      value={newActivity.notes}
                      onChange={(e) => setNewActivity({...newActivity, notes: e.target.value})}
                      placeholder="Add any special instructions or notes here..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                  
                  <Button 
                    onClick={addActivity}
                    className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen"
                    disabled={!newActivity.title || !newActivity.type}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Itinerary
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
