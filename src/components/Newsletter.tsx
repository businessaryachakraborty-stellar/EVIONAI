import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Check, Mail, AlertCircle, Sparkles } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (emailStr: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setStatus("error");
      setMessage("Please provide a valid email address (e.g. name@domain.com).");
      return;
    }

    // Simulate API call and transition to success state
    setStatus("success");
    setMessage("Thank you! You have successfully subscribed to our newsletter.");
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 relative overflow-hidden bg-transparent select-none">
      {/* Background soft ambient radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-[92%] max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-[28px] border border-white/60 p-8 sm:p-12 relative overflow-hidden bg-white/65 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side text copy */}
            <div className="lg:col-span-6 space-y-3.5">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black leading-tight">
                Unlock Elite Coding News & Placement Alerts
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
                Get hand-curated DSA templates, interview insights, and off-campus opportunity trackers delivered straight to your inbox. No spam, ever.
              </p>
            </div>

            {/* Right side form */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {status !== "success" ? (
                  <motion.form
                    key="newsletter-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-3"
                    noValidate
                  >
                    <div className="relative flex items-center">
                      <div className="absolute left-4 text-neutral-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="Enter your email (e.g. name@college.edu)"
                        className="w-full bg-white/90 border border-neutral-200 focus:border-black rounded-2xl pl-11 pr-32 py-3.5 text-xs font-semibold focus:outline-none transition-all shadow-[0_4px_12px_rgba(0,0,0,0.02)] placeholder:text-neutral-400"
                      />
                      <button
                        type="submit"
                        className="absolute right-1.5 px-5 py-2 bg-black hover:bg-neutral-900 text-white font-bold text-xs rounded-xl transition-all duration-150 active:scale-95 cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Subscribe</span>
                        <Send className="w-3 h-3" />
                      </button>
                    </div>

                    <AnimatePresence>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          className="flex items-center gap-1.5 text-[11px] font-medium text-red-600 bg-red-50/80 border border-red-100 px-3.5 py-2 rounded-xl"
                        >
                          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{message}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.form>
                ) : (
                  <motion.div
                    key="newsletter-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50/80 border border-emerald-100 p-6 rounded-2xl flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-emerald-900">Welcome to Evion.AI Inner Circle!</h4>
                      <p className="text-[11px] font-medium text-emerald-700/90 leading-relaxed">
                        {message} Check your inbox soon for your exclusive first placement cheat sheet.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="text-[10px] text-emerald-800 hover:underline font-bold pt-1.5 block"
                      >
                        Subscribe another email
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
