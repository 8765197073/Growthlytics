import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, overview } = req.body;

    if (!name || !email || !overview) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.warn("SMTP credentials missing in Vercel environment.");
      return res.status(200).json({ 
        success: true, 
        message: "Submission received! To send real emails, please set SMTP_USER and SMTP_PASS in Vercel dashboard." 
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
      subject: `[Vercel Lead]: ${name}`,
      text: `You have a new interest submission from Vercel.\n\nName: ${name}\nEmail: ${email}\nOverview: ${overview}`,
    });

    // 2. Acknowledgement to user
    await transporter.sendMail({
      from: `"Growthlytics" <${smtpUser}>`,
      to: email,
      subject: "We've received your interest - Growthlytics",
      text: `Hi ${name},\n\nThank you for reaching out to Growthlytics. We've received your inquiry via our Vercel site.\n\nBest Regards,\nThe Growthlytics Team`,
    });

    return res.status(200).json({ success: true, message: "Emails sent successfully!" });
  } catch (error: any) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({ success: false, error: "Failed to send email. Check SMTP settings." });
  }
}
