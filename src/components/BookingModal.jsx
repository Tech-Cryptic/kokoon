import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Phone, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, selectedTier }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    attendees: '',
    date: '',
    tier: selectedTier || 'Team Connect',
    gameDynamics: [],
    teamVibe: 'Collaborative',
    notes: '',
    referral: ''
  });

  useEffect(() => {
    if (selectedTier) {
      setFormData(prev => ({ ...prev, tier: selectedTier }));
    }
  }, [selectedTier]);

  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData(prev => {
      const exists = prev.gameDynamics.includes(option);
      return {
        ...prev,
        gameDynamics: exists 
          ? prev.gameDynamics.filter(i => i !== option)
          : [...prev.gameDynamics, option]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative border border-slate-100 my-8">
        
        {/* Close Button */}
        <button 
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Dots */}
        {step < 4 && (
          <div className="flex items-center space-x-2 mb-6">
            <div className={`h-2 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-brand-pink' : 'w-2 bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-brand-pink' : 'w-2 bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all duration-300 ${step >= 3 ? 'w-8 bg-brand-pink' : 'w-2 bg-slate-200'}`} />
          </div>
        )}

        {/* Step 1: Contact Details */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-brand-pink uppercase tracking-widest block">Step 1 of 3</span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Let's Get Started 🎉</h2>
              <p className="text-xs text-slate-500">Tell us about your company and team event.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Paystack, Kuda, Acme Corp"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Person *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Your full name"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+234 000 0000 000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Estimated Attendees *</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 25"
                    value={formData.attendees}
                    onChange={(e) => handleInputChange('attendees', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Preferred Date *</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                  />
                </div>
              </div>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-pink-500/30 transition-all"
            >
              Continue to Experience Details →
            </button>
          </div>
        )}

        {/* Step 2: Package & Game Dynamics */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <span className="text-xs font-bold text-brand-pink uppercase tracking-widest block">Step 2 of 3</span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Select Experience Details 🎮</h2>
              <p className="text-xs text-slate-500">Pick your package and desired game style.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Selected Tier</label>
                <select 
                  value={formData.tier}
                  onChange={(e) => handleInputChange('tier', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                >
                  <option value="Team Connect">Team Connect (₦500,000)</option>
                  <option value="Corporate Standard">Corporate Standard (₦950,000)</option>
                  <option value="Corporate Premium">Corporate Premium (₦2,100,000 - Transport Included)</option>
                  <option value="Ultimate Retreat">Ultimate Retreat (Custom Quote)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Game Dynamics (Select all that apply)</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "🤝 Icebreakers & Trust",
                    "♟️ Strategy & Logic",
                    "🎨 Creative Challenges",
                    "🏃 Outdoor / Physical",
                    "🕵️ Murder Mystery",
                    "🧠 Quiz & Trivia"
                  ].map((dyn, idx) => (
                    <label 
                      key={idx} 
                      className={`flex items-center space-x-2 p-3 rounded-xl border cursor-pointer transition-all ${
                        formData.gameDynamics.includes(dyn)
                          ? 'border-brand-pink bg-pink-50 text-brand-pink font-bold'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={formData.gameDynamics.includes(dyn)}
                        onChange={() => handleCheckboxChange(dyn)}
                        className="hidden"
                      />
                      <span>{dyn}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Team Vibe</label>
                <div className="flex space-x-3">
                  {['Collaborative', 'Competitive', 'Mixed'].map((vibe) => (
                    <button
                      key={vibe}
                      type="button"
                      onClick={() => handleInputChange('teamVibe', vibe)}
                      className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                        formData.teamVibe === vibe
                          ? 'bg-purple-900 border-purple-900 text-white shadow-md'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {vibe}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <button 
                onClick={() => setStep(1)}
                className="w-1/3 border border-slate-200 text-slate-700 font-bold text-sm py-3.5 rounded-xl hover:bg-slate-50 transition-all"
              >
                ← Back
              </button>
              <button 
                onClick={() => setStep(3)}
                className="w-2/3 bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-pink-500/30 transition-all"
              >
                Final Step →
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Special Notes & Confirmation */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="text-xs font-bold text-brand-pink uppercase tracking-widest block">Step 3 of 3</span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Almost Done! ✨</h2>
              <p className="text-xs text-slate-500">Any specific requirements or questions?</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Special Requests / Notes</label>
                <textarea 
                  rows={3}
                  placeholder="Dietary requirements, venue locations, special announcements..."
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50"
                />
              </div>

              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100 text-xs text-purple-900 space-y-1">
                <span className="font-bold text-purple-950 uppercase tracking-wider block">Booking Summary</span>
                <p><strong>Package:</strong> {formData.tier}</p>
                {formData.companyName && <p><strong>Company:</strong> {formData.companyName}</p>}
                {formData.attendees && <p><strong>Attendees:</strong> ~{formData.attendees} people</p>}
              </div>
            </div>

            <div className="flex space-x-3 pt-2">
              <button 
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 border border-slate-200 text-slate-700 font-bold text-sm py-3.5 rounded-xl hover:bg-slate-50 transition-all"
              >
                ← Back
              </button>
              <button 
                type="submit"
                className="w-2/3 bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-pink-500/30 transition-all"
              >
                Submit Booking Request 🚀
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Message */}
        {step === 4 && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Booking Request Sent!</h2>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mt-2">
                We've received your request! Our team will get back to <strong>{formData.email || 'you'}</strong> within 24 hours to confirm details.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs text-left max-w-md mx-auto space-y-2">
              <div className="flex items-center space-x-2 text-slate-700">
                <Phone className="w-4 h-4 text-brand-pink" />
                <span>Urgent enquiries: <strong>+234 904 968 0200</strong></span>
              </div>
              <div className="flex items-center space-x-2 text-slate-700">
                <Mail className="w-4 h-4 text-brand-pink" />
                <span>Email: <strong>kokoonverse@gmail.com</strong></span>
              </div>
            </div>

            <button 
              onClick={resetAndClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-3 rounded-full transition-all"
            >
              Done!
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
