import React from 'react';
import { Home, Search, Clock, User } from 'lucide-react';

const NavBar = ({ currentPage, navigateTo }) => {
  return (
    <nav className="bg-white border-t border-gray-200 p-4 flex justify-around max-w-lg mx-auto w-full">
      <button 
        onClick={() => navigateTo('main')} 
        className={`flex flex-col items-center text-xs ${currentPage === 'main' ? 'text-blue-600' : ''}`}
      >
        <Home size={24} />
        <span>Home</span>
      </button>
      <button className="flex flex-col items-center text-xs">
        <Search size={24} />
        <span>Browse</span>
      </button>
      <button className="flex flex-col items-center text-xs">
        <Clock size={24} />
        <span>Purchase History</span>
      </button>
      <button 
        onClick={() => navigateTo('profile')} 
        className={`flex flex-col items-center text-xs ${currentPage === 'profile' ? 'text-blue-600' : ''}`}
      >
        <User size={24} />
        <span>Profile</span>
      </button>
    </nav>
  );
};

export default NavBar;