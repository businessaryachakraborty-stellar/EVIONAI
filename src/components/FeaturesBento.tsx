import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, FileText, Video, Eye, Mic, Camera, Award, ShieldCheck, 
  ChevronRight, Brain, Check, BarChart2, Briefcase, FileCode, CheckCircle2, 
  UploadCloud, ArrowRight, Laptop, Settings, ExternalLink, Globe, Star
} from "lucide-react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
  key?: React.Key;
}

function Tooltip({ children, content, position = "top", className = "" }: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-1 border-t-neutral-950/95",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1 border-b-neutral-950/95",
    left: "left-full top-1/2 -translate-y-1/2 -ml-1 border-l-neutral-950/95",
    right: "right-full top-1/2 -translate-y-1/2 -mr-1 border-r-neutral-950/95"
  };

  return (
    <div className={`group relative inline-block ${className}`}>
      {children}
      <div className={`absolute z-50 ${positionClasses[position]} w-56 p-3 bg-neutral-950/95 text-white text-[11px] font-sans font-medium rounded-xl shadow-2xl border border-white/15 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none transition-all duration-200 text-center leading-normal backdrop-blur-md`}>
        {content}
        <div className={`absolute border-4 border-transparent ${arrowClasses[position]}`} />
      </div>
    </div>
  );
}

export default function FeaturesBento() {
  // 1. Resume Builder State
  const [activeResumeRole, setActiveResumeRole] = useState("Frontend Engineer");
  const [resumeAtsScore, setResumeAtsScore] = useState(82);

  // 2. AI Mock Interview Simulator State
  const [interviewStatus, setInterviewStatus] = useState<"idle" | "intro" | "questioning" | "listening" | "analyzing" | "completed">("idle");
  const [interviewQuestionIndex, setInterviewQuestionIndex] = useState(0);
  const [voiceVolume, setVoiceVolume] = useState([30, 45, 20, 60, 10, 40]);
  const [cameraPermission, setCameraPermission] = useState(false);
  const [emotionDetected, setEmotionDetected] = useState("Determined");
  const [eyeContactStatus, setEyeContactStatus] = useState("Perfect");
  const [lipSyncStatus, setLipSyncStatus] = useState("Locked");

  const interviewQuestions = [
    "Tell me about a challenging frontend optimization you led.",
    "How do you handle micro-service failures in production?",
    "Explain the difference between optimistic UI rendering and standard states.",
  ];

  // Voice wave pulsing interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (interviewStatus === "listening" || interviewStatus === "questioning") {
      interval = setInterval(() => {
        setVoiceVolume(Array.from({ length: 6 }, () => Math.floor(Math.random() * 80) + 15));
      }, 150);
    }
    return () => clearInterval(interval);
  }, [interviewStatus]);

  // Voice synthesis read-out function
  const speakQuestion = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1.05;
      utterance.rate = 0.95;
      utterance.onend = () => {
        setInterviewStatus("listening");
        // Simulate speech response after 4 seconds
        setTimeout(() => {
          setInterviewStatus("analyzing");
          setTimeout(() => {
            if (interviewQuestionIndex < interviewQuestions.length - 1) {
              setInterviewQuestionIndex(prev => prev + 1);
              setInterviewStatus("questioning");
            } else {
              setInterviewStatus("completed");
            }
          }, 1500);
        }, 4000);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      // Graceful fallback for non-speech browsers
      setInterviewStatus("listening");
      setTimeout(() => {
        setInterviewStatus("analyzing");
        setTimeout(() => {
          if (interviewQuestionIndex < interviewQuestions.length - 1) {
            setInterviewQuestionIndex(prev => prev + 1);
            setInterviewStatus("questioning");
          } else {
            setInterviewStatus("completed");
          }
        }, 1500);
      }, 4000);
    }
  };

  useEffect(() => {
    if (interviewStatus === "questioning") {
      speakQuestion(interviewQuestions[interviewQuestionIndex]);
    }
  }, [interviewQuestionIndex, interviewStatus]);

  const handleStartInterview = () => {
    setCameraPermission(true);
    setInterviewQuestionIndex(0);
    setInterviewStatus("intro");
    setTimeout(() => {
      setInterviewStatus("questioning");
    }, 2000);
  };

  const handleStopInterview = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setInterviewStatus("idle");
    setCameraPermission(false);
  };

  // 3. Adaptive Test Pipeline Stage
  const [activePipelineStage, setActivePipelineStage] = useState("Technical");
  const pipelineStages = [
    { name: "Aptitude", score: "94%", desc: "Cognitive logic and data structures" },
    { name: "Group Discussion", score: "88%", desc: "Leadership and active negotiation communication" },
    { name: "Technical", score: "96%", desc: "System architectures and live coding" },
    { name: "HR Round", score: "91%", desc: "Cultural alignment and long term vision" },
    { name: "Offer Letter", score: "Pre-approved", desc: "Enterprise matching trigger" },
  ];

  // 4. Job Tracking AI state
  const [selectedJobId, setSelectedJobId] = useState("job-1");
  const jobs = [
    { id: "job-1", co: "Stripe", role: "Software Engineer", match: "98% Match", status: "Interviewing", logoBg: "bg-[#635BFF]" },
    { id: "job-2", co: "Vercel", role: "UI Engineer", match: "95% Match", status: "Applied", logoBg: "bg-black" },
    { id: "job-3", co: "Google", role: "Systems Specialist", match: "89% Match", status: "Shortlisted", logoBg: "bg-red-500" },
  ];

  // 5. ATS Resume Checker Scan Simulation
  const [scanStatus, setScanStatus] = useState<"idle" | "uploading" | "scanning" | "done">("idle");
  const [atsScorePercent, setAtsScorePercent] = useState(0);
  const [scannedFilename, setScannedFilename] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      triggerAtsScan(file.name);
    }
  };

  const triggerAtsScan = (filename: string) => {
    setScannedFilename(filename);
    setScanStatus("uploading");
    setTimeout(() => {
      setScanStatus("scanning");
      setTimeout(() => {
        setScanStatus("done");
        // Animate count up
        let count = 0;
        const interval = setInterval(() => {
          count += 2;
          if (count >= 94) {
            setAtsScorePercent(94);
            clearInterval(interval);
          } else {
            setAtsScorePercent(count);
          }
        }, 15);
      }, 3000);
    }, 1200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      triggerAtsScan(file.name);
    }
  };

  // 6. AI Portfolio state
  const [portfolioTheme, setPortfolioTheme] = useState("Minimal Slate");
  const [portfolioLive, setPortfolioLive] = useState(false);

  return (
    <section id="features" className="py-20 md:py-32 bg-[#FAFAFA] border-b border-neutral-200/50">
      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
            DEEP FEATURE WORKSHOP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            The ultimate weapon for campus placement success.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Everything you need is pre-engineered into a beautifully fast dashboard. Engage with active simulations that mimic India's top recruiters.
          </p>
        </div>

        {/* Master Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. INTERACTIVE MOCK INTERVIEW - MAIN 12-COL HERO CARD */}
          <div className="lg:col-span-12 bg-[#0E1118]/85 backdrop-blur-xl text-white rounded-[32px] p-6 sm:p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Ambient background accent light */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Card copy */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <Tooltip content="Launch a fully responsive, voice-synthesized AI mock interview that mimics a real HR/Technical panel." position="right">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-[10px] font-mono font-bold text-accent uppercase tracking-widest mb-6 cursor-help">
                      <Video className="w-3.5 h-3.5" />
                      Interactive Simulator
                    </div>
                  </Tooltip>
                  <h3 className="text-3xl font-extrabold tracking-tight text-white mb-4">
                    Ultra Realistic AI Mock Interview Round
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    Launch a live, voice-synthesized, responsive interview. The system analyzes eye contact, vocal pitch, technical speech accuracy, and response delays in real-time.
                  </p>
                </div>

                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400">
                    <Tooltip content="Aligns virtual avatar speech animations perfectly with real-time audio streams." position="top">
                      <div className="flex items-center gap-1.5 cursor-help">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
                        <span>Lip Sync: Active</span>
                      </div>
                    </Tooltip>
                    <Tooltip content="Monitors head position and eye contact focus using high-precision web camera tracking." position="top">
                      <div className="flex items-center gap-1.5 cursor-help">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
                        <span>Tracking: Face Grid</span>
                      </div>
                    </Tooltip>
                    <Tooltip content="Decodes sentiment, excitement, or hesitation from real-time facial micro-expressions." position="top">
                      <div className="flex items-center gap-1.5 cursor-help">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>Emotion: Determined</span>
                      </div>
                    </Tooltip>
                    <Tooltip content="Evaluates vocal pitch fluctuation, jitter, and steady cadence during standard responses." position="top">
                      <div className="flex items-center gap-1.5 cursor-help">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
                        <span>Vocal Pitch: Steady</span>
                      </div>
                    </Tooltip>
                  </div>

                  {interviewStatus === "idle" ? (
                    <button
                      onClick={handleStartInterview}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F7EFF] hover:bg-accent/90 text-white rounded-full text-sm font-bold shadow-md cursor-pointer transition-all active:scale-95"
                    >
                      <Video className="w-4 h-4" /> Start Simulator Trial
                    </button>
                  ) : (
                    <button
                      onClick={handleStopInterview}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-sm font-bold shadow-md cursor-pointer transition-all active:scale-95"
                    >
                      Stop Practice Round
                    </button>
                  )}
                </div>
              </div>

              {/* LIVE SIMULATOR SCREEN - Right Side */}
              <div className="lg:col-span-7 bg-[#111] border border-neutral-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden">
                
                {/* Simulator UI Header overlay */}
                <div className="flex justify-between items-center mb-4 border-b border-neutral-800 pb-3 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      EVION COPILOT EVAL V2.4
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-300">
                      Camera: {cameraPermission ? "ON" : "OFF"}
                    </span>
                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-neutral-300">
                      Mic: {cameraPermission ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>

                {/* Main Viewport Content based on active state */}
                <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-6">
                  {interviewStatus === "idle" && (
                    <div className="text-center p-6">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 animate-float">
                        <Video className="w-8 h-8 text-neutral-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">Simulator Sandbox</h4>
                      <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                        Turn on simulator to start high-fidelity camera tracking and speech synthesis.
                      </p>
                    </div>
                  )}

                  {interviewStatus === "intro" && (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-accent animate-spin" style={{ animationDuration: "3s" }} />
                      </div>
                      <span className="text-xs text-neutral-400 font-mono">Calibrating face tracker grid...</span>
                    </div>
                  )}

                  {(interviewStatus === "questioning" || interviewStatus === "listening" || interviewStatus === "analyzing") && (
                    <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      {/* Virtual Interviewer Avatar Left */}
                      <div className="md:col-span-5 flex flex-col items-center">
                        <div className="relative w-28 h-28 rounded-full border border-neutral-700 p-1 bg-neutral-900/80 mb-3 overflow-hidden flex items-center justify-center">
                          {/* Inner glowing circle */}
                          <div className={`absolute inset-0 bg-accent/10 transition-opacity ${interviewStatus === "questioning" ? "opacity-100" : "opacity-40"}`} />
                          
                          {/* Stylized AI Face Avatar */}
                          <svg className="w-14 h-14 text-accent relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M17 21v-2a4 4 0 00-4-4H11a4 4 0 00-4 4v2T12 3v2" />
                          </svg>

                          {/* Face tracking grid lines */}
                          <div className="absolute inset-0 border border-emerald-500/15 scale-75 rounded-lg pointer-events-none" />
                          <div className="absolute inset-0 border border-emerald-500/15 rotate-45 scale-90 pointer-events-none" />
                        </div>
                        <Tooltip content="Emma is modeled on real hiring patterns from Stripe, Google, and Amazon." position="top">
                          <span className="text-xs font-bold text-white cursor-help">Emma (SDE Mentor)</span>
                        </Tooltip>
                        <span className="text-[10px] text-neutral-500 font-mono">AI Interviewer Core</span>
                      </div>

                      {/* Real-time speech stats */}
                      <div className="md:col-span-7 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 block mb-1">TRANSCRIPT / PROMPT</span>
                          <p className="text-xs text-white italic font-medium leading-relaxed">
                            {interviewStatus === "questioning" 
                              ? ` Emma: "${interviewQuestions[interviewQuestionIndex]}"`
                              : `[ Emma is listening to your vocal response... ]`}
                          </p>
                        </div>

                        {/* Real-time indicators */}
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-400 pt-2 border-t border-neutral-800">
                          <div>
                            <span className="block text-neutral-500">EYE CONTACT</span>
                            <span className="text-emerald-500 font-semibold">{eyeContactStatus}</span>
                          </div>
                          <div>
                            <span className="block text-neutral-500">LIP LOCK STATUS</span>
                            <span className="text-emerald-500 font-semibold">{lipSyncStatus}</span>
                          </div>
                        </div>

                        {/* Audio Waveform Viz */}
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 block mb-1">VOCAL INTENSITY</span>
                          <div className="flex items-center gap-1 h-8">
                            {voiceVolume.map((vol, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-accent rounded-full transition-all duration-150"
                                style={{ height: `${vol}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {interviewStatus === "completed" && (
                    <div className="text-center w-full max-w-md p-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
                        <Check className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">Session Complete</h4>
                      <p className="text-xs text-neutral-400 mb-4">Emma compiled your scorecard. Ready for final evaluation review.</p>
                      
                      {/* Interactive certificate report */}
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-left">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[10px] font-mono text-accent">SCORECARD RESULT</span>
                          <span className="text-xs font-bold text-[#19C37D]">PASSED (85/100)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-300">
                          <div>Vocal Clarity: <span className="text-white">Excellent (92%)</span></div>
                          <div>Response delay: <span className="text-white">1.2s avg</span></div>
                          <div>Anxiety index: <span className="text-white">Low</span></div>
                          <div>Logic alignment: <span className="text-white">Strong</span></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer status caption */}
                <div className="text-[9px] font-mono text-neutral-600 border-t border-neutral-800 pt-2 flex justify-between z-10">
                  <span>SYSTEM FEEDBACK CORE INJECTOR</span>
                  <span>TIME UTC: 2026-07-16</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ATS RESUME CHECKER - 6-COL CARD */}
          <div className="lg:col-span-6 glass-card glass-card-hover rounded-[32px] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <Tooltip content="Calculates SDE compliance using direct keyword index algorithms standard to corporate recruiters." position="bottom">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full text-[10px] font-mono font-bold text-[#4F7EFF] uppercase tracking-widest mb-6 border border-white/60 cursor-help">
                  <FileText className="w-3.5 h-3.5" />
                  ATS Scanner
                </div>
              </Tooltip>
              <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">
                ATS Resume Checker
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Drag and drop your resume file. Our parser scans for job-role alignment, keyword density gaps, and formatting inconsistencies in 2 seconds.
              </p>
            </div>

            {/* Scan Box Container */}
            <Tooltip content="Upload your PDF/DOCX to get instant analysis, structure feedback, and score calculations." position="top">
              <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="glass-input border border-dashed border-neutral-300/60 rounded-2xl p-6 text-center cursor-pointer hover:border-[#4F7EFF]/50 transition-all duration-300 relative overflow-hidden"
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept=".pdf,.docx" 
                  onChange={handleFileSelect} 
                />

                {/* Scanning laser visual overlay */}
                {scanStatus === "scanning" && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#19C37D] animate-bounce shadow-[0_0_10px_#19C37D] z-10" />
                )}

                {scanStatus === "idle" && (
                  <div>
                    <UploadCloud className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                    <p className="text-xs font-bold text-neutral-700 mb-0.5">Drag & drop your Resume PDF/Word here</p>
                    <p className="text-[10px] text-neutral-400 font-mono">Or click to browse storage</p>
                  </div>
                )}

                {scanStatus === "uploading" && (
                  <div>
                    <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-xs font-semibold text-neutral-600">Uploading {scannedFilename}...</p>
                  </div>
                )}

                {scanStatus === "scanning" && (
                  <div>
                    <div className="text-xs font-bold text-neutral-800 mb-1">SCANNING KEYWORD INDEX</div>
                    <p className="text-[10px] font-mono text-neutral-400">Verifying ATS standard specs...</p>
                  </div>
                )}

                {scanStatus === "done" && (
                  <div>
                    <CheckCircle2 className="w-7 h-7 text-emerald-500 mx-auto mb-2" />
                    <p className="text-xs font-bold text-neutral-800">Scanned: {scannedFilename}</p>
                    <div className="flex items-center justify-center gap-4 mt-3">
                      <div>
                        <span className="text-2xl font-extrabold text-black font-mono">{atsScorePercent}%</span>
                        <span className="text-[10px] text-neutral-400 font-mono block">ATS RATING</span>
                      </div>
                      <div className="text-left border-l border-neutral-200 pl-4 text-[10px] text-neutral-500 font-mono space-y-0.5">
                        <div className="text-emerald-600 font-bold">✓ Elegant Typography</div>
                        <div>✗ Missing: Redux, Webpack</div>
                        <div>✗ Role: SDE-1 ready</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Tooltip>
          </div>

          {/* 3. AI PORTFOLIO GENERATOR - 6-COL CARD */}
          <div className="lg:col-span-6 glass-card glass-card-hover rounded-[32px] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <Tooltip content="Auto-generates clean, fast-loading portfolios on custom dev-branded sub-domains instantly." position="bottom">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest mb-6 border border-white/60 cursor-help">
                  <Laptop className="w-3.5 h-3.5" />
                  Live Portfolios
                </div>
              </Tooltip>
              <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">
                AI Portfolio Generator
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Instantly convert your scanned resume data into a production-ready portfolio website. Claim your custom domain and share with top recruiters.
              </p>
            </div>

            {/* Browser Mockup Visual */}
            <div className="glass-input rounded-2xl p-4 flex flex-col h-44">
              {/* Browser bar */}
              <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5 mb-2.5">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>
                <div className="bg-neutral-200/60 text-[9px] font-mono text-neutral-500 px-3 py-0.5 rounded flex items-center gap-1 select-none">
                  <Globe className="w-2.5 h-2.5" />
                  <span>aryaman.evion.ai</span>
                </div>
                <div className="w-4 h-4" />
              </div>

              {/* Browser view content */}
              <div className="flex-1 bg-white rounded-lg p-3 border border-neutral-200/40 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                      <span className="text-[7px] font-bold text-white">A</span>
                    </div>
                    <span className="text-[10px] font-bold text-black">Aryaman Sen</span>
                  </div>
                  <Tooltip content="Guarantees rapid page-load times, fully structured schemas, and top core web vitals." position="bottom">
                    <span className="text-[9px] font-mono font-bold text-emerald-500 bg-emerald-50 px-1 py-0.5 rounded cursor-help">
                      SEO: 98/100
                    </span>
                  </Tooltip>
                </div>

                <div className="text-[10px] text-neutral-500 leading-relaxed mt-2 italic">
                  "SDE-1 specializing in real-time WebSockets and custom compiler architectures."
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-100">
                  <div className="flex gap-1">
                    <span className="text-[8px] font-mono bg-neutral-100 px-1 rounded">React</span>
                    <span className="text-[8px] font-mono bg-neutral-100 px-1 rounded">Node</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#4F7EFF] flex items-center gap-0.5">
                    Live Demo <ExternalLink className="w-2 h-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. ADAPTIVE PLACEMENT TEST - 5-COL CARD */}
          <div className="lg:col-span-5 glass-card glass-card-hover rounded-[32px] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <Tooltip content="Dynamic logical, aptitude, and code evaluation rounds customized dynamically to your responses." position="bottom">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest mb-6 border border-white/60 cursor-help">
                  <Brain className="w-3.5 h-3.5" />
                  Continuous Testing
                </div>
              </Tooltip>
              <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">
                Adaptive Placement Test
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                Simulate standard placement workflows of elite recruiters. Click on each block to view the scoring details.
              </p>
            </div>

            {/* Pipeline Stage visualizer */}
            <div className="space-y-2">
              {pipelineStages.map((stage, idx) => (
                <Tooltip key={idx} content={`Detailed syllabus and live score evaluation parameters for the ${stage.name} phase.`} position="top" className="w-full">
                  <div
                    onClick={() => setActivePipelineStage(stage.name)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all duration-300 w-full ${
                      activePipelineStage === stage.name
                        ? "bg-black text-white border-black shadow-md scale-[1.01]"
                        : "bg-white/30 border-white/40 hover:bg-white/60 hover:border-neutral-300/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        activePipelineStage === stage.name ? "bg-white text-black" : "bg-neutral-200 text-neutral-600"
                      }`}>
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-left">{stage.name}</h4>
                        {activePipelineStage === stage.name && (
                          <p className="text-[9px] text-neutral-300 font-sans mt-0.5 leading-relaxed text-left">
                            {stage.desc}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider pl-4">
                      {stage.score}
                    </span>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* 5. JOB TRACKING AI - 7-COL CARD */}
          <div className="lg:col-span-7 glass-card glass-card-hover rounded-[32px] p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <Tooltip content="Discovers on-campus and off-campus roles, organizing follow-up loops automatically." position="bottom">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest mb-6 border border-white/60 cursor-help">
                  <Briefcase className="w-3.5 h-3.5" />
                  Auto Tracking
                </div>
              </Tooltip>
              <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">
                Smart Job Tracking AI
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                No more tracking applications on messy Excel sheets. AI discovers target campus opportunities, auto-tracks candidate applications, and suggests follow-up times.
              </p>
            </div>

            {/* Simulated Tracking Dashboard */}
            <div className="glass-input rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center pb-2.5 border-b border-neutral-200">
                <span className="text-xs font-bold text-neutral-600">Active Board (3 Openings)</span>
                <span className="text-[10px] font-mono text-neutral-400">Syncing with LinkedIn</span>
              </div>

              <div className="space-y-2.5">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedJobId === job.id 
                        ? "bg-white border-neutral-300 shadow-sm translate-x-1" 
                        : "bg-white/45 border-neutral-200/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${job.logoBg} flex items-center justify-center text-white font-extrabold text-sm`}>
                        {job.co[0]}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-black">{job.co}</div>
                        <div className="text-[10px] text-neutral-500">{job.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Tooltip content="Resume keyword density compared against hiring criteria for this exact role." position="top">
                        <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded cursor-help">
                          {job.match}
                        </span>
                      </Tooltip>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${
                        job.status === "Interviewing" ? "bg-amber-100 text-amber-700" :
                        job.status === "Applied" ? "bg-neutral-100 text-neutral-600" : "bg-emerald-100 text-emerald-700"
                      }`}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6. HUMAN MOCK INTERVIEW & FEEDBACK - 12-COL SUMMARY FOOTER CARD */}
          <div className="lg:col-span-12 bg-white rounded-[32px] p-6 sm:p-10 border border-neutral-200/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Tooltip content="Personal mock assessments conducted 1-on-1 by actual tech leads from top tier firms." position="right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 rounded-full text-[10px] font-mono font-bold text-[#FF4D4F] uppercase tracking-widest mb-6 cursor-help">
                    <Star className="w-3.5 h-3.5" />
                    Human Polish Round
                  </div>
                </Tooltip>
                <h3 className="text-2xl font-extrabold tracking-tight text-black mb-3">
                  Human Mock Interviews with Verified Experts
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Ready to finalize? Connect with senior engineers currently working at Google, Stripe, Notion, or Vercel. Receive private feedback audits, complete session audio records, and direct recommendations.
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-6 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">EXPERTS POOL</span>
                  <div className="text-lg font-extrabold text-black">400+ Tech Leads</div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">Active mentorship from top engineering campuses.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">SATISFACTION</span>
                  <div className="text-lg font-extrabold text-[#19C37D]">99.4% Rating</div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">Based on real student placement success data.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">RECORDED SESSIONS</span>
                  <div className="text-lg font-extrabold text-black">100% Secure</div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">Secure session vaults you can review before the actual campus hiring day.</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase">REPORTS DEPLOYED</span>
                  <div className="text-lg font-extrabold text-black">Line-by-line Audits</div>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">Actionable tips to fix communication bottlenecks instantly.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
