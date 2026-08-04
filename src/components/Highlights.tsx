import { getFeaturedRepos } from "@/src/lib/github";
import { siteConfig } from "@/src/config/site";
import * as motion from "motion/react-client";
import { Star } from "lucide-react";

const HIGHLIGHT_REPOS = ["rubenferbu/CyberWatch", "rubenferbu/timetrackpro"];
const HIGHLIGHT_CREDENTIALS = ["google-cybersecurity", "sage-200"];

export default async function Highlights() {
    const allRepos = await getFeaturedRepos();
    const repos = allRepos.filter((r) =>
        HIGHLIGHT_REPOS.some((h) => h.endsWith(`/${r.name}`))
    );
    const credentials = siteConfig.credentials.filter((c) =>
        HIGHLIGHT_CREDENTIALS.includes(c.id)
    );

    return (
        <section className="mx-auto max-w-5xl px-4 py-10">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {repos.map((repo, i) => {
                    const isSecurity = repo.area === "security";
                    return (
                        <motion.a
                            key={repo.name}
                            href="#proyectos"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className={`flex flex-col gap-2 rounded-xl border-t-4 border-neutral-200 p-4 transition-shadow hover:shadow-lg dark:border-neutral-800 ${isSecurity
                                    ? "border-t-accent-security hover:shadow-accent-security/20"
                                    : "border-t-accent-dev hover:shadow-accent-dev/20"
                                }`}
                        >
                            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                                Proyecto
                            </span>
                            <h3 className="text-sm font-bold">{repo.name}</h3>
                            <p className="line-clamp-2 text-xs text-neutral-500 dark:text-neutral-400">
                                {repo.description ?? "Sin descripción disponible."}
                            </p>
                        </motion.a>
                    );
                })}

                {credentials.map((cred, i) => {
                    const isSecurity = cred.area === "security";
                    return (
                        <motion.a
                            key={cred.id}
                            href="#credenciales"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: (repos.length + i) * 0.1 }}
                            whileHover={{ y: -4 }}
                            className={`flex flex-col gap-2 rounded-xl border-t-4 border-neutral-200 p-4 transition-shadow hover:shadow-lg dark:border-neutral-800 ${isSecurity
                                    ? "border-t-accent-security hover:shadow-accent-security/20"
                                    : "border-t-accent-dev hover:shadow-accent-dev/20"
                                }`}
                        >
                            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                                Credencial
                            </span>
                            <h3 className="text-sm font-bold">{cred.title}</h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                {cred.issuer} · {cred.date}
                            </p>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
}