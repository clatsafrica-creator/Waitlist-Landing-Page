import React, { useState } from 'react';
import { FeatureCard } from '../types';
import { 
  Bot, Award, Shield, Layout, Lock, Compass, Eye, Heart, 
  Smartphone, BookOpen, Layers, CheckCircle 
} from 'lucide-react';

export default function SolutionSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'safety' | 'parental'>('all');

  const features: (FeatureCard & { iconComponent: React.ComponentType<{className?: string}>; iconBg: string })[] = [
    {
      id: 'ai_learning',
      title: 'AI Learning for Kids',
      description: 'Children learn how artificial brains think. They train simple visual models, program machine paths, and explore logic without coding jargon.',
      icon: 'Bot',
      category: 'core',
      badge: 'Interactive AI',
      iconComponent: Bot,
      iconBg: 'text-teal-600 bg-teal-50 border border-teal-100'
    },
    {
      id: 'gamified_quizzes',
      title: 'Gamified Quizzes & XP',
      description: 'A kid-safe engine packed with puzzles! Answering trivia awards glowing stars, XP levels, and unlocking new island learning map checkpoints.',
      icon: 'Award',
      category: 'core',
      badge: 'Game Mechanics',
      iconComponent: Award,
      iconBg: 'text-amber-600 bg-amber-50 border border-amber-100'
    },
    {
      id: 'safe_digital_literacy',
      title: 'Safe Digital Literacy',
      description: 'Understanding actual operating files, folder trees, computer hardware components, and software operations safely away from general web traps.',
      icon: 'BookOpen',
      category: 'core',
      badge: 'Core Tech',
      iconComponent: BookOpen,
      iconBg: 'text-blue-600 bg-blue-50 border border-blue-105'
    },
    {
      id: 'parent_dashboard',
      title: 'State-of-the-Art Parent View',
      description: 'Rest easy with real-time analytics. Parents can view learning times, topics covered, quiz performance, and active safety feedback anytime.',
      icon: 'Layout',
      category: 'parental',
      badge: 'Parent Monitor',
      iconComponent: Layout,
      iconBg: 'text-purple-600 bg-purple-50 border border-purple-100'
    },
    {
      id: 'cybersecurity_awareness',
      title: 'Cybersecurity Guarding',
      description: 'Kids learn to spot email phishing scams, suspicious browser scripts, and learn secret credential hygiene. Educated children stay protected.',
      icon: 'Lock',
      category: 'safety',
      badge: 'Safety First',
      iconComponent: Lock,
      iconBg: 'text-rose-600 bg-rose-50 border border-rose-100'
    },
    {
      id: 'learning_paths',
      title: 'Interactive Paths Map',
      description: 'Adapts dynamically to the child. Specific modules curate to Early Explorers (ages 2–5), Young Innovators (6–12), and Future Builders (13–18).',
      icon: 'Compass',
      category: 'core',
      badge: 'Adaptive Class',
      iconComponent: Compass,
      iconBg: 'text-sky-600 bg-sky-50 border border-sky-100'
    },
    {
      id: 'accessibility_features',
      title: 'Accessibility Integration & Chibi',
      description: 'Supported by Chibi, CLATS has custom voice overs, high-contrast layouts, visual guide alerts, and stress-free hover speeds to match children of all speeds.',
      icon: 'Heart',
      category: 'safety',
      badge: 'Inclusive',
      iconComponent: Heart,
      iconBg: 'text-emerald-600 bg-emerald-50 border border-emerald-100'
    },
    {
      id: 'progress_tracking',
      title: 'Email sync',
      description: 'No apps for parents to download! Get high-level email briefings and insights on topics learned and skills built sent directly to your inbox twice a month.',
      icon: 'Smartphone',
      category: 'parental',
      badge: 'Email briefings',
      iconComponent: Smartphone,
      iconBg: 'text-indigo-600 bg-indigo-50 border border-indigo-100'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <section id="solutions-section" className="py-20 bg-gradient-to-b from-[#f5f8ff] to-[#fafbff] relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-50 border border-teal-100 px-3.5 py-1 rounded-full">
            CLATS Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight leading-tight">
            How CLATS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 font-black">
              Helps
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We provide a gamified, immersive world where futuristic tech elements are explained with simple visual block graphics designed for child cognitive development.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-xl mx-auto font-sans bg-[#f3f4f6] p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-white text-teal-600 font-extrabold shadow-sm border border-slate-250/20'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All Features
          </button>
          <button
            onClick={() => setActiveCategory('core')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === 'core'
                ? 'bg-white text-teal-600 font-extrabold shadow-sm border border-slate-250/20'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            AI & Core Tracks
          </button>
          <button
            onClick={() => setActiveCategory('safety')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === 'safety'
                ? 'bg-white text-rose-600 font-extrabold shadow-sm border border-slate-200/50'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Safety & Access
          </button>
          <button
            onClick={() => setActiveCategory('parental')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
              activeCategory === 'parental'
                ? 'bg-white text-purple-600 font-extrabold shadow-sm border border-slate-200/50'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Parent Control
          </button>
        </div>

        {/* Features Grid layout */}
        <div id="features-grid-bento" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredFeatures.map((f) => {
            const Icon = f.iconComponent;
            return (
              <div
                key={f.id}
                id={`feature-item-${f.id}`}
                className="bg-white border border-slate-100 hover:border-teal-200 hover:shadow-md rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-between shadow-sm"
              >
                {/* Visual grid pattern back-drop */}
                <div className="absolute inset-0 bg-grid opacity-[0.01] group-hover:opacity-[0.02] pointer-events-none" />

                <div className="space-y-4">
                  {/* Category Pill and Top decoration */}
                  <div className="flex justify-between items-center select-none">
                    <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      {f.badge}
                    </span>
                    <span className="w-1 h-3 rounded-full bg-slate-100 group-hover:bg-teal-500 transition-colors" />
                  </div>

                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all group-hover:scale-105 ${f.iconBg}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Container */}
                  <div className="space-y-1.5">
                    <h3 className="text-slate-900 font-extrabold text-base tracking-tight leading-tight group-hover:text-teal-600 transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">
                      {f.description}
                    </p>
                  </div>
                </div>

                {/* Gamified visual elements like stars / check at bottom for playfulness */}
                <div className="flex items-center gap-1.5 mt-5 border-t border-slate-50 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none">
                  <span className="text-[10px] text-teal-600 font-extrabold font-sans flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                    Interactive Lab Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
