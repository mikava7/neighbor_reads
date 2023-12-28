import React from "react";

const reviewsData = [
  { id: 1, user: "User1", rating: 4, comment: "Great book!" },
  { id: 2, user: "User2", rating: 5, comment: "Highly recommended!" },
  // Add more review data as needed
];

export default function Reviews() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Reviews</h1>
      {reviewsData.map((review) => (
        <div key={review.id} className="border rounded p-4 mb-4">
          <h2 className="text-xl font-medium mb-2">{review.user}</h2>
          <p className="text-gray-600 mb-2">Rating: {review.rating}/5</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
