'use client'
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import LoadingUI from '@/components/LoadingUI';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />),
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />),
});
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => (<LoadingUI />),
});

const page = () => {
  const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'About Us', active: true }
  ];

  const features = [
    "A Passion for Healing",
    "5-Star Care",
    "All our best",
    "Always Caring",
    "Believe in Us",
    "A Legacy of Excellence"
  ];

  const imageUrls = [
    'https://medcity.alverstones.com/images/specialized_doctors.png',
    'https://medcity.alverstones.com/images/modern_facilities.png',
    'https://medcity.alverstones.com/images/emergency_services.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % imageUrls.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  const currentImage = imageUrls[currentImageIndex];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <PageHeader
        title="About Our Medical Center"
        breadcrumbs={breadcrumbs}
        showImage={true}
        description="Providing quality healthcare services since 1985"
      />

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <p className="text-blue-600 text-sm font-medium tracking-wide uppercase mb-2">
                  WELCOME TO HOSPITAL NAME
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Best Care for Your Good Health
                </h2>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Description Text */}
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Alverstone Drug House Pvt. Ltd. was founded in 2020 through the collective vision and efforts of expatriates from Kerala. What began as a united initiative has now grown into a thriving business group with over 100 active members. Rooted in the idea that every individual should have the opportunity to build their own business, we have built this organization through collaboration and trust.
                </p>
                <p>
                  Today, we are proud to be expanding our healthcare network, with plans to establish hospitals in every district of Kerala — from Thiruvananthapuram to Kasaragod. The first step in this journey begins at Chandanathope, Kollam.
                </p>
                <p>
                  With a strong presence in the medical sector in India and abroad, Alverstone welcomes individuals who share our vision to join us. Built on a foundation of trust and community, our organization invites you to invest in a business that is growing in your very own hometown. Together, let's build a healthier future.
                </p>
              </div>
            </div>

            {/* Right Slideshow Image */}
            <div className="lg:pl-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={currentImage}
                  alt="Medical facilities"
                  className="w-full h-96 object-cover transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
    <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
    <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
  

    {/* Profile Image */}
    <div className="mb-6">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_Gandhi.jpg"
        alt="Mahatma Gandhi"
        className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
      />
    </div>

    {/* Quote */}
    <blockquote className="text-xl text-white leading-relaxed max-w-3xl mx-auto mb-8">
      "The best way to find yourself is to lose yourself in the service of others."
    </blockquote>

    {/* Author Name */}
    <div className="text-center">
      <p className="text-white font-semibold text-lg mb-2">Mahatma Gandhi</p>

      {/* Rating Dots */}
      <div className="flex justify-center space-x-2">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
};

export default page;
