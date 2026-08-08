import React from 'react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[85vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#2E0854] via-[#4C1D95] to-[#FAFAFD] text-white">
      
      {/* Editorial Watermark Kokoon text in top-right background (matches flyer watermark) */}
      <div 
        className="absolute top-4 right-[-4%] select-none pointer-events-none opacity-[0.07] font-black text-[22vw] leading-none uppercase text-white tracking-tighter z-0"
        aria-hidden="true"
      >
        KOKOON!
      </div>

      {/* Decorative Subtle Comic Flash shape matching flyer background */}
      <div className="absolute top-10 right-[5%] w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-200">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
              <span>Corporate Team Bonding Experiences</span>
            </div>

            {/* Main Headline (Editorial style matching flyer) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05]">
              Experiences<br />
              That Build<br />
              <span className="text-brand-pink drop-shadow-sm">Stronger Teams</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-purple-100/90 font-normal max-w-2xl leading-relaxed">
              We design immersive, game-powered experiences that strengthen communication, spark creativity and build lasting connections.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#packages"
                className="bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-pink-600/30 transition-all transform hover:-translate-y-0.5"
              >
                Choose Package →
              </a>
              <button
                onClick={() => onOpenBooking('')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-base px-8 py-3.5 rounded-full backdrop-blur-sm transition-all"
              >
                Book Experience
              </button>
            </div>

          </div>

          {/* Right Column: Clean Brand Showcase Card (No floating childish element) */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1 transition-transform hover:rotate-0 duration-500">
              <img 
                src="/3.jpeg" 
                alt="Kokoon! Experience" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-brand-pink font-bold text-xs uppercase tracking-widest block">Immersive & Fun</span>
                  <p className="text-white font-bold text-lg">Game-powered team transformations</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
