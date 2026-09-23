import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

// 1. Define the Book interface
export interface Book {
  id: string | number;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags: string[];
}

// 2. Define the props interface to prevent implicit 'any' error
interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl border border-gray-200/80 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between font-sans">
      <div>
        {/* Light Gray Image Container */}
        <div className="w-full h-64 bg-[#F3F3F3] rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
          <Image
            src={image}
            alt={bookName}
            width={160}
            height={220}
            className="h-full w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Tags / Pills */}
        <div className="flex flex-wrap gap-2.5 mt-6 mb-4">
          {tags && tags.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-medium px-4 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-medium px-4 py-1.5 rounded-full">
              Young Adult
            </span>
          )}
        </div>

        {/* Book Title */}
        <h2 className="text-2xl font-bold text-gray-900 font-serif tracking-wide leading-tight mb-2">
          {bookName}
        </h2>

        {/* Author */}
        <p className="text-gray-600 font-medium text-base mb-4">
          By : {author}
        </p>
      </div>

      {/* Footer Details */}
      <div>
        {/* Dashed Separator */}
        <div className="border-t border-dashed border-gray-200 my-4" />

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-gray-700 font-medium text-base">
          <span>{category}</span>
          <div className="flex items-center space-x-1.5">
            <span>{typeof rating === 'number' ? rating.toFixed(2) : rating}</span>
            <Star className="w-5 h-5 text-gray-600 stroke-[1.5]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;