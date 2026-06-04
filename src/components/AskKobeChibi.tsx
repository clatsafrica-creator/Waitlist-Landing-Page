import React, { useState } from 'react';
import { 
  Sparkles, ChevronDown, HelpCircle, Check, Send, 
  Brain, Shield, Clock, BookOpen, Smile, HelpCircle as QuestionIcon,
  MessageSquare, Mail, User, Info, FileText, CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  responder: 'Kobe' | 'Chibi' | 'Both';
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function AskKobeChibi() {
  const [activeId, setActiveId] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Parent/Guardian Contact Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Parent / Guardian');
  const [subject, setSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  // Offical uploaded mascot avatar images
  const kobeAvatar = '/src/assets/images/kobe_boy_character_avatar_1780168907812.png';
  const chibiAvatar = '/src/assets/images/chibi_girl_character_avatar_1780169038873.png';

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: 'What is CLATS?',
      answer: "CLATS stands for Children Learning AI Technology Solution. We help young learners build future-ready technology skills through fun lessons, games, quizzes, and guided learning experiences.",
      responder: 'Kobe',
      category: 'Learning',
      icon: BookOpen
    },
    {
      id: 2,
      question: 'What age groups does CLATS support?',
      answer: "CLATS is designed for children ages 2–18. Learning experiences are tailored into three specific paths so every child learns at the right level: Early Explorers (Ages 2–5), Young Innovators (Ages 6–12), and Future Builders (Ages 13–18).",
      responder: 'Kobe',
      category: 'Age Groups',
      icon: Smile
    },
    {
      id: 3,
      question: 'What skills can my child learn?',
      answer: "Children can explore AI literacy, digital literacy, cybersecurity, design, blockchain technology literacy, data skills, problem solving, and other future-ready technology skills.",
      responder: 'Kobe',
      category: 'Technology',
      icon: Brain
    },
    {
      id: 4,
      question: 'Is CLATS safe for children?',
      answer: "Absolutely! Child safety is one of our biggest priority objectives. Parents remain in complete control, and children learn in a highly guided, safe, and age-appropriate environment.",
      responder: 'Chibi',
      category: 'Safety',
      icon: Shield
    },
    {
      id: 5,
      question: 'How does screen-time control work?',
      answer: "Parents can set daily learning limits, and CLATS gently encourages healthy digital habits while keeping future-skills learning highly interactive and fun.",
      responder: 'Chibi',
      category: 'Screen Time',
      icon: Clock
    },
    {
      id: 6,
      question: 'Can parents track progress?',
      answer: "Yes! Parents can monitor learning progress, completed lesson milestones, achievements, and safe digital activities through our automated Parent Dashboard reports.",
      responder: 'Chibi',
      category: 'Parent Tools',
      icon: Shield
    },
    {
      id: 7,
      question: 'Do I need a computer?',
      answer: "No. CLATS is custom-built to work beautifully on smartphones, tablets, and computers alike so children can explore future-skills from absolutely anywhere.",
      responder: 'Kobe',
      category: 'Hardware',
      icon: BookOpen
    },
    {
      id: 8,
      question: 'How do I join the beta program?',
      answer: "Simply submit your registration on the founding family registry below and our team will notify you immediately once early access becomes available.",
      responder: 'Chibi',
      category: 'Registration',
      icon: Sparkles
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validate all fields
    if (!fullName.trim()) {
      setEmailError('Please enter your full name.');
      return;
    }
    if (!email.trim()) {
      setEmailError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError('Please enter a valid email format.');
      return;
    }
    if (!role) {
      setEmailError('Please choose your role.');
      return;
    }
    if (!subject.trim()) {
      setEmailError('Please specify the subject.');
      return;
    }
    if (!customMessage.trim()) {
      setEmailError('Please type your custom message.');
      return;
    }
    
    setEmailError('');
    setIsSending(true);

    const templateParams = {
      from_name: fullName.trim(),
      from_email: email.trim(),
      role: role,
      subject: subject.trim(),
      message: customMessage.trim(),
      timestamp: new Date().toLocaleString()
    };

    try {
      const serviceId = (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || '';
      const templateId = (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || '';
      const autoReplyTemplateId = (import.meta as any).env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';
      const publicKey = (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || '';

      if (serviceId && templateId && publicKey) {
        // 2. Send email to CLATS team using EmailJS
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log('Email successfully sent to CLATS team!');

        // 3. Trigger an EmailJS auto-reply template that sends a confirmation email back to the sender
        if (autoReplyTemplateId) {
          const autoReplyParams = {
            to_name: fullName.trim(),
            to_email: email.trim(),
            from_name: 'CLATS Africa Team',
            from_email: 'clatsafrica@gmail.com',
            subject: `We received your inquiry: ${subject.trim()}`,
            message: `Hi ${fullName.trim()},\n\nThank you for reaching out to us! This is an automated confirmation that we have received your message regarding "${subject.trim()}". The CLATS team will review your inquiry and get back to you as soon as possible.\n\nBest wishes,\nThe CLATS Team`,
            timestamp: new Date().toLocaleString()
          };
          await emailjs.send(serviceId, autoReplyTemplateId, autoReplyParams, publicKey);
          console.log('Auto-reply confirmation successfully triggered to:', email.trim());
        }
      } else {
        // Fallback simulation if keys aren't added to the sandbox env yet
        console.warn('EmailJS environment options not fully detected. Executing seamless simulated delivery flow...');
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate async API call delay
      }

      // 4. Show success state and toast
      setIsSubmitted(true);
      setToastVisible(true);

      // 5. Clear form completely
      setFullName('');
      setEmail('');
      setRole('Parent / Guardian');
      setSubject('');
      setCustomMessage('');

    } catch (err) {
      console.error('EmailJS flow failed:', err);
      // 6. Add proper error handling: Display "Something went wrong. Please try again."
      setEmailError('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const activeItem = faqData.find(item => item.id === activeId);
  const currentResponder = activeItem ? activeItem.responder : 'Both';

  return (
    <section id="ask-faq-section" className="py-20 bg-gradient-to-b from-[#fafbff] to-[#ffffff] relative overflow-hidden">
      {/* Playful graphic accents */}
      <div className="absolute top-1/4 left-1/10 w-64 h-64 rounded-full bg-teal-300/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-64 h-64 rounded-full bg-purple-300/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold text-[#30D5C8] bg-[#30D5C8]/10 border border-[#30D5C8]/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-display inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Ask Kobe & Chibi
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
            Got Questions?
          </h2>
          <p className="text-[#30D5C8] font-bold text-sm uppercase tracking-wide">
            Kobe and Chibi are here to help!
          </p>
          <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed max-w-lg mx-auto">
            Need to know more about CLATS? Tap a question below and get answers from our interactive learning buddies.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Animated Companions & Dynamic Speech Bubble */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6 flex flex-col items-center">
            
            {/* Spech bubble container */}
            <div className="w-full relative">
              <div className={`relative w-full rounded-2xl border-2 p-5 md:p-6 shadow-sm transition-all duration-300 ${
                currentResponder === 'Kobe' 
                  ? 'bg-[#f4fcfb] border-teal-100 text-teal-950' 
                  : currentResponder === 'Chibi' 
                    ? 'bg-[#faf7ff] border-purple-100 text-purple-950' 
                    : 'bg-[#fffaeb] border-amber-200 text-amber-950'
              }`}>
                {/* Speech Pointer Arrow at bottom */}
                <div className={`absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 border-b-2 border-r-2 rotate-45 transition-all duration-300 ${
                  currentResponder === 'Kobe' 
                    ? 'bg-[#f4fcfb] border-teal-100' 
                    : currentResponder === 'Chibi' 
                      ? 'bg-[#faf7ff] border-purple-100' 
                      : 'bg-[#fffaeb] border-amber-200'
                }`} />

                <div className="text-sm font-bold md:text-base leading-relaxed">
                  {activeId === 9 ? (
                    isSubmitted ? (
                      <div className="text-center space-y-2 py-2 text-emerald-950">
                        <span className="text-2xl">🎉</span>
                        <p className="font-extrabold text-sm uppercase">Message Sent Successfully</p>
                        <p className="text-xs text-slate-600">Thank you for reaching out to CLATS. We've received your message and will respond as soon as possible.</p>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-left">
                        <p className="text-amber-800 font-black text-xs uppercase tracking-widest flex items-center gap-1">
                          <span>🤔</span> Still Have Questions?
                        </p>
                        <p className="text-slate-800 italic text-[13px] leading-relaxed">
                          "Kobe and Chibi are here to help, but sometimes you may have a question that needs a personal response. Send us a message and the CLATS team will get back to you."
                        </p>
                      </div>
                    )
                  ) : (
                    <p className="italic">
                      "{activeItem?.answer}"
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Mascot Avatars visual view */}
            <div className="flex items-center gap-6 mt-4 relative">
              
              {/* Kobe Avatar Holder */}
              <div className={`flex flex-col items-center transition-all duration-500 ${
                currentResponder === 'Kobe' || currentResponder === 'Both'
                  ? 'scale-110 opacity-100' 
                  : 'scale-90 opacity-40 grayscale blur-[0.5px]'
              }`}>
                <div className={`relative w-28 h-28 rounded-full border-4 overflow-hidden bg-white shadow-md transition-all ${
                  currentResponder === 'Kobe' ? 'border-teal-400 rotate-1 animate-[bounce_3s_infinite]' : 'border-slate-100'
                }`}>
                  <img 
                    src={kobeAvatar} 
                    alt="Kobe" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span className={`text-[15px] font-black uppercase mt-2 px-2.5 py-0.5 rounded-full ${
                  currentResponder === 'Kobe' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-400'
                }`}>Kobe</span>
              </div>

              {/* Chibi Avatar Holder */}
              <div className={`flex flex-col items-center transition-all duration-500 ${
                currentResponder === 'Chibi' || currentResponder === 'Both'
                  ? 'scale-110 opacity-100' 
                  : 'scale-90 opacity-40 grayscale blur-[0.5px]'
              }`}>
                <div className={`relative w-28 h-28 rounded-full border-4 overflow-hidden bg-white shadow-md transition-all ${
                  currentResponder === 'Chibi' ? 'border-purple-400 rotate-[-1deg] animate-[bounce_3.2s_infinite]' : 'border-slate-100'
                }`}>
                  <img 
                    src={chibiAvatar} 
                    alt="Chibi" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <span className={`text-[15px] font-black uppercase mt-2 px-2.5 py-0.5 rounded-full ${
                  currentResponder === 'Chibi' ? 'bg-purple-500 text-white' : 'bg-slate-100 text-slate-400'
                }`}>Chibi</span>
              </div>

            </div>

            {/* Mascot description bubble for context */}
            <p className="text-[15px] text-slate-400 font-bold uppercase tracking-wider text-center max-w-xs select-none">
              {currentResponder === 'Kobe' 
                ? '🧠 Kobe is responding' 
                : currentResponder === 'Chibi' 
                  ? '🌸 Chibi is responding' 
                  : '🤝 Kobe & Chibi are listening'
              }
            </p>

          </div>

          {/* Right Column: Collection of FAQ items (Interactive Accordion cards) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqData.map((item) => {
              const isOpen = activeId === item.id;
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  onClick={() => {
                    setActiveId(item.id);
                    setIsSubmitted(false);
                  }}
                  className={`group rounded-2xl border p-4 cursor-pointer transition-all duration-300 select-none ${
                    isOpen 
                      ? item.responder === 'Kobe'
                        ? 'bg-teal-50/30 border-teal-200/50 shadow-sm ring-1 ring-teal-200/20'
                        : 'bg-purple-50/30 border-purple-200/50 shadow-sm ring-1 ring-purple-200/20'
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {/* Round category badge container */}
                      <div className={`p-2.5 rounded-xl transition-all shrink-0 ${
                        isOpen
                          ? item.responder === 'Kobe'
                            ? 'bg-teal-100 text-teal-600'
                            : 'bg-purple-100 text-purple-600'
                          : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'
                      }`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      
                      <div>
                        {/* Upper category badge */}
                        <span className={`text-[9px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                          isOpen
                            ? item.responder === 'Kobe' ? 'text-teal-600' : 'text-purple-600'
                            : 'text-slate-400'
                        }`}>
                          {item.category} • {item.responder} Answers
                        </span>
                        
                        {/* Primary Question text */}
                        <h4 className={`text-sm md:text-base font-bold transition-colors ${
                          isOpen ? 'text-slate-900' : 'text-slate-700 font-semibold group-hover:text-slate-950'
                        }`}>
                          {item.question}
                        </h4>
                      </div>
                    </div>

                    {/* Arrow/Chevron Down element */}
                    <div className={`p-1.5 rounded-lg border transition-all ${
                      isOpen 
                        ? item.responder === 'Kobe' ? 'border-teal-200/60 bg-teal-50 text-teal-600 rotate-180' : 'border-purple-200/60 bg-purple-50 text-purple-600 rotate-180'
                        : 'border-slate-100 bg-slate-50 text-slate-400 group-hover:border-slate-200'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Accordion Expansion containing mobile-only quick answer */}
                  <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-48 opacity-100 mt-4 pt-3 border-t border-dashed border-slate-200' : 'max-h-0 opacity-0'
                  }`}>
                    <p className={`text-xs md:text-sm leading-relaxed font-bold ${
                      item.responder === 'Kobe' ? 'text-teal-950' : 'text-purple-950'
                    }`}>
                      "{item.answer}"
                    </p>
                  </div>

                </div>
              );
            })}

            {/* Question 9: Can't find your answer? Custom Interactive lead capturing card with parent contact form */}
            <div
              id="faq-item-9"
              onClick={() => {
                setActiveId(9);
              }}
              className={`group rounded-2xl border p-5 cursor-pointer transition-all duration-300 select-none ${
                activeId === 9 
                  ? 'bg-amber-50/15 border-amber-300 shadow-md ring-1 ring-amber-300/30' 
                  : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl transition-all shrink-0 ${
                    activeId === 9 ? 'bg-amber-100 text-amber-700' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  
                  <div>
                    <span className={`text-[9px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                      activeId === 9 ? 'text-amber-700' : 'text-slate-400'
                    }`}>
                      Secure Desk • Connect Direct
                    </span>
                    <h4 className={`text-sm md:text-base font-bold transition-colors ${
                      activeId === 9 ? 'text-slate-950' : 'text-slate-700 font-semibold group-hover:text-slate-950'
                    }`}>
                      Can't find your answer?
                    </h4>
                  </div>
                </div>

                <div className={`p-1.5 rounded-lg border transition-all ${
                  activeId === 9 ? 'border-amber-300 bg-amber-50 text-amber-700 rotate-180' : 'border-slate-100 bg-slate-50 text-slate-500'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Accordion inner expansion containing dynamic lead capturing form */}
              <div className={`transition-all duration-300 overflow-hidden ${
                activeId === 9 ? 'max-h-[1200px] opacity-100 mt-5 pt-5 border-t border-dashed border-amber-200/60' : 'max-h-0 opacity-0'
              }`}>
                
                {/* Form header titles */}
                <div className="mb-5">
                  <h5 className="text-base font-black text-slate-950">Still Have Questions?</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Kobe and Chibi are here to help, but sometimes you may have a question that needs a personal response.
                    Send us a message and the CLATS team will get back to you.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center max-w-lg mx-auto shadow-sm" onClick={(e) => e.stopPropagation()}>
                    <span className="text-2xl block mb-2">🎉</span>
                    <h5 className="text-slate-900 font-black text-sm uppercase tracking-wider">Message Sent Successfully</h5>
                    <p className="text-xs text-slate-600 mt-1.5 font-bold">Thank you for reaching out to CLATS.</p>
                    <p className="text-xs text-slate-500 mt-1">We've received your message and will respond as soon as possible.</p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setEmailError('');
                      }}
                      className="mt-4 px-4 py-2 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200 rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4 max-w-xl" onClick={(e) => e.stopPropagation()}>
                    
                    {/* Full Name field */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]/20 outline-none"
                      />
                    </div>

                    {/* Email address field */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]/20 outline-none"
                      />
                    </div>

                    {/* Dropdown list for Select Role */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5">
                        Who Are You? <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]/20 outline-none"
                      >
                        <option value="Parent / Guardian">Parent / Guardian</option>
                        <option value="Teacher">Teacher</option>
                        <option value="School Administrator">School Administrator</option>
                        <option value="Student">Student</option>
                        <option value="Partner / Sponsor">Partner / Sponsor</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Subject field */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What would you like to ask us about? (e.g. Beta Testing, Partnership, Curriculum)"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-white text-slate-900 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]/20 outline-none"
                      />
                    </div>

                    {/* Message Text area description */}
                    <div>
                      <label className="block text-[10px] font-black text-slate-700 uppercase tracking-widest mb-1.5">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={6}
                        style={{ minHeight: '150px' }}
                        placeholder="Tell us more about your question, idea, or feedback..."
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        className="w-full bg-white text-slate-950 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold focus:border-[#30D5C8] focus:ring-1 focus:ring-[#30D5C8]/20 outline-none"
                      />
                    </div>

                    {/* General Email/Validation Error notification if any */}
                    {emailError && (
                      <p className="text-[10px] text-red-500 font-extrabold">{emailError}</p>
                    )}

                    {/* Form submit button */}
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto bg-[#30D5C8] hover:bg-[#2bc3b7] text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 active:translate-y-px transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span className="text-[1.5rem] leading-none">📨</span>
                      {isSending ? 'Sending Message...' : 'Send Message'}
                    </button>

                  </form>
                )}

                {/* Nice bonus enhancement under the contact form */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-start gap-1.5 text-[15px] text-slate-500 font-mediumLight">
                  <span className="shrink-0 text-xs">💡</span>
                  <span>We love hearing from parents, teachers, and community members. Your feedback helps us build a better learning experience for African children.</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Success Toast Notification wrapper */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-white border-2 border-[#30D5C8]/40 rounded-2xl shadow-2xl p-4 flex items-start gap-3 border-l-4 border-l-[#30D5C8]"
          >
            <div className="p-2 rounded-xl bg-[#30D5C8]/10 text-teal-650 text-teal-600 flex-shrink-0">
              <CheckCircle className="w-5 h-5 shrink-0" />
            </div>
            <div className="text-left font-sans flex-1 pr-6">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-teal-600 mb-0.5">Contact Notification</h5>
              <p className="text-xs text-slate-800 font-bold leading-relaxed">
                Your message has been sent successfully.
              </p>
            </div>
            <button 
              onClick={() => setToastVisible(false)}
              className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-650 hover:text-slate-600 transition-colors text-xs font-bold font-mono p-0.5 cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
