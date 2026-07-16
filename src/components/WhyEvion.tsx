import { motion } from "motion/react";
import { Sparkles, Video, BarChart3, GraduationCap, Compass, MessageSquareCode } from "lucide-react";

export default function WhyEvion() {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      title: "AI Powered Autopilot",
      desc: "An intelligent companion that learns your engineering branch, assesses your weaknesses, and automatically plans your daily preparation goals.",
      bg: "bg-white",
      span: "md:col-span-2",
    },
    {
      icon: <Video className="w-6 h-6 text-[#19C37D]" />,
      title: "Real Interview Simulator",
      desc: "Simulate pressure-filled technical rounds. Our simulator mimics professional face-to-face evaluation grids.",
      bg: "bg-white",
      span: "md:col-span-1",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-black" />,
      title: "Placement Analytics",
      desc: "Detailed predictive score charts mapped against real hiring trends of top software companies in India.",
      bg: "bg-white",
      span: "md:col-span-1",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-[#FF4D4F]" />,
      title: "Industry Expert Audits",
      desc: "Optionally escalate your preparation to verified tech leads from Stripe, Vercel, or Google for a final live human polish.",
      bg: "bg-white",
      span: "md:col-span-2",
    },
    {
      icon: <Compass className="w-6 h-6 text-indigo-500" />,
      title: "Continuous Guidance",
      desc: "Receive smart push updates with company openings matching your skill set and dynamic domain suggestions.",
      bg: "bg-white",
      span: "md:col-span-1",
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-amber-500" />,
      title: "Instant Code Feedback",
      desc: "Get line-by-line feedback on technical code writing and dynamic optimization tips as you practice mock challenges.",
      bg: "bg-white",
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="why-evion" className="py-20 md:py-32 bg-white border-b border-neutral-200/50">
      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
            HOW WE CHAPERONE SUCCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            Engineered like the world’s best products.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            We combined beautiful layout structures with high-density data visualization panels to make preparing for corporate campus hirings engaging, lightning-fast, and deeply insightful.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-8 glass-card glass-card-hover flex flex-col justify-between ${pillar.span}`}
            >
              {/* Card top half */}
              <div>
                <div className="w-12 h-12 rounded-2xl glass-pill flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>
                
                <h3 className="text-xl font-bold text-black tracking-tight mb-3">
                  {pillar.title}
                </h3>
              </div>

              {/* Card bottom half */}
              <p className="text-sm text-neutral-500 leading-relaxed mt-2 font-normal">
                {pillar.desc}
              </p>

              {/* Subtle bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
