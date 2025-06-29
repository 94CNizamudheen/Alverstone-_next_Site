'use client';

import React from 'react';
import {
  Brain, HeartPulse, Flame, Ear, Eye, Activity, Wind,
  Baby, Stethoscope, Droplet, Sparkles, VenetianMask
} from "lucide-react";
import { motion } from 'framer-motion';

const Specialities = () => {
  const specialties = [
    { name: "Neurology", featured: false },
    { name: "Cardiology", featured: false },
    { name: "Oncology", featured: false },
    { name: "Otorhinolaryngology", featured: false },
    { name: "Ophthalmology", featured: false },
    { name: "Cardiovascular", featured: false },
    { name: "Pulmonology", featured: false },
    { name: "FetalMedicine", featured: false },
    { name: "Gastroenterology", featured: false },
    { name: "Urology", featured: false },
    { name: "Dermatology", featured: false },
    { name: "Gynecology", featured: false }
  ];

  const iconMap = {
    Neurology: Brain,
    Cardiology: HeartPulse,
    Oncology: Flame,
    Otorhinolaryngology: Ear,
    Ophthalmology: Eye,
    Cardiovascular: Activity,
    Pulmonology: Wind,
    FetalMedicine: Baby,
    Gastroenterology: Stethoscope,
    Urology: Droplet,
    Dermatology: Sparkles,
    Gynecology: VenetianMask,
  };

  return (
    <div className="max-w py-12 px-6 bg-gray-50">
      <div className="text-center mb-8">
        <p className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-2">
          ALWAYS CARING
        </p>
        <h2 className="text-3xl font-bold text-gray-900">Our Specialties</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {specialties.map((specialty, index) => {
          const Icon = iconMap[specialty.name];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer group transition-all duration-300
                ${specialty.featured
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50'}
              `}
            >
              <div className={`mb-4 group-hover:scale-110 transition-transform duration-300
                ${specialty.featured ? 'text-white' : 'text-blue-500'}`}>
                {Icon && React.createElement(Icon, {
                  size: 32,
                  stroke: specialty.featured ? "white" : "rgb(59 130 246)",
                  fill: specialty.featured ? "white" : "none"
                })}
              </div>
              <h3 className={`text-sm font-medium text-center leading-tight
                ${specialty.featured ? 'text-white' : 'text-gray-700'}`}>
                {specialty.name}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Specialities;
