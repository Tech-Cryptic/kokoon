import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-header shadow-md py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <span className={`font-black text-2xl tracking-tight transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              kokoon<span className="text-brand-pink text-3xl font-black">!</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`font-semibold text-sm transition-colors hover:text-brand-pink ${
              scrolled ? 'text-slate-700' : 'text-purple-100 hover:text-white'
            }`}>
              About
            </a>
            <a href="#packages" className={`font-semibold text-sm transition-colors hover:text-brand-pink ${
              scrolled ? 'text-slate-700' : 'text-purple-100 hover:text-white'
            }`}>
              Packages
            </a>
            <a href="#addons" className={`font-semibold text-sm transition-colors hover:text-brand-pink ${
              scrolled ? 'text-slate-700' : 'text-purple-100 hover:text-white'
            }`}>
              Add-Ons
            </a>
            <a href="#merch" className={`font-semibold text-sm transition-colors hover:text-brand-pink ${
              scrolled ? 'text-slate-700' : 'text-purple-100 hover:text-white'
            }`}>
              Merch
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => onOpenBooking('')}
              className="bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-pink-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Experience
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className={`w-7 h-7 ${scrolled ? 'text-slate-900' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-purple-900/50 px-4 pt-4 pb-6 space-y-3 text-center">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-medium text-lg hover:text-brand-pink"
          >
            About
          </a>
          <a 
            href="#packages" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-medium text-lg hover:text-brand-pink"
          >
            Packages
          </a>
          <a 
            href="#addons" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-medium text-lg hover:text-brand-pink"
          >
            Add-Ons
          </a>
          <a 
            href="#merch" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-medium text-lg hover:text-brand-pink"
          >
            Merch
          </a>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking('');
            }}
            className="w-full mt-2 bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-base py-3 rounded-full shadow-lg"
          >
            Book Experience
          </button>
        </div>
      )}
    </header>
  );
}
