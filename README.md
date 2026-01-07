# FFM x JJK - DOMAIN EXPANSION

A modern esports event registration website for **Free Fire MAX x Jujutsu Kaisen** tournament across Delhi and Mumbai colleges.

## 🎮 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Team Registration Form**: Collect team and player details
- **College Management**: Dynamic city and college selection (Delhi & Mumbai)
- **Secure Backend**: Node.js/Express server with PostgreSQL database
- **Real-time Data Storage**: All submissions stored in Supabase
- **Email Notifications**: Contact form with email validation

## 📋 Tournament Details

### Cities & Colleges

**Delhi**
- NSUT - 16th Jan
- GB Pant - 23rd Jan
- NIT Delhi - 17th Jan
- GTBIT - 20th Jan
- TBD

**Mumbai**
- SIES - 22nd Jan
- ICT Manzar - 29th Jan - 31st Jan
- LS Raheja - 19th Jan
- Pillai - 2nd Feb
- Bharati Vidyapeeth - 6th Feb

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla)
- Responsive Design Framework

### Backend
- Node.js
- Express.js
- PostgreSQL (via Supabase)
- CORS enabled for all origins

### Database
- Supabase (PostgreSQL)
- Real-time data sync

## 📁 Project Structure

```
ffmjjk-gamingberg-com/
├── index.html              # Main page
├── css/                    # Stylesheets
│   ├── bootstrap.min.css
│   ├── style.css
│   └── responsive.css
├── js/                     # JavaScript files
│   ├── ffmjjk.js          # Form handler
│   ├── custom.js
│   └── main.js
├── images/                 # Images and assets
├── fonts/                  # Font files
├── backend/               # Node.js backend
│   ├── server.js          # Express server
│   ├── package.json       # Dependencies
│   ├── Procfile           # Deployment config
│   ├── .env.example       # Environment template
│   └── node_modules/      # Dependencies (not committed)
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── DEPLOYMENT_GUIDE.md    # Deployment instructions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-github-repo-url>
cd ffmjjk-gamingberg-com
```

2. **Setup Backend**
```bash
cd backend
npm install
```

3. **Configure Environment**
```bash
cp .env.example .env
```
Then edit `.env` with your Supabase credentials:
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your_service_key_here
PORT=3000
```

4. **Start Backend Server**
```bash
npm start
# or for development with auto-reload
npm run dev
```

5. **Open Frontend**
- Open `index.html` in your browser
- Or serve with a local server:
```bash
python -m http.server 8000
# or
npx serve
```

## 📝 Registration Form

The form collects:
- **Team Details**: Name, Contact Person, Phone, Email
- **Location**: City, College
- **Player Details**: 4 players with Name, Email, Contact, UID
- **Substitute**: Optional substitute player

All data is securely stored in PostgreSQL via Supabase.

## 🔧 API Endpoints

### POST /api/register
Submits registration data to the database.

**Request Body:**
```json
{
  "team_name": "string",
  "contact_person": "string",
  "contact_number": "string",
  "contact_email": "string",
  "city": "string",
  "college": "string",
  "p1_name": "string",
  "p1_email": "string",
  "p1_contact": "string",
  "p1_uid": "string",
  "p2_name": "string",
  "p2_email": "string",
  "p2_contact": "string",
  "p2_uid": "string",
  "p3_name": "string",
  "p3_email": "string",
  "p3_contact": "string",
  "p3_uid": "string",
  "p4_name": "string",
  "p4_email": "string",
  "p4_contact": "string",
  "p4_uid": "string",
  "sub_name": "string",
  "sub_email": "string",
  "sub_contact": "string",
  "sub_uid": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration saved successfully!",
  "data": { ... }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Small Tablets**: 481px - 768px
- **Tablets/iPad**: 769px - 1024px
- **Desktop**: 1025px - 1440px
- **Extra Large**: 1440px+

## 🔐 Security

- Supabase Service Key stored in backend environment variables
- API key never exposed to client
- CORS configured for secure cross-origin requests
- Input validation on backend
- PostgreSQL prevents SQL injection

## 📤 Deployment

### Deploying to Railway

1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. Connect GitHub repository
4. Add environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY`
   - `PORT`

5. Railway auto-deploys on push
6. Get your deployment URL and update `BACKEND_API` in `js/ffmjjk.js`

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Email**: support@upthrustesports.com  
**Phone**: +91 8423652938

## 📄 License

This project is proprietary and owned by Upthrust Esports.

## 🎯 Roadmap

- [ ] Email notifications on registration
- [ ] Admin dashboard for registrations
- [ ] Real-time leaderboard
- [ ] Social media integration
- [ ] Mobile app

---

**Made with ❤️ for FFM x JJK: Domain Expansion Tournament**
# JJKXFFM
# jjkxffm
