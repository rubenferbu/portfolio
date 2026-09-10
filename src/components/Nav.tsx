import ThemeToggle from "@/src/components/ThemeToggle";

export default function Nav() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-background/80 backdrop-blur dark:border-neutral-800">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
                <a href="/#inicio" className="text-sm font-semibold tracking-tight">
                    RF
                </a>

                <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
                    <a href="/#proyectos" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Proyectos
                    </a>
                    <a href="/#credenciales" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Credenciales
                    </a>
                    <a href="/#contacto" className="transition-colors hover:text-neutral-500 dark:hover:text-neutral-300">
                        Contacto
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="/#contacto"
                        className="hidden rounded-lg bg-neutral-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 sm:inline-block"
                    >
                        ¿Hablamos?
                    </a>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}