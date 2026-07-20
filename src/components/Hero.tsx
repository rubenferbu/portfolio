interface HeroProps {
    name: string;
    initials: string;
    tagline: string;
    githubUrl: string;
    linkedinUrl: string;
    email: string;
}

export default function Hero({
    name,
    initials,
    tagline,
    githubUrl,
    linkedinUrl,
    email,
}: HeroProps) {
    return (
        <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-4 text-center">
            {/* Avatar placeholder con iniciales — sustituir por <Image /> cuando haya foto */}
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-neutral-800 text-3xl font-semibold text-white dark:bg-neutral-200 dark:text-neutral-900">
                {initials}
            </div>

            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {name}
                </h1>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                    {tagline}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                    type="button"
                    disabled
                    title="Próximamente"
                    className="cursor-not-allowed rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-400 dark:border-neutral-700 dark:text-neutral-600"
                >
                    Descargar CV
                </button>


                <a href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    GitHub
                </a>


                <a href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    LinkedIn
                </a>


                <a href={`mailto:${email}`}
                    className="rounded-lg bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                    Contacto
                </a>
            </div>
        </section>
    );
}