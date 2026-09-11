"use client";

import { useActionState } from "react";
import * as motion from "motion/react-client";
import { sendContactMessage } from "@/src/app/contact/actions";

interface ContactResult {
    success?: boolean;
    error?: string;
}

export default function Contact() {
    const [state, formAction, isPending] = useActionState<ContactResult, FormData>(
        sendContactMessage,
        {}
    );

    return (
        <motion.section
            id="contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl px-4 py-14"
        >
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Contacto
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="flex flex-col justify-center gap-4">
                    <h3 className="text-xl font-semibold">
                        Disponible para nuevas oportunidades
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Estoy buscando mi primera oportunidad como desarrollador junior, y
                        también abierto a colaboraciones freelance. Actualmente en
                        Carmona (Sevilla), con disponibilidad para trabajar en remoto o
                        desplazarme según el proyecto.
                    </p>
                    <p className="text-sm font-medium">¿Hablamos?</p>
                </div>

                {state.success ? (
                    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-accent-dev/30 bg-accent-dev/10 p-6 text-center">
                        <p className="font-semibold text-accent-dev">¡Mensaje enviado!</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Gracias por escribir, te responderé lo antes posible.
                        </p>
                    </div>
                ) : (
                    <form action={formAction} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-neutral-500 focus:outline-none dark:focus:border-neutral-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu email"
                            required
                            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-neutral-500 focus:outline-none dark:focus:border-neutral-400"
                        />
                        <textarea
                            name="message"
                            placeholder="Tu mensaje"
                            required
                            rows={5}
                            className="resize-none rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-neutral-500 focus:outline-none dark:focus:border-neutral-400"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isPending}
                            className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                            {isPending ? "Enviando..." : "Enviar mensaje"}
                        </motion.button>

                        {state.error && (
                            <p className="text-sm text-red-500">{state.error}</p>
                        )}
                    </form>
                )}
            </div>
        </motion.section>
    );
}