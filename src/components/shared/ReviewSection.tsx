
import React, { useState } from 'react';
import { Star } from 'lucide-react';
import AddReview from './AddReview';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  comment: string;
  avatarUrl?: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  averageRating: number;
  serviceId: string;
  serviceType: 'attraction' | 'restaurant' | 'accommodation' | 'event';
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ 
  reviews: initialReviews, 
  averageRating: initialAverage, 
  serviceId,
  serviceType
}) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [averageRating, setAverageRating] = useState(initialAverage);
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };
  
  const handleReviewAdded = (newReview: Review) => {
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    
    // Recalculate average rating
    const totalRating = updatedReviews.reduce((sum, review) => sum + review.rating, 0);
    const newAverage = totalRating / updatedReviews.length;
    setAverageRating(newAverage);
  };

  return (
    <div className="my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Customer Reviews</h2>
        <div className="flex items-center">
          <div className="flex mr-2">
            {renderStars(averageRating)}
          </div>
          <span className="text-lg font-medium">{averageRating.toFixed(1)}/5</span>
          <span className="text-gray-500 ml-2">({reviews.length} reviews)</span>
        </div>
      </div>

      <AddReview 
        serviceId={serviceId} 
        serviceType={serviceType} 
        onReviewAdded={handleReviewAdded}
      />

      <div className="space-y-6 mt-8">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-4">
                {review.avatarUrl ? (
                  <img 
                    src={review.avatarUrl} 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-4">
                    {review.author.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="font-medium">{review.author}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
