import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Rocket, Users, GraduationCap, Cpu, Heart, Building, BookOpen, ChevronRight, HelpCircle
} from 'lucide-react';

export default function VisionMissionPartners() {
  const currentYear = new Date().getFullYear();

  const partnershipCategories = [
    {
      id: 'schools',
      title: 'Schools & Educational Institutions',
      emoji: '🏫',
      description: 'Integrating future-tech learning into classrooms and after-school programs.',
      iconComponent: GraduationCap,
      color: 'border-[#2EC4B6]/20 bg-white hover:border-[#2EC4B6]/60 shadow-[#2EC4B6]/5',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'parents',
      title: 'Parent Communities',
      emoji: '👨‍👩‍👧‍👦',
      description: 'Supporting families in raising digitally confident and responsible children.',
      iconComponent: Users,
      color: 'border-[#B8A0FF]/25 bg-white hover:border-[#B8A0FF]/60 shadow-[#B8A0FF]/5',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'tech_companies',
      title: 'Technology Companies',
      emoji: '💻',
      description: 'Providing tools, mentorship, resources, and industry exposure.',
      iconComponent: Cpu,
      color: 'border-[#FFD166]/30 bg-white hover:border-[#FFD166]/70 shadow-[#FFD166]/5',
      iconColor: 'bg-[#FFD166]/15 text-amber-600',
    },
    {
      id: 'ngos',
      title: 'NGOs & Social Impact Organizations',
      emoji: '🌍',
      description: 'Expanding access to underserved communities across Africa.',
      iconComponent: Heart,
      color: 'border-[#2EC4B6]/20 bg-white hover:border-[#2EC4B6]/60 shadow-[#2EC4B6]/5',
      iconColor: 'bg-[#2EC4B6]/10 text-[#2EC4B6]',
    },
    {
      id: 'government',
      title: 'Government & Policy Stakeholders',
      emoji: '🏛',
      description: 'Supporting digital literacy and workforce development initiatives.',
      iconComponent: Building,
      color: 'border-[#B8A0FF]/25 bg-white hover:border-[#B8A0FF]/60 shadow-[#B8A0FF]/5',
      iconColor: 'bg-[#B8A0FF]/15 text-[#8A67F0]',
    },
    {
      id: 'universities',
      title: 'Universities & Research Institutions',
      emoji: '🎓',
      description: 'Strengthening curriculum quality, educational research, and innovation outcomes.',
      iconComponent: BookOpen,
      color: 'border-[#FFD166]/30 bg-white hover:border-[#FFD166]/70 shadow-[#FFD166]/5',
      iconColor: 'bg-[#FFD166]/15 text-amber-600',
    }
  ];

  const handlePartnerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const faqSection = document.getElementById('faq-item-9');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
      // Trigger click or set active to 9 if required, but faq section is clickable
      faqSection.click();
    } else {
      const waitlistSection = document.getElementById('waitlist-section');
      if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="space-y-24 py-12">
      
      {/* =========================================================================
          SECTION 1 — VISION 2030
          ========================================================================= */}
      <section id="vision-2030-section" className="relative overflow-hidden w-full px-6">
        {/* Ambient Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2EC4B6]/5 via-white to-[#B8A0FF]/5 rounded-[3rem] pointer-events-none" />
        
        {/* Floating background decorative circles */}
        <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#2EC4B6]/5 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-[#B8A0FF]/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto py-16 px-4 md:px-12 relative z-10 text-center space-y-8">
          {/* Header Tag */}
          <div className="inline-flex items-center gap-2 bg-[#2EC4B6]/10 text-[#2EC4B6] text-xs font-black px-4.5 py-2 rounded-full border border-[#2EC4B6]/20 uppercase tracking-widest">
            <span className="text-sm">🌍</span> Vision 2030
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Building Africa's Largest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2EC4B6] to-[#8A67F0]">
              Future-Tech Learning Ecosystem
            </span>{' '}
            for Children
          </h2>

          {/* Large Hero-Style Card structure */}
          <div className="bg-white/80 backdrop-blur-md border border-white/80 rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-slate-100/50 max-w-5xl mx-auto relative overflow-hidden group">
            
            {/* Animated Floating element: Africa visual icon overlay */}
            <div className="absolute top-4 right-4 text-xs font-mono text-slate-300 pointer-events-none select-none">
              GRID // SCALE 2030_ECO
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              {/* Left Column: Vision paragraphs */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-[#2EC4B6] font-extrabold text-base md:text-lg leading-relaxed">
                  By 2030, CLATS aims to empower over 1 million children across Africa with the knowledge, confidence, and skills to thrive in an AI-driven world.
                </p>
                <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  Through personalized learning, gamification, accessibility, and culturally relevant education, CLATS will help children move beyond consuming technology to understanding it, creating with it, and shaping the future through it.
                </p>
                <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  Our vision is to ensure that every child, regardless of background, location, or socioeconomic status has access to world-class future-tech education that prepares them for the opportunities of tomorrow.
                </p>

                {/* Growth stats markers */}
                <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100">
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">1M+</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Kids Empowered</p>
                  </div>
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">54</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">African Nations</p>
                  </div>
                  <div className="leading-none">
                    <span className="text-xl md:text-3xl font-black text-slate-900">2030</span>
                    <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">Target Horizon</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Globe Graphic / African Continent Illustration container */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative">
                  {/* Rotating decorative halo rings */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#2EC4B6]/20 to-[#B8A0FF]/20 animate-spin opacity-60" style={{ animationDuration: '12s' }} />
                  <div className="absolute -inset-1 rounded-full border border-dashed border-slate-200 animate-spin" style={{ animationDuration: '24s' }} />
                  
                  {/* Center Globe Frame Card */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] bg-gradient-to-b from-teal-50 to-indigo-50 border-4 border-white flex flex-col items-center justify-end pb-6 md:pb-8 relative shadow-inner overflow-hidden">
                    {/* Oversized background globe nearly surrounding the frame, shifted slightly upwards */}
                    <div className="absolute top-2 md:top-4 text-[12rem] md:text-[16rem] leading-none select-none animate-pulse">🌍</div>
                    
                    {/* Content overlay, now cleanly positioned underneath the main body of the globe */}
                    <div className="relative z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm border border-white/50 px-4 py-3 rounded-2xl shadow-sm text-center mx-4">
                      <span className="text-xs uppercase font-black text-slate-800 tracking-widest leading-none">CLATS Global hub</span>
                      <span className="text-[10px] font-mono text-purple-600 font-extrabold bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100 mt-1.5 animate-pulse">Continental Reach</span>
                    </div>
                  </div>

                  {/* Little satellite float cards */}
                  <div className="absolute -top-4 -right-4 bg-white border border-slate-100 px-3 py-1.5 rounded-xl shadow-lg leading-none select-none">
                    <span className="text-[10px] font-black text-[#2EC4B6]">AI Literacy</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white border border-slate-100 px-3 py-1.5 rounded-xl shadow-lg leading-none select-none">
                    <span className="text-[10px] font-black text-slate-800">🛡️ Safety-First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — OUR MISSION
          ========================================================================= */}
      <section id="our-mission-section" className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-[#B8A0FF]/8 via-[#B8A0FF]/3 to-white border border-[#B8A0FF]/25 text-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
          {/* Ambient details and light rings */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#B8A0FF]/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#2EC4B6]/10 blur-3xl pointer-events-none" />

          {/* Floater decoration */}
          <div className="absolute top-6 right-8 opacity-60 select-none pointer-events-none text-right font-sans">
            <span className="text-[9px] font-mono tracking-widest text-[#8A67F0] block font-bold">MISSION_INDEX // 01</span>
            <span className="text-xs font-black text-slate-400">CLATS AFRICA</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
            {/* Column 1: Statement Details */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Tag */}
              <div className="inline-flex items-center gap-2 bg-[#B8A0FF]/15 text-[#8A67F0] text-xs font-black px-4 py-1.5 rounded-full border border-[#B8A0FF]/25 uppercase tracking-widest">
                <span className="text-sm">🚀</span> Our Mission
              </div>

              {/* Main Mission title block */}
              <h3 className="text-2xl md:text-3xl font-display font-black leading-tight text-slate-900">
                To empower children and teenagers with the knowledge, skills, and confidence to understand, create, and responsibly use artificial intelligence and future technologies through engaging, personalized, and accessible learning experiences.
              </h3>

              {/* Divider lines representing connectivity */}
              <div className="h-0.5 bg-gradient-to-r from-[#2EC4B6]/40 via-purple-500/20 to-transparent w-full" />

              {/* Supporting details block */}
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
                <p>
                  At CLATS, we believe children should not simply consume technology, they should understand it, build with it, and use it to solve real-world problems.
                </p>
                <p>
                  Through AI-powered learning, digital safety education, and personalized experiences, we help young learners become confident creators, innovators, and future leaders.
                </p>
              </div>

            </div>

            {/* Column 2: Creative Card Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-3xl bg-white border border-[#B8A0FF]/25 p-6 md:p-8 space-y-6 shadow-xl relative text-slate-900">
                
                {/* Decorative border bar */}
                <div className="absolute -top-1 left-8 right-8 h-1 bg-gradient-to-r from-[#2EC4B6] to-[#B8A0FF] rounded-full" />

                {/* Header indicators */}
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8A67F0] block font-black">
                  ⚡ Learning Path Milestones
                </span>

                {/* Steps illustrating the mission values */}
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Learn Safely', desc: 'Certified COPPA compliant environment', color: 'text-[#2EC4B6] bg-[#2EC4B6]/10' },
                    { step: '2', title: 'Build Projects', desc: 'Create real AI tasks & safety programs', color: 'text-[#B8A0FF] bg-[#B8A0FF]/15' },
                    { step: '3', title: 'Lead Future', desc: 'Graduate into advanced creator tracks', color: 'text-amber-600 bg-amber-500/15' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 items-start pb-4 border-b border-slate-100 last:border-b-0 last:pb-0 font-sans">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${item.color}`}>
                        {item.step}
                      </div>
                      <div className="leading-none mt-1">
                        <span className="font-extrabold text-sm text-slate-900 block">{item.title}</span>
                        <span className="text-xs text-slate-500 mt-1 block font-medium leading-relaxed">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#2EC4B6]/10 border border-[#2EC4B6]/20 p-3 rounded-2xl flex items-center gap-2.5 font-sans">
                  <span className="text-lg">🛡️</span>
                  <div className="leading-none text-left">
                    <span className="text-[10px] font-black text-[#2EC4B6] block uppercase tracking-wider">AFRICA SAFETY COMPACT</span>
                    <p className="text-[9px] text-slate-500 mt-0.5 font-sans font-medium">Child privacy is our core operational pillar.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — FUTURE PARTNERSHIPS & CONTACT CTA
          ========================================================================= */}
      <section id="partnerships-section" className="max-w-6xl mx-auto px-6 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#FFD166]/10 text-amber-600 text-xs font-black px-4.5 py-2 rounded-full border border-[#FFD166]/20 uppercase tracking-widest">
            <span>🤝</span> Future Partnerships
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-none">
            Building the Future Together
          </h2>
          <p className="text-slate-650 text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            CLATS believes preparing the next generation for the future requires collaboration. We are actively exploring partnerships with schools, parent communities, technology companies, NGOs, educational institutions, and public-sector stakeholders to make future-tech education accessible, engaging, and impactful for children across Africa.
          </p>
        </div>

        {/* Dynamic Partner Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnershipCategories.map((category) => {
            const Icon = category.iconComponent;
            return (
              <div
                key={category.id}
                className={`rounded-[2rem] border p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between h-full relative overflow-hidden group shadow-sm bg-white ${category.color}`}
              >
                <div className="space-y-4">
                  {/* Category Card Header */}
                  <div className="flex justify-between items-center">
                    <div className={`p-3.5 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 duration-300 ${category.iconColor}`}>
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    {/* Emoji display */}
                    <span className="text-xl select-none" role="img" aria-label={category.title}>
                      {category.emoji}
                    </span>
                  </div>

                  {/* Body textual parts */}
                  <div className="space-y-2">
                    <h4 className="text-slate-900 font-extrabold text-[15px] md:text-base leading-snug tracking-tight">
                      {category.title}
                    </h4>
                    <p className="text-slate-600 text-[12px] md:text-xs leading-relaxed font-medium">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tiny accent decoration at bottom */}
                <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="h-[1px] flex-1 bg-slate-100" />
                  <span className="text-[8px] font-mono text-slate-400 font-bold uppercase tracking-widest">Inquire</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Call To Action Card */}
        <div className="bg-gradient-to-br from-teal-50/65 via-white to-purple-50/65 text-slate-900 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden text-center max-w-4xl mx-auto border border-slate-100/80">
          {/* Gradient details and lights */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2EC4B6]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#B8A0FF]/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {/* Highlighted Launch Shield */}
            <div className="w-12 h-12 bg-[#2EC4B6]/10 rounded-2xl border border-[#2EC4B6]/20 flex items-center justify-center mx-auto shadow-sm">
              <span className="text-xl">🚀</span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl md:text-4xl font-display font-black text-slate-900 tracking-tight">
              Partner With CLATS
            </h3>

            {/* Description lines */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Are you a school, organization, technology company, parent community, or education advocate passionate about preparing children for the future? We would love to explore opportunities to collaborate. Let's build tomorrow's tech minds today.
            </p>

            {/* Premium CTA Button */}
            <div className="pt-2">
              <button
                onClick={handlePartnerClick}
                className="bg-[#2EC4B6] hover:bg-[#25b5a7] text-slate-950 font-black text-xs uppercase tracking-wider px-8 py-4.5 rounded-2xl shadow-xl shadow-[#2EC4B6]/10 hover:shadow-[#2EC4B6]/25 transform active:translate-y-px duration-250 transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>🏢</span> Become a Partner
              </button>
            </div>
            
            {/* Small note */}
            <p className="text-[10px] text-red-600 font-bold tracking-wider uppercase">
              CLATS IS NOT ACCEPTING PARTNERSHIPS AT THIS TIME
            </p>

          </div>
        </div>

      </section>

    </div>
  );
}
