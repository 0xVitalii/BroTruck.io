
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const vibes = [
  { 
    id: 'overland', 
    name: 'Overland Alpha', 
    baseImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800', 
    baseVehicle: 'Toyota Tacoma',
    prompt: 'A heavily modified Toyota Tacoma overlanding truck with a 3-inch lift kit, bronze off-road wheels, 33-inch mud-terrain tires, a hardshell roof-top tent on a bed rack, snorkel, steel front bumper with a winch and amber LED pods, set in a scenic mountain trail at golden hour, cinematic automotive photography, 8k resolution, rugged and aggressive.'
  },
  { 
    id: 'night', 
    name: 'Night Runner', 
    baseImage: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800', 
    baseVehicle: 'Ford Raptor',
    prompt: 'A custom widebody Ford F-150 Raptor with a satin charcoal wrap, forged carbon fiber hood vents, massive deep-dish black wheels with electric blue accents, bright neon blue underglow lighting, parked on a rainy city street in downtown Tokyo at night, neon signs reflecting on the wet pavement, aggressive low-and-wide stance, cinematic lighting, photorealistic 8k.'
  },
  { 
    id: 'snow', 
    name: 'Snow Monster', 
    baseImage: 'https://images.unsplash.com/photo-1620320498026-6819a67a038d?auto=format&fit=crop&q=80&w=800', 
    baseVehicle: 'Ram 1500 TRX',
    prompt: 'A tactical Ram 1500 TRX equipped with heavy-duty rubber snow tracks instead of tires, matte white and gray digital camo wrap, high-intensity white LED light bars on the roof and bumper, driving through a heavy blizzard in the Arctic, snow spraying from the tracks, extremely aggressive and powerful appearance, photorealistic 8k.'
  },
  { 
    id: 'mercedes', 
    name: 'Mercedes G-Bro', 
    baseImage: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800', 
    baseVehicle: 'Mercedes G-Class',
    prompt: 'A Mercedes-Benz G63 AMG modified into a rugged tactical bro truck, massive 40-inch mud tires on beadlock wheels, portal axles for extreme ground clearance, external black steel roll cage with a roof rack and full-size spare, matte olive drab paint with black trim, desert dunes in the background at sunrise, luxury meets extreme off-road, ultra-detailed 8k.'
  },
];

const VisualShowcase: React.FC = () => {
  const [activeVibe, setActiveVibe] = useState(vibes[0]);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const broify = async () => {
    setIsGenerating(true);
    setGeneratedImage(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: activeVibe.prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        }
      });

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData?.data) {
        setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
      }
    } catch (error) {
      console.error("Nanabanana failed to render:", error);
      setGeneratedImage(null); 
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    setGeneratedImage(null);
  }, [activeVibe]);

  return (
    <section id="examples" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-truck-orange/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            THE <span className="text-truck-orange italic">NANABANANA</span> ENGINE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
            Select a stock truck and see the AI transformation in seconds.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-3 mb-12 lg:mb-0">
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => setActiveVibe(vibe)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex justify-between items-center group relative overflow-hidden ${
                  activeVibe.id === vibe.id 
                  ? 'bg-truck-orange border-truck-orange shadow-[0_10px_40px_rgba(255,90,31,0.4)] scale-[1.03] z-10' 
                  : 'bg-zinc-900 border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <h3 className={`text-xl font-black italic tracking-tight ${activeVibe.id === vibe.id ? 'text-white' : 'text-gray-300'}`}>
                    {vibe.name}
                  </h3>
                  <p className={`text-sm font-bold uppercase tracking-widest ${activeVibe.id === vibe.id ? 'text-white/80' : 'text-gray-500'}`}>
                    {vibe.baseVehicle}
                  </p>
                </div>
                <div className={`transition-transform duration-300 ${activeVibe.id === vibe.id ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </button>
            ))}

            <div className="mt-8 p-6 bg-zinc-900/80 rounded-3xl border border-white/5 shadow-xl">
               <div className="flex items-center gap-2 mb-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">System Online</span>
               </div>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                "Our Neural Mod-Kit identifies factory features and applies realistic aftermarket builds in high fidelity."
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-zinc-900/50 p-4 sm:p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500">Stock Setup</span>
                    <span className="text-[10px] text-gray-700 font-bold uppercase tracking-widest">Original Image</span>
                  </div>
                  <div className="aspect-square relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                    <img 
                      src={activeVibe.baseImage} 
                      alt={`Stock ${activeVibe.baseVehicle}`} 
                      className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-black text-xl italic uppercase">{activeVibe.baseVehicle}</p>
                      <p className="text-xs text-truck-orange font-bold uppercase tracking-widest">Base Model</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-truck-orange">Bro-ified Rendering</span>
                    {generatedImage && (
                      <span className="text-[10px] bg-truck-orange text-white px-2 py-0.5 rounded-full font-black animate-pulse">NANABANANA AI</span>
                    )}
                  </div>
                  <div className="aspect-square relative rounded-3xl overflow-hidden border-2 border-dashed border-white/10 flex items-center justify-center bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    {isGenerating ? (
                      <div className="text-center relative z-10">
                        <div className="w-16 h-16 border-4 border-truck-orange border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                        <p className="text-truck-orange font-black animate-pulse text-lg uppercase tracking-tighter italic">Fabricating...</p>
                        <p className="text-white/40 text-[10px] font-bold mt-2 tracking-widest uppercase">Rendering Mods</p>
                      </div>
                    ) : generatedImage ? (
                      <img 
                        src={generatedImage} 
                        alt="AI Modified Build" 
                        className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
                      />
                    ) : (
                      <div className="text-center px-10">
                        <div className="w-20 h-20 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/5 group-hover:border-truck-orange/50 transition-colors">
                          <svg className="w-10 h-10 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-white font-black text-xl mb-2 italic">READY TO MOD?</h4>
                        <p className="text-gray-500 font-bold mb-8 text-sm">One tap to transform this truck.</p>
                        <button 
                          onClick={broify}
                          className="w-full bg-white text-black py-4 rounded-2xl font-black text-base hover:bg-truck-orange hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          RUN BRO-IFY
                        </button>
                      </div>
                    )}
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

export default VisualShowcase;
