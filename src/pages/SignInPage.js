import React, { useState } from 'react';

const SignInPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email);
  };
  
  return (
    <div className="flex flex-col p-6 items-center">
      <div className="py-4 w-full">
        <div className="text-right text-xs p-2">9:41</div>
        <div className="flex justify-between text-xs px-2">
          <div>••••</div>
          <div>WiFi • Battery</div>
        </div>
      </div>
      
      <div className="w-full flex flex-col items-center mb-8">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-red-600 w-16 h-16 flex items-center justify-center rounded-lg mr-2">
            <div className="text-white text-2xl">SB</div>
          </div>
          <div className="text-2xl font-bold">
            Stony Brook <br/> University
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-8">Meal Price Tracker</h1>
      </div>
      
      <div className="w-full mb-8">
        <h2 className="text-lg font-semibold mb-2">Log in with your NetID</h2>
        <p className="text-sm mb-4">Enter your Stony Brook email to log in for this app</p>
        
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="email"
            placeholder="email@stonybrook.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-black text-white p-3 rounded mb-4"
          >
            Continue
          </button>
        </form>
        
        <div className="flex items-center justify-center my-4">
          <div className="border-t border-gray-300 flex-1"></div>
          <div className="mx-4 text-gray-500">or</div>
          <div className="border-t border-gray-300 flex-1"></div>
        </div>
        
        <button className="w-full bg-gray-100 p-3 rounded mb-4 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
            <span className="text-blue-600">G</span>
          </div>
          Continue with Google
        </button>
        
        <button className="w-full bg-gray-100 p-3 rounded mb-4 flex items-center justify-center">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mr-2">
            <span className="text-white text-xs">SB</span>
          </div>
          NetID Single Sign On
        </button>
      </div>
      
      <div className="text-xs text-center text-gray-500">
        By clicking continue, you agree to our <span className="text-blue-600">Terms of Service</span> and <span className="text-blue-600">Privacy Policy</span>
      </div>
    </div>
  );
};

export default SignInPage;