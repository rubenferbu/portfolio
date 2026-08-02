import * as motion from "motion/react-client";

interface StackItem {
    name: string;
    area: "dev" | "security";
}

interface AboutProps {
    whatIDo: string;
    stack: StackItem[];
    goals: string;
}

export default function About({ whatIDo, stack, goals }: AboutProps) {
    return (
        <section className="mx-auto max-w-4xl px-4 py-14">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Sobre mí
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-3 text-lg font-semibold">Qué hago</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {whatIDo}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-3 text-lg font-semibold">Stack favorito</h3>
                    <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <motion.span
                                key={tech.name}
                                whileHover={{ scale: 1.08 }}
                                className={
                                    tech.area === "security"
                                        ? "rounded-full bg-accent-security/10 px-3 py-1 text-xs font-medium text-accent-security"
                                        : "rounded-full bg-accent-dev/10 px-3 py-1 text-xs font-medium text-accent-dev"
                                }
                            >
                                {tech.name}
                            </motion.span>
                        ))}
                    </div>
                    <p className="mt-3 text-xs italic text-neutral-500 dark:text-neutral-500">
                        Autodidacta — siempre ampliando esta lista.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-3 text-lg font-semibold">Objetivos</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {goals}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}