# Quick Start Guide for Developers

## 🏃 5-Minute Setup

### Step 1: Clone & Install
```bash
git clone <repo-url>
cd ffmjjk-gamingberg-com/backend
npm install
```

### Step 2: Configure Environment
```bash
cp .env.example .env
```

Edit `.env` with your Supabase credentials:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_secret_key
PORT=3000
```

Get these from:
1. Go to [app.supabase.com](https://app.supabase.com)
2. Open your project
3. Settings → API
4. Copy Project URL and Service Role Key

### Step 3: Start Backend
```bash
npm start
```

You should see:
```
Server running on port 3000
```

### Step 4: Test Frontend
Open `index.html` in your browser or use:
```bash
# From project root, in another terminal
npx serve
```

## 🧪 Testing the Form

1. Fill out the registration form
2. Click "Register"
3. Check console for success message
4. Verify data in Supabase:
   - Go to [app.supabase.com](https://app.supabase.com)
   - Open your project
   - Click "Table Editor"
   - Click "registrations" table
   - New rows should appear

## 📊 Database Schema

The `registrations` table has these columns:
- `id` - Auto-increment primary key
- `created_at` - Timestamp
- `team_name` - Team name
- `contact_person` - Contact person name
- `contact_number` - Phone number
- `contact_email` - Email address
- `city` - Selected city
- `college` - Selected college
- `p1_name`, `p1_email`, `p1_contact`, `p1_uid` - Player 1
- `p2_name`, `p2_email`, `p2_contact`, `p2_uid` - Player 2
- `p3_name`, `p3_email`, `p3_contact`, `p3_uid` - Player 3
- `p4_name`, `p4_email`, `p4_contact`, `p4_uid` - Player 4
- `sub_name`, `sub_email`, `sub_contact`, `sub_uid` - Substitute

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 3000 is in use
netstat -ano | findstr :3000

# Kill process if needed
taskkill /PID <PID> /F

# Restart
npm start
```

### Form submission fails
1. Check browser console (F12)
2. Ensure backend is running
3. Verify `BACKEND_API` in `js/ffmjjk.js` matches your backend URL
4. Check network tab in DevTools

### Database not receiving data
1. Verify `.env` has correct credentials
2. Check Supabase table exists and is named `registrations`
3. Verify column names match exactly (case-sensitive)
4. Check Supabase permissions/policies

### Port 3000 already in use
```bash
# Use different port
PORT=3001 npm start

# Update frontend in js/ffmjjk.js:
# const BACKEND_API = "http://localhost:3001";
```

## 📝 Making Changes

### Adding New Form Fields
1. Update `index.html` - add input field
2. Update `js/ffmjjk.js` - add to form submission
3. Add column to Supabase table
4. Restart backend

### Changing Cities/Colleges
1. Update `index.html` - city dropdown options
2. Update `js/ffmjjk.js` - collegesByCity object
3. Update location cards section

### Styling Changes
1. Edit `css/style.css` or `css/responsive.css`
2. Refresh browser (Ctrl+Shift+R for hard refresh)

## 🚀 Deploying to Production

### Using Railway (Recommended)
1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. Click "Create new project" → "Deploy from GitHub repo"
4. Select your repository
5. Add variables: `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `PORT`
6. Auto-deploys on push!

### Get Production URL
1. In Railway dashboard, click your project
2. Find the domain URL
3. Update `BACKEND_API` in `js/ffmjjk.js`:
```javascript
const BACKEND_API = "https://your-railway-domain.railway.app";
```

## 📚 Useful Resources

- [Express.js Docs](https://expressjs.com/)
- [Supabase Docs](https://supabase.com/docs)
- [Bootstrap Docs](https://getbootstrap.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 👥 Team Guidelines

- Always work on feature branches
- Write meaningful commit messages
- Test before pushing
- Keep .env secure
- Document any major changes in README

---

**Happy coding! 🚀**
