"use server";

import { put, del } from "@vercel/blob";
import { auth } from "@/src/auth";
import { getConfigValue, setConfigValue } from "@/src/lib/global-config";

export async function uploadFile(formData: FormData) {
    const session = await auth();

    if (!session) {
        throw new Error("No autorizado");
    }

    const fieldName = formData.get("fieldName") as string;
    const file = formData.get(fieldName) as File | null;
    if (!file) {
        throw new Error("No se recibió ningún archivo");
    }

    const configKey = fieldName === "photo" ? "photoUrl" : "cvUrl";

    // Si ya había un archivo antes, bórralo (Blob + referencia previa)
    const previousUrl = await getConfigValue(configKey);
    if (previousUrl) {
        const previousPathname = decodeURIComponent(previousUrl.replace("/api/files/", ""));
        try {
            await del(previousPathname);
        } catch {
            // Si ya no existía en Blob, no pasa nada — seguimos igualmente
        }
    }

    const blob = await put(file.name, file, {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: true,
    });

    const publicUrl = `/api/files/${encodeURIComponent(file.name)}`;
    await setConfigValue(configKey, publicUrl, !!previousUrl);

    return blob.url;
}