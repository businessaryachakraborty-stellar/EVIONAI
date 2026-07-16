import { useState } from "react";
import { motion } from "motion/react";
import { Check, ShieldAlert, Sparkles, Building2, HelpCircle } from "lucide-react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? "199" : "299",
      period: "month",
      desc: "Perfect for secondary year students building their first portfolios and resumes.",
      features: [
        "Interactive ATS Resume Builder",
        "3 AI Mock Interview rounds / mo",
        "Standard placement test portal",
        "Personalized digital portfolio website",
        "Basic email support support",
      ],
      cta: "Join Waitlist",
      isPopular: false,
      color: "border-neutral-200",
    },
    {
      name: "Pro Professional",
      price: isYearly ? "549" : "799",
      period: "month",
      desc: "For final year campus placement aspirants requiring extensive interview prep.",
      features: [
        "Everything in Starter plan",
        "Unlimited AI Mock interviews",
        "Real-time Eye Contact & Emotion tracking",
        "Full technical DSA live coding drills",
        "Auto job recommendations & tracker",
        "Private WhatsApp expert group",
        "Priority 24/7 tech support",
      ],
      cta: "Join Pro Waitlist",
      isPopular: true,
      color: "border-black shadow-lg shadow-accent/5",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "college",
      desc: "For colleges and university placement departments aiming to skyrocket stats.",
      features: [
        "Everything in Pro Professional",
        "White-labeled student directories",
        "Admin control dashboards",
        "Direct recruiter portal access",
        "Custom bulk interview reports",
        "Dedicated placement officer panel",
        "Integration with college LMS",
      ],
      cta: "Contact Sales",
      isPopular: false,
      color: "border-neutral-200",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white border-b border-neutral-200/50">
      <div className="w-[92%] max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent mb-3 block">
            AFFORDABLE LUXURY PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
            Invest in your future. <br />
            Skip the high-cost bootcamps.
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
            Choose a plan that fits your campus career track. No hidden charges. Change or cancel anytime after we launch.
          </p>

          {/* Toggle Monthly/Yearly */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-bold uppercase tracking-wider ${!isYearly ? "text-black" : "text-neutral-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 rounded-full bg-neutral-200 p-1 relative transition-colors focus:outline-none"
            >
              <div className={`w-4 h-4 bg-black rounded-full transition-all duration-300 ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
            </button>
            <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isYearly ? "text-black" : "text-neutral-400"}`}>
              Yearly
              <span className="text-[9px] font-mono font-bold bg-[#19C37D]/15 text-[#19C37D] px-1.5 py-0.5 rounded uppercase">
                Save 30%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular 
                  ? "border-accent/40 bg-white/70 ring-4 ring-accent/5 shadow-xl lg:scale-[1.03]" 
                  : "glass-card-hover border-white/40 bg-white/35"
              }`}
            >
              {/* Highlight badge for Pro plan */}
              {plan.isPopular && (
                <div className="absolute top-0 right-1/2 translate-y-[-50%] translate-x-[50%] bg-black text-white text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow border border-white/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent animate-pulse" />
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed min-h-[40px]">
                    {plan.desc}
                  </p>
                </div>

                {/* Plan Price */}
                <div className="flex items-baseline mb-6 border-b border-neutral-100 pb-6">
                  {plan.price !== "Custom" && (
                    <span className="text-4xl font-extrabold text-black font-mono tracking-tighter">
                      ₹{plan.price}
                    </span>
                  )}
                  {plan.price === "Custom" && (
                    <span className="text-3xl font-extrabold text-black tracking-tight">
                      Enterprise
                    </span>
                  )}
                  <span className="text-xs font-mono font-bold text-neutral-400 uppercase ml-2 tracking-wider">
                    / {plan.period}
                  </span>
                </div>

                {/* Checklist */}
                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#19C37D]" />
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  const el = document.getElementById("waitlist");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-full py-3.5 rounded-xl text-xs font-mono font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-sm active:scale-98 ${
                  plan.isPopular
                    ? "bg-black text-white hover:bg-neutral-900"
                    : "bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border border-neutral-200"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
