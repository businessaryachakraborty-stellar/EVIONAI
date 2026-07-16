import React from "react";
import { motion } from "motion/react";
import { FileText, Laptop, Brain, Briefcase, Play, Sparkles } from "lucide-react";

export function FeaturesBentoSkeleton() {
  return (
    <section id="features-skeleton" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] ambient-glow-1 rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[600px] h-[600px] ambient-glow-2 rounded-full pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto relative z-10">
        {/* Section Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 animate-pulse" />
            <div className="h-3 w-28 bg-neutral-300/60 rounded animate-pulse" />
          </div>
          <div className="h-10 sm:h-12 w-3/4 bg-neutral-300/50 rounded-2xl mx-auto mb-6 animate-pulse" />
          <div className="h-4 w-5/6 bg-neutral-300/30 rounded mx-auto animate-pulse" />
        </div>

        {/* Bento Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Main 12-col Hero Card Skeleton */}
          <div className="lg:col-span-12 bg-[#0E1118]/85 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 border border-white/10 flex flex-col justify-between relative overflow-hidden min-h-[480px]">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-neutral-800/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 rounded-full border border-white/10">
                  <Play className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                  <div className="h-3 w-24 bg-neutral-600 rounded animate-pulse" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-neutral-500 animate-ping" />
                  <div className="h-3 w-16 bg-neutral-600 rounded animate-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="h-8 w-11/12 bg-neutral-700 rounded-lg animate-pulse" />
                  <div className="h-4 w-4/5 bg-neutral-700/60 rounded-md animate-pulse" />
                  <div className="h-4 w-3/4 bg-neutral-700/60 rounded-md animate-pulse" />
                </div>
                
                <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-700 animate-pulse" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3.5 w-1/3 bg-neutral-700 rounded animate-pulse" />
                      <div className="h-3 w-1/4 bg-neutral-700/60 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-neutral-700/50 rounded animate-pulse" />
                    <div className="h-3 w-5/6 bg-neutral-700/50 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-white/5">
              <div className="flex gap-2">
                <div className="h-8 w-24 bg-neutral-700 rounded-lg animate-pulse" />
                <div className="h-8 w-24 bg-neutral-700/40 rounded-lg animate-pulse" />
              </div>
              <div className="h-4 w-36 bg-neutral-700/30 rounded animate-pulse" />
            </div>
          </div>

          {/* 2. ATS Resume Checker - 6-col Card Skeleton */}
          <div className="lg:col-span-6 glass-card rounded-[32px] p-6 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
                <FileText className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                <div className="h-3 w-20 bg-neutral-300 rounded animate-pulse" />
              </div>
              <div className="h-6 w-3/4 bg-neutral-300/80 rounded-lg mb-3 animate-pulse" />
              <div className="h-4 w-5/6 bg-neutral-300/50 rounded mb-8 animate-pulse" />
            </div>

            <div className="glass-input border border-dashed border-neutral-300/60 rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-3 min-h-[160px]">
              <div className="w-12 h-12 rounded-full bg-neutral-200/60 flex items-center justify-center animate-pulse" />
              <div className="h-4 w-32 bg-neutral-300 rounded animate-pulse" />
              <div className="h-3 w-48 bg-neutral-300/60 rounded animate-pulse" />
            </div>
          </div>

          {/* 3. AI Portfolio Generator - 6-col Card Skeleton */}
          <div className="lg:col-span-6 glass-card rounded-[32px] p-6 sm:p-10 flex flex-col justify-between min-h-[420px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
                <Laptop className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                <div className="h-3 w-24 bg-neutral-300 rounded animate-pulse" />
              </div>
              <div className="h-6 w-4/5 bg-neutral-300/80 rounded-lg mb-3 animate-pulse" />
              <div className="h-4 w-5/6 bg-neutral-300/50 rounded mb-8 animate-pulse" />
            </div>

            <div className="glass-input rounded-2xl p-4 flex flex-col h-44 space-y-3 justify-between">
              <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
                <div className="flex gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80 animate-pulse" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80 animate-pulse" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80 animate-pulse" />
                </div>
                <div className="h-3.5 w-1/3 bg-neutral-200/70 rounded-full animate-pulse" />
              </div>
              <div className="space-y-2 flex-1 pt-2">
                <div className="h-4 w-1/2 bg-neutral-300/50 rounded animate-pulse" />
                <div className="h-3 w-5/6 bg-neutral-200/50 rounded animate-pulse" />
                <div className="h-3 w-4/5 bg-neutral-200/50 rounded animate-pulse" />
              </div>
              <div className="h-7 w-20 bg-neutral-300/70 rounded-lg self-end animate-pulse" />
            </div>
          </div>

          {/* 4. Adaptive Placement Test - 5-col Card Skeleton */}
          <div className="lg:col-span-5 glass-card rounded-[32px] p-6 sm:p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
                <Brain className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                <div className="h-3 w-28 bg-neutral-300 rounded animate-pulse" />
              </div>
              <div className="h-6 w-5/6 bg-neutral-300/80 rounded-lg mb-3 animate-pulse" />
              <div className="h-4 w-11/12 bg-neutral-300/50 rounded mb-8 animate-pulse" />
            </div>

            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-white/40 bg-white/20">
                  <div className="flex items-center gap-3 w-full">
                    <div className="w-6 h-6 rounded-md bg-neutral-200 animate-pulse" />
                    <div className="space-y-1.5 flex-1">
                      <div className="h-3 w-1/2 bg-neutral-300/70 rounded animate-pulse" />
                      <div className="h-2.5 w-1/3 bg-neutral-200/60 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Job Tracking AI - 7-col Card Skeleton */}
          <div className="lg:col-span-7 glass-card rounded-[32px] p-6 sm:p-10 flex flex-col justify-between min-h-[440px]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
                <Briefcase className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
                <div className="h-3 w-24 bg-neutral-300 rounded animate-pulse" />
              </div>
              <div className="h-6 w-4/5 bg-neutral-300/80 rounded-lg mb-3 animate-pulse" />
              <div className="h-4 w-5/6 bg-neutral-300/50 rounded mb-8 animate-pulse" />
            </div>

            <div className="glass-input rounded-2xl p-4 space-y-3 min-h-[190px]">
              <div className="flex justify-between items-center pb-2.5 border-b border-neutral-200/60">
                <div className="h-3.5 w-32 bg-neutral-300/60 rounded animate-pulse" />
                <div className="h-3 w-24 bg-neutral-200/60 rounded animate-pulse" />
              </div>
              <div className="space-y-2.5 pt-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between items-center bg-white/40 border border-white/50 p-2.5 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neutral-300 animate-pulse" />
                      <div className="h-3 w-24 bg-neutral-300/70 rounded animate-pulse" />
                    </div>
                    <div className="h-5 w-16 bg-neutral-200 rounded-full animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section id="testimonials-skeleton" className="py-20 sm:py-28 relative overflow-hidden bg-transparent">
      <div className="w-[92%] max-w-6xl mx-auto relative z-10">
        
        {/* Header Skeleton */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 glass-pill rounded-full border border-white/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
            <div className="h-3 w-20 bg-neutral-300 rounded animate-pulse" />
          </div>
          <div className="h-10 sm:h-12 w-2/3 bg-neutral-300/50 rounded-2xl mx-auto mb-6 animate-pulse" />
          <div className="h-4 w-4/5 bg-neutral-300/30 rounded mx-auto animate-pulse" />
        </div>

        {/* Carousel rows Skeleton */}
        <div className="flex flex-col gap-6 overflow-hidden select-none">
          {/* Row 1 */}
          <div className="flex gap-6 animate-none">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[380px] sm:w-[420px] flex-shrink-0 glass-card rounded-2xl p-6 border-white/40 bg-white/35 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 animate-pulse" />
                    <div className="space-y-1.5">
                      <div className="h-3.5 w-24 bg-neutral-300 rounded animate-pulse" />
                      <div className="h-2.5 w-16 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="h-4 w-12 bg-neutral-200 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-neutral-300/40 rounded animate-pulse" />
                  <div className="h-3 w-11/12 bg-neutral-300/40 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-neutral-300/40 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex gap-6 animate-none">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-[380px] sm:w-[420px] flex-shrink-0 glass-card rounded-2xl p-6 border-white/40 bg-white/35 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 animate-pulse" />
                    <div className="space-y-1.5">
                      <div className="h-3.5 w-24 bg-neutral-300 rounded animate-pulse" />
                      <div className="h-2.5 w-16 bg-neutral-200 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="h-4 w-12 bg-neutral-200 rounded-full animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-neutral-300/40 rounded animate-pulse" />
                  <div className="h-3 w-11/12 bg-neutral-300/40 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-neutral-300/40 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
