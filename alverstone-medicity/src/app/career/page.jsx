//career
'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingUI from '@/components/LoadingUI';
import {  Clock, DollarSign, Users, Award, Heart, BookOpen, Shield, Search, Filter } from 'lucide-react';
import JobCard from '@/components/JobCard';

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => (<LoadingUI />),
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => (<LoadingUI />),
})
const PageHeader = dynamic(() => import('@/components/PageHeader'), {
  loading: () => (<LoadingUI />),
})



const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const breadcrumbs = [
    { label: 'Home', active: false },
    { label: 'Careers', active: true }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior Cardiologist',
      department: 'Cardiology',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$280,000 - $350,000',
      experience: '8+ years',
      posted: '2 days ago',
      description: 'We are seeking an experienced cardiologist to join our team. The ideal candidate will have extensive experience in interventional cardiology.',
      requirements: ['MD degree with cardiology specialization', 'Board certification', 'Fellowship training preferred', 'Strong communication skills']
    },
    {
      id: 2,
      title: 'Registered Nurse - ICU',
      department: 'Nursing',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$75,000 - $95,000',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Join our critical care team as an ICU nurse. Provide exceptional patient care in our state-of-the-art intensive care unit.',
      requirements: ['BSN degree', 'RN license', 'ICU experience', 'BLS and ACLS certification']
    },
    {
      id: 3,
      title: 'Medical Technologist',
      department: 'Laboratory',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$55,000 - $70,000',
      experience: '2+ years',
      posted: '3 days ago',
      description: 'Perform complex laboratory tests and procedures to assist in patient diagnosis and treatment.',
      requirements: ['Bachelor\'s degree in Medical Technology', 'ASCP certification', 'Laboratory experience', 'Attention to detail']
    },
    {
      id: 4,
      title: 'Physical Therapist',
      department: 'Rehabilitation',
      type: 'Part-time',
      location: 'New York, NY',
      salary: '$40,000 - $55,000',
      experience: '1+ years',
      posted: '5 days ago',
      description: 'Help patients recover and improve their physical function through therapeutic exercises and treatments.',
      requirements: ['DPT degree', 'State license', 'CPR certification', 'Excellent interpersonal skills']
    },
    {
      id: 5,
      title: 'Emergency Medicine Physician',
      department: 'Emergency',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$320,000 - $400,000',
      experience: '5+ years',
      posted: '1 day ago',
      description: 'Provide emergency medical care in our busy emergency department. Handle acute and life-threatening conditions.',
      requirements: ['MD degree', 'Emergency Medicine residency', 'Board certification', 'ACLS/PALS certification']
    },
    {
      id: 6,
      title: 'Administrative Assistant',
      department: 'Administration',
      type: 'Full-time',
      location: 'New York, NY',
      salary: '$35,000 - $45,000',
      experience: '1+ years',
      posted: '1 week ago',
      description: 'Support our medical staff with administrative duties including scheduling, documentation, and patient coordination.',
      requirements: ['High school diploma', 'Medical office experience preferred', 'Strong organizational skills', 'Proficient in MS Office']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage for you and your family'
    },
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-competitive compensation with performance-based bonuses'
    },
    {
      icon: BookOpen,
      title: 'Continuing Education',
      description: 'Professional development opportunities and tuition reimbursement'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling options and generous PTO policies'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Employee recognition and career advancement opportunities'
    },
    {
      icon: Shield,
      title: 'Retirement Plans',
      description: '401(k) with company matching and retirement planning assistance'
    }
  ];

  const departments = ['All', 'Cardiology', 'Nursing', 'Laboratory', 'Rehabilitation', 'Emergency', 'Administration'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesJobType = selectedJobType === '' || selectedJobType === 'All' || job.type === selectedJobType;
    
    return matchesSearch && matchesDepartment && matchesJobType;
  });

  

  return (
    <div className="min-h-screen bg-gray-50">
        <Header/>
      <PageHeader 
        title="Join Our Team"
        breadcrumbs={breadcrumbs}
        showImage={true}
        imageAlt="Medical Team"
        imageUrl="https://i.pinimg.com/originals/ea/4a/df/ea4adf16e1e40f3570cedaff3a8bc7c3.jpg"
        description="Build a rewarding career in healthcare with opportunities for growth and making a difference"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Why Work With Us Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team of dedicated healthcare professionals committed to providing exceptional patient care 
              while building meaningful careers in a supportive environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Search and Filters */}
        <div className="mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs, departments, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept === 'All' ? '' : dept}>{dept} Department</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type === 'All' ? '' : type}>{type} Jobs</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Job Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Open Positions 
            <span className="text-lg font-normal text-gray-600 ml-2">
              ({filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found)
            </span>
          </h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Sort by: Most Recent</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-16">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>

        {/* Application Process */}
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our mission to provide exceptional healthcare services. We're looking for passionate individuals 
              who want to make a difference in patients' lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Your Role</h3>
              <p className="text-gray-600">Browse our open positions and find the perfect match for your skills and interests.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-600">Complete our online application with your resume and cover letter.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Join Our Team</h3>
              <p className="text-gray-600">After the interview process, start your rewarding career with us.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Questions about our application process? Contact our HR team at 
              <a href="mailto:careers@medical-center.com" className="text-blue-600 hover:underline ml-1">careers@medical-center.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CareersPage;