"use client";

import { useActionState } from "react";
import { uploadFile } from "@/src/app/admin/actions";

interface UploadResult {
  url?: string;
  error?: string;
}

async function handleUpload(
  _prevState: UploadResult,
  formData: FormData
): Promise<UploadResult> {
  try {
    const url = await uploadFile(formData);
    return { url };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Error desconocido" };
  }
}

export default function UploadForm({
  label,
  accept,
  fieldName,
}: {
  label: string;
  accept: string;
  fieldName: string;
}) {
  const [state, formAction, isPending] = useActionState(handleUpload, {});

  return (
    <form action={formAction} className="flex flex-col gap-3 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
      <label className="text-sm font-semibold">{label}</label>
      <input type="hidden" name="fieldName" value={fieldName} />
      <input
        type="file"
        name={fieldName}
        accept={accept}
        required
        className="text-sm file:mr-3 file:rounded-lg file:border file:border-neutral-300 file:bg-transparent file:px-3 file:py-1.5 file:text-sm dark:file:border-neutral-700"
      />
      <button
        type="submit"
        disabled={isPending}
        className="w-fit rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:opacity-50 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {isPending ? "Subiendo..." : "Subir"}
      </button>

      {state.error && <p className="text-sm text-red-500">Error: {state.error}</p>}
      {state.url && (
        <p className="break-all text-sm text-accent-dev">
          Subido correctamente:{" "}
          <a href={state.url} target="_blank" rel="noopener noreferrer" className="underline">
            {state.url}
          </a>
        </p>
      )}
    </form>
  );
}