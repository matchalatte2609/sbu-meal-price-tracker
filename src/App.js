import React, { useState } from 'react';
import SignInPage from './pages/SignInPage';
import MainPage from './pages/MainPage';
import DiningHallsPage from './pages/DiningHallsPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './components/NavBar';
import './styles/index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('signin');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Function to handle navigation
  const navigateTo = (page) => {
    setCurrentPage(page);
  };
  
  // Function to handle login
  const handleLogin = (email) => {
    if (email) {
      setIsLoggedIn(true);
      navigateTo('main');
    }
  };
  
  // Render appropriate page based on current state
  const renderPage = () => {
    switch(currentPage) {
      case 'signin':
        return <SignInPage onLogin={handleLogin} />;
      case 'main':
        return <MainPage navigateTo={navigateTo} />;
      case 'dininghalls':
        return <DiningHallsPage navigateTo={navigateTo} />;
      case 'profile':
        return <ProfilePage navigateTo={navigateTo} />;
      default:
        return <SignInPage onLogin={handleLogin} />;
    }
  };
  
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className="bg-gray-800 text-gray-300 p-4 text-xl">
        {currentPage === 'signin' && 'Sign In'}
        {currentPage === 'main' && 'Home'}
        {currentPage === 'dininghalls' && 'Dining Halls'}
        {currentPage === 'profile' && 'Profile'}
      </div>
      <main className="flex-1 bg-white max-w-lg mx-auto w-full">
        {renderPage()}
      </main>
      {isLoggedIn && <NavBar currentPage={currentPage} navigateTo={navigateTo} />}
    </div>
  );
};

export default App;