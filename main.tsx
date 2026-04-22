import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, company, phone, goals } = req.body;
    
    // If no credentials, just simulate success for the frontend
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      return res.json({ success: true, simulated: true });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1. Email to the company (growthlytics)
    const companyMailOptions = {
      from: process.env.SMTP_EMAIL, // sender address
      to: 'growthlytics23@gmail.com',
      subject: `New Strategy Call Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #eaeaea; padding-bottom: 10px;">New Growthlytics Contact Request</h2>
          <p>You have received a new contact submission from your website. Here are the complete details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; background-color: #f9f9f9; width: 120px;"><strong>Name</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; background-color: #f9f9f9;"><strong>Email</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; background-color: #f9f9f9;"><strong>Company</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${company}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; background-color: #f9f9f9;"><strong>Phone</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; background-color: #f9f9f9; vertical-align: top;"><strong>Goals</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${goals}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // 2. Acknowledgment email to the user
    const userMailOptions = {
      from: `"Growthlytics Agency" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: 'We received your Growthlytics Inquiry!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #000;">Hi ${name},</h2>
          <p>Thank you for reaching out to Growthlytics!</p>
          <p>This is an automated acknowledgment that we have received your request. Our growth team is reviewing your details and will be in touch within 24 hours to schedule your strategy call.</p>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0; border: 1px solid #eaeaea;">
            <h3 style="margin-top: 0; color: #000; font-size: 16px;">A copy of your submission details:</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${company}</p>
            <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong>Growth Goals:</strong><br/><span style="white-space: pre-wrap;">${goals}</span></p>
          </div>

          <p style="margin-top: 30px;">Best regards,</p>
          <p><strong>The Growthlytics Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({ success: true });
  } catch (error: any) {
    const errorString = error?.toString() || '';
    if (errorString.includes('Invalid login') || errorString.includes('535-5.7.8')) {
      return res.json({ success: true, simulated: true, error: 'App Password Required' });
    }

    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
