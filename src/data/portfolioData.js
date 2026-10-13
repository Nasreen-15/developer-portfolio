/**
 * CENTRALIZED PORTFOLIO DATA FILE - NASREEN MURSAL
 * All personal info, experience, skills, projects, and social links.
 */

export const personalInfo = {
  name: "Nasreen Mursal",
  role: "Computer Engineering Student",
  tagline: "Building scalable backend microservices, robust software systems, and full-stack applications.",
  status: "AVAILABLE FOR OPPORTUNITIES",
  location: "Remote / Global",
  email: "nasreenmursal15@gmail.com",
  github: "https://github.com/Nasreen-15",
  linkedin: "https://www.linkedin.com/in/nasreen-mursal-832008265/",
  resumeUrl: null,
  bio: [
    "I am a Computer Engineering Student passionate about software engineering, backend systems architecture, core computing fundamentals, and mobile application development.",
    "Experienced in building full-stack applications using Python (Django, FastAPI), React, PostgreSQL/SQL, and mobile technologies (Android Studio, React Native).",
    "Driven by solving practical engineering problems through clean, maintainable code, strong CS foundations, and reliable backend integration."
  ],
  stats: [
    { label: "Core Stack", value: "C++ / Python" },
    { label: "Primary Backends", value: "Django / FastAPI" },
    { label: "Databases", value: "PostgreSQL / SQL" },
    { label: "Web & Mobile", value: "React / React Native" }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "University Institute of Engineering & Technology",
      year: "Computer Engineering",
      description: "Focused on Software Engineering, Database Systems, Computer Architecture, Operating Systems, and Mobile Computing."
    }
  ]
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Contact", href: "#contact" }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "Python Developer",
    company: "Digisynergies LLP",
    period: "Professional Experience",
    location: "Remote",
    type: "Python Developer",
    description: "Engineered a custom Request for Quotation (RFQ) tool from scratch, managing backend data pipelines and complex database operations.",
    highlights: [
      "Built a Request for Quotation (RFQ) tool from scratch using Django and PostgreSQL for the backend architecture.",
      "Designed and executed extensive SQL queries and database operations for dynamic pricing calculations and data manipulation.",
      "Worked with React for frontend application views and used Android Studio during development and mobile testing."
    ],
    skills: ["Python", "Django", "PostgreSQL", "SQL", "React", "Android Studio"]
  },
  {
    id: "exp-2",
    role: "Software Development Intern",
    company: "Infosys Springboard",
    period: "Internship",
    location: "Remote / Internship Program",
    type: "Software Engineering Intern",
    description: "Contributed to the end-to-end software development of a multi-platform application across backend, database, web, and mobile.",
    highlights: [
      "Developed backend RESTful APIs using Python and FastAPI for application business logic and data exchange.",
      "Managed application database schemas and relational data operations using PostgreSQL and SQL.",
      "Built responsive web components using React and cross-platform mobile views using React Native.",
      "Contributed across authentication, role-based workflows, data management, testing, debugging, and system integration."
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "SQL", "React", "React Native"]
  },
  {
    id: "exp-3",
    role: "WordPress Intern",
    company: "Niranjan Enterprises",
    period: "6-Week Internship",
    location: "Remote",
    type: "Web Intern",
    description: "Executed practical WordPress web development and web store customization over a 6-week internship.",
    highlights: [
      "Built and customized a Culture Tourism blog platform.",
      "Developed and configured a functional Nescare WooCommerce online e-commerce website."
    ],
    skills: ["WordPress", "WooCommerce", "Web Development", "PHP", "CSS"]
  }
];

export const skillsCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Programming Languages" },
  { id: "core-cs", label: "Core CS Concepts" },
  { id: "backend", label: "Backend & APIs" },
  { id: "database", label: "Databases" },
  { id: "frontend", label: "Frontend & Mobile Development" },
  { id: "tools", label: "Tools & Platforms" }
];

export const skillsData = [
  // Programming Languages
  { name: "C++", category: "languages", proficiency: "Core", exp: "Core Stack", icon: "Cpu", highlight: true },
  { name: "Python", category: "languages", proficiency: "Core", exp: "Core Stack", icon: "Code2", highlight: true },
  { name: "Java", category: "languages", proficiency: "Proficient", exp: "OOP & Android", icon: "FileCode", highlight: false },
  { name: "JavaScript", category: "languages", proficiency: "Proficient", exp: "Web & Mobile", icon: "FileJson", highlight: true },
  { name: "SQL", category: "languages", proficiency: "Core", exp: "Relational Queries", icon: "HardDrive", highlight: true },

  // Core CS Concepts
  { name: "Data Structures and Algorithms (DSA)", category: "core-cs", proficiency: "Proficient", exp: "Problem Solving", icon: "Boxes", highlight: true },
  { name: "Object-Oriented Programming (OOP)", category: "core-cs", proficiency: "Proficient", exp: "Software Design", icon: "Layers", highlight: true },
  { name: "Database Management Systems (DBMS)", category: "core-cs", proficiency: "Proficient", exp: "Relational Theory", icon: "Database", highlight: true },
  { name: "Operating Systems (OS)", category: "core-cs", proficiency: "Familiar", exp: "Core Systems", icon: "Terminal", highlight: false },
  { name: "Computer Networks (CN)", category: "core-cs", proficiency: "Familiar", exp: "Protocols & Sockets", icon: "Network", highlight: false },

  // Backend & APIs
  { name: "Django", category: "backend", proficiency: "Core", exp: "Framework", icon: "Server", highlight: true },
  { name: "FastAPI", category: "backend", proficiency: "Core", exp: "Framework", icon: "Zap", highlight: true },
  { name: "REST APIs", category: "backend", proficiency: "Core", exp: "Architecture", icon: "Lock", highlight: false },

  // Databases
  { name: "PostgreSQL", category: "database", proficiency: "Core", exp: "Relational DB", icon: "Database", highlight: true },
  { name: "MySQL", category: "database", proficiency: "Proficient", exp: "Relational DB", icon: "Layers", highlight: false },
  { name: "SQLite", category: "database", proficiency: "Proficient", exp: "Embedded DB", icon: "HardDrive", highlight: false },

  // Frontend & Mobile Development
  { name: "React.js", category: "frontend", proficiency: "Proficient", exp: "Web UI", icon: "Layout", highlight: true },
  { name: "React Native", category: "frontend", proficiency: "Proficient", exp: "Cross-Platform", icon: "Smartphone", highlight: true },
  { name: "Android Studio / Android Development", category: "frontend", proficiency: "Proficient", exp: "Mobile Dev", icon: "Smartphone", highlight: false },

  // Tools & Platforms
  { name: "Git and GitHub", category: "tools", proficiency: "Proficient", exp: "Version Control", icon: "GitBranch", highlight: true },
  { name: "WordPress and WooCommerce", category: "tools", proficiency: "Familiar", exp: "CMS & Store", icon: "Globe", highlight: false }
];

export const projectsData = [
  {
    id: "emergx",
    title: "EmergX",
    subtitle: "Community Emergency Coordination Platform",
    category: "fullstack",
    featured: true,
    metric: "SOS Dispatch",
    description: "Real-world community emergency coordination platform featuring SOS alerting, role-based access control, backend APIs, and multi-device support.",
    longDescription: "EmergX is a community emergency coordination platform developed to streamline crisis response. It features role-based access workflows, real-time emergency notifications, backend RESTful APIs using FastAPI and PostgreSQL, and integrated cross-platform web and mobile interfaces.",
    tags: ["FastAPI", "PostgreSQL", "Python", "React", "React Native", "SQL", "SOS Workflows"],
    github: "https://github.com/Nasreen-15",
    demo: null,
    badge: "Community Emergency Platform",
    color: "#cf492c"
  },
  {
    id: "super-sonic-glasses",
    title: "Super Sonic Glasses",
    subtitle: "Assistive Wearable Tech for Hearing Impairments",
    category: "mobile",
    featured: true,
    metric: "Bluetooth STT",
    description: "Assistive wearable glasses concept leveraging Android, Bluetooth connectivity, and real-time speech-to-text conversion for individuals with hearing difficulties.",
    longDescription: "Super Sonic Glasses is an assistive wearable technology designed to improve accessibility for individuals with hearing impairments. Using an Android application built in Java, the system receives audio signals over Bluetooth and converts live speech into real-time visual text captions.",
    tags: ["Android", "Java", "Bluetooth", "Speech-to-Text", "Assistive Tech"],
    github: "https://github.com/Nasreen-15",
    demo: null,
    badge: "Assistive Technology",
    color: "#cf492c"
  },
  {
    id: "document-vault",
    title: "Smart AI Document Vault",
    subtitle: "AI-Powered OCR, ML Classification & Semantic Search",
    category: "ai",
    featured: false,
    metric: "Semantic Search",
    description: "AI-powered document management system that extracts text from PDFs and images, automatically classifies documents, generates summaries, and enables natural-language semantic search.",
    longDescription: "Smart AI Document Vault is an AI-powered document management application built using Python and Streamlit. Implements OCR with Pytesseract to extract text from PDF and image files, ML-based document classification (Academic, Professional, Achievement, Other categories), and NLP-based summarization with semantic search using Sentence Transformers. Includes an interactive SQLite database dashboard storing document metadata, OCR text, summaries, upload dates, and file paths.",
    tags: ["Python", "Streamlit", "SQLite", "Scikit-learn", "Sentence Transformers", "NLP", "Pytesseract", "Pandas"],
    github: "https://github.com/Nasreen-15/Smart-AI-Document-Vault",
    demo: "https://smart-ai-document-vault-gz3zgmjdyfpbzocewannwk.streamlit.app/",
    badge: "AI Document Management",
    color: "#cf492c"
  }
];

export const publicationsData = [
  {
    id: "pub-1",
    title: "Super Sonic Glasses",
    journal: "International Journal of Scientific Research & Engineering Trends (IJSRET)",
    issue: "Volume 11, Issue 3, May–June 2025",
    authors: "Deepti Varshney, Ahana Tola, Nasreen Mursal, Pranita Pawar, and Bhumika Patil",
    description: "Research on assistive smart glasses that convert spoken language into text in real time to support people with hearing difficulties.",
    link: "https://ijsret.com/2025/06/05/super-sonic-glasses/",
    linkText: "Read Paper"
  },
  {
    id: "pub-2",
    title: "PolyChat: A Multifunctional Voice Assistant for Inclusive Communication",
    institution: "M E S Wadia College of Engineering",
    date: "5 April 2024",
    source: "LinkedIn",
    description: "Multifunctional voice assistant designed for inclusive communication and accessibility.",
    link: "https://www.linkedin.com/in/nasreen-mursal-832008265/",
    linkText: "View on LinkedIn"
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    date: "5 May 2026",
    link: null
  },
  {
    id: "cert-2",
    title: "Database Management System Part - 2",
    issuer: "Infosys Springboard",
    date: "19 April 2026",
    link: null
  },
  {
    id: "cert-3",
    title: "Data Analytics",
    issuer: "Deloitte",
    date: "July 2025",
    source: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/nasreen-mursal-832008265/"
  },
  {
    id: "cert-4",
    title: "Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation",
    date: "July 2025",
    source: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/nasreen-mursal-832008265/"
  }
];

export const credlyBadgeData = {
  badgeId: "96e24333-f186-423f-a637-9760b8348a72",
  badgeHost: "https://www.credly.com",
  verifyUrl: "https://www.credly.com/badges/96e24333-f186-423f-a637-9760b8348a72",
  iframeWidth: 150,
  iframeHeight: 270
};

export const terminalCommands = {
  help: `Available commands:
  - bio          : Display professional overview
  - skills       : Print core technical stack
  - experience   : List career timeline entries
  - projects     : Output software engineering projects
  - publications : List research publications
  - certs        : View verified certifications & Credly badge
  - contact      : Print email and social profiles
  - clear        : Clear terminal window
  - sudo hire    : Contact Nasreen Mursal`,

  bio: `[NAME]: Nasreen Mursal
[ROLE]: Computer Engineering Student
[FOCUS]: Backend Systems, Core CS Concepts & Full-Stack Application Development
[LOCATION]: Remote / Global`,

  skills: `=== CORE TECHNICAL MATRIX ===
- Programming Languages : C++, Python, Java, JavaScript, SQL
- Core CS Concepts      : DSA, OOP, DBMS, OS, Computer Networks (CN)
- Backend & APIs        : Django, FastAPI, REST APIs
- Databases             : PostgreSQL, MySQL, SQLite
- Frontend & Mobile     : React.js, React Native, Android Studio / Android Development
- Tools & Platforms     : Git and GitHub, WordPress and WooCommerce`,

  experience: `=== WORK EXPERIENCE ===
1. Digisynergies LLP (Python Developer)
   > Built RFQ (Request for Quotation) tool from scratch with Django & PostgreSQL.
2. Infosys Springboard (Software Development Intern)
   > End-to-end full-stack development with FastAPI, PostgreSQL, React & React Native.
3. Niranjan Enterprises (WordPress Intern)
   > Tourism blog & Nescare WooCommerce e-commerce site.`,

  projects: `=== FEATURED PROJECTS ===
1. EmergX [Community Emergency Platform] -> https://github.com/Nasreen-15
2. Super Sonic Glasses [Assistive Wearable] -> https://github.com/Nasreen-15
3. Smart AI Document Vault -> https://github.com/Nasreen-15/Smart-AI-Document-Vault`,

  publications: `=== RESEARCH PUBLICATIONS ===
1. Super Sonic Glasses (IJSRET Vol. 11, Issue 3, May-June 2025)
   > Authors: Deepti Varshney, Ahana Tola, Nasreen Mursal, Pranita Pawar, Bhumika Patil
   > Read: https://ijsret.com/2025/06/05/super-sonic-glasses/
2. PolyChat: A Multifunctional Voice Assistant for Inclusive Communication
   > Institution: M E S Wadia College of Engineering (5 April 2024)
   > Source: https://www.linkedin.com/in/nasreen-mursal-832008265/`,

  certs: `=== CERTIFICATIONS & DIGITAL BADGES ===
- Credly Badge: Artificial Intelligence Fundamentals (IBM SkillsBuild)
  Verify: https://www.credly.com/badges/96e24333-f186-423f-a637-9760b8348a72
- Python Foundation Certification (Infosys Springboard, 5 May 2026)
- Database Management System Part - 2 (Infosys Springboard, 19 April 2026)
- Data Analytics (Deloitte, July 2025)
- Green Skills and Artificial Intelligence (Edunet Foundation, July 2025)`,

  contact: `=== CONTACT DETAILS ===
- Email    : nasreenmursal15@gmail.com
- GitHub   : https://github.com/Nasreen-15
- LinkedIn : https://www.linkedin.com/in/nasreen-mursal-832008265/`
};
