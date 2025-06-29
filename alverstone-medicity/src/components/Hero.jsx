'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { CalendarDays, Heart, Hospital } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  // Array of medical images that will rotate
  const heroImages = [
    'https://medcity.alverstones.com/images/specialized_doctors.png',
    'https://medcity.alverstones.com/images/modern_facilities.png',
    '	https://medcity.alverstones.com/images/emergency_services.png',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-70 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}>
      </div>

       <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[60vh] sm:min-h-[70vh]">

        {/* Left Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center lg:text-left bg-gray-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20"
        >
          <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-3 sm:mb-4 tracking-wide uppercase">
            CARING FOR LIFE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            Leading the Way<br />
            in <span className="text-blue-600">Medical Excellence</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            Providing world-class healthcare services with cutting-edge technology,
            compassionate care, and a commitment to improving lives every day.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
            Our Services
          </button>
        </motion.div>

        {/* Right Floating Circles (Doctor image can be added later) */}
        <div className="relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md">
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Service Cards Row */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 relative z-10">

          {/* Card 1 - Schedule Appointment */}
          <div className="bg-blue-800 text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">Schedule Appointment</h3>
            </div>
            <p className="text-blue-100 mb-4 text-sm sm:text-base text-center sm:text-left">Book your consultation with our expert medical professionals</p>
            <Link href='/appointment'>
                        <button className="text-white hover:text-blue-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">Learn More →</button>

            </Link>
          </div>

          {/* Card 2 - Expert Doctors */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left">Expert Doctors</h3>
            </div>
            <p className="text-gray-600 mb-4 text-sm sm:text-base text-center sm:text-left">Highly qualified specialists with years of experience in their fields</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">Learn More →</button>
          </div>

          {/* Card 3 - Emergency Care */}
          <div className="bg-cyan-500 text-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                <Hospital className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left">Emergency Care</h3>
            </div>
            <p className="text-cyan-100 mb-4 text-sm sm:text-base text-center sm:text-left">24/7 emergency medical services for urgent healthcare needs</p>
            <button className="text-white hover:text-cyan-200 font-medium text-sm sm:text-base w-full sm:w-auto text-center sm:text-left">Learn More →</button>
          </div>

        </div>
      </motion.div>
    </div>
    </section>
  )
}

export default Hero