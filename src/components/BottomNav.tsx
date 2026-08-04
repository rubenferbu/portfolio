"use client";

import { useEffect, useState } from "react";
import { Home, FolderGit2, Award, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import * as motion from "motion/react-client";

interface NavItem {
    href: string;
    id: string;
    label: string;
    icon: LucideIcon;
}

const items: NavItem[] = [
    { href: "#inicio", id: "inicio", label: "Inicio", icon: Home },
    { href: "#proyectos", id: "proyectos", label: "Proyectos", icon: FolderGit2 },
    { href: "#credenciales", id: "credenciales", label: "Credenciales", icon: Award },
    { href: "#contacto", id: "contacto", label: "Contacto", icon: Mail },
];

export default function BottomNav() {
    const [activeId, setActiveId] = useState("inicio");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        items.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-background/95 backdrop-blur sm:hidden dark:border-neutral-800">
            <div className="flex items-center justify-around py-2">
                {items.map(({ href, id, label, icon: Icon }) => {
                    const isActive = activeId === id;
                    return (
                        <motion.a
                            key={href}
                            href={href}
                            whileTap={{ scale: 0.9 }}
                            className={`flex flex-col items-center gap-1 px-4 py-1 text-xs transition-colors ${isActive
                                ? "font-semibold text-neutral-900 dark:text-white"
                                : "text-neutral-500 dark:text-neutral-500"
                                }`}
                        >
                            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            {label}
                            {isActive && (
                                <motion.div
                                    layoutId="bottom-nav-indicator"
                                    className="h-1 w-1 rounded-full bg-neutral-900 dark:bg-white"
                                />
                            )}
                        </motion.a>
                    );
                })}
            </div>
        </nav>
    );
}