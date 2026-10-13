const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const translations = {
  fr: {
    meta: {
      title: "Nour El Houda Karray | Génie logiciel, Data & IA",
      description: "Portfolio de Nour El Houda Karray, étudiante en 3e année GLID à l’IIT Sfax, à la recherche d’un stage PFE en 2027 en développement logiciel, data ou IA.",
    },
    language: {
      label: "Choix de langue",
      fr: "FR",
      en: "EN",
    },
    navigation: [
      { label: "Accueil", id: "accueil" },
      { label: "À propos", id: "a-propos" },
      { label: "Compétences", id: "competences" },
      { label: "Projets", id: "projets" },
      { label: "Expériences", id: "experiences" },
      { label: "Formation", id: "formation" },
      { label: "Certificats", id: "certificats" },
      { label: "Contact", id: "contact" },
    ],
    hero: {
      greeting: "Bonjour, je suis",
      role: "Étudiante en 3e année GLID — IIT Sfax",
      statuses: [
        "Développement logiciel & full-stack",
        "Intelligence artificielle & Machine Learning",
        "Data Engineering & Business Intelligence",
      ],
      summary:
        "Passionnée par le développement logiciel et l’intelligence artificielle, je m’investis dans la conception de solutions innovantes et concrètes. Je recherche un stage PFE en 2027 pour renforcer mes compétences et contribuer à des projets à forte valeur ajoutée.",
      projectsButton: "Voir mes projets",
      cvButton: "Télécharger mon CV",
      cvDownloadName: "cv-nour-el-houda-karray.pdf",
      socialsLabel: "Réseaux sociaux",
      portraitAlt: "Portrait professionnel de Nour El Houda Karray",
      graduationAlt: "Nour El Houda Karray lors de sa remise de diplôme",
      creative: "Créative",
      availability: "Recherche un stage PFE 2027",
      motivated: "Motivée",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "À propos de moi",
      title: "Qui suis-je ?",
      paragraphs: [
        "Étudiante en 3e année de Génie Logiciel et Informatique Décisionnelle (GLID) à l’IIT Sfax, je développe des applications full-stack et mobiles, des API sécurisées ainsi que des solutions d’extraction, d’analyse et de visualisation de données.",
        "Mes projets associent React, Angular, Spring Boot, FastAPI, Flutter, SQL Server et des outils d’IA/OCR. Je recherche un stage PFE en 2027 pour participer à la conception et à la réalisation d’un produit logiciel au sein d’une équipe technique.",
      ],
      cta: "Discuter d’une opportunité",
      cards: {
        location: "Localisation",
        email: "Email",
        phone: "Téléphone",
        availability: "Disponibilité",
        availabilityValue: "Stage PFE 2027",
      },
    },
    skills: {
      eyebrow: "COMPÉTENCES",
      title: "Mes compétences",
      intro:
        "Les technologies que j’utilise pour concevoir des solutions web modernes, utiles et soignées.",
      aria: "Catégories de compétences",
      categoryLabels: {
        "Langages de programmation": "Langages de programmation",
        Frontend: "Frontend",
        "Backend et API": "Backend et API",
        "Bases de données": "Bases de données",
        "IA, Machine Learning et Data": "IA, Machine Learning et Data",
        "Outils et technologies": "Outils et technologies",
      },
      descriptions: {
        HTML: "Structure web",
        CSS: "Design responsive",
        JavaScript: "Interactivité",
        PHP: "Backend web",
        Java: "POO",
        Python: "Data & scripts",
        React: "Interfaces modernes",
        Angular: "Applications web",
        "Next.js": "Applications React full-stack",
        Flutter: "Applications mobiles",
        Laravel: "Web backend",
        "Spring Boot": "API Java",
        "ASP.NET Web API": "Services web",
        Blazor: "Interfaces .NET",
        FastAPI: "API Python",
        Flask: "Services Python",
        SQL: "Requêtes",
        MySQL: "Base relationnelle",
        "SQL Server": "Gestion de données",
        MongoDB: "NoSQL",
        PhpMyAdmin: "Administration BDD",
        "Machine Learning": "Modèles prédictifs",
        "Deep Learning": "Réseaux de neurones",
        "Scikit-learn": "Modèles ML",
        "Python Data": "Analyse de données",
        OCR: "Extraction de texte",
        SSIS: "Pipelines ETL",
        Git: "Versioning",
        GitHub: "Collaboration",
        Figma: "UI/UX Design",
      },
    },
    projects: {
      eyebrow: "Projets",
      title: "Quelques idées devenues réelles",
      intro: "Des applications full-stack, mobiles, data et IA conçues autour de problèmes concrets.",
      filters: {
        Tous: "Tous",
        Web: "Web",
        "IA / Data": "IA / Data",
        "BI / Data": "BI / Data",
        "Mobile / IA": "Mobile / IA",
        "Java / Architecture": "Java / Architecture",
        Entrepreneuriat: "Entrepreneuriat",
      },
      filtersLabel: "Filtres des projets",
      close: "Fermer",
      realizedIn: "Réalisé en",
      technologies: "Technologies utilisées",
      githubLabel: "Voir le dépôt GitHub de",
      items: {
        5: {
          title: "SmartScan Medical OCR",
          description:
            "Application Flutter pour numériser, classer et retrouver des documents. Elle combine OCR Google ML Kit, authentification Firebase et extraction médicale structurée via une API Flask connectée à Gemini.",
          category: "Mobile / IA",
        },
        6: {
          title: "Drawing App JavaFX",
          description:
            "Application JavaFX de dessin et de persistance SQLite illustrant les patterns Factory, Command, Strategy, Observer, Decorator et Singleton, avec annulation et journalisation des actions.",
          category: "Java / Architecture",
        },
        4: {
          title: "DocIA — AI Document Extractor",
          description:
            "Plateforme Next.js/FastAPI qui transforme des PDF et scans hétérogènes en données JSON validées. Le pipeline route les documents vers OCR, Docling et Qwen2.5 ou Gemini, puis conserve un historique dans SQLite.",
          category: "IA / Data",
        },
        1: {
          title: "Plateforme e-Santé",
          description:
            "Application web de gestion des patients, médicaments et ordonnances électroniques, avec API ASP.NET, interface Blazor et persistance SQL Server.",
          category: "Web",
        },
        2: {
          title: "Event Planner",
          description:
            "Application Laravel permettant aux utilisateurs de découvrir des événements et de s’y inscrire, avec un espace d’administration pour gérer événements, catégories et inscriptions.",
          category: "Web",
        },
        3: {
          title: "Prédiction de sinistre habitation",
          description:
            "Projet de Machine Learning comparant plusieurs modèles pour estimer le risque de sinistre habitation et présenter les métriques d’évaluation dans un tableau de bord.",
          category: "IA / Data",
        },
        7: {
          title: "Plateforme de gestion des missions",
          description:
            "Plateforme Angular/Spring Boot de gestion des missions et affectations. Elle sécurise les accès par JWT et rôles, contrôle la charge des employés et applique des opérations transactionnelles atomiques.",
          category: "Web",
        },
        8: {
          title: "Entrepôt de données HR Analytics",
          description:
            "Pipeline BI qui nettoie des données RH, les charge via SSIS dans un modèle dimensionnel SQL Server, puis expose les KPI d’effectifs, salaires, absences et turnover dans un dashboard Blazor.",
          category: "BI / Data",
        },
      },
    },
    experience: {
      eyebrow: "Expériences",
      title: "Mon parcours professionnel",
      intro:
        "Mes expériences m’ont permis de découvrir différents environnements professionnels, du développement web à l’analyse des systèmes informatiques.",
      items: [
        {
          period: "Février 2026 — Juin 2026",
          role: "Projet académique — DocIA",
          description:
            "Projet académique de plateforme d’extraction structurée à partir de PDF et d’images, avec OCR, validation des données et traitement par modèles d’IA.",
        },
        {
          period: "Fév. 2024 — Mai 2024",
          role: "PFE de licence",
          description:
            "Développement d’une application de gestion des dossiers médicaux informatisés pour les patients externes.",
        },
        {
          period: "Jan. 2023 — Fév. 2023",
          role: "Stage de Perfectionnement",
          description:
            "Conception UI/UX, design et développement d’une application de restauration et de solutions 3D.",
        },
        {
          period: "Jan. 2022 — Fév. 2022",
          role: "Stage d’Initiation",
          description: "Analyse et synthèse des systèmes informatiques de la banque.",
        },
      ],
    },
    education: {
      eyebrow: "FORMATION",
      title: "Mon parcours académique",
      intro:
        "Un apprentissage continu, entre fondamentaux informatiques, pratique et nouvelles technologies.",
      items: [
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
          degree: "3e année de Génie Logiciel et Informatique Décisionnelle (GLID)",
          school: "Institut International des Technologies — IIT",
          description:
            "Formation en ingénierie logicielle, développement full-stack, systèmes décisionnels, data et intelligence artificielle.",
        },
      ],
    },
    credentials: {
      eyebrow: "Certificats & plus",
      title: "Certifications, langues & engagement",
      intro:
        "Un aperçu de mes apprentissages, de mes compétences linguistiques et de mes expériences associatives.",
      columns: {
        certificates: "Certificats",
        languages: "Langues",
        associations: "Engagement & initiatives",
      },
      certificates: [
        {
          title: "CCNA 1 — Introduction aux réseaux",
          issuer: "Certificat de module Cisco Networking Academy",
          short: "CISCO",
            image: asset("images/certificates/ccna-presentation-reseaux.jpg"),
        },
        {
          title: "National Microsoft Technologies Camps Tunisia",
          issuer: "Microsoft Technologies Camp",
          short: "MS",
            image: asset("images/certificates/nmtc-certificate.jpg"),
        },
      ],
      languages: [
        { name: "Arabe", level: "Natif", value: 100 },
        { name: "Français", level: "Avancé", value: 86 },
        { name: "Anglais", level: "Intermédiaire", value: 66 },
      ],
      associations: [
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
      ],
      instagramLink: "Voir sur Instagram",
      slogan: "Apprendre. Partager. Progresser.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Me contacter",
      intro: "",
      cta: "M’écrire directement",
      items: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      quickLinks: "Liens rapides",
      copyright: "© 2026 Karray nour el houda",
    },
    theme: {
      dark: "Activer le thème sombre",
      light: "Activer le thème clair",
    },
    menu: {
      open: "Ouvrir le menu",
      close: "Fermer le menu",
      home: "Retour à l’accueil",
      navigation: "Navigation principale",
      mobile: "Navigation mobile",
    },
  },
  en: {
    meta: {
      title: "Nour El Houda Karray | Software Engineering, Data & AI",
      description: "Portfolio of Nour El Houda Karray, a third-year Software Engineering and Business Intelligence student at IIT Sfax seeking a 2027 final-year internship.",
    },
    language: {
      label: "Language selector",
      fr: "FR",
      en: "EN",
    },
    navigation: [
      { label: "Home", id: "accueil" },
      { label: "About", id: "a-propos" },
      { label: "Skills", id: "competences" },
      { label: "Projects", id: "projets" },
      { label: "Experience", id: "experiences" },
      { label: "Education", id: "formation" },
      { label: "Certificates", id: "certificats" },
      { label: "Contact", id: "contact" },
    ],
    hero: {
      greeting: "Hello, I’m",
      role: "Third-year Software Engineering & BI Student",
      statuses: [
        "Software & full-stack development",
        "Artificial Intelligence & Machine Learning",
        "Data Engineering & Business Intelligence",
      ],
      summary:
        "I build web and mobile applications, APIs, and data/AI solutions. I am seeking a 2027 final-year internship to contribute to a concrete software project within a technical team.",
      projectsButton: "View my projects",
      cvButton: "Download my CV",
      cvDownloadName: "cv-nour-el-houda-karray.pdf",
      socialsLabel: "Social links",
      portraitAlt: "Professional portrait of Nour El Houda Karray",
      graduationAlt: "Nour El Houda Karray at her graduation ceremony",
      creative: "Creative",
      availability: "Seeking a 2027 final-year internship",
      motivated: "Motivated",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About me",
      title: "Who am I?",
      paragraphs: [
        "I am a third-year Software Engineering and Business Intelligence student at IIT Sfax. I build full-stack and mobile applications, secure APIs, and solutions for extracting, analysing and visualising data.",
        "My projects use React, Angular, Spring Boot, FastAPI, Flutter, SQL Server and AI/OCR tools. I am seeking a 2027 final-year internship where I can contribute to the design and delivery of a software product within a technical team.",
      ],
      cta: "Discuss an opportunity",
      cards: {
        location: "Location",
        email: "Email",
        phone: "Phone",
        availability: "Availability",
        availabilityValue: "2027 final-year internship",
      },
    },
    skills: {
      eyebrow: "SKILLS",
      title: "My skills",
      intro:
        "The technologies I use to build modern, useful and polished web solutions.",
      aria: "Skill categories",
      categoryLabels: {
        "Langages de programmation": "Programming Languages",
        Frontend: "Frontend",
        "Backend et API": "Backend & APIs",
        "Bases de données": "Databases",
        "IA, Machine Learning et Data": "AI, Machine Learning & Data",
        "Outils et technologies": "Tools & Technologies",
      },
      descriptions: {
        HTML: "Web structure",
        CSS: "Responsive design",
        JavaScript: "Interactivity",
        PHP: "Web backend",
        Java: "OOP",
        Python: "Data & scripts",
        React: "Modern interfaces",
        Angular: "Web applications",
        "Next.js": "Full-stack React applications",
        Flutter: "Mobile applications",
        Laravel: "Web backend",
        "Spring Boot": "Java APIs",
        "ASP.NET Web API": "Web services",
        Blazor: ".NET interfaces",
        FastAPI: "Python APIs",
        Flask: "Python services",
        SQL: "Queries",
        MySQL: "Relational database",
        "SQL Server": "Data management",
        MongoDB: "NoSQL",
        PhpMyAdmin: "Database administration",
        "Machine Learning": "Predictive models",
        "Deep Learning": "Neural networks",
        "Scikit-learn": "ML models",
        "Python Data": "Data analysis",
        OCR: "Text extraction",
        SSIS: "ETL pipelines",
        Git: "Version control",
        GitHub: "Collaboration",
        Figma: "UI/UX design",
      },
    },
    projects: {
      eyebrow: "Projects",
      title: "A few ideas brought to life",
      intro: "Full-stack, mobile, data and AI applications designed around concrete problems.",
      filters: {
        Tous: "All",
        Web: "Web",
        "IA / Data": "AI / Data",
        "BI / Data": "BI / Data",
        "Mobile / IA": "Mobile / AI",
        "Java / Architecture": "Java / Architecture",
        Entrepreneuriat: "Entrepreneurship",
      },
      filtersLabel: "Project filters",
      close: "Close",
      realizedIn: "Completed in",
      technologies: "Technologies used",
      githubLabel: "View the GitHub repository for",
      items: {
        5: {
          title: "SmartScan Medical OCR",
          description:
            "Flutter application for scanning, organising and retrieving documents. It combines Google ML Kit OCR, Firebase authentication and structured medical extraction through a Flask API connected to Gemini.",
          category: "Mobile / AI",
        },
        6: {
          title: "Drawing App JavaFX",
          description:
            "JavaFX drawing application with SQLite persistence that demonstrates Factory, Command, Strategy, Observer, Decorator and Singleton patterns, including undo and action logging.",
          category: "Java / Architecture",
        },
        4: {
          title: "DocIA — AI Document Extractor",
          description:
            "Next.js/FastAPI platform that converts heterogeneous PDFs and scans into validated JSON. Its pipeline routes documents through OCR, Docling and Qwen2.5 or Gemini, with history stored in SQLite.",
          category: "AI / Data",
        },
        1: {
          title: "E-Health Platform",
          description:
            "Web application for managing patients, medication and electronic prescriptions, backed by an ASP.NET API, a Blazor interface and SQL Server persistence.",
          category: "Web",
        },
        2: {
          title: "Event Planner",
          description:
            "Laravel application where users discover and register for events, with an administration area for managing events, categories and registrations.",
          category: "Web",
        },
        3: {
          title: "Home Claim Prediction",
          description:
            "Machine Learning project comparing several models to estimate home-insurance claim risk and present evaluation metrics in a dashboard.",
          category: "AI / Data",
        },
        7: {
          title: "Mission Management Platform",
          description:
            "Angular/Spring Boot platform for managing missions and employee assignments. It uses JWT role-based access, workload controls and atomic transactional operations.",
          category: "Web",
        },
        8: {
          title: "HR Analytics Data Warehouse",
          description:
            "BI pipeline that cleans HR data, loads it through SSIS into a dimensional SQL Server model, and presents workforce, salary, absence and turnover KPIs in a Blazor dashboard.",
          category: "BI / Data",
        },
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "My professional path",
      intro:
        "My experiences helped me discover different professional environments, from web development to information systems analysis.",
      items: [
        {
          period: "February 2026 — June 2026",
          role: "Academic project — DocIA",
          description:
            "Academic project for structured extraction from PDFs and images, combining OCR, data validation and AI model processing.",
        },
        {
          period: "Feb. 2024 — May 2024",
          role: "Bachelor’s final-year project",
          description:
            "Development of an application for managing computerized medical records for outpatients.",
        },
        {
          period: "Jan. 2023 — Feb. 2023",
          role: "Advanced Internship",
          description:
            "UI/UX design and development of a restaurant application and 3D solutions.",
        },
        {
          period: "Jan. 2022 — Feb. 2022",
          role: "Introductory Internship",
          description: "Analysis and synthesis of the bank’s information systems.",
        },
      ],
    },
    education: {
      eyebrow: "EDUCATION",
      title: "My academic path",
      intro:
        "Continuous learning through computer science fundamentals, practice and new technologies.",
      items: [
        {
          period: "2021",
          degree: "Technical Sciences Baccalaureate",
          school: "Ali Bourguiba Mahres High School, Sfax",
          description: "Acquired scientific and technical foundations.",
        },
        {
          period: "2021 — 2024",
          degree: "Applied Bachelor’s Degree in Information Systems Development",
          school: "Higher Institute of Technological Studies of Sfax",
          description:
            "Training focused on software development, databases and information systems.",
        },
        {
          period: "In progress",
          degree: "Third-year Software Engineering and Business Intelligence (GLID)",
          school: "International Institute of Technology — IIT",
          description:
            "Coursework in software engineering, full-stack development, business intelligence, data and artificial intelligence.",
        },
      ],
    },
    credentials: {
      eyebrow: "Certificates & more",
      title: "Certifications, languages & engagement",
      intro:
        "An overview of my learning, language skills and associative experiences.",
      columns: {
        certificates: "Certificates",
        languages: "Languages",
        associations: "Engagement & initiatives",
      },
      certificates: [
        {
          title: "CCNA 1 — Introduction to Networks",
          issuer: "Cisco Networking Academy module certificate",
          short: "CISCO",
            image: asset("images/certificates/ccna-presentation-reseaux.jpg"),
        },
        {
          title: "National Microsoft Technologies Camps Tunisia",
          issuer: "Microsoft Technologies Camp",
          short: "MS",
            image: asset("images/certificates/nmtc-certificate.jpg"),
        },
      ],
      languages: [
        { name: "Arabic", level: "Native", value: 100 },
        { name: "French", level: "Advanced", value: 86 },
        { name: "English", level: "Intermediate", value: 66 },
      ],
      associations: [
        {
          name: "Microsoft Club ISET Sfax 2023",
          role: "Media Manager",
          type: "Association",
          year: "2023",
        },
        {
          name: "National Microsoft Technologies Camp 2023",
          role: "Marketing Assistant",
          type: "Event",
          year: "2023",
        },
        {
          name: "Viavo Vibes",
          role: "Founder / small business management",
          type: "Personal initiative",
          year: "2022",
          description:
            "Creation and management of a small business around brand identity, digital communication and an Instagram presence.",
          instagram: "https://www.instagram.com/viavo_vibes/",
        },
      ],
      instagramLink: "View on Instagram",
      slogan: "Learn. Share. Grow.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in touch",
      intro: "",
      cta: "Write to me directly",
      items: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        linkedin: "LinkedIn",
      },
    },
    footer: {
      quickLinks: "Quick links",
      copyright: "© 2026 Karray nour el houda",
    },
    theme: {
      dark: "Enable dark theme",
      light: "Enable light theme",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
      home: "Back to home",
      navigation: "Main navigation",
      mobile: "Mobile navigation",
    },
  },
};
