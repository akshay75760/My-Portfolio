# 🚀 Vercel Error Quick Reference

## 🔧 Most Common Portfolio Deployment Errors

| Error Code | Type | Quick Fix |
|------------|------|-----------|
| `DEPLOYMENT_NOT_FOUND` (404) | Config | Check vercel.json routing |
| `DEPLOYMENT_BLOCKED` (403) | Permissions | Verify repo is public, check account |
| `FUNCTION_INVOCATION_FAILED` (500) | Build | Remove API routes (static site only) |
| `NOT_FOUND` (404) | Routing | Add SPA redirect in vercel.json |
| `DNS_HOSTNAME_*` (502) | Domain | Check domain DNS settings |

## ⚡ Emergency Fixes

**Build Failed?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Vercel Config Issues?**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Still Failing?**
- Use `vercel --prod` CLI instead of dashboard
- Try Netlify: `netlify deploy --prod --dir=dist`
- Fallback: GitHub Pages (auto-configured)

## 📞 When to Contact Support
- Any `INTERNAL_*` errors (500s)
- Platform errors that persist after config fixes
- Account/billing related deployment blocks
