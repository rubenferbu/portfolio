import { auth, signOut } from "@/src/auth";
import UploadForm from "@/src/app/admin/UploadForm";

export default async function AdminPage() {
    const session = await auth();

    return (
        <main className="mx-auto max-w-2xl px-4 py-20">
            <h1 className="text-2xl font-bold">Panel de mantenimiento</h1>
            <p className="mt-2 text-sm text-neutral-500">
                Sesión iniciada como {session?.user?.name ?? session?.user?.email ?? "rubenferbu"}
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <UploadForm label="Foto de perfil" accept="image/*" fieldName="photo" />
                <UploadForm label="CV (PDF)" accept="application/pdf" fieldName="cv" />
            </div>
            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                }}
            >
                <button
                    type="submit"
                    className="mt-6 rounded-lg border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"
                >
                    Cerrar sesión
                </button>
            </form>
        </main>
    );
}