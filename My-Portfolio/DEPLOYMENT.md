# Deployment Checklist

Before deploying your portfolio, ensure the following steps are completed:

## Pre-Deployment Checklist

### 📋 Content & Information
- [ ] Update personal information in all components
- [ ] Add your actual projects to the Projects component
- [ ] Update skills and certifications
- [ ] Replace placeholder contact information
- [ ] Update resume PDF in `/public/Akshay_Resume.pdf`

### 🔧 Configuration
- [ ] Update repository URL in README.md
- [ ] Update social media links in components
- [ ] Set proper site URL in meta tags (`index.html`)
- [ ] Configure domain in deployment platform settings

### 🎨 Assets & Media
- [ ] Add a proper favicon (current: placeholder)
- [ ] Add project screenshots/images
- [ ] Optimize images for web (WebP format recommended)
- [ ] Add Open Graph image for social sharing

### 🚀 Technical Setup
- [ ] Test build locally: `npm run build`
- [ ] Test preview locally: `npm run preview`
- [ ] Run linter: `npm run lint`
- [ ] Verify all links work
- [ ] Test responsive design on different screen sizes
- [ ] Test dark/light theme toggle

### 🌐 Deployment Platform Setup

#### For Vercel:
- [ ] Connect GitHub repository to Vercel
- [ ] Set build command: `npm run build`
- [ ] Set output directory: `dist`
- [ ] Configure custom domain (optional)

#### For Netlify:
- [ ] Connect GitHub repository to Netlify
- [ ] Build settings should be auto-detected from `netlify.toml`
- [ ] Configure custom domain (optional)

#### For GitHub Pages:
- [ ] Enable GitHub Pages in repository settings
- [ ] Select "GitHub Actions" as source
- [ ] Push to main branch to trigger deployment

### 🔍 Post-Deployment
- [ ] Verify deployed site loads correctly
- [ ] Test all navigation links
- [ ] Check mobile responsiveness
- [ ] Verify contact form works (if applicable)
- [ ] Test PDF resume download
- [ ] Check console for any errors

### 📊 Analytics & Monitoring (Optional)
- [ ] Set up Google Analytics
- [ ] Configure error monitoring (Sentry, etc.)
- [ ] Set up uptime monitoring

### 🔒 Security & Performance
- [ ] Verify HTTPS is enabled
- [ ] Check Lighthouse performance score
- [ ] Ensure CSP headers are set (if needed)
- [ ] Test loading speed

## Quick Deploy Commands

```bash
# Prepare for deployment
npm ci && npm run build

# Deploy to Vercel
npm run deploy:vercel

# Deploy to Netlify
npm run deploy:netlify

# Or use platform-specific commands
vercel --prod
netlify deploy --prod --dir=dist
```

## Troubleshooting

### Common Issues:
1. **Build fails**: Check for TypeScript errors and lint issues
2. **Assets not loading**: Verify base path in vite.config.ts
3. **Routing issues**: Ensure SPA redirects are configured
4. **Slow loading**: Enable gzip compression and optimize assets

### Build Not Working?
1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear Vite cache: `npx vite clean-cache`
3. Check for conflicting dependencies
