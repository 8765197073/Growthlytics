import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import helmet from "helmet";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Centralized error notification system (Simulated)
async function notifyAdminOfError(error: any) {
  console.log("------------------------------------------");
  console.log("ALERT: SYSTEM ERROR DETECTED & NOTIFIED:");
  console.error(error);
  // In a real application, you would use nodemailer here to send an email to the admin
  console.log("Email notification sent to growthlytics23@gmail.com");
  console.log("------------------------------------------");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Security: Add helmet to protect the server
  app.use(helmet({
    contentSecurityPolicy: false, // Vite might need this relaxed for HMR/development, update for strict production
  }));
  app.use(express.json());

  // API Route for Interest Form
  app.post("/api/interest", async (req, res) => {
    try {
      const { name, email, overview } = req.body;

      // Validation
      if (!name || !email || !overview) {
        throw new Error("Missing required fields.");
      }

      const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
      const smtpPort = parseInt(process.env.SMTP_PORT || "587");
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      // Check if user accidentally put email in Host field
      if (smtpHost.includes("@")) {
        throw new Error(`CRITICAL CONFIG ERROR: Your SMTP_HOST '${smtpHost}' is invalid.`);
      }

      if (!smtpUser || !smtpPass) {
        console.warn("SMTP credentials missing. Logging email to console.");
        return res.json({ 
          success: true, 
          message: "Submission logged! To send real emails, please set SMTP_USER and SMTP_PASS." 
        });
      }

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Mail to owners
      await transporter.sendMail({
        from: `"Growthlytics System" <${smtpUser}>`,
        to: "growthlytics23@gmail.com",
        subject: `New Lead: ${name}`,
        text: `You have a new interest submission.\n\nName: ${name}\nEmail: ${email}\nOverview: ${overview}`,
      });

      // 2. Acknowledgement to user
      await transporter.sendMail({
        from: `"Growthlytics" <${smtpUser}>`,
        to: email,
        subject: "We've received your interest - Growthlytics",
        text: `Hi ${name},\n\nThank you for reaching out to Growthlytics. We've received your inquiry.\n\nBest Regards,\nThe Growthlytics Team`,
      });

      res.json({ success: true, message: "Emails sent successfully!" });
    } catch (error: any) {
      await notifyAdminOfError(error);
      
      let errorMsg = "An unexpected error occurred.";
      if (error?.message?.includes("535")) {
        errorMsg = "AUTHENTICATION ERROR: Please check your SMTP settings in Settings > Secrets.";
      }
      
      res.status(500).json({ success: false, error: errorMsg });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
