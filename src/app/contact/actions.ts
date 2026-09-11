"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactResult {
    success?: boolean;
    error?: string;
}

export async function sendContactMessage(
    _prevState: ContactResult,
    formData: FormData
): Promise<ContactResult> {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { error: "Todos los campos son obligatorios." };
    }

    try {
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "rubenferbu@gmail.com",
            replyTo: email,
            subject: `📩 Nuevo contacto desde el portfolio — ${name}`,
            text: `${message}\n\n— ${name} (${email})`,
        });

        // TODO: cuando tengas dominio propio verificado en Resend,
        // añadir aquí un segundo resend.emails.send() con `to: email`
        // para confirmar la recepción al propio visitante.

        return { success: true };
    } catch (error) {
        console.error("Error al enviar el email:", error);
        return { error: "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente." };
    }
}