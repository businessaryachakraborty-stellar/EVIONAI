import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Play, Sparkles, Check, TrendingUp, ShieldCheck, Award, Star, Users } from "lucide-react";

interface HeroProps {
  onScrollTo: (elementId: string) => void;
  onPlayDemo: () => void;
}

export default function Hero({ onScrollTo, onPlayDemo }: HeroProps) {
  const [readinessScore, setReadinessScore] = useState(38);
  const [resumeScore, setResumeScore] = useState(42);
  const [interviewScore, setInterviewScore] = useState(31);

  // Smooth ticking numbers for the iPhone dashboard mockup
  useEffect(() => {
    const timer = setTimeout(() => {
      setReadinessScore(89);
      setResumeScore(92);
      setInterviewScore(85);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAFAFA] min-h-screen flex items-center">
      {/* Background radial gradient spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Copy: Copywriting and CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.05] mb-5 font-sans"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Crack Placements <br />
            With AI Before <br />
            Your Seniors Do.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Everything you need to prepare for placements in one AI powered platform.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => onScrollTo("waitlist")}
              className="px-8 py-4 bg-black hover:bg-neutral-900 text-white rounded-full text-base font-bold transition-all duration-200 cursor-pointer shadow-md active:scale-95 text-center"
            >
              Join Waitlist
            </button>
            <button
              onClick={onPlayDemo}
              className="px-8 py-4 bg-white/60 backdrop-blur-md hover:bg-white/80 text-black border border-white/60 rounded-full text-base font-bold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-black/5 text-black">
                <Play className="w-2.5 h-2.5 fill-black ml-0.5" />
              </div>
              Watch Demo
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            className="flex items-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-300 flex items-center justify-center text-[10px] font-bold font-sans">AS</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#4F7EFF] text-white flex items-center justify-center text-[10px] font-bold font-sans">AI</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#19C37D] text-white flex items-center justify-center text-[10px] font-bold font-sans">PR</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-800 text-white flex items-center justify-center text-[10px] font-bold font-sans">+15K</div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-neutral-600">
                15,000+ Students Waiting
              </span>
            </div>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            className="grid grid-cols-3 gap-6 sm:gap-8 w-full border-t border-neutral-200/70 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">95%</div>
              <div className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Resume Success</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">10,000+</div>
              <div className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Mock Interviews</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-black font-mono">500+</div>
              <div className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider mt-1">Colleges & Cos.</div>
            </div>
          </motion.div>

        </div>

        {/* Right Side: iPhone Mockup Container */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <motion.div
            className="relative w-[300px] sm:w-[320px] aspect-[9/18.5] bg-neutral-900 rounded-[50px] p-3 shadow-2xl border-4 border-neutral-800 animate-float"
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* iPhone Island notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3.5">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-900/60 border border-neutral-800/40" />
              <div className="w-1 h-1 rounded-full bg-neutral-900/40" />
            </div>

            {/* iPhone Speaker Notch top bezel line */}
            <div className="absolute top-1 right-12 left-12 h-1 bg-black/40 rounded-full" />

            {/* Reflection Glare */}
            <div className="absolute top-0 right-0 bottom-0 left-1/2 bg-gradient-to-r from-transparent to-white/5 rounded-[46px] pointer-events-none z-20" />

            {/* Screen Content */}
            <div className="relative w-full h-full bg-[#FAFAFA] rounded-[38px] overflow-hidden border border-black/10 flex flex-col pt-9 pb-4 px-4 select-none">
              
              {/* iPhone App Header */}
              <div className="flex items-center justify-between mb-4 border-b border-neutral-200/50 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded bg-black flex items-center justify-center">
                    <span className="text-[10px] font-extrabold text-white">E</span>
                  </div>
                  <span className="text-[11px] font-bold tracking-tight text-black">Evion Co-pilot</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono font-medium text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded">Active</span>
                </div>
              </div>

              {/* Placement Readiness Meter */}
              <div className="glass-card border-white/70 rounded-2xl p-3 shadow-sm mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wide">Placement Readiness</span>
                  <span className="text-xs font-extrabold text-black">{readinessScore}%</span>
                </div>
                {/* Readiness score track */}
                <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden mb-1.5">
                  <motion.div 
                    className="h-full bg-accent rounded-full"
                    initial={{ width: "38%" }}
                    animate={{ width: `${readinessScore}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>Starter</span>
                  <span className="text-accent font-semibold">Tier-1 Placed Tier</span>
                </div>
              </div>

              {/* Twin Scores Bento */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="glass-card border-white/70 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold text-neutral-500 uppercase">ATS Score</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-black font-mono">{resumeScore}</span>
                    <span className="text-[10px] text-neutral-400">/100</span>
                  </div>
                  <div className="text-[9px] text-emerald-600 font-bold mt-1">Excellent (AI suggest)</div>
                </div>

                <div className="glass-card border-white/70 rounded-2xl p-3 shadow-sm flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-bold text-neutral-500 uppercase">Mock Interview</span>
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-xl font-extrabold text-black font-mono">{interviewScore}</span>
                    <span className="text-[10px] text-neutral-400">/100</span>
                  </div>
                  <div className="text-[9px] text-emerald-600 font-bold mt-1">Ready for Google</div>
                </div>
              </div>

              {/* Animated Graph Chart */}
              <div className="glass-card border-white/70 rounded-2xl p-3 shadow-sm flex-1 flex flex-col justify-between mb-3">
                <div className="flex justify-between items-center mb-1.5">
                  <div>
                    <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-wide block">Improvement Curve</span>
                    <span className="text-xs font-bold text-black flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-emerald-500" />
                      +44% Speed Gain
                    </span>
                  </div>
                  <span className="text-[8px] font-mono text-neutral-400 bg-black/5 px-1 py-0.5 rounded">Weekly</span>
                </div>

                {/* Simulated Chart Graph */}
                <div className="h-16 w-full relative flex items-end pt-1">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4F7EFF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#4F7EFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#f0f0f0" strokeWidth="0.5" strokeDasharray="2,2" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#f0f0f0" strokeWidth="0.5" strokeDasharray="2,2" />
                    {/* Shadow Area */}
                    <path
                      d="M 0 35 Q 15 32, 25 24 T 50 18 T 75 12 T 100 4 L 100 40 L 0 40 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Main Line */}
                    <path
                      d="M 0 35 Q 15 32, 25 24 T 50 18 T 75 12 T 100 4"
                      fill="none"
                      stroke="#4F7EFF"
                      strokeWidth="2"
                    />
                    {/* Nodes */}
                    <circle cx="25" cy="24" r="1.5" fill="#4F7EFF" />
                    <circle cx="50" cy="18" r="1.5" fill="#4F7EFF" />
                    <circle cx="75" cy="12" r="1.5" fill="#4F7EFF" />
                    <circle cx="100" cy="4" r="2.5" fill="#FFFFFF" stroke="#4F7EFF" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              {/* Copilot Suggested Task bar */}
              <div className="bg-black text-white rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-[#19C37D] fill-[#19C37D]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-neutral-200">Recommended Action</div>
                    <div className="text-[10px] font-bold text-white tracking-tight">Do HR Round Practice</div>
                  </div>
                </div>
                <div className="text-[9px] font-semibold bg-white text-black px-2 py-1 rounded">Start</div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
