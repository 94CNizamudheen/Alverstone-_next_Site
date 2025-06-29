'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, MessageCircle } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Olivia James",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Ethan Moore", 
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Dr. Sophia Bennett",
      specialty: "Orthopedics", 
      image: "https://www.sonicseo.com/wp-content/uploads/2020/07/surgeon-768x768.jpg",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-2">
            TRUSTED CARE
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Doctors
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Doctor Info Card */}
              <motion.div
                className="relative -mt-16 mx-4 mb-4 bg-blue-600 rounded-lg p-6 text-white z-10"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <h3 className="text-xl font-semibold mb-1 text-center">
                  {doctor.name}
                </h3>
                <p className="text-blue-100 text-sm font-medium mb-4 text-center tracking-wide">
                  {doctor.specialty}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
