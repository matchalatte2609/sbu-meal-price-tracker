import React from 'react';
import { ArrowLeft } from 'lucide-react';

const DiningHallsPage = ({ navigateTo }) => {
  const diningHalls = [
    { id: 1, name: 'SAC Food Court', image: '/api/placeholder/300/150' },
    { id: 2, name: 'West Side Dining', image: '/api/placeholder/300/150' },
    { id: 3, name: 'East Side Dining', image: '/api/placeholder/300/150' },
    { id: 4, name: 'Jasmine', image: '/api/placeholder/300/150' },
    { id: 5, name: 'Roth', image: '/api/placeholder/300/150' }
  ];

  return (
    <div className="pb-16">
      <div className="p-4">
        <button onClick={() => navigateTo('main')} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-4">Dining Halls</h1>
        
        <div className="space-y-4">
          {diningHalls.map(hall => (
            <div key={hall.id} className="mb-6">
              <img 
                src={hall.image} 
                alt={hall.name} 
                className="rounded-lg w-full h-40 object-cover mb-2"
              />
              <h2 className="font-semibold">{hall.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiningHallsPage;