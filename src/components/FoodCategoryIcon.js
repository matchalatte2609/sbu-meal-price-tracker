import React from 'react';

const FoodCategoryIcon = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full mb-1">
        <span className="text-2xl">{icon}</span>
      </div>
      <span className="text-xs">{name}</span>
    </div>
  );
};

export default FoodCategoryIcon;