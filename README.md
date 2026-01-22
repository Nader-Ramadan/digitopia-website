# DigitalForge Agency Website

A modern, responsive website for DigitalForge Agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-friendly structure
- ♿ Accessible components
- 📦 Static export ready for GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Portfolio.tsx   # Portfolio section
│   ├── About.tsx       # About section
│   ├── Contact.tsx    # Contact section
│   └── Footer.tsx      # Footer
└── public/             # Static assets
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary color is currently set to blue.

### Content

Update the content in each component file to match your brand and services.

### Images

Replace the placeholder images in `components/Portfolio.tsx` with your actual project images.

## Build for Production

### Static Export (for GitHub Pages)

```bash
npm run build
```

This creates an `out` folder with all static files ready for deployment.

### Test Static Build Locally

```bash
npm run build
npx serve out
```

## Deployment

### GitHub Pages (Configured)

This project is configured for static export and can be deployed to GitHub Pages:

1. **Automated Deployment** (Recommended):
   - Enable GitHub Pages in repository settings
   - Select "GitHub Actions" as the source
   - Push to `main` branch - deployment happens automatically
   - See `GITHUB_PAGES_DEPLOY.md` for detailed instructions

2. **Manual Deployment**:
   - Build: `npm run build`
   - Deploy the `out` folder to GitHub Pages

Your site will be available at: `https://digitopiainc.com` (custom domain configured)

### Other Platforms

- **Vercel**: Import repository, auto-detects Next.js
- **Netlify**: Connect repo, build command: `npm run build`, publish: `out`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT
