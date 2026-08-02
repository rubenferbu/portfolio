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
        stack: [
            { name: "JavaScript", area: "dev" },
            { name: "TypeScript", area: "dev" },
            { name: "React", area: "dev" },
            { name: "Kotlin", area: "dev" },
            { name: "Jetpack Compose", area: "dev" },
        ],
        goals:
            "Seguir creciendo como desarrollador Full-Stack, profundizar en la intersección entre desarrollo y ciberseguridad, y participar en proyectos reales donde pueda seguir aprendiendo de otros perfiles.",
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
} as const;