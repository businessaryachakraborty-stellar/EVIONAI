import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Sparkles, Volume2, ShieldAlert, Check } from "lucide-react";

// Import modular sections
import FloatingNavbar from "./components/FloatingNavbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import ProblemSolution from "./components/ProblemSolution";
import AboutSection from "./components/AboutSection";
import WhyEvion from "./components/WhyEvion";
import FeaturesBento from "./components/FeaturesBento";
import { FeaturesBentoSkeleton, TestimonialsSkeleton } from "./components/SkeletonLoader";
import PlacementJourney from "./components/PlacementJourney";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import WaitlistForm from "./components/WaitlistForm";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [isInitializing, setIsInitializing] = useState(true);

  // Simulate initial initialization of data (bento features & testimonials)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Auto incrementing demo slide steps for our custom simulated video player modal
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDemoOpen) {
      timer = setInterval(() => {
        setDemoStep((prev) => (prev + 1) % 4);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isDemoOpen]);

  // Smooth scroll helper
  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // offset to compensate for floating navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const demoCaptions = [
    {
      title: "Step 1: Deep Profile Scan",
      subtitle: "Connecting GitHub and compiling initial baseline metrics.",
      desc: "Evion scans active projects and grades you against standard recruiter filters.",
    },
    {
      title: "Step 2: AI Mock Evaluation",
      subtitle: "Engaging face-to-face vocal analysis with Emma.",
      desc: "Our virtual co-pilot assesses eye-contact, speech pace, and technical clarity.",
    },
    {
      title: "Step 3: Line-by-Line Code Refactoring",
      subtitle: "Instant feedback on technical SDE algorithms.",
      desc: "The system catches structural bugs and optimizes space-complexity live.",
    },
    {
      title: "Step 4: Unified Live Dashboard",
      subtitle: "Tracking application outcomes with 95% accuracy.",
      desc: "Your customized digital portfolio is generated and shared with 500+ colleges.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-black antialiased selection:bg-accent/15">
      
      {/* Scroll Progress indicator line at the absolute top of the page */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-200 z-50">
        <div className="h-full bg-accent w-0 transition-all duration-300" id="scroll-bar" />
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar onScrollTo={handleScrollTo} onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Hero Section */}
      <Hero onScrollTo={handleScrollTo} onPlayDemo={() => setIsDemoOpen(true)} />

      {/* College Trust Bar Marquee */}
      <TrustMarquee />

      {/* Problem & Solution Comparison */}
      <ProblemSolution />

      {/* About Section & Vision Roadmap Timeline */}
      <AboutSection />

      {/* Why Evion Bento Grid values */}
      <WhyEvion />

      {/* Interactive Bento Features (Resume scan, AI Mock Interview, Job Board, etc.) */}
      <AnimatePresence mode="wait">
        {isInitializing ? (
          <motion.div
            key="bento-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FeaturesBentoSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="bento-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <FeaturesBento />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Student Evolution Placement Journey Horizontal Pipeline */}
      <PlacementJourney />

      {/* Real Student Testimonials Floating row */}
      <AnimatePresence mode="wait">
        {isInitializing ? (
          <motion.div
            key="testimonials-skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TestimonialsSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="testimonials-content"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Testimonials />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pricing Cards with comparison */}
      <Pricing />

      {/* Accordion FAQ Grid */}
      <FAQ />

      {/* Waitlist Join Form Section (OpenAI style + Confetti) */}
      <WaitlistForm />

      {/* Compact Newsletter subscription form */}
      <Newsletter />

      {/* Page Footer */}
      <Footer />

      {/* Admin Dashboard Modal log tracker */}
      <AdminDashboard isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      {/* Watch Demo Modal Video Mockup */}
      <AnimatePresence>
        {isDemoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 select-none">
            
            <motion.div
              className="relative w-full max-w-4xl bg-neutral-950 text-white rounded-[32px] border border-neutral-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px]"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Left Column: Custom Interactive simulated player */}
              <div className="flex-1 bg-black p-6 sm:p-8 flex flex-col justify-between relative">
                
                {/* Simulated Player Header overlay */}
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
                    EVION PLATFORM PREVIEW
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-neutral-400">DEMO PLAYBACK</span>
                  </div>
                </div>

                {/* Simulated Video Display screen */}
                <div className="flex-1 flex flex-col items-center justify-center my-6 py-4">
                  
                  {/* Outer glowing pulsing aura */}
                  <div className="relative w-36 h-36 rounded-full flex items-center justify-center border border-white/10 bg-white/5 shadow-inner">
                    <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-25" />
                    
                    {/* Visualizer audio waves based on active step */}
                    <svg className="w-16 h-16 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      {demoStep === 0 && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
                      )}
                      {demoStep === 1 && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      )}
                      {demoStep === 2 && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                      )}
                      {demoStep === 3 && (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      )}
                    </svg>

                    {/* Step indicator tag */}
                    <div className="absolute bottom-2 bg-black/80 border border-white/10 rounded px-2 py-0.5 text-[9px] font-mono text-neutral-300">
                      STAGE {demoStep + 1}
                    </div>
                  </div>

                  {/* Dynamic caption subtitles */}
                  <div className="text-center mt-6 max-w-xs space-y-1">
                    <div className="text-xs font-mono font-bold text-accent">{demoCaptions[demoStep].subtitle}</div>
                    <div className="text-sm font-bold text-white tracking-tight">{demoCaptions[demoStep].title}</div>
                  </div>

                </div>

                {/* Simulated Player Controls */}
                <div className="flex items-center gap-4 z-10 border-t border-white/10 pt-4">
                  <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer">
                    <Volume2 className="w-4 h-4" />
                  </div>
                  {/* Timeline progress line */}
                  <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent rounded-full"
                      animate={{ width: `${((demoStep + 1) / demoCaptions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    0{demoStep + 1}:00 / 04:00
                  </span>
                </div>

              </div>

              {/* Right Column: Descriptions and Steps Navigation list */}
              <div className="w-full md:w-80 bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                      Product Steps
                    </h4>
                    <button
                      onClick={() => setIsDemoOpen(false)}
                      className="p-1.5 text-neutral-500 hover:text-white bg-white/5 border border-white/10 rounded-lg cursor-pointer transition-colors focus:outline-none"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Navigation Milestones */}
                  <div className="space-y-4">
                    {demoCaptions.map((cap, idx) => (
                      <div
                        key={idx}
                        onClick={() => setDemoStep(idx)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer text-left ${
                          demoStep === idx
                            ? "bg-white text-black border-white shadow-md"
                            : "bg-transparent border-transparent hover:bg-white/5 text-neutral-400 hover:text-white"
                        }`}
                      >
                        <h5 className="text-xs font-bold leading-none mb-1">{cap.title}</h5>
                        <p className="text-[10px] leading-relaxed opacity-80">{cap.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsDemoOpen(false);
                    setTimeout(() => handleScrollTo("waitlist"), 300);
                  }}
                  className="mt-6 w-full py-3 bg-white text-black font-mono font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-neutral-100 cursor-pointer text-center"
                >
                  Skip and join waitlist
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>



    </div>
  );
}
