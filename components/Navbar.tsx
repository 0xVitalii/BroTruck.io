
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-extrabold tracking-tighter">
              BRO<span className="text-truck-orange">TRUCK</span>.ai
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#examples" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"></a>
            <a href="#how-it-works" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"></a>
            <a 
              href="#" 
              className="bg-truck-orange hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
            >
              Get the App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
