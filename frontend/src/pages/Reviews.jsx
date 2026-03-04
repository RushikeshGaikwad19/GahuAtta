import React, { useState } from 'react';
import { FiStar, FiUser, FiThumbsUp } from 'react-icons/fi';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment: "Best atta I've ever used! Rotis are so soft and tasty. Highly recommended!",
      date: "2 days ago",
      product: "Gahu Atta",
      likes: 12
    },
    {
      id: 2,
      name: "Rajesh Patil",
      rating: 5,
      comment: "Authentic Maharashtrian taste. Reminds me of my grandmother's chivda.",
      date: "1 week ago",
      product: "Maharashtrian Bhel",
      likes: 8
    },
    {
      id: 3,
      name: "Sneha Deshmukh",
      rating: 4,
      comment: "Multigrain atta is very healthy. My family loves it. Delivery was fast too.",
      date: "2 weeks ago",
      product: "Multigrain Atta",
      likes: 5
    },
    {
      id: 4,
      name: "Amit Kumar",
      rating: 5,
      comment: "Fresh and pure. You can actually smell the freshness when you open the pack.",
      date: "3 weeks ago",
      product: "Bajra Atta",
      likes: 15
    }
  ]);

  const [newReview, setNewReview] = useState({ rating: 5, comment: '', name: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      ...newReview,
      date: "Just now",
      product: "Gahu Atta",
      likes: 0
    };
    setReviews([review, ...reviews]);
    setNewReview({ rating: 5, comment: '', name: '' });
    alert('Review submitted! Thank you for your feedback.');
  };

  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={i < Math.round(averageRating) ? "fill-current" : ""} 
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
          </div>
          <p className="text-orange-100">Based on {reviews.length} reviews</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Review Form */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Write a Review</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`p-2 rounded ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        <FiStar className={star <= newReview.rating ? "fill-current" : ""} size={24} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Review</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full px-4 py-2 border rounded-lg focus:border-primary focus:outline-none"
                    placeholder="Share your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>

          {/* Reviews List */}
          <div className="md:col-span-2 space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <FiUser className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-green-50 px-3 py-1 rounded-lg">
                    <span className="font-medium text-green-700 mr-1">{review.rating}</span>
                    <FiStar className="text-green-700 fill-current" size={14} />
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{review.comment}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Product: {review.product}</span>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                    <FiThumbsUp />
                    Helpful ({review.likes})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;