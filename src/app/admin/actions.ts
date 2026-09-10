"use server";

import { del, put } from "@vercel/blob";
import { auth } from "@/src/auth";
import { getConfigValue, saveConfigValue, setConfigValue } from "@/src/lib/global-config";

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
}