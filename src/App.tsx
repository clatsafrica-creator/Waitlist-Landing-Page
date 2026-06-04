/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WaitlistItem } from './types';
import Logo from './components/Logo';
import MascotCard from './components/MascotCard';
import WaitlistForm from './components/WaitlistForm';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import BetaTesting from './components/BetaTesting';
import AskKobeChibi from './components/AskKobeChibi';
import ParentTrust from './components/ParentTrust';
import VisionMissionPartners from './components/VisionMissionPartners';

import { 
  Sparkles, Award, Shield, ChevronRight, Play, Star, MessageCircle, 
  HelpCircle, CheckCircle, Mail, Phone, Heart, Users, Compass 
} from 'lucide-react';

export default function App() {
  // Gamified visitor state
  const [userXP, setUserXP] = useState(250);
  const [hasInteractedWithHero, setHasInteractedWithHero] = useState(false);
  const [hasVisitedMascots, setHasVisitedMascots] = useState(false);
  const [visitedTabs, setVisitedTabs] = useState<string[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  // Handle addition of a parent to the waitlist
  const handleNewSubmission = (newItem: Omit<WaitlistItem, 'id' | 'signedUpAt' | 'status'>) => {
    setIsSyncing(true);
    // Award 500 XP points for completing waitlist form submission in this session!
    awardXP(500, 'waitlist_submitted');

    // Simulate simple registration lag
    setTimeout(() => {
      setIsSyncing(false);
    }, 1500);
  };

  // Award user rewards XP to display in gamified header
  const awardXP = (pts: number, actionId: string) => {
    if (visitedTabs.includes(actionId)) return;
    setVisitedTabs([...visitedTabs, actionId]);
    setUserXP(prev => prev + pts);
  };

  return (
    <div className="min-h-screen bg-[#fafbff] text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* 1. STICKY DYNAMIC HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 px-4 md:px-8 py-3.5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo className="scale-95 origin-left" />

          {/* Gamified Stat + Fast Action buttons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            
            {/* Gamified XP Indicator */}
            <div 
              onClick={() => {
                awardXP(50, 'xp_badge_clicked');
              }}
              className="bg-purple-50/65 border border-purple-100 hover:border-purple-300 rounded-2xl px-3.5 py-1.5 flex items-center gap-2 cursor-pointer transition-all hover:bg-white active:scale-95 group shadow-sm shadow-purple-50"
              title="Your interactive platform score inside the sandbox!"
            >
              <div className="w-5.5 h-5.5 bg-amber-400 rounded-full flex items-center justify-center text-slate-900 animate-pulse">
                <Star className="w-3.5 h-3.5 text-slate-950 fill-amber-500 stroke-[2.5]" />
              </div>
              <div className="text-left leading-none font-sans select-none">
                <span className="text-[9px] text-slate-500 uppercase tracking-wider font-bold block">Explorer Score</span>
                <span className="text-xs font-black text-purple-700 font-mono">{userXP} XP</span>
              </div>
            </div>

            {/* Main Header Waitlist Pill */}
            <a
              href="#waitlist-section"
              onClick={() => {
                awardXP(30, 'header_cta_clicked');
              }}
              className="hidden sm:inline-flex bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-extrabold text-xs px-4.5 py-2.5 rounded-2xl shadow-md shadow-teal-500/10 cursor-pointer items-center gap-1 transition-all hover:shadow-lg"
            >
              Join Waitlist
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="hero-learning-platform" className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-[#f5f8ff] via-[#ffffff] to-[#fafbff]">
        {/* Glow Spheres Decor */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-400/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Playful Floating XP Incentive */}
            <div className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full border border-teal-100 uppercase tracking-widest font-sans max-w-xl mx-auto lg:mx-0 text-center">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse shrink-0" />
              Empowering African children with AI, Cybersecurity, Digital Literacy, and other future in-demand tech skills through gamified safety-first technology education.
            </div>
            
            {/* Primary Display Title */}
            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900 leading-[1.1]">
              Transform Screen Time Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
                Future-Ready Learning
              </span>
            </h1>

            {/* Standard SaaS description for parent trust */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              CLATS is an AI-powered future-tech platform designed for African families. We turn standard screens into highly visual, gamified block-coding environments where children ages 2-18 learn Artificial Intelligence, digital safety, cybersecurity, and lots more in a safe, stress-free playground.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#waitlist-section"
                onClick={() => {
                  setHasInteractedWithHero(true);
                  awardXP(100, 'hero_waitlist_clicked');
                }}
                className="w-full sm:w-auto text-center bg-teal-500 text-white hover:bg-teal-400 font-extrabold text-sm px-8 py-4.5 rounded-2xl shadow-xl shadow-teal-500/20 hover:shadow-teal-500/35 transform hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Join the Waitlist
              </a>
              <a
                href="#pilot-testing-section"
                onClick={() => {
                  setHasInteractedWithHero(true);
                  awardXP(100, 'hero_founding_clicked');
                }}
                className="w-full sm:w-auto text-center bg-white border-2 border-purple-100 hover:border-purple-300 text-purple-700 hover:text-purple-800 font-extrabold text-sm px-8 py-4 rounded-2xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Become a Founding Family
                <ChevronRight className="w-4 h-4 text-purple-500" />
              </a>
            </div>

            {/* Bottom trust banner metrics */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-[15px] text-slate-500 font-bold select-none font-sans uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                100% Safe Ad-Free Space
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Gamified Quizzes
              </span>
              <span className="text-slate-200">|</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                Safe for African Children
              </span>
            </div>

          </div>

          {/* Right Illustration Column */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative group max-w-lg md:max-w-xl">
              
              {/* Decorative radial circles representing paths */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-400 to-purple-400 opacity-15 blur-xl group-hover:opacity-20 transition-all duration-700 pointer-events-none" />
              
              {/* Floating Star coins badges */}
              <div className="absolute -top-6 -left-6 bg-white border border-purple-100 p-3 rounded-2xl flex items-center gap-2.5 shadow-xl select-none animate-[bounce_3.5s_infinite]">
                <div className="w-6.5 h-6.5 bg-amber-400 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-slate-900 fill-amber-500 stroke-[3]" />
                </div>
                <div className="leading-none text-left">
                  <span className="text-[10px] text-amber-600 font-black font-display uppercase tracking-wider">PILOT ACTIVE</span>
                  <p className="text-[9px] text-slate-400 block uppercase font-bold mt-0.5">Explore & Gain Stars</p>
                </div>
              </div>

              {/* Floating Access Code Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white border border-purple-100 p-3.5 rounded-2xl flex items-center gap-2.5 shadow-xl select-none animate-[bounce_4.5s_infinite]">
                <div className="w-6.5 h-6.5 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 text-xs font-bold font-mono">
                  🔑
                </div>
                <div className="leading-none text-left">
                  <span className="text-[10px] text-purple-600 font-bold block">Safe Virtual Guard</span>
                  <p className="text-[9px] text-slate-400 block uppercase font-bold mt-0.5">Privacy Protected</p>
                </div>
              </div>

              {/* Generated Illustration Frame element */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-50 shadow-lg bg-[#ffffff] p-1.5">
                <img
                  src="/src/assets/images/clats_kids_hero_illustration_1780169484342.png"
                  alt="CLATS Children Learning AI Technology Solution"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-2xl transform scale-[1.01] transition-transform duration-700 hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <ProblemSection />

      {/* 4. SOLUTION SECTION */}
      <SolutionSection />

      {/* 5. HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* 6. MASCOT CHAT INTERACTIVE SANDBOX */}
      <section 
        id="mascots-section" 
        onClick={() => {
          if (!hasVisitedMascots) {
            setHasVisitedMascots(true);
            awardXP(150, 'mascots_tab_visited');
          }
        }}
        className="py-20 bg-gradient-to-b from-white to-[#fafbff] relative"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-teal-600 bg-teal-500/10 border border-teal-500/15 px-3.5 py-1.5 rounded-full uppercase tracking-wider font-display">
              Meet our Mascot Companions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
              Kobe & Chibi Space Guide
            </h2>
            <p className="text-slate-500 text-xs md:text-sm font-medium">
              We guide children using friendly, highly expressive visual characters! Tap on a mentor's profile button below to ask about safety rules or tech missions.
            </p>
          </div>

          <MascotCard initialMascot="Kobe" />
        </div>
      </section>

      {/* 7. MVP BETA PILOT OPPORTUNITY */}
      <BetaTesting />

      {/* 7.7 VISION, MISSION & FUTURE PARTNERSHIPS */}
      <VisionMissionPartners />

      {/* 8. WAITLIST SUBMISSIONS & SECURE PILOT REGISTRATION */}
      <section id="waitlist-section" className="py-24 bg-[#f7faff] relative overflow-hidden">
        {/* Glow Spheres Decor */}
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-teal-400/5 blur-3xl pointer-events-none" />
        <div className="absolute top-[20%] right-0 w-96 h-96 rounded-full bg-purple-400/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          
          {/* Transparent Production/Development Disclaimer above form */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="p-5 rounded-3xl bg-amber-50/70 backdrop-blur-sm border border-amber-100 text-slate-800 text-xs text-left space-y-2 shadow-sm select-none">
              <span className="font-extrabold block uppercase tracking-wider text-[13px] text-amber-800">
                🛠️ Active Development & Production Phase
              </span>
              <p className="leading-relaxed font-semibold">
                CLATS is still in its production and development phase. While we are excited about our digital learning framework, some features are not fully developed yet. We are actively inviting early-adopter parents to take dynamic charge with us so we can build, refine, and shape this incredible future-ready technology together!
              </p>
            </div>
          </div>

          {/* Centered Premium Waitlist Form container */}
          <div className="max-w-5xl mx-auto w-full">
            <WaitlistForm 
              onSubmitWaitlist={handleNewSubmission} 
              isSyncing={isSyncing} 
            />
          </div>

        </div>
      </section>

      {/* 9. PARENT PEACE OF MIND TRUST */}
      <ParentTrust />

      {/* 7.5 INTERACTIVE FAQ: ASK KOBE & CHIBI */}
      <AskKobeChibi />

      {/* 11. FOOTER */}
      <footer id="clats-corporate-footer" className="bg-yellow-400 text-slate-900 border-t border-yellow-500/20 pt-16 pb-12 relative overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo className="scale-90 origin-left mix-blend-multiply" imgClassName="mix-blend-multiply" animated={false} />
            <p className="text-slate-800 text-xs md:text-sm leading-relaxed max-w-sm pt-2">
              CLATS (Children Learning AI Technology Solution) is Africa's premium future-skills engine. We empower kids with advanced digital skills safely, ethically, and playfully.
            </p>
            <div className="text-[15px] text-purple-700 font-mono font-bold tracking-wider">
              “Building Tomorrow’s Tech Minds Today!”
            </div>
          </div>

          {/* Column 2: Legal guidelines & contact email */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-slate-950 font-black text-sm tracking-wide font-display">Secure Contact Desk</h5>
            <p className="text-slate-800 text-xs leading-relaxed max-w-xs">
              Have questions about curriculums or kids safety plans? Drop us a message.
            </p>
            <div className="space-y-2 text-xs text-slate-900">
              <div className="relative">
                <button 
                  onClick={() => setShowEmailOptions(!showEmailOptions)}
                  className="flex items-center gap-2 hover:text-purple-700 text-slate-800 transition-colors cursor-pointer font-semibold outline-none text-left"
                >
                  <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                  clatsafrica@gmail.com
                </button>
                {showEmailOptions && (
                  <div className="absolute left-0 top-full mt-2 w-52 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-yellow-200 p-2 text-slate-900 z-50 text-xs select-none">
                    <p className="px-2 py-1 text-[10px] text-slate-500 uppercase font-black tracking-wider border-b border-slate-100 pb-1 mb-1">Open email using</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=clatsafrica@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 font-medium transition-colors"
                    >
                      <span>🌐</span> Gmail
                    </a>
                    <a 
                      href="https://outlook.live.com/default.aspx?rru=compose&to=clatsafrica@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-slate-100 text-slate-800 font-medium transition-colors"
                    >
                      <span>📧</span> Outlook
                    </a>
                    <a 
                      href="mailto:clatsafrica@gmail.com"
                      onClick={() => setShowEmailOptions(false)}
                      className="flex items-center gap-2 w-full text-left px-2 py-1.5 rounded-lg hover:bg-[#30D5C8]/10 hover:text-teal-950 text-slate-800 font-bold transition-colors border-t border-slate-100 mt-1 pt-1.5"
                    >
                      <span>💻</span> Default Mail Client
                    </a>
                  </div>
                )}
              </div>
              <a 
                href="https://wa.me/2348161356736" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-purple-700 text-slate-800 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                (234) 8161356736 (WhatsApp)
              </a>
            </div>
          </div>

          {/* Column 3: Playful placeholder social tags */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-slate-950 font-black text-sm tracking-wide font-display">Connect & Learn</h5>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white border border-yellow-300 text-[10px] text-slate-800 px-2.5 py-1.5 rounded-xl uppercase font-bold tracking-wider select-none">
                🐦 Twitter CLATS
              </span>
              <span className="bg-white border border-yellow-300 text-[10px] text-slate-800 px-2.5 py-1.5 rounded-xl uppercase font-bold tracking-wider select-none">
                📸 Instagram Tech
              </span>
              <span className="bg-white border border-yellow-300 text-[10px] text-slate-800 px-2.5 py-1.5 rounded-xl uppercase font-bold tracking-wider select-none">
                📺 YouTube Lessons
              </span>
            </div>
            <p className="text-[10px] text-slate-700 leading-normal pt-2">
              * Active community pages launch in July 2026.
            </p>
          </div>

        </div>

        {/* Corporate baseline */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-yellow-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-800 select-none">
          <span>© 2026 CLATS Africa. All rights reserved.</span>
          <div className="flex items-center gap-1.5 font-bold">
            <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-500" />
            <span>Building Africa’s Future Tech Minds</span>
          </div>
          <div className="flex items-center gap-4 text-[15px] text-slate-800">
            <span>COPPA Childproof Safety Guidelines</span>
            <span>Spreadsheet Webhook Hub</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
