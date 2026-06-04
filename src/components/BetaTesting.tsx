import React from 'react';
import { 
  Rocket, 
  Target, 
  Users, 
  Gift, 
  FlaskConical, 
  Trophy, 
  TreeDeciduous, 
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function BetaTesting() {
  const benefits = [
    {
      title: 'Early Access to CLATS',
      desc: 'Be among the first families to access the CLATS platform before public release and explore our interactive AI-powered learning experience.',
      icon: Rocket,
      color: 'text-[#2EC4B6] bg-[#2EC4B6]/10 border border-[#2EC4B6]/20'
    },
    {
      title: 'Shape the Future of CLATS',
      desc: 'Your feedback will directly influence platform features, learning activities, games, and future curriculum development.',
      icon: Target,
      color: 'text-purple-600 bg-purple-50 border border-purple-100'
    },
    {
      title: 'Founding Families Community',
      desc: "Join a special network of pioneering parents passionate about preparing children for an AI-driven future.",
      icon: Users,
      color: 'text-indigo-600 bg-indigo-50 border border-indigo-100'
    },
    {
      title: 'Founder Pricing Benefits',
      desc: 'Receive exclusive early supporter pricing opportunities and future loyalty rewards as CLATS grows.',
      icon: Gift,
      color: 'text-amber-600 bg-amber-50 border border-amber-100'
    },
    {
      title: 'Priority Access to New Features',
      desc: 'Get first access to new courses, learning modules, games, events, and platform updates before general users.',
      icon: FlaskConical,
      color: 'text-blue-600 bg-blue-50 border border-blue-100'
    },
    {
      title: 'Recognition as a CLATS Pioneer',
      desc: 'Be recognized as one of the families who helped shape CLATS during its earliest stages.',
      icon: Trophy,
      color: 'text-yellow-600 bg-yellow-50 border border-yellow-100'
    },
    {
      title: 'Founding Family Legacy Wall',
      desc: 'Eligible families may choose to be featured on our future digital Founding Families Wall, celebrating those who believed in the mission from the beginning.',
      icon: TreeDeciduous,
      color: 'text-emerald-500 bg-emerald-50 border border-emerald-100'
    },
    {
      title: 'Founding Family Digital Badge',
      desc: "Receive an exclusive digital badge recognizing your contribution to helping build tomorrow's tech minds today.",
      icon: Award,
      color: 'text-pink-600 bg-pink-50 border border-pink-100'
    }
  ];

  return (
    <section id="pilot-testing-section" className="py-24 bg-gradient-to-b from-white to-[#FAF9F6] relative overflow-hidden">
      {/* Decorative colored glow background spots */}
      <div className="absolute top-20 right-0 w-[45rem] h-[45rem] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[45rem] h-[45rem] rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-xs font-black px-4 py-2 rounded-full border border-purple-100 uppercase tracking-widest font-sans"
          >
            <span>🌟</span> Become a CLATS Founding Family
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight"
          >
            Help Shape the Future of AI Education for Children
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 max-w-2xl mx-auto text-slate-650 text-slate-600 font-medium text-xs md:text-sm leading-relaxed"
          >
            <p>
              Join an exclusive group of early families helping us build Africa's next generation of confident, creative, and future-ready technology learners.
            </p>
            <p className="text-slate-500 font-medium">
              As a Founding Family, you'll gain early access to CLATS while directly influencing the platform's growth, curriculum, and learning experience before public launch.
            </p>
          </motion.div>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {benefits.map((b, i) => {
            const IconComponent = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-100 hover:border-purple-200 rounded-[2rem] p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${b.color}`}>
                    <IconComponent className="w-5 h-5 shrink-0" />
                  </div>
                  <h4 className="text-slate-900 font-extrabold text-base mb-2 font-display leading-tight">
                    {b.title}
                  </h4>
                  <p className="text-slate-650 text-slate-600 text-xs leading-relaxed font-medium">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* FEATURED CALLOUT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#2EC4B6]/12 via-[#B8A0FF]/15 to-[#FDE047]/15 rounded-[3rem] border border-[#B8A0FF]/25 shadow-xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Subtle light rings floating on background */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-300/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-400/10 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column - Information */}
            <div className="lg:col-span-6 space-y-4">
              <span className="flex items-center gap-1 bg-[#2EC4B6]/10 text-teal-700 text-xxs font-black px-3 py-1 rounded-full uppercase tracking-wider w-fit border border-[#2EC4B6]/20">
                <Sparkles className="w-3.5 h-3.5" /> Founding Cohort
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-slate-900 leading-tight">
                Limited Founding Family Cohort
              </h3>
              <p className="text-slate-650 text-slate-600 font-medium text-xs md:text-sm leading-relaxed">
                We're inviting a small number of families to join our initial pilot community and help shape the future of AI and technology education for children across Africa.
              </p>
            </div>

            {/* Right Column - Slots and Progress Indicator & CTA */}
            <div className="lg:col-span-6">
              <div className="bg-white/85 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-[#B8A0FF]/20 shadow-sm space-y-6">
                
                {/* Slots tracker info */}
                <div className="space-y-3 font-sans">
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-slate-800 font-extrabold flex items-center gap-1">
                      👥 Founding Family Slots
                    </span>
                    <span className="text-teal-600 font-black">45 Joined / 60 Slots Max</span>
                  </div>
                  
                  {/* Progress Bar indicator */}
                  <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div 
                      className="bg-gradient-to-r from-[#2EC4B6] to-[#8A67F0] h-full rounded-full transition-all duration-1000 shadow-sm" 
                      style={{ width: '75%' }}
                    />
                  </div>
                  
                  {/* Slots warning */}
                  <div className="flex items-center gap-2 text-slate-600 text-[15px] font-bold">
                    <Users className="w-4 h-4 text-amber-500 animate-pulse shrink-0" />
                    <span>Only <span className="text-amber-600">15 slots</span> remaining for early-access founding status.</span>
                  </div>
                </div>

                {/* Main Action CTA Button */}
                <div className="pt-2">
                  <a
                    href="#waitlist-section"
                    className="w-full text-center bg-[#2EC4B6] hover:bg-[#25b5a7] text-slate-950 font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-xl.5 rounded-2xl shadow-lg shadow-[#2EC4B6]/15 hover:shadow-[#2EC4B6]/30 transform active:translate-y-px duration-200 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    🚀 Join the Founding Families Waitlist
                    <ChevronRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
