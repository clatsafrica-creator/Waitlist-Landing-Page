import React, { useState } from 'react';
import { WaitlistItem } from '../types';
import { 
  Check, 
  Send, 
  Sparkles, 
  CheckCircle, 
  Smartphone, 
  Mail, 
  User, 
  ShieldCheck, 
  Users,
  AlertCircle,
  Code,
  MapPin
} from 'lucide-react';

interface WaitlistFormProps {
  onSubmitWaitlist?: (item: Omit<WaitlistItem, 'id' | 'signedUpAt' | 'status'> & { id?: string }) => void;
  isSyncing?: boolean;
}

const childrenCountOptions = [
  '1 Child',
  '2 Children',
  '3 Children',
  '4 Children',
  '5+ Children'
];

const ageGroupOptions = [
  { id: 'early-explorers', label: '2–5 Years (Early Explorers)', value: '2–5 Years (Early Explorers)' },
  { id: 'young-innovators', label: '6–12 Years (Young Innovators)', value: '6–12 Years (Young Innovators)' },
  { id: 'future-builders', label: '13–18 Years (Future Builders)', value: '13–18 Years (Future Builders)' }
];

export default function WaitlistForm({ onSubmitWaitlist, isSyncing = false }: WaitlistFormProps) {
  // Form input states
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childrenCount, setChildrenCount] = useState('');
  const [location, setLocation] = useState('');
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);

  // UX & API logic states
  const [validationError, setValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showIntegrations, setShowIntegrations] = useState(false);

  // Keep copies for debug confirmation if user wants to see what was sent before resetting
  const [submittedData, setSubmittedData] = useState<any>(null);

  const toggleAgeGroup = (value: string) => {
    setValidationError('');
    if (selectedAgeGroups.includes(value)) {
      setSelectedAgeGroups(selectedAgeGroups.filter(item => item !== value));
    } else {
      setSelectedAgeGroups([...selectedAgeGroups, value]);
    }
  };

  const validateForm = () => {
    if (!parentName.trim()) {
      return 'Please enter your Parent Name.';
    }
    if (!email.trim()) {
      return 'Please enter your email address.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!phone.trim()) {
      return 'Please enter your phone number.';
    }
    if (!location.trim()) {
      return 'Please enter your state/city.';
    }
    if (!childrenCount) {
      return 'Please select the number of children.';
    }
    if (selectedAgeGroups.length === 0) {
      return 'Please select at least one age group for your children.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSyncing) return; // Prevent duplicates

    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    const ageGroupsFormatted = selectedAgeGroups.join(', ');
    const payload = {
      parentName: parentName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      location: location.trim(),
      childrenCount,
      ageGroups: ageGroupsFormatted
    };

    // Google Apps Script Web App Endpoint URL from environment variable
    const appScriptUrl = (import.meta as any).env?.VITE_APPS_SCRIPT_URL;

    try {
      if (appScriptUrl && appScriptUrl.trim()) {
        // Direct POST integration with Apps Script in JSON format
        const response = await fetch(appScriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Optimal client-side submission bypassing preflight triggers in basic webapps
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback simulation for live preview / sandbox dev testing
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Random simulated errors can be checked here, but let's complete successfully in dev
            resolve(true);
          }, 1200);
        });
        console.log('Payload transmitted directly in JSON format (Simulated):', payload);
      }

      // Keep a reference of submitted data for technical reference block
      setSubmittedData({ ...payload });

      // Clear all form fields as requested of the UX requirements
      setParentName('');
      setEmail('');
      setPhone('');
      setChildrenCount('');
      setLocation('');
      setSelectedAgeGroups([]);

      // Mark as submitted
      setIsFormSubmitted(true);

      if (onSubmitWaitlist) {
        onSubmitWaitlist(payload);
      }
    } catch (err) {
      console.error('Registration dispatch error:', err);
      // Specific error instruction: "Something went wrong. Please try again."
      setValidationError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsFormSubmitted(false);
    setSubmittedData(null);
    setValidationError('');
  };

  const codeString = `function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-generate timestamp
    var timestamp = new Date();
    
    // Map payload attributes exactly
    var parentName = data.parentName || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var location = data.location || "";
    var childrenCount = data.childrenCount || "";
    var ageGroups = data.ageGroups || "";
    var foundingFamily = "Yes"; // Auto-set per spec
    
    sheet.appendRow([timestamp, parentName, email, phone, location, childrenCount, ageGroups, foundingFamily]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}`;

  return (
    <div id="waitlist-form-container" className="max-w-3xl mx-auto w-full bg-white rounded-[3rem] p-1.5 md:p-2.5 border-2 border-[#B8A0FF]/25 shadow-2xl relative overflow-hidden font-sans">
      
      {/* Decorative colored glow background spots */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EC4B6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B8A0FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="p-6 md:p-10 relative z-10">
        
        {/* Playful Floating Badge Centered */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#FFD166]/20 text-slate-900 text-xxs font-black px-4 py-2 rounded-full border border-[#FFD166]/45 uppercase tracking-wider select-none">
            <Sparkles className="w-3.5 h-3.5 text-[#2EC4B6] shrink-0" />
            Join the CLATS Founding Families Waitlist
          </div>
        </div>

        {/* HIGH CONVERTING RESPONSIVE SIGNUP FORM */}
        <div className="w-full">
          {isFormSubmitted ? (
            <div className="py-12 px-4 text-center space-y-6">
              {/* Success Checkmark Circle */}
              <div className="w-16 h-16 bg-[#2EC4B6]/15 border-2 border-[#2EC4B6]/30 text-[#2EC4B6] rounded-full flex items-center justify-center mx-auto shadow-sm animate-bounce">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>

              {/* Exact requested feedback headers/text */}
              <div className="space-y-3">
                <h4 className="text-2xl font-black text-slate-950 font-display">🎉 You're on the Waitlist!</h4>
                <div className="text-slate-650 text-slate-800 text-xs md:text-sm max-w-lg mx-auto font-medium leading-relaxed space-y-2.5">
                  <p className="font-bold text-slate-900 text-sm md:text-base">
                    Welcome to the CLATS Founding Families Waitlist. Please check your email.
                  </p>
                </div>
              </div>

              {/* Data debug confirmation for the Google Sheets mapping */}
              {submittedData && (
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-md mx-auto text-left text-xxs space-y-1.5 select-none text-slate-500 font-mono">
                  <div className="font-extrabold uppercase text-[9px] text-slate-600 mb-1 flex items-center gap-1">
                    <span className="text-green-500">●</span> Google Sheets Schema Transmission Mapped:
                  </div>
                  <div><strong className="text-slate-700">Timestamp:</strong> [Auto-generated by Google Sheet]</div>
                  <div><strong className="text-slate-700">parentName:</strong> {submittedData.parentName}</div>
                  <div><strong className="text-slate-700">email:</strong> {submittedData.email}</div>
                  <div><strong className="text-slate-700">phone:</strong> {submittedData.phone}</div>
                  <div><strong className="text-slate-700">location:</strong> {submittedData.location}</div>
                  <div><strong className="text-slate-700">childrenCount:</strong> {submittedData.childrenCount}</div>
                  <div className="break-words"><strong className="text-slate-700">ageGroups:</strong> {submittedData.ageGroups}</div>
                  <div><strong className="text-slate-700">Founding Family:</strong> Yes [Auto-set]</div>
                  <div className="pt-2 flex justify-between items-center text-[8px] text-[#2EC4B6] font-sans font-black uppercase tracking-widest border-t border-slate-200 mt-2">
                    <span>★ Google Sheets Data Ready</span>
                    <button 
                      type="button" 
                      onClick={() => setShowIntegrations(!showIntegrations)}
                      className="text-purple-600 hover:text-purple-700 flex items-center gap-0.5 normal-case tracking-normal cursor-pointer text-[9px]"
                    >
                      <Code className="w-3 h-3" /> {showIntegrations ? "Hide Sheet Code" : "Show Script Code"}
                    </button>
                  </div>
                </div>
              )}

              {/* Apps Script setup code */}
              {showIntegrations && (
                <div className="bg-slate-900 text-slate-200 p-4 rounded-2xl max-w-md mx-auto text-left text-[10px] font-mono relative border border-slate-800 animate-fadeIn overflow-x-auto space-y-2">
                  <p className="text-[#2EC4B6] font-sans text-xxs font-black uppercase tracking-wider">
                    📋 Apps Script Setup Code
                  </p>
                  <pre className="text-slate-300 leading-normal scrollbar-thin select-all whitespace-pre">
                    {codeString}
                  </pre>
                  <p className="text-[#FFD166] text-[9px] leading-relaxed font-sans pt-1">
                    Paste the script in your Google Sheet's Extensions &gt; Apps Script, click Deploy &gt; New Deployment, select Web App, set access to "Anyone", and populate the Web App URL in <strong>VITE_APPS_SCRIPT_URL</strong> in your secrets panel.
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handleResetForm}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-150 text-slate-700 font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
              >
                Register Another Family
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Error Callout */}
              {validationError && (
                <div className="p-3.5 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs flex items-center gap-2.5 font-bold animate-[shake_0.4s_ease-in-out]">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* FIELD 1: Parent Name */}
              <div>
                <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5 flex justify-between">
                  <span>Parent Name</span>
                  <span className="text-red-500 text-xs font-bold font-mono">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    disabled={isSubmitting || isSyncing}
                    placeholder="Enter your parent name"
                    value={parentName}
                    onChange={(e) => {
                      setParentName(e.target.value);
                      if (validationError && e.target.value.trim()) setValidationError('');
                    }}
                    className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm transition-all shadow-sm font-semibold"
                  />
                </div>
              </div>

              {/* GRID: Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* FIELD 2: Email Address */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5 flex justify-between">
                    <span>Email Address</span>
                    <span className="text-red-500 text-xs font-bold font-mono">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting || isSyncing}
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (validationError && e.target.value.trim()) setValidationError('');
                      }}
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm transition-all shadow-sm font-semibold"
                    />
                  </div>
                </div>

                {/* FIELD 3: Phone Number */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5 flex justify-between">
                    <span>Phone Number</span>
                    <span className="text-red-500 text-xs font-bold font-mono">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      disabled={isSubmitting || isSyncing}
                      placeholder="e.g. +2348012345678"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (validationError && e.target.value.trim()) setValidationError('');
                      }}
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl pl-10 pr-4 py-3 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm transition-all shadow-sm font-semibold"
                    />
                  </div>
                </div>

              </div>

              {/* GRID: Children count and State/City (location) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* FIELD 4: Number of Children Dropdown */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5 flex justify-between">
                    <span>Number of Children</span>
                    <span className="text-red-500 text-xs font-bold font-mono">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <Users className="w-4 h-4" />
                    </div>
                    <select
                      required
                      disabled={isSubmitting || isSyncing}
                      value={childrenCount}
                      onChange={(e) => {
                        setChildrenCount(e.target.value);
                        if (validationError && e.target.value) setValidationError('');
                      }}
                      className="w-full bg-slate-50 text-slate-900 rounded-2xl pl-10 pr-10 py-3.5 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm transition-all shadow-sm font-semibold appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choose number of kids</option>
                      {childrenCountOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {/* Custom selection icon arrow */}
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                      ▼
                    </div>
                  </div>
                </div>

                {/* FIELD 4.5: State/City Text Input (location) */}
                <div>
                  <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-1.5 flex justify-between">
                    <span>State / City</span>
                    <span className="text-red-500 text-xs font-bold font-mono">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      disabled={isSubmitting || isSyncing}
                      placeholder="e.g. Lagos, Nigeria"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        if (validationError && e.target.value.trim()) setValidationError('');
                      }}
                      className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 rounded-2xl pl-10 pr-4 py-3.5 border border-slate-200 focus:border-[#2EC4B6] focus:bg-white focus:ring-4 focus:ring-[#2EC4B6]/10 outline-none text-xs md:text-sm transition-all shadow-sm font-semibold animate-fadeIn"
                    />
                  </div>
                </div>

              </div>

              {/* FIELD 5: Which age groups do your children belong to or "Age Group" */}
              <div>
                <label className="block text-[11px] font-black text-slate-900 uppercase tracking-wider mb-2 flex justify-between">
                  <span>Age Group</span>
                  <span className="text-red-500 text-xs font-bold font-mono">* (Select all that apply)</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {ageGroupOptions.map((opt) => {
                    const isChecked = selectedAgeGroups.includes(opt.value);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isSubmitting || isSyncing}
                        onClick={() => toggleAgeGroup(opt.value)}
                        className={`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer shadow-sm relative overflow-hidden flex flex-col justify-between ${
                          isChecked
                            ? 'border-[#2EC4B6] bg-[#2EC4B6]/5 text-[#2EC4B6] font-black'
                            : 'border-slate-200/80 bg-slate-50 text-slate-800 hover:border-[#2EC4B6]/60 hover:bg-slate-100/50'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="text-xs font-extrabold">{opt.label}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked ? 'bg-[#2EC4B6] border-[#2EC4B6] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3.5]" />}
                          </div>
                        </div>
                        <span className="text-[10px] text-slate-500 font-bold block leading-normal mt-0.5">
                          {opt.id === 'early-explorers' && 'Sensory development & shapes'}
                          {opt.id === 'young-innovators' && 'Visual block coding & logic'}
                          {opt.id === 'future-builders' && 'Prompts, safety & web building'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ACTION COHORT BUTTON */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting || isSyncing}
                  className="w-full bg-[#2EC4B6] text-slate-950 hover:bg-[#25B4A6] disabled:bg-slate-300 disabled:border-slate-300 disabled:text-slate-500 font-black text-xs md:text-sm uppercase tracking-wider py-4 rounded-2xl shadow-lg shadow-[#2EC4B6]/12 hover:shadow-[#2EC4B6]/25 transform active:translate-y-px transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#2EC4B6]"
                >
                  <Send className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                  <span>{isSubmitting ? 'Sending Request...' : isSyncing ? 'Submitting to database...' : 'Join the CLATS Waitlist'}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>

    </div>
  );
}
