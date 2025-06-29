import React from 'react';

const LoadingUI = () => {
  return (
    <div className="animate-pulse space-y-4 p-4 max-w-xl mx-auto">
      {/* Image/thumbnail placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-lg"></div>

      {/* Title placeholder */}
      <div className="h-5 bg-gray-200 rounded w-3/4"></div>

      {/* Description lines */}
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export default LoadingUI;
