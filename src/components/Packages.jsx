import React from 'react';
import { Check, ArrowRight, ArrowLeft, Bus } from 'lucide-react';

export default function Packages({ onOpenBooking }) {
  const packages = [
    {
      id: "team-connect",
      title: "TEAM CONNECT",
      tagline: "Perfect for startups and small teams.",
      outcome: "Build trust and improve communication.",
      includesHeader: "INCLUDES",
      includes: [
        "Professional facilitator",
        "Icebreakers",
        "Curated tabletop games",
        "Team challenges",
        "Group photo",
        "Basic event coordination"
      ],
      price: "₦500,000",
      cap: "COVERS UP TO 20 PEOPLE",
      addl: "Additional participants: ₦25,000 per person",
      transport: "TRANSPORT NOT INCLUDED",
      transportIncluded: false,
      headerBg: "bg-emerald-600 text-white",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700 text-white",
      borderAccent: "border-emerald-200",
      isPopular: false
    },
    {
      id: "corporate-standard",
      title: "CORPORATE STANDARD",
      tagline: "Ideal for growing companies and department outings.",
      outcome: "Strengthen collaboration across departments.",
      includesHeader: "INCLUDES EVERYTHING IN TEAM CONNECT PLUS:",
      includes: [
        "Leadership & communication challenges",
        "Marathon challenges",
        "Refreshments"
      ],
      price: "₦950,000",
      cap: "COVERS UP TO 50 PEOPLE",
      addl: "Additional participants: ₦30,000 per person",
      transport: "TRANSPORT NOT INCLUDED",
      transportIncluded: false,
      headerBg: "bg-blue-600 text-white",
      buttonBg: "bg-blue-600 hover:bg-blue-700 text-white",
      borderAccent: "border-blue-200",
      isPopular: false
    },
    {
      id: "corporate-premium",
      title: "CORPORATE PREMIUM",
      tagline: "A fully managed experience with zero logistics stress.",
      outcome: "Deliver a seamless, memorable team experience.",
      includesHeader: "INCLUDES EVERYTHING IN CORPORATE STANDARD PLUS:",
      includes: [
        "Round-trip transportation",
        "Premium refreshments",
        "Professional photography",
        "Team awards",
        "Customized itinerary"
      ],
      price: "₦2,100,000",
      cap: "COVERS UP TO 50 PEOPLE",
      addl: "Additional participants: ₦50,000 per person",
      transport: "TRANSPORT INCLUDED — offices within the island",
      transportIncluded: true,
      headerBg: "bg-purple-800 text-white",
      buttonBg: "bg-purple-800 hover:bg-purple-900 text-white",
      borderAccent: "border-purple-300 ring-2 ring-purple-500",
      isPopular: true
    },
    {
      id: "ultimate-retreat",
      title: "ULTIMATE RETREAT",
      tagline: "For large teams, annual retreats and leadership off-sites.",
      outcome: "Transform your retreat into a high-impact experience.",
      includesHeader: "MAY INCLUDE:",
      includes: [
        "Fully customized itinerary",
        "Multiple game experiences",
        "Murder mystery experience",
        "Spa & meals",
        "Evening social activities",
        "Transportation & Photography",
        "Branded souvenirs",
        "Dedicated production team"
      ],
      price: "CUSTOM QUOTATION",
      cap: "TAILORED TO YOUR TEAM",
      addl: "",
      transport: "",
      transportIncluded: false,
      headerBg: "bg-amber-600 text-white",
      buttonBg: "bg-amber-600 hover:bg-amber-700 text-white",
      borderAccent: "border-amber-200",
      isPopular: false
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#FAFAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-brand-pink font-bold text-sm uppercase tracking-widest">
            <span className="text-lg">→</span>
            <span>CHOOSE THE EXPERIENCE THAT FITS YOUR TEAM</span>
            <span className="text-lg">←</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Pricing. Unmatched Value.
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Flexible packages. Clear value. Results your team will feel.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`bg-white rounded-2xl overflow-hidden shadow-lg border flex flex-col justify-between relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${pkg.borderAccent}`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-brand-pink text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-lg shadow-md z-10">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header */}
                <div className={`p-6 text-center ${pkg.headerBg}`}>
                  <h3 className="font-extrabold text-xl tracking-tight uppercase mb-1">{pkg.title}</h3>
                  <p className="text-xs opacity-90 leading-tight font-normal">{pkg.tagline}</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  
                  {/* Outcome */}
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                      OUTCOME
                    </span>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {pkg.outcome}
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2">
                      {pkg.includesHeader}
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Footer / Pricing */}
              <div className="p-6 pt-0 space-y-4">
                <div className="border-t border-slate-100 pt-4 text-center">
                  <div className="text-2xl font-black text-slate-900 tracking-tight">
                    {pkg.price}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                    {pkg.cap}
                  </div>
                  {pkg.addl && (
                    <div className="text-[11px] text-slate-500 mt-1">
                      {pkg.addl}
                    </div>
                  )}
                  {pkg.transport && (
                    <div className={`text-[10px] font-bold uppercase tracking-wider mt-2 py-1 px-2 rounded ${
                      pkg.transportIncluded 
                        ? 'bg-purple-100 text-purple-800 flex items-center justify-center space-x-1' 
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {pkg.transportIncluded && <Bus className="w-3 h-3 mr-1" />}
                      <span>{pkg.transport}</span>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => onOpenBooking(pkg.title)}
                  className={`w-full font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl transition-colors shadow-md ${pkg.buttonBg}`}
                >
                  Select Package
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
