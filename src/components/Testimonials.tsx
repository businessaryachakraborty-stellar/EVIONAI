import { motion } from "motion/react";
import { Testimonial } from "../types";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const row1: Testimonial[] = [
    {
      id: "t1",
      name: "Rohan Chatterjee",
      college: "Jadavpur University",
      role: "Software Engineer",
      placedAt: "Stripe",
      salaryText: "₹28 LPA CTC",
      avatar: "RC",
      text: "The AI Mock Interview was surreal. It asked custom questions on idempotency keys that perfectly matched my actual Stripe interview. The ATS resume score was 100% accurate.",
    },
    {
      id: "t2",
      name: "Sneha Iyer",
      college: "VIT Vellore",
      role: "Frontend Specialist",
      placedAt: "Vercel",
      salaryText: "₹24 LPA CTC",
      avatar: "SI",
      text: "I built my developer portfolio in 3 clicks using Evion. recruiters were blown away by the customized performance scores. It got me shortlisted over hundreds of other applicants.",
    },
    {
      id: "t3",
      name: "Arya Sharma",
      college: "IIT Kharagpur",
      role: "Systems Engineer",
      placedAt: "Arcesium",
      salaryText: "₹34 LPA CTC",
      avatar: "AS",
      text: "Traditional placement cell mentorship is practically non-existent. Evion gave me hourly analytical feedback on my technical DSA coding answers. Absolutely world-class product.",
    },
  ];

  const row2: Testimonial[] = [
    {
      id: "t4",
      name: "Vikram Malhotra",
      college: "SRM University",
      role: "Backend Dev",
      placedAt: "Oracle",
      salaryText: "₹18 LPA CTC",
      avatar: "VM",
      text: "I had terrible interview anxiety and stammered. Emma (the AI interviewer) let me practice HR rounds 40+ times. By campus placement day, I was completely calm and confident.",
    },
    {
      id: "t5",
      name: "Ananya Deshmukh",
      college: "NIT Surathkal",
      role: "SDE-1",
      placedAt: "Atlassian",
      salaryText: "₹30 LPA CTC",
      avatar: "AD",
      text: "The ATS Resume scanner caught 6 critical formatting bugs that would have got my file rejected. Re-built my resume using Evion and landed an immediate off-campus call.",
    },
    {
      id: "t6",
      name: "Kabir Mehra",
      college: "Heritage Institute",
      role: "Cloud Engineer",
      placedAt: "Inmobi",
      salaryText: "₹14 LPA CTC",
      avatar: "KM",
      text: "Being from a tier-3 college makes off-campus job hunting exceptionally hard. The Job Tracker matched my profile, suggested keywords to change, and we scored the offer in 2 weeks.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#FAFAFA] border-b border-neutral-200/50 overflow-hidden relative">
      
      {/* Background soft ambient dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-[92%] max-w-6xl mx-auto mb-16">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
          REAL CAMPUS SUCCESS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black">
          Why India's top engineers love Evion.
        </h2>
      </div>

      {/* Testimonials horizontal scrolling rows */}
      <div className="space-y-8 relative">
        {/* Row 1: Leftward panning */}
        <div className="flex overflow-hidden w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Scrolling tape */}
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap" style={{ animationDuration: "35s" }}>
            {[...row1, ...row1, ...row1].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[380px] sm:w-[420px] flex-shrink-0 glass-card glass-card-hover rounded-2xl p-6 select-none whitespace-normal border-white/40 bg-white/35"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black">{testimonial.name}</h4>
                      <p className="text-[11px] text-neutral-400 font-medium">{testimonial.college}</p>
                    </div>
                  </div>
                  
                  {testimonial.placedAt && (
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">
                        Placed at {testimonial.placedAt}
                      </span>
                      <span className="block text-[10px] text-neutral-400 font-mono mt-0.5">
                        {testimonial.salaryText}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward panning */}
        <div className="flex overflow-hidden w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Scrolling tape reverse */}
          <div className="animate-marquee flex items-center gap-6 whitespace-nowrap" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
            {[...row2, ...row2, ...row2].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="w-[380px] sm:w-[420px] flex-shrink-0 glass-card glass-card-hover rounded-2xl p-6 select-none whitespace-normal border-white/40 bg-white/35"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-900 text-white font-bold flex items-center justify-center text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black">{testimonial.name}</h4>
                      <p className="text-[11px] text-neutral-400 font-medium">{testimonial.college}</p>
                    </div>
                  </div>

                  {testimonial.placedAt && (
                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded">
                        Placed at {testimonial.placedAt}
                      </span>
                      <span className="block text-[10px] text-neutral-400 font-mono mt-0.5">
                        {testimonial.salaryText}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
