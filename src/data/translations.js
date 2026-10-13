const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const translations = {
  fr: {
    meta: {
      title: "Nour El Houda Karray | Génie informatique & IA",
      description: "Portfolio de Nour El Houda Karray, étudiante en génie informatique à l’IIT Sfax, à la recherche d’un stage PFE en 2027 en développement logiciel ou intelligence artificielle.",
    },
    language: {
      label: "Choix de langue",
      fr: "FR",
      en: "EN",
    },
    navigation: [
      { label: "Accueil", id: "accueil" },
      { label: "À propos", id: "a-propos" },
      { label: "Projets", id: "projets" },
      { label: "Expériences", id: "experiences" },
      { label: "Compétences", id: "competences" },
      { label: "Formation", id: "formation" },
      { label: "Certificats", id: "certificats" },
      { label: "Contact", id: "contact" },
    ],
    hero: {
      greeting: "Bonjour, je suis",
      role: "Étudiante en génie informatique — IIT Sfax",
      statuses: ["Développement logiciel", "Intelligence artificielle"],
      summary:
        "Étudiante en génie informatique à l’IIT Sfax, je développe mes compétences à travers des projets concrets en développement logiciel et en intelligence artificielle. Je recherche un stage PFE en 2027 afin de mettre mes acquis en pratique et de poursuivre ma progression au sein d’une équipe technique.",
      projectsButton: "Voir mes projets",
      cvButton: "Télécharger mon CV",
      cvDownloadName: "cv-nour-el-houda-karray.pdf",
      socialsLabel: "Réseaux sociaux",
      portraitAlt: "Portrait professionnel de Nour El Houda Karray",
      graduationAlt: "Nour El Houda Karray lors de sa remise de diplôme",
      availability: "Disponible pour un stage PFE 2027",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "À propos de moi",
      title: "Qui suis-je ?",
      portraitAlt: "Portrait de Nour El Houda Karray",
      paragraphs: [
        "Étudiante en génie informatique à l’IIT Sfax, je construis progressivement un profil polyvalent en développement logiciel et en intelligence artificielle. Mes projets me permettent de travailler sur différentes étapes d’une application : conception, développement frontend et backend, gestion des données, intégration de modèles d’IA et tests.",
        "J’apprécie particulièrement les projets où plusieurs technologies doivent être combinées pour répondre à un besoin concret. Je recherche aujourd’hui un stage PFE en 2027 afin de renforcer cette expérience au sein d’une équipe technique.",
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
        Langages: "Langages",
        "Développement logiciel": "Développement logiciel",
        "Intelligence artificielle": "Intelligence artificielle",
        "Bases de données": "Bases de données",
        "Data & BI": "Data & BI",
        Outils: "Outils",
      },
      descriptions: {
        HTML: "Structure web",
        CSS: "Design responsive",
        JavaScript: "Interactivité",
        TypeScript: "Applications typées",
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
        PostgreSQL: "Base relationnelle",
        MySQL: "Base relationnelle",
        "SQL Server": "Gestion de données",
        MongoDB: "NoSQL",
        "Machine Learning": "Modèles prédictifs",
        "Deep Learning": "Réseaux de neurones",
        "IA générative": "Génération assistée par IA",
        LLM: "Modèles de langage",
        "Data Mining": "Exploration de données",
        "scikit-learn": "Modèles ML",
        TensorFlow: "Deep Learning",
        PyTorch: "Deep Learning",
        "Python Data": "Analyse de données",
        SSIS: "Pipelines ETL",
        ETL: "Extraction, transformation et chargement",
        "Data Warehouse": "Entrepôts de données",
        SQLite: "Base embarquée",
        Git: "Versioning",
        GitHub: "Collaboration",
        Figma: "UI/UX Design",
      },
    },
    projects: {
      eyebrow: "Projets",
      title: "Mes projets",
      intro: "Une sélection de projets académiques et personnels qui présentent les compétences que j’ai mises en pratique.",
      filters: {
        all: "Tous",
        software: "Développement logiciel",
        ai: "Intelligence artificielle",
        data: "Data & BI",
        mobile: "Mobile",
      },
      filtersLabel: "Filtres des projets",
      close: "Fermer",
      realizedIn: "Réalisé en",
      technologies: "Technologies utilisées",
      githubLabel: "Voir le dépôt GitHub de",
      items: {
        9: {
          title: "TrainFlow AI",
          description:
            "Plateforme de gestion de formations professionnelles couvrant les entreprises, formateurs, dossiers, programmes, tarification et documents. Elle intègre des fonctionnalités d’IA locale avec Ollama et Qwen2.5 pour l’analyse de CV et la génération de programmes.",
          category: "Web / IA",
        },
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
            "Plateforme d’extraction intelligente permettant de transformer des PDF et des documents scannés en données structurées. Le pipeline combine OCR, Docling et des LLM locaux ou distants, puis valide les résultats avant leur exploitation.",
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
            "Développé et comparé plusieurs modèles prédictifs sur des données d’assurance habitation afin d’estimer le risque de sinistre et d’évaluer leurs performances.",
          category: "IA / Data",
        },
        7: {
          title: "Plateforme de gestion des missions",
          description:
            "Développé une plateforme de gestion des missions avec API REST, authentification JWT, gestion des rôles et suivi des affectations.",
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
          period: "Juin 2026 — Août 2026",
          role: "Stage d'été",
          description:
            "Développé une plateforme de gestion de formations intégrant des LLM pour générer des programmes et extraire des informations structurées de CV, avec validation des sorties.",
        },
        {
          period: "Fév. 2024 — Mai 2024",
          role: "Projet de Fin d’Études de Licence",
          description:
            "Conçu et développé une application de gestion des dossiers médicaux permettant le suivi des patients externes, des prescriptions et des diagnostics.",
        },
        {
          period: "Jan. 2023 — Fév. 2023",
          role: "Stage de Perfectionnement",
          description:
            "Conçu les maquettes UI/UX avec Figma et développé une application mobile de restauration avec Flutter.",
        },
        {
          period: "Jan. 2022 — Fév. 2022",
          role: "Stage d’Initiation",
          description: "Analysé les systèmes d’information de la banque et synthétisé leur organisation.",
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
          period: "2024 — aujourd’hui",
          degree: "Cycle ingénieur en génie informatique — 3e année",
          school: "Institut International de Technologie (IIT), Sfax",
          description: "Formation en génie informatique, développement logiciel et intelligence artificielle.",
        },
        {
          period: "2021 — 2024",
          degree: "Licence appliquée en technologies de l’informatique",
          school: "Institut Supérieur des Études Technologiques (ISET), Sfax",
          description: "Développement des systèmes d’information.",
        },
        {
          period: "2021",
          degree: "Baccalauréat Sciences Techniques",
          school: "Lycée Ali Bourguiba, Mahres",
          description: "Formation secondaire scientifique et technique.",
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
        associations: "Engagements & initiatives",
      },
      certificates: [
        {
          title: "AI Fundamentals: Foundations for Understanding AI",
          issuer: "IBM",
          short: "IBM",
          image: asset("images/certificates/ibm-ai-fundamentals.png"),
        },
        {
          title: "Scrum Fundamentals Certified (SFC)",
          issuer: "SCRUMstudy",
          short: "SFC",
          image: asset("images/certificates/scrum-fundamentals-certified.png"),
          document: asset("certificates/scrum-fundamentals-certified-nour-karray.pdf"),
        },
        {
          title: "CCNA: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          short: "CISCO",
            image: asset("images/certificates/ccna-presentation-reseaux.jpg"),
        },
        {
          title: "National Microsoft Technologies Camp Tunisia",
          issuer: "Microsoft Technologies Camp",
          short: "NMTC",
          image: asset("images/certificates/nmtc-certificate.jpg"),
        },
      ],
      languages: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Intermédiaire" },
      ],
      associations: [
        {
          name: "Microsoft Tech Club",
          role: "Media Manager",
          type: "Association",
          year: "2023",
          location: "ISET Sfax",
          description: "Création de contenus et communication autour des activités du club.",
        },
        {
          name: "National Microsoft Technologies Camp 2023",
          role: "Assistante Marketing",
          type: "Événement",
          year: "2023",
          description: "Participation à la communication et à la promotion de l’événement.",
        },
        {
          name: "Viavo Vibes",
          role: "Fondatrice",
          type: "Initiative personnelle",
          year: "2022",
          description:
            "Création de l’identité de marque, gestion de la communication digitale et développement de la présence sur Instagram.",
          instagram: "https://www.instagram.com/viavo_vibes/",
        },
      ],
      instagramLink: "Voir sur Instagram",
      certificateView: "Voir le certificat",
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
      title: "Nour El Houda Karray | Computer Engineering & AI",
      description: "Portfolio of Nour El Houda Karray, a computer engineering student at IIT Sfax seeking a 2027 final-year internship in software development or artificial intelligence.",
    },
    language: {
      label: "Language selector",
      fr: "FR",
      en: "EN",
    },
    navigation: [
      { label: "Home", id: "accueil" },
      { label: "About", id: "a-propos" },
      { label: "Projects", id: "projets" },
      { label: "Experience", id: "experiences" },
      { label: "Skills", id: "competences" },
      { label: "Education", id: "formation" },
      { label: "Certificates", id: "certificats" },
      { label: "Contact", id: "contact" },
    ],
    hero: {
      greeting: "Hello, I’m",
      role: "Computer Engineering Student — IIT Sfax",
      statuses: ["Software Development", "Artificial Intelligence"],
      summary:
        "As a computer engineering student at IIT Sfax, I develop my skills through hands-on projects in software development and artificial intelligence. I am seeking a 2027 final-year internship to put my knowledge into practice and continue progressing within a technical team.",
      projectsButton: "View my projects",
      cvButton: "Download my CV",
      cvDownloadName: "cv-nour-el-houda-karray.pdf",
      socialsLabel: "Social links",
      portraitAlt: "Professional portrait of Nour El Houda Karray",
      graduationAlt: "Nour El Houda Karray at her graduation ceremony",
      availability: "Available for a 2027 final-year internship",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About me",
      title: "Who am I?",
      portraitAlt: "Portrait of Nour El Houda Karray",
      paragraphs: [
        "As a computer engineering student at IIT Sfax, I am progressively building a versatile profile in software development and artificial intelligence. My projects allow me to work across different stages of an application: design, frontend and backend development, data management, AI model integration, and testing.",
        "I particularly enjoy projects that combine several technologies to address a concrete need. I am currently seeking a 2027 final-year internship to strengthen this experience within a technical team.",
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
        Langages: "Languages",
        "Développement logiciel": "Software Development",
        "Intelligence artificielle": "Artificial Intelligence",
        "Bases de données": "Databases",
        "Data & BI": "Data & BI",
        Outils: "Tools",
      },
      descriptions: {
        HTML: "Web structure",
        CSS: "Responsive design",
        JavaScript: "Interactivity",
        TypeScript: "Typed applications",
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
        PostgreSQL: "Relational database",
        MySQL: "Relational database",
        "SQL Server": "Data management",
        MongoDB: "NoSQL",
        "Machine Learning": "Predictive models",
        "Deep Learning": "Neural networks",
        "IA générative": "Generative AI",
        LLM: "Language models",
        "Data Mining": "Data exploration",
        "scikit-learn": "ML models",
        TensorFlow: "Deep Learning",
        PyTorch: "Deep Learning",
        "Python Data": "Data analysis",
        SSIS: "ETL pipelines",
        ETL: "Extract, transform and load",
        "Data Warehouse": "Data warehousing",
        SQLite: "Embedded database",
        Git: "Version control",
        GitHub: "Collaboration",
        Figma: "UI/UX design",
      },
    },
    projects: {
      eyebrow: "Projects",
      title: "My Projects",
      intro: "A selection of academic and personal projects showcasing the skills I have applied in practice.",
      filters: {
        all: "All",
        software: "Software Development",
        ai: "Artificial Intelligence",
        data: "Data & BI",
        mobile: "Mobile",
      },
      filtersLabel: "Project filters",
      close: "Close",
      realizedIn: "Completed in",
      technologies: "Technologies used",
      githubLabel: "View the GitHub repository for",
      items: {
        9: {
          title: "TrainFlow AI",
          description:
            "Professional training management platform covering companies, trainers, records, programmes, pricing, and documents. It integrates local AI features with Ollama and Qwen2.5 for CV analysis and programme generation.",
          category: "Web / AI",
        },
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
            "Intelligent extraction platform that converts PDFs and scanned documents into structured data. The pipeline combines OCR, Docling, and local or remote LLMs, then validates the results before they are used.",
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
            "Developed and compared several predictive models using home-insurance data to estimate claim risk and evaluate their performance.",
          category: "AI / Data",
        },
        7: {
          title: "Mission Management Platform",
          description:
            "Developed a mission management platform with a REST API, JWT authentication, role management, and assignment tracking.",
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
          period: "June 2026 — August 2026",
          role: "Summer Internship",
          description:
            "Developed a training management platform integrating LLMs to generate training programs and extract structured information from CVs, with validation of generated outputs.",
        },
        {
          period: "Feb. 2024 — May 2024",
          role: "Bachelor’s final-year project",
          description:
            "Designed and developed a medical record management application for tracking outpatients, prescriptions, and diagnoses.",
        },
        {
          period: "Jan. 2023 — Feb. 2023",
          role: "Advanced Internship",
          description:
            "Designed UI/UX mock-ups in Figma and developed a mobile restaurant application with Flutter.",
        },
        {
          period: "Jan. 2022 — Feb. 2022",
          role: "Introductory Internship",
          description: "Analysed the bank’s information systems and summarised their organisation.",
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
          period: "2024 — present",
          degree: "Computer Engineering Programme — Third Year",
          school: "International Institute of Technology (IIT), Sfax",
          description: "Coursework in computer engineering, software development, and artificial intelligence.",
        },
        {
          period: "2021 — 2024",
          degree: "Applied Bachelor’s Degree in Information Technology",
          school: "Higher Institute of Technological Studies (ISET), Sfax",
          description: "Information systems development.",
        },
        {
          period: "2021",
          degree: "Technical Sciences Baccalaureate",
          school: "Ali Bourguiba High School, Mahres",
          description: "Secondary education in science and technology.",
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
        associations: "Engagements & Initiatives",
      },
      certificates: [
        {
          title: "AI Fundamentals: Foundations for Understanding AI",
          issuer: "IBM",
          short: "IBM",
          image: asset("images/certificates/ibm-ai-fundamentals.png"),
        },
        {
          title: "Scrum Fundamentals Certified (SFC)",
          issuer: "SCRUMstudy",
          short: "SFC",
          image: asset("images/certificates/scrum-fundamentals-certified.png"),
          document: asset("certificates/scrum-fundamentals-certified-nour-karray.pdf"),
        },
        {
          title: "CCNA: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          short: "CISCO",
            image: asset("images/certificates/ccna-presentation-reseaux.jpg"),
        },
        {
          title: "National Microsoft Technologies Camp Tunisia",
          issuer: "Microsoft Technologies Camp",
          short: "NMTC",
          image: asset("images/certificates/nmtc-certificate.jpg"),
        },
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Intermediate" },
      ],
      associations: [
        {
          name: "Microsoft Tech Club",
          role: "Media Manager",
          type: "Association",
          year: "2023",
          location: "ISET Sfax",
          description: "Created content and communications for the club’s activities.",
        },
        {
          name: "National Microsoft Technologies Camp 2023",
          role: "Marketing Assistant",
          type: "Event",
          year: "2023",
          description: "Contributed to the communication and promotion of the event.",
        },
        {
          name: "Viavo Vibes",
          role: "Founder",
          type: "Personal initiative",
          year: "2022",
          description:
            "Created the brand identity, managed digital communications, and developed its Instagram presence.",
          instagram: "https://www.instagram.com/viavo_vibes/",
        },
      ],
      instagramLink: "View on Instagram",
      certificateView: "View certificate",
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
