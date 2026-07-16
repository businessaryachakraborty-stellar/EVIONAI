import { motion } from "motion/react";

export default function TrustMarquee() {
  const colleges = [
    { name: "IIT Bombay", code: "IIT-B" },
    { name: "IIT Kharagpur", code: "IIT-KGP" },
    { name: "IIT Madras", code: "IIT-M" },
    { name: "NIT Trichy", code: "NIT-T" },
    { name: "NIT Surathkal", code: "NIT-K" },
    { name: "IIIT Allahabad", code: "IIIT-A" },
    { name: "VIT Vellore", code: "VIT" },
    { name: "SRM University", code: "SRM" },
    { name: "Jadavpur University", code: "JU" },
    { name: "KIIT Bhubaneswar", code: "KIIT" },
    { name: "Heritage Institute", code: "HIT" },
    { name: "Techno India", code: "TISL" },
    { name: "IIIT Hyderabad", code: "IIIT-H" },
  ];

  // Double the list to ensure seamless endless looping
  const marqueeItems = [...colleges, ...colleges, ...colleges];

  return (
    <div className="py-10 bg-white border-y border-neutral-200/50 overflow-hidden relative select-none">
      <div className="max-w-6xl mx-auto px-6 mb-3 flex items-center justify-between">
        <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
          Empowering Engineers Nationwide
        </span>
        <span className="text-[11px] font-mono text-neutral-400">
          ● 15,000+ Students Waiting
        </span>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden w-full relative">
        {/* Left/Right Fading Overlays to achieve that premium studio finish */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Endless tape */}
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
          {marqueeItems.map((college, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-50 rounded-lg transition-colors cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-sm font-semibold text-neutral-600 font-sans tracking-tight">
                {college.name}
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                {college.code}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
