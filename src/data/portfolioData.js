const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Nour El Houda Karray",
  firstName: "Nour",
  role: "Étudiante en 3e année GLID",
  phone: "+216 24 634 008",
  email: "karraynour2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/karray-nour-el-houda",
  github: "https://github.com/nour-karray",
  location: "Sfax, Tunisie",
  portrait: asset("images/nour-portrait.webp"),
  cv: asset("cv-nour-el-houda-karray.pdf"),
  emailLink: "mailto:karraynour2002@gmail.com",
};

export const skills = {
  "Langages de programmation": [
    {
      name: "HTML",
      description: "Structure web",
      icon: "html",
    },
    {
      name: "CSS",
      description: "Design responsive",
      icon: "css",
    },
    {
      name: "JavaScript",
      description: "Interactivité",
      icon: "javascript",
    },
    {
      name: "PHP",
      description: "Backend web",
      icon: "php",
    },
    {
      name: "Java",
      description: "POO",
      icon: "java",
    },
    {
      name: "Python",
      description: "Data & scripts",
      icon: "python",
    },
  ],
  Frontend: [
    {
      name: "React",
      description: "Interfaces modernes",
      icon: "react",
    },
    {
      name: "Angular",
      description: "Applications web",
      icon: "angular",
    },
    {
      name: "Next.js",
      description: "Interfaces React",
      icon: "react",
    },
    {
      name: "Flutter",
      description: "Applications mobiles",
      icon: "flutter",
    },
  ],
  "Backend et API": [
    {
      name: "Laravel",
      description: "Web backend",
      icon: "laravel",
    },
    {
      name: "Spring Boot",
      description: "API Java",
      icon: "spring",
    },
    {
      name: "ASP.NET Web API",
      description: "Services web",
      icon: "api",
    },
    {
      name: "Blazor",
      description: "Interfaces .NET",
      icon: "blazor",
    },
    {
      name: "FastAPI",
      description: "API Python",
      icon: "api",
    },
    {
      name: "Flask",
      description: "Services Python",
      icon: "api",
    },
  ],
  "Bases de données": [
    {
      name: "SQL",
      description: "Requêtes",
      icon: "sql",
    },
    {
      name: "MySQL",
      description: "Base relationnelle",
      icon: "mysql",
    },
    {
      name: "SQL Server",
      description: "Gestion de données",
      icon: "sqlserver",
    },
    {
      name: "MongoDB",
      description: "NoSQL",
      icon: "mongodb",
    },
    {
      name: "PhpMyAdmin",
      description: "Administration BDD",
      icon: "phpmyadmin",
    },
  ],
  "IA, Machine Learning et Data": [
    {
      name: "Machine Learning",
      description: "Modèles prédictifs",
      icon: "ml",
    },
    {
      name: "Deep Learning",
      description: "Réseaux de neurones",
      icon: "dl",
    },
    {
      name: "Scikit-learn",
      description: "Modèles ML",
      icon: "sklearn",
    },
    {
      name: "Python Data",
      description: "Analyse de données",
      icon: "python-data",
    },
    {
      name: "OCR",
      description: "Extraction de texte",
      icon: "ocr",
    },
    {
      name: "SSIS",
      description: "Pipelines ETL",
      icon: "etl",
    },
  ],
  "Outils et technologies": [
    {
      name: "Git",
      description: "Versioning",
      icon: "git",
    },
    {
      name: "GitHub",
      description: "Collaboration",
      icon: "github",
    },
    {
      name: "Figma",
      description: "UI/UX Design",
      icon: "figma",
    },
  ],
};

export const projects = [
  {
    id: 4,
    title: "DocIA",
    year: "2026",
    category: "IA / Data",
    technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "OCR", "Docling", "Qwen2.5", "Gemini", "SQLite"],
    cover: asset("images/projects/docuai-dashboard.png"),
    github: "https://github.com/nour-karray/AI-Document-Extractor",
    visual: "document-ai",
  },
  {
    id: 7,
    title: "Mission Management Platform",
    year: "2026",
    category: "Web",
    technologies: ["Java 21", "Spring Boot 3", "Spring Security", "JPA", "Angular 19", "MySQL", "JWT"],
    cover: asset("images/projects/mission-management-dashboard.png"),
    github: "https://github.com/nour-karray/J2ee",
    visual: "mission-management",
  },
  {
    id: 8,
    title: "HR Analytics Data Warehouse",
    year: "2026",
    category: "BI / Data",
    technologies: ["SQL Server", "SSIS", "PowerShell", "C#", "Blazor", "MudBlazor", "ApexCharts"],
    cover: asset("images/projects/hr-analytics-dashboard.jpg"),
    github: "https://github.com/nour-karray/HR-Analytics-Data-Warehouse",
    visual: "hr-analytics",
  },
  {
    id: 5,
    title: "SmartScan Medical OCR",
    year: "2026",
    category: "Mobile / IA",
    technologies: ["Flutter", "Dart", "Firebase", "Google ML Kit", "OCR", "Flask", "Gemini API"],
    cover: asset("images/projects/smartscan-mlkit-app.webp"),
    coverFit: "contain",
    github: "https://github.com/nour-karray/smartscan-medical-ocr",
    visual: "mobile-ai",
  },
  {
    id: 2,
    title: "Event Planner",
    year: "2026",
    category: "Web",
    technologies: ["Laravel", "PHP", "Blade", "Tailwind CSS", "MySQL"],
    cover: asset("images/projects/event-planner-dashboard.png"),
    github: "https://github.com/nour-karray/Event-planner",
    visual: "event",
  },
  {
    id: 6,
    title: "Drawing App JavaFX",
    year: "2025",
    category: "Java / Architecture",
    technologies: ["Java 17", "JavaFX", "SQLite", "Maven", "JUnit 5", "Design Patterns"],
    cover: asset("images/projects/drawing-javafx-app.png"),
    coverFit: "contain",
    github: "https://github.com/nour-karray/javafx-design-patterns",
    visual: "java-architecture",
  },
  {
    id: 1,
    title: "Plateforme e-Santé",
    year: "2025",
    category: "Web",
    technologies: ["ASP.NET Web API", "Entity Framework", "Blazor", "SQL Server"],
    cover: asset("images/projects/e-sante-dashboard.png"),
    github: "",
    visual: "health",
  },
  {
    id: 3,
    title: "Prédiction de sinistre habitation",
    year: "2025",
    category: "IA / Data",
    technologies: ["Python", "Scikit-learn"],
    cover: asset("images/projects/prediction-sinistre-dashboard.jpg"),
    github: "",
    visual: "data",
  },
];

export const experiences = [
  {
    company: "Institut International de Technologie à Sfax",
    role: "Projet académique — DocIA",
    period: "Février 2026 — Juin 2026",
    description:
      "Conception académique d’une plateforme d’extraction structurée à partir de PDF et d’images, avec OCR, validation des données et traitement par modèles d’IA.",
    technologies: ["Next.js", "FastAPI", "OCR", "Python", "IA"],
  },
  {
    company: "Clinisys",
    role: "PFE de licence",
    period: "Fév. 2024 — Mai 2024",
    description:
      "Développement d’une application de gestion des dossiers médicaux informatisés pour les patients externes.",
    technologies: ["JavaScript", "Spring Boot", "Interface web"],
  },
  {
    company: "Web Graphique",
    role: "Stage de Perfectionnement",
    period: "Jan. 2023 — Fév. 2023",
    description:
      "Conception UI/UX, design et développement d’une application de restauration et de solutions 3D.",
    technologies: ["Flutter", "Unity", "Figma"],
  },
  {
    company: "Attijari Bank",
    role: "Stage d’Initiation",
    period: "Jan. 2022 — Fév. 2022",
    description:
      "Analyse et synthèse des systèmes informatiques de la banque.",
    technologies: [],
  },
];
