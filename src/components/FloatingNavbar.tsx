import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Menu, X, ArrowRight } from "lucide-react";
import CompanyLogo from "./CompanyLogo";

interface NavbarProps {
  onScrollTo: (elementId: string) => void;
  onOpenAdmin: () => void;
}

export default function FloatingNavbar({ onScrollTo, onOpenAdmin }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Waitlist", id: "waitlist" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          isScrolled ? "pt-3 sm:pt-4" : "pt-6"
        }`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`flex items-center justify-between w-[92%] max-w-5xl transition-all duration-500 border rounded-full px-5 sm:px-8 ${
            isScrolled
              ? "py-3 glass-panel border-white/50 shadow-md"
              : "py-4 bg-white/30 backdrop-blur-sm border-white/20"
          }`}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onScrollTo("hero")}
              className="group flex items-center gap-2 font-bold tracking-tight text-black text-lg focus:outline-none cursor-pointer"
            >
              <CompanyLogo size={28} className="transform group-hover:scale-105" />
              <span className="font-sans font-extrabold tracking-tight text-black select-none">
                EVION<span className="text-accent">.AI</span>
              </span>
            </button>
            <span
              onClick={onOpenAdmin}
              className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded hover:text-black cursor-pointer transition-colors"
            >
              Beta
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollTo(link.id)}
                className="text-sm font-medium text-neutral-600 hover:text-black cursor-pointer transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onScrollTo("waitlist")}
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 bg-black hover:bg-neutral-900 text-white rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 group"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onScrollTo("waitlist")}
              className="sm:hidden text-xs font-semibold bg-black text-white px-3.5 py-2 rounded-full cursor-pointer hover:bg-neutral-900 transition-colors"
            >
              Join Waitlist
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition-colors focus:outline-none cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Side Drawer Overlay and Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Darkened blur backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-out Sidebar Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 h-full w-[280px] sm:w-[320px] z-50 glass-panel border-l border-white/40 bg-white/95 backdrop-blur-xl shadow-2xl md:hidden flex flex-col p-6 justify-between"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
            >
              {/* Drawer Top */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
                  <div className="flex items-center gap-2 font-bold tracking-tight text-black text-base">
                    <CompanyLogo size={24} />
                    <span className="font-sans font-extrabold tracking-tight text-black select-none">
                      EVION<span className="text-accent">.AI</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-neutral-600 hover:text-black hover:bg-neutral-100 rounded-full transition-colors focus:outline-none cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Vertical Link Stack */}
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link, idx) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => onScrollTo(link.id), 300);
                      }}
                      className="text-left text-lg font-medium text-neutral-600 hover:text-black hover:translate-x-1 py-1.5 transition-all duration-200 border-b border-transparent hover:border-neutral-100 cursor-pointer"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Drawer Bottom CTA */}
              <div className="pt-6 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                    Beta Active
                  </span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTimeout(() => onScrollTo("waitlist"), 300);
                  }}
                  className="w-full py-3.5 bg-black hover:bg-neutral-900 text-white rounded-full font-bold text-sm transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
