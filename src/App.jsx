import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import Packages from './components/Packages';
import Addons from './components/Addons';
import Merch from './components/Merch';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  const handleOpenBooking = (tier = '') => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFD] text-slate-900 font-outfit">
      <Navbar onOpenBooking={handleOpenBooking} />
      
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <ValueStrip />
        <Packages onOpenBooking={handleOpenBooking} />
        <Addons onOpenBooking={handleOpenBooking} />
        <Merch onOpenBooking={handleOpenBooking} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedTier={selectedTier}
      />
    </div>
  );
}
