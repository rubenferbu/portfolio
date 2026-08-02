import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Nav() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-background/80 backdrop-blur dark:border-neutral-800">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <Link href="#inicio" className="text-sm font-semibold tracking-tight">
                    RF
                </Link>

                <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
                    <Link href="#inicio" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Inicio
                    </Link>
                    <Link href="#proyectos" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Proyectos
                    </Link>
                    <Link href="#contacto" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Contacto
                    </Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="#contacto"
                        className="hidden rounded-lg bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:inline-block"
                    >
                        ¿Hablamos?
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}