# Nasreen Mursal — Developer Portfolio

A modern, high-performance personal developer portfolio showcasing software engineering projects, backend systems architecture, research publications, and technical certifications.

Live Demo: Hosted on Vercel

---

## 🚀 Overview

Built with **React 19**, **Vite**, and **Tailwind CSS**, this portfolio features a sleek developer-centric dark theme with an interactive command-line interface (CLI), smooth animations, and rich component showcases.

### ✨ Key Features

- **Interactive CLI Terminal**: Terminal emulator with executable commands (`bio`, `skills`, `experience`, `projects`, `publications`, `certs`, `contact`, `sudo hire`).
- **Featured Projects**: Detailed project cards with category filtering, modal views, metrics, and technology badges:
  - **EmergX**: Community emergency coordination platform with SOS alerting, FastAPI, PostgreSQL, React & React Native.
  - **Super Sonic Glasses**: Assistive wearable technology concept leveraging Android, Bluetooth, and real-time speech-to-text.
  - **Smart AI Document Vault**: AI-powered OCR, classification, and semantic search platform with Streamlit & Python.
- **Research Publications**: Peer-reviewed publications and conference presentations (including IJSRET Volume 11 research paper).
- **Verified Credentials**: Verified IBM SkillsBuild Credly digital badge and professional certifications from Infosys Springboard and Deloitte.
- **Performance Optimized**: Sub-second bundle builds, responsive across mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Structure

```text
developer-portfolio/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Images and local media
│   ├── components/         # Modular UI components
│   │   ├── About.jsx       # About bio, stats, and education
│   │   ├── Contact.jsx     # Contact card & direct dispatch form
│   │   ├── Experience.jsx  # Career timeline & work history
│   │   ├── Footer.jsx      # Footer with quick navigation
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Navbar.jsx      # Sticky navigation & CLI trigger
│   │   ├── ProjectModal.jsx# Detailed project modal view
│   │   ├── Projects.jsx    # Project showcase with filters
│   │   ├── Publications.jsx# Research papers & Credly badges
│   │   ├── Skills.jsx      # Core technical skills matrix
│   │   └── TerminalModal.jsx# Interactive CLI terminal
│   ├── data/
│   │   └── portfolioData.js# Centralized portfolio content & config
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global Tailwind & theme styles
│   └── main.jsx            # Application entry point
├── index.html              # HTML shell with SEO meta tags
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite build configuration
└── README.md               # Project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- `npm` (bundled with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nasreen-15/developer-portfolio.git
   cd developer-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment to Vercel

This project is optimized for zero-configuration deployment on [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Sign in to **Vercel** and click **"Add New" -> "Project"**.
3. Import the `developer-portfolio` repository.
4. Verify the build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Vercel will provision an SSL certificate and assign a live production URL.

---

## 📬 Contact & Connect

- **Name**: Nasreen Mursal
- **Role**: Computer Engineering Student & Developer
- **Email**: [nasreenmursal15@gmail.com](mailto:nasreenmursal15@gmail.com)
- **GitHub**: [github.com/Nasreen-15](https://github.com/Nasreen-15)
- **LinkedIn**: [linkedin.com/in/nasreen-mursal-832008265](https://www.linkedin.com/in/nasreen-mursal-832008265/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
