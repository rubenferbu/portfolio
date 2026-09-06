"use client";

import { useActionState } from "react";
import { updateContent } from "@/src/app/admin/actions";

interface ContentResult {
    success?: boolean;
    error?: string;
}

async function handleUpdate(
    _prevState: ContentResult,
    formData: FormData
): Promise<ContentResult> {
    try {
        await updateContent(formData);
        return { success: true };
    } catch (error) {
        return { error: error instanceof Error ? error.message : "Error desconocido" };
    }
}

export default function ContentForm({
    whatIDo,
    goals,
    whatIDoPoints,
    goalsPoints,
}: {
    whatIDo: string;
    goals: string;
    whatIDoPoints: string[];
    goalsPoints: string[];
}) {
    const [state, formAction, isPending] = useActionState(handleUpdate, {});

    return (
        <form action={formAction} className="flex flex-col gap-4 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <div>
                <label className="text-sm font-semibold">Qué hago (párrafo completo, usado también en el SEO)</label>
                <textarea
                    name="whatIDo"
                    defaultValue={whatIDo}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
            </div>

            <div>
                <label className="text-sm font-semibold">Qué hago — puntos clave (uno por línea)</label>
                <textarea
                    name="whatIDoPoints"
                    defaultValue={whatIDoPoints.join("\n")}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
            </div>

            <div>
                <label className="text-sm font-semibold">Objetivos (párrafo completo)</label>
                <textarea
                    name="goals"
                    defaultValue={goals}
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
            </div>

            <div>
                <label className="text-sm font-semibold">Objetivos — puntos clave (uno por línea)</label>
                <textarea
                    name="goalsPoints"
                    defaultValue={goalsPoints.join("\n")}
                    rows={3}
                    className="mt-1 w-full rounded-lg border border-neutral-300 p-2 text-sm dark:border-neutral-700 dark:bg-neutral-900"
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="w-fit rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
                {isPending ? "Guardando..." : "Guardar cambios"}
            </button>

            {state.error && <p className="text-sm text-red-500">Error: {state.error}</p>}
            {state.success && <p className="text-sm text-accent-dev">Guardado correctamente.</p>}
        </form>
    );
}

