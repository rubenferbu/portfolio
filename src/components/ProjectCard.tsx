import { GitHubRepo } from "../lib/github";
import * as motion from "motion/react-client";

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default function ProjectCard({ repo }: { repo: GitHubRepo }) {
    const isSecurity = repo.area === "security";

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className={`flex flex-col gap-3 rounded-xl border-t-4 p-5 transition-shadow hover:shadow-lg ${isSecurity
                    ? "border-t-accent-security border-neutral-200 dark:border-neutral-800"
                    : "border-t-accent-dev border-neutral-200 dark:border-neutral-800"
                }`}
        >
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold">{repo.name}</h3>
                <div className="flex shrink-0 items-center gap-2">
                    <span
                        className={
                            isSecurity
                                ? "rounded-full bg-accent-security/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-security"
                                : "rounded-full bg-accent-dev/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-dev"
                        }
                    >
                        {isSecurity ? "Security" : "Dev"}
                    </span>
                    {repo.language && (
                        <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                            {repo.language}
                        </span>
                    )}
                </div>
            </div>

            <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                {repo.description ?? "Sin descripción disponible."}
            </p>

            <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
                <span>Actualizado: {formatDate(repo.updated_at)}</span>
            </div>

            <div className="mt-auto flex gap-3 pt-2">

                <a  href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                    GitHub
                </a>
                {repo.homepage && (

                    < a href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium underline underline-offset-2 hover:text-neutral-600 dark:hover:text-neutral-300"
                    >
                        Demo
                    </a>
                )}
            </div>
        </motion.article>
    );
}