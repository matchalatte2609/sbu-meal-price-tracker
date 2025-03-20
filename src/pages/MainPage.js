import React from 'react';
import { Search } from 'lucide-react';
import FoodCategoryIcon from '../components/FoodCategoryIcon';
import DiningHallCard from '../components/DiningHallCard';
import MealCard from '../components/MealCard';
import DrinkCard from '../components/DrinkCard';

const MainPage = ({ navigateTo }) => {
  const foodCategories = [
    { id: 1, name: 'Drinks', icon: '🥤' },
    { id: 2, name: 'Dessert', icon: '🧁' },
    { id: 3, name: 'Fast Food', icon: '🍔' },
    { id: 4, name: 'Chinese', icon: '🥡' },
    { id: 5, name: 'Japanese', icon: '🍱' },
    { id: 6, name: 'Healthy', icon: '🥗' },
    { id: 7, name: 'Pizza', icon: '🍕' },
    { id: 8, name: 'Mexican', icon: '🌮' },
    { id: 9, name: 'Asian', icon: '🍜' }
  ];
  
  const diningHalls = [
    { id: 1, name: 'West Side Dining', image: '/api/placeholder/300/150' },
    { id: 2, name: 'East Side Dining', image: '/api/placeholder/300/150' },
    { id: 3, name: 'Roth', image: '/api/placeholder/300/150' }
  ];
  
  const mealRecommendations = [
    { id: 1, name: 'Char Siu Roast Pork', price: '$11.4', calories: '320 Cal', location: 'West Side', image: '/api/placeholder/150/100' },
    { id: 2, name: 'Chicken Teriyaki Sushi Roll', price: '$10.1', calories: '350 Cal', location: 'Sushi Do - Jasmine', image: '/api/placeholder/150/100' },
    { id: 3, name: 'Jumbo Cheese Stuffed Shells', price: '$11.4', calories: '580 Cal', location: 'Savor - Roth', image: '/api/placeholder/150/100' }
  ];
  
  const drinkLocations = [
    { id: 1, name: "Dunkin' | SAC", image: '/api/placeholder/300/150' },
    { id: 2, name: "Peet's Coffee", image: '/api/placeholder/300/150' },
    { id: 3, name: "Starbucks", image: '/api/placeholder/300/150' }
  ];
  
  const drinkRecommendations = [
    { id: 1, name: 'Iced Matcha Green Tea Latte', price: '$4.75 - $5.45', location: 'Starbucks - Roth', image: '/api/placeholder/150/100' },
    { id: 2, name: 'Iced Latte', price: '$5.36', location: "Dunkin' - SAC", image: '/api/placeholder/150/100' },
    { id: 3, name: 'Cold Brew', price: '$5.11', location: "Dunkin' - SAC", image: '/api/placeholder/150/100' }
  ];

  return (
    <div className="pb-16">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="mr-2">🎓</span>
          <span>Student Activities Center</span>
          <span className="ml-1">▼</span>
        </div>
        <div className="w-8 h-8 bg-red-600 rounded-full"></div>
      </div>
      
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search meals, prices, dining halls, brands..."
            className="w-full p-3 pl-10 bg-gray-100 rounded-full"
          />
        </div>
      </div>
      
      <div className="px-4 overflow-x-auto">
        <div className="flex space-x-4 mb-6 w-max">
          {foodCategories.map(category => (
            <div key={category.id} className="flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full mb-1">
                <span className="text-2xl">{category.icon}</span>
              </div>
              <span className="text-xs">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <section className="mb-6">
        <div className="px-4 flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Dining Halls</h2>
          <button onClick={() => navigateTo('dininghalls')} className="text-black">
            →
          </button>
        </div>
        <div className="px-4 flex space-x-4 overflow-x-auto">
          {diningHalls.map(hall => (
            <div key={hall.id} className="min-w-40">
              <img 
                src={hall.image} 
                alt={hall.name} 
                className="rounded-lg h-24 w-full object-cover mb-2"
              />
              <h3 className="font-semibold">{hall.name}</h3>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-6">
        <div className="px-4 flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Meals Recommendations</h2>
          <button className="text-black">→</button>
        </div>
        <div className="px-4 flex space-x-4 overflow-x-auto">
          {mealRecommendations.map(meal => (
            <div key={meal.id} className="min-w-40">
              <img 
                src={meal.image} 
                alt={meal.name} 
                className="rounded-lg h-24 w-full object-cover mb-2"
              />
              <h3 className="font-semibold text-sm">{meal.name}</h3>
              <p className="text-xs text-gray-600">{meal.price} | {meal.calories}</p>
              <p className="text-xs text-gray-600">{meal.location}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-6">
        <div className="px-4 flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Drinks</h2>
          <button className="text-black">→</button>
        </div>
        <div className="px-4 flex space-x-4 overflow-x-auto">
          {drinkLocations.map(location => (
            <div key={location.id} className="min-w-40">
              <img 
                src={location.image} 
                alt={location.name} 
                className="rounded-lg h-24 w-full object-cover mb-2"
              />
              <h3 className="font-semibold">{location.name}</h3>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-6">
        <div className="px-4 flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">Drinks Recommendations</h2>
          <button className="text-black">→</button>
        </div>
        <div className="px-4 flex space-x-4 overflow-x-auto">
          {drinkRecommendations.map(drink => (
            <div key={drink.id} className="min-w-40">
              <img 
                src={drink.image} 
                alt={drink.name} 
                className="rounded-lg h-24 w-full object-cover mb-2"
              />
              <h3 className="font-semibold text-sm">{drink.name}</h3>
              <p className="text-xs text-gray-600">{drink.price}</p>
              <p className="text-xs text-gray-600">{drink.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;