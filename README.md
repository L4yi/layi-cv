# ⚡ Modern Developer Portfolio Website

A fast, interactive, and high-performance developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**.

![Portfolio Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop)

---

## ✨ Features

- 🎨 **Sleek Aesthetic**: Glowing gradients, glassmorphism, responsive grid layout, and dark/light mode toggle with persistence.
- ⚡ **Lightning Fast**: Built on Vite for instant HMR and tiny production bundle sizes.
- 💻 **Interactive CLI Terminal**: Functional mini-shell for visitors to run `help`, `skills`, `projects`, `whoami`, `sudo hire`, and more.
- 🗂 **Project Showcase & Modal**: Filterable project gallery (Full-stack, AI, Systems, Frontend, Mobile) with detailed modals and live metrics.
- 🧩 **Interactive Bento Grid**: Visual snapshot of location, live timezone, engineering principles, and git activity stats.
- 📄 **Printable / Downloadable Resume Preview**: Built-in resume viewer modal ready for one-click printing or PDF export.
- 📬 **Working Contact Form**: Direct email copy with clipboard feedback, form validation, and responsive social links.
- 🛠 **Single Configuration File**: Edit `src/data/portfolioData.ts` to customize all profile details, projects, skills, and links in minutes.

---

## 🚀 Quick Start

### 1. Install dependencies:
```bash
npm install
```

### 2. Start development server:
```bash
npm run dev
```

### 3. Build for production:
```bash
npm run build
```

### 4. Preview production build:
```bash
npm run preview
```

---

## ⚙️ Customization

All personal information, experience, projects, skills, and testimonials are located in a single file:
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Simply update the variables in that file:
- `profileData`: Name, titles, bio, location, email, and social links.
- `projectsData`: Project titles, descriptions, live demo links, repository URLs, tags, and screenshots.
- `skillsData`: Technical skill categories and proficiency levels.
- `experienceData`: Work history, achievements, and technologies.
- `educationData`: Degrees, universities, and dates.
- `testimonialsData`: Recommendations and quotes.

---

## 🌐 Deployment

You can deploy this project instantly with zero configuration on **Vercel**, **Netlify**, or **GitHub Pages**:

### Vercel:
```bash
npx vercel
```

### Netlify:
```bash
npx netlify deploy --prod
```
