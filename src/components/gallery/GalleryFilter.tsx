
import React from 'react';
import { Button } from '@/components/ui/button';

interface Category {
  value: string;
  label: string;
}

interface GalleryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={activeCategory === category.value ? "default" : "outline"}
          className={activeCategory === category.value ? "bg-rwanda-green hover:bg-rwanda-darkGreen" : ""}
          onClick={() => onCategoryChange(category.value)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};
