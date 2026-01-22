# GitHub Pages Deployment Guide

Your Next.js website is now configured for static export and can be deployed to GitHub Pages!

## Configuration Applied

✅ **Static Export Enabled**: `output: 'export'` in `next.config.js`  
✅ **Trailing Slash**: Enabled for better GitHub Pages compatibility  
✅ **Image Optimization**: Disabled (required for static export)  
✅ **GitHub Actions**: Automated deployment workflow created

## Quick Start

### Option 1: Automated Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure Next.js for static export"
   git push origin main
   ```

3. **Wait for deployment:**
   - GitHub Actions will automatically build and deploy your site
   - Check the "Actions" tab in your repository to see the deployment progress
   - Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

### Option 2: Manual Deployment

1. **Build the static site:**
   ```bash
   npm install
   npm run build
   ```
   This creates an `out` folder with all static files.

2. **Deploy the `out` folder:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/out` folder
   - Click Save

3. **Push the `out` folder to a `gh-pages` branch:**
   ```bash
   # Install gh-pages package (optional)
   npm install --save-dev gh-pages
   
   # Add deploy script to package.json
   # "deploy": "npm run build && gh-pages -d out"
   
   # Deploy
   npm run deploy
   ```

## Custom Domain Setup

If you have a `CNAME` file (which you do), GitHub Pages will use it automatically:

1. Your site will be available at your custom domain
2. Make sure your DNS is configured correctly:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`
   - Or add A records for GitHub Pages IPs

## Important Notes

⚠️ **Static Export Limitations:**
- No server-side rendering (SSR)
- No API routes
- No dynamic routes with `getServerSideProps`
- Images are not optimized (using `unoptimized: true`)

✅ **What Still Works:**
- Client-side routing
- Static site generation
- All React features
- Framer Motion animations
- All your components

## Testing Locally

Before deploying, test the static export:

```bash
# Build the static site
npm run build

# The output will be in the `out` folder
# You can serve it locally with:
npx serve out
```

## Troubleshooting

### Build Fails
- Make sure all dependencies are installed: `npm install`
- Check for any server-side code that needs to be removed

### 404 Errors on GitHub Pages
- Make sure `trailingSlash: true` is set in `next.config.js` (already done)
- Check that your base path is correct if using a subdirectory

### Images Not Loading
- Images are set to `unoptimized: true` for static export
- Make sure image paths are correct
- Use relative paths or absolute URLs

## Updating Your Site

After making changes:

1. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **GitHub Actions will automatically rebuild and deploy** (if using automated deployment)

## Your Site URLs

- **GitHub Pages**: `https://YOUR_USERNAME.github.io/REPO_NAME/`
- **Custom Domain**: Check your `CNAME` file for the domain

---

Need help? Check the [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
