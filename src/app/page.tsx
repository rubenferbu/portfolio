import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";

export default function Home() {
    return (
        <main>
            <Hero
                name="Rubén Fernández"
                initials="RF"
                tagline="Junior Full-Stack Developer"
                githubUrl="https://github.com/rubenferbu"
                linkedinUrl="https://linkedin.com/in/rubenfernandezbuzon"
                email="rubenferbu@gmail.com"
            />
            <About
                whatIDo="Soy desarrollador Full-Stack junior, formándome en The Powerd. Mi base combina desarrollo web (frontend y backend), desarrollo móvil con Kotlin y Jetpack Compose, y una formación activa en ciberseguridad. Soy autodidacta: me gusta entender el porqué de cada herramienta antes de usarla, no solo aplicarla."
                stack={["JavaScript", "TypeScript", "React", "Kotlin", "Jetpack Compose"]}
                goals="Seguir creciendo como desarrollador Full-Stack, profundizar en la intersección entre desarrollo y ciberseguridad, y participar en proyectos reales donde pueda seguir aprendiendo de otros perfiles."
            />
            <Projects />
        </main>
    );
}