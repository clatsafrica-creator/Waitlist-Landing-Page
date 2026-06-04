import React from 'react';
import { ShieldCheck, CalendarRange, Medal, EyeOff, LayoutPanelLeft, Compass } from 'lucide-react';

export default function ParentTrust() {
  const trustPoints = [
    {
      title: '100% Locked Safe Environment',
      desc: 'Absolutely zero external forums, zero social messaging chats, and zero commercial advertisement banners. Student privacy is fully protected.',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-55 bg-emerald-50 border border-emerald-100'
    },
    {
      title: 'Mindful Guided Screen Limits',
      desc: 'Automatic break prompts. Kids can set dynamic session caps (like 30 minutes) together with parents to prevent eye-fatigue.',
      icon: CalendarRange,
      color: 'text-teal-600 bg-teal-55 bg-teal-50 border border-teal-100'
    },
    {
      title: 'Direct Email Report Alerts',
      desc: 'High-level activity metrics. Receive automated email summaries with actual curriculum achievements directly in your inbox without downloading tracker apps.',
      icon: LayoutPanelLeft,
      color: 'text-purple-600 bg-purple-55 bg-purple-50 border border-purple-100'
    },
    {
      title: 'Emotional Confidence Learning',
      desc: 'No stress rating bars or score comparisons. Error blocks are treated as cute visual puzzle mysteries, encouraging persistence.',
      icon: Medal,
      color: 'text-amber-600 bg-amber-55 bg-amber-50 border border-amber-100'
    }
  ];

  return (
    <section id="trust-safety-section" className="py-20 bg-gradient-to-b from-white to-[#f0f9f6] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full uppercase tracking-widest">
            Parental Advisory Safety
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            Designed With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 font-extrabold pb-1">
              Parents in Mind
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We understand screen fatigue worries. CLATS was designed from the ground up to empower children with high-value technical abilities while giving parents full visibility.
          </p>
        </div>

        {/* 2x2 Grid Layout with a focus on trust metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {trustPoints.map((point, index) => {
            const IconComp = point.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-slate-100 hover:border-teal-200 rounded-3xl p-6 lg:p-8 flex items-start gap-5 transition-all group shadow-sm hover:shadow-md"
              >
                {/* Safe round icon */}
                <div className={`p-4 rounded-2xl flex items-center justify-center shrink-0 border group-hover:scale-105 transition-transform ${point.color}`}>
                  <IconComp className="w-6 h-6" />
                </div>
                
                {/* Description content */}
                <div className="space-y-1.5">
                  <h3 className="text-slate-905 text-slate-900 font-extrabold text-lg group-hover:text-teal-600 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Callout badge logos */}
        <div className="mt-16 border-t border-slate-100 pt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center select-none text-slate-400 text-xs font-sans tracking-widest uppercase font-bold">
          <span>🛡️ GDPR & COPPA Compliant Guidance</span>
          <span>🔒 256-bit Student Activity Encryption</span>
          <span>🌍 Designed for African Cellular Speeds</span>
          <span>🌱 100% KidSafe Certified Blueprint</span>
        </div>

      </div>
    </section>
  );
}
