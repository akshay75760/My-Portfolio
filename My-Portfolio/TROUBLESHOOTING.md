# Deployment Troubleshooting Guide

## Common Issues and Solutions

### 🚨 Build Errors

#### Issue: "Build failed" or "Command failed"
**Solutions:**
1. **Clear cache and reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Check for TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

3. **Fix linting issues:**
   ```bash
   npm run lint
   npm run lint -- --fix
   ```

#### Issue: "Module not found" errors
**Solution:** Ensure all imports use correct paths and extensions:
```typescript
// Correct
import Component from './Component'
// or
import Component from './Component.tsx'
```

### 🌐 Vercel Deployment Issues

#### Issue: Static files not loading
**Solution 1:** Update `vercel.json` configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Solution 2:** Ensure base path is correct in `vite.config.ts`:
```typescript
export default defineConfig({
  base: './', // or '/' for root deployment
  // ... other config
});
```

#### Issue: Vercel build timeout
**Solution:** Optimize build performance:
1. Add to `vercel.json`:
```json
{
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 30
    }
  }
}
```

### 🌍 Netlify Deployment Issues

#### Issue: Page not found (404) on refresh
**Solution:** Ensure `netlify.toml` has proper redirects:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Issue: Build fails on Netlify
**Solution 1:** Set correct Node.js version in `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

**Solution 2:** Use `npm ci` instead of `npm install`:
```toml
[build]
  command = "npm ci && npm run build"
```

### 🔧 GitHub Pages Issues

#### Issue: Blank page after deployment
**Solution:** Update `vite.config.ts` with correct base path:
```typescript
export default defineConfig({
  base: '/My-Portfolio/', // Replace with your repo name
  // ... other config
});
```

### 🛠️ Quick Fix Commands

Run these commands to resolve most common issues:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Check for errors
npm run lint
npx tsc --noEmit

# Test build locally
npm run build
npm run preview

# Check dependencies
npm audit
npm audit fix
```

### 📊 Performance Optimization

Add these to improve deployment performance:

**1. Update `package.json` with engines:**
```json
{
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=8.0.0"
  }
}
```

**2. Add compression to `vercel.json`:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### 🐛 Debug Deployment

**For Vercel:**
1. Check deployment logs in Vercel dashboard
2. Use `vercel logs [deployment-url]` to see runtime logs
3. Test locally with `vercel dev`

**For Netlify:**
1. Check deploy logs in Netlify dashboard
2. Use `netlify dev` for local testing
3. Check function logs if using serverless functions

### 🔍 Common Error Messages and Fixes

| Error | Platform | Solution |
|-------|----------|----------|
| `Command "build" exited with 1` | Both | Fix build errors, check dependencies |
| `Module not found` | Both | Check import paths and file extensions |
| `404 on refresh` | Both | Configure SPA redirects |
| `Build timeout` | Vercel | Optimize build, increase timeout |
| `Function size too large` | Both | Code splitting, reduce bundle size |

### 🚀 Test Before Deploy

Always run this checklist before deploying:

```bash
# 1. Clean install
npm ci

# 2. Run linter
npm run lint

# 3. Type check
npx tsc --noEmit

# 4. Build
npm run build

# 5. Preview
npm run preview
```

If all steps pass, your deployment should work! 🎉
