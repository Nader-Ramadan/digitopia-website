# GitHub Setup Guide

## Step 1: Pull Latest Changes (if needed)
```bash
git pull origin main
```

## Step 2: Add All New Files
```bash
git add .
```

## Step 3: Commit Your Changes
```bash
git commit -m "Add DigitalForge agency website with Next.js, TypeScript, and Tailwind CSS"
```

## Step 4: Push to GitHub
```bash
git push origin main
```

## Alternative: If You Need to Create a New Repository

### Option A: Create Repository on GitHub First
1. Go to [GitHub](https://github.com) and create a new repository
2. Don't initialize it with README, .gitignore, or license
3. Then run these commands:

```bash
# Add the remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push your code
git push -u origin main
```

### Option B: Initialize New Repository Locally
If this isn't connected to a repo yet:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: DigitalForge agency website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## After Pushing to GitHub

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Deploy to Vercel (Recommended for Next.js)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live at `your-project.vercel.app`

## Deploy to Other Platforms

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### GitHub Pages (requires static export)
Add to `next.config.js`:
```js
output: 'export'
```
Then build and deploy the `out` folder.
