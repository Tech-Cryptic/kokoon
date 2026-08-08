import React from 'react';
import { Phone, Mail, Instagram, Calendar, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden">
      
      {/* Top Banner Callout matching flyer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-purple-900 via-brand-purple to-purple-900 rounded-3xl p-8 sm:p-12 shadow-2xl border border-purple-700/50 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="inline-flex items-center space-x-2 text-brand-pink font-bold text-xs uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>BOOK EARLY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Secure Your Preferred Date Today!
            </h2>
            <p className="text-sm text-purple-200 font-normal max-w-xl">
              Corporate dates fill up fast — don't let your team miss out on the experience of a lifetime.
            </p>
          </div>

          <button 
            onClick={() => onOpenBooking('')}
            className="z-10 shrink-0 bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-pink-500/40 transition-all transform hover:-translate-y-0.5"
          >
            Book An Experience →
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-black text-3xl tracking-tight text-white">
              kokoon<span className="text-brand-pink text-4xl">!</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
              We design immersive, game-powered experiences that strengthen communication, spark creativity and build lasting connections.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://instagram.com/kokoonverse" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:kokoonverse@gmail.com" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="tel:+2349049680200" 
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand-pink text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-slate-200 uppercase tracking-wider">Packages</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#packages" className="hover:text-white transition-colors">Team Connect (₦500k)</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Corporate Standard (₦950k)</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Corporate Premium (₦2.1M)</a></li>
              <li><a href="#packages" className="hover:text-white transition-colors">Ultimate Retreat</a></li>
            </ul>
          </div>

          {/* Contact Details matching flyer */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-sm text-slate-200 uppercase tracking-wider">Let's Talk</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-pink" />
                <a href="tel:+2349049680200" className="hover:text-white">+234 904 968 0200</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-pink" />
                <a href="mailto:kokoonverse@gmail.com" className="hover:text-white">kokoonverse@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-brand-pink" />
                <a href="https://instagram.com/kokoonverse" target="_blank" rel="noreferrer" className="hover:text-white">@kokoonverse</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Kokoon! All rights reserved.</p>
          <p className="flex items-center space-x-1 mt-2 sm:mt-0">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink inline" />
            <span>for teams that thrive.</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
