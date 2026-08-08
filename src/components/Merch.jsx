import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function Merch({ onOpenBooking }) {
  const merchItems = [
    { title: "Custom Team Tees", image: "/6.jpeg", tag: "Merch Drop" },
    { title: "Branded Swag Kits", image: "/12.jpeg", tag: "Popular" },
    { title: "Event Tote Bags", image: "/14.jpeg", tag: "Coming Soon" },
    { title: "Participant Caps", image: "/1.jpeg", tag: "Limited" },
  ];

  return (
    <section id="merch" className="py-16 bg-[#FAFAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-brand-pink font-bold text-xs uppercase tracking-widest">
            <ShoppingBag className="w-4 h-4" />
            <span>KOKOON! MERCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Rep The Vibe
          </h2>
          <p className="text-sm text-slate-600 font-normal">
            Official Kokoon! branded gear — designed to be worn with pride, not just at the event.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchItems.map((item, idx) => (
            <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">{item.title}</h3>
                  <span className="text-xs text-slate-500">Available for orders</span>
                </div>
                <button 
                  onClick={() => onOpenBooking(`Merch: ${item.title}`)}
                  className="text-xs font-bold text-brand-pink hover:text-brand-pinkHover underline"
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
