# DigitalForge Agency Website

A modern, responsive website for DigitalForge Agency built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, beautiful UI design
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO-friendly structure
- ♿ Accessible components

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

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## License

MIT
