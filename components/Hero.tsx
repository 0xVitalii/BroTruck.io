
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Give your truck the <span className="text-truck-orange">cinematic</span> treatment.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0">
              Upload a photo. Pick a vibe. Instantly see your truck in the wild. No mods, no money, just vibes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-extrabold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.96.95-2.04.8-2.04.8s-1.07-.12-2.31-.83c-1.24-.71-2.4-.78-2.4-.78s-1.21.07-2.45.83c-1.24.76-2.04.64-2.04.64s-1.13.2-2.15-.85c-1.02-1.05-3.04-4.88-3.04-8.86 0-3.98 2.04-7.55 5.51-7.55s4.23 2.15 4.23 2.15 1.02-1.28 3.51-1.28 4.41 1.95 4.41 5.37-1.14 7.55-3.68 10.36zm-4.76-17.51c-.13 0-.27.01-.4.04 1.15-2.32 3.65-2.81 3.65-2.81s.48 2.37-1.12 4.49c-1.25 1.64-2.13 1.54-2.13 1.54z"/>
                </svg>
                Download on App Store
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-sm">
                See Examples
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-black" src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
                ))}
              </div>
              <span>Join 50k+ truck owners dreaming big.</span>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative group">
            <div className="absolute inset-0 bg-truck-orange/20 blur-3xl rounded-full group-hover:bg-truck-orange/30 transition-all duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000" 
              alt="Cinematic Truck" 
              className="relative rounded-3xl shadow-2xl border border-white/10 transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-2xl border border-white/10 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-truck-orange rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Applied Vibe</p>
                  <p className="text-lg font-extrabold text-white">Overland Alpha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
