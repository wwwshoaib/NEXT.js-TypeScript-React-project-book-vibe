'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

// Defined as a constant outside the component
const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Books', href: '/all-books' },
  { label: 'Listed Books', href: '/listed-books' },
  { label: 'Pages to Read', href: '/read-books' },
] as const;

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleNavClick = (label: string) => {
    setActiveTab(label);
    setIsMobileMenuOpen(false); // Close mobile menu on item selection
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 font-sans transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-gray-900 tracking-tight"
            >
              Book Vibe
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.label)}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-base transition-all duration-200 ${
                    isActive
                      ? 'border border-[#23BE0A] text-[#23BE0A] bg-transparent'
                      : 'text-gray-600 hover:text-[#23BE0A] border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons (Sign In & Sign Up) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/signin"
              className="bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 active:scale-95 shadow-sm inline-block text-center"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-[#59C6D2] hover:bg-[#48b2be] text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 active:scale-95 shadow-sm inline-block text-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#23BE0A] hover:bg-gray-100 focus:outline-none transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-4 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className={`block px-4 py-3 rounded-lg font-semibold text-base transition-colors ${
                  isActive
                    ? 'border border-[#23BE0A] text-[#23BE0A] bg-emerald-50/30'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#23BE0A]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Mobile Action Buttons */}
          <div className="pt-4 space-y-2 border-t border-gray-100">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-[#23BE0A] hover:bg-[#1fa909] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center w-full bg-[#59C6D2] hover:bg-[#48b2be] text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;