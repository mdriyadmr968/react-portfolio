export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  highlights?: string[];
  workplaceContributionNote?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  githubClient?: string;
  githubServer?: string;
  featured: boolean;
  demoCredentials?: {
    email: string;
    otp: string;
    note: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "work" | "education";
  badge: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    icon?: string;
    level?: string;
  }[];
}

export const siteConfig = {
  name: "Mohammad Syied Bin Salim",
  shortName: "Syied",
  monogram: "SB",
  role: "Software Engineer",
  tagline: "Software Engineer • Enterprise SaaS • Web3 • AI",
  bio: "Software Engineer with 3+ years of experience engineering enterprise multi-tenant SaaS ERP platforms, fintech solutions (crypto wallets), and full-stack web applications. Strong in React, Next.js, TypeScript, Node.js, and PostgreSQL (Prisma), with proven production delivery in schema-isolated multi-tenancy, double-entry accounting engines, and AI/LLM integrations. Currently engineering core architecture for ERP at XPONENT InfoSystem.",
  location: "Chattogram, Bangladesh",
  status: "AVAILABLE FOR WORK",
  statusDetail: "Open to High-Impact Full-time & Selected Engineering Contracts",
  email: "syiedbinsalim@gmail.com",
  phone: "+880 1641-560254",
  website: "https://syied.netlify.app",
  resumeUrl: "https://docs.google.com/document/d/1IDR8jyGDgTUm3mcQZxaIggSls9belqTMcZmV-gbfjU8/export?format=pdf",
  resumeViewUrl: "https://docs.google.com/document/d/1IDR8jyGDgTUm3mcQZxaIggSls9belqTMcZmV-gbfjU8/edit?usp=sharing",
  upworkUrl: "https://www.upwork.com/freelancers/~01e3de116879853a55?mp_source=share",
  socials: {
    github: "https://github.com/mdriyadmr968",
    linkedin: "https://linkedin.com/in/syied",
    discord: "https://discord.com/users/mdriyad1743",
    twitter: "https://twitter.com/RIYAD06342231",
    facebook: "https://www.facebook.com/profile.php?id=61554031739106&mibextid=ZbWKwL",
  },
  metrics: [
    { label: "YEARS EXP", value: "3+" },
    { label: "TENANTS SERVED", value: "50+" },
    { label: "MODELS / TENANT", value: "150+" },
  ],
};

export const projects: Project[] = [
  {
    id: "thinpay-wallet",
    title: "ThinPay Wallet",
    category: "Web3 & AI FinTech",
    subtitle: "Multi-Chain Web3 Wallet & AI Copilot",
    description:
      "Architected a self-custody wallet supporting 4 EVM networks and Solana Devnet with client-side AES-256-GCM / PBKDF2 encryption for local BIP-39 mnemonic key storage and direct Viem transaction signing.",
    highlights: [
      "Architected a self-custody wallet supporting 4 EVM networks and Solana Devnet with client-side AES-256-GCM / PBKDF2 encryption for local BIP-39 mnemonic key storage and direct Viem transaction signing.",
      "Integrated ERC-4337 Account Abstraction featuring biometric passkey authentication (WebAuthn), sponsored gasless transactions via paymasters, and multi-recipient batch transfers.",
      "Integrated Google Gemini to deliver pre-flight transaction risk simulations and smart contract vulnerability audits, combined with 0x Protocol swap routing and 1-click ERC-20 token approval revocation.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Viem",
      "Solana Web3.js",
      "ERC-4337",
      "0x Protocol",
      "Express.js",
      "GraphQL",
      "PostgreSQL",
      "Google Gemini",
    ],
    image: "/images/thinpay-preview.svg",
    liveUrl: "https://thinpay-wallet.vercel.app",
    githubUrl: "https://github.com/mdriyadmr968/thinpay-wallet",
    featured: true,
  },
  {
    id: "learnstratum",
    title: "LearnStratum",
    category: "AI & Adaptive EdTech",
    subtitle: "Autonomous AI Curriculum Synthesis & Spaced Repetition",
    description:
      "Engineered an autonomous LMS generating personalized modular curricula using Google Gemini with multi-tier LLM fallback, aggregating vetted lectures and technical documentation via YouTube and Tavily/Jina Reader APIs.",
    highlights: [
      "Engineered an autonomous LMS generating personalized modular curricula using Google Gemini with multi-tier LLM fallback, aggregating vetted lectures and technical documentation via YouTube and Tavily/Jina Reader APIs.",
      "Implemented cognitive spaced repetition using the SuperMemo-2 (SM-2) algorithm (3D flip flashcards, streak tracking) and dense semantic vector search via Google text-embedding-004 and PostgreSQL pgvector.",
      "Delivered full-stack capabilities including an in-lesson streaming AI tutor via Server-Sent Events (SSE), public course sharing/forking, verifiable cryptographic completion certificates, and SHA-256 LLM response caching.",
    ],
    technologies: [
      "Next.js (App Router)",
      "TypeScript",
      "Supabase (PostgreSQL + pgvector)",
      "Google Gemini",
      "YouTube Data API",
      "Tavily",
      "Jina Reader",
    ],
    image: "/images/learnstratum-preview.svg",
    liveUrl: "https://learnstratum.vercel.app",
    githubUrl: "https://github.com/mdriyadmr968/learnstratum",
    featured: true,
  },
  {
    id: "shalik",
    title: "Shalik",
    category: "Edge AI & Mobile",
    subtitle: "On-Device Multimodal Farm Assistant & Edge AI for Bangladesh",
    description:
      "Engineered a 100% offline, air-gapped on-device Android assistant running a quantized Gemma 3n SLM (W4A16 via LiteRT-LM) and an Int8 leaf disease vision classifier (38ms latency, 89.2% Top-1 accuracy) within a 2.14 GB phone RAM budget.",
    highlights: [
      "Engineered a 100% offline, air-gapped on-device Android assistant running a quantized Gemma 3n SLM (W4A16 via LiteRT-LM) and an Int8 leaf disease vision classifier (38ms latency, 89.2% Top-1 accuracy) within a 2.14 GB phone RAM budget.",
      "Implemented sub-millisecond offline RAG (0.33ms SQLite FTS5 BM25 search) citing official agricultural research (DAE, BRRI, BARI), rule-based banned pesticide interceptors, and spoken Bengali voice/TTS interfaces for low-literacy farmers.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "LiteRT (TFLite JSI)",
      "Gemma 3n (W4A16)",
      "EfficientNet-Lite0 (Int8)",
      "op-sqlite (FTS5)",
      "VisionCamera",
    ],
    image: "/images/shalik-preview.svg",
    liveUrl: "https://shalik-nine.vercel.app",
    githubUrl: "https://github.com/mdriyadmr968/shalik",
    featured: true,
  },
  {
    id: "oikikbooks",
    title: "OikikBooks",
    category: "Enterprise SaaS & Accounting",
    subtitle: "Cloud ERP & Double-Entry Accounting Engine for Businesses & Firms",
    description:
      "A modern cloud accounting and ERP platform handling schema-per-tenant isolation, strict double-entry general ledger posting gates, automated bank reconciliation, multi-currency transactions with realized FX settlement, and 23+ real-time financial reports.",
    extendedDescription:
      "Core architecture engineered at XPONENT InfoSystem: Dynamic connection pooling (tenantClientFactory), Next.js 15 Edge Middleware subdomain routing with 2-layer auth guards, and automated multi-tenant migration runner (migrate-tenants.ts) across 50+ tenant databases.",
    workplaceContributionNote: "Workplace Production ERP",
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "Dynamic Pooling",
      "Edge Middleware",
    ],
    image: "/images/oikikbooks-preview.svg",
    liveUrl: "https://oikikbooks.com/",
    featured: true,
  },
  {
    id: "prayogik",
    title: "Prayogik",
    category: "EdTech & Learning Management",
    subtitle: "Complete Digital Marketing & Professional Skill Learning Platform",
    description:
      "A high-impact EdTech learning platform providing live training cohorts, specialized career tracks, workshop enrollment, and Prime membership subscriptions for students and professionals across Bangladesh.",
    extendedDescription:
      "Contributed to core LMS engineering in workplace, developing and optimizing responsive Next.js server-rendered application architecture, building interactive course roadmap discovery interfaces, and enhancing media delivery performance.",
    workplaceContributionNote: "Workplace Production LMS",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
    ],
    image: "/images/prayogik-preview.svg",
    liveUrl: "https://prayogik.com/",
    featured: true,
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-xponent",
    role: "Software Engineer",
    company: "XPONENT InfoSystem (Pvt) Ltd",
    period: "11/2024 — PRESENT",
    location: "Chattogram, Bangladesh",
    type: "work",
    badge: "PRESENT ROLE",
    description:
      "Architecting core multi-tenant enterprise ERP platforms, accounting engines, and HRMS infrastructure with schema-per-tenant PostgreSQL isolation.",
    highlights: [
      "Architected schema-per-tenant multi-tenancy for ERP on PostgreSQL and Prisma (150+ models/tenant), building dynamic connection pooling (tenantClientFactory) and Next.js 15 Edge Middleware subdomain routing with 2-layer auth guards.",
      "Engineered strict double-entry General Ledger (GL) posting gates enforcing debit/credit balance validation, fiscal period locks, multi-currency transaction engine with automated realized FX gain/loss settlement, and raw SQL financial reporting.",
      "Built automated HRMS payroll engine utilizing topological sorting to evaluate salary component dependencies without circular loops, integrating Hikvision biometric terminals via ISAPI (HTTP Digest Auth) and GPS geofenced mobile check-ins.",
      "Implemented granular RBAC system (60+ permissions, custom roles, GRANT/DENY user overrides with strict precedence) and built automated multi-tenant migration runner (migrate-tenants.ts), safely deploying schema updates across 50+ tenant databases.",
    ],
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "PostgreSQL 15+",
      "Prisma ORM (Dual-Schema)",
      "Dynamic Connection Pooling",
      "Edge Middleware",
      "Granular RBAC",
      "Tailwind CSS",
    ],
  },
  {
    id: "exp-tale-sde",
    role: "Software Development Engineer",
    company: "Tale Wallet",
    period: "03/2023 — 06/2024",
    location: "Bangalore, India (Remote)",
    type: "work",
    badge: "FINTECH & WEB3",
    description:
      "Engineered multi-chain self-custody wallet infrastructure, advanced order execution mechanisms, and embeddable Web3 SDKs.",
    highlights: [
      "Built core multi-chain self-custody wallet features (asset balances, transaction history, portfolio tracking) supporting 1000+ active users.",
      "Engineered advanced trading mechanisms including limit, stop-loss, and market orders, securely processing 5000+ trades/month with real-time price feeds.",
      "Integrated 5+ blockchains (Ethereum, Polygon, BNB Chain, etc.) and multiple payment gateways, enabling frictionless token swaps and fiat-to-crypto on-ramping.",
      "Implemented caching and optimized query pipelines with Redis, decreasing API load by 45% and improving wallet render latency by 60%.",
      "Co-authored the Tale Wallet SDK, enabling external web apps to embed wallet connections in under 10 lines of code, adopted by 20+ partner sites.",
    ],
    technologies: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Web3.js",
      "Ethers.js",
      "Redux Toolkit",
      "Redis",
      "Tailwind CSS",
    ],
  },
  {
    id: "edu-bachelor",
    role: "B.Sc. in Computer Science & Engineering",
    company: "Port City International University",
    period: "01/2019 — 02/2023",
    location: "Chattogram, Bangladesh",
    type: "education",
    badge: "DEGREE // CGPA: 3.38",
    description:
      "Graduated with CGPA 3.38 / 4.00. Completed rigorous curriculum spanning Data Structures, Advanced Algorithms, Relational & Distributed Databases, Object-Oriented Software Engineering, and Operating Systems.",
    highlights: [
      "Comprehensive research and project development in scalable web architectures and relational database design",
      "Rigorous problem solving in algorithmic complexity, data structures, and modern software engineering",
      "Graduated with CGPA: 3.38 / 4.00",
    ],
    technologies: ["Data Structures", "Algorithms", "PostgreSQL", "SQL", "OOP", "Software Architecture"],
  },
  {
    id: "cert-prog-hero",
    role: "Complete Web Development",
    company: "Programming Hero",
    period: "2022",
    location: "Professional Certification",
    type: "education",
    badge: "TOP 15% MERIT",
    description:
      "Intensive full-stack web engineering program covering the modern JavaScript and TypeScript ecosystem. Achieved top 15% merit ranking across all cohort participants.",
    highlights: [
      "Built full-stack production projects utilizing MERN stack, Next.js, and Firebase Authentication",
      "Ranked in the top 15% merit standing among course participants",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase Auth"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "SYSTEM DESIGN & ARCHITECTURE",
    iconName: "Layers",
    skills: [
      { name: "Multi-Tenant SaaS (Schema-per-Tenant)", level: "Production Core" },
      { name: "Double-Entry General Ledger", level: "Production Core" },
      { name: "Dynamic Connection Pooling", level: "Expert" },
      { name: "Granular RBAC (60+ Permissions)", level: "Expert" },
    ],
  },
  {
    title: "FRONTEND & MOBILE",
    iconName: "Layout",
    skills: [
      { name: "React", icon: "/images/react.png", level: "Advanced" },
      { name: "Next.js", icon: "/images/nextjs.png", level: "Advanced" },
      { name: "React Native", icon: "/images/react-native.png", level: "Advanced" },
      { name: "TypeScript", icon: "/images/ts.png", level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: "/images/js.png", level: "Advanced" },
      { name: "Redux Toolkit", icon: "/images/redux.png", level: "Proficient" },
      { name: "Tailwind CSS", icon: "/images/tailwind.png", level: "Expert" },
      { name: "shadcn", level: "Proficient" },
      { name: "TanStack Table", level: "Proficient" },
      { name: "HTML5 & CSS3", icon: "/images/html.png", level: "Advanced" },
    ],
  },
  {
    title: "BACKEND & DATABASES",
    iconName: "Database",
    skills: [
      { name: "Node.js", icon: "/images/node.png", level: "Proficient" },
      { name: "Express.js", icon: "/images/express.png", level: "Proficient" },
      { name: "PostgreSQL 15+", level: "Advanced" },
      { name: "Prisma ORM (Dual-Schema)", level: "Advanced" },
      { name: "GraphQL", level: "Proficient" },
      { name: "REST APIs", level: "Advanced" },
      { name: "Supabase", level: "Proficient" },
      { name: "MongoDB", icon: "/images/mongodb.svg", level: "Proficient" },
      { name: "Firebase", icon: "/images/firebase.png", level: "Proficient" },
      { name: "SQL", icon: "/images/sql.png", level: "Advanced" },
    ],
  },
  {
    title: "WEB3 & ARTIFICIAL INTELLIGENCE",
    iconName: "Coins",
    skills: [
      { name: "Viem", level: "Advanced" },
      { name: "Ethers.js", icon: "/images/ethers.png", level: "Advanced" },
      { name: "Web3.js", icon: "/images/web3.png", level: "Advanced" },
      { name: "Solana Web3.js", level: "Proficient" },
      { name: "ERC-4337 Account Abstraction", level: "Advanced" },
      { name: "0x Protocol", level: "Advanced" },
      { name: "Google Gemini API", level: "Advanced" },
      { name: "pgvector (RAG)", level: "Advanced" },
    ],
  },
  {
    title: "TOOLS, TESTING & DEVOPS",
    iconName: "Cpu",
    skills: [
      { name: "Git & GitHub", icon: "/images/git.png", level: "Advanced" },
      { name: "Docker", level: "Containerization" },
      { name: "CI/CD", level: "Automation" },
      { name: "Vitest", level: "Testing" },
      { name: "Playwright", level: "Testing" },
      { name: "Jest", level: "Testing" },
      { name: "Electron", level: "Desktop" },
      { name: "Postman", level: "API Testing" },
      { name: "Vercel", level: "Deployment" },
    ],
  },
];
