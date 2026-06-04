import React from 'react';
import { ShieldAlert, AlertTriangle, ScreenShare, Sparkles, Orbit, Globe2 } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      id: 'passive_screentime',
      title: 'Drowning in Passive Screen Time',
      description: 'The average child spends 3 to 5 hours daily on mindless viral video loops or repetitive dopamine games. They become consumers, rather than builders of technology.',
      icon: ScreenShare,
      color: 'text-rose-600 bg-rose-50 border border-rose-100',
      badge: 'Consumption Trap'
    },
    {
      id: 'lack_of_education',
      title: 'Standard Curriculums of Yesterday',
      description: 'Local standard classrooms rarely cover Artificial Intelligence, digital safety, design grids, or prompt-crafting. Our kids are trained for the past, not the future.',
      icon: AlertTriangle,
      color: 'text-amber-600 bg-amber-50 border border-amber-100',
      badge: 'Educational Gap'
    },
    {
      id: 'unsafe_exposure',
      title: 'Unmonitored & Unsafe Internet',
      description: 'Plunging kids straight into general web forums risks toxic interactions, malware traps, data mining, and adult environments. Standard filters simply aren’t childproof.',
      icon: ShieldAlert,
      color: 'text-purple-600 bg-purple-50 border border-purple-100',
      badge: 'Cyber Safety Threat'
    },
    {
      id: 'left_behind',
      title: 'African Tech Divide Gap',
      description: 'If children in Lagos, Nairobi, Johannesburg, and Accra miss out on foundational AI skills now, the global economic gap will divide further. Our children deserve equal tech leadership.',
      icon: Globe2,
      color: 'text-blue-600 bg-blue-50 border border-blue-105',
      badge: 'Continental Dividends'
    }
  ];

  return (
    <section id="problem-challenge-section" className="py-20 bg-gradient-to-b from-white to-[#fff8f6] relative overflow-hidden">
      {/* Decorative Cyber Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 text-xs font-bold px-3 py-1 rounded-full border border-rose-100 uppercase tracking-widest">
            <AlertTriangle className="w-3 h-3 text-rose-600 animate-pulse" />
            The Current EdTech Challenge
          </div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.15]">
            Children Consume Technology Daily, But Few{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-505 from-rose-650 via-rose-600 to-amber-600 font-extrabold">
              Understand It!
            </span>
          </h2>
          <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed">
            Standard parenting advice tells us to "lock screens away," but technology dominates tomorrow's jobs market. If our classrooms don't provide playful, safe tools, we fall behind.
          </p>
        </div>

        {/* Problems Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={problem.id}
                id={`problem-card-${problem.id}`}
                className="bg-white border border-slate-100 hover:border-rose-200 rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:shadow-md group relative overflow-hidden shadow-sm"
              >
                {/* Floating XP aesthetic element */}
                <span className="absolute top-4 right-4 bg-slate-50 border border-slate-100 text-slate-400 text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:text-rose-550 group-hover:border-rose-200 transition-all select-none">
                  {problem.badge}
                </span>

                <div className="flex items-start gap-4 lg:gap-6 mt-4">
                  {/* Icon Panel */}
                  <div className={`p-4 rounded-2xl border flex items-center justify-center shrink-0 transition-all ${problem.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Problem Description */}
                  <div className="space-y-2">
                    <h3 className="text-slate-905 text-slate-900 font-extrabold text-lg leading-snug transition-colors group-hover:text-rose-600">
                      {problem.title}
                    </h3>
                    <p className="text-slate-600 text-xs lg:text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Cyber circuit detail lines */}
                <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-rose-200 to-transparent" />
                  <span className="text-[10px] font-mono text-rose-500 font-bold tracking-widest uppercase">Safety Area Identified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safe transition summary */}
        <div id="problem-summary-callout" className="mt-16 bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-100 rounded-3xl p-6 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-slate-900 font-extrabold text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping inline-block" />
              There is a better, gamified way!
            </h4>
            <p className="text-slate-600 text-xs md:text-sm font-medium">
              We shouldn’t stop children from screen exposure. We must upgrade screens into future-ready labs!
            </p>
          </div>
          <a
            href="#waitlist-section"
            className="shrink-0 bg-teal-500 text-white hover:bg-teal-400 text-xs font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg cursor-pointer uppercase tracking-wider"
          >
            How We Fix It ↓
          </a>
        </div>

      </div>
    </section>
  );
}
