# Guide: Publishing on Netlify

Netlify is one of the easiest platforms to host your Growlthlytics website. Follow these steps to get your site live.

## Step 1: Upload to GitHub
First, ensure your code is on GitHub. If you haven't done this yet, follow the [GITHUB_GUIDE.md](./GITHUB_GUIDE.md).

---

## Step 2: Connect to Netlify
1.  **Log in**: Go to [app.netlify.com](https://app.netlify.com) and log in (GitHub login is fastest).
2.  **Add New Site**: Click the **"Add new site"** button and select **"Import an existing project"**.
3.  **Choose GitHub**: Select **GitHub** as your Git provider and authorize Netlify to access your repositories.
4.  **Select Repository**: Find and click on your Growlthlytics project repository.

---

## Step 3: Configure Build Settings
Netlify should automatically detect your settings, but double-check these values:
-   **Build Command**: `npm run build`
-   **Publish directory**: `dist`
-   **Base directory**: (Leave blank)

---

## Step 4: Add Environment Variables (IMPORTANT)
If your app uses any API keys or email settings (like `SMTP_USER`), you must add them:
1.  In the Netlify dashboard for your site, go to **Site configuration** > **Environment variables**.
2.  Click **"Add a variable"**.
3.  Add any keys used in your project (e.g., `SMTP_USER`, `SMTP_PASS`).

---

## Step 5: Fixed Form Submission
I have updated the `InterestForm.tsx` to automatically support **Netlify Forms**. This means you don't need a separate backend for your demo requests to work on Netlify.

### How it works:
- When you submit the form on Netlify, it will attempt to hit the API first.
- If the API is missing (which is default on Netlify), it will automatically fallback to **Netlify Forms**.
- You can find your submissions in your Netlify Dashboard under **Forms**.

### 📧 How to get Email Notifications:
To receive an email every time someone books a demo on Netlify:
1.  Go to your **Netlify Project Dashboard**.
2.  Click on **Site configuration** (or Site settings).
3.  Go to **Forms** -> **Form notifications**.
4.  Click **Add notification** -> **Email notification**.
5.  Select the form `growthlytics-demo` and enter your email address.
6.  Save, and you will now get consistent emails for every lead!

### Important for Re-deployment:
If you have already deployed, you must **push your changes to GitHub** again. Netlify will see the new code, rebuild your site, and the form will start working!

---

## Step 6: Deploy!
Click **"Deploy site"**. Netlify will build your project and give you a public URL (e.g., `graceful-swan-123.netlify.app`).
