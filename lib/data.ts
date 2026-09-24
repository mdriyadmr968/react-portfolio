export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  workplaceContributionNote?: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
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
  tagline: "Building responsive web architectures, decentralized finance solutions, and cross-platform mobile apps.",
  bio: "Versatile Software Developer with deep expertise in the JavaScript ecosystem and 3+ years of experience creating responsive web applications, decentralized finance solutions, and cross-platform mobile apps. Proficient in modern frontend frameworks with a strong focus on React, Next.js, and blockchain integration. Proven track record in developing user-centric solutions for fintech and edtech platforms. Passionate about optimizing performance, enhancing UI/UX, and collaborating in Agile environments.",
  location: "Chittagong, BD & Bangalore, IN",
  status: "AVAILABLE FOR WORK",
  statusDetail: "Open to High-Impact Full-time & Selected Engineering Contracts",
  email: "syiedbinsalim@gmail.com",
  phone: "+8801641560254",
  website: "https://syied.netlify.app",
  resumeUrl: "https://drive.google.com/uc?export=download&id=16CKgOBaMGc0UIhldqtbPrqPqqAcjBnlQ",
  upworkUrl: "https://www.upwork.com/freelancers/~01e3de116879853a55?mp_source=share",
  socials: {
    github: "https://github.com/mdriyadmr968",
    linkedin: "https://www.linkedin.com/in/syied",
    discord: "https://discord.com/users/mdriyad1743",
    twitter: "https://twitter.com/RIYAD06342231",
    facebook: "https://www.facebook.com/profile.php?id=61554031739106&mibextid=ZbWKwL",
  },
  metrics: [
    { label: "YEARS EXP", value: "3+" },
    { label: "SHIPPED APPS", value: "10+" },
  ],
};

export const projects: Project[] = [
  {
    id: "oikikbooks",
    title: "OikikBooks",
    category: "Cloud Accounting & SaaS",
    subtitle: "Simple Accounting Software for Growing Businesses & Multi-Client Firms",
    description:
      "A modern cloud accounting platform for growing businesses and accounting firms. Handles double-entry general ledger, automated bank reconciliation, multi-currency transactions, tax management (VAT/GST), and 23+ real-time financial reports.",
    extendedDescription:
      "I contributed to this production application in my workplace, engineering key modules including financial analytics dashboards, invoice/billing workflows, responsive tabular reports, and Next.js server-rendered application architecture.",
    workplaceContributionNote: "Contributed in workplace",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Node.js"],
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
      "I contributed to this production application in my workplace, developing and optimizing core LMS components with Next.js, building interactive course roadmap discovery interfaces, and enhancing media performance.",
    workplaceContributionNote: "Contributed in workplace",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "REST APIs"],
    image: "/images/prayogik-preview.svg",
    liveUrl: "https://prayogik.com/",
    featured: true,
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-xponent",
    role: "Software Engineer",
    company: "XPONENT InfoSystem (PVT) Ltd",
    period: "11/2024 — PRESENT",
    location: "Chittagong, Bangladesh",
    type: "work",
    badge: "PRESENT ROLE",
    description:
      "Contributing to full-stack engineering and application architecture for enterprise products, including a comprehensive Learning Management System (LMS), multi-tenant ERP platform, and desktop software tools.",
    highlights: [
      "Contributed to the development of a Learning Management Site (LMS) and web and desktop applications",
      "Leveraged Next.js to improve the application’s architecture, facilitating efficient server-side rendering and fast performance",
      "Managed backend data interactions with Prisma, PostgreSQL, and MongoDB, streamlining data processing and improving application robustness",
      "Applied Agile development practices, participating in sprints and retrospectives for continuous team improvement",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "MongoDB", "Node.js", "Electron", "Tailwind CSS"],
  },
  {
    id: "exp-tale-ase",
    role: "Software Development Engineer",
    company: "Tale Wallet",
    period: "05/2023 — 06/2024",
    location: "Bangalore, India",
    type: "work",
    badge: "FINTECH & WEB3",
    description:
      "Engineered secure and user-friendly cryptocurrency wallet functionality, decentralized trading modules, payment gateway integrations, and cross-platform Web3 infrastructure.",
    highlights: [
      "Developed a secure and user-friendly cryptocurrency wallet functionality, allowing users to store, manage, and track their digital asset holdings",
      "Implemented advanced trading features such as limit orders, stop-loss orders, and market orders to provide users with greater control and flexibility over cryptocurrency transactions",
      "Integrated 5+ blockchain networks and multiple payment gateways, enabling seamless trading and fiat-to-crypto conversions",
      "Optimized application performance and scalability by implementing caching mechanisms and efficient data handling",
      "Contributed to the development of the tale-wallet-plugin where anyone can integrate the tale-wallet in their website by adding a few lines of code",
    ],
    technologies: ["React", "Next.js", "React Native", "TypeScript", "Web3.js", "Ethers.js", "Redux", "Tailwind CSS"],
  },
  {
    id: "exp-tale-intern",
    role: "Software Development Intern",
    company: "Tale Wallet",
    period: "03/2023 — 04/2023",
    location: "Bangalore, India",
    type: "work",
    badge: "INTERNSHIP",
    description:
      "Built interactive web interfaces, mastered core React architecture, implemented SSR/SSG workflows with Next.js, and authored reusable component design systems.",
    highlights: [
      "Gained hands-on experience with React for building user interfaces, developing a strong understanding of core concepts and best practices",
      "Explored the capabilities of Next.js for server-rendered applications, implementing pages and components demonstrating SSR and static site generation benefits",
      "Implemented reusable React components using Tailwind CSS, ensuring consistency and maintainability across the website",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Git"],
  },
  {
    id: "edu-bachelor",
    role: "Bachelor of Science in Computer Science and Engineering",
    company: "Port City International University",
    period: "01/2019 — 02/2023",
    location: "Chattogram, Bangladesh",
    type: "education",
    badge: "DEGREE",
    description:
      "Major in Computer Science and Engineering. Completed in-depth curriculum spanning Data Structures, Advanced Algorithms, Database Systems, Object-Oriented Software Engineering, Computer Networks, and Cloud Architecture.",
    highlights: [
      "Comprehensive research and project development in scalable web architectures and relational database design",
      "Rigorous problem solving in algorithmic complexity, C++, Java, and modern web application development",
    ],
    technologies: ["Data Structures", "Algorithms", "DBMS", "Java", "SQL", "OOP", "Software Architecture"],
  },
  {
    id: "cert-prog-hero",
    role: "Complete Web Development",
    company: "Programming Hero",
    period: "2022",
    location: "Online / Professional Certification",
    type: "education",
    badge: "CERTIFICATION",
    description:
      "Intensive full-stack web engineering program with hands-on development in the MERN stack. Achieved Top 15% ranking among all course participants.",
    highlights: [
      "Gained hands-on experience in MERN stack and built projects with React, Next.js, Tailwind CSS, and Firebase Authentication",
      "Achieved Top 15% ranking among course participants",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase Auth"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "FRONTEND & MOBILE",
    iconName: "Layout",
    skills: [
      { name: "React.js", icon: "/images/react.png", level: "Advanced" },
      { name: "Next.js", icon: "/images/nextjs.png", level: "Advanced" },
      { name: "React Native", icon: "/images/react-native.png", level: "Advanced" },
      { name: "TypeScript", icon: "/images/ts.png", level: "Proficient" },
      { name: "JavaScript (ES6+)", icon: "/images/js.png", level: "Advanced" },
      { name: "Tailwind CSS", icon: "/images/tailwind.png", level: "Expert" },
      { name: "ShadCN UI", level: "Proficient" },
      { name: "Redux", icon: "/images/redux.png", level: "Proficient" },
      { name: "Electron", level: "Proficient" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Bootstrap", icon: "/images/bootstrap.png", level: "Proficient" },
      { name: "Jest", level: "Testing" },
    ],
  },
  {
    title: "WEB3 & DECENTRALIZED",
    iconName: "Coins",
    skills: [
      { name: "Web3.js", icon: "/images/web3.png", level: "Advanced" },
      { name: "Ethers.js", icon: "/images/ethers.png", level: "Advanced" },
      { name: "MetaMask", icon: "/images/metamask.png", level: "Advanced" },
      { name: "Multi-Chain (5+ Chains)", icon: "/images/web3.png", level: "Expert" },
      { name: "Limit & Stop-Loss Orders", level: "Advanced" },
      { name: "Payment Gateways", level: "Advanced" },
    ],
  },
  {
    title: "BACKEND & DATABASE",
    iconName: "Database",
    skills: [
      { name: "Node.js", icon: "/images/node.png", level: "Proficient" },
      { name: "Express.js", icon: "/images/express.png", level: "Proficient" },
      { name: "Prisma ORM", level: "Proficient" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", icon: "/images/mongodb.svg", level: "Proficient" },
      { name: "Mongoose", icon: "/images/mongose.png", level: "Proficient" },
      { name: "SQL", icon: "/images/sql.png", level: "Proficient" },
      { name: "Firebase", icon: "/images/firebase.png", level: "Proficient" },
    ],
  },
  {
    title: "DEVOPS, TOOLING & ARCHITECTURE",
    iconName: "Cpu",
    skills: [
      { name: "Docker", level: "Containerization" },
      { name: "CI/CD Pipelines", level: "Automation" },
      { name: "Git & GitHub", icon: "/images/git.png", level: "Advanced" },
      { name: "Agile / Scrum Sprints", level: "Experienced" },
      { name: "Three.js", icon: "/images/three.png", level: "Intermediate" },
      { name: "REST APIs & Caching", icon: "/images/js.png", level: "Advanced" },
    ],
  },
];
