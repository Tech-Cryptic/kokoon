import React from 'react';
import { Video, Shirt, UtensilsCrossed, Film, Gift, Plus } from 'lucide-react';

export default function Addons({ onOpenBooking }) {
  const addons = [
    { icon: Video, title: "Professional Videography", desc: "4K Highlight reel & coverage of your experience." },
    { icon: Shirt, title: "Custom T-Shirts", desc: "High quality branded apparel for the entire team." },
    { icon: UtensilsCrossed, title: "Premium Catering", desc: "Curated menu, snacks, & refreshing beverage bar." },
    { icon: Film, title: "Outdoor Movie Night", desc: "Cozy setup with screen, projector & popcorn." },
    { icon: Gift, title: "Gift Packs & Souvenirs", desc: "Custom branded swag boxes for participants." }
  ];

  return (
    <section id="addons" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-brand-pink font-bold text-xs uppercase tracking-widest mb-2">
              <Plus className="w-4 h-4" />
              <span>OPTIONAL EXTRAS</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Enhance Your Package With Add-Ons
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md mt-2 md:mt-0">
            Tailor any experience level with specialized add-on services to make your event extra memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {addons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                onClick={() => onOpenBooking(`Addon: ${item.title}`)}
                className="group bg-[#FAFAFD] hover:bg-purple-900 hover:text-white p-5 rounded-2xl border border-slate-200/80 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 group-hover:bg-brand-pink group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 group-hover:text-purple-200 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-purple-800 flex items-center justify-between text-[11px] font-bold text-brand-pink group-hover:text-white">
                  <span>Add to package</span>
                  <span>+</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
