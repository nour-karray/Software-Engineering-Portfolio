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
  github: "https://github.com",
  location: "Sfax, Tunisie",
  availability: "Ouverte aux opportunités",
  portrait: "/images/nour-portrait.webp",
  cv: "/cv-nour-el-houda-karray.pdf",
  emailLink: "https://mail.google.com/mail/?view=cm&fs=1&to=karraynour2002%40gmail.com",
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
  Langages: [
    {
      name: "HTML",
      description: "Structure web",
      level: "Base solide",
      icon: "html",
    },
    {
      name: "CSS",
      description: "Design responsive",
      level: "Design UI",
      icon: "css",
    },
    {
      name: "JavaScript",
      description: "Interactivité",
      level: "Front-end",
      icon: "javascript",
    },
    {
      name: "PHP",
      description: "Backend web",
      level: "Serveur",
      icon: "php",
    },
    {
      name: "Java",
      description: "POO",
      level: "POO",
      icon: "java",
    },
    {
      name: "Python",
      description: "Data & scripts",
      level: "Data",
      icon: "python",
    },
  ],
  "Frameworks & Technologies Web": [
    {
      name: "React",
      description: "Interfaces modernes",
      level: "Front-end",
      icon: "react",
    },
    {
      name: "Angular",
      description: "Applications web",
      level: "SPA",
      icon: "angular",
    },
    {
      name: "Django",
      description: "Backend Python",
      level: "Web",
      icon: "django",
    },
    {
      name: "Laravel",
      description: "Web backend",
      level: "MVC",
      icon: "laravel",
    },
    {
      name: "Spring Boot",
      description: "API Java",
      level: "Backend",
      icon: "spring",
    },
    {
      name: "ASP.NET Web API",
      description: "Services web",
      level: "API",
      icon: "api",
    },
    {
      name: "Blazor",
      description: "Interfaces .NET",
      level: "UI",
      icon: "blazor",
    },
  ],
  "Bases de données": [
    {
      name: "SQL",
      description: "Requêtes",
      level: "Data",
      icon: "sql",
    },
    {
      name: "MySQL",
      description: "Base relationnelle",
      level: "SQL",
      icon: "mysql",
    },
    {
      name: "SQL Server",
      description: "Gestion de données",
      level: "SGBD",
      icon: "sqlserver",
    },
    {
      name: "MongoDB",
      description: "NoSQL",
      level: "NoSQL",
      icon: "mongodb",
    },
    {
      name: "PhpMyAdmin",
      description: "Administration BDD",
      level: "Admin",
      icon: "phpmyadmin",
    },
  ],
  "IA & Data": [
    {
      name: "Machine Learning",
      description: "Modèles prédictifs",
      level: "IA",
      icon: "ml",
    },
    {
      name: "Deep Learning",
      description: "Réseaux de neurones",
      level: "IA avancée",
      icon: "dl",
    },
    {
      name: "Scikit-learn",
      description: "Modèles ML",
      level: "Python",
      icon: "sklearn",
    },
    {
      name: "Python Data",
      description: "Analyse de données",
      level: "Data",
      icon: "python-data",
    },
  ],
  "Outils & Design": [
    {
      name: "Git",
      description: "Versioning",
      level: "Workflow",
      icon: "git",
    },
    {
      name: "GitHub",
      description: "Collaboration",
      level: "Collab",
      icon: "github",
    },
    {
      name: "Figma",
      description: "UI/UX Design",
      level: "Design",
      icon: "figma",
    },
  ],
};

export const projects = [
  {
    id: 5,
    title: "SmartScan ML Kit",
    year: "2026",
    category: "Mobile / IA",
    description:
      "Application mobile Flutter de scan et gestion intelligente de documents, intégrant OCR avec Google ML Kit, authentification Firebase et analyse structurée de documents médicaux via un backend Flask connecté à l’API Gemini.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Google ML Kit",
      "OCR",
      "Flask",
      "Gemini API",
      "Google Sign-In",
    ],
    cover: "/images/projects/smartscan-mlkit.svg",
    github: "https://github.com/nour-karray/smartscan_mlkit",
    visual: "mobile-ai",
  },
  {
    id: 6,
    title: "Drawing App JavaFX",
    year: "2025",
    category: "Java / Architecture",
    description:
      "Application JavaFX permettant de dessiner des formes géométriques, sauvegarder les dessins dans SQLite et appliquer plusieurs design patterns pour structurer le code.",
    technologies: [
      "Java",
      "JavaFX",
      "SQLite",
      "JDBC",
      "POO",
      "Design Patterns",
      "Singleton",
      "Factory",
      "Command",
    ],
    cover: "/images/projects/drawing-javafx.svg",
    github: "",
    visual: "java-architecture",
  },
  {
    id: 4,
    title: "Plateforme intelligente d’extraction d’informations",
    year: "2026",
    category: "IA / Data",
    description:
      "Projet de Fin d’Année autour d’une plateforme capable d’extraire automatiquement des informations depuis des documents PDF et images pour produire des données structurées et exploitables.",
    technologies: ["Python", "JavaScript", "OCR", "IA", "Data extraction"],
    cover: "/images/projects/docuai-dashboard.png",
    github: "",
    visual: "document-ai",
  },
  {
    id: 1,
    title: "Plateforme e-Santé",
    year: "2025",
    category: "Web",
    description:
      "Application web de gestion et de délivrance de prescriptions électroniques pour les pharmaciens.",
    technologies: ["ASP.NET Web API", "Entity Framework", "Blazor", "SQL Server"],
    cover: "/images/projects/e-sante.png",
    github: "",
    visual: "health",
  },
  {
    id: 2,
    title: "Event Planner",
    year: "2026",
    category: "Web",
    description:
      "Application web permettant de créer, gérer et suivre des événements avec inscription des utilisateurs.",
    technologies: ["Laravel", "MySQL"],
    cover: "/images/projects/event-planner.png",
    github: "",
    visual: "event",
  },
  {
    id: 3,
    title: "Prédiction de sinistre habitation",
    year: "2025",
    category: "IA / Data",
    description:
      "Projet de fouille de données visant à prédire la probabilité de sinistre habitation à partir de données réelles.",
    technologies: ["Python", "Scikit-learn"],
    cover: "/images/projects/prediction-sinistre.png",
    github: "",
    visual: "data",
  },
];

export const experiences = [
  {
    company: "Institut International de Technologie à Sfax",
    role: "Projet de Fin d’Études",
    period: "Février 2026 — Juin 2026",
    description:
      "Plateforme intelligente d’extraction d’informations à partir de documents hétérogènes. Conception d’une solution capable d’extraire automatiquement des informations depuis des PDF et images pour produire des données structurées et exploitables.",
    technologies: ["IA", "OCR", "Data extraction", "Python", "JavaScript"],
  },
  {
    company: "Clinisys",
    role: "Projet de Fin d’Étude",
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

export const education = [
  {
    period: "2021",
    degree: "Baccalauréat sciences techniques",
    school: "Lycée Ali Bourguiba Mahres, Sfax",
    description: "Acquisition des bases scientifiques et techniques.",
  },
  {
    period: "2021 — 2024",
    degree: "Licence appliquée en Développement des Systèmes d’Information",
    school: "Institut Supérieur des Études Technologiques de Sfax",
    description:
      "Formation orientée développement logiciel, bases de données et systèmes d’information.",
  },
  {
    period: "En cours",
    degree: "2ème année Génie Informatique",
    school: "Institut International des Technologies — IIT",
    description:
      "Approfondissement des compétences en développement web, data, IA et ingénierie logicielle.",
  },
];

export const certificates = [
  {
    title: "CCNA 1 — Cisco Certified Network Associate",
    issuer: "Introduction to Networks",
    short: "CISCO",
    image: "/images/certificates/ccna-presentation-reseaux.jpg",
  },
  {
    title: "National Microsoft Technologies Camps Tunisia",
    issuer: "Microsoft Technologies Camp",
    short: "MS",
    image: "/images/certificates/nmtc-certificate.jpg",
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
