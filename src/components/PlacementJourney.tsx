import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, FileText, Video, Brain, Laptop, Briefcase, GraduationCap, ChevronRight 
} from "lucide-react";

export default function PlacementJourney() {
  const nodes = [
    {
      id: "student",
      label: "Student",
      title: "1. Diagnostic Baseline",
      desc: "Connect your current GitHub, LinkedIn, or college CGPA. We analyze your core strengths and baseline skills to map out a custom syllabus path.",
      icon: <User className="w-5 h-5" />,
      color: "bg-neutral-900 text-white",
      borderColor: "border-neutral-900",
      accentColor: "#000000",
    },
    {
      id: "resume",
      label: "ATS Resume",
      title: "2. Resume Structuring",
      desc: "Compile an ATS-proof resume in standard JSON schema. Evion re-words your engineering project bullet points to match the language top recruiters expect.",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-accent text-white",
      borderColor: "border-accent",
      accentColor: "#4F7EFF",
    },
    {
      id: "interview",
      label: "AI Mock",
      title: "3. Voice Interviewing",
      desc: "Practice endless SDE, Core Tech, and HR interview rounds. Get immediate scorecards detailing vocal hesitation, anxiety levels, and logical gaps.",
      icon: <Video className="w-5 h-5" />,
      color: "bg-emerald-500 text-white",
      borderColor: "border-emerald-500",
      accentColor: "#19C37D",
    },
    {
      id: "test",
      label: "Aptitude Prep",
      title: "4. Cognitive Drills",
      desc: "Take adaptive micro-quizzes on technical DSA, DBMS, and behavioral questions. The AI adjusts quiz difficulty based on your speed.",
      icon: <Brain className="w-5 h-5" />,
      color: "bg-purple-500 text-white",
      borderColor: "border-purple-500",
      accentColor: "#A855F7",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      title: "5. Digital Showcase",
      desc: "Your code repository and resume are compiled into a custom portfolio landing page. Host it on a premium sub-domain for easy sharing.",
      icon: <Laptop className="w-5 h-5" />,
      color: "bg-amber-500 text-white",
      borderColor: "border-amber-500",
      accentColor: "#F59E0B",
    },
    {
      id: "jobs",
      label: "Smart Jobs",
      title: "6. Matchmaking",
      desc: "Our engine tracks active campus off-campus pools and matches your profile against criteria, letting you apply with one unified click.",
      icon: <Briefcase className="w-5 h-5" />,
      color: "bg-rose-500 text-white",
      borderColor: "border-rose-500",
      accentColor: "#F43F5E",
    },
    {
      id: "offer",
      label: "Offer Letter",
      title: "7. Offer Polish",
      desc: "Unlock the final compensation negotiator. Review standard CTC breakdowns, stock vesting schedules, and sign with ultimate confidence.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "bg-indigo-600 text-white",
      borderColor: "border-indigo-600",
      accentColor: "#4F46E5",
    },
  ];

  const [activeNodeId, setActiveNodeId] = useState("student");
  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  return (
    <section id="journey" className="py-20 md:py-32 bg-white border-b border-neutral-200/50 overflow-hidden relative">
      
      {/* Visual top accent light */}
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
            PLACEMENT JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            From Day 1 to the Offer Letter.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            The traditional campus placement path is disjointed and confusing. Evion AI connects every checkpoint into a beautifully fluid horizontal pipeline. Click each stage to see how it works.
          </p>
        </div>

        {/* Nodes Timeline Track */}
        <div className="relative mb-16 select-none">
          {/* Timeline Axis connector line */}
          <div className="absolute top-1/2 left-4 right-4 h-1 bg-neutral-100 -translate-y-1/2 hidden md:block" />

          {/* Connected glow trace line */}
          <div 
            className="absolute top-1/2 left-4 h-1 bg-gradient-to-r from-neutral-900 to-accent -translate-y-1/2 hidden md:block transition-all duration-700"
            style={{ 
              width: `${(nodes.findIndex(n => n.id === activeNodeId) / (nodes.length - 1)) * 95}%` 
            }}
          />

          {/* Nodes array */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:justify-between items-center gap-6 relative z-10">
            {nodes.map((node, idx) => {
              const isActive = node.id === activeNodeId;
              return (
                <div 
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Circle Node */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? `${node.color} ring-4 ring-neutral-200 shadow-md scale-110` 
                      : "bg-white border-2 border-neutral-200 text-neutral-400 group-hover:border-neutral-400 group-hover:text-neutral-700"
                  }`}>
                    {node.icon}

                    {/* Animated pulse for current node */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full border-2 animate-ping opacity-20" style={{ borderColor: node.accentColor }} />
                    )}
                  </div>

                  {/* Label under node */}
                  <span className={`text-[11px] sm:text-xs font-bold mt-3 tracking-tight transition-colors ${
                    isActive ? "text-black" : "text-neutral-400 group-hover:text-neutral-700"
                  }`}>
                    {node.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card Display based on active node */}
        <div className="glass-card bg-white/40 rounded-[32px] p-8 min-h-[220px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-white/50">
          
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className={`w-3.5 h-3.5 rounded-full ${activeNode.color}`} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                Active Stage
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight">
              {activeNode.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
              {activeNode.desc}
            </p>
          </div>

          {/* Quick status report box */}
          <div className="glass-card bg-white/60 border-white/60 rounded-2xl p-5 shadow-sm w-full md:w-80">
            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
              Journey Analytics
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500 font-semibold">Estimated Duration</span>
                <span className="font-bold text-black">4-5 Days</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500 font-semibold">Diagnostic Target</span>
                <span className="font-bold text-accent">90+ Rating</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500 font-semibold">AI Assistant Co-pilot</span>
                <span className="font-bold text-emerald-500">Autonomous</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
