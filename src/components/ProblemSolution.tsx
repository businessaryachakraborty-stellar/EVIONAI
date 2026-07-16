import { motion } from "motion/react";
import { XCircle, CheckCircle, AlertCircle, ArrowUpRight, Award, Zap } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Broken ATS Resumes",
      desc: "Seniors pass down outdated MS Word templates that fail modern applicant tracking systems instantly.",
    },
    {
      title: "Interview Stage Anxiety",
      desc: "Live interviews with real experts are expensive and hard to arrange, leaving students with zero practice.",
    },
    {
      title: "Blind Preparation Path",
      desc: "Aptitude, tech questions, and portfolio development are treated separately. No unified dashboard exists.",
    },
  ];

  const solutions = [
    {
      title: "Real-time ATS Builder",
      desc: "Evion scans and compiles elegant portfolios and resume code that score 95+ against modern job portals.",
    },
    {
      title: "Ultra Realistic AI Mock Round",
      desc: "Our interactive 3D virtual interviewer mimics face-to-face evaluation with emotion and lip-sync analysis.",
    },
    {
      title: "Adaptive Guided Journey",
      desc: "An integrated horizontal path that tracks every placement step, from your first diagnostic test to offer letter.",
    },
  ];

  return (
    <section id="problem-solution" className="py-20 md:py-32 bg-white relative overflow-hidden border-b border-neutral-200/50">
      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
            Why We Re-engineered Career Readying
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            Placements are evolving. <br className="hidden sm:inline" />
            Preparing for them shouldn't be archaic.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            College placement departments are overwhelmed, training centers charge exorbitant fees, and students rely on blind luck. Evion AI is India's first complete system engineered to make you bulletproof.
          </p>
        </div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Problem Block */}
          <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200/40 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FF4D4F] bg-red-50 px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                The Problem
              </div>
              <h3 className="text-2xl font-extrabold text-black mb-6 tracking-tight">
                Why 80% of engineers fail to land initial offers
              </h3>
              
              <div className="space-y-8">
                {problems.map((prob, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <XCircle className="w-5 h-5 text-[#FF4D4F]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-black mb-1">
                        {prob.title}
                      </h4>
                      <p className="text-sm text-neutral-500 leading-relaxed">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-neutral-400">
              <span>OUTDATED SYLLABUS SYSTEM</span>
              <span>EST. LOSS: ₹4.2L/YEAR</span>
            </div>
          </div>

          {/* Solution Block */}
          <div className="bg-black text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Soft background light */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[70px] pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#19C37D] bg-white/10 px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
                The Evion Solution
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight">
                Hyper-personalized career co-piloting
              </h3>

              <div className="space-y-8">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#19C37D]" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                        {sol.title}
                        {idx === 1 && (
                          <span className="text-[9px] font-mono font-bold text-accent bg-accent/15 px-1 py-0.5 rounded">
                            Exclusive
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {sol.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-neutral-400">
              <span>95% ATS SUCCESS RATE</span>
              <button 
                onClick={() => {
                  const el = document.getElementById("waitlist");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white hover:text-accent font-semibold flex items-center gap-1 cursor-pointer transition-colors"
              >
                Join Waitlist <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
