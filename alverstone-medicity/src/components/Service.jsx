'use client'
import React from 'react'
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Baby,
  Sparkles,
  FlaskConical,
} from 'lucide-react';

const servicesList = [
  {
    name: 'General Medicine',
    desc: 'Comprehensive care for adults and children.',
    icon: Stethoscope,
  },
  {
    name: 'Pediatrics – Specialized care for children',
    desc: 'Dedicated care for the unique needs of children.',
    icon: Baby,
  },
  {
    name: 'Dermatology',
    desc: 'Expert diagnosis and treatment of skin conditions.',
    icon: Sparkles,
  },
  {
    name: 'In-house Pharmacy and Diagnostic Laboratory',
    desc: 'Convenient access to medications and diagnostic services.',
    icon: FlaskConical,
  },
];


const Service = () => {
  const features = [
    "A Passion for Healing",
    "5-Star Care",
    "All our best",
    "Believe in Us",
    "A Legacy of Excellence",
    "Always Caring"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-2 tracking-wide uppercase text-sm">
            CARE YOU CAN BELIEVE IN
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Sidebar with Services */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Service Items */}
              <motion.div
                className="lg:col-span-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Our Services</h3>

                  {servicesList.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 hover:bg-blue-50 p-3 rounded-lg transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}

               
                </div>
              </motion.div>


          
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Main Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  A passion for putting patients first.
                </h3>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Alverstone Medcity offers a wide range of medical services, including emergency care, general medicine, and specialized treatments.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare. Convallis
                    felis vitae tortor augue. Velit purus egestas tellus
                    phasellus tincidunt duis tortor.
                  </p>
                </div>
              </div>

              {/* Images */}
              <div className="space-y-4">
                <motion.div
                  className="rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://medcity.alverstones.com/images/specialized_doctors.png"
                    alt="Doctor consultation"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>

                <motion.div
                  className="rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.H3na__DUYGyo-xanQ80O1QHaFk?rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Medical team"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Service
