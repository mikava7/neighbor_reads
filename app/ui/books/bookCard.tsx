import { fetchBooks } from "@/app/lib/data";
import Image from "next/image";
export default async function BookCard() {
  try {
    const books = await fetchBooks();
    console.log(books);

    return (
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <h1>{book.title}</h1>
            <Image
              src={book.imagelink}
              alt={`${book.title} cover`}
              width={500}
              height={500}
            />
            <div>
              <span>{book.author}</span>
              <span>{book.country}</span>
              <span>{book.year}</span>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    return <div>Error fetching books</div>;
  }
}
