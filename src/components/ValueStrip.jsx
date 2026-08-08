import React from 'react';
import { Users, MessageSquareText, Lightbulb, Smile } from 'lucide-react';

export default function ValueStrip() {
  const values = [
    {
      icon: Users,
      title: "STRONGER TEAMS",
      description: "Build deep trust and psychological safety that lasts.",
      color: "text-brand-pink",
      bgColor: "bg-pink-50"
    },
    {
      icon: MessageSquareText,
      title: "BETTER COMMUNICATION",
      description: "Break silos and spark authentic dialogue.",
      color: "text-brand-blue",
      bgColor: "bg-blue-50"
    },
    {
      icon: Lightbulb,
      title: "SHARPER THINKING",
      description: "Stretch creative & strategic problem-solving.",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Smile,
      title: "HIGHER MORALE",
      description: "Boost energy, reduce burnout, have real fun.",
      color: "text-brand-pink",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="about" className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 division-x">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start space-x-4 p-2">
                <div className={`p-3 rounded-xl ${item.bgColor} ${item.color} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
