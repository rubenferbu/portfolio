interface AboutProps {
    whatIDo: String;
    stack: string[];
    goals: string;
}
export default function About({ whatIDo, stack, goals }: AboutProps) {
    return (
        <section className="mx-auto max-w-4xl px-4 py-20">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Sobre mí
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 className="mb-3 text-lg font-semibold">Qué hago</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {whatIDo}
                    </p>
                </div>

                <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 className="mb-3 text-lg font-semibold">Stack favorito</h3>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-3 text-xs italic text-neutral-500 dark:text-neutral-500">
                        Autodidacta — siempre ampliando esta lista.
                    </p>
                </div>

                <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
                    <h3 className="mb-3 text-lg font-semibold">Objetivos</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {goals}
                    </p>
                </div>
            </div>
        </section>
    );
}