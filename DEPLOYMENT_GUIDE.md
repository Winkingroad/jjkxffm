# FFM x JJK Form Backend - Deployment Guide

## Backend Setup & Deployment

### Files Created:
- `backend/server.js` - Express server
- `backend/package.json` - Dependencies
- `backend/.env.example` - Environment variables template
- `backend/Procfile` - Deployment configuration

---

## Step 1: Get Supabase Service Key

1. Go to [supabase.com](https://supabase.com)
2. Open your project
3. Click **Settings** → **API**
4. Copy **Service Role Key** (NOT the public key)
5. Also copy your **Project URL**

⚠️ **Keep this Service Key SECRET** - Never expose it in public code!

---

## Step 2: Deploy to Railway (Free & Easy)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click **Create new project** → **Deploy from GitHub repo**
4. Select your GitHub repository (containing the backend folder)
5. Railway will auto-detect the Node.js project
6. Add environment variables:
   - Go to your project
   - Click **Variables**
   - Add these:
     - `SUPABASE_URL` = your project URL
     - `SUPABASE_SERVICE_KEY` = your service role key
     - `PORT` = 3000

7. Railway will auto-deploy when you push code to GitHub

---

## Step 3: Get Your Backend URL

After deployment:
1. Go to your Railway project
2. Click the domain (looks like `project-name-xyz.railway.app`)
3. This is your backend URL

---

## Step 4: Update Frontend Code

In your `js/ffmjjk.js`, change:
```javascript
const BACKEND_API = "https://your-railway-domain.railway.app";
```

Replace with your actual Railway domain URL.

---

## Testing Locally (Optional)

```bash
cd backend
npm install
node server.js
```

Then test with:
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "team_name": "Test",
    "contact_person": "John",
    "contact_number": "9876543210",
    "contact_email": "john@example.com",
    "city": "bangalore",
    "college": "DSATM",
    "p1_name": "Player 1",
    "p1_email": "p1@example.com",
    "p1_contact": "9111111111",
    "p1_uid": "123456"
  }'
```

---

## Security Checklist

✅ API key is hidden on backend  
✅ Frontend only sends to your backend  
✅ No sensitive data exposed in client code  
✅ CORS configured for your domain  

---

## Production Ready!

Once deployed, your form is secure and production-ready.
