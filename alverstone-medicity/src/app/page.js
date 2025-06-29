import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => (<LoadingUI />)
});
const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => (<LoadingUI />)
});
const Doctors = dynamic(() => import('@/components/Doctors'), {
  loading: () => (<LoadingUI />)
});
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />)
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />)
});
const Hero = dynamic(() => import('@/components/Hero'), {
  loading: () => (<LoadingUI />)
});
const Service = dynamic(() => import('@/components/Service'), {
  loading: () => (<LoadingUI />)
});
const Specialities = dynamic(() => import('@/components/Specialities'), {
  loading: () => (<LoadingUI />)
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => (<LoadingUI />)
});

import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero/>
      <AboutSection/>
      <Service/>
      <Specialities/>
      <Doctors/>
      <Testimonials/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page
