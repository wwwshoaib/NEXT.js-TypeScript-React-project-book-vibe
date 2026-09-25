
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand / About */}
        <div className="space-y-4 md:col-span-1">
          <h2 className="text-2xl font-bold text-white tracking-tight">Book Vibe</h2>
          <p className="text-sm text-gray-400">
            Books to freshen up your bookshelf. Explore an inspiring collection of top-rated books, curated recommendations, and timeless stories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/all-books" className="hover:text-white transition-colors">Books</Link></li>
            <li><Link href="/listed-books" className="hover:text-white transition-colors">Listed Books</Link></li>
            <li><Link href="/pages-to-read" className="hover:text-white transition-colors">Pages to Read</Link></li>
          </ul>
        </div>

        {/* Services / Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">Subscribe to get book recommendations and updates.</p>
          <form  className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Book Vibe. All rights reserved.
      </div>
    </footer>
  );
}