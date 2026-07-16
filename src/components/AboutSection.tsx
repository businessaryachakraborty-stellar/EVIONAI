import { useState } from "react";
import { motion } from "motion/react";
import { TimelineMilestone } from "../types";
import { Sparkles, Calendar, Layers, Send, TrendingUp, Users } from "lucide-react";

export default function AboutSection() {
  const milestones: TimelineMilestone[] = [
    {
      year: "Q1 2026",
      title: "The Idea & Engine Design",
      description: "Assembled an elite product team to engineer India's first fully real-time responsive ATS scanning and interactive mock interview rendering engines.",
      status: "completed",
    },
    {
      year: "Q2 2026",
      title: "Private Beta Release",
      description: "Deployed sandbox testing to 2,500+ placement aspirants across top NITs and VIT. Initial ATS matching scores rose by an average of 42%.",
      status: "active",
    },
    {
      year: "Q3 2026",
      title: "Nationwide Launch",
      description: "Opening premium services to all tier-1, tier-2, and tier-3 colleges. Expanding mock interview channels to include specialized fintech & FAANG tracks.",
      status: "upcoming",
    },
    {
      year: "Q4 2026",
      title: "1 Million Students",
      description: "Empowering 1 million engineers with custom AI portfolio websites and automated copilot reviews to bridge the corporate-academic divide.",
      status: "upcoming",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAFAFA] border-b border-neutral-200/50 relative overflow-hidden">
      
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Editorial Vision Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          
          <div className="lg:col-span-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
              OUR MISSION & PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Built for the Next Generation of Engineers.
            </h2>
          </div>

          <div className="lg:col-span-6 text-neutral-600 space-y-4">
            <p className="text-base sm:text-lg leading-relaxed">
              We believe placement preparation should not be a luxury reserved for candidates with high-cost personal mentors. Our mission is to democratize career readies for every student in India — whether they study in Tier-1 metros or Tier-3 regional colleges.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              By packaging state-of-the-art LLMs, real-time speech analytics, and ATS compliance parsers into a unified, beautiful product experience, Evion AI acts as an indefatigable, private, 24/7 placement mentor.
            </p>
          </div>

        </div>

        {/* Roadmap Title */}
        <div className="mb-10 flex items-center justify-between border-b border-neutral-200/50 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
            Roadmap 2026
          </span>
          <span className="text-xs text-neutral-500 font-medium">
            Click milestones to inspect milestones
          </span>
        </div>

        {/* Timeline Widget */}
        <div className="relative">
          {/* Main timeline axis track */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-neutral-200/70 -translate-y-1/2 hidden md:block" />

          {/* Active track progress bar */}
          <div 
            className="absolute top-1/2 left-0 h-[2px] bg-black -translate-y-1/2 hidden md:block transition-all duration-700" 
            style={{ width: `${(activeIndex / (milestones.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {milestones.map((milestone, idx) => {
              const isCompleted = milestone.status === "completed";
              const isActive = milestone.status === "active";
              const isCurrentSelected = idx === activeIndex;

              return (
                <div 
                  key={idx} 
                  className="cursor-pointer group"
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    
                    {/* Node Pin Indicator */}
                    <div className="mb-6 relative flex items-center justify-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCurrentSelected 
                          ? "bg-black text-white ring-4 ring-black/10 scale-110" 
                          : isCompleted 
                            ? "bg-neutral-900 text-white" 
                            : isActive 
                              ? "bg-white border-2 border-accent text-accent ring-4 ring-accent/15" 
                              : "bg-white border border-neutral-300 text-neutral-400"
                      }`}>
                        {idx + 1}
                      </div>

                      {/* Glowing Ring on Selected or Active Nodes */}
                      {(isCurrentSelected || isActive) && (
                        <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-25" />
                      )}
                    </div>

                    {/* Timeline card body */}
                    <div className={`transition-all duration-300 rounded-2xl p-5 border w-full ${
                      isCurrentSelected 
                        ? "glass-card bg-white/70 border-accent/40 shadow-xl translate-y-[-4px]" 
                        : "glass-card border-white/40 hover:border-neutral-300/60 bg-white/35"
                    }`}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-mono text-[10px] font-extrabold text-accent uppercase tracking-wider">
                          {milestone.year}
                        </span>
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          isCompleted 
                            ? "bg-neutral-100 text-neutral-500" 
                            : isActive 
                              ? "bg-accent/10 text-accent" 
                              : "bg-neutral-100 text-neutral-400"
                        }`}>
                          {milestone.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <h4 className="text-base font-bold text-black tracking-tight mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
