import React from "react";

const recommendationsData = [
  { id: 1, book: "Book1", user: "User1", comment: "Must-read!" },
  { id: 2, book: "Book2", user: "User2", comment: "Fantastic choice!" },
  // Add more recommendation data as needed
];

export default function Recomendations() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Recommendations</h1>
      {recommendationsData.map((recommendation) => (
        <div key={recommendation.id} className="border rounded p-4 mb-4">
          <h2 className="text-xl font-medium mb-2">{recommendation.user}</h2>
          <p className="text-gray-600 mb-2">Book: {recommendation.book}</p>
          <p>{recommendation.comment}</p>
        </div>
      ))}
    </div>
  );
}
