

import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img
                src="https://medcity.alverstones.com/images/alverstone-group-of-companies-logo.png"
                alt="MedCity Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Providing exceptional healthcare services with compassion and expertise.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/doctors" className="hover:text-white">Doctors</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/locations" className="hover:text-white">Locations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Emergency Care</a></li>
              <li><a href="#" className="hover:text-white">Cardiology</a></li>
              <li><a href="#" className="hover:text-white">Neurology</a></li>
              <li><a href="#" className="hover:text-white">Pediatrics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +1 (555) 123-4567</p>
              <p>📧 info@medicare.com</p>
              <p>📍 123 Medical Center Dr<br />Health City, HC 12345</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Alverstone Medicity. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
