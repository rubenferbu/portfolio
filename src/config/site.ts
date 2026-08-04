export const siteConfig = {
  url: "https://rubenfernandez.vercel.app/",
  name: "Rubén Fernández",
  initials: "RF",
  tagline: "Junior Full-Stack Developer",
  email: "rubenferbu@gmail.com",
  social: {
    github: "https://github.com/rubenferbu",
    linkedin: "https://linkedin.com/in/rubenfernandezbuzon",
  },
  about: {
    whatIDo:
      "Soy desarrollador Full-Stack junior, formándome en The Powerd. Mi base combina desarrollo web (frontend y backend), desarrollo móvil con Kotlin y Jetpack Compose, y una formación activa en ciberseguridad. Soy autodidacta: me gusta entender el porqué de cada herramienta antes de usarla, no solo aplicarla.",
    whatIDoPoints: [
      "Desarrollo web Full-Stack: frontend y backend",
      "Desarrollo móvil con Kotlin y Jetpack Compose",
      "Formación activa en ciberseguridad aplicada al código",
    ],
    stack: [
      { name: "JavaScript", area: "dev" as const, subArea: "web" as const, tier: "base" as const },
      { name: "TypeScript", area: "dev" as const, subArea: "web" as const, tier: "base" as const },
      { name: "React", area: "dev" as const, subArea: "web" as const, tier: "hero" as const },
      { name: "Kotlin", area: "dev" as const, subArea: "mobile" as const, tier: "highlight" as const },
      { name: "Jetpack Compose", area: "dev" as const, subArea: "mobile" as const, tier: "base" as const },
    ],
    goals:
      "Seguir creciendo como desarrollador Full-Stack, profundizar en la intersección entre desarrollo y ciberseguridad, y participar en proyectos reales donde pueda seguir aprendiendo de otros perfiles.",

    goalsPoints: [
      "Seguir creciendo como desarrollador Full-Stack",
      "Profundizar en la intersección entre desarrollo y ciberseguridad",
      "Sumarme a proyectos reales para aprender en equipo",
    ],
  },

  contact: {
    heading: "Disponible para nuevas oportunidades",
    description:
      "Estoy buscando mi primera oportunidad como desarrollador junior, y también abierto a colaboraciones freelance. Actualmente en Carmona (Sevilla), con disponibilidad para trabajar en remoto o desplazarme según el proyecto.",
  },
  featuredRepos: [
    { repo: "rubenferbu/pinterest-async", area: "dev" },
    { repo: "rubenferbu/Galeria-JS", area: "dev" },
    { repo: "rubenferbu/timetrackpro", area: "dev" },
    { repo: "rubenferbu/Proyecto-Backend", area: "dev" },
    { repo: "rubenferbu/Javascript-Basico", area: "dev" },
    { repo: "rubenferbu/CyberWatch", area: "security" },
  ],
  credentials: [
    {
      id: "google-cybersecurity",
      title: "Google Cybersecurity Professional Certificate (v.2)",
      issuer: "Google · Coursera",
      date: "2026",
      type: "credly" as const,
      area: "security" as const,
      credlyId: "b3173e89-5ba3-46a8-94b1-e516221ebe94",
      secondaryUrl: "https://coursera.org/share/b7d389156067bbaf89691346f6fe251e",
    },
    {
      id: "sage-200",
      title: "Certificación Técnica en Sage 200",
      issuer: "TD Consulting · Sage Partner",
      date: "2022",
      type: "image" as const,
      area: "dev" as const,
      image: "/images/certifications/sage-200.jpg",
    },
    {
      id: "web-dev-basics",
      title: "Primeros pasos en Desarrollo Web",
      issuer: "The Power",
      date: "2026",
      type: "openbadge" as const,
      area: "dev" as const,
      image: "https://api-lb.appfurther.io/v2/ims/image/13865344863897",
      verifyUrl: "https://api-lb.appfurther.io/v2/ims/13865344863897",
    },
    {
      id: "node-express-apis",
      title: "APIs con NodeJS & ExpressJS",
      issuer: "The Power",
      date: "2026",
      type: "openbadge" as const,
      area: "dev" as const,
      image: "https://api-lb.appfurther.io/v2/ims/image/73162210731032",
      verifyUrl: "https://api-lb.appfurther.io/v2/ims/73162210731032",
    },
  ],
} as const;