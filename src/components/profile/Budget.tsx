
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowRight } from 'lucide-react';

interface BudgetCategory {
  name: string;
  allocated: number;
  spent: number;
  color: string;
}

interface BudgetProps {
  totalBudget: number;
  totalSpent: number;
  currency: string;
  categories: BudgetCategory[];
  tripName: string;
  tripId: string;
}

const Budget: React.FC<BudgetProps> = ({ 
  totalBudget, 
  totalSpent, 
  currency, 
  categories,
  tripName,
  tripId
}) => {
  const percentageUsed = Math.round((totalSpent / totalBudget) * 100);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Your Budget</h3>
        <Button variant="outline" asChild>
          <Link to="/plan" className="flex items-center gap-2">
            Plan New Trip <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h4 className="font-medium text-lg">{tripName}</h4>
              <p className="text-gray-500 text-sm">Active Trip Budget</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <div className="text-2xl font-bold">
                {currency} {totalSpent.toLocaleString()} <span className="text-gray-400 text-lg">/ {totalBudget.toLocaleString()}</span>
              </div>
              <p className={`text-sm ${percentageUsed > 90 ? 'text-red-500' : percentageUsed > 70 ? 'text-yellow-500' : 'text-green-600'}`}>
                {percentageUsed}% Used
              </p>
            </div>
          </div>
          
          <Progress value={percentageUsed} className="h-2 mb-6" />
          
          <div className="space-y-4">
            {categories.map((category, index) => {
              const categoryPercentage = Math.round((category.spent / category.allocated) * 100);
              const progressColor = categoryPercentage > 100 
                ? 'bg-red-500' 
                : category.color.replace('bg-', '') === 'rwanda-green' 
                  ? 'bg-rwanda-green'
                  : category.color;
              
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 ${category.color}`}></div>
                      <span>{category.name}</span>
                    </div>
                    <div className="text-sm">
                      {currency} {category.spent.toLocaleString()} <span className="text-gray-400">/ {category.allocated.toLocaleString()}</span>
                    </div>
                  </div>
                  <Progress 
                    value={categoryPercentage} 
                    className={`h-1.5 ${
                      categoryPercentage > 100 
                        ? 'bg-red-200' 
                        : 'bg-gray-200'
                    }`}
                    indicatorClassName={progressColor}
                  />
                </div>
              );
            })}
          </div>
          
          <Button className="w-full mt-6 bg-rwanda-green hover:bg-rwanda-darkGreen" asChild>
            <Link to={`/plan/itinerary/${tripId}`}>
              View Trip Details
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;
