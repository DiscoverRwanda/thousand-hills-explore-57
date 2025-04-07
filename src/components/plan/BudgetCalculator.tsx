
import React, { useState, useEffect } from 'react';
import { 
  Slider 
} from "@/components/ui/slider";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Banknote, Hotel, Utensils, Plane, Map, Coffee, Mountain, Camera, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BudgetItem {
  name: string;
  cost: number;
  icon: React.ReactNode;
  description: string;
  recommended: boolean;
  minPercentage: number;
  maxPercentage: number;
  options?: {
    [key: string]: {
      label: string;
      pricePerDay: number;
      description: string;
    }
  };
  selectedOption?: string;
}

interface TransportOption {
  label: string;
  pricePerDay: number;
  pricePerKm?: number;
  comfortLevel: string;
  description: string;
}

const BudgetCalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<number>(2000);
  const [numNights, setNumNights] = useState<number>(5);
  const [customMode, setCustomMode] = useState<boolean>(false);
  const [allocation, setAllocation] = useState<{[key: string]: number}>({});
  const [remainingBudget, setRemainingBudget] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({
    "Accommodation": "hotel",
    "Transportation": "carRental",
    "Food & Dining": "midRange",
    "Activities": "standard",
    "Shopping": "moderate",
    "Coffee Experiences": "standard",
    "Photography Tours": "group",
    "Local Guides": "halfDay"
  });
  
  // Define accommodation options
  const accommodationOptions = {
    hotel: {
      label: "Hotels",
      pricePerDay: 150,
      description: "Standard hotels with comfortable rooms and basic amenities"
    },
    luxuryHotel: {
      label: "Luxury Hotels",
      pricePerDay: 350,
      description: "High-end hotels with premium services and full amenities"
    },
    guestHouse: {
      label: "Guest Houses",
      pricePerDay: 80,
      description: "Local guest houses with authentic experience and basic comfort"
    },
    airbnb: {
      label: "Airbnb/Rentals",
      pricePerDay: 100,
      description: "Private apartments or houses with kitchen facilities"
    },
    lodge: {
      label: "Safari Lodges",
      pricePerDay: 250,
      description: "Wildlife lodges near national parks with meals included"
    }
  };
  
  // Define transportation options
  const transportationOptions = {
    carRental: {
      label: "Car Rental",
      pricePerDay: 60,
      pricePerKm: 0.8,
      comfortLevel: "High",
      description: "Self-driving with complete freedom to explore"
    },
    privateDriver: {
      label: "Private Driver",
      pricePerDay: 100,
      pricePerKm: 1.0,
      comfortLevel: "Very High",
      description: "Dedicated car with experienced local driver"
    },
    taxi: {
      label: "Taxis",
      pricePerDay: 70,
      pricePerKm: 0.9,
      comfortLevel: "Medium",
      description: "On-demand transportation in urban areas"
    },
    publicTransport: {
      label: "Public Transport",
      pricePerDay: 15,
      pricePerKm: 0.2,
      comfortLevel: "Basic",
      description: "Buses and minibuses on established routes"
    },
    motorcycle: {
      label: "Motorcycle",
      pricePerDay: 25,
      pricePerKm: 0.4,
      comfortLevel: "Basic",
      description: "Agile transportation option for adventurous travelers"
    }
  };
  
  // Define dining options
  const diningOptions = {
    budget: {
      label: "Local Eateries",
      pricePerDay: 20,
      description: "Authentic local food at markets and small restaurants"
    },
    midRange: {
      label: "Mid-Range Restaurants",
      pricePerDay: 45,
      description: "Casual dining with a mix of local and international options"
    },
    upscale: {
      label: "Upscale Dining",
      pricePerDay: 90,
      description: "Fine dining experiences with gourmet cuisine"
    },
    selfCatering: {
      label: "Self-Catering",
      pricePerDay: 15,
      description: "Buying groceries and preparing your own meals"
    },
    mixed: {
      label: "Mixed Experience",
      pricePerDay: 55,
      description: "Combination of dining out and preparing some meals"
    }
  };
  
  // Define activities options
  const activitiesOptions = {
    budget: {
      label: "Budget Activities",
      pricePerDay: 40,
      description: "Self-guided tours, hiking, and free cultural experiences"
    },
    standard: {
      label: "Standard Tours",
      pricePerDay: 100,
      description: "Guided group tours to main attractions"
    },
    premium: {
      label: "Premium Experiences",
      pricePerDay: 300,
      description: "Private tours and exclusive experiences"
    },
    gorilla: {
      label: "Gorilla Trekking",
      pricePerDay: 1500,
      description: "The signature Rwanda experience (one-time permit fee)"
    },
    wildlife: {
      label: "Wildlife Safaris",
      pricePerDay: 200,
      description: "Game drives and wildlife viewing in national parks"
    }
  };
  
  // Define shopping options
  const shoppingOptions = {
    minimal: {
      label: "Minimal",
      pricePerDay: 10,
      description: "Just a few small souvenirs"
    },
    moderate: {
      label: "Moderate",
      pricePerDay: 30,
      description: "Local crafts and medium-priced souvenirs"
    },
    extensive: {
      label: "Extensive",
      pricePerDay: 80,
      description: "Art pieces, high-quality crafts, and clothing"
    }
  };
  
  // Define coffee experience options
  const coffeeOptions = {
    basic: {
      label: "Café Visits",
      pricePerDay: 15,
      description: "Trying local coffee at various cafés"
    },
    standard: {
      label: "Coffee Tour",
      pricePerDay: 50,
      description: "Half-day tour of coffee plantation with tasting"
    },
    premium: {
      label: "Premium Experience",
      pricePerDay: 120,
      description: "Full-day immersive coffee experience with workshop"
    }
  };
  
  // Define photography tour options
  const photographyOptions = {
    group: {
      label: "Group Photo Tour",
      pricePerDay: 80,
      description: "Guided photography in small groups"
    },
    private: {
      label: "Private Photo Guide",
      pricePerDay: 200,
      description: "One-on-one guidance from professional photographer"
    },
    workshop: {
      label: "Photography Workshop",
      pricePerDay: 150,
      description: "Learn techniques in a workshop setting"
    }
  };
  
  // Define local guide options
  const guideOptions = {
    halfDay: {
      label: "Half-Day Guide",
      pricePerDay: 40,
      description: "Local guide for a short excursion (4-5 hours)"
    },
    fullDay: {
      label: "Full-Day Guide",
      pricePerDay: 80,
      description: "Local guide for a full day of exploration"
    },
    multiDay: {
      label: "Multi-Day Guide",
      pricePerDay: 70,
      description: "Consistent guide for your entire trip (price per day)"
    }
  };
  
  const budgetItems: BudgetItem[] = [
    {
      name: "Accommodation",
      cost: 0,
      icon: <Hotel className="h-6 w-6 text-rwanda-green" />,
      description: "Hotels, lodges, guest houses, and homestays",
      recommended: true,
      minPercentage: 20,
      maxPercentage: 40,
      options: accommodationOptions,
      selectedOption: "hotel"
    },
    {
      name: "Transportation",
      cost: 0,
      icon: <Plane className="h-6 w-6 text-rwanda-green" />,
      description: "Flights, car rentals, taxis, and public transport",
      recommended: true,
      minPercentage: 15,
      maxPercentage: 30,
      options: transportationOptions,
      selectedOption: "carRental"
    },
    {
      name: "Food & Dining",
      cost: 0,
      icon: <Utensils className="h-6 w-6 text-rwanda-green" />,
      description: "Restaurants, cafes, and local food experiences",
      recommended: true,
      minPercentage: 15,
      maxPercentage: 25,
      options: diningOptions,
      selectedOption: "midRange"
    },
    {
      name: "Activities",
      cost: 0,
      icon: <Mountain className="h-6 w-6 text-rwanda-green" />,
      description: "Gorilla trekking, safaris, and guided tours",
      recommended: true,
      minPercentage: 20,
      maxPercentage: 40,
      options: activitiesOptions,
      selectedOption: "standard"
    },
    {
      name: "Shopping",
      cost: 0,
      icon: <Banknote className="h-6 w-6 text-rwanda-green" />,
      description: "Souvenirs, crafts, and local products",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 15,
      options: shoppingOptions,
      selectedOption: "moderate"
    },
    {
      name: "Coffee Experiences",
      cost: 0,
      icon: <Coffee className="h-6 w-6 text-rwanda-green" />,
      description: "Plantation tours and tasting experiences",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 10,
      options: coffeeOptions,
      selectedOption: "standard"
    },
    {
      name: "Photography Tours",
      cost: 0,
      icon: <Camera className="h-6 w-6 text-rwanda-green" />,
      description: "Specialized photography excursions",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 10,
      options: photographyOptions,
      selectedOption: "group"
    },
    {
      name: "Local Guides",
      cost: 0,
      icon: <Map className="h-6 w-6 text-rwanda-green" />,
      description: "Expert local guides for personalized experiences",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 15,
      options: guideOptions,
      selectedOption: "halfDay"
    }
  ];
  
  const form = useForm({
    defaultValues: {
      budget: 2000,
      nights: 5,
    }
  });
  
  // Calculate price based on option selection
  const calculateItemCost = (item: BudgetItem) => {
    if (!item.options || !item.selectedOption) {
      return allocation[item.name] || 0;
    }
    
    const option = item.options[selectedOptions[item.name]];
    if (!option) return allocation[item.name] || 0;
    
    // For accommodation, multiply by number of nights
    if (item.name === "Accommodation") {
      return option.pricePerDay * numNights;
    }
    
    // For gorilla trekking, it's a one-time fee
    if (item.name === "Activities" && selectedOptions[item.name] === "gorilla") {
      return option.pricePerDay; // One-time permit
    }
    
    // For other items, calculate based on duration (excluding travel days)
    return option.pricePerDay * numNights;
  };
  
  // Set initial allocations using recommended percentages and selected options
  useEffect(() => {
    if (!customMode) {
      const newAllocation: {[key: string]: number} = {};
      let total = 0;
      
      budgetItems.forEach(item => {
        if (item.recommended) {
          const calculatedCost = calculateItemCost(item);
          newAllocation[item.name] = calculatedCost;
          total += calculatedCost;
        } else {
          newAllocation[item.name] = 0;
        }
      });
      
      // Calculate remaining budget
      const remaining = totalBudget - total;
      setRemainingBudget(remaining);
      setAllocation(newAllocation);
    }
  }, [totalBudget, numNights, customMode, selectedOptions]);
  
  const handleSliderChange = (name: string, value: number[]) => {
    const newValue = value[0];
    
    // Calculate other allocations
    const newAllocation = {...allocation};
    newAllocation[name] = newValue;
    
    // Update remaining budget
    let allocated = 0;
    Object.values(newAllocation).forEach(value => {
      allocated += value;
    });
    
    setRemainingBudget(totalBudget - allocated);
    setAllocation(newAllocation);
  };
  
  const handleOptionChange = (category: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [category]: value
    }));
    
    // If not in custom mode, recalculate the allocation
    if (!customMode) {
      const item = budgetItems.find(item => item.name === category);
      if (item && item.options) {
        const option = item.options[value];
        if (option) {
          let cost = option.pricePerDay;
          
          if (category === "Accommodation") {
            cost *= numNights;
          } else if (category === "Activities" && value === "gorilla") {
            cost = option.pricePerDay; // One-time fee
          } else {
            cost *= numNights;
          }
          
          const newAllocation = {...allocation};
          newAllocation[category] = cost;
          
          // Update remaining budget
          let allocated = 0;
          Object.values(newAllocation).forEach(value => {
            allocated += value;
          });
          
          setRemainingBudget(totalBudget - allocated);
          setAllocation(newAllocation);
        }
      }
    }
  };
  
  const handleBudgetSubmit = (values: { budget: number; nights: number }) => {
    setTotalBudget(values.budget);
    setNumNights(values.nights);
  };
  
  const resetAllocation = () => {
    setCustomMode(false);
  };
  
  const getLevelLabel = (name: string): string => {
    const item = budgetItems.find(item => item.name === name);
    
    if (!item) return "";
    
    const percentage = (allocation[name] / totalBudget) * 100;
    
    if (percentage < item.minPercentage) return "Budget";
    if (percentage > item.maxPercentage) return "Luxury";
    return "Standard";
  };
  
  const renderOptionInfo = (itemName: string) => {
    const item = budgetItems.find(item => item.name === itemName);
    if (!item || !item.options) return null;
    
    const selectedOption = item.options[selectedOptions[itemName]];
    if (!selectedOption) return null;
    
    let additionalInfo = "";
    
    // Add specific details based on category
    if (itemName === "Transportation" && 'pricePerKm' in selectedOption) {
      const transportOption = selectedOption as unknown as TransportOption;
      additionalInfo = ` | $${transportOption.pricePerKm}/km | Comfort: ${transportOption.comfortLevel}`;
    }
    
    return (
      <div className="mt-2 text-sm">
        <p className="font-medium">{selectedOption.label}</p>
        <p className="text-gray-500">${selectedOption.pricePerDay}/day{additionalInfo}</p>
        <p className="text-gray-600 mt-1">{selectedOption.description}</p>
      </div>
    );
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Rwanda Trip Budget Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your Rwanda adventure by allocating your budget across different categories. 
            Get personalized recommendations based on your spending preferences and trip duration.
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Set Your Trip Details</CardTitle>
            <CardDescription>
              Enter your total budget and the number of nights for your Rwanda trip
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleBudgetSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Budget (USD)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={500} 
                            placeholder="Enter your budget" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="nights"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Nights</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1} 
                            max={30}
                            placeholder="Enter number of nights" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit">Update Trip Details</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">Budget Allocation</h3>
            <p className="text-gray-600">Adjust how your ${totalBudget} is distributed for {numNights} nights</p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              onClick={() => setCustomMode(true)}
              className={customMode ? "bg-gray-100" : ""}
            >
              Custom Allocation
            </Button>
            <Button 
              variant={customMode ? "default" : "outline"} 
              onClick={resetAllocation}
              className={!customMode ? "bg-gray-100" : ""}
            >
              Recommended
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          {budgetItems.map((item) => (
            <Card key={item.name} className="border-gray-200">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-rwanda-green/10 rounded-full">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <span className="text-lg font-bold">${allocation[item.name] || 0}</span>
                </div>
                <CardDescription>
                  {item.description}
                  {item.name === "Accommodation" && (
                    <span className="block mt-1 font-medium text-rwanda-green">
                      Based on {numNights} nights
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {/* Service Type Selector */}
                  {item.options && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <label className="text-sm font-medium mr-2">Service Type</label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Info className="h-4 w-4 text-gray-400" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">Select the type of service you prefer. This will adjust the cost calculation.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <Select
                        value={selectedOptions[item.name]}
                        onValueChange={(value) => handleOptionChange(item.name, value)}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(item.options).map(([key, option]) => (
                            <SelectItem key={key} value={key}>
                              {option.label} (${option.pricePerDay}/day)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      
                      {/* Display selected option information */}
                      {renderOptionInfo(item.name)}
                    </div>
                  )}
                  
                  <Slider
                    value={[allocation[item.name] || 0]}
                    max={totalBudget}
                    step={10}
                    disabled={!customMode}
                    onValueChange={(value) => handleSliderChange(item.name, value)}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0%</span>
                    <span>{Math.round(((allocation[item.name] || 0) / totalBudget) * 100)}%</span>
                    <span>100%</span>
                  </div>
                  {customMode && (
                    <div className="text-right text-sm">
                      <span className={`px-2 py-1 rounded text-white ${
                        getLevelLabel(item.name) === "Budget" ? "bg-blue-500" :
                        getLevelLabel(item.name) === "Standard" ? "bg-green-500" : "bg-purple-500"
                      }`}>
                        {getLevelLabel(item.name)}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-50 border-dashed">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Remaining Budget</CardTitle>
              <span className={`text-2xl font-bold ${remainingBudget < 0 ? 'text-red-500' : 'text-green-600'}`}>
                ${remainingBudget}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {remainingBudget >= 0 
                ? "This is your unallocated budget. You can distribute it to other categories or keep as contingency funds."
                : "You've exceeded your total budget. Consider adjusting your allocations or increasing your budget."}
            </p>
          </CardContent>
          <CardFooter className="border-t border-gray-200 bg-white">
            <div className="w-full">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Total Allocated:</span>
                <span className="font-bold">${totalBudget - remainingBudget}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    remainingBudget < 0 ? 'bg-red-500' : 'bg-rwanda-green'
                  }`}
                  style={{ width: `${Math.min(((totalBudget - remainingBudget) / totalBudget) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </CardFooter>
        </Card>
        
        {customMode && remainingBudget < 0 && (
          <div className="mt-6 p-4 bg-red-100 border border-red-200 rounded-lg text-red-800">
            <p className="font-medium">Warning: You've exceeded your budget by ${Math.abs(remainingBudget)}.</p>
            <p>Please adjust your allocations to stay within your total budget of ${totalBudget}.</p>
          </div>
        )}
        
        <div className="mt-10 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Budget Tips for Rwanda</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 text-rwanda-green">•</div>
              <p>Gorilla trekking permits cost $1,500 per person, which is a significant portion of most budgets.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-rwanda-green">•</div>
              <p>Consider traveling during the low season (March-May, October-November) for better accommodation rates.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-rwanda-green">•</div>
              <p>Public transportation is affordable, but hiring a driver can save time and provide valuable local insights.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-rwanda-green">•</div>
              <p>Local restaurants offer excellent food at lower prices than tourist-oriented establishments.</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 text-rwanda-green">•</div>
              <p>Always keep some cash (Rwandan Francs) on hand, especially when visiting markets or rural areas.</p>
            </li>
          </ul>
          
          <div className="mt-6">
            <Button asChild variant="outline" className="text-rwanda-green border-rwanda-green hover:bg-rwanda-green/10">
              <Link to="/plan/travel-tips">
                See More Travel Tips
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
