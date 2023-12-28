const booksData = [
  { id: 1, title: "Book1", author: "Author1", cover: "cover1.jpg" },
  { id: 2, title: "Book2", author: "Author2", cover: "cover2.jpg" },
  // Add more book data as needed
];

export default function Books() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Available Books</h1>
      {booksData.map((book) => (
        <div key={book.id} className="border rounded p-4 mb-4">
          <img
            src={book.cover}
            alt={`${book.title} cover`}
            className="mb-2 rounded"
          />
          <h2 className="text-xl font-medium">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
        </div>
      ))}
    </div>
  );
}
