# Guide: Uploading to GitHub

To upload your project from Google AI Studio Build to GitHub, follow these steps:

## Option 1: Automatic Export (Recommended)

Google AI Studio provides a built-in feature to export your project directly to a new GitHub repository.

1.  **Open Settings**: Click on the **Settings** (gear icon) in the top-right corner of the AI Studio interface.
2.  **Export to GitHub**:
    - Look for the **"Export to GitHub"** button.
    - If you haven't linked your account, you will be prompted to authorize AI Studio with your GitHub account.
    - Follow the prompts to create a new repository name.
3.  **Complete Export**: AI Studio will automatically create the repository and push all your project files to it.

---

## Option 2: Manual Upload (Download as ZIP)

If you prefer to manually manage your repository or if Option 1 is unavailable:

1.  **Download Project**:
    - Click on the **Settings** (gear icon) in the top-right corner.
    - Click **"Download Project"** to get a `.zip` file of your entire codebase.
2.  **Extract Files**: Unzip the downloaded file on your local machine.
3.  **Initialize Git**:
    - Open your terminal/command prompt.
    - Navigate to the project folder.
    - Run the following commands:
      ```bash
      git init
      git add .
      git commit -m "Initial commit from AI Studio"
      ```
4.  **Create GitHub Repository**:
    - Go to [github.com/new](https://github.com/new).
    - Create a new repository (do not initialize with README).
5.  **Push to GitHub**:
    - Copy the remote URL of your new repository.
    - Run the following commands in your terminal:
      ```bash
      git remote add origin YOUR_REPOSITORY_URL
      git branch -M main
      git push -u origin main
      ```

---

## How to Push Updates (New Changes)

If you have already uploaded your project and want to update it with the latest changes (like the recent Netlify fixes):

### Method A: Re-Export (Easiest)
1. Go to **Settings** -> **Export to GitHub**.
2. If you use the same repository name, AI Studio will typically push the new changes to the existing branch.

### Method B: Manual Git Commands (Command Line)
If you are managing the repository on your local computer:
1.  **Open Terminal** in your project folder.
2.  **Add recent changes**:
    ```bash
    git add .
    ```
3.  **Commit the changes**:
    ```bash
    git commit -m "Fixed Netlify form submission and improved responsiveness"
    ```
4.  **Push to GitHub**:
    ```bash
    git push
    ```

---

## Important Folders to Ignore

Your project includes a `.gitignore` file. Ensure you **never** upload:
- `node_modules/` (handled by npm install on deployment)
- `.env` (contains your secrets/API keys)
- `dist/` (build output)
