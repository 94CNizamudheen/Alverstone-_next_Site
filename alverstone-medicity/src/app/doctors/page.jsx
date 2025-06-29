
//doctors page
import dynamic from 'next/dynamic';
import React from 'react';
import LoadingUI from '@/components/LoadingUI';
import { Star, MapPin, Phone, Mail } from 'lucide-react';
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


const DoctorsPage = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Michael Johnson",
      specialty: "NEUROLOGY",
      image: "https://tse1.mm.bing.net/th/id/OIP.v9o3U225ZEyfJY-Ds7Y0VwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      reviews: 124
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "NEUROLOGY",
      image: "https://img.freepik.com/premium-photo/handsome-male-doctor-standing-white-background_54391-4422.jpg",
      rating: 5,
      reviews: 98
    },
    {
      id: 3,
      name: "Dr. Sarah Martinez",
      specialty: "NEUROLOGY",
      image: "https://tse4.mm.bing.net/th/id/OIP.WZuFeD-_Btx-rRmknaI_9AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      reviews: 156
    },
    {
      id: 4,
      name: "Dr. Robert Davis",
      specialty: "NEUROLOGY",
      image: "https://wallpapers.com/images/hd/doctor-pictures-l5y1qs2998u7rf0x.jpg",
      rating: 5,
      reviews: 87
    },
    {
      id: 5,
      name: "Dr. Kevin Brown",
      specialty: "NEUROLOGY",
      image: "https://t3.ftcdn.net/jpg/06/77/47/34/360_F_677473412_5nGHAc090QJg051rLqge2kehXgPgU6M8.jpg",
      rating: 5,
      reviews: 142
    },
    {
      id: 6,
      name: "Dr. Lisa Anderson",
      specialty: "NEUROLOGY",
      image: "https://tse4.mm.bing.net/th/id/OIP.nmAwZ0-dn7D4KYDzZOegcgHaKA?rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 5,
      reviews: 203
    }
  ];
    const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Doctors', active: true }
  ];

  const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-medium text-sm mb-4 tracking-wider">{doctor.specialty}</p>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < doctor.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({doctor.reviews})</span>
        </div>
        <Link href='/doctors/profile'>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
          View Profile
        </button>
        </Link>
        
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      {/* Header Section */}
      <PageHeader 
        title="Our Doctors"
        breadcrumbs={breadcrumbs}
        showImage={true}
        description="Meet our team of experienced medical professionals dedicated to providing exceptional healthcare"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters/Stats Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Doctors</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Specializations</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
            Load More Doctors
          </button>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to Schedule an Appointment?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact us today to book a consultation with one of our expert doctors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-medium">Call Us</div>
                <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">info@medicenter.com</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-sm text-gray-600">123 Medical St, City</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DoctorsPage;