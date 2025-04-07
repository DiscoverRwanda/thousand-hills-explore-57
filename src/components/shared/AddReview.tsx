
import React, { useState } from 'react';
import RatingInput from './RatingInput';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface AddReviewProps {
  serviceId: string;
  serviceType: 'attraction' | 'restaurant' | 'accommodation' | 'event';
  onReviewAdded: (review: any) => void;
}

const AddReview: React.FC<AddReviewProps> = ({ serviceId, serviceType, onReviewAdded }) => {
  const { isAuthenticated, user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  
  const handleSubmitRating = (rating: number, comment: string) => {
    if (!isAuthenticated) {
      toast.error('You must be logged in to leave a review');
      return;
    }
    
    const newReview = {
      id: Date.now().toString(),
      author: user?.name || 'Anonymous',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      rating,
      comment,
      avatarUrl: user?.avatar,
    };
    
    // In a real app, this would be sent to an API
    onReviewAdded(newReview);
    toast.success('Thank you for your review!');
    setShowForm(false);
  };

  return (
    <div className="my-6">
      {isAuthenticated ? (
        showForm ? (
          <RatingInput onSubmitRating={handleSubmitRating} />
        ) : (
          <Button
            onClick={() => setShowForm(true)}
            className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white"
          >
            Write a Review
          </Button>
        )
      ) : (
        <div className="p-4 bg-gray-50 border rounded-lg">
          <p className="mb-4">Please sign in to leave a review.</p>
          <Link to="/login">
            <Button className="bg-rwanda-green hover:bg-rwanda-darkGreen text-white">
              Sign In
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddReview;
