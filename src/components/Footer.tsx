import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Send, Star, Compass, Heart } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#FAFFAF]/0 border-t border-neutral-200/50 pt-16 pb-12 bg-white relative overflow-hidden select-none">
      
      <div className="w-[92%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-200/50">
        
        {/* Left Side Branding */}
        <div className="md:col-span-5 flex flex-col justify-between items-start space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-extrabold text-sm tracking-tighter">
                EV
              </div>
              <span className="font-sans font-extrabold text-black tracking-tight text-lg">
                EVION<span className="text-accent">.AI</span>
              </span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
              India's first AI-powered campus placement copilot companion. Helping engineering students bridge the academic gap and secure elite software roles.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono flex items-center gap-1">
            <span>© 2026 EVION AI Inc.</span>
            <span>● Handcrafted in Bengaluru</span>
          </div>
        </div>

        {/* Right Side Links Grid */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          
          {/* Links Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#about" className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors">About Mission</a>
              <a href="#features" className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors">Platform Features</a>
              <a href="#pricing" className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors">Pricing Options</a>
              <a href="#faq" className="text-sm font-semibold text-neutral-500 hover:text-black transition-colors">Common FAQ</a>
            </div>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              Legal Info
            </h4>
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-semibold text-neutral-400 hover:text-neutral-500 cursor-default">Privacy Policy</span>
              <span className="text-sm font-semibold text-neutral-400 hover:text-neutral-500 cursor-default">Terms of Use</span>
              <span className="text-sm font-semibold text-neutral-400 hover:text-neutral-500 cursor-default">Security Audits</span>
              <span className="text-sm font-semibold text-neutral-400 hover:text-neutral-500 cursor-default">Status: Online</span>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-3 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">
              Weekly Digest
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed mb-2">
              Subscribe to receive weekly DSA insights, coding tips, and interview checklists.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="name@nitk.edu"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl pl-3 pr-10 py-2.5 text-xs font-semibold focus:outline-none focus:border-black transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-1.5 bg-black hover:bg-neutral-900 text-white rounded-lg cursor-pointer transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="text-xs font-semibold text-emerald-600 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                <span>Subscribed successfully!</span>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Crafted credit footer bar */}
      <div className="w-[92%] max-w-6xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-400 font-mono gap-4">
        <div className="flex items-center gap-1.5">
          <span>Engineered by</span>
          <span className="font-sans font-bold text-black flex items-center gap-1">
            EVION AI Team
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </span>
        </div>
        <div>
          <span>India’s First AI Powered Career Companion. Placement ready, guaranteed.</span>
        </div>
      </div>

    </footer>
  );
}
