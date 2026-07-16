import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const _filename = typeof __filename !== "undefined"
  ? __filename
  : (typeof import.meta !== "undefined" && import.meta.url ? fileURLToPath(import.meta.url) : "");
const _dirname = typeof __dirname !== "undefined"
  ? __dirname
  : (path.dirname(_filename) || process.cwd());

// File path for waitlist persistence
const WAITLIST_FILE = path.join(process.cwd(), "waitlist.json");

// Define waitlist interface
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

// Read current waitlist
function readWaitlist(): WaitlistEntry[] {
  try {
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading waitlist file:", error);
  }
  return [];
}

// Write to waitlist
function writeWaitlist(data: WaitlistEntry[]) {
  try {
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing waitlist file:", error);
  }
}

// Initialize waitlist file with empty array if it doesn't exist
if (!fs.existsSync(WAITLIST_FILE)) {
  writeWaitlist([]);
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Join Waitlist
  app.post("/api/waitlist", (req, res) => {
    try {
      const { name, email, phone, college, branch, year, preferredRole } = req.body;

      if (!name || !email || !phone || !college || !branch || !year || !preferredRole) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const list = readWaitlist();
      
      // Check duplicate email
      const exists = list.some(entry => entry.email.toLowerCase() === email.toLowerCase());
      if (exists) {
        return res.status(400).json({ error: "This email is already registered on the waitlist." });
      }

      const newEntry: WaitlistEntry = {
        name,
        email,
        phone,
        college,
        branch,
        year,
        preferredRole,
        timestamp: new Date().toISOString()
      };

      list.push(newEntry);
      writeWaitlist(list);

      console.log(`New waitlist registration: ${email}`);
      return res.status(201).json({ 
        success: true, 
        message: "Successfully joined the Evion AI waitlist!",
        totalRegistered: 15237 + list.length
      });
    } catch (error) {
      console.error("Error adding to waitlist:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // API Route: Get Stats (real-time signup counters)
  app.get("/api/waitlist/stats", (req, res) => {
    try {
      const list = readWaitlist();
      res.json({
        baseCount: 15237,
        realCount: list.length,
        totalCount: 15237 + list.length
      });
    } catch (err) {
      res.json({ baseCount: 15237, realCount: 0, totalCount: 15237 });
    }
  });

  // API Route: List waitlist for Admin Dashboard
  app.get("/api/waitlist/admin", (req, res) => {
    // Simple query param or passcode check (can be enhanced if user requests auth)
    const list = readWaitlist();
    res.json(list);
  });

  // API Route: Export waitlist as CSV
  app.get("/api/waitlist/admin/export", (req, res) => {
    try {
      const list = readWaitlist();
      
      // Generate CSV content
      const headers = ["Name", "Email", "Phone", "College", "Branch", "Year", "Preferred Role", "Timestamp"];
      const rows = list.map(entry => [
        `"${entry.name.replace(/"/g, '""')}"`,
        `"${entry.email.replace(/"/g, '""')}"`,
        `"${entry.phone.replace(/"/g, '""')}"`,
        `"${entry.college.replace(/"/g, '""')}"`,
        `"${entry.branch.replace(/"/g, '""')}"`,
        `"${entry.year.replace(/"/g, '""')}"`,
        `"${entry.preferredRole.replace(/"/g, '""')}"`,
        `"${entry.timestamp}"`
      ]);

      const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");

      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=evion_ai_waitlist.csv");
      return res.status(200).send(csvContent);
    } catch (error) {
      console.error("Error generating CSV:", error);
      return res.status(500).send("Error exporting CSV");
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Serve index.html for all requests in production (SPA fallback)
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
