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
            className="relative flex min-h-[70vh] flex-col items-center justify-center gap-6 overflow-hidden px-4 pt-16 text-center"
        >
            {/* Glow dual: verde (seguridad) + violeta (dev), representando ambas facetas */}
            <div
                aria-hidden="true"
                className="absolute left-1/3 top-1/3 -z-10  h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-security/10 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute right-1/3 top-2/3 -z-10 h-112.5 w-112.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-dev/10 blur-3xl"
            />

            {/* Forma geométrica decorativa, animación sutil */}
            <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute right-8 top-24 -z-10 hidden h-16 w-16 rotate-12 rounded-xl border-2 border-accent-dev/30 sm:block"
            />

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-800 text-2xl font-semibold text-white dark:bg-neutral-200 dark:text-neutral-900">
                {initials}
            </div>

            <div className="max-w-2xl space-y-3">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Construyo software pensando en protegerlo.
                </h1>
                <p className="text-lg text-neutral-500 dark:text-neutral-400">
                    Del código a la ciberseguridad — aprendo construyendo.
                </p>
                <p className="pt-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {name} — {tagline}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    GitHub
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-neutral-300 px-5 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
                >
                    LinkedIn
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href={`mailto:${email}`}
                    className="rounded-lg bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                    Contacto
                </motion.a>
            </div>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
            />
        </motion.section>
    );
}