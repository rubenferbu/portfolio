import { auth, signOut } from "@/src/auth";
import UploadForm from "@/src/app/admin/UploadForm";
import Link from "next/link";
import { getConfigValue } from "@/src/lib/global-config";
import ContentForm from "@/src/app/admin/ContentForm";
import { siteConfig } from "@/src/config/site";

export default async function AdminPage() {
  const session = await auth();

  const whatIDo = (await getConfigValue("whatIDo")) ?? siteConfig.about.whatIDo;
  const goals = (await getConfigValue("goals")) ?? siteConfig.about.goals;
  const whatIDoPointsRaw = await getConfigValue("whatIDoPoints");
  const goalsPointsRaw = await getConfigValue("goalsPoints");
  const whatIDoPoints = whatIDoPointsRaw
    ? whatIDoPointsRaw.split("\n").filter(Boolean)
    : [...siteConfig.about.whatIDoPoints];
  const goalsPoints = goalsPointsRaw
    ? goalsPointsRaw.split("\n").filter(Boolean)
    : [...siteConfig.about.goalsPoints];

  return (
    <main className="mx-auto max-w-2xl px-4 py-20">
      <Link
        href="/"
        className="mb-4 inline-block text-sm text-neutral-500 underline hover:text-neutral-700 dark:hover:text-neutral-300"
      >
        ← Volver al inicio
      </Link>

      <h1 className="text-2xl font-bold">Panel de mantenimiento</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Sesión iniciada como {session?.user?.name ?? session?.user?.email ?? "rubenferbu"}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <UploadForm label="Foto de perfil" accept="image/*" fieldName="photo" />
        <UploadForm label="CV (PDF)" accept="application/pdf" fieldName="cv" />
      </div>

      <div className="mt-8">
        <ContentForm
          whatIDo={whatIDo}
          goals={goals}
          whatIDoPoints={whatIDoPoints}
          goalsPoints={goalsPoints}
        />
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