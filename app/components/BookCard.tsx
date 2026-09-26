import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import { BookType } from '../type/BookType';

interface BookTypeProp {
  book: BookType;
}

export const BookCard = ({ book }: BookTypeProp) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <div className="group w-full max-w-sm bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-xl hover:border-[#23BE0A]/30 transition-all duration-300 flex flex-col justify-between font-sans">
      
      {/* Top Section: Image & Tags */}
      <div>
        {/* Modern Image Box with Floating Tag Overlay */}
        <div className="w-full h-60 bg-slate-50 rounded-xl flex items-center justify-center p-4 overflow-hidden relative border border-gray-100 group-hover:bg-emerald-50/20 transition-colors">
          
          {/* Tag Badges (Positioned Top Left) */}
          <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-1.5 max-w-[85%]">
            {tags && tags.length > 0 ? (
              tags.slice(0, 2).map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/90 backdrop-blur-md text-[#23BE0A] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#23BE0A]/20 shadow-2xs"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="bg-white/90 backdrop-blur-md text-[#23BE0A] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#23BE0A]/20">
                Fiction
              </span>
            )}
          </div>

          {/* Book Image */}
          <Image
            src={image}
            alt={bookName}
            width={140}
            height={190}
            className="h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title & Author */}
        <div className="mt-4 space-y-1">
          <h2 className="text-lg font-bold text-gray-900 font-serif tracking-tight leading-snug line-clamp-1 group-hover:text-[#23BE0A] transition-colors">
            {bookName}
          </h2>
          <p className="text-sm font-medium text-gray-500">
            By : <span className="text-gray-700">{author}</span>
          </p>
        </div>
      </div>

      {/* Bottom Section: Meta Info & Action Button */}
      <div className="mt-4 pt-3 border-t border-dashed border-gray-200 space-y-4">
        
        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm font-medium">
          <span className="text-gray-600 bg-gray-100/80 px-2.5 py-0.5 rounded-md text-xs">
            {category}
          </span>

          <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md text-xs font-semibold border border-amber-200/60">
            <span>{typeof rating === 'number' ? rating.toFixed(2) : rating}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* View Details Button */}
        <Link
          href={`/all-books/${book.bookId}`}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#23BE0A] hover:bg-[#1fa909] active:scale-[0.98] text-white text-sm font-semibold py-2.5 px-4 rounded-xl shadow-sm transition-all duration-200"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default BookCard;