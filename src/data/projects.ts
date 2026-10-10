export type ProjectCategory = "extension" | "mini-app" | "tool";

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  technologies: string[];
  codeLink: string;
  projectLink?: string;
  storeLink?: string;
  cover: string;
  screenshots: string[];
  category?: ProjectCategory;
  overview: string;
  problem: string;
  solution: string;
  features: ProjectFeature[];
  challenges?: ProjectFeature[];
  outcomes?: string[];
}

function slugify(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const rawProjects: Omit<Project, "slug">[] = [
  {
    title: "Wealth Deck",
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
    projectLink: "https://wealthdeck.vercel.app",
    cover: "/works/wealth-deck/screenshot-1.png",
    screenshots: [
      "/works/wealth-deck/screenshot-1.png",
      "/works/wealth-deck/screenshot-2.png",
      "/works/wealth-deck/screenshot-3.png",
    ],
    overview:
      "Wealth Deck tracks an investor's full net worth in one place: cryptocurrencies, PSX stocks, mutual funds, physical silver holdings, and Voluntary Pension Scheme (VPS) funds — with a single portfolio overview instead of five disconnected spreadsheets.",
    problem:
      "Tracking a diversified portfolio across crypto exchanges, brokerage statements, and physical assets usually means juggling spreadsheets that go stale the moment a price moves.",
    solution:
      "I built a Prisma/PostgreSQL schema that models each asset class on its own terms, then layered a React + Vite frontend on top with automatic crypto price updates from the CoinGecko API and Recharts-driven visualizations for allocation and performance.",
    features: [
      {
        title: "Multi-asset tracking",
        description:
          "Crypto (BTC, ETH, SOL, XRP and more), PSX stocks, mutual funds, silver (bars, coins, tola), and VPS funds, each with asset-specific fields.",
      },
      {
        title: "Real-time portfolio overview",
        description:
          "Interactive charts, profit/loss tracking, and an asset breakdown with performance metrics that update as prices change.",
      },
      {
        title: "Planning tools",
        description:
          "Salary allocation planner, investment calculator, and SIP calculator to model contributions before committing capital.",
      },
      {
        title: "Automatic price sync",
        description:
          "Crypto prices refresh automatically via the CoinGecko API, keeping valuations current without manual entry.",
      },
    ],
    challenges: [
      {
        title: "Modeling heterogeneous assets",
        description:
          "Crypto, equities, funds, and physical metals each have different valuation logic. I normalized them into a common portfolio-value abstraction in Prisma while preserving asset-specific detail views.",
      },
      {
        title: "Keeping valuations live without hammering APIs",
        description:
          "Crypto prices are cached and refreshed on an interval via the CoinGecko API rather than fetched per-request, keeping the dashboard responsive.",
      },
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
    cover: "/works/github-defect-marker/screenshot-1.png",
    screenshots: [
      "/works/github-defect-marker/screenshot-1.png",
      "/works/github-defect-marker/screenshot-2.png",
      "/works/github-defect-marker/screenshot-3.png",
    ],
    category: "extension",
    overview:
      "GitHub Defect Marker adds a structured defect-classification workflow directly into GitHub's PR comment box, so review feedback is consistent and machine-readable without reviewers changing how they write comments.",
    problem:
      "Review comments calling out defects were free text with no consistent severity or category, making it hard to track defect trends across a team.",
    solution:
      "A content script injects a 'Mark as Defect' control into GitHub's native comment box. Reviewers pick a severity (Major, Minor, Cosmetic) and defect type via one-click pills, and the extension inserts a label like #Major:Missing at the start of the comment — blocking submission until the label is complete.",
    features: [
      {
        title: "One-click severity and type pills",
        description:
          "Severity (Major, Minor, Cosmetic) and defect type (Missing, Extra, Risk-prone, Ambiguous, Inconsistent, Improvement, Factually Incorrect) selected via pills.",
      },
      {
        title: "Submission gating",
        description: "Comment submission is blocked until a complete, machine-readable label is present.",
      },
      {
        title: "Live label preview",
        description: "A preview chip shows the exact label that will be inserted before it's committed.",
      },
      {
        title: "Native GitHub theming",
        description: "Styled with GitHub's own Primer CSS variables, supporting light, dark, dark-dimmed, and high-contrast themes.",
      },
      {
        title: "Zero data collection",
        description: "No background worker, no network requests, no storage, and zero Chrome permissions beyond the content script.",
      },
    ],
    challenges: [
      {
        title: "Working within GitHub's DOM without breaking it",
        description:
          "The extension has to inject into GitHub's live comment box without a background worker or network permissions, so detection and insertion rely entirely on scoped DOM observation within the content script.",
      },
    ],
    outcomes: ["Published on the Chrome Web Store."],
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
    cover: "/works/pr-analysis-dashboard/screenshot-1.jpg",
    screenshots: [
      "/works/pr-analysis-dashboard/screenshot-1.jpg",
      "/works/pr-analysis-dashboard/screenshot-2.jpg",
      "/works/pr-analysis-dashboard/screenshot-3.jpg",
      "/works/pr-analysis-dashboard/screenshot-4.jpg",
      "/works/pr-analysis-dashboard/screenshot-5.jpg",
      "/works/pr-analysis-dashboard/screenshot-6.jpg",
      "/works/pr-analysis-dashboard/screenshot-7.jpg",
      "/works/pr-analysis-dashboard/screenshot-8.jpg",
      "/works/pr-analysis-dashboard/screenshot-9.jpg",
      "/works/pr-analysis-dashboard/screenshot-10.jpg",
    ],
    overview:
      "Built at Matrix Systems as an in-house monitoring tool, this dashboard pulls pull-request data from GitHub and Bitbucket and turns it into actionable intelligence for engineering leads: defect trends, reviewer load, and collaboration patterns.",
    problem:
      "PR history lived scattered across GitHub and Bitbucket with no unified view of defect rates, review turnaround, or team collaboration health.",
    solution:
      "I built OAuth integrations for both GitHub and Bitbucket, a Prisma/MySQL pipeline to normalize and store PR data, and an OpenAI GPT-4o-mini powered analysis layer that summarizes patterns in natural language alongside Recharts visualizations.",
    features: [
      {
        title: "Multi-platform integration",
        description: "GitHub OAuth and Bitbucket integration unify PR history from both platforms in one dashboard.",
      },
      {
        title: "Defect tracking and categorization",
        description: "Comprehensive PR analysis with defect tracking and categorization across review cycles.",
      },
      {
        title: "Reviewer analytics",
        description: "Team collaboration insights surface reviewer load and response patterns.",
      },
      {
        title: "AI-powered insights",
        description: "OpenAI GPT-4o-mini generates natural-language analysis of PR trends and code quality signals.",
      },
    ],
    challenges: [
      {
        title: "Normalizing two PR data models",
        description:
          "GitHub and Bitbucket expose pull requests differently. I designed a shared Prisma schema that both OAuth integrations map into, so the rest of the app is platform-agnostic.",
      },
    ],
  },
  {
    title: "Jira Quick Logger",
    description:
      "A Chrome extension that fills your Jira Log Work form's Stage of Introduction, Description, and Fix Versions from your saved defaults, so you only ever type Time Spent. Detects Jira's own Log Work dialog via a MutationObserver and label-text matching — not brittle CSS classes — so it survives Jira version and theme differences, and re-runs on every DOM mutation to keep working across issue navigation and modal close/reopen. Supports multi-value Fix Versions across both native selects and chip-based pickers, and never touches Time Spent, validation, or submission — Jira's own form is left untouched. Defaults live only in chrome.storage.sync: no account, no network requests, no analytics. Toggle auto-fill anytime from the toolbar popup. Published on the Chrome Web Store, with a static marketing landing page built with Next.js 15 and Tailwind CSS.",
    tags: ["Extension", "Next"],
    technologies: [
      "JavaScript",
      "Chrome Extension (Manifest V3)",
      "HTML5",
      "CSS3",
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "lucide-react",
    ],
    codeLink: "https://github.com/ammansoomro/jira-logger",
    projectLink: "https://jira-logger-landing.vercel.app/",
    storeLink:
      "https://chromewebstore.google.com/detail/ihffbbpagemhcgomggjahhpondilabok",
    cover: "/works/jira-quick-logger/screenshot-1.png",
    screenshots: ["/works/jira-quick-logger/screenshot-1.png"],
    category: "extension",
    overview:
      "A small extension that removes the repetitive part of logging Jira work: Stage of Introduction, Description, and Fix Versions are filled from saved defaults, leaving only Time Spent for the user to type.",
    problem:
      "Logging work in Jira means re-typing the same Stage of Introduction, Description, and Fix Versions values dozens of times a week.",
    solution:
      "A content script detects Jira's Log Work dialog via a MutationObserver and label-text matching rather than brittle CSS classes, so it keeps working across Jira version and theme changes, and re-runs on every DOM mutation to survive modal close/reopen and issue navigation.",
    features: [
      {
        title: "Auto-fill from saved defaults",
        description: "Stage of Introduction, Description, and Fix Versions filled automatically; only Time Spent needs typing.",
      },
      {
        title: "Multi-value Fix Versions",
        description: "Supports both native selects and chip-based pickers for Fix Versions.",
      },
      {
        title: "Resilient detection",
        description: "Label-text matching via MutationObserver instead of CSS classes, surviving Jira version and theme differences.",
      },
      {
        title: "Local-only storage",
        description: "Defaults live only in chrome.storage.sync — no account, no network requests, no analytics.",
      },
    ],
    outcomes: ["Published on the Chrome Web Store."],
  },
  {
    title: "DB Mirror — Web Edition",
    description:
      "A refined, browser-based tool for comparing the schema and data of two Microsoft SQL Server databases — a Next.js rewrite of the original PyQt6 desktop tool, reimagined as a fast web app with a guided four-step flow (Connect → Databases → Tables → Compare), live streaming progress, and one-click exports. The stateless comparison engine discovers base tables on both sides and intersects them, performs a schema diff over INFORMATION_SCHEMA.COLUMNS (tables/columns present on one side only, plus type mismatches), and runs a per-table data diff: it looks up the real primary key from INFORMATION_SCHEMA.KEY_COLUMN_USAGE to match rows into source-only, target-only and changed (per-column) sets, falling back to a multiset diff on the normalized row when no PK exists. All values are normalized to strings (dates → ISO, buffers → hex) so 1 vs 1.0 never registers as a false difference, volatile columns are excluded, and tables over 100k rows are flagged as sampled. Each table's result streams over Server-Sent Events as it completes, and reports export to self-contained HTML, CSV, or JSON. Comparison is strictly read-only, identifiers are bracket-escaped, values use bound parameters, and credentials are entered per session and never persisted — with a demo mode to explore the full UI without a live database.",
    tags: ["Tool", "Next"],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "mssql (tedious)",
      "SQL Server",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Server-Sent Events",
    ],
    codeLink: "https://github.com/ammansoomro/db-mirror",
    projectLink: "https://db-mirror.vercel.app",
    cover: "/works/db-mirror/screenshot-1.png",
    screenshots: [
      "/works/db-mirror/screenshot-1.png",
      "/works/db-mirror/screenshot-2.png",
      "/works/db-mirror/screenshot-3.png",
      "/works/db-mirror/screenshot-4.png",
    ],
    category: "tool",
    overview:
      "DB Mirror compares two SQL Server databases — schema and data — through a guided Connect → Databases → Tables → Compare flow, streaming per-table results as they complete instead of blocking on one giant comparison job.",
    problem:
      "The original DB Mirror was a PyQt6 desktop tool. A web rewrite needed to match its correctness guarantees (real primary keys, type-aware diffs) while staying read-only and safe to point at production credentials.",
    solution:
      "The stateless comparison engine discovers base tables on both sides, diffs INFORMATION_SCHEMA.COLUMNS for schema differences, and for data diffs looks up the real primary key from INFORMATION_SCHEMA.KEY_COLUMN_USAGE to match rows — falling back to a multiset diff on the normalized row when no PK exists. Every value is normalized to a string (dates to ISO, buffers to hex) so type coercion never produces a false positive, and each table's result streams over Server-Sent Events as it finishes.",
    features: [
      {
        title: "Guided four-step flow",
        description: "Connect → Databases → Tables → Compare, with live streaming progress per table.",
      },
      {
        title: "Schema and data diff",
        description: "Schema diff over INFORMATION_SCHEMA.COLUMNS plus a per-table data diff keyed on the real primary key.",
      },
      {
        title: "Safe by construction",
        description: "Strictly read-only; identifiers are bracket-escaped, values use bound parameters, and credentials are never persisted.",
      },
      {
        title: "Exports",
        description: "Reports export to self-contained HTML, CSV, or JSON.",
      },
      {
        title: "Demo mode",
        description: "Explore the full UI without a live database connection.",
      },
    ],
    challenges: [
      {
        title: "Avoiding false positives from type coercion",
        description:
          "1 vs 1.0 or a date in two different formats should never register as a difference. Every compared value is normalized to a canonical string representation before comparison.",
      },
      {
        title: "Large tables",
        description: "Tables over 100k rows are flagged as sampled rather than silently truncated, so results stay honest about coverage.",
      },
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
    cover: "/works/cluedo-companion/screenshot-1.png",
    screenshots: ["/works/cluedo-companion/screenshot-1.png"],
    category: "mini-app",
    overview:
      "Cluedo Companion replaces the paper notes sheet with a live deduction grid: as players mark cards, the board analyzes who can be eliminated and flags the answer once a category narrows to one candidate.",
    problem:
      "Paper Cluedo notes sheets don't do any deduction for you — players have to manually cross-reference every mark.",
    solution:
      "Each grid cell cycles through five states (check, cross, maybe, self-held) across 2-6 renamable player columns. The board is analyzed live: any card held by a player is eliminated from the murder envelope, and each category shows its remaining candidates with a completion meter tracking overall progress.",
    features: [
      {
        title: "Interactive deduction grid",
        description: "Five-state cells across 2-6 renamable player columns, with per-card notes.",
      },
      {
        title: "Live board analysis",
        description:
          "Cards held by any player are automatically eliminated from the envelope; a category is flagged solved once exactly one candidate remains.",
      },
      {
        title: "Persistent case files",
        description:
          "Multiple investigations saved to localStorage via Zustand persist, each shareable through a compact URL-safe encoded link.",
      },
      {
        title: "Detective-themed UI",
        description: "Cinzel, Cormorant Garamond, and Special Elite typography with Framer Motion animations and optional sound effects.",
      },
    ],
  },
  {
    title: "Prompt-O-Phobia",
    description:
      "Empower your creativity using Next.js. Shape unique prompts for advanced AI interaction, revolutionizing AI-driven experiences. Your innovation knows no bounds with this platform. Share and redefine possibilities today!",
    tags: ["Next"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
    codeLink: "https://github.com/ammansoomro/prompt-o-phobia",
    projectLink: "https://prompt-o-phobia.vercel.app/",
    cover: "/works/prompt-o-phobia/screenshot-1.png",
    screenshots: [
      "/works/prompt-o-phobia/screenshot-1.png",
      "/works/prompt-o-phobia/screenshot-2.png",
      "/works/prompt-o-phobia/screenshot-3.png",
    ],
    overview:
      "Prompt-O-Phobia is a Next.js platform for crafting and sharing structured prompts for AI interaction.",
    problem: "Good prompts are often one-off and hard to reuse or share in a structured way.",
    solution:
      "Built a Next.js and TypeScript frontend for composing, saving, and sharing prompts, styled with Tailwind CSS.",
    features: [
      {
        title: "Prompt composition",
        description: "A focused interface for shaping prompts for AI interaction.",
      },
      {
        title: "Sharing",
        description: "Share crafted prompts with others on the platform.",
      },
    ],
  },
  {
    title: "Arcade Vault",
    description:
      "A small-scale e-commerce platform built with React, Node.js, Stripe, and Multer to explore payment processing and file uploads. Arcade-Vault is an experimental gaming store where users can browse and purchase controllers, consoles, games, and headsets. This project started as an exploration of Stripe Payments but later expanded to include Multer for file uploads, leading to a broader learning experience.",
    tags: ["React"],
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe", "Multer"],
    codeLink: "https://github.com/ammansoomro/arcade-vault",
    cover: "/works/arcade-vault/screenshot-1.jpg",
    screenshots: [
      "/works/arcade-vault/screenshot-1.jpg",
      "/works/arcade-vault/screenshot-2.png",
      "/works/arcade-vault/screenshot-3.png",
      "/works/arcade-vault/screenshot-4.png",
      "/works/arcade-vault/screenshot-5.png",
      "/works/arcade-vault/screenshot-6.png",
    ],
    overview:
      "Arcade Vault is an experimental gaming e-commerce storefront where users browse and purchase controllers, consoles, games, and headsets.",
    problem: "The project started as a focused exploration of Stripe Payments integration.",
    solution:
      "Built a React/Vite storefront backed by an Express and MongoDB API, integrating Stripe for checkout and later expanding to Multer for file uploads as the scope grew.",
    features: [
      { title: "Stripe checkout", description: "End-to-end payment processing for cart purchases." },
      { title: "File uploads via Multer", description: "Product image uploads handled through Multer middleware." },
      { title: "Product catalog", description: "Browse controllers, consoles, games, and headsets." },
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
    cover: "/works/moviebase/screenshot-1.jpg",
    screenshots: [
      "/works/moviebase/screenshot-1.jpg",
      "/works/moviebase/screenshot-2.png",
      "/works/moviebase/screenshot-3.png",
      "/works/moviebase/screenshot-4.png",
    ],
    overview: "Moviebase recreates the YTS browsing experience in React, backed entirely by the public YTS API.",
    problem: "Wanted a cleaner, faster interface for browsing YTS's torrent catalog.",
    solution:
      "Built a React SPA with styled-components and react-router-dom, using @splidejs/react-splide for carousels and framer-motion for transitions, consuming the YTS API directly.",
    features: [
      { title: "Browse and search", description: "Search and filter the YTS movie catalog." },
      { title: "Torrent downloads", description: "Direct access to torrent links exposed by the YTS API." },
    ],
  },
  {
    title: "Shadow Sensei",
    description:
      "A web-based, Student Management System built using HTML, CSS, PHP, and JavaScript that would store all the data about the students and their courses on a PHP MySQL server.",
    tags: ["Php"],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    codeLink: "https://github.com/ammansoomro/ShadowSensei",
    cover: "/works/shadow-sensei/screenshot-1.jpg",
    screenshots: [
      "/works/shadow-sensei/screenshot-1.jpg",
      "/works/shadow-sensei/screenshot-2.jpg",
      "/works/shadow-sensei/screenshot-3.jpg",
      "/works/shadow-sensei/screenshot-4.jpg",
      "/works/shadow-sensei/screenshot-5.jpg",
    ],
    overview: "Shadow Sensei is a student management system for storing and organizing student and course records.",
    problem: "Needed a straightforward system for tracking students and the courses they're enrolled in.",
    solution: "Built a classic PHP/MySQL CRUD application with an HTML/CSS/JavaScript frontend.",
    features: [
      { title: "Student records", description: "Store and manage student data." },
      { title: "Course tracking", description: "Associate students with their enrolled courses." },
    ],
  },
];

export const projects: Project[] = rawProjects.map((p) => ({ ...p, slug: slugify(p.title) }));

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
