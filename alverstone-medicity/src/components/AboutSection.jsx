'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image - Slide in from Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://medcity.alverstones.com/images/emergency_services.png" 
              alt="Medical team" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content - Slide in from Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              A Great Place to Receive Care
            </h2>
            <p className="text-lg text-gray-600 mb-6">
             Alverstone Drug House Pvt. Ltd. was founded in 2020 through the collective vision and efforts of expatriates from Kerala. What began as a united initiative has now grown into a thriving business group with over 100 active members. Rooted in the idea that every individual should have the opportunity to build their own business, we have built this organization through collaboration and trust.

Today, we are proud to be expanding our healthcare network, with plans to establish hospitals in every district of Kerala — from Thiruvananthapuram to Kasaragod. The first step in this journey begins at Chandanathope, Kollam.

With a strong presence in the medical sector in India and abroad, Alverstone welcomes individuals who share our vision to join us. Built on a foundation of trust and community, our organization invites you to invest in a business that is growing in your very own hometown. Together, let's build a healthier future.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">50+</h3>
                <p className="text-gray-600">Expert Doctors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
                <p className="text-gray-600">Emergency Care</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
