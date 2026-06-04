import React from 'react';
import { Sparkles, Trophy, Star, ArrowRight, UserPlus, Brain, Smartphone, Compass } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: 1,
      title: 'Parents Sign Up',
      description: 'Fill in the basic waitlist contact below. Choose your child’s customized tech track to reserve their Founding family pilot slot.',
      detailBadge: 'Register Slot • +100 XP',
      icon: UserPlus,
      color: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-250/20',
      lineColor: 'border-emerald-200'
    },
    {
      stepNumber: 2,
      title: 'Children Play & Learn Missions',
      description: 'Your child goes on daily, short, gamified quests guided by Kobe and Chibi. They learn AI algorithms and digital safety through video or text-based lessons, story based lessons (2-5), interactive puzzles, and quizzes rather than passive lectures.',
      detailBadge: 'Explore Sandbox • +350 XP',
      icon: Brain,
      color: 'bg-teal-400 hover:bg-teal-350 text-slate-950 shadow-md shadow-teal-200/20',
      lineColor: 'border-teal-200'
    },
    {
      stepNumber: 3,
      title: 'Track Performance & Growth',
      description: 'Keep tabs on their progress! Receive bi-weekly high-level Email summaries directly to your inbox. Zero apps to download, just transparent metrics and actionable advice.',
      detailBadge: 'Unlock Level • Certificate',
      icon: Smartphone,
      color: 'bg-purple-500 hover:bg-purple-400 text-white shadow-md shadow-purple-300/20',
      lineColor: 'border-purple-200'
    }
  ];

  return (
    <section id="how-it-works-progression" className="py-20 bg-gradient-to-b from-white to-[#f4f7fe] relative overflow-hidden">
      {/* Background Graphic Lines representing game pathways */}
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold bg-purple-50 text-purple-600 border border-purple-100 px-3.5 py-1 rounded-full uppercase tracking-widest">
            Gamified Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            The Interactive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 font-extrabold pb-1">
              CLATS Pathway
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Inspired by the classic star progression maps in popular children's apps, starting your child’s tech literacy is as simple and engaging as playing a puzzle level!
          </p>
        </div>

        {/* Visual Candy-Crush Island Progression Pathway */}
        <div className="max-w-4xl mx-auto relative mt-12 pb-12">
          
          {/* Background Connecting Pathway Tube (Visible on Desktop) */}
          <div className="absolute left-[50px] md:left-1/2 top-10 bottom-10 w-2.5 bg-slate-100 border-l border-r border-slate-200 transform -translate-x-1/2 hidden md:block" />

          {/* Dotted Pathway dashes showing direction */}
          <div className="absolute left-[50px] md:left-1/2 top-10 bottom-10 w-[2px] border-l-2 border-dashed border-teal-400/40 transform -translate-x-1/2 hidden md:block" />

          {/* Dynamic progression list */}
          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.stepNumber}
                  id={`progression-step-${step.stepNumber}`}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Step Content Card */}
                  <div className="w-full md:w-5/12 space-y-3.5 bg-white border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-md rounded-3xl p-6 lg:p-8 relative group transition-all">
                    
                    {/* Glowing Accent Corner glow */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-teal-500/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all" />

                    <div className="flex justify-between items-center select-none">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-teal-600 font-mono">
                        {step.detailBadge}
                      </span>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      </div>
                    </div>

                    <h3 className="text-slate-905 text-slate-900 font-extrabold text-xl leading-snug">
                      {step.stepNumber}. {step.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Dotted pathway mini guide */}
                    <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-[15px] text-slate-400 select-none">
                      <span className="flex items-center gap-1 font-medium">
                        <Compass className="w-3.5 h-3.5 text-slate-400" />
                        Map Island Section {step.stepNumber}
                      </span>
                      <span className="hover:text-slate-700 transition-colors duration-200 cursor-help font-medium">Need Help?</span>
                    </div>

                  </div>

                  {/* Floating Checkpoint Circle (The Candy-Crush Island Node) */}
                  <div className="relative shrink-0 mx-auto md:mx-0 z-20">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-xl transform group-hover:scale-110 transition-transform cursor-pointer ${step.color}`}>
                      <Icon className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    {/* Glowing outer ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-teal-500/10 animate-[spin_10s_linear_infinite] pointer-events-none" />
                    
                    {/* XP Indicator bubble */}
                    <div className="absolute -top-5 right-1/2 transform translate-x-1/2 bg-white border border-slate-100 text-[9px] font-mono font-black text-amber-500 px-2.5 py-0.5 rounded-full select-none shadow">
                      STARS x3
                    </div>
                  </div>

                  {/* Placeholder panel for balance */}
                  <div className="hidden md:block w-5/12 select-none pointer-events-none opacity-60">
                    {/* Playful visual decoration or illustration */}
                    <div className="border border-dashed border-purple-100 bg-purple-50/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-2">
                      <Trophy className="w-8 h-8 text-purple-300 animate-bounce" />
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">Founding Achievement Unlock</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
