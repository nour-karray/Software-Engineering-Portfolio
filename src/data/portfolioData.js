const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Nour El Houda Karray",
  firstName: "Nour",
  role: "Étudiante en Génie Informatique",
  statuses: [
    "Développeuse Web",
    "Passionnée par l’Intelligence Artificielle",
    "Orientée data & expérience utilisateur",
  ],
  tagline:
    "Je conçois des solutions web utiles et innovantes, centrées sur l’expérience utilisateur, en exploitant la data et l’intelligence artificielle pour créer de la valeur.",
  description: [
    "Étudiante en génie informatique, je m’intéresse au développement web, à la data et aux solutions numériques utiles. À travers mes stages et mes projets académiques, j’ai travaillé sur des applications web, des interfaces utilisateur et des projets liés à la gestion de données.",
    "Curieuse, motivée et rigoureuse, je cherche aujourd’hui un stage d’été pour renforcer mes compétences, apprendre au sein d’une équipe et contribuer à des projets concrets.",
  ],
  quote: "Passionnée par la technologie et l’innovation.",
  phone: "+216 24 634 008",
  email: "karraynour2002@gmail.com",
  linkedin: "https://www.linkedin.com/in/karray-nour-el-houda",
  github: "https://github.com/nour-karray",
  location: "Sfax, Tunisie",
  availability: "Ouverte aux opportunités",
  portrait: asset("images/nour-portrait.webp"),
  cv: asset("cv-nour-el-houda-karray.pdf"),
  emailLink: "mailto:karraynour2002@gmail.com",
};

export const navigation = [
  { label: "Accueil", id: "accueil" },
  { label: "À propos", id: "a-propos" },
  { label: "Compétences", id: "competences" },
  { label: "Projets", id: "projets" },
  { label: "Expériences", id: "experiences" },
  { label: "Formation", id: "formation" },
  { label: "Certificats", id: "certificats" },
  { label: "Contact", id: "contact" },
];

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
  { id: "trainflow", title: "TrainFlow AI", year: "2026", category: "Développement logiciel · IA", categories: ["software", "ai"], description: "Plateforme de gestion du cycle complet des formations, de la demande client à la génération des documents. Elle intègre l’analyse automatique des CV des formateurs et la génération de programmes de formation.", technologies: ["React", "Spring Boot", "MySQL", "Ollama", "Qwen2.5"], cover: asset("images/projects/mission-management-dashboard.png"), github: "https://github.com/nour-karray/trainflow-ai", visual: "mission-management" },
  { id: "docia", title: "DocIA — Extraction intelligente de documents", year: "2026", category: "Développement logiciel · IA", categories: ["software", "ai"], description: "Plateforme d’extraction et de structuration de données à partir de documents PDF et d’images, combinant OCR, Docling et modèles de langage pour produire des données structurées exploitables.", technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "OCR", "Docling", "Ollama", "Qwen2.5", "Gemini API"], cover: asset("images/projects/docuai-dashboard.png"), github: "https://github.com/nour-karray/AI-Document-Extractor", visual: "document-ai" },
  { id: "mission", title: "Mission Management — Gestion des missions", year: "2026", category: "Développement logiciel", categories: ["software"], description: "Application de gestion des missions et des affectations avec API REST, authentification JWT, gestion des rôles et contrôle de la charge des collaborateurs.", technologies: ["Java", "Spring Boot", "Angular", "Spring Security", "MySQL"], cover: asset("images/projects/mission-management-dashboard.png"), github: "https://github.com/nour-karray/J2ee", visual: "mission-management" },
  { id: "hr-analytics", title: "HR Analytics Data Warehouse & BI Dashboard", year: "2026", category: "Data & BI", categories: ["data"], description: "Entrepôt de données RH avec processus ETL permettant d’intégrer, transformer et analyser les données afin d’alimenter un tableau de bord décisionnel.", technologies: ["SQL Server", "SSIS", "ETL", "Data Warehouse", "Blazor"], cover: asset("images/projects/hr-analytics-dashboard.jpg"), github: "https://github.com/nour-karray/HR-Analytics-Data-Warehouse", visual: "hr-analytics" },
  { id: "smartscan", title: "SmartScan Medical OCR", year: "2026", category: "Mobile · IA", categories: ["mobile", "ai"], description: "Application mobile Flutter de scan et gestion intelligente de documents, intégrant OCR avec Google ML Kit, authentification Firebase et analyse structurée de documents médicaux.", technologies: ["Flutter", "Firebase Auth", "Google ML Kit", "OCR", "Flask", "Gemini API"], cover: asset("images/projects/smartscan-mlkit.svg"), github: "https://github.com/nour-karray/smartscan-medical-ocr", visual: "mobile-ai" },
  { id: "event-planner", title: "Event Planner", year: "2026", category: "Développement logiciel", categories: ["software"], description: "Application web permettant de créer, gérer et suivre des événements avec inscription des utilisateurs.", technologies: ["Laravel", "MySQL"], cover: asset("images/projects/event-planner-dashboard.png"), github: "", visual: "event" },
  { id: "drawing", title: "Drawing App JavaFX", year: "2025", category: "Développement logiciel", categories: ["software"], description: "Application JavaFX permettant de dessiner des formes géométriques, sauvegarder les dessins dans SQLite et appliquer plusieurs design patterns.", technologies: ["Java", "JavaFX", "SQLite", "JDBC", "Design Patterns"], cover: asset("images/projects/drawing-javafx-app.png"), coverFit: "contain", github: "https://github.com/nour-karray/javafx-design-patterns", visual: "java-architecture" },
  { id: "e-sante", title: "E-Santé", year: "2025", category: "Développement logiciel", categories: ["software"], description: "Application web de gestion et de délivrance de prescriptions électroniques pour les pharmaciens.", technologies: ["ASP.NET Web API", "Entity Framework", "Blazor", "SQL Server"], cover: asset("images/projects/e-sante-dashboard.png"), github: "https://github.com/nour-karray/E-sante-app", visual: "health" },
  { id: "riskinsight", title: "RiskInsight — Prédiction du risque de sinistre", year: "2025", category: "Intelligence artificielle", categories: ["ai"], description: "Développement et comparaison de plusieurs modèles de machine learning sur des données d’assurance habitation afin d’estimer le risque de sinistre et d’évaluer leurs performances.", technologies: ["Python", "scikit-learn", "Flask", "React"], cover: asset("images/projects/prediction-sinistre-dashboard.jpg"), github: "", visual: "data" },
];

export const experiences = [
  {
    id: "ecocode",
    company: "EcoCode",
    role: "Stage d’été",
    period: "Juin 2026 — Août 2026",
    description: "Développé une plateforme de gestion de formations intégrant des LLM pour générer des programmes de formation et extraire des informations structurées de CV, avec validation des sorties.",
    technologies: ["React", "Spring Boot", "MySQL", "Ollama", "LLM"],
  },
  {
    id: "clinisys",
    company: "Clinisys",
    role: "Projet de Fin d’Étude",
    period: "Fév. 2024 — Mai 2024",
    description:
      "Développement d’une application de gestion des dossiers médicaux informatisés pour les patients externes.",
    technologies: ["JavaScript", "Spring Boot", "SQL Server"],
  },
  {
    id: "webgraphique",
    company: "Web Graphique",
    role: "Stage de Perfectionnement",
    period: "Jan. 2023 — Fév. 2023",
    description:
      "Conception UI/UX, design et développement d’une application de restauration et de solutions 3D.",
    technologies: ["Flutter", "Unity", "Figma"],
  },
  {
    id: "attijari",
    company: "Attijari Bank",
    role: "Stage d’Initiation",
    period: "Jan. 2022 — Fév. 2022",
    description:
      "Analyse et synthèse des systèmes informatiques de la banque.",
    technologies: [],
  },
];

export const education = [
  {
    period: "2024 — En cours",
    degree: "Cycle ingénieur en génie informatique — 3e année — Génie Logiciel et Informatique Décisionnelle (GLID)",
    school: "IIT Sfax",
    description: "Formation d’ingénieur en génie informatique.",
  },
  {
    period: "2021 — 2024",
    degree: "Licence appliquée en technologies de l’informatique — Développement des systèmes d’information",
    school: "ISET Sfax",
    description: "Formation en développement des systèmes d’information.",
  },
  {
    period: "2021",
    degree: "Baccalauréat Sciences Techniques",
    school: "Lycée Ali Bourguiba, Mahrès — Sfax",
    description: "Baccalauréat en sciences techniques.",
  },
];

export const certificates = [
  {
    title: "CCNA 1 — Cisco Certified Network Associate",
    issuer: "Introduction to Networks",
    short: "CISCO",
    image: asset("images/certificates/ccna-presentation-reseaux.jpg"),
  },
  {
    title: "National Microsoft Technologies Camps Tunisia",
    issuer: "Microsoft Technologies Camp",
    short: "MS",
    image: asset("images/certificates/nmtc-certificate.jpg"),
  },
];

export const languages = [
  { name: "Arabe", level: "Natif", value: 100 },
  { name: "Français", level: "Avancé", value: 86 },
  { name: "Anglais", level: "Intermédiaire", value: 66 },
];

export const associations = [
  {
    name: "Club Microsoft ISET Sfax 2023",
    role: "Media Manager",
    type: "Association",
    year: "2023",
  },
  {
    name: "National Microsoft Technologies Camp 2023",
    role: "Assistante Marketing",
    type: "Événement",
    year: "2023",
  },
  {
    name: "Viavo Vibes",
    role: "Fondatrice / gestion du small business",
    type: "Initiative personnelle",
    year: "2022",
    description:
      "Création et gestion d’un small business autour d’une identité de marque, de la communication digitale et d’une présence Instagram.",
    instagram: "https://www.instagram.com/viavo_vibes/",
  },
];
