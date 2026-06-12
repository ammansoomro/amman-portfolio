export interface Project {
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  codeLink: string;
  projectLink?: string;
  storeLink?: string;
  cover: string;
  screenshots: string[];
}

export const projects: Project[] = [
  {
    title: "Investment Tracker",
    description:
      "A comprehensive full-stack web application for tracking and managing your investment portfolio across multiple asset classes. Built with modern technologies to provide real-time portfolio insights, beautiful visualizations, and intuitive user experience. Features multi-asset tracking including cryptocurrencies (BTC, ETH, SOL, XRP, and more), Pakistan Stock Exchange (PSX) stocks, mutual funds, silver holdings (bars, coins, tola), and VPS (Voluntary Pension Scheme) funds. Includes a real-time portfolio overview with interactive charts, profit/loss tracking, asset breakdown with performance metrics, salary allocation tools, investment calculator, SIP calculator, and automatic crypto price updates via CoinGecko API.",
    tags: ["React", "Node"],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Express.js",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Radix UI",
      "React Router DOM",
      "Axios",
      "CoinGecko API",
    ],
    codeLink: "https://github.com/ammansoomro/investment-tracker",
    cover: "/works/investment-tracker.png",
    screenshots: [
      "/works/investment-tracker.png",
      "/works/investment-tracker-1.png",
      "/works/investment-tracker-2.png",
      "/works/investment-tracker-3.png",
      "/works/investment-tracker-4.png",
      "/works/investment-tracker-5.png",
      "/works/investment-tracker-6.png",
      "/works/investment-tracker-7.png",
      "/works/investment-tracker-8.png",
      "/works/investment-tracker-9.png",
      "/works/investment-tracker-10.png",
      "/works/investment-tracker-11.png",
      "/works/investment-tracker-12.png",
      "/works/investment-tracker-13.png",
      "/works/investment-tracker-14.png",
      "/works/investment-tracker-15.png",
    ],
  },
  {
    title: "GitHub Defect Marker",
    description:
      "A Chrome extension that helps reviewers classify defects while leaving review comments on GitHub pull requests. Tick Mark as Defect in any PR comment box, pick a Severity (Major, Minor, Cosmetic) and a Defect Type (Missing, Extra, Risk-prone, Ambiguous, Inconsistent, Improvement, Factually Incorrect) via one-click pills, and a machine-readable label (#Major:Missing, #Cosmetic:Improvement, ...) is inserted at the start of the comment — with submission blocked until the label is complete and present. Features a live label preview chip, native GitHub theming via Primer CSS variables (light, dark, dark-dimmed, and high-contrast), full accessibility with aria-live validation and reduced-motion support, and zero data collection — no background worker, no network requests, no storage, and zero Chrome permissions. Published on the Chrome Web Store, with a fully static marketing landing page built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.",
    tags: ["Extension", "Next"],
    technologies: [
      "JavaScript",
      "Chrome Extension (Manifest V3)",
      "HTML5",
      "CSS3",
      "GitHub Primer CSS",
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "lucide-react",
    ],
    codeLink: "https://github.com/ammansoomro/github-defect-marker",
    projectLink: "https://defect-marker.vercel.app/",
    storeLink:
      "https://chromewebstore.google.com/detail/github-defect-marker/jjdoipaabbleocomabmeleioohlikdlf",
    cover: "/works/Github-Defect-Marker-1.png",
    screenshots: [
      "/works/Github-Defect-Marker-1.png",
      "/works/Github-Defect-Marker-2.png",
      "/works/Github-Defect-Marker-3.png",
    ],
  },
  {
    title: "PR Analysis Dashboard",
    description:
      "A comprehensive full-stack web application designed as an in-house tool to help development teams monitor and gain deep insights into their pull request workflows, code quality, and team collaboration patterns. Built with modern web technologies, this dashboard transforms raw GitHub and Bitbucket PR data into actionable intelligence through intuitive visualizations, AI-powered analysis, and detailed reporting capabilities. Features multi-platform integration (GitHub OAuth and Bitbucket), comprehensive PR analysis with defect tracking and categorization, team collaboration insights with reviewer analytics, AI-powered insights using OpenAI GPT-4o-mini for natural language analysis, advanced filtering and search capabilities, detailed PR views with defect management, and interactive visualizations powered by Recharts.",
    tags: ["React", "Node"],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Radix UI",
      "React Router DOM",
      "Passport.js",
      "OpenAI API",
      "GitHub API",
      "Bitbucket API",
      "Axios",
    ],
    codeLink: "https://github.com/ammansoomro/pr-analytics-dashboard",
    cover: "/works/PR-Analysis-Dashboard.jpg",
    screenshots: [
      "/works/PR-Analysis-Dashboard.jpg",
      "/works/PR-Analysis-Dashboard-1.jpg",
      "/works/PR-Analysis-Dashboard-2.jpg",
      "/works/PR-Analysis-Dashboard-3.jpg",
      "/works/PR-Analysis-Dashboard-4.jpg",
      "/works/PR-Analysis-Dashboard-5.jpg",
      "/works/PR-Analysis-Dashboard-6.jpg",
      "/works/PR-Analysis-Dashboard-7.jpg",
      "/works/PR-Analysis-Dashboard-8.jpg",
      "/works/PR-Analysis-Dashboard-9.jpg",
    ],
  },
  {
    title: "Cluedo Companion",
    description:
      "A premium digital detective notes sheet for the board game Cluedo — track clues, eliminate suspects, and solve the mystery. Features an interactive deduction grid where each cell cycles through five states (check, cross, maybe, self-held), support for 2-6 players with renamable columns, per-card notes, and a free-form detective journal. The board is analyzed live: cards held by any player are eliminated from the murder envelope, each category shows remaining candidates and flags the answer when exactly one remains, and an overall completion meter tracks progress. Multiple investigations are managed as persistent case files (saved to localStorage via Zustand persist), and any case can be shared with friends through a compact URL-safe encoded link. Wrapped in a detective-themed dark UI with Cinzel, Cormorant Garamond, and Special Elite typography, Framer Motion animations, and optional sound effects.",
    tags: ["Next"],
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zustand",
      "Framer Motion",
      "lucide-react",
    ],
    codeLink: "https://github.com/ammansoomro/cluedo-companion",
    projectLink: "https://cluedo-companion.vercel.app",
    cover: "/works/cluedo-companion.png",
    screenshots: ["/works/cluedo-companion.png"],
  },
  {
    title: "Prompt-O-Phobia",
    description:
      "Empower your creativity using Next.js. Shape unique prompts for advanced AI interaction, revolutionizing AI-driven experiences. Your innovation knows no bounds with this platform. Share and redefine possibilities today!",
    tags: ["Next"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
    codeLink: "https://github.com/ammansoomro/prompt-o-phobia",
    projectLink: "https://prompt-o-phobia.vercel.app/",
    cover: "/works/promptOphobia.jpg",
    screenshots: ["/works/promptOphobia.jpg"],
  },
  {
    title: "Arcade Vault",
    description:
      "A small-scale e-commerce platform built with React, Node.js, Stripe, and Multer to explore payment processing and file uploads. Arcade-Vault is an experimental gaming store where users can browse and purchase controllers, consoles, games, and headsets. This project started as an exploration of Stripe Payments but later expanded to include Multer for file uploads, leading to a broader learning experience.",
    tags: ["React"],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Multer"],
    codeLink: "https://github.com/ammansoomro/arcade-vault",
    cover: "/works/Arcade-Vault.jpg",
    screenshots: [
      "/works/Arcade-Vault.jpg",
      "/works/Arcade-Vault-1.png",
      "/works/Arcade-Vault-2.png",
      "/works/Arcade-Vault-3.png",
      "/works/Arcade-Vault-4.png",
      "/works/Arcade-Vault-5.png",
    ],
  },
  {
    title: "Moviebase",
    description:
      "This project is a YTS clone built using React and its libraries, and it's populated using YTS official API. It provides users with an interface that allows them to browse, search and download movies torrents from YTS website.",
    tags: ["React"],
    technologies: [
      "React",
      "HTML",
      "CSS",
      "styled-components",
      "react-router-dom",
      "framer-motion",
      "react-paginate",
      "@splidejs/react-splide",
      "YTS API",
    ],
    codeLink: "https://github.com/ammansoomro/Moviebase",
    projectLink: "https://moviebase-yts.netlify.app/",
    cover: "/works/Moviebase.jpg",
    screenshots: [
      "/works/Moviebase.jpg",
      "/works/Moviebase-1.png",
      "/works/Moviebase-2.png",
      "/works/Moviebase-3.png",
    ],
  },
  {
    title: "GameWares Hub",
    description:
      "React Native app featuring user authentication, displaying a variety of PlayStation accessories and games. Users can browse, add items to a mock shopping cart, and simulate a purchase experience.",
    tags: ["Native", "React"],
    technologies: ["React Native", "JavaScript", "Authentication", "State Management"],
    codeLink: "https://github.com/ammansoomro/SMD_Project",
    cover: "/works/GameWaresHub.jpg",
    screenshots: [
      "/works/GameWaresHub.jpg",
      "/works/GameWaresHub-1.jpg",
      "/works/GameWaresHub-2.png",
      "/works/GameWaresHub-3.png",
      "/works/GameWaresHub-4.png",
      "/works/GameWaresHub-5.png",
    ],
  },
  {
    title: "Shadow Sensei",
    description:
      "A web-based, Student Management System built using HTML, CSS, PHP, and JavaScript that would store all the data about the students and their courses on a PHP MySQL server.",
    tags: ["Php"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    codeLink: "https://github.com/ammansoomro/ShadowSensei",
    cover: "/works/ShadowSensei.jpg",
    screenshots: [
      "/works/ShadowSensei.jpg",
      "/works/ShadowSensei-1.jpg",
      "/works/ShadowSensei-2.jpg",
      "/works/ShadowSensei-3.jpg",
      "/works/ShadowSensei-5.jpg",
    ],
  },
  {
    title: "Lavender Logs",
    description:
      "A web-based, Blog Post Management System developed using Php, HTML, and JS including MySQL Database as a backend to store all the data. The system consists of different dashboards based on user-role.",
    tags: ["Php"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Role-Based Access"],
    codeLink: "https://github.com/ammansoomro/LavenderLogs",
    cover: "/works/LavenderLogs.jpg",
    screenshots: [
      "/works/LavenderLogs.jpg",
      "/works/LavenderLogs-2.png",
      "/works/LavenderLogs-3.png",
      "/works/LavenderLogs-4.png",
      "/works/LavenderLogs-5.png",
    ],
  },
  {
    title: "Grade Calc",
    description:
      "A GPA calculator web application built using HTML, CSS, and JavaScript. The application allows users to calculate their semester and cumulative GPAs based on the grades they received in their courses — semester GPA from credit hours and grades for up to 8 courses, and cumulative GPA for up to 8 semesters, with a simple, easy-to-use interface and automatic calculation.",
    tags: ["HTML"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    codeLink: "https://github.com/ammansoomro/GradeCalc",
    cover: "/works/GradeCalc.jpg",
    screenshots: ["/works/GradeCalc.jpg", "/works/GradeCalc-1.jpg"],
  },
];
