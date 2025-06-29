'use client'

import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />),
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />),
})
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => (<LoadingUI />),
})

import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contacts', formData);
      alert('Contact form submitted successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error submitting contact form');
    } finally {
      setLoading(false);
    }
  };

  const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Contact', active: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader
        title="Contact Us"
        breadcrumbs={breadcrumbs}
        showImage={true}
        imageAlt="Contact"
        imageUrl="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=200&h=200&fit=crop"
        description="Reach out to us for any inquiries or to schedule an appointment."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have a question or need assistance? Fill out the form below, and our team will respond promptly.
            </p>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  disabled={loading}
                />
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-12 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium uppercase tracking-wider"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <div>
                    <div className="text-sm text-blue-200">Phone</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6" />
                  <div>
                    <div className="text-sm text-blue-200">Email</div>
                    <div className="font-semibold">info@alvestermedicity.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <div className="text-sm text-blue-200">Address</div>
                    <div className="font-semibold">123 Medical St, City, kerala</div>
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

export default ContactPage;