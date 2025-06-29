// app/location/page.jsx
'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <LoadingUI />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <LoadingUI />,
})

const locations = [
  { 
    district: "Thiruvananthapuram", 
    address: "Alverstone Medicity, Medical College Road, Trivandrum, Kerala 695011",
    phone: "+91 471 123 4567",
    coordinates: { lat: 8.5241, lng: 76.9366 }
  },
  { 
    district: "Kollam", 
    address: "Alverstone Medicity, Main Road, Kollam, Kerala 691001",
    phone: "+91 474 123 4567",
    coordinates: { lat: 8.8932, lng: 76.6141 }
  },
  { 
    district: "Pathanamthitta", 
    address: "Alverstone Medicity, Hospital Junction, Pathanamthitta, Kerala 689645",
    phone: "+91 468 123 4567",
    coordinates: { lat: 9.2648, lng: 76.7870 }
  },
  { 
    district: "Alappuzha", 
    address: "Alverstone Medicity, Beach Road, Alappuzha, Kerala 688012",
    phone: "+91 477 123 4567",
    coordinates: { lat: 9.4981, lng: 76.3388 }
  },
  { 
    district: "Kottayam", 
    address: "Alverstone Medicity, KK Road, Kottayam, Kerala 686001",
    phone: "+91 481 123 4567",
    coordinates: { lat: 9.5916, lng: 76.5222 }
  },
  { 
    district: "Idukki", 
    address: "Alverstone Medicity, Hill Station Road, Idukki, Kerala 685602",
    phone: "+91 486 123 4567",
    coordinates: { lat: 9.9139, lng: 76.9722 }
  },
  { 
    district: "Ernakulam", 
    address: "Alverstone Medicity, MG Road, Ernakulam, Kerala 682035",
    phone: "+91 484 123 4567",
    coordinates: { lat: 9.9312, lng: 76.2673 }
  },
  { 
    district: "Thrissur", 
    address: "Alverstone Medicity, Round South, Thrissur, Kerala 680001",
    phone: "+91 487 123 4567",
    coordinates: { lat: 10.5276, lng: 76.2144 }
  },
  { 
    district: "Palakkad", 
    address: "Alverstone Medicity, Hospital Road, Palakkad, Kerala 678001",
    phone: "+91 491 123 4567",
    coordinates: { lat: 10.7867, lng: 76.6548 }
  },
  { 
    district: "Malappuram", 
    address: "Alverstone Medicity, Mini Bypass, Malappuram, Kerala 676505",
    phone: "+91 483 123 4567",
    coordinates: { lat: 11.0510, lng: 76.0711 }
  },
  { 
    district: "Kozhikode", 
    address: "Alverstone Medicity, Beach Road, Kozhikode, Kerala 673032",
    phone: "+91 495 123 4567",
    coordinates: { lat: 11.2588, lng: 75.7804 }
  },
  { 
    district: "Wayanad", 
    address: "Alverstone Medicity, Sulthan Bathery, Wayanad, Kerala 673592",
    phone: "+91 493 123 4567",
    coordinates: { lat: 11.6854, lng: 76.2815 }
  },
  { 
    district: "Kannur", 
    address: "Alverstone Medicity, Fort Road, Kannur, Kerala 670001",
    phone: "+91 497 123 4567",
    coordinates: { lat: 11.8745, lng: 75.3704 }
  },
  { 
    district: "Kasaragod", 
    address: "Alverstone Medicity, National Highway, Kasaragod, Kerala 671121",
    phone: "+91 499 123 4567",
    coordinates: { lat: 12.4996, lng: 74.9869 }
  },
];

const LocationPage = () => {
  const [selected, setSelected] = useState(locations[0]);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter locations based on search term
  const filteredLocations = locations.filter(location =>
    location.district.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle directions
  const handleGetDirections = () => {
    const { lat, lng } = selected.coordinates;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${encodeURIComponent(selected.address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Handle call
  const handleCall = () => {
    window.location.href = `tel:${selected.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Branches in Kerala</h1>
          <p className="text-lg text-gray-600">Find the nearest Alverstone Medicity location to you</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Find Your Branch</h2>
              </div>
              
              {/* Search Bar */}
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search districts or areas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-gray-50 focus:bg-white transition-colors duration-200 text-gray-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Results Counter */}
              <div className="mb-4 text-sm text-gray-500">
                {filteredLocations.length} of {locations.length} locations
              </div>

              {/* Location List */}
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelected(loc)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 group ${
                        selected.district === loc.district
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg transform scale-[1.02]'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:transform hover:scale-[1.01]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            selected.district === loc.district
                              ? 'bg-white bg-opacity-20'
                              : 'bg-gray-100 group-hover:bg-blue-100'
                          }`}>
                            <svg className={`w-4 h-4 ${
                              selected.district === loc.district
                                ? 'text-white'
                                : 'text-gray-600 group-hover:text-blue-600'
                            }`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold text-base">{loc.district}</span>
                            <p className={`text-sm mt-1 ${
                              selected.district === loc.district
                                ? 'text-blue-100'
                                : 'text-gray-500'
                            }`}>
                              Alverstone Medicity
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {selected.district === loc.district && (
                            <div className="bg-white bg-opacity-20 p-1 rounded-full">
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                          <svg className={`w-5 h-5 transition-transform duration-200 ${
                            selected.district === loc.district
                              ? 'text-white transform rotate-90'
                              : 'text-gray-400 group-hover:text-blue-500 group-hover:transform group-hover:translate-x-1'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium">No locations found</p>
                    <p className="text-gray-400 text-sm mt-1">Try searching for "{searchTerm}"</p>
                    <button
                      onClick={() => setSearchTerm('')}
                      className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{locations.length}</p>
                    <p className="text-xs text-gray-600">Total Branches</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">24/7</p>
                    <p className="text-xs text-gray-600">Emergency Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-2xl font-bold">{selected.district}</h2>
                </div>
                <p className="text-blue-100">Alverstone Medicity Branch</p>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">{selected.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">{selected.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleGetDirections}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Get Directions
                  </button>
                  
                  <button
                    onClick={handleCall}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now
                  </button>
                </div>
                {/* Additional Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Operating Hours</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: 9:00 AM - 5:00 PM</p>
                    <p className="text-red-600 font-medium mt-2">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LocationPage;