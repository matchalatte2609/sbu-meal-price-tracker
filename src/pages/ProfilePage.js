import React from 'react';

const ProfilePage = () => {
  return (
    <div className="pb-16">
      <div className="bg-red-600 h-40 relative">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-white flex items-center justify-center overflow-hidden">
            <img 
              src="/api/placeholder/100/100" 
              alt="Profile Picture" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="pt-16 pb-4 text-center">
        <h1 className="text-xl font-bold">Wolfie</h1>
      </div>
      
      <div className="p-4">
        <div className="rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="font-semibold mb-2">Account Information</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Email:</span>
              <span>wolfie@stonybrook.edu</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Student ID:</span>
              <span>123456789</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Meal Plan:</span>
              <span>Unlimited</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="font-semibold mb-2">Preferences</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Notifications</span>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full relative">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-gray-200 p-4">
          <h2 className="font-semibold mb-2">Meal History</h2>
          <p className="text-sm text-gray-600">View your recent meal purchases and dining history.</p>
          <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg">View History</button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;