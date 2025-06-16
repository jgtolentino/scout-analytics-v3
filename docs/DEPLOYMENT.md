# Scout Analytics v3.1.0 - Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Clone repository
git clone <repository-url>
cd scout-analytics-v3

# Install dependencies
npm install

# Build project
npm run build

# Deploy to Vercel
vercel --prod
```

### Option 2: Vercel Dashboard

1. Connect GitHub repository to Vercel
2. Set build settings:
   - **Framework**: Vite
   - **Root Directory**: `apps/dashboard`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

## Environment Variables

Set these in Vercel Dashboard or `.env`:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Azure OpenAI (for RetailBot)
VITE_AZURE_OPENAI_ENDPOINT=your_azure_openai_endpoint
VITE_AZURE_OPENAI_KEY=your_azure_openai_key
VITE_AZURE_OPENAI_DEPLOYMENT=your_deployment_name

# Optional: Analytics
VITE_GA_TRACKING_ID=your_google_analytics_id
```

## Verification Checklist

After deployment, verify:

- [ ] ✅ Dashboard loads at target URL
- [ ] ✅ All 5 navigation pages work (Overview, Trends, Products, Consumers, RetailBot)
- [ ] ✅ KPI cards show live data (₱1.2M revenue, 5K transactions)
- [ ] ✅ Regional heatmap is interactive
- [ ] ✅ Product treemaps render correctly
- [ ] ✅ Sankey flow visualization works
- [ ] ✅ Cultural insights display properly
- [ ] ✅ RetailBot responds to messages
- [ ] ✅ Filters apply correctly
- [ ] ✅ Mobile responsive design
- [ ] ✅ No console errors

## Production URLs

- **Target**: https://scout-v3.vercel.app
- **Staging**: https://scout-v3-staging.vercel.app (optional)

## Performance Targets

- **Lighthouse Score**: >90
- **First Contentful Paint**: <2s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <1MB gzipped

## Monitoring

### Health Checks

```bash
# Basic health check
curl -s https://scout-v3.vercel.app | grep "Scout Analytics"

# Performance check
lighthouse https://scout-v3.vercel.app --only-categories=performance
```

### Analytics

- **Vercel Analytics**: Automatic for Pro plans
- **Google Analytics**: Configure via VITE_GA_TRACKING_ID
- **Sentry**: Add for error tracking (optional)

## Troubleshooting

### Common Issues

1. **Build Fails**
   ```bash
   # Clear dependencies and rebuild
   rm -rf apps/dashboard/node_modules
   cd apps/dashboard && npm install && npm run build
   ```

2. **Environment Variables Missing**
   - Check Vercel Dashboard > Project > Settings > Environment Variables
   - Ensure all required variables are set

3. **Supabase Connection Issues**
   - Verify VITE_SUPABASE_URL format: `https://xxx.supabase.co`
   - Check RLS policies allow anonymous access for dashboard data

4. **RetailBot Not Responding**
   - Verify Azure OpenAI credentials
   - Check network requests in browser dev tools

### Support

For deployment issues:
- Check Vercel build logs
- Review browser console for errors
- Verify environment variables
- Test API endpoints manually

---

Built with ❤️ for Philippine retail intelligence