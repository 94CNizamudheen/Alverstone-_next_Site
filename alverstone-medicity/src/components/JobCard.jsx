import { MapPin, Clock, DollarSign } from 'lucide-react';

const JobCard = ({ job }) => (
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {job.type}
            </span>
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              {job.salary}
            </span>
          </div>
        </div>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {job.department}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {job.requirements.slice(0, 2).map((req, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          <span>Experience: {job.experience}</span>
          <span className="mx-2">•</span>
          <span>Posted {job.posted}</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
          Apply Now
        </button>
      </div>
    </div>
  );
  export default JobCard