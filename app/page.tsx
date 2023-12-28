import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <main>
        <h1 className="text-3xl font-semibold mb-4">
          Welcome to Neighbor Reads
        </h1>
        <p className="text-lg mb-4">
          Discover, share, and explore a world of books with your community.
        </p>
        <Link href="/books">Browse Books</Link>
      </main>
    </div>
  );
}
