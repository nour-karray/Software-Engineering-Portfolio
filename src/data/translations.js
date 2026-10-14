const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
const nav = (items) => items.map(([label, id]) => ({ label, id }));
const certificateItems = (viewLabel) => [
  { title: "AI Fundamentals: Foundations for Understanding AI", issuer: "IBM", short: "IBM", image: asset("images/certificates/ibm-ai-fundamentals.png"), viewLabel },
  { title: "Scrum Fundamentals Certified (SFC)", issuer: "SCRUMstudy", short: "SFC", image: asset("images/certificates/scrum-fundamentals-nour-karray.pdf"), viewLabel },
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", short: "CISCO", image: asset("images/certificates/ccna-presentation-reseaux.jpg"), viewLabel },
  { title: "National Microsoft Technologies Camp (NMTC)", issuer: "NMTC", short: "NMTC", image: asset("images/certificates/nmtc-certificate.jpg"), viewLabel },
];

const commonFr = {
  language: { label: "Sélecteur de langue", fr: "FR", en: "EN" },
  navigation: nav([["Accueil", "accueil"], ["À propos", "a-propos"], ["Compétences", "competences"], ["Projets", "projets"], ["Expériences", "experiences"], ["Formation", "formation"], ["Certificats", "certificats"], ["Contact", "contact"]]),
  theme: { dark: "Activer le thème sombre", light: "Activer le thème clair" },
  menu: { open: "Ouvrir le menu", close: "Fermer le menu", home: "Retour à l’accueil", navigation: "Navigation principale", mobile: "Navigation mobile" },
};
const commonEn = {
  language: { label: "Language selector", fr: "FR", en: "EN" },
  navigation: nav([["Home", "accueil"], ["About", "a-propos"], ["Skills", "competences"], ["Projects", "projets"], ["Experience", "experiences"], ["Education", "formation"], ["Certificates", "certificats"], ["Contact", "contact"]]),
  theme: { dark: "Enable dark theme", light: "Enable light theme" },
  menu: { open: "Open menu", close: "Close menu", home: "Back to home", navigation: "Main navigation", mobile: "Mobile navigation" },
};

export const translations = {
  fr: {
    ...commonFr,
    hero: { greeting: "Bonjour, je suis", role: "Étudiante en génie informatique", statuses: ["Développement logiciel", "Intelligence artificielle"], summary: "Étudiante en génie informatique, je développe mes compétences à travers des projets concrets en développement logiciel et en intelligence artificielle. Je recherche un stage PFE en 2027 afin de mettre mes acquis en pratique et de poursuivre ma progression au sein d’une équipe technique.", projectsButton: "Voir mes projets", cvButton: "Télécharger mon CV", cvDownloadName: "cv-nour-el-houda-karray.pdf", socialsLabel: "Réseaux sociaux", portraitAlt: "Portrait professionnel de Nour El Houda Karray", creative: "3e année Génie informatique", availability: "Stage PFE 2027", motivated: "GLID · IIT Sfax", scroll: "Découvrir" },
    about: { eyebrow: "À propos", title: "Qui suis-je ?", paragraphs: ["Étudiante en génie informatique, je consolide mes compétences par des projets en développement logiciel et en intelligence artificielle.", "Je recherche un stage PFE en 2027 pour mettre mes acquis en pratique et progresser au sein d’une équipe technique."], cta: "Discuter d’une opportunité" },
    skills: { eyebrow: "Compétences", title: "Mes compétences", intro: "Les technologies que j’ai mises en pratique dans mes projets et mes expériences.", aria: "Catégories de compétences", categoryLabels: { languages: "Langages", software: "Développement logiciel", ai: "Intelligence artificielle", databases: "Bases de données", data: "Data & BI", tools: "Outils" }, descriptions: {} },
    projects: { eyebrow: "Projets", title: "Mes projets", intro: "Une sélection de projets académiques et personnels qui présentent les compétences que j’ai mises en pratique.", filters: { all: "Tous", software: "Développement logiciel", ai: "Intelligence artificielle", data: "Data & BI", mobile: "Mobile" }, filtersLabel: "Filtres des projets", technologies: "Technologies utilisées", items: {} },
    experience: { eyebrow: "Expériences", title: "Mon parcours professionnel", intro: "Des expériences qui m’ont permis d’appliquer mes compétences dans des contextes concrets.", items: {
      ecocode: { period: "Juin 2026 — Août 2026", role: "Stage d’été", description: "Développé une plateforme de gestion de formations intégrant des LLM pour générer des programmes de formation et extraire des informations structurées de CV, avec validation des sorties." },
      clinisys: { period: "Février 2024 — Mai 2024", role: "Projet de Fin d’Études de Licence", description: "Conçu et développé un module OPD pour un ERP de santé permettant la gestion des patients externes, de leur dossier médical, des ordonnances et des diagnostics." },
      webgraphique: { period: "Janvier 2023 — Février 2023", role: "Stage de Perfectionnement", description: "Conçu les maquettes UI/UX avec Figma et développé une application mobile de restauration avec Flutter." },
      attijari: { period: "Janvier 2022 — Février 2022", role: "Stage d’Initiation", description: "Analysé les systèmes d’information de la banque et synthétisé leur organisation." },
    } },
    education: { eyebrow: "Formation", title: "Mon parcours académique", intro: "Mon parcours en informatique, du baccalauréat au cycle ingénieur.", items: [
      { period: "2024 — En cours", degree: "Cycle ingénieur en génie informatique — 3e année — Génie Logiciel et Informatique Décisionnelle (GLID)", school: "IIT Sfax", description: "Formation d’ingénieur en génie informatique." },
      { period: "2021 — 2024", degree: "Licence appliquée en technologies de l’informatique — Développement des systèmes d’information", school: "ISET Sfax", description: "Formation en développement des systèmes d’information." },
      { period: "2021", degree: "Baccalauréat Sciences Techniques", school: "Lycée Ali Bourguiba, Mahrès — Sfax", description: "Baccalauréat en sciences techniques." },
    ] },
    credentials: { eyebrow: "Certifications & plus", title: "Certifications, langues & vie associative", intro: "Mes certifications, langues et engagements associatifs.", columns: { certificates: "Certifications", languages: "Langues", associations: "Vie associative" }, certificates: certificateItems("Voir le certificat"), languages: [{ name: "Arabe", level: "Langue maternelle" }, { name: "Français", level: "Courant" }, { name: "Anglais", level: "Intermédiaire" }], associations: [{ name: "Microsoft Tech Club – ISET Sfax", role: "Media Manager", type: "Association", year: "2022 — 2023" }, { name: "National Microsoft Technologies Camp", role: "Assistante Marketing", type: "Événement", year: "2023 — 2024" }], instagramLink: "Voir sur Instagram", slogan: "Apprendre. Partager. Progresser." },
    contact: { eyebrow: "Contact", title: "Me contacter", cta: "M’écrire directement", items: { email: "Email", phone: "Téléphone", location: "Localisation", linkedin: "LinkedIn" } },
    footer: { quickLinks: "Liens rapides", copyright: "© 2026 Nour El Houda Karray" },
  },
  en: {
    ...commonEn,
    hero: { greeting: "Hello, I’m", role: "Computer Engineering Student", statuses: ["Software Development", "Artificial Intelligence"], summary: "As a computer engineering student, I build my skills through hands-on projects in software development and artificial intelligence. I am seeking a 2027 final-year internship to apply what I have learned and continue growing within a technical team.", projectsButton: "View my projects", cvButton: "Download my CV", cvDownloadName: "cv-nour-el-houda-karray.pdf", socialsLabel: "Social links", portraitAlt: "Professional portrait of Nour El Houda Karray", creative: "3rd-year Computer Engineering", availability: "Seeking a 2027 final-year internship", motivated: "GLID · IIT Sfax", scroll: "Discover" },
    about: { eyebrow: "About", title: "Who am I?", paragraphs: ["I am a computer engineering student strengthening my skills through software development and artificial intelligence projects.", "I am seeking a 2027 final-year internship to apply what I have learned and grow within a technical team."], cta: "Discuss an opportunity" },
    skills: { eyebrow: "Skills", title: "My Skills", intro: "Technologies I have applied through projects and professional experience.", aria: "Skill categories", categoryLabels: { languages: "Languages", software: "Software Development", ai: "Artificial Intelligence", databases: "Databases", data: "Data & BI", tools: "Tools" }, descriptions: {} },
    projects: { eyebrow: "Projects", title: "My Projects", intro: "A selection of academic and personal projects showcasing the skills I have applied in practice.", filters: { all: "All", software: "Software Development", ai: "Artificial Intelligence", data: "Data & BI", mobile: "Mobile" }, filtersLabel: "Project filters", technologies: "Technologies used", items: {
      trainflow: { category: "Software Development · AI", description: "A platform managing the full training lifecycle, from client request to document generation, with automatic trainer CV analysis and training program generation." },
      docia: { category: "Software Development · AI", description: "A platform that extracts and structures data from PDF documents and images using OCR, Docling and language models." },
      mission: { title: "Mission Management", category: "Software Development", description: "A mission and assignment management application with a REST API, JWT authentication, role management and workload controls." },
      "hr-analytics": { category: "Data & BI", description: "An HR data warehouse with ETL processes for integrating, transforming and analyzing data for a decision-support dashboard." },
      smartscan: { category: "Mobile · AI", description: "A Flutter application for intelligent document scanning and management using Google ML Kit OCR and Firebase." },
      "event-planner": { category: "Software Development", description: "A web application for creating, managing and tracking events with user registration." }, drawing: { category: "Software Development", description: "A JavaFX drawing application using SQLite and design patterns." },
      "e-sante": { title: "E-Health", category: "Software Development", description: "A web application for managing and delivering electronic prescriptions for pharmacists." },
      riskinsight: { title: "RiskInsight — Home Claim Risk Prediction", category: "Artificial Intelligence", description: "Development and comparison of machine learning models on home insurance data to estimate claim risk." },
    } },
    experience: { eyebrow: "Experience", title: "Professional Experience", intro: "Experiences that allowed me to apply my skills in practical contexts.", items: {
      ecocode: { period: "June 2026 — August 2026", role: "Summer Internship", description: "Developed a training management platform integrating LLMs to generate training programs and extract structured information from CVs, with output validation." },
      clinisys: { period: "February 2024 — May 2024", role: "Bachelor’s Final Project", description: "Designed and developed an OPD module for a healthcare ERP to manage outpatients, medical records, prescriptions and diagnoses." },
      webgraphique: { period: "January 2023 — February 2023", role: "Advanced Internship", description: "Designed UI/UX mockups in Figma and developed a Flutter restaurant application." },
      attijari: { period: "January 2022 — February 2022", role: "Introductory Internship", description: "Analyzed the bank’s information systems and summarized their organization." },
    } },
    education: { eyebrow: "Education", title: "Academic Background", intro: "My academic path from technical sciences to computer engineering.", items: [
      { period: "2024 — Present", degree: "Computer Engineering — 3rd year — Software Engineering and Business Intelligence (GLID)", school: "IIT Sfax", description: "Computer engineering program." },
      { period: "2021 — 2024", degree: "Applied Bachelor’s in Information Technology — Information Systems Development", school: "ISET Sfax", description: "Information systems development program." },
      { period: "2021", degree: "Technical Sciences Baccalaureate", school: "Ali Bourguiba High School, Mahrès — Sfax", description: "Technical sciences baccalaureate." },
    ] },
    credentials: { eyebrow: "Certificates & more", title: "Certifications, Languages & Community", intro: "My certifications, language skills and community involvement.", columns: { certificates: "Certifications", languages: "Languages", associations: "Community Involvement" }, certificates: certificateItems("View certificate"), languages: [{ name: "Arabic", level: "Native" }, { name: "French", level: "Fluent" }, { name: "English", level: "Intermediate" }], associations: [{ name: "Microsoft Tech Club – ISET Sfax", role: "Media Manager", type: "Association", year: "2022 — 2023" }, { name: "National Microsoft Technologies Camp", role: "Marketing Assistant", type: "Event", year: "2023 — 2024" }], instagramLink: "View on Instagram", slogan: "Learn. Share. Grow." },
    contact: { eyebrow: "Contact", title: "Get in touch", cta: "Write to me", items: { email: "Email", phone: "Phone", location: "Location", linkedin: "LinkedIn" } },
    footer: { quickLinks: "Quick links", copyright: "© 2026 Nour El Houda Karray" },
  },
};
