
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'SNAP A STOCK PHOTO',
    desc: 'Don’t worry about the background or the dirt. Just get the angle right.',
    icon: (
      <svg className="w-12 h-12 text-truck-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'INJECT THE VIBE',
    desc: 'Pick from our curated Nanabanana styles like Overland, Tactical, or Night.',
    icon: (
      <svg className="w-12 h-12 text-truck-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'DEPLOY TO THE FEED',
    desc: 'Download your high-res dream build and let the group chat go wild.',
    icon: (
      <svg className="w-12 h-12 text-truck-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-black mb-4 tracking-tighter italic">THREE STEPS TO <span className="text-truck-orange">GLORY</span>.</h2>
          <p className="text-gray-400 font-bold text-lg">No CAD skills required. Just your phone and a dream.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="absolute -top-12 -left-6 text-9xl font-black text-white/5 group-hover:text-truck-orange/10 transition-colors pointer-events-none">
                {step.number}
              </div>
              <div className="mb-8 relative z-10 transition-transform duration-500 group-hover:-translate-y-2">{step.icon}</div>
              <h3 className="text-3xl font-black mb-4 italic tracking-tight relative z-10">{step.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed text-lg relative z-10">{step.desc}</p>
              
              <div className="mt-8 h-1 w-0 bg-truck-orange transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
