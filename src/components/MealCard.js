import React from 'react';

const MealCard = ({ name, price, calories, location, image }) => {
  return (
    <div className="min-w-40">
      <img 
        src={image} 
        alt={name} 
        className="rounded-lg h-24 w-full object-cover mb-2"
      />
      <h3 className="font-semibold text-sm">{name}</h3>
      <p className="text-xs text-gray-600">{price} | {calories}</p>
      <p className="text-xs text-gray-600">{location}</p>
    </div>
  );
};

export default MealCard;