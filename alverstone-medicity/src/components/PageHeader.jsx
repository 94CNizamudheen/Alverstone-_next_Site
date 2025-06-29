
import React from 'react';

// Reusable PageHeader Component
const PageHeader = ({ 
  title, 
  breadcrumbs = [], 
  showImage = false, 
  imageUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  imageAlt = "Representative",
  description = null
}) => {
  return (
    <div className={'relative bg-gray-500 text-white py-16'}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="flex items-center text-sm mb-4 opacity-90">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <span className={crumb.active ? 'text-white' : 'text-blue-100 hover:text-white cursor-pointer'}>
                      {crumb.label}
                    </span>
                    {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                  </React.Fragment>
                ))}
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            
            {/* Optional Description */}
            {description && (
              <p className="text-xl text-blue-100 max-w-2xl">
                {description}
              </p>
            )}
          </div>
          
          {/* Optional Image */}
          {showImage && (
            <div className="hidden lg:block">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-32 h-32 rounded-full border-4 border-white/20 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageHeader