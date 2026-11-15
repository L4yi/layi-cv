import { Profile, Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const profileData: Profile = {
  name: "Layi",
  role: "Frontend Engineer & Product Designer",
  titles: [
    "Frontend Engineer",
    "Product Designer",
    "React & TypeScript Architect",
    "Software Engineering @ NIIT",
    "Founder of Holdr (In Progress)",
    "Systems Builder"
  ],
  headline: "Building products people rely on, and crafting exceptional digital experiences with clean code.",
  bio: "Creative and technically skilled frontend engineer with hands-on experience building production web applications, enterprise portals, and commercial e-commerce storefronts.",
  detailedBio: "I build clean, responsive, resilient digital products with React, TypeScript, and modern backend architectures. Founder of Holdr (currently in active development), where I lead product design and frontend engineering. From automated school broadsheet computation engines for secondary education to high-conversion commercial storefronts and enterprise ERP dashboards, I focus on intuitive user experiences backed by robust, scalable code.",
  location: "Lagos, Nigeria / Remote",
  email: "muhazoladejo48@gmail.com",
  phone: "+234 810 872 5967",
  status: {
    available: true,
    text: "Available for Frontend & Product Engineering Roles"
  },
  socials: {
    github: "https://github.com/L4yi",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com/L4yiAgain",
  },
  stats: {
    yearsExperience: "3+",
    projectsCompleted: "12+",
    contributions: "500+",
    satisfaction: "100%"
  }
};

export const projectsData: Project[] = [
  {
    id: "mob-eki-ventures",
    title: "MOB Eki Ventures — Luxury Hardware & Storefront",
    tagline: "Commercial e-commerce platform for official hardware & luxury doors in Mushin, Lagos",
    description: "A production commercial storefront engineered for MOB Eki Ventures featuring dynamic multi-category hardware catalogs, localized product search, shopping cart management, and responsive customer checkout.",
    longDescription: "Architected with TypeScript, modern React frontend, Express API server, and Firebase Cloud hosting. Optimized for fast browsing, categorized inventory discovery, and seamless commercial conversions.",
    category: "fullstack",
    tags: ["React", "TypeScript", "Node.js", "Firebase Hosting", "Commerce", "Tailwind CSS"],
    featured: true,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://mob-eki-ventures.web.app/",
    githubUrl: "https://github.com/L4yi/mob-eki-e-store",
    metrics: "mob-eki-ventures.web.app • Live Commercial Store",
    highlights: [
      "Dynamic catalog browsing for luxury doors and high-grade construction hardware",
      "Full-stack shopping cart architecture with localized pricing structures",
      "Live deployment on Firebase Hosting with edge caching and sub-second loading",
      "Touch-optimized responsive layouts tailored for mobile shopping"
    ]
  },
  {
    id: "new-state-portal",
    title: "New State High School Web Portal",
    tagline: "Secondary school management system with automated broadsheets & cryptographic result engine",
    description: "A production-grade school management platform built for Nigerian secondary education standards (WAEC / NECO / BECE). Features multi-role dashboards (Admin, Bursar, Teacher, Student), automated academic broadsheet computation, and official cryptographic report card print generation.",
    longDescription: "Replaces legacy paper logbooks with real-time academic broadsheets, official cryptographic result print engines, and robust anti-tamper security. Incorporates defense-in-depth security: strict RBAC data isolation, IDOR immunity via verified JWT tokens, express-rate-limit brute force defense, and NDPR compliance.",
    category: "fullstack",
    tags: ["React 18", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT & RBAC", "Firebase Hosting"],
    featured: true,
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://newstatehighschool.web.app",
    githubUrl: "https://github.com/L4yi/new-state",
    metrics: "newstatehighschool.web.app • 4 Role Portals • Live Portal",
    highlights: [
      "Custom broadsheet calculation engine handling 1000+ student grade computations",
      "Instant printable/PDF report card generator formatted for official physical paper printing",
      "Defense-in-depth backend security with JWT authentication and strict RBAC isolation",
      "Deployed live on Firebase Hosting with fast worldwide edge distribution"
    ]
  },
  {
    id: "tradeflow-erp",
    title: "TradeFlow — Enterprise Commerce & Inventory ERP",
    tagline: "Comprehensive business management dashboard with real-time analytics, orders & staff oversight",
    description: "A full-featured enterprise management system featuring interactive metrics dashboards, categorized inventory logs, customer relationship tables, staff permission tiers, and automated transaction reports.",
    longDescription: "Engineered with React 19, Vite, and Axios for rapid data interaction. Features specialized views for orders tracking, stock audits, customer management, authentication flows, and financial reporting.",
    category: "fullstack",
    tags: ["React 19", "Vite", "Axios", "REST APIs", "Dashboard Analytics", "Vercel"],
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://tradeflowreact.vercel.app/",
    githubUrl: "https://github.com/L4yi/LayiProjects/tree/main/react-projects/tradeflow",
    metrics: "tradeflowreact.vercel.app • Live Business Suite",
    highlights: [
      "Modular dashboard views: Products, Orders, Staffs, Customers, and Financial Reports",
      "Client-side state management with dynamic filtering and instant pagination",
      "Authentication and password recovery pipeline with token-based session handling",
      "Deployed live with continuous integration on Vercel"
    ]
  },
  {
    id: "instock-mobile",
    title: "InStock Mobile & Inventrion Engine",
    tagline: "Cross-platform warehouse stock tracking system with native Capacitor Android bridge",
    description: "An inventory tracking application engineered to eliminate warehouse friction with real-time SKU auditing, low-stock threshold alerting, and offline-first data caching.",
    longDescription: "Combines modern web UI with Capacitor mobile runtime to provide instant barcode scanning, multi-location stock logging, and resilient local data persistence for warehouse handheld devices.",
    category: "mobile",
    tags: ["Android", "Capacitor", "JavaScript", "Mobile UI", "Offline-First", "Local Storage"],
    featured: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/L4yi/InStock",
    githubUrl: "https://github.com/L4yi/InStock",
    metrics: "Android Mobile App • Capacitor Native Bridge",
    highlights: [
      "Cross-platform compilation targeting Android devices via Capacitor",
      "Instant SKU inventory logging and real-time stock balance adjustments",
      "Offline-first mobile storage syncing with cloud REST endpoints",
      "Touch-optimized handheld interface designed for fast warehouse audits"
    ]
  },
  {
    id: "nova-research",
    title: "Nova Research AI — Literature Platform",
    tagline: "Academic paper discovery engine with automated research indexing & clean reader UI",
    description: "A decoupled research portal engineered for exploring scholarly articles, synthesizing findings, and bookmarking academic literature with responsive search indexing.",
    longDescription: "Features modular frontend and backend architectures designed to facilitate paper discovery, topic clustering, and author citation tracking for student and professional researchers.",
    category: "fullstack",
    tags: ["React", "JavaScript", "Research Engine", "REST API", "Tailwind CSS"],
    featured: false,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/L4yi/nova-research",
    githubUrl: "https://github.com/L4yi/nova-research",
    metrics: "Decoupled Research Engine • Academic Tools",
    highlights: [
      "Interactive search and filter pipelines for scientific literature",
      "Decoupled frontend/backend architecture designed for modular scale",
      "Clean readability-focused layout tailored for long-form technical content"
    ]
  },
  {
    id: "belarjayuk-portal",
    title: "Belarjayuk — Secure Client Authentication Portal",
    tagline: "Hardened user registration, OTP verification, and password recovery engine",
    description: "A dedicated authentication architecture built with robust client-side validation, OTP verification modals, and responsive layout styling.",
    longDescription: "Engineered to demonstrate enterprise authentication UX: multi-factor OTP flows, password visibility toggles, session persistence, and zero layout shift across mobile viewports.",
    category: "frontend",
    tags: ["JavaScript", "HTML5", "CSS3", "OTP Auth", "Security UX"],
    featured: false,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/L4yi/LayiProjects/tree/main/belarjayuk.com",
    githubUrl: "https://github.com/L4yi/LayiProjects/tree/main/belarjayuk.com",
    metrics: "Secure Auth Flow • OTP Modal Bridge",
    highlights: [
      "Complete credential onboarding flow with OTP verification modal",
      "Custom responsive forms with accessible input labeling and error states",
      "Lightweight Vanilla implementation optimized for sub-10ms DOM response"
    ]
  },
  {
    id: "mine-invest",
    title: "MineInvest — Capital & Portfolio Platform",
    tagline: "Full-stack investment engine with OTP authentication, admin audit suite, and ledger backend",
    description: "An investment management system with multi-role admin controls, deposit/withdrawal approval workflows, dynamic NGN currency formatting, and Express/MongoDB backend services.",
    longDescription: "Features separate administrative and client frontends. Clients manage portfolios, deposit funds with OTP confirmations, and monitor investment cycles. Admins utilize a dedicated dashboard for user verifications, transaction audits, plan creation, and dispute resolution.",
    category: "fullstack",
    tags: ["Node.js", "Express", "MongoDB", "OTP Auth", "JWT Security", "Admin Dashboard"],
    featured: false,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/L4yi/mineInvest",
    githubUrl: "https://github.com/L4yi/mineInvest",
    metrics: "Express/MongoDB API • Role-Based Admin Suite",
    highlights: [
      "JWT and OTP authentication flows with password security validators",
      "Full administrative oversight for deposit/withdrawal transaction approvals",
      "MongoDB aggregation pipelines for dynamic financial metrics and user balances"
    ]
  },
  {
    id: "e-commerce-site",
    title: "Modern E-Commerce Storefront",
    tagline: "Lightweight responsive shopping portal with clean product grids and cart UI",
    description: "A fast, modular e-commerce template featuring interactive product cards, price filtering, and fluid shopping cart drawer interactions.",
    longDescription: "Built with clean semantic markup and responsive CSS. Optimized for rapid loading on low-bandwidth mobile connections without relying on bulky third-party libraries.",
    category: "frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Storefront UI"],
    featured: false,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop",
    liveUrl: "https://github.com/L4yi/e-commerce-site",
    githubUrl: "https://github.com/L4yi/e-commerce-site",
    metrics: "Modular Shopping UI • Fast Load Times",
    highlights: [
      "Clean product presentation with category filtering and visual badges",
      "Interactive cart drawer state with live item counter",
      "Mobile-first responsive layout tested across multiple screen dimensions"
    ]
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React 18 / 19 & Next.js", level: 95, experience: "3+ yrs" },
      { name: "TypeScript & Modern JavaScript", level: 93, experience: "3+ yrs" },
      { name: "Tailwind CSS & CSS Modules", level: 96, experience: "3+ yrs" },
      { name: "Responsive & Mobile-First Design", level: 95, experience: "3+ yrs" },
      { name: "Axios, REST APIs & WebSockets", level: 92, experience: "2+ yrs" },
      { name: "State Management & React Hooks", level: 94, experience: "3+ yrs" }
    ]
  },
  {
    title: "Backend & Cloud Services",
    iconName: "Server",
    skills: [
      { name: "Node.js & Express.js", level: 90, experience: "2+ yrs" },
      { name: "Firebase Hosting & Cloud Functions", level: 92, experience: "2+ yrs" },
      { name: "MongoDB Atlas & Data Schemas", level: 86, experience: "2+ yrs" },
      { name: "JWT Authentication & Strict RBAC", level: 90, experience: "2+ yrs" },
      { name: "Vercel & CI/CD Pipelines", level: 92, experience: "2+ yrs" }
    ]
  },
  {
    title: "Mobile & Tools",
    iconName: "Cpu",
    skills: [
      { name: "Capacitor Mobile Runtime (Android)", level: 88, experience: "2+ yrs" },
      { name: "Git, GitHub & Version Control", level: 94, experience: "3+ yrs" },
      { name: "Vite & Modern Build Tooling", level: 94, experience: "2+ yrs" },
      { name: "VS Code & Chrome DevTools", level: 95, experience: "3+ yrs" }
    ]
  },
  {
    title: "Design & Product Thinking",
    iconName: "Cloud",
    skills: [
      { name: "Figma UI Mockups & Wireframing", level: 90, experience: "3+ yrs" },
      { name: "Brand Identity, Typography & Kits", level: 92, experience: "3+ yrs" },
      { name: "Critical Problem-Solving", level: 96, experience: "Core" },
      { name: "Startup & MVP Execution Mindset", level: 95, experience: "Core" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "holdr-founder",
    role: "Founder & Lead Frontend Engineer",
    company: "Holdr",
    location: "Lagos, Nigeria",
    period: "2024 — Present (In Progress)",
    type: "startup",
    description: "Founded and actively engineering Holdr, a next-generation multi-role producer-consumer web platform designed for seamless marketplace discovery, stateful creator tools, and automated commercial workflows.",
    highlights: [
      "Architected responsive multi-role frontend application using React 18, TypeScript, and Tailwind CSS",
      "Designed the complete brand identity, UI layout, custom vector icons, and user flows in Figma",
      "Integrated smooth tab transitions, animated job boards, and real-time order request tracking",
      "Focused on high-performance UX, responsive mobile interactions, and digital commerce pipelines"
    ],
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Figma", "Firebase"]
  },
  {
    id: "new-state-lead",
    role: "Lead Full-Stack Web Portal Architect",
    company: "New State High School",
    location: "Lagos, Nigeria",
    period: "2024 — Present",
    type: "contract",
    description: "Engineered and deployed the official production web portal and academic broadsheet calculation engine for secondary school administration.",
    highlights: [
      "Replaced legacy paper assessment books with real-time digital broadsheets for 1000+ students",
      "Built cryptographic report card print engine formatted for official physical paper printing",
      "Enforced defense-in-depth security: strict RBAC data isolation and IDOR immunity via JWTs",
      "Maintained 99.9% uptime on Firebase Hosting with sub-second page delivery"
    ],
    technologies: ["React 18", "Node.js", "Express", "MongoDB Atlas", "Tailwind CSS", "Firebase Hosting"]
  },
  {
    id: "mob-eki-store",
    role: "Lead Frontend Engineer & Store Architect",
    company: "MOB Eki Ventures",
    location: "Mushin, Lagos",
    period: "2026 — Present",
    type: "contract",
    description: "Developed and launched the official commercial web application and hardware catalog for MOB Eki Ventures.",
    highlights: [
      "Architected dynamic catalog browsing for high-grade construction doors and hardware",
      "Built seamless shopping cart state and mobile-optimized customer checkout interactions",
      "Engineered edge-cached static delivery for fast browsing over mobile data connections",
      "Live deployment at mob-eki-ventures.web.app"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase Hosting", "REST APIs"]
  },
  {
    id: "freelance-design-web",
    role: "Freelance Frontend Developer & UI Consultant",
    company: "Independent Practice",
    location: "Global / Remote",
    period: "2022 — Present",
    type: "freelance",
    description: "Delivering responsive web applications, interactive dashboards (TradeFlow), and digital brand systems for startups and commercial clients.",
    highlights: [
      "Engineered TradeFlow enterprise management dashboard with multi-category analytics",
      "Designed UI mockups in Figma and executed pixel-perfect React translations",
      "Advised client teams on layout best practices, accessible typography, and web performance",
      "Delivered lightweight, mobile-first client web applications with zero layout shift"
    ],
    technologies: ["React", "TypeScript", "Figma", "Tailwind CSS", "Vite", "REST APIs"]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Professional Diploma in Software Engineering",
    institution: "NIIT (National Institute of Information Technology)",
    location: "Nigeria",
    period: "2025 — Present (In Progress)",
    details: "Currently undertaking intensive professional engineering coursework covering Object-Oriented Software Design, Advanced Data Structures & Algorithms, Full-Stack Architecture, and Enterprise Database Systems."
  },
  {
    degree: "SSS3 – Science Track",
    institution: "Secondary Education Curriculum",
    location: "Nigeria",
    period: "Completed",
    details: "Combined rigorous science curriculum with self-directed software development, UI/UX architecture, and modern full-stack web engineering."
  }
];
