import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, CheckCircle2, AlertCircle, RefreshCw, Star } from "lucide-react";
import { WaitlistFormInput } from "../types";

export default function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormInput>({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    year: "Final Year (2027)",
    preferredRole: "Software Development Engineer (SDE)",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [stats, setStats] = useState({ baseCount: 15237, realCount: 0, totalCount: 15237 });

  // Confetti Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);

  // Fetch real-time count stats on load
  const fetchStats = async () => {
    try {
      const res = await fetch("/api/waitlist/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) {
      console.warn("Could not fetch real-time waitlist stats, falling back to static", e);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [isSubmitted]);

  // Canvas Confetti Implementation
  const startConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      r: number;
      d: number;
      color: string;
      tilt: number;
      tiltAngleIncremental: number;
      tiltAngle: number;
    }

    const colors = ["#4F7EFF", "#19C37D", "#FF4D4F", "#FFD700", "#FF4500", "#9370DB"];
    const particles: Particle[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0,
    }));

    let animationTime = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationTime++;

      particles.forEach((p, idx) => {
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tiltAngle += p.tiltAngleIncremental;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();

        // Recycle particles
        if (p.y > canvas.height) {
          particles[idx] = {
            x: Math.random() * canvas.width,
            y: -20,
            r: p.r,
            d: p.d,
            color: p.color,
            tilt: p.tilt,
            tiltAngleIncremental: p.tiltAngleIncremental,
            tiltAngle: p.tiltAngle,
          };
        }
      });

      if (animationTime < 240) {
        animationFrameId.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    draw();
  };

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.college || !formData.branch) {
      setErrorMessage("Please fill out all personal and college fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || "Something went wrong. Please check your details.");
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      setIsLoading(false);
      // Trigger canvas confetti explosion
      setTimeout(() => {
        startConfetti();
      }, 100);
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-white border-b border-neutral-200/50 relative overflow-hidden">
      
      {/* Background spot radial light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Confetti canvas element */}
      <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />

      <div className="w-[92%] max-w-4xl mx-auto relative z-10">
        
        {/* Card envelope */}
        <div className="glass-panel rounded-[40px] p-8 sm:p-14 relative overflow-hidden shadow-2xl border-white/50 bg-white/60">
          
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight mb-5">
              Be Among The First Engineers To Experience AI Powered Placements.
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-xl mx-auto">
              Join the official waitlist. Get early sandbox invites, custom profile review credits, and exclusive lifetime pricing options.
            </p>

            <div className="inline-flex items-center gap-2 mt-6 bg-white border border-neutral-200 px-4 py-2 rounded-full shadow-sm text-xs font-bold text-neutral-600">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse" />
              <span>Already {stats.totalCount.toLocaleString()} students joined the companion beta.</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="waitlist-form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Error message */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-[#FF4D4F] rounded-2xl p-4 text-xs font-bold flex items-center gap-2">
                    <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Candidate Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Aryaman Sen"
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Academic / Personal Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. aryaman@nitk.edu.in"
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      WhatsApp Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                      required
                    />
                  </div>

                  {/* College field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Engineering College / Institute
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="e.g. NIT Surathkal"
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                      required
                    />
                  </div>

                  {/* Branch field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Branch / Stream of Study
                    </label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      placeholder="e.g. Computer Science (CSE)"
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                      required
                    />
                  </div>

                  {/* Year field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Current Academic Year
                    </label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                    >
                      <option>Freshman Year (2030)</option>
                      <option>Sophomore Year (2029)</option>
                      <option>Junior Year (2028)</option>
                      <option>Final Year (2027)</option>
                      <option>Immediate Fresher / Alumni</option>
                    </select>
                  </div>

                  {/* Role field */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                      Target Placement Role
                    </label>
                    <select
                      name="preferredRole"
                      value={formData.preferredRole}
                      onChange={handleChange}
                      className="w-full glass-input rounded-xl px-4 py-3.5 text-sm font-semibold text-black focus:outline-none transition-all shadow-inner border-white/40 bg-white/30"
                    >
                      <option>Software Development Engineer (SDE)</option>
                      <option>Frontend / UI Engineer</option>
                      <option>Backend / Systems Specialist</option>
                      <option>Data Analyst / AI Specialist</option>
                      <option>Product Manager / Business Analyst</option>
                    </select>
                  </div>

                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-black hover:bg-neutral-900 text-white rounded-2xl text-sm font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-98 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                        Verifying details...
                      </>
                    ) : (
                      <>
                        <Send className="w-4.5 h-4.5" />
                        Join Elite Waitlist Now
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="waitlist-success"
                className="text-center py-8 max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-[#19C37D]" />
                </div>
                <h3 className="text-2xl font-extrabold text-black mb-3">You’re on the waitlist!</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                  Thank you for registering, <span className="font-bold text-black">{formData.name}</span>. We sent a welcome baseline confirmation packet to <span className="font-bold text-black">{formData.email}</span>.
                </p>

                <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 text-left shadow-sm space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">Waitlist Rank:</span>
                    <span className="font-bold text-black">#{stats.totalCount + 1}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">Early Access Slot:</span>
                    <span className="font-bold text-accent">Group Beta-2</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-neutral-500">Free Profile Review:</span>
                    <span className="font-bold text-emerald-500">Pre-Approved</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-black cursor-pointer transition-colors"
                >
                  Register another candidate
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
