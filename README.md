# Badger Book Club Website

A modern, elegant, editorial website for a university book club called "Badger Book Club". Built with Next.js, TypeScript, and Tailwind CSS.

## Project Overview

This is a comprehensive Next.js website project featuring:

- **Modern Editorial Design**: Clean, minimal UI with refined serif typography
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**: Home, About, Gallery, Events, Blog, Contact, and Join pages
- **Dynamic Content**: Data-driven pages with events, blog posts, and gallery images
- **SEO Ready**: Includes sitemap.xml, robots.txt, and proper metadata
- **Production Ready**: All configuration files and deployment instructions included

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Typography**: Playfair Display (headings) + Source Sans 3 (body)
- **Deployment**: Ready for Vercel

## Project Structure

```
badger-book-club/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.mjs
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── icon.svg
│   ├── hero/
│   │   ├── hero-1.jpg
│   │   ├── hero-2.jpg
│   │   └── hero-3.jpg
│   └── gallery/
│       ├── image-1.jpg
│       ├── image-2.jpg
│       └── ... (12 gallery images total)
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx (Homepage)
    │   ├── globals.css
    │   ├── about/page.tsx
    │   ├── gallery/page.tsx
    │   ├── events/page.tsx
    │   ├── blog/page.tsx
    │   ├── blog/[slug]/page.tsx
    │   ├── contact/page.tsx
    │   └── join/page.tsx
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Menu.tsx
    │   ├── Marquee.tsx
    │   ├── Button.tsx
    │   ├── EventCard.tsx
    │   ├── BlogCard.tsx
    │   ├── GalleryGrid.tsx
    │   └── Lightbox.tsx
    └── data/
        ├── events.ts
        ├── blog.ts
        └── gallery.ts
```

## Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Add Images

Replace placeholder images with your own:
- Hero images: `public/hero/` (3 images recommended)
- Gallery images: `public/gallery/` (12 images recommended)

## Features

### Homepage
- Hero section with headline, description, and CTA button
- Animated marquee ribbon with "NEW READS AHEAD" text
- Full-bleed photo strip
- About section with soft pink background
- Upcoming events preview
- Gallery preview
- Contact section

### Pages
- **About**: Mission, values, and club information
- **Gallery**: 12-image gallery with lightbox
- **Events**: Upcoming events with filters and details
- **Blog**: Blog feed with 6+ sample posts and individual post pages
- **Contact**: Contact form and information
- **Join**: Membership signup page

## Design Highlights

- Color Palette:
  - Background: #FEFAF0 (cream)
  - Text: #26150B (dark brown)
  - Accent: #913F4A (burgundy)
  - Secondary: #EAB9B3 (soft pink)

- Typography:
  - Headings: Playfair Display (serif)
  - Body: Source Sans 3 (sans-serif)

- Layout:
  - Airy, high-end editorial aesthetic
  - Lots of negative space
  - Minimal UI elements
  - Magazine-like feel

## Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

```bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main
```

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## File Access

All source files are available in the Claude artifacts. For detailed code files, see:
- Configuration files (package.json, tsconfig.json, etc.)
- TypeScript components and pages
- CSS styling
- Data files

## Next Steps

1. **Customize Content**
   - Update colors in `tailwind.config.ts`
   - Modify fonts in `src/app/layout.tsx`
   - Update data in `src/data/` files

2. **Add Images**
   - Replace hero images in `public/hero/`
   - Replace gallery images in `public/gallery/`

3. **Update Information**
   - Edit page content in `src/app/` directories
   - Update company information in data files

4. **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Deploy with one click

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- TypeScript Documentation: https://www.typescriptlang.org/docs/


<!-- Fixed: TypeScript errors resolved - all slug references updated to id -->
