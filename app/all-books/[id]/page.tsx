import { BookType } from "@/app/type/BookType";
import Image from "next/image";


type DetailsPageProp = {
    params: {
        id: string;
    }
}

const getBooks = async () => {
    // Fixed double slash in URL
    const response = await fetch('http://localhost:3000/booksData.json');

    if (!response.ok) {
        throw new Error('Failed to fetch books data');
    }

    const data = await response.json();
    return data;
};

const booksData = await getBooks();

const DetailsPage = async ({ params }: DetailsPageProp) => {
    const { id } = await params;


    const book = booksData.find((book: BookType) => book.bookId === Number(id))
    

return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Book cover */}
        <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-[#f3f3f3] p-10 sm:min-h-[560px]">
          <Image
            src={book.image}
            alt={`Cover of ${book.bookName}`}
            className="max-h-[480px] w-auto max-w-full object-contain drop-shadow-xl"
            width={400}
            height={600}
          />
        </div>

        {/* Book information */}
        <div className="flex flex-col justify-center">
          <h1 className="font-serif text-3xl font-bold text-[#131313] sm:text-4xl">
            {book.bookName}
          </h1>

          <p className="mt-4 text-lg font-medium text-[#424242]">
            By: {book.author}
          </p>

          <div className="my-5 border-t border-dashed border-gray-300" />

          <p className="text-lg font-medium text-[#424242]">
            {book.category}
          </p>

          <div className="my-5 border-t border-dashed border-gray-300" />

          <p className="text-sm leading-7 text-[#555] sm:text-base">
            <span className="font-bold text-[#131313]">Review: </span>
            {book.review}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="mr-1 font-bold text-[#131313]">Tag</span>

           
          </div>

          <div className="my-6 border-t border-dashed border-gray-300" />

          <dl className="grid max-w-md grid-cols-[minmax(130px,1fr)_1fr] gap-x-4 gap-y-4 text-sm sm:text-base">
            <dt className="text-gray-500">Number of Pages:</dt>
            <dd className="font-semibold text-[#131313]">
              {book.totalPages}
            </dd>

            <dt className="text-gray-500">Publisher:</dt>
            <dd className="font-semibold text-[#131313]">
              {book.publisher}
            </dd>

            <dt className="text-gray-500">Year of Publishing:</dt>
            <dd className="font-semibold text-[#131313]">
              {book.yearOfPublishing}
            </dd>

            <dt className="text-gray-500">Rating:</dt>
            <dd className="font-semibold text-[#131313]">
              {book.rating}
            </dd>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
            
             
              className="rounded-lg border border-gray-300 px-7 py-3 font-semibold text-[#131313] transition hover:bg-gray-100 disabled:cursor-default disabled:bg-gray-100"
            >
            
            </button>

            <button
              type="button"
            
              className="rounded-lg bg-[#50B1C9] px-7 py-3 font-semibold text-white transition hover:bg-[#399bb3] disabled:cursor-default disabled:opacity-70"
            >
             
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;