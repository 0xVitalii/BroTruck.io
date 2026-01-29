
import React from 'react';

const benefits = [
  'Tacoma, Raptor, & G-Wagon Tuned',
  'Recognizes Off-Road Lift Kits',
  'Pro-Grade Tire & Wheel Rendering',
  'Nanabanana v2.5 Lighting Engine',
  '4K Export for Wallpapers',
  'Zero Design Skills Required'
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="mb-16 lg:mb-0 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-truck-orange/10 border border-truck-orange/30 rounded-full mb-8">
               <div className="w-2 h-2 rounded-full bg-truck-orange animate-ping"></div>
               <span className="text-truck-orange text-xs font-black uppercase tracking-widest">Industry First</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
              BEYOND FILTERS.<br />THIS IS <span className="text-truck-orange italic">FABRICATION</span>.
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center group-hover:border-truck-orange/50 transition-colors">
                    <svg className="w-5 h-5 text-truck-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-black italic text-gray-300 group-hover:text-white transition-colors">{benefit}</p>
                </div>
              ))}
            </div>
            
            <button className="px-10 py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-truck-orange hover:text-white transition-all transform hover:rotate-1">
               BUILD YOUR RIG NOW
            </button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-truck-orange/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1549437175-103762886f44?auto=format&fit=crop&q=80&w=1000" 
                alt="Tactical Mercedes G-Wagon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute top-10 right-10 flex flex-col items-end">
                 <div className="px-4 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full mb-2">
                    <p className="text-[10px] font-black tracking-widest uppercase text-truck-orange">Build No. #0842</p>
                 </div>
                 <p className="text-white font-black text-sm italic">"Tactical G-Edition"</p>
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5 text-truck-orange" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p className="text-3xl font-black text-white italic mb-4 leading-tight">
                  "It saw my stock G-Wagon and turned it into a 6x6 beast. Unreal."
                </p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-truck-orange flex items-center justify-center font-black text-black">B</div>
                   <div>
                     <p className="text-white font-black text-sm uppercase">Brandon S.</p>
                     <p className="text-gray-500 font-bold text-xs">G63 Owner • Houston, TX</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
