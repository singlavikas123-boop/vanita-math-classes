# DEPLOYMENT GUIDE for Vanita Math Classes

## Quick Start - Easiest Method: Deploy to Vercel (5 minutes)

### Step 1: Sign Up on Vercel
1. Go to https://vercel.com
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 2: Import Your Repository
1. Click "New Project"
2. Find and select `vanita-math-classes`
3. Click "Import"

### Step 3: Configure
1. Keep all settings as default
2. Click "Deploy"
3. Wait 2-3 minutes
4. Done! Your site is live!

### Your Live URL will be:
`https://vanita-math-classes.vercel.app`

---

## Method 2: Netlify Deployment (Also Easy)

1. Go to https://netlify.com
2. Click "Add new site"
3. Choose "Connect to Git"
4. Select GitHub
5. Find `vanita-math-classes`
6. Click "Deploy"
7. Wait for build to complete

---

## Method 3: If You Want to Deploy Locally First (Testing)

### Install Dependencies:
```bash
npm install
```

### Run Development Server:
```bash
npm run dev
```
Then visit: http://localhost:3000

### Build for Production:
```bash
npm run build
npm start
```

### Then Deploy the `/out` folder to any hosting

---

## Troubleshooting Deployment Errors

### Error: "Module not found"
**Solution:** All modules are in package.json. Just run:
```bash
npm install
```

### Error: "Build failed"
**Solution:** Check that all these files exist:
- ✅ src/app/layout.tsx
- ✅ src/app/page.tsx
- ✅ src/app/globals.css
- ✅ src/components/Footer.tsx
- ✅ src/components/Navigation.tsx
- ✅ tailwind.config.js
- ✅ package.json

### Error: "TypeScript error"
**Solution:** Run locally to check:
```bash
npm run build
```

---

## Next Steps After Deployment:

1. **Custom Domain** (Optional)
   - In Vercel/Netlify settings, add your custom domain
   - Update DNS records

2. **Update Contact Information**
   - Edit `src/app/contact/page.tsx`
   - Change phone numbers and email

3. **Add Images**
   - Place images in `public/` folder
   - Update components to use them

4. **Enable Contact Form Email**
   - Integrate with SendGrid, Nodemailer, or Formspree
   - Update `src/app/contact/page.tsx`

5. **Add Analytics**
   - Get tracking code from Google Analytics
   - Add to layout.tsx

---

## Support
If deployment still fails, share the exact error message and I'll help fix it!
