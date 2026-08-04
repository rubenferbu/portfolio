import * as motion from "motion/react-client";
import { Code2, Smartphone, ShieldCheck, Rocket, GitMerge, Users } from "lucide-react";
import StackBento, { type StackItem } from "@/src/components/StackBento";

interface AboutProps {
    whatIDo: string;
    whatIDoPoints: string[];
    stack: StackItem[];
    goals: string;
    goalsPoints: string[];
}

const whatIDoIcons = [Code2, Smartphone, ShieldCheck];
const goalsIcons = [Rocket, GitMerge, Users];

export default function About({
    whatIDoPoints,
    stack,
    goalsPoints,
}: AboutProps) {
    return (
        <section className="mx-auto max-w-4xl px-4 py-14">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Sobre mí
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-full flex-col rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-4 text-lg font-semibold">Qué hago</h3>
                    <ul className="space-y-3">
                        {whatIDoPoints.map((point, i) => {
                            const Icon = whatIDoIcons[i];
                            return (
                                <li key={point} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                    <Icon size={18} className="mt-0.5 shrink-0 text-accent-dev" />
                                    <span>{point}</span>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex h-full flex-col rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-3 text-lg font-semibold">Stack favorito</h3>
                    <StackBento stack={stack} />
                    <p className="mt-3 text-xs italic text-neutral-500 dark:text-neutral-500">
                        Autodidacta — siempre ampliando esta lista.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex h-full flex-col rounded-xl border border-neutral-200 p-6 dark:border-neutral-800"
                >
                    <h3 className="mb-4 text-lg font-semibold">Objetivos</h3>
                    <ul className="space-y-3">
                        {goalsPoints.map((point, i) => {
                            const Icon = goalsIcons[i];
                            return (
                                <li key={point} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                                    <Icon size={18} className="mt-0.5 shrink-0 text-accent-dev" />
                                    <span>{point}</span>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}