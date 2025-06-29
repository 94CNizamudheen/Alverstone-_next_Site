'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://medcity.alverstones.com/images/alverstone-medcity-logo.png"
                alt="MedCity Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0">
              {/* Emergency */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-sm min-w-0">
                  <div className="font-semibold text-blue-600 uppercase">Emergency</div>
                  <div className="text-blue-600 font-medium break-all">(237) 681-812-255</div>
                </div>
              </div>

              {/* Work Hours */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm min-w-0">
                  <div className="font-semibold text-blue-600 uppercase">Work Hour</div>
                  <div className="text-blue-600 font-medium">09:00 - 20:00 Everyday</div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-blue-200 font-medium">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-200 font-medium">About us</Link>
              <Link href="/services" className="text-white hover:text-blue-200 font-medium">Services</Link>
              <Link href="/doctors" className="text-white hover:text-blue-200 font-medium">Doctors</Link>
              <Link href="/career" className="text-white hover:text-blue-200 font-medium">Career</Link>
              <Link href="/contact" className="text-white hover:text-blue-200 font-medium">Contact</Link>
              <Link href="/locations" className="text-white hover:text-blue-200 font-medium">Locations</Link>
            </nav>

            {/* Right Side (Search + Button + Mobile Menu) */}
            <div className="flex items-center space-x-4">
           

              {/* Appointment Button */}
              <Link href="/appointment">
                <button className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-gray-100 font-medium transition-colors">
                  Appointment
                </button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-blue-800 rounded-md transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden flex flex-col space-y-4 pb-4">
              <Link href="/" className="text-white hover:text-blue-200 font-medium">Home</Link>
              <Link href="/about" className="text-white hover:text-blue-200 font-medium">About us</Link>
              <Link href="/services" className="text-white hover:text-blue-200 font-medium">Services</Link>
              <Link href="/doctors" className="text-white hover:text-blue-200 font-medium">Doctors</Link>
              <Link href="/career" className="text-white hover:text-blue-200 font-medium">Career</Link>
              <Link href="/contact" className="text-white hover:text-blue-200 font-medium">Contact</Link>
              <Link href="/locations" className="text-white hover:text-blue-200 font-medium">Locations</Link>
              <Link href="/appointment" className="text-white hover:text-blue-200 font-medium">Appointment</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
