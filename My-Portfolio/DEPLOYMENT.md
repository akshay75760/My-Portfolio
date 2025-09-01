# 🚀 Step-by-Step Deployment Guide

## Quick Deployment Steps

### ✅ Pre-Deployment Verification

Run this command to ensure everything is ready:
```bash
npm ci && npm run lint && npm run build
```

If this passes without errors, you're ready to deploy!

## 🌐 Vercel Deployment (Recommended)

### Method 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/akshay75760/My-Portfolio)

### Method 2: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time - follow prompts)
vercel

# Or deploy directly to production
vercel --prod
```

### Method 3: Git Integration
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings from `vercel.json`
5. Click "Deploy"

## 🌍 Netlify Deployment

### Method 1: Drag & Drop
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

### Method 2: Git Integration
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Settings are auto-detected from `netlify.toml`
5. Click "Deploy site"

### Method 3: CLI Deployment
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
netlify deploy --dir=dist

# Deploy to production
netlify deploy --prod --dir=dist
```

## 📄 GitHub Pages Deployment

GitHub Pages is automatically configured! Just:
1. Push your code to the `main` branch
2. Go to Repository Settings > Pages
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy your site

## � Common Deployment Fixes

### Fix 1: If Vercel shows "Build failed"
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Fix 2: If getting 404 errors on deployed site
The `vercel.json` and `netlify.toml` are already configured to handle this.

### Fix 3: If environment variables are needed
Create `.env.local` from `.env.example` and add your variables.

### Fix 4: If assets aren't loading
The `vite.config.ts` is configured with `base: './'` for relative paths.

## 🎯 Troubleshooting Specific Errors

### Vercel Error: "Command failed with exit code 1"
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (18+ required)

### Netlify Error: "Build failed"
1. Check if build command is correct in `netlify.toml`
2. Ensure `dist` directory exists after build
3. Check function timeout if using serverless functions

### GitHub Pages Error: "Build failed"
1. Check the Actions tab for detailed error logs
2. Ensure workflow has proper permissions
3. Verify Node.js version in workflow

## 🚀 Final Deployment Commands

Choose your preferred platform and run these commands:

### For Vercel:
```bash
npm ci
npm run build
vercel --prod
```

### For Netlify:
```bash
npm ci
npm run build
netlify deploy --prod --dir=dist
```

### For GitHub Pages:
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

## 📋 Post-Deployment Checklist

After deployment, verify:
- [ ] Site loads correctly
- [ ] All navigation links work
- [ ] Theme toggle functions
- [ ] Resume PDF downloads
- [ ] Mobile responsiveness
- [ ] No console errors

## 🆘 Still Having Issues?

1. Check the `TROUBLESHOOTING.md` file for detailed error solutions
2. Ensure your repository is public for GitHub Pages
3. Verify domain settings if using a custom domain
4. Check platform status pages for outages

Your portfolio is now deployment-ready! 🎉
