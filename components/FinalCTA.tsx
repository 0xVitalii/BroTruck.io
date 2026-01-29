
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-truck-orange relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Stop dreaming. <br />Start building.
        </h2>
        <p className="text-white/80 text-xl font-semibold mb-10 max-w-xl mx-auto">
          One photo is all it takes to see the beast within. Join the community today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="w-full sm:w-auto px-10 py-5 bg-black text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
             <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.96.95-2.04.8-2.04.8s-1.07-.12-2.31-.83c-1.24-.71-2.4-.78-2.4-.78s-1.21.07-2.45.83c-1.24.76-2.04.64-2.04.64s-1.13.2-2.15-.85c-1.02-1.05-3.04-4.88-3.04-8.86 0-3.98 2.04-7.55 5.51-7.55s4.23 2.15 4.23 2.15 1.02-1.28 3.51-1.28 4.41 1.95 4.41 5.37-1.14 7.55-3.68 10.36zm-4.76-17.51c-.13 0-.27.01-.4.04 1.15-2.32 3.65-2.81 3.65-2.81s.48 2.37-1.12 4.49c-1.25 1.64-2.13 1.54-2.13 1.54z"/>
              </svg>
            Download on App Store
          </button>
          <p className="text-white/60 font-bold hidden sm:block">OR</p>
          <p className="text-white font-bold text-sm">Scan to download</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
