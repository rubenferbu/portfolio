"use client";

import { useMemo, useState } from "react";
import { GitHubRepo } from "@/src/lib/github";
import ProjectCard from "@/src/components/ProjectCard";

export default function ProjectsClient({ repos }: { repos: GitHubRepo[] }) {
    const [search, setSearch] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    // Lista única de lenguajes presentes, para generar los botones de filtro
    const languages = useMemo(() => {
        const unique = new Set(
            repos.map((repo) => repo.language).filter((lang): lang is string => lang !== null)
        );
        return Array.from(unique);
    }, [repos]);

    const filteredRepos = useMemo(() => {
        return repos.filter((repo) => {
            const matchesSearch =
                repo.name.toLowerCase().includes(search.toLowerCase()) ||
                (repo.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
            const matchesLanguage = !selectedLanguage || repo.language === selectedLanguage;
            return matchesSearch && matchesLanguage;
        });
    }, [repos, search, selectedLanguage]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <input
                    type="text"
                    placeholder="Buscar proyecto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm sm:w-64 dark:border-neutral-700 dark:bg-neutral-900 focus:border-accent focus:outline-none"
                />

                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedLanguage(null)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${selectedLanguage === null
                            ? "bg-accent text-accent-foreground"
                            : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                            }`}
                    >
                        Todos
                    </button>
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => setSelectedLanguage(lang)}
                            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${selectedLanguage === lang
                                ? "bg-accent text-accent-foreground"
                                : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                }`}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            {filteredRepos.length === 0 ? (
                <p className="py-10 text-center text-sm text-neutral-500">
                    No se encontraron proyectos con esos filtros.
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredRepos.map((repo) => (
                        <ProjectCard key={repo.name} repo={repo} />
                    ))}
                </div>
            )}
        </div>
    );
}