import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";
import Contact from "@/src/components/Contact";
import { siteConfig } from "@/src/config/site";

export default function Home() {
  return (
    <main>
      <Hero
        name={siteConfig.name}
        initials={siteConfig.initials}
        tagline={siteConfig.tagline}
        githubUrl={siteConfig.social.github}
        linkedinUrl={siteConfig.social.linkedin}
        email={siteConfig.email}
      />
      <About
        whatIDo={siteConfig.about.whatIDo}
        stack={[...siteConfig.about.stack]}
        goals={siteConfig.about.goals}
      />
      <Projects />
      <Contact />
    </main>
  );
}