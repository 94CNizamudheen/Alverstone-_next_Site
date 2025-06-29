//services page


import React from 'react';

import { Stethoscope, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />),
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />),
})
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => (<LoadingUI />),
})


const Services = () => {
  const services = [
  {
    title: "General Health Checkup",
    description: "Comprehensive evaluation of your overall health status to catch any early signs of illness. Includes physical examination, vital signs, and basic lab tests.",
    image: "https://tse3.mm.bing.net/th/id/OIP.teuGPtJuMaxnR-NWD5Du8gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    featured: false
  },
  {
    title: "Pediatric Consultation",
    description: "Specialized care for infants, children, and adolescents. Monitor growth, development, and address any health concerns with a pediatric specialist.",
    image: "https://s3.amazonaws.com/utep-uploads/wp-content/uploads/healthcarembagwu/2019/03/10051603/need-healthcare-professionals.jpg",
    featured: false
  },
  {
    title: "Dental Care",
    description: "Professional dental checkup and cleaning to maintain oral hygiene and prevent cavities or gum disease. Includes X-rays if necessary.",
    image: "https://cdn.pixabay.com/photo/2023/08/08/05/33/healthcare-8176505_960_720.jpg",
    featured: false
  },
  {
    title: "Cardiology Services",
    description: "Heart health screenings and consultations with experienced cardiologists. Includes ECG, blood pressure monitoring, and risk assessments.",
    image: "https://tse4.mm.bing.net/th/id/OIP.kBtVJsjlv3wciqmxgnS97wHaEP?w=892&h=511&rs=1&pid=ImgDetMain&o=7&rm=3",
    featured: false
  },
  {
    title: "Dermatology Consultation",
    description: "Expert skin evaluation to diagnose and treat various skin conditions, acne, allergies, and rashes. Personalized skincare recommendations.",
    image: "https://tse2.mm.bing.net/th/id/OIP.3rZnYT-N0oJ7j_OtoDYp2wHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    featured: false
  },
  {
    title: "Physiotherapy Sessions",
    description: "Rehabilitation and recovery through guided physical therapy sessions. Ideal for joint pain, sports injuries, and post-surgical care.",
    image: "https://tse1.mm.bing.net/th/id/OIP.Vv7Af29bcHNu3G_Z4VPM4gHaE8?w=978&h=652&rs=1&pid=ImgDetMain&o=7&rm=3",
    featured: false
  }
];

   const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Services', active: true }
  ];


  return (
    <div className="min-h-screen bg-white">
        <Header/>
      {/* Hero Section */}
       <PageHeader 
        title="Our Services"
        breadcrumbs={breadcrumbs}
        gradientFrom="blue-600"
        gradientVia="indigo-600"
        gradientTo="purple-700"
        description="Comprehensive healthcare services tailored to your needs"
      />

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                {service.featured ? (
                  // Featured Card - No Image, Blue Background
                  <div className="bg-blue-900 rounded-lg p-8 h-full flex flex-col justify-between text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <Stethoscope size={80} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                          <Stethoscope size={24} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <button className="flex items-center text-blue-200 hover:text-white transition-colors group-hover:translate-x-1 transform">
                        <span className="mr-2 text-sm font-medium">Learn More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  // Regular Cards with Images
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Icon Overlay */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Stethoscope size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                      </div>
                      
                      <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group-hover:translate-x-1 transform">
                        <span className="mr-2 text-sm font-medium">Learn More</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Services;