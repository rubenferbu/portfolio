"use server";

<<<<<<< HEAD
import { put, del } from "@vercel/blob";
import { auth } from "@/src/auth";
import { getConfigValue, setConfigValue, saveConfigValue } from "@/src/lib/global-config";
=======
import { put } from "@vercel/blob";
import { auth } from "@/src/auth";
import { headers } from "next/headers";
>>>>>>> main

export async function uploadFile(formData: FormData) {
    const session = await auth();

<<<<<<< HEAD
=======
    console.log("SESSION EN LA ACTION:", JSON.stringify(session));
    console.log("COOKIES RECIBIDAS:", (await headers()).get("cookie"));

>>>>>>> main
    if (!session) {
        throw new Error("No autorizado");
    }

<<<<<<< HEAD
    const fieldName = formData.get("fieldName") as string;
    const file = formData.get(fieldName) as File | null;
=======
    const file = formData.get(formData.get("fieldName") as string) as File | null;
>>>>>>> main
    if (!file) {
        throw new Error("No se recibió ningún archivo");
    }

<<<<<<< HEAD
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

export async function updateContent(formData: FormData) {
    const session = await auth();
    if (!session) {
        throw new Error("No autorizado");
    }

    const whatIDo = formData.get("whatIDo") as string;
    const goals = formData.get("goals") as string;
    const whatIDoPoints = formData.get("whatIDoPoints") as string;
    const goalsPoints = formData.get("goalsPoints") as string;

    await saveConfigValue("whatIDo", whatIDo);
    await saveConfigValue("goals", goals);
    await saveConfigValue("whatIDoPoints", whatIDoPoints);
    await saveConfigValue("goalsPoints", goalsPoints);
=======
    const blob = await put(file.name, file, {
  access: "private",
  addRandomSuffix: false,
});

    return blob.url;
>>>>>>> main
}