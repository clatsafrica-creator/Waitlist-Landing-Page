import React, { useState } from 'react';
import { Sparkles, MessageCircle, Heart, Accessibility, Volume2 } from 'lucide-react';

interface MascotProps {
  initialMascot?: 'Kobe' | 'Chibi';
}

export default function MascotCard({ initialMascot = 'Kobe' }: MascotProps) {
  const [activeMascot, setActiveMascot] = useState<'Kobe' | 'Chibi'>(initialMascot);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [customReply, setCustomReply] = useState<string | null>(null);

  // Mascot details and educational messages optimized for high-contrast light backgrounds
  const kobeData = {
    name: 'Kobe' as const,
    title: 'The Child Explorer Guide',
    bgColor: 'bg-teal-50/50 border-teal-200/60',
    borderColor: 'border-teal-100',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/50',
    accentText: 'text-teal-600 hover:text-teal-800',
    avatar: '/src/assets/images/kobe_boy_character_avatar_1780168907812.png',
    description: 'A brilliant 10-year-old child companion waving with his tablet! Kobe helps children unlock key tech ideas, making digital literacy feel like a fun playtime quest with friends.',
    speech: [
      "Hello! I am Kobe! Ready to turn passive screen time into future-ready coding power? 🚀",
      "I love explaining how neural networks work using simple building blocks and fun virtual pizza slices! 🍕",
      "Did you know learning cybersecurity is like building a safe, treehouse fort against digital monkeys? 🐒",
      "At CLATS, kids learn AI concepts by talking, playing games, and building actual miniature models. No boring lectures allowed!"
    ],
    prompts: [
      { label: "🤖 Play AI Game", text: "Yay! Let's train a model together! Show me 3 photos of a kitten, and I'll teach Chibi what a meow looks like!" },
      { label: "🔒 Cybersecurity Rule", text: "Kobe's Guard Rule #1: Never share your online passwords or your favorite lunchbox treats with strange computer programs!" },
      { label: "💡 How do kids learn?", text: "By doing! CLATS focuses on hands-on puzzles. Kids train simple AI, draw vector art, and test code safely, gaining confidence daily." }
    ]
  };

  const chibiData = {
    name: 'Chibi' as const,
    title: 'The Playful Inclusive Companion',
    bgColor: 'bg-purple-50/50 border-purple-200/60',
    borderColor: 'border-purple-100',
    badgeColor: 'bg-purple-50 text-purple-705 text-purple-700 border-purple-200/50',
    accentText: 'text-purple-650 text-purple-600 hover:text-purple-800',
    avatar: '/src/assets/images/chibi_girl_character_avatar_1780169038873.png',
    description: 'A delightful 5-year-old child companion waving with double-puff ponytails! Chibi inspires high emotional confidence, slow-paced visual puzzles, and accessible play, making future skills perfectly approachable for Early Explorers and early learners.',
    speech: [
      "Hi! I'm Chibi! Ready to play with colorful puzzles, safe digital drawing blocks, and magical patterns together? 🌸",
      "I love explaining how preschool computer basics work using smiling cartoon cards and floating 3D lightbulbs! 💡",
      "Mistakes are just friendly discover-steps. There are zero strict timers here—just stress-free play at whatever pace you like!",
      "Every child belongs here! We have warm high-contrast helpers, slow hover rates, and big buttons to ensure sensory safety for all."
    ],
    prompts: [
      { label: "🤝 Sensory Pace", text: "Chibi activates high-contrast color shields, big easy-touch shapes, and responsive speech assistance matching younger kids' learning rhythm." },
      { label: "🎨 Creative Blocks", text: "Start on Early Explorers visual tracks custom-coded for ages 2–5! Here, children match colorful blocks and code friendly star routes without needing to spell." },
      { label: "🌸 Joyful Learning", text: "No direct online chats or high-pressure tests—only safe, delightful visual play certified to create peaceful digital confidence!" }
    ]
  };

  const current = activeMascot === 'Kobe' ? kobeData : chibiData;

  const handleNextSpeech = () => {
    setCustomReply(null);
    setSpeechIndex((prev) => (prev + 1) % current.speech.length);
  };

  const handlePromptClick = (replyText: string) => {
    setCustomReply(replyText);
  };

  return (
    <div id="mascot-profiles-widget" className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Playful abstract vector grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.015] pointer-events-none" />
      
      {/* Decorative Glow Effects of matching mascot brand colors */}
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-15 transition-colors duration-500 ${activeMascot === 'Kobe' ? 'bg-teal-400' : 'bg-purple-400'}`} />
      <div className={`absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl opacity-15 transition-colors duration-500 ${activeMascot === 'Kobe' ? 'bg-emerald-400' : 'bg-indigo-400'}`} />

      {/* Mascot Switcher Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-6 relative z-10">
        <div className="text-center md:text-left">
          <h4 className="text-slate-900 font-bold text-xl flex items-center justify-center md:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-amber-550 text-amber-500 animate-[bounce_2s_infinite] shrink-0" />
            Meet Our Guide Companions
          </h4>
          <p className="text-slate-500 text-xs mt-0.5">Click a companion to switch guides and play dynamic quests together!</p>
        </div>
        
        {/* Toggle Option Pills */}
        <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-200/80">
          <button
            onClick={() => {
              setActiveMascot('Kobe');
              setSpeechIndex(0);
              setCustomReply(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              activeMascot === 'Kobe'
                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/20 border border-teal-600/10'
                : 'text-slate-550 text-slate-505 hover:text-slate-800 hover:bg-slate-100/50'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-white/10 border border-white/30 shrink-0 shadow-sm flex items-center justify-center">
                <img 
                  src="/src/assets/images/kobe_boy_character_avatar_1780168907812.png" 
                  alt="Kobe" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110" 
                />
              </div>
              <span>Kobe</span>
            </div>
            <span className={`text-[9px] px-1 py-0.5 rounded font-black uppercase ${
              activeMascot === 'Kobe' ? 'bg-teal-600/30 text-teal-100' : 'bg-slate-200 text-slate-500'
            }`}>Guide</span>
          </button>
          
          <button
            onClick={() => {
              setActiveMascot('Chibi');
              setSpeechIndex(0);
              setCustomReply(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              activeMascot === 'Chibi'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20 border border-purple-600/10'
                : 'text-slate-500 hover:text-slate-850 hover:bg-slate-100/50'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-white/10 border border-white/30 shrink-0 shadow-sm flex items-center justify-center">
                <img 
                  src="/src/assets/images/chibi_girl_character_avatar_1780169038873.png" 
                  alt="Chibi" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-110" 
                />
              </div>
              <span>Chibi</span>
            </div>
            <span className={`text-[9px] px-1 py-0.5 rounded font-black uppercase ${
              activeMascot === 'Chibi' ? 'bg-purple-700/30 text-purple-100' : 'bg-slate-200 text-slate-500'
            }`}>Inclusion</span>
          </button>
        </div>
      </div>

      {/* Mascot Showcase Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Character Image Column */}
        <div className="lg:col-span-4 flex flex-col items-center text-center">
          <div className="relative group">
            {/* Soft glowing active theme ring */}
            <div className={`absolute -inset-1 rounded-full blur opacity-50 transition-all duration-500 group-hover:opacity-80 ${
              activeMascot === 'Kobe' ? 'bg-teal-450 bg-teal-400/30 animate-[pulse_3s_infinite]' : 'bg-purple-450 bg-purple-400/30 animate-[pulse_3s_infinite]'
            }`} />
            
            {/* Mascot Character circle holder */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white bg-slate-50 flex items-center justify-center shadow-md">
              <img
                src={current.avatar}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Float visual accent buttons */}
            <div className={`absolute -top-1 -right-1 p-2 rounded-full border shadow-lg ${
              activeMascot === 'Kobe' ? 'bg-teal-50 text-teal-600 border-teal-100' : 'bg-purple-50 text-purple-600 border-purple-100'
            }`}>
              {activeMascot === 'Kobe' ? <Volume2 className="w-4 h-4 animate-pulse" /> : <Accessibility className="w-4 h-4" />}
            </div>
            
            {/* Interactive bubble indicator */}
            <div className="absolute -bottom-2 -left-2 bg-white border border-slate-100 rounded-lg px-2.5 py-1 text-[10px] font-black text-slate-600 flex items-center gap-1 shadow-md">
              <span className={`w-1.5 h-1.5 rounded-full ${activeMascot === 'Kobe' ? 'bg-emerald-555 bg-emerald-500 animate-ping' : 'bg-purple-555 bg-purple-500 animate-ping'}`} />
              READY TO PLAY
            </div>
          </div>

          <h5 className="text-slate-900 font-black text-2xl mt-5 mb-1 tracking-tight">{current.name}</h5>
          <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest border uppercase shadow-sm ${current.badgeColor}`}>
            {current.title}
          </span>
        </div>

        {/* Dynamic Speech / Conversational text bubble layout Column */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[260px] space-y-6">
          
          {/* Enhanced Speech bubble with maximum readability details */}
          <div className={`relative bg-slate-50 border-2 rounded-3xl p-5 md:p-6 shadow-sm min-h-[140px] flex flex-col justify-between ${
            activeMascot === 'Kobe' ? 'border-teal-100 bg-[#f9fdfc]' : 'border-purple-100 bg-[#fbf9fe]'
          }`}>
            {/* Arrow indicators (desktop vs mobile) */}
            <div className={`absolute top-1/2 -left-2.5 transform -translate-y-1/2 w-4 h-4 border-b-2 border-l-2 rotate-45 hidden lg:block ${
              activeMascot === 'Kobe' ? 'bg-[#f9fdfc] border-teal-100' : 'bg-[#fbf9fe] border-purple-100'
            }`} />
            <div className={`absolute -top-2.5 left-1/2 transform -translate-x-1/2 w-4 h-4 border-t-2 border-l-2 rotate-45 block lg:hidden ${
              activeMascot === 'Kobe' ? 'bg-[#f9fdfc] border-teal-100' : 'bg-[#fbf9fe] border-purple-100'
            }`} />
            
            <div className="text-slate-800 text-sm md:text-base leading-relaxed font-semibold">
              {customReply ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-1.5">
                    <span>💡 Mascot Inside Story</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                  </div>
                  <p className="text-slate-900 italic font-medium">"{customReply}"</p>
                </div>
              ) : (
                <p className="text-slate-900">"{current.speech[speechIndex]}"</p>
              )}
            </div>
            
            {/* Prompt navigation selectors */}
            <div className="flex justify-end mt-4 border-t border-slate-100 pt-3">
              {!customReply ? (
                <button
                  onClick={handleNextSpeech}
                  className={`text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider ${current.accentText}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Next Advice →
                </button>
              ) : (
                <button
                  onClick={() => setCustomReply(null)}
                  className="text-xs font-extrabold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer uppercase tracking-wider"
                >
                  ← Main Message
                </button>
              )}
            </div>
          </div>

          {/* Interactive Companion Choices */}
          <div>
            <span className="text-[10px] text-slate-500 block uppercase font-black tracking-widest mb-2.5 text-center md:text-left select-none">
              Explore companion pathways:
            </span>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {current.prompts.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handlePromptClick(p.text)}
                  className={`text-xs px-3.5 py-3 rounded-xl border bg-white transition-all duration-300 cursor-pointer text-slate-700 font-bold shadow-sm ${
                    customReply === p.text
                      ? activeMascot === 'Kobe'
                        ? 'border-teal-500 bg-teal-50 text-teal-850 font-extrabold scale-[1.02]'
                        : 'border-purple-500 bg-purple-50 text-purple-850 font-extrabold scale-[1.02]'
                      : 'border-slate-150 border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Small Footer character description */}
          <p className="text-slate-500 text-xs leading-relaxed mt-4 italic border-t border-slate-150 border-slate-100 pt-4 text-center md:text-left font-medium select-text">
            {current.description}
          </p>
          
        </div>
        
      </div>
    </div>
  );
}
