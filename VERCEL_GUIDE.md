# Deploying Growthlytics to Vercel

This project is fully optimized for **Vercel**. I have added a serverless function to handle your "Book a Demo" form submissions without needing a separate backend server.

## Step 1: Push to GitHub
If you haven't already, push your code to a GitHub repository.

## Step 2: Import into Vercel
1.  Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Framework Preset**: Keep it as **Other** or **Vite** (it should auto-detect).
5.  **Build Command**: `npm run build`
6.  **Output Directory**: `dist`

## Step 3: Configure Environment Variables (CRITICAL)
To make sure emails are sent consistently from Vercel, you must add these environment variables in your Vercel Project Settings:

1.  **SMTP_USER**: your-email@gmail.com
2.  **SMTP_PASS**: your-app-password (e.g., from Google App Passwords)
3.  **SMTP_HOST**: `smtp.gmail.com` (default)
4.  **SMTP_PORT**: `587` (default)

## Step 4: Verify the Form
Once deployed:
1.  Navigate to your Vercel URL.
2.  Scroll down to the **Book a Demo** section.
3.  Submit the form.
4.  Vercel will execute the function at `/api/interest` and trigger the email to `growthlytics23@gmail.com`.

---

## Technical Details
- **API Function**: Located in `/api/interest.ts`. Vercel automatically deploys this as a Serverless Function.
- **Routing**: Managed by `/vercel.json`, which ensures the API route is prioritized and all other traffic goes to your React app.
