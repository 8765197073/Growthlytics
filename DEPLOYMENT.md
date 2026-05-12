# Deployment Guides

This application can be deployed to several platforms.

- [Deploy to Vercel (Recommended for Full-Stack)](#deployment-guide-vercel)
- [Deploy to Netlify (Recommended for Static Content)](./NETLIFY_GUIDE.md)
- [Upload to GitHub First](./GITHUB_GUIDE.md)

## Deployment Guide: Vercel

This application is set up as a Full-Stack application (Vite + Express). To deploy to Vercel, follow these steps:

## Prerequisites

1.  A GitHub account (See [GITHUB_GUIDE.md](./GITHUB_GUIDE.md) for how to upload your code).
2.  A Vercel account linked to your GitHub.
3.  The application code pushed to a public or private GitHub repository.

## Step-by-Step Deployment

1.  **Repository Setup**: 
    - Push your application code to a GitHub repository.
    - Ensure your `package.json` contains the `start` script: `"start": "node server.ts"`.

2.  **Import to Vercel**:
    - Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
    - Click "Add New..." -> "Project".
    - Select your GitHub repository.

3.  **Configure Build & Development Settings**:
    - Build Command: `npm run build`
    - Output Directory: `dist`
    - Development Command: `tsx server.ts` (if applicable)

4.  **Environment Variables**:
    - In the project settings on Vercel, navigate to "Environment Variables".
    - Add the variables defined in your `.env.example`, including:
      - `GEMINI_API_KEY`
      - `SMTP_HOST`
      - `SMTP_PORT`
      - `SMTP_USER`
      - `SMTP_PASS`
    - Ensure these match the values in your AI Studio Secrets.

5.  **Deploy**:
    - Click "Deploy". Vercel will handle the rest.

## Security Considerations

-   **Secrets**: Never commit your `.env` file to your repository. Use Vercel's Environment Variables panel to manage secrets securely.
-   **API Keys**: The `GEMINI_API_KEY` is handled server-side, keeping it secure from browser inspection.
-   **CORS**: Ensure your server configuration allows requests from your deployed domain if necessary.

## Troubleshooting

-   **Deployment Failures**: Check Vercel's build logs. Ensure all dependencies listed in `package.json` are installed correctly.
-   **Runtime Errors**: Check Vercel's function logs to see if your `server.ts` is running correctly.
