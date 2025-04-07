
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Banknote, Hotel, Utensils, Plane, Map, Coffee, Mountain, Camera } from 'lucide-react';

interface BudgetItem {
  name: string;
  cost: number;
  icon: React.ReactNode;
  description: string;
  recommended: boolean;
  minPercentage: number;
  maxPercentage: number;
}

const BudgetCalculator: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState<number>(2000);
  const [customMode, setCustomMode] = useState<boolean>(false);
  const [allocation, setAllocation] = useState<{[key: string]: number}>({});
  const [remainingBudget, setRemainingBudget] = useState<number>(0);
  
  const budgetItems: BudgetItem[] = [
    {
      name: "Accommodation",
      cost: 0,
      icon: <Hotel className="h-6 w-6 text-rwanda-green" />,
      description: "Hotels, lodges, guest houses, and homestays",
      recommended: true,
      minPercentage: 20,
      maxPercentage: 40
    },
    {
      name: "Transportation",
      cost: 0,
      icon: <Plane className="h-6 w-6 text-rwanda-green" />,
      description: "Flights, car rentals, taxis, and public transport",
      recommended: true,
      minPercentage: 15,
      maxPercentage: 30
    },
    {
      name: "Food & Dining",
      cost: 0,
      icon: <Utensils className="h-6 w-6 text-rwanda-green" />,
      description: "Restaurants, cafes, and local food experiences",
      recommended: true,
      minPercentage: 15,
      maxPercentage: 25
    },
    {
      name: "Activities",
      cost: 0,
      icon: <Mountain className="h-6 w-6 text-rwanda-green" />,
      description: "Gorilla trekking, safaris, and guided tours",
      recommended: true,
      minPercentage: 20,
      maxPercentage: 40
    },
    {
      name: "Shopping",
      cost: 0,
      icon: <Banknote className="h-6 w-6 text-rwanda-green" />,
      description: "Souvenirs, crafts, and local products",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 15
    },
    {
      name: "Coffee Experiences",
      cost: 0,
      icon: <Coffee className="h-6 w-6 text-rwanda-green" />,
      description: "Plantation tours and tasting experiences",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 10
    },
    {
      name: "Photography Tours",
      cost: 0,
      icon: <Camera className="h-6 w-6 text-rwanda-green" />,
      description: "Specialized photography excursions",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 10
    },
    {
      name: "Local Guides",
      cost: 0,
      icon: <Map className="h-6 w-6 text-rwanda-green" />,
      description: "Expert local guides for personalized experiences",
      recommended: false,
      minPercentage: 5,
      maxPercentage: 15
    }
  ];
  
  const form = useForm({
    defaultValues: {
      budget: 2000,
    }
  });
  
  // Set initial allocations using recommended percentages
  useEffect(() => {
    if (!customMode) {
      const newAllocation: {[key: string]: number} = {};
      let total = 0;
      
      budgetItems.forEach(item => {
        if (item.recommended) {
          const midPercentage = (item.minPercentage + item.maxPercentage) / 2;
          const amount = Math.round(totalBudget * (midPercentage / 100));
          newAllocation[item.name] = amount;
          total += amount;
        } else {
          newAllocation[item.name] = 0;
        }
      });
      
      // Calculate remaining budget
      const remaining = totalBudget - total;
      setRemainingBudget(remaining);
      setAllocation(newAllocation);
    }
  }, [totalBudget, customMode]);
  
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
  
  const handleBudgetSubmit = (values: { budget: number }) => {
    setTotalBudget(values.budget);
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
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Rwanda Trip Budget Calculator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your Rwanda adventure by allocating your budget across different categories. 
            Get personalized recommendations based on your spending preferences.
          </p>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Set Your Budget</CardTitle>
            <CardDescription>
              Enter your total budget for your Rwanda trip (in USD)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleBudgetSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Budget (USD)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <Input 
                            type="number" 
                            min={500} 
                            placeholder="Enter your budget" 
                            {...field} 
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                            className="flex-1"
                          />
                          <Button type="submit">Update</Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">Budget Allocation</h3>
            <p className="text-gray-600">Adjust how your ${totalBudget} is distributed</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
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
                : "You've exceeded your total budget. Consider adjusting your allocations."}
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
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
