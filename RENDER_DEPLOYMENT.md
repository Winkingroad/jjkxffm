# Deploying to Render

Render is a modern platform similar to Railway but with different features. Follow these steps:

## Step 1: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up (use GitHub account for easy integration)
3. Verify email

## Step 2: Create New Web Service

1. Click **"New"** button
2. Select **"Web Service"**
3. Click **"Connect a repository"**

## Step 3: Connect GitHub Repository

1. Search for: `jjkxffm`
2. Select: `Winkingroad/jjkxffm`
3. Click **"Connect"**

## Step 4: Configure Deployment

Fill in the following:

| Field | Value |
|-------|-------|
| **Name** | jjkxffm-backend |
| **Environment** | Node |
| **Region** | Singapore (or closest to you) |
| **Branch** | main |
| **Build Command** | `cd backend && npm install` |
| **Start Command** | `cd backend && npm start` |
| **Instance Type** | Free |

## Step 5: Add Environment Variables

1. Scroll to **"Environment"** section
2. Click **"Add Environment Variable"**
3. Add these variables:

```
SUPABASE_URL
https://ttpugpljarmhtvohyikb.supabase.co

SUPABASE_SERVICE_KEY
sb_secret_LBqe7T83yUvjQwKcyMCcvA_eJsVPWTA

PORT
3000
```

⚠️ **Security Note**: These will be encrypted on Render

## Step 6: Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (2-3 minutes)
3. Check logs for errors
4. Once green, you'll see a URL like:
   ```
   https://jjkxffm-backend.onrender.com
   ```

## Step 7: Update Frontend Code

Edit `js/ffmjjk.js` and change:

```javascript
// OLD:
const BACKEND_API = "http://localhost:3000";

// NEW:
const BACKEND_API = "https://jjkxffm-backend.onrender.com";
```

Then commit and push:

```powershell
git add js/ffmjjk.js
git commit -m "Update backend API URL for Render deployment"
git push
```

## Step 8: Test Live

1. Open your GitHub Pages or hosted frontend
2. Fill out registration form
3. Submit
4. Check Supabase for data

## Render Dashboard Features

- **Logs**: Real-time server logs
- **Metrics**: CPU, memory, bandwidth usage
- **Settings**: Manage environment variables
- **Deploys**: Deployment history
- **Health**: Service status

## Auto-Deploy from GitHub

Once connected, Render automatically deploys when you push to `main` branch.

## Troubleshooting

### Service won't start
```
Error: Cannot find module 'express'
```
**Solution**: Check build command includes `npm install`

### Port not exposed
```
Error: EADDRINUSE: address already in use :::3000
```
**Solution**: Render assigns a port, make sure code uses `process.env.PORT`

### Logs show deployment errors
1. Go to **Logs** tab
2. Check error message
3. Fix locally
4. Push to GitHub
5. Render auto-redeploys

## Free Tier Limits

- ✅ 750 hours per month (always on)
- ✅ 5 GB bandwidth
- ✅ Auto-paused after 15 min inactivity
- ✅ Free SSL certificate
- ⚠️ Cold start (5-30 seconds) after pause

## Upgrade to Paid (Optional)

Click **"Instance Type"** → Choose **"Standard"** ($7/month)
- Always active
- Better performance
- Dedicated resources

## Monitoring

### Check if backend is running:
```
curl https://jjkxffm-backend.onrender.com/health
```

Should return:
```json
{"status":"OK"}
```

### View live logs:
1. Go to Render dashboard
2. Select your service
3. Click **"Logs"** tab
4. See real-time logs

## Next Steps

1. ✅ Deploy backend to Render
2. ✅ Update frontend API URL
3. ✅ Test form submission
4. ✅ Monitor in Render dashboard
5. ✅ Share live link!

---

**Your backend is now live on Render!** 🚀
