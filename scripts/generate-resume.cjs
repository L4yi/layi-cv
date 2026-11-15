const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

function generateResume() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter'
  });

  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 36;
  const contentWidth = pageWidth - (marginX * 2); // 540 pt
  let y = 36;

  // Colors based on @jayhemz crisp monochrome / dark navy aesthetic
  const primaryBlack = [15, 23, 42];     // #0f172a
  const charcoal = [30, 41, 59];         // #1e293b
  const bodyText = [51, 65, 85];         // #334155
  const mutedText = [100, 116, 139];     // #64748b
  const lineDivider = [203, 213, 225];   // #cbd5e1
  const headerLine = [15, 23, 42];       // #0f172a
  const accentNavy = [30, 58, 138];      // #1e3a8a

  function checkPageBreak(neededHeight) {
    if (y + neededHeight > pageHeight - 34) {
      doc.addPage();
      y = 36;
      return true;
    }
    return false;
  }

  function drawSectionHeader(title) {
    checkPageBreak(30);
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...primaryBlack);
    doc.text(title.toUpperCase(), marginX, y);
    y += 4;

    // Full-width horizontal divider line matching @jayhemz architecture
    doc.setDrawColor(...headerLine);
    doc.setLineWidth(0.85);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 9;
  }

  // =========================================================================
  // 1. CENTERED HEADER (Exact @jayhemz Architecture)
  // =========================================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...primaryBlack);
  doc.text('LAYI', pageWidth / 2, y, { align: 'center' });
  y += 14;

  // Contact line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...bodyText);

  const contactText = 'muhazoladejo48@gmail.com   |   Lagos, Nigeria (Open to Remote)   |   +234 810 872 5967   |   github.com/L4yi   |   layi-portfolio.web.app';
  doc.text(contactText, pageWidth / 2, y, { align: 'center' });
  y += 8;

  // Header bottom divider
  doc.setDrawColor(...lineDivider);
  doc.setLineWidth(0.5);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 4;

  // =========================================================================
  // 2. PROFESSIONAL PROFILE
  // =========================================================================
  drawSectionHeader('Professional Profile');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...charcoal);

  const profileParagraph = 
    "Frontend Engineer and Product Designer with 3+ years of production experience building high-resilience web applications, commercial storefronts, and enterprise portals across Nigeria and global remote environments. Combines deep React and TypeScript systems architecture with Figma spatial design, translating complex workflows into fluid, accessible user interfaces. Designed and engineered the mission-critical automated broadsheet and grading portal for New State High School (serving 1,000+ students), deployed the commercial e-commerce storefront for MOB Eki Ventures, architected offline-first Android warehouse logistics with SQLite and barcode scanning for InStock Mobile, and currently engineering the Holdr multi-tier creator marketplace. Deepening computer science rigor, algorithms, and distributed systems architecture through professional software engineering coursework at NIIT.";

  const splitProfile = doc.splitTextToSize(profileParagraph, contentWidth);
  doc.text(splitProfile, marginX, y, { lineHeightFactor: 1.25 });
  y += (splitProfile.length * 10.5) + 2;

  // =========================================================================
  // 3. SELECTED LEADERSHIP & IMPACT (Signature @jayhemz Innovation)
  // =========================================================================
  drawSectionHeader('Selected Leadership & Impact');

  const impactPoints = [
    {
      boldTitle: 'Automated Academic Broadsheet & Grading Engine (New State High School): ',
      desc: 'Engineered an automated grading and broadsheet computation portal replacing legacy paper registers for 1,000+ active students; reduced administrative report generation turnaround by 85% with zero margin of computational error.'
    },
    {
      boldTitle: 'Commercial E-Commerce Storefront (MOB Eki Ventures): ',
      desc: 'Architected and deployed production digital storefront (mob-eki-ventures.web.app) in Mushin, Lagos, delivering dynamic hardware catalogs, cart state management, and edge caching, achieving a 95+ mobile Lighthouse performance rating for 500+ daily visitors.'
    },
    {
      boldTitle: 'Offline-First Warehouse Logistics (InStock Mobile): ',
      desc: 'Built and packaged an offline-first Android application with SQLite local caching and QR/barcode scanning, enabling 100% continuous warehouse auditing uptime across erratic cellular network conditions.'
    },
    {
      boldTitle: 'Holdr Creator & Producer Marketplace: ',
      desc: 'Founded and leading frontend architecture for a multi-tier commerce ecosystem; built bespoke Figma design system with 40+ UI tokens and converted into high-performance TypeScript components and state machines.'
    },
    {
      boldTitle: 'Enterprise Systems & Algorithm Rigor (NIIT Coursework): ',
      desc: 'Undertaking intensive software engineering curriculum focusing on Object-Oriented Design, Big-O algorithm optimization, binary search structures, and relational database normalization.'
    },
    {
      boldTitle: 'Open-Source & Community Reach: ',
      desc: 'Authored 12+ web and mobile solutions, maintaining 500+ GitHub contributions and sharing technical insights and architectural case studies across the developer community as @L4yi / @L4yiAgain.'
    }
  ];

  impactPoints.forEach(point => {
    checkPageBreak(24);

    // Bullet dot
    doc.setFillColor(...primaryBlack);
    doc.circle(marginX + 3.5, y - 2.5, 1.2, 'F');

    // Combine bold title + normal description
    const fullText = point.boldTitle + point.desc;
    const splitLines = doc.splitTextToSize(fullText, contentWidth - 12);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.25);
    doc.setTextColor(...charcoal);

    // Print lines with bold highlight on title
    splitLines.forEach((line, lineIdx) => {
      checkPageBreak(12);
      if (lineIdx === 0 && line.includes(point.boldTitle.trim())) {
        // First line contains title
        const titlePart = point.boldTitle;
        const restPart = line.substring(titlePart.length);

        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...primaryBlack);
        doc.text(titlePart, marginX + 11, y);

        const titleWidth = doc.getTextWidth(titlePart);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...charcoal);
        doc.text(restPart, marginX + 11 + titleWidth, y);
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...charcoal);
        doc.text(line, marginX + 11, y);
      }
      y += 10;
    });

    y += 1.5;
  });

  // =========================================================================
  // 4. PROFESSIONAL EXPERIENCE (@jayhemz Exact Dual-Header Layout)
  // =========================================================================
  drawSectionHeader('Professional Experience');

  const experiences = [
    {
      company: 'HOLDR',
      role: 'Founder & Lead Frontend Engineer',
      period: '2024 — Present',
      location: 'Lagos, Nigeria (In Active Development)',
      bullets: [
        'Conceptualized, designed, and actively engineering Holdr, a multi-tier creator marketplace and productivity ecosystem connecting producers and consumers with real-time transaction workflows.',
        'Architected modern single-page frontend using React 18, TypeScript, Tailwind CSS, and modular state management with sub-second page transitions.',
        'Authored complete brand identity and Figma design system with bespoke typography tokens, iconography, and fluid layout paradigms.',
        'Engineered dynamic producer-consumer onboarding pipelines, interactive job feeds, and stateful dashboard analytics.'
      ],
      tools: 'React 18, TypeScript, Tailwind CSS, Vite, Figma Design Systems, State Machines, Firebase'
    },
    {
      company: 'NEW STATE HIGH SCHOOL',
      role: 'Lead Full-Stack Web Portal Architect',
      period: '2024 — Present',
      location: 'Lagos, Nigeria (Production Contract)',
      bullets: [
        'Engineered and launched official school web portal and automated broadsheet calculation engine for secondary school administration, replacing legacy paper registers for 1,000+ active students.',
        'Constructed high-accuracy report card generation engine formatted for zero-margin physical paper printing with automated GPA computation, grading curves, and verification seals.',
        'Enforced defense-in-depth security: strict RBAC session isolation and IDOR immunity via JWTs and hardened Express/MongoDB API endpoints.',
        'Maintained 99.9% uptime on Firebase Hosting with responsive parent/student dashboards and mobile accessibility.'
      ],
      tools: 'React 18, Node.js, Express, MongoDB Atlas, Tailwind CSS, Firebase Hosting, REST APIs'
    },
    {
      company: 'MOB EKI VENTURES',
      role: 'Lead Frontend Engineer & Store Architect',
      period: '2026 — Present',
      location: 'Mushin, Lagos (Production Storefront)',
      bullets: [
        'Architected and deployed production commercial e-commerce storefront (mob-eki-ventures.web.app) for luxury security doors, structural hardware, and architectural fittings.',
        'Engineered responsive catalog discovery with localized multi-category search, dynamic inventory browsing, and persistent shopping cart state.',
        'Optimized static assets and edge caching, achieving a 95+ mobile Lighthouse performance rating across standard cellular connections.'
      ],
      tools: 'React, TypeScript, Tailwind CSS, Vite, Firebase Hosting, Commercial Commerce Pipelines'
    },
    {
      company: 'INSTOCK MOBILE',
      role: 'Lead Frontend & Mobile Application Engineer',
      period: '2025 — 2026',
      location: 'Lagos, Nigeria',
      bullets: [
        'Engineered offline-first warehouse inventory and stock auditing application designed for real-time warehouse scanning without persistent internet connectivity.',
        'Implemented local SQLite persistence and optimistic UI updates, synchronizing queued inventory operations automatically when connectivity resumes.',
        'Built and distributed standalone Android APK packages (InStock-warehouse-v1.0.4.apk) with integrated camera QR/barcode scanning.'
      ],
      tools: 'React, Capacitor Android Bridge, SQLite, Barcode Scanning SDK, Offline-First Architecture'
    },
    {
      company: 'INDEPENDENT ENGINEERING & UI PRACTICE',
      role: 'Frontend Developer & UI Consultant',
      period: '2022 — Present',
      location: 'Remote / Global',
      bullets: [
        'Engineered TradeFlow ERP (tradeflowreact.vercel.app), a cloud commerce and supply chain management system with real-time inventory charting.',
        'Built Nova Research AI, an academic literature platform with automated paper summarization and citation synthesis.',
        'Consulted with startup teams to refine UI architecture, eliminate cumulative layout shifts (CLS), and accelerate MVP launches.'
      ],
      tools: 'React, TypeScript, Figma, Tailwind CSS, Vite, REST APIs, Vercel CI/CD'
    }
  ];

  experiences.forEach(exp => {
    checkPageBreak(52);

    // Line 1: COMPANY NAME (Bold, Left) .......... Location (Right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(...primaryBlack);
    doc.text(exp.company, marginX, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...mutedText);
    const locWidth = doc.getTextWidth(exp.location);
    doc.text(exp.location, marginX + contentWidth - locWidth, y);
    y += 10.5;

    // Line 2: Role (Bold, Left) .......... Period (Bold, Right)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...accentNavy);
    doc.text(exp.role, marginX, y);

    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, marginX + contentWidth - periodWidth, y);
    y += 10;

    // Bullets
    exp.bullets.forEach(b => {
      checkPageBreak(22);
      doc.setFillColor(...primaryBlack);
      doc.circle(marginX + 3.5, y - 2.5, 1.1, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...charcoal);

      const splitB = doc.splitTextToSize(b, contentWidth - 11);
      doc.text(splitB, marginX + 10, y, { lineHeightFactor: 1.2 });
      y += (splitB.length * 9.5) + 1.5;
    });

    // Tools line (Signature @jayhemz addition)
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.75);
    doc.setTextColor(...primaryBlack);
    const toolsLabel = 'Tools: ';
    doc.text(toolsLabel, marginX + 10, y);

    const toolsLabelW = doc.getTextWidth(toolsLabel);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...mutedText);
    doc.text(exp.tools, marginX + 10 + toolsLabelW, y);
    y += 12;
  });

  // =========================================================================
  // 5. TECHNICAL SKILLS & EXPERTISE (Clean Categorized Matrix)
  // =========================================================================
  drawSectionHeader('Technical Skills & Core Competencies');

  const skillGroups = [
    {
      category: 'Frontend Architecture: ',
      items: 'React 18, TypeScript, JavaScript (ES6+), Next.js, HTML5, CSS3, Tailwind CSS, Vite, Responsive UX'
    },
    {
      category: 'State & Data Systems: ',
      items: 'RESTful APIs, Zustand, Redux Toolkit, Context API, Offline Caching, SQLite, IndexedDB, WebSockets'
    },
    {
      category: 'Product Design & UI/UX: ',
      items: 'Figma Design Systems, Design Tokens, User Journey Mapping, Rapid Prototyping, Wireframing, WCAG 2.1'
    },
    {
      category: 'Cloud, Mobile & Tooling: ',
      items: 'Firebase (Auth, Firestore, Hosting, Storage), Capacitor Android Bridge, Git, GitHub, Node.js, Express, Vercel'
    }
  ];

  skillGroups.forEach(grp => {
    checkPageBreak(15);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.25);
    doc.setTextColor(...primaryBlack);
    doc.text(grp.category, marginX, y);

    const catW = doc.getTextWidth(grp.category);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...charcoal);

    const splitItems = doc.splitTextToSize(grp.items, contentWidth - catW);
    doc.text(splitItems, marginX + catW, y);
    y += (splitItems.length * 10) + 1;
  });
  y += 2;

  // =========================================================================
  // 6. EDUCATION & PROFESSIONAL TRAINING
  // =========================================================================
  drawSectionHeader('Education & Professional Training');

  const education = [
    {
      degree: 'Professional Diploma in Software Engineering (In Progress)',
      institution: 'NIIT (National Institute of Information Technology)',
      period: '2025 — Present',
      details: 'Curriculum covering Object-Oriented Software Design (OOP), Advanced Data Structures & Algorithms, Enterprise Relational Databases (RDBMS/SQL), and Scalable Distributed Systems Architecture.'
    },
    {
      degree: 'Senior Secondary Certificate Examination (SSCE) — Science Track',
      institution: 'Secondary Education Curriculum, Nigeria',
      period: 'Completed',
      details: 'Comprehensive science curriculum complemented by intensive self-directed software development, UI/UX engineering, and modern web application development.'
    }
  ];

  education.forEach(edu => {
    checkPageBreak(32);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.75);
    doc.setTextColor(...primaryBlack);
    doc.text(edu.degree, marginX, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...accentNavy);
    const eduPeriodW = doc.getTextWidth(edu.period);
    doc.text(edu.period, marginX + contentWidth - eduPeriodW, y);
    y += 9.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...mutedText);
    doc.text(edu.institution, marginX, y);
    y += 9;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.75);
    doc.setTextColor(...charcoal);
    const splitEdu = doc.splitTextToSize(edu.details, contentWidth);
    doc.text(splitEdu, marginX, y);
    y += (splitEdu.length * 9) + 4;
  });

  // =========================================================================
  // 7. FOOTER / RUNNING PAGINATION (Exact @jayhemz 1/2, 2/2 style)
  // =========================================================================
  const totalPages = doc.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setDrawColor(...lineDivider);
    doc.setLineWidth(0.5);
    doc.line(marginX, pageHeight - 22, marginX + contentWidth, pageHeight - 22);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...mutedText);
    doc.text('Layi — Curriculum Vitae', marginX, pageHeight - 12);

    const pageNumText = `${i}/${totalPages}`;
    const pageNumWidth = doc.getTextWidth(pageNumText);
    doc.text(pageNumText, marginX + contentWidth - pageNumWidth, pageHeight - 12);
  }

  // Write outputs to public and dist folders
  const publicResumePath = path.resolve('public', 'resume.pdf');
  const publicLayiResumePath = path.resolve('public', 'Layi-Resume.pdf');
  const publicNamedResumePath = path.resolve('public', 'Oladejo-Muhaz-Resume.pdf');
  const publicFullNamedResumePath = path.resolve('public', 'Oladejo-Muhaz-Olayiwola-Resume.pdf');

  const distResumePath = path.resolve('dist', 'resume.pdf');
  const distLayiResumePath = path.resolve('dist', 'Layi-Resume.pdf');
  const distNamedResumePath = path.resolve('dist', 'Oladejo-Muhaz-Resume.pdf');
  const distFullNamedResumePath = path.resolve('dist', 'Oladejo-Muhaz-Olayiwola-Resume.pdf');

  const pdfData = doc.output('arraybuffer');
  const pdfBuffer = Buffer.from(pdfData);

  fs.writeFileSync(publicResumePath, pdfBuffer);
  fs.writeFileSync(publicLayiResumePath, pdfBuffer);
  fs.writeFileSync(publicNamedResumePath, pdfBuffer);
  fs.writeFileSync(publicFullNamedResumePath, pdfBuffer);

  if (fs.existsSync('dist')) {
    fs.writeFileSync(distResumePath, pdfBuffer);
    fs.writeFileSync(distLayiResumePath, pdfBuffer);
    fs.writeFileSync(distNamedResumePath, pdfBuffer);
    fs.writeFileSync(distFullNamedResumePath, pdfBuffer);
  }

  console.log(`Generated resume PDF with ${totalPages} pages.`);
  console.log(`Saved to:`);
  console.log(` - ${publicResumePath}`);
  console.log(` - ${publicLayiResumePath}`);
}

generateResume();
