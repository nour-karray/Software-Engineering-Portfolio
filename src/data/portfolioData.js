const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Nour El Houda Karray",
  firstName: "Nour",
  role: "Étudiante en génie informatique",
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
  Langages: [
    { name: "Python", description: "Développement et data", icon: "python" },
    { name: "Java", description: "Programmation orientée objet", icon: "java" },
    { name: "JavaScript", description: "Développement web", icon: "javascript" },
    { name: "TypeScript", description: "Applications typées", icon: "typescript" },
    { name: "SQL", description: "Requêtes et modélisation", icon: "sql" },
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
  Backend: [
    { name: "Spring Boot", description: "API Java", icon: "spring" },
    { name: "FastAPI", description: "API Python", icon: "api" },
    { name: "Flask", description: "Services Python", icon: "api" },
    { name: "Laravel", description: "Backend web", icon: "laravel" },
  ],
  "Intelligence artificielle": [
    { name: "Machine Learning", description: "Modèles prédictifs", icon: "ml" },
    { name: "Deep Learning", description: "Réseaux de neurones", icon: "dl" },
    { name: "IA générative", description: "Génération assistée par IA", icon: "ml" },
    { name: "LLM", description: "Modèles de langage", icon: "ml" },
    { name: "Data Mining", description: "Exploration de données", icon: "python-data" },
    { name: "scikit-learn", description: "Modèles de Machine Learning", icon: "sklearn" },
    { name: "TensorFlow", description: "Deep Learning", icon: "dl" },
    { name: "PyTorch", description: "Deep Learning", icon: "dl" },
  ],
  "Bases de données": [
    { name: "PostgreSQL", description: "Base relationnelle", icon: "postgresql" },
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
    { name: "SQLite", description: "Base embarquée", icon: "sql" },
  ],
  "Data & BI": [
    { name: "SSIS", description: "Pipelines d’intégration", icon: "etl" },
    { name: "ETL", description: "Extraction, transformation et chargement", icon: "etl" },
    { name: "Data Warehouse", description: "Entrepôts de données", icon: "sql" },
  ],
  Outils: [
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
    id: 9,
    title: "TrainFlow AI",
    year: "2026",
    category: "Web / IA",
    technologies: ["React", "TypeScript", "Vite", "Spring Boot 3", "Java 21", "MySQL", "Flyway", "Ollama", "Qwen2.5"],
    cover: asset("images/projects/document-extraction.svg"),
    github: "https://github.com/nour-karray/trainflow-ai",
    visual: "document-ai",
  },
  {
    id: 4,
    title: "DocIA",
    year: "2026",
    category: "IA / Data",
    technologies: ["Python", "FastAPI", "TypeScript", "Next.js", "Docling", "Ollama", "Qwen2.5", "Gemini API", "SQLite"],
    cover: asset("images/projects/docuai-dashboard.png"),
    github: "https://github.com/nour-karray/AI-Document-Extractor",
    visual: "document-ai",
  },
  {
    id: 7,
    title: "Mission Management Platform",
    year: "2026",
    category: "Web",
    technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL"],
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
    github: "https://github.com/nour-karray/E-sante-app",
    visual: "health",
  },
  {
    id: 3,
    title: "Prédiction de sinistre habitation",
    year: "2025",
    category: "IA / Data",
    technologies: ["Python", "scikit-learn", "Flask", "React"],
    cover: asset("images/projects/prediction-sinistre-dashboard.jpg"),
    github: "",
    visual: "data",
  },
];

export const experiences = [
  {
    company: "EcoCode",
    role: "Stage d'été",
    period: "Juin 2026 — Août 2026",
    description:
      "Développé une plateforme de gestion de formations intégrant des LLM pour générer des programmes et extraire des informations structurées de CV, avec validation des sorties.",
    technologies: ["Python", "FastAPI", "TypeScript", "Next.js", "PostgreSQL", "Ollama", "Qwen2.5"],
  },
  {
    company: "Clinisys",
    role: "PFE de licence",
    period: "Fév. 2024 — Mai 2024",
    description:
      "Conçu et développé une application de gestion des dossiers médicaux permettant le suivi des patients externes, des prescriptions et des diagnostics.",
    technologies: ["JavaScript", "Spring Boot"],
  },
  {
    company: "Web Graphique",
    role: "Stage de Perfectionnement",
    period: "Jan. 2023 — Fév. 2023",
    description:
      "Conçu les maquettes UI/UX avec Figma et développé une application mobile de restauration avec Flutter.",
    technologies: ["Flutter", "Unity", "Figma"],
  },
  {
    company: "Attijari Bank",
    role: "Stage d’Initiation",
    period: "Jan. 2022 — Fév. 2022",
    description:
      "Analysé les systèmes d’information de la banque et synthétisé leur organisation.",
    technologies: [],
  },
];
