import React from 'react';
import { FaUtensils } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-100 via-orange-50 to-pink-100 text-orange-800">
      <FaUtensils className="text-6xl animate-bounce mb-4" />
      <h1 className="text-3xl font-bold mb-2">Cooking something delicious...</h1>
      <p className="text-sm">Please wait while we prepare your recipe 🍲</p>
      <div className="mt-6 w-24 h-1.5 bg-orange-300 rounded-full overflow-hidden">
        <div className="w-full h-full bg-orange-500 animate-pulse" />
      </div>
    </div>
  );
};

export default Loading;