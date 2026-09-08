"use server";

import { put } from "@vercel/blob";
import { auth } from "@/src/auth";
import { headers } from "next/headers";

export async function uploadFile(formData: FormData) {
    const session = await auth();

    console.log("SESSION EN LA ACTION:", JSON.stringify(session));
    console.log("COOKIES RECIBIDAS:", (await headers()).get("cookie"));

    if (!session) {
        throw new Error("No autorizado");
    }

    const file = formData.get(formData.get("fieldName") as string) as File | null;
    if (!file) {
        throw new Error("No se recibió ningún archivo");
    }

    const blob = await put(file.name, file, {
  access: "private",
  addRandomSuffix: false,
});

    return blob.url;
}