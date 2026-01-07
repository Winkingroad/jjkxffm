# Pushing to GitHub - Step by Step

## Prerequisites
- GitHub account created
- Repository created on GitHub
- Git installed on your system

## Step 1: Initialize Git (First Time Only)

Open PowerShell and navigate to your project:
```powershell
cd d:\saveweb2zip-com-ffmjjk-gamingberg-com
```

Initialize Git:
```powershell
git init
git config user.name "Your Full Name"
git config user.email "your.email@github.com"
```

## Step 2: Stage All Files

```powershell
git add .
```

Verify files (should NOT include node_modules or .env):
```powershell
git status
```

## Step 3: Create First Commit

```powershell
git commit -m "Initial commit: FFM x JJK registration website with Supabase integration"
```

## Step 4: Add Remote Repository

Replace `YOUR_USERNAME` and `REPO_NAME`:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

Example:
```powershell
git remote add origin https://github.com/upthrust/ffmjjk-registration.git
```

## Step 5: Rename Branch to Main

```powershell
git branch -M main
```

## Step 6: Push to GitHub

```powershell
git push -u origin main
```

You'll be prompted to login with GitHub credentials.

## ✅ Verify Success

1. Go to `https://github.com/YOUR_USERNAME/REPO_NAME`
2. You should see all your files
3. README.md should display on the page
4. Check that `backend/node_modules` and `.env` are NOT there

## 📝 Future Commits

After the first push, future commits are simple:

```powershell
# Make your changes...

git add .
git commit -m "Your commit message"
git push
```

## 🌿 Creating Branches (Optional but Recommended)

For team development:

```powershell
# Create development branch
git checkout -b development
git push -u origin development

# Create feature branch
git checkout -b feature/feature-name
# ... make changes ...
git add .
git commit -m "Add feature-name"
git push -u origin feature/feature-name
# Then create Pull Request on GitHub
```

## 🔄 Syncing with Remote

If others are working on the project:

```powershell
# Fetch latest changes
git fetch origin

# Merge latest main
git merge origin/main

# Or pull (fetch + merge in one)
git pull origin main
```

## ⚠️ Common Issues & Solutions

### Error: "fatal: not a git repository"
```powershell
# Make sure you're in the project directory
cd d:\saveweb2zip-com-ffmjjk-gamingberg-com
# Then run init again
git init
```

### Error: "fatal: destination path ... already exists and is not an empty directory"
```powershell
# You already have a git repo, just add remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

### Error: "remote origin already exists"
```powershell
# View current remotes
git remote -v

# Remove if wrong
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

### Authentication Failed
```powershell
# Use personal access token instead of password
# Go to GitHub Settings → Developer Settings → Personal Access Tokens
# Generate new token with 'repo' scope
# Use token as password when prompted
```

### .env file was accidentally committed
```powershell
# Remove it (don't delete locally)
git rm --cached backend/.env

# Commit the removal
git commit -m "Remove .env file from tracking"

# Push
git push

# Verify .env is in .gitignore
```

## 🎉 You're Done!

Your project is now on GitHub and ready for:
- ✅ Version control
- ✅ Team collaboration
- ✅ Deployment via Railway
- ✅ Backup
- ✅ Sharing with others

## Next Steps

1. **Set up Railway deployment** (see DEPLOYMENT_GUIDE.md)
2. **Configure GitHub Actions** for CI/CD (optional)
3. **Share repo link** with your team
4. **Create GitHub Issues** for tasks
5. **Use Pull Requests** for code review

---

**Project successfully pushed to GitHub! 🚀**
