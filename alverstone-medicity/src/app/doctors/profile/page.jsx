// app/doctors/profile/page.jsx
'use client';
export const dynamic = 'force-dynamic';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoadingUI from '@/components/LoadingUI';
import { 
  Star, 
  Clock, 
  Award, 
  GraduationCap, 
  Users, 
  Heart,
  ChevronLeft,
  CheckCircle
} from 'lucide-react';
import Link from 'next/link';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />),
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />),
})
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => (<LoadingUI />),
})

const DoctorProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const doctorId = searchParams.get('id') || '1';
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock doctors data - in real app, you'd fetch this from API
  const doctorsData = {
    1: {
      id: 1,
      name: "Dr. Michael Johnson",
      specialty: "NEUROLOGY",
      image: "https://tse1.mm.bing.net/th/id/OIP.v9o3U225ZEyfJY-Ds7Y0VwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      reviews: 124,
      experience: "15+ Years",
      patients: "2,500+",
      consultationFee: "$150",
      about: "Dr. Michael Johnson is a highly experienced neurologist with over 15 years of practice. He specializes in treating neurological disorders including epilepsy, stroke, and neurodegenerative diseases. Dr. Johnson is committed to providing compassionate, patient-centered care using the latest medical technologies and treatment approaches.",
      education: [
        "MD - Harvard Medical School (2008)",
        "Residency - Johns Hopkins Hospital (2012)",
        "Fellowship - Mayo Clinic Neurology (2014)"
      ],
      certifications: [
        "Board Certified Neurologist",
        "American Board of Psychiatry and Neurology",
        "Epilepsy Specialist Certification"
      ],
      services: [
        "Neurological Examinations",
        "EEG Testing",
        "Stroke Treatment",
        "Epilepsy Management",
        "Headache Treatment",
        "Movement Disorders"
      ],
      awards: [
        "Top Doctor Award 2023",
        "Excellence in Patient Care 2022",
        "Medical Innovation Award 2021"
      ],
      availableSlots: {
        "2024-12-01": ["09:00 AM", "10:30 AM", "02:00 PM", "03:30 PM"],
        "2024-12-02": ["09:30 AM", "11:00 AM", "01:30 PM", "04:00 PM"],
        "2024-12-03": ["10:00 AM", "11:30 AM", "02:30 PM", "04:30 PM"]
      }
    },
    2: {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "NEUROLOGY",
      image: "https://img.freepik.com/premium-photo/handsome-male-doctor-standing-white-background_54391-4422.jpg",
      rating: 5,
      reviews: 98,
      experience: "12+ Years",
      patients: "1,800+",
      consultationFee: "$140",
      about: "Dr. James Wilson is a dedicated neurologist specializing in pediatric neurology and developmental disorders. He has extensive experience in treating children with neurological conditions.",
      education: [
        "MD - Johns Hopkins University (2011)",
        "Residency - Boston Children's Hospital (2015)",
        "Fellowship - Children's Hospital of Philadelphia (2017)"
      ],
      certifications: [
        "Board Certified Pediatric Neurologist",
        "Child Neurology Society Member",
        "Developmental Disabilities Specialist"
      ],
      services: [
        "Pediatric Neurology",
        "Developmental Assessments",
        "Seizure Management",
        "ADHD Treatment",
        "Autism Spectrum Disorders",
        "Learning Disabilities"
      ],
      awards: [
        "Pediatric Excellence Award 2023",
        "Research Innovation Award 2022"
      ],
      availableSlots: {
        "2024-12-01": ["08:30 AM", "10:00 AM", "01:30 PM", "03:00 PM"],
        "2024-12-02": ["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"],
        "2024-12-03": ["08:00 AM", "10:30 AM", "01:00 PM", "03:30 PM"]
      }
    }
    // Add more doctors as needed
  };

  const doctor = doctorsData[doctorId] || doctorsData[1];

  const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Doctors', active: false },
    { label: doctor.name, active: true }
  ];

  const timeSlots = selectedDate ? (doctor.availableSlots[selectedDate] || []) : [];

  const TabButton = ({ id, label, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
        active
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
    >
      {label}
    </button>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-950" >About Dr. {doctor.name.split(' ')[1]}</h3>
              <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {doctor.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-950">Education</h3>
              <div className="space-y-3">
                {doctor.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">{edu}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-950">Certifications</h3>
              <div className="space-y-3">
                {doctor.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-gold-500 mt-1" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-950">Awards & Recognition</h3>
              <div className="space-y-3">
                {doctor.awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-yellow-500 mt-1" />
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-950">Patient Reviews</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-lg font-medium text-gray-950">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews} reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Sample reviews */}
            <div className="space-y-4">
              {[
                {
                  name: "Sarah M.",
                  rating: 5,
                  date: "2 weeks ago",
                  comment: "Dr. Johnson is exceptional. He took the time to explain my condition thoroughly and answered all my questions with patience."
                },
                {
                  name: "Robert K.",
                  rating: 5,
                  date: "1 month ago",
                  comment: "Outstanding care and expertise. The treatment plan was effective and I felt comfortable throughout the entire process."
                },
                {
                  name: "Lisa T.",
                  rating: 5,
                  date: "2 months ago",
                  comment: "Highly recommend Dr. Johnson. Professional, knowledgeable, and genuinely cares about his patients' wellbeing."
                }
              ].map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium ">{review.name[0]}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-400">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <PageHeader 
        title={doctor.name}
        breadcrumbs={breadcrumbs}
        showImage={false}
        description={`${doctor.specialty} Specialist`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Doctors</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-8">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-blue-600 font-medium text-lg mb-4">{doctor.specialty}</p>
                
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({doctor.reviews} reviews)</span>
                </div>

                <div className="space-y-4 mb-6 text-gray-950">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="text-gray-600">{doctor.experience}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Patients Treated</div>
                      <div className="text-gray-600">{doctor.patients}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Consultation Fee</div>
                      <div className="text-gray-600">{doctor.consultationFee}</div>
                    </div>
                  </div>
                </div>
                  <Link href='/appointment'>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
                  Book Appointment
                </button>
                  </Link>
                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <TabButton id="overview" label="Overview" active={activeTab === 'overview'} />
                  <TabButton id="education" label="Education & Awards" active={activeTab === 'education'} />
                  <TabButton id="reviews" label="Reviews" active={activeTab === 'reviews'} />
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {renderTabContent()}
              </div>
            </div>

            {/* Appointment Booking Section */}
            <div className="bg-white rounded-lg shadow-md mt-8 p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-950">Book an Appointment</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose a date</option>
                    <option value="2024-12-01">December 1, 2024</option>
                    <option value="2024-12-02">December 2, 2024</option>
                    <option value="2024-12-03">December 3, 2024</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    disabled={!selectedDate}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  >
                    <option value="">Choose a time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  disabled={!selectedDate || !selectedTimeSlot}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorProfile;