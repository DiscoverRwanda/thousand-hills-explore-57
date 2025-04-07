
import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Plane, 
  Bed, 
  Utensils, 
  Bus, 
  Camera, 
  Ticket, 
  MapPin, 
  CalendarDays,
  AlertCircle,
  ArrowRightLeft
} from 'lucide-react';

interface ExpenseItem {
  id: string;
  category: string;
  name: string;
  cost: number;
  icon: React.ReactNode;
  description: string;
}

interface Allocation {
  category: string;
  percentage: number;
  amount: number;
  icon: React.ReactNode;
}

// Sample expense items
const expenseOptions: Record<string, ExpenseItem[]> = {
  accommodation: [
    { id: 'luxury', category: 'accommodation', name: 'Luxury Lodges', cost: 400, icon: <Bed />, description: 'High-end luxury lodges with full amenities' },
    { id: 'midrange', category: 'accommodation', name: 'Mid-range Hotels', cost: 150, icon: <Bed />, description: 'Comfortable hotels with good amenities' },
    { id: 'budget', category: 'accommodation', name: 'Budget Guesthouses', cost: 50, icon: <Bed />, description: 'Clean, simple accommodations' },
  ],
  transportation: [
    { id: 'private', category: 'transportation', name: 'Private Driver/Guide', cost: 150, icon: <Bus />, description: 'Exclusive vehicle with professional driver' },
    { id: 'shared', category: 'transportation', name: 'Shared Transfers', cost: 50, icon: <Bus />, description: 'Shared transportation between locations' },
    { id: 'public', category: 'transportation', name: 'Public Transport', cost: 15, icon: <Bus />, description: 'Local buses and minibuses' },
  ],
  food: [
    { id: 'upscale', category: 'food', name: 'Upscale Restaurants', cost: 60, icon: <Utensils />, description: 'Fine dining experiences' },
    { id: 'casual', category: 'food', name: 'Casual Dining', cost: 30, icon: <Utensils />, description: 'Mid-range restaurants and cafés' },
    { id: 'local', category: 'food', name: 'Local Eateries', cost: 10, icon: <Utensils />, description: 'Street food and local restaurants' },
  ],
  activities: [
    { id: 'gorilla', category: 'activities', name: 'Gorilla Trekking', cost: 1500, icon: <Camera />, description: 'Permit to track mountain gorillas' },
    { id: 'safari', category: 'activities', name: 'Akagera Safari', cost: 120, icon: <Camera />, description: 'Game drives in Akagera National Park' },
    { id: 'boat', category: 'activities', name: 'Lake Kivu Boat Tour', cost: 50, icon: <Camera />, description: 'Scenic boat trips on Lake Kivu' },
    { id: 'cultural', category: 'activities', name: 'Cultural Tours', cost: 30, icon: <Ticket />, description: 'Village visits and cultural experiences' },
  ]
};

const defaultAllocations: Allocation[] = [
  { category: 'Accommodation', percentage: 30, amount: 0, icon: <Bed className="w-5 h-5" /> },
  { category: 'Transportation', percentage: 20, amount: 0, icon: <Bus className="w-5 h-5" /> },
  { category: 'Food', percentage: 15, amount: 0, icon: <Utensils className="w-5 h-5" /> },
  { category: 'Activities', percentage: 25, amount: 0, icon: <Camera className="w-5 h-5" /> },
  { category: 'Miscellaneous', percentage: 10, amount: 0, icon: <MapPin className="w-5 h-5" /> },
];

const BudgetCalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<number>(2000);
  const [days, setDays] = useState<number>(7);
  const [travelers, setTravelers] = useState<number>(2);
  const [activeTab, setActiveTab] = useState<string>('suggested');
  const [allocations, setAllocations] = useState<Allocation[]>(defaultAllocations);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({
    accommodation: 'midrange',
    transportation: 'shared',
    food: 'casual',
  });

  // Calculate allocations whenever budget changes
  useEffect(() => {
    if (activeTab === 'suggested') {
      const updatedAllocations = allocations.map(item => ({
        ...item,
        amount: (item.percentage / 100) * totalBudget
      }));
      setAllocations(updatedAllocations);
    }
  }, [totalBudget, activeTab]);

  // Update allocations when custom values change
  const handleAllocationChange = (index: number, value: number) => {
    const newAllocations = [...allocations];
    newAllocations[index].percentage = value;
    
    // Adjust other percentages to ensure total is 100%
    const otherIndices = allocations.map((_, i) => i).filter(i => i !== index);
    const currentTotal = newAllocations.reduce((sum, item) => sum + item.percentage, 0);
    
    if (currentTotal !== 100) {
      const diff = 100 - currentTotal;
      const perItemDiff = diff / otherIndices.length;
      
      otherIndices.forEach(i => {
        newAllocations[i].percentage += perItemDiff;
        if (newAllocations[i].percentage < 0) newAllocations[i].percentage = 0;
        if (newAllocations[i].percentage > 100) newAllocations[i].percentage = 100;
        newAllocations[i].amount = (newAllocations[i].percentage / 100) * totalBudget;
      });
    }
    
    newAllocations[index].amount = (newAllocations[index].percentage / 100) * totalBudget;
    setAllocations(newAllocations);
  };

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOptions({
      ...selectedOptions,
      [category]: value
    });
  };

  const getRecommendedActivities = () => {
    const activityBudget = allocations.find(a => a.category === 'Activities')?.amount || 0;
    const result = [];
    let remainingBudget = activityBudget;
    
    // Priority to gorilla trekking if budget allows
    const gorillaTrekking = expenseOptions.activities.find(a => a.id === 'gorilla');
    if (gorillaTrekking && remainingBudget >= gorillaTrekking.cost) {
      result.push(gorillaTrekking);
      remainingBudget -= gorillaTrekking.cost;
    }
    
    // Add other activities based on remaining budget
    for (const activity of expenseOptions.activities) {
      if (activity.id !== 'gorilla' && remainingBudget >= activity.cost) {
        const maxQuantity = Math.floor(remainingBudget / activity.cost);
        const quantity = Math.min(maxQuantity, 3); // Limit to 3 instances of each activity
        
        for (let i = 0; i < quantity; i++) {
          result.push(activity);
          remainingBudget -= activity.cost;
        }
      }
    }
    
    return result;
  };

  const getSelectedOptionCost = (category: string) => {
    const selected = selectedOptions[category];
    const option = expenseOptions[category]?.find(opt => opt.id === selected);
    return option ? option.cost : 0;
  };

  const getDailyExpenseSummary = () => {
    return {
      accommodation: getSelectedOptionCost('accommodation'),
      transportation: getSelectedOptionCost('transportation'),
      food: getSelectedOptionCost('food') * 3, // 3 meals per day
    };
  };

  const calculateTotalDailyExpense = () => {
    const { accommodation, transportation, food } = getDailyExpenseSummary();
    return accommodation + transportation + food;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="bg-gray-50 py-8 px-4 rounded-lg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Rwanda Trip Budget Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your perfect Rwandan adventure by estimating costs and allocating your budget across accommodation, transportation, food, and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Budget Input */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Trip Details</CardTitle>
                <CardDescription>Adjust the parameters to match your trip</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Budget (USD)
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={totalBudget}
                      onChange={(e) => setTotalBudget(Number(e.target.value))}
                      min={500}
                      max={10000}
                      className="w-full"
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>$500</span>
                    <span>$10,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Trip Duration (Days)
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                      min={1}
                      max={30}
                      className="w-full"
                    />
                    <CalendarDays className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      min={1}
                      max={20}
                      className="w-full"
                    />
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Per Person Budget:</span>
                    <span className="font-bold text-lg">{formatCurrency(totalBudget / travelers)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Daily Budget (all travelers):</span>
                    <span className="font-bold text-lg">{formatCurrency(totalBudget / days)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Preferred Options</CardTitle>
                <CardDescription>Select your preferred travel style</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Accommodation
                  </label>
                  <Select 
                    value={selectedOptions.accommodation}
                    onValueChange={(value) => handleOptionChange('accommodation', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Accommodation Types</SelectLabel>
                        {expenseOptions.accommodation.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name} ({formatCurrency(option.cost)}/night)
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transportation
                  </label>
                  <Select 
                    value={selectedOptions.transportation}
                    onValueChange={(value) => handleOptionChange('transportation', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select transportation type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Transportation Types</SelectLabel>
                        {expenseOptions.transportation.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name} ({formatCurrency(option.cost)}/day)
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Food & Dining
                  </label>
                  <Select 
                    value={selectedOptions.food}
                    onValueChange={(value) => handleOptionChange('food', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select dining preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Dining Options</SelectLabel>
                        {expenseOptions.food.map((option) => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name} ({formatCurrency(option.cost)}/meal)
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Budget Allocation */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Budget Allocation</CardTitle>
                  <Tabs defaultValue="suggested" value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                      <TabsTrigger value="suggested">Suggested</TabsTrigger>
                      <TabsTrigger value="custom">Custom</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardHeader>
              <CardContent>
                <TabsContent value="suggested" className="mt-0">
                  <div className="space-y-6">
                    {allocations.map((allocation, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-rwanda-green/10 rounded-full mr-3">
                              {allocation.icon}
                            </div>
                            <span className="font-medium">{allocation.category}</span>
                          </div>
                          <div className="font-bold">{formatCurrency(allocation.amount)}</div>
                        </div>
                        <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-rwanda-green h-full rounded-full"
                            style={{ width: `${allocation.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500 text-right">
                          {allocation.percentage.toFixed(0)}% of total budget
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="custom" className="mt-0">
                  <div className="space-y-6">
                    {allocations.map((allocation, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-8 h-8 flex items-center justify-center bg-rwanda-green/10 rounded-full mr-3">
                              {allocation.icon}
                            </div>
                            <span className="font-medium">{allocation.category}</span>
                          </div>
                          <div className="font-bold">{formatCurrency(allocation.amount)}</div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Slider
                            value={[allocation.percentage]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) => handleAllocationChange(index, value[0])}
                          />
                          <span className="w-12 text-right text-sm">
                            {allocation.percentage.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Trip Cost Breakdown</CardTitle>
                <CardDescription>
                  Based on your preferences and budget allocation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Daily Expenses */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg flex items-center">
                      <CalendarDays className="w-5 h-5 mr-2" />
                      Daily Expenses
                    </h3>
                    
                    {Object.entries(getDailyExpenseSummary()).map(([category, cost]) => (
                      <div key={category} className="flex justify-between items-center">
                        <span className="capitalize">{category}</span>
                        <span>{formatCurrency(cost)}/day</span>
                      </div>
                    ))}
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200 font-medium">
                      <span>Total Daily Cost</span>
                      <span>{formatCurrency(calculateTotalDailyExpense())}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Total for {days} days</span>
                      <span>{formatCurrency(calculateTotalDailyExpense() * days)}</span>
                    </div>
                  </div>
                  
                  {/* Activities */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg flex items-center">
                      <Camera className="w-5 h-5 mr-2" />
                      Recommended Activities
                    </h3>
                    
                    {getRecommendedActivities().length > 0 ? (
                      getRecommendedActivities().map((activity, index) => (
                        <div key={`${activity.id}-${index}`} className="flex justify-between items-center">
                          <span>{activity.name}</span>
                          <span>{formatCurrency(activity.cost)}</span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center text-amber-600">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        <span>Increase your activities budget to see recommendations</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Budget Mismatch Warning */}
                {calculateTotalDailyExpense() * days > totalBudget && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-red-800">Budget Warning</h4>
                      <p className="text-sm text-red-600">
                        Your daily expenses ({formatCurrency(calculateTotalDailyExpense() * days)} for {days} days) 
                        exceed your total budget ({formatCurrency(totalBudget)}). Consider adjusting your preferences 
                        or increasing your budget.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Tips */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Money-Saving Tips</h4>
                  <ul className="text-sm text-blue-700 space-y-1 ml-5 list-disc">
                    <li>Consider traveling during the shoulder season (March-May, October-November) for lower rates</li>
                    <li>Book accommodations with kitchenettes to prepare some of your own meals</li>
                    <li>Use shared transfers between destinations instead of private drivers</li>
                    <li>Combine activities in the same area to save on transportation costs</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rwanda-green hover:bg-rwanda-darkGreen">
                  Save This Itinerary
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
