import React from 'react';

const DiningHallCard = ({ name, image }) => {
  return (
    <div className="min-w-40">
      <img 
        src={image} 
        alt={name} 
        className="rounded-lg h-24 w-full object-cover mb-2"
      />
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
};

export default DiningHallCard;