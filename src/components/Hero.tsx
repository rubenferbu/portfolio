import * as motion from "motion/react-client";

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
        <motion.section
            id="inicio"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 overflow-hidden px-4 text-center"
        >
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            />
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

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
                >
                    GitHub
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-neutral-700"
                >
                    LinkedIn
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={`mailto:${email}`}
                    className="rounded-lg bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
                >
                    Contacto
                </motion.a>
            </div>
        </motion.section>
    );
}