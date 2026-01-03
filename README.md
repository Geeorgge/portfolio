# Portfolio - Backend Engineer

Modern, elegant portfolio website showcasing a backend engineer's skills, experience, and projects.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Features**: Dark mode, smooth scrolling, responsive design

## Features

✨ **Modern Design**
- Elegant dark theme with gradient accents
- Smooth animations and transitions
- Glass-morphism effects
- Fully responsive

🎯 **Sections**
- Hero with CTA buttons
- Technical skills showcase
- Featured projects with GitHub links
- Work experience timeline
- Education
- Contact form with social links

🚀 **Performance**
- Fast loading with Next.js optimization
- SEO optimized
- Lighthouse ready

## Getting Started
## Customization

### Update Personal Information
- Edit `src/app/layout.tsx` for metadata
- Update name and links in `src/components/Header.tsx`
- Modify bio in `src/components/Hero.tsx`

### Add Your Projects
- Update projects array in `src/components/Projects.tsx`
- Add your GitHub links
- Customize technologies list

### Update Experience
- Edit experiences array in `src/components/Experience.tsx`
- Add education details
- Update achievements

### Change Colors
- Modify `tailwind.config.js` for custom colors
- Update gradient colors in component className

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the 'out' directory to Netlify
```

### Other Platforms

Build the project:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## SEO & Meta Tags

The site includes:
- Optimized meta tags
- Open Graph tags
- Favicon
- JSON-LD structured data (can be added)

## Performance Tips

1. Optimize images for projects
2. Lazy load project images
3. Consider adding analytics (Vercel Analytics)
4. Use CDN for fast delivery

## License

Free to use for your portfolio.
