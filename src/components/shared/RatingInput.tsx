
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface RatingInputProps {
  onSubmitRating: (rating: number, comment: string) => void;
  initialRating?: number;
  initialComment?: string;
}

const RatingInput: React.FC<RatingInputProps> = ({ 
  onSubmitRating, 
  initialRating = 0, 
  initialComment = '' 
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState<string>(initialComment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0) {
      onSubmitRating(rating, comment);
      setComment('');
    }
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-medium mb-3">Share Your Experience</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((value) => (
            <Star
              key={value}
              className={`w-8 h-8 cursor-pointer mr-1 ${
                (hoverRating || rating) >= value
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
              onClick={() => setRating(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
            />
          ))}
          <span className="ml-2 self-center">
            {rating > 0 ? `${rating} stars` : 'Select a rating'}
          </span>
        </div>
        
        <Textarea
          placeholder="Share your thoughts about this service..."
          className="mb-4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        
        <Button
          type="submit"
          className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
          disabled={rating === 0}
        >
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default RatingInput;
