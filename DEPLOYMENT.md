# 🥷 Ninja Portfolio - Netlify Deployment Guide

## Prerequisites
- Git repository (GitHub, GitLab, or Bitbucket)
- Netlify account (free)

## Method 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Push to Git Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "🥷 Initial ninja portfolio deployment"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/ninja-portfolio.git

# Push to repository
git push -u origin main
```

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: `18` (set in environment variables)

### Step 3: Environment Variables (if needed)
In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add any required environment variables

### Step 4: Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS settings

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Build and Deploy
```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Build Configuration

The project includes:

### netlify.toml
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin enabled
- Performance headers
- Security headers
- Redirect rules for SPA routing

### next.config.ts
- Static export enabled
- Image optimization disabled (for static hosting)
- Trailing slashes enabled
- ESM externals enabled

## Build Commands

Available npm scripts:
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files
- `npm run deploy` - Combined build and export

## Troubleshooting

### Common Issues:

1. **Build fails with "window is not defined"**
   - Fixed: Added `typeof window !== 'undefined'` checks
   - Ensure all browser APIs are properly guarded

2. **Images not loading**
   - Check `next.config.ts` has `images: { unoptimized: true }`
   - Ensure image paths are correct

3. **Routing issues**
   - Netlify.toml includes redirect rules for SPA routing
   - Ensure `trailingSlash: true` in next.config.ts

4. **Build timeout**
   - Increase build timeout in Netlify settings
   - Optimize dependencies and build process

### Performance Optimization:
- Static assets cached for 1 year
- Security headers enabled
- Gzip compression automatic on Netlify
- CDN distribution worldwide

## Post-Deployment

After successful deployment:
1. Test all pages and functionality
2. Check mobile responsiveness
3. Verify ninja theme consistency
4. Test contact form (if using form services)
5. Set up monitoring and analytics

## Continuous Deployment

Your site will automatically redeploy when you push changes to your connected Git repository.

## Support

For issues:
1. Check Netlify build logs
2. Review browser console for errors
3. Verify all environment variables
4. Test build locally first: `npm run build`

🥷 Happy deploying, ninja! Your shadow portfolio will be live in the digital realm!
   git remote add origin https://github.com/yourusername/portfolio-nextjs.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy with default settings

## Environment Variables

If you add any API keys or sensitive data, create a `.env.local` file:

```bash
# Example environment variables
NEXT_PUBLIC_CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

## Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

- Images: Add optimized images to `public/` folder
- Fonts: Already optimized with Next.js font optimization
- Analytics: Add Google Analytics or other tracking

## SEO Optimization

- Update meta tags in `src/app/layout.tsx`
- Add robots.txt in `public/robots.txt`
- Add sitemap.xml in `public/sitemap.xml`

Your portfolio is now ready for production! 🚀
