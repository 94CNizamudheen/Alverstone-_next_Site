// components/Contact.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "EMERGENCY",
      details: ["(237) 681-812-255", "(237) 666-331-894"],
      featured: false
    },
    {
      icon: MapPin,
      title: "LOCATIONS",
      details: ["View Our Branches","in kerala"],
      featured: true,
      href: '/locations'
    },
    {
      icon: Mail,
      title: "EMAIL",
      details: ["fildineeesoe@gmail.com", "myebstudios@gmail.com"],
      featured: false
    },
    {
      icon: Clock,
      title: "WORKING HOURS",
      details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`
                  p-8 rounded-lg transition-all duration-300 hover:shadow-lg
                  ${item.featured 
                    ? 'bg-blue-900 text-white cursor-pointer' 
                    : 'bg-blue-100 text-gray-800 hover:bg-blue-200'}
                `}
              >
                <div className={`mb-6 flex justify-center ${item.featured ? 'text-white' : 'text-blue-600'}`}>
                  <IconComponent size={32} />
                </div>
                <h3 className={`text-sm font-bold tracking-wide uppercase mb-4 text-center ${item.featured ? 'text-white' : 'text-gray-800'}`}>
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={`text-sm text-center leading-relaxed ${item.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            );

            return item.href ? <Link key={index} href={item.href}>{Card}</Link> : <div key={index}>{Card}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
