import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, FileDown, Trash2, ShieldCheck, Database, Calendar, Users } from "lucide-react";

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WaitlistEntry {
  name: string;
  email: string;
  phone: string;
  college: string;
  branch: string;
  year: string;
  preferredRole: string;
  timestamp: string;
}

export default function AdminDashboard({ isOpen, onClose }: AdminDashboardProps) {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist/admin");
      if (res.ok) {
        const data = await res.json();
        setEntries(data);
      }
    } catch (e) {
      console.error("Error fetching waitlist admin listings", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchEntries();
    }
  }, [isOpen]);

  const filteredEntries = entries.filter(
    (entry) =>
      entry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.branch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 select-none">
          
          <motion.div
            className="relative w-full max-w-5xl bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden flex flex-col h-[85vh]"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Admin Header */}
            <div className="flex items-center justify-between border-b border-neutral-200/60 p-6 bg-neutral-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black flex items-center gap-1.5">
                    Evion Waitlist Central
                    <span className="text-[10px] font-mono font-bold bg-accent/15 text-accent px-1.5 py-0.5 rounded">
                      ADMIN PRIVILEGES
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Real-time registered candidates database log.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/api/waitlist/admin/export"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-black hover:bg-neutral-900 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl cursor-pointer shadow transition-colors"
                >
                  <FileDown className="w-4 h-4" /> Export CSV
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-neutral-400 hover:text-black hover:bg-neutral-200/50 rounded-lg cursor-pointer transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-neutral-100 p-6 bg-white">
              <div className="border border-neutral-200/60 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">Total Submissions</span>
                  <span className="text-2xl font-extrabold text-black font-mono">{entries.length}</span>
                </div>
                <Users className="w-8 h-8 text-neutral-300" />
              </div>
              <div className="border border-neutral-200/60 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">Campaign Base Stats</span>
                  <span className="text-2xl font-extrabold text-black font-mono">15,237</span>
                </div>
                <ShieldCheck className="w-8 h-8 text-[#19C37D]" />
              </div>
              <div className="border border-neutral-200/60 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">Live Campaign Total</span>
                  <span className="text-2xl font-extrabold text-black font-mono">{15237 + entries.length}</span>
                </div>
                <Calendar className="w-8 h-8 text-accent" />
              </div>
            </div>

            {/* Sub-header Filter bar */}
            <div className="p-6 bg-white border-b border-neutral-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Filter name, email, college..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200/80 rounded-xl pl-9 pr-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <button
                onClick={fetchEntries}
                className="text-xs font-mono font-bold uppercase text-neutral-400 hover:text-black flex items-center gap-1 focus:outline-none"
              >
                Sync Database Logs
              </button>
            </div>

            {/* Main Log Table */}
            <div className="flex-1 overflow-auto bg-white p-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-48">
                  <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mb-3" />
                  <span className="text-xs font-semibold text-neutral-400">Querying entries logs...</span>
                </div>
              ) : filteredEntries.length === 0 ? (
                <div className="text-center py-16">
                  <span className="text-3xl">🗃️</span>
                  <p className="text-sm font-bold text-neutral-700 mt-2">No waitlist logs detected</p>
                  <p className="text-xs text-neutral-400">Newly submitted signups will stream here automatically.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-200 text-neutral-400 font-mono uppercase tracking-widest pb-3">
                        <th className="py-3 font-semibold">Candidate Name</th>
                        <th className="py-3 font-semibold">Email</th>
                        <th className="py-3 font-semibold">Phone</th>
                        <th className="py-3 font-semibold">Institute & Branch</th>
                        <th className="py-3 font-semibold">Grad Target</th>
                        <th className="py-3 font-semibold">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredEntries.map((entry, idx) => (
                        <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                          <td className="py-3.5 font-bold text-black">{entry.name}</td>
                          <td className="py-3.5 font-mono text-neutral-600">{entry.email}</td>
                          <td className="py-3.5 font-mono text-neutral-600">{entry.phone}</td>
                          <td className="py-3.5">
                            <span className="font-semibold text-black block">{entry.college}</span>
                            <span className="text-neutral-400 text-[10px]">{entry.branch}</span>
                          </td>
                          <td className="py-3.5">
                            <span className="font-semibold text-neutral-700 block">{entry.year}</span>
                            <span className="text-[10px] text-accent font-mono font-bold uppercase">{entry.preferredRole}</span>
                          </td>
                          <td className="py-3.5 font-mono text-neutral-400 text-[10px]">
                            {new Date(entry.timestamp).toLocaleString("en-IN")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Admin Footer */}
            <div className="border-t border-neutral-200/60 p-4 bg-neutral-50 text-center text-[10px] font-mono text-neutral-400 flex justify-between px-6">
              <span>POWERED BY EMULATED JSON PERSISTENCE ENGINE v1.2</span>
              <span>CONFIDENTIAL - SYSTEM INTERNAL DEPLOYMENT</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
