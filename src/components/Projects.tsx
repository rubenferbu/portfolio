import { getFeaturedRepos } from "@/src/lib/github";
import ProjectsClient from "@/src/components/ProjectsClient";

export default async function Projects() {
    const repos = await getFeaturedRepos();

    return (
        <section id="proyectos" className="mx-auto max-w-5xl px-4 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Proyectos
            </h2>
            <ProjectsClient repos={repos} />
        </section>
    );
}