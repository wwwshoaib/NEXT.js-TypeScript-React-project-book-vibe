import BookCard, { Book } from "./BookCard";

const getBooks = async (): Promise<Book[]> => {
  // Fixed double slash in URL
  const response = await fetch('http://localhost:3000/booksData.json');
  
  if (!response.ok) {
    throw new Error('Failed to fetch books data');
  }

  const data: Book[] = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
          Books
        </h2>
      </div>

      {/* Grid Layout for Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {booksData.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;