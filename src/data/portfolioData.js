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
  languages: [
    { name: "Python", description: "Développement et IA", icon: "python" },
    { name: "Java", description: "Développement logiciel", icon: "java" },
    { name: "JavaScript", description: "Applications web", icon: "javascript" },
    { name: "TypeScript", description: "Applications typées", icon: "javascript" },
    { name: "SQL", description: "Requêtes de données", icon: "sql" },
  ],
  software: [
    { name: "Spring Boot", description: "API Java", icon: "spring" },
    { name: "FastAPI", description: "API Python", icon: "api" },
    { name: "Next.js", description: "Applications React", icon: "react" },
    { name: "React", description: "Interfaces web", icon: "react" },
    { name: "Angular", description: "Applications web", icon: "angular" },
    { name: "Flutter", description: "Applications mobiles", icon: "mobile" },
    { name: "Flask", description: "Services Python", icon: "python" },
    { name: "Laravel", description: "Applications PHP", icon: "laravel" },
  ],
  ai: [
    { name: "Machine Learning", description: "Modèles prédictifs", icon: "ml" },
    { name: "Deep Learning", description: "Réseaux de neurones", icon: "dl" },
    { name: "IA générative", description: "Génération assistée", icon: "ai" },
    { name: "LLM", description: "Modèles de langage", icon: "ai" },
    { name: "Data Mining", description: "Exploration de données", icon: "python-data" },
    { name: "scikit-learn", description: "Machine learning Python", icon: "sklearn" },
    { name: "TensorFlow", description: "Deep learning", icon: "dl" },
    { name: "PyTorch", description: "Deep learning", icon: "dl" },
  ],
  databases: [
    { name: "PostgreSQL", description: "Base relationnelle", icon: "sql" },
    { name: "MySQL", description: "Base relationnelle", icon: "mysql" },
    { name: "SQL Server", description: "Gestion de données", icon: "sqlserver" },
  ],
  data: [
    { name: "SSIS", description: "Intégration de données", icon: "sqlserver" },
    { name: "ETL", description: "Flux de données", icon: "python-data" },
    { name: "Data Warehouse", description: "Entrepôt décisionnel", icon: "database" },
  ],
  tools: [
    { name: "Git", description: "Versioning", icon: "git" },
    { name: "GitHub", description: "Collaboration", icon: "github" },
    { name: "Figma", description: "UI/UX Design", icon: "figma" },
  ],
};

export const projects = [
  { id: "trainflow", year: "2026", categories: ["software", "ai"], technologies: ["React", "Spring Boot", "MySQL", "Ollama", "Qwen2.5"], cover: "", github: "https://github.com/nour-karray/trainflow-ai", visual: "mission-management" },
  { id: "docia", year: "2026", categories: ["software", "ai"], technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "OCR", "Docling", "Ollama", "Qwen2.5", "Gemini API"], cover: asset("images/projects/docuai-dashboard.png"), github: "https://github.com/nour-karray/AI-Document-Extractor", visual: "document-ai" },
  { id: "mission", year: "2026", categories: ["software"], technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL"], cover: asset("images/projects/mission-management-dashboard.png"), github: "https://github.com/nour-karray/J2ee", visual: "mission-management" },
  { id: "hr-analytics", year: "2026", categories: ["data"], technologies: ["SQL Server", "SSIS", "ETL", "Data Warehouse", "Blazor"], cover: asset("images/projects/hr-analytics-dashboard.jpg"), github: "https://github.com/nour-karray/HR-Analytics-Data-Warehouse", visual: "hr-analytics" },
  { id: "smartscan", year: "2026", categories: ["mobile", "ai"], technologies: ["Flutter", "Firebase Auth", "Google ML Kit", "OCR", "Flask", "Gemini API"], cover: asset("images/projects/smartscan-mlkit.svg"), github: "https://github.com/nour-karray/smartscan-medical-ocr", visual: "mobile-ai" },
  { id: "event-planner", year: "2026", categories: ["software"], technologies: ["Laravel", "MySQL"], cover: asset("images/projects/event-planner-dashboard.png"), github: "https://github.com/nour-karray/Event-planner", visual: "event" },
  { id: "drawing", year: "2025", categories: ["software"], technologies: ["Java", "JavaFX", "SQLite", "JDBC", "Design Patterns"], cover: asset("images/projects/drawing-javafx-app.png"), coverFit: "contain", github: "https://github.com/nour-karray/javafx-design-patterns", visual: "java-architecture" },
  { id: "e-sante", year: "2025", categories: ["software"], technologies: ["ASP.NET Web API", "Entity Framework", "Blazor", "SQL Server"], cover: asset("images/projects/e-sante-dashboard.png"), github: "https://github.com/nour-karray/E-sante-app", visual: "health" },
  { id: "riskinsight", year: "2025", categories: ["ai"], technologies: ["Python", "scikit-learn", "Flask", "React"], cover: asset("images/projects/prediction-sinistre-dashboard.jpg"), github: "", visual: "data" },
];

export const experiences = [
  {
    id: "ecocode",
    company: "EcoCode",
    technologies: ["React", "Spring Boot", "MySQL", "Ollama", "LLM"],
  },
  {
    id: "clinisys",
    company: "Clinisys",
    technologies: ["JavaScript", "Spring Boot", "SQL Server"],
  },
  {
    id: "webgraphique",
    company: "Web Graphique",
    technologies: ["Flutter", "Unity", "Figma"],
  },
  {
    id: "attijari",
    company: "Attijari Bank",
    technologies: [],
  },
];
