
import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic uppercase">
            THE <span className="text-truck-orange">BRO</span> GALLERY
          </h2>
          <p className="text-gray-400 text-xl font-bold italic tracking-tight">The best builds aren't built in a shop. They're built in BroTruck.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Main Hero Shot - Ford Raptor */}
          <div className="col-span-2 row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Night Ford Raptor" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10">
              <span className="bg-truck-orange px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-3 inline-block shadow-lg">Community Build</span>
              <h4 className="text-4xl font-black italic leading-none">RAPTOR ASSAULT v1.0</h4>
            </div>
          </div>

          {/* Toyota Tacoma */}
          <div className="aspect-square relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
            <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Overland Toyota Tacoma" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <span className="text-white font-black text-xs tracking-widest uppercase italic bg-truck-orange px-4 py-2 rounded-lg">Overland Tacoma</span>
            </div>
          </div>
          
          <div className="aspect-square relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
            <img src="https://images.unsplash.com/photo-1549437175-103762886f44?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Tactical G-Wagon" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <span className="text-white font-black text-xs tracking-widest uppercase italic bg-truck-orange px-4 py-2 rounded-lg">Tactical Benz</span>
            </div>
          </div>

          <div className="aspect-square relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
            <img src="https://images.unsplash.com/photo-1620320498026-6819a67a038d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="TRX Snow" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <span className="text-white font-black text-xs tracking-widest uppercase italic bg-truck-orange px-4 py-2 rounded-lg">Arctic RAM</span>
            </div>
          </div>

          <div className="aspect-square relative group rounded-3xl overflow-hidden border border-white/5 shadow-xl">
            <img src="https://images.unsplash.com/photo-1606577924006-27d39b132ee6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Clean Silver" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <span className="text-white font-black text-xs tracking-widest uppercase italic bg-truck-orange px-4 py-2 rounded-lg">Premium Build</span>
            </div>
          </div>

          <div className="col-span-2 aspect-[2/1] relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Bro Truck Squad" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex items-center px-12">
               <div>
                  <h5 className="text-4xl font-black mb-2 italic tracking-tighter">THE SQUAD GOALS</h5>
                  <p className="text-gray-400 text-lg font-bold">Share your builds. Flex your vision.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
