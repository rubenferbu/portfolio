"use client";

import { useState } from "react";
import * as motion from "motion/react-client";

const CONTACT_EMAIL = "rubenferbu@gmail.com";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // TODO: migrar a Resend (Server Action) más adelante — por ahora, mailto
        const subject = encodeURIComponent(`Contacto desde el portfolio — ${formData.name}`);
        const body = encodeURIComponent(
            `${formData.message}\n\n— ${formData.name} (${formData.email})`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <motion.section
            id="contacto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl px-4 py-20"
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

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-accent focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-accent focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-900 focus:border-accent focus:outline-none"
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90"
                    >
                        Enviar mensaje
                    </motion.button>
                </form>
            </div>
        </motion.section>
    );
}