'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';
import { Phone, Clock } from 'lucide-react';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <LoadingUI />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <LoadingUI />,
});
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => <LoadingUI />,
});

const BookAppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    date: '',
    time: '',
    doctor: '',
    department: '',
    message: ''
  });

  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Replacing API with mock data
    const mockDoctors = [
      { _id: '1', name: 'Dr. Aisha', specialty: 'Cardiology' },
      { _id: '2', name: 'Dr. Rahul', specialty: 'Neurology' },
      { _id: '3', name: 'Dr. Priya', specialty: 'Pediatrics' }
    ];

    const mockDepartments = [
      'Cardiology',
      'Neurology',
      'Pediatrics',
      'Orthopedics',
      'Dermatology',
      'Emergency',
      'General Medicine'
    ];

    setDoctors(mockDoctors);
    setDepartments(mockDepartments);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.gender ||
      !formData.date ||
      !formData.time ||
      !formData.doctor ||
      !formData.department
    ) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      alert('Appointment request submitted successfully! We will contact you shortly to confirm.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        gender: '',
        date: '',
        time: '',
        doctor: '',
        department: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Appointment', active: true }
  ];

  const scheduleHours = [
    { day: 'Monday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Tuesday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Wednesday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Thursday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Friday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Saturday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PageHeader 
        title="Book an Appointment"
        breadcrumbs={breadcrumbs}
        showImage={true}
        imageAlt="Medical Professional"
        imageUrl="https://blog.ipleaders.in/wp-content/uploads/2016/12/appointment.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                Schedule your visit with ease and confidence. Whether you’re seeking a routine check-up, a specialist consultation, or urgent medical attention, our team is here to provide the care you need. Fill out the form below to request an appointment—our staff will contact you shortly to confirm the details.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
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
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    >
                      <option value="">Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    >
                      <option value="">Doctor</option>
                      {doctors.map(doctor => (
                        <option key={doctor._id} value={`${doctor.name} - ${doctor.specialty}`}>
                          {`${doctor.name} - ${doctor.specialty}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={loading}
                    >
                      <option value="">Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-blue-900 text-white placeholder-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    disabled={loading}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-12 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium uppercase tracking-wider"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Schedule + Tips */}
          <div>
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Schedule hours</h3>
              <div className="space-y-4">
                {scheduleHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-blue-700/30 last:border-b-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-blue-200">—</span>
                    <span className={`text-sm ${schedule.hours === 'Closed' ? 'text-red-300' : 'text-blue-200'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-blue-700/30">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Emergency</div>
                    <div className="font-semibold">(437) 681-812-255</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-900">Quick Tips</h4>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Arrive 15 minutes early for your appointment</li>
                <li>• Bring your insurance card and ID</li>
                <li>• List any medications you're taking</li>
                <li>• Prepare questions for your doctor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointmentPage;
