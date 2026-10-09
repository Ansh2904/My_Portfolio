# Anshuman Shukla — Modern Developer Portfolio

An interactive, responsive developer portfolio engineered with **React 19**, **Vite 6**, and **Tailwind CSS**, customized from Anshuman Shukla's professional resume.

![Portfolio Preview](https://img.shields.io/badge/Stack-MERN%20%7C%20React%20%7C%20Tailwind%20%7C%20Vite-06b6d4?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981?style=for-the-badge)

---

## 🚀 Key Features

- **Cyber & Dark Glassmorphism Design:** Deep midnight & slate backdrop with neon cyan/indigo accents and frosted glass panels.
- **Dynamic Hero Section:** Rotating role badges (`<Full-Stack Developer />`, `<MERN Specialist />`, `<B.Tech CS AI&ML />`), interactive stats counter (7.58 CGPA, 3+ Projects, 6-Week Internship, 3 Certifications), and simulated code terminal card.
- **Interactive AI Copilot ("Ask Anshuman's AI"):** Built-in conversational AI assistant widget trained on Anshuman's resume. Recruiters can click pre-set questions or type custom queries to explore skills, projects, and contact info in real-time.
- **Work Experience Showcase:** Detailed timeline for the 6-week **Global Next Consulting India** internship under PIIP-2025, with direct links to the live group capstone project ([NewMattyy](https://newmattyy.netlify.app/)).
- **Filterable Projects Matrix:** Categorized project showcase (All, Full Stack, AI & Web, Internship Work) with architecture deep-dive modals, feature breakdowns, and source code links.
- **Comprehensive Skills Grid:** Categorized technology cards (Languages, Frontend, Backend, Databases, Core CS Fundamentals, Tools) with proficiency indicators.
- **Education & Credentials Tabs:** Interactive switcher across B.Tech at Kanpur Institute of Technology, schooling at Shivaji Inter College, verified certifications (Apna College & LinkedIn Learning), and extracurricular achievements.
- **Direct Contact System:** 1-click clipboard copy for Email and Phone with instant visual feedback, social links, and an interactive contact form with confetti celebrations.
- **Full Printable Resume Modal:** Built-in clean resume viewer with 1-click **"Print / Save as PDF"** support.

---

## 🛠️ Project Structure

```text
anshuman-portfolio/
├── index.html                 # HTML shell with Google Fonts & AS Favicon
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite & Tailwind configuration
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Core layout with modal controllers
│   ├── index.css              # Custom styling, glassmorphism, animations
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all resume data
│   └── components/
│       ├── Navbar.jsx         # Sticky blurred navbar with mobile drawer
│       ├── Hero.jsx           # High-impact hero, stats, & code card
│       ├── About.jsx          # Education background & core pillars
│       ├── Experience.jsx     # Global Next Consulting internship timeline
│       ├── Projects.jsx       # Filterable cards & modal triggers
│       ├── ProjectModal.jsx   # Architectural deep-dive modal
│       ├── Skills.jsx         # Categorized skills matrix
│       ├── EducationCertificates.jsx # Education, certifications, & extracurriculars
│       ├── Contact.jsx        # 1-click copy cards & interactive form
│       ├── ResumeModal.jsx    # Formatted printable resume modal
│       ├── AIChatWidget.jsx   # Interactive AI assistant widget
│       ├── Footer.jsx         # Footer with smooth scroll & social links
│       └── Icons.jsx          # SVG brand icons (GitHub, LinkedIn)
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9+

### 2. Navigate & Run
```bash
# Navigate to the project directory
cd "C:\Users\lenovo pro\.gemini\antigravity\scratch\anshuman-portfolio"

# Start the local development server with Hot Module Replacement
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 3. Production Build & Preview
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 1-Click Deployment Options

### Deploy to Vercel
1. Push this folder to a GitHub repository (`git init && git add . && git commit -m "Initial commit"`).
2. Go to [vercel.com](https://vercel.com) -> **Add New Project** -> Import your GitHub repo.
3. Framework Preset: **Vite**. Click **Deploy**!

### Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the generated `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📝 Customization

All personal information, projects, links, skills, and bot responses are organized in a single file:
👉 `src/data/portfolioData.js`

To update your projects, add new certifications, or change social links, simply edit `src/data/portfolioData.js` and the entire portfolio updates automatically!
