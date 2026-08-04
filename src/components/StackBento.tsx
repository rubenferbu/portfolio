"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { SiJavascript, SiTypescript, SiReact, SiKotlin } from "react-icons/si";
import { Smartphone } from "lucide-react";

export interface StackItem {
    name: string;
    area: "dev" | "security";
    subArea: "web" | "mobile" | "security";
    tier: "hero" | "highlight" | "base";
}

type FilterKey = "destacados" | "web" | "mobile" | "security";

const filters: { key: FilterKey; label: string }[] = [
    { key: "destacados", label: "Destacados" },
    { key: "web", label: "Dev Web" },
    { key: "mobile", label: "Móvil" },
    { key: "security", label: "Ciberseguridad" },
];

const tierRank: Record<StackItem["tier"], number> = { hero: 0, highlight: 1, base: 2 };

function TechIcon({ name, size }: { name: string; size: number }) {
    switch (name) {
        case "JavaScript":
            return <SiJavascript size={size} />;
        case "TypeScript":
            return <SiTypescript size={size} />;
        case "React":
            return <SiReact size={size} />;
        case "Kotlin":
            return <SiKotlin size={size} />;
        case "Jetpack Compose":
            return <Smartphone size={size} />;
        default:
            return null;
    }
}

function getCellClasses(area: "dev" | "security", emphasis: "big" | "small") {
    if (area === "security") {
        return emphasis === "big"
            ? "border-accent-security bg-accent-security/20 text-accent-security shadow-lg shadow-accent-security/20"
            : "border-neutral-300 bg-neutral-100 text-accent-security dark:border-neutral-700 dark:bg-neutral-800";
    }
    return emphasis === "big"
        ? "border-accent-dev bg-accent-dev/20 text-accent-dev shadow-lg shadow-accent-dev/20"
        : "border-neutral-300 bg-neutral-100 text-accent-dev dark:border-neutral-700 dark:bg-neutral-800";
}

function Cell({ tech, emphasis }: { tech: StackItem; emphasis: "big" | "small" }) {
    const isBig = emphasis === "big";
    return (
        <motion.div
            layout
            transition={{ duration: 0.4, type: "spring" }}
            className={`flex h-full w-full flex-col items-center justify-center gap-1.5 overflow-hidden rounded-lg border p-3 text-center wrap-break-word ${getCellClasses(
                tech.area,
                emphasis
            )}`}
        >
            <TechIcon name={tech.name} size={isBig ? 32 : 16} />
            <span className={isBig ? "text-base font-bold" : "text-[11px] font-medium leading-tight"}>
                {tech.name}
            </span>
        </motion.div>
    );
}

export default function StackBento({ stack }: { stack: StackItem[] }) {
    const searchParams = useSearchParams();
    const [active, setActive] = useState<FilterKey>("destacados");

    useEffect(() => {
        const param = searchParams.get("interes");
        if (param === "web" || param === "mobile" || param === "security" || param === "destacados") {
            setActive(param);
        }
    }, [searchParams]);

    const visibleTechs =
        active === "destacados" ? stack : stack.filter((t) => t.subArea === active);

    const showEmpty = active !== "destacados" && visibleTechs.length === 0;

    // La pieza con el tier más alto (hero > highlight > base) es siempre la
    // "grande" del layout, sea cual sea el filtro — así cada categoría tiene
    // su propia pieza protagonista, sin huecos ni dependencia de auto-flow.
    const sorted = [...visibleTechs].sort((a, b) => tierRank[a.tier] - tierRank[b.tier]);
    const [big, ...rest] = sorted;

    return (
        <div>
            <div className="mb-4 flex flex-wrap justify-center gap-2">
                {filters.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setActive(f.key)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${active === f.key
                                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                                : "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                            }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {showEmpty ? (
                <p className="py-6 text-center text-xs italic text-neutral-500">
                    Aún no tengo herramientas de ciberseguridad que mostrar con confianza — próximamente.
                </p>
            ) : (
                <div className="grid grid-cols-3 auto-rows-24 gap-2">
                    {big && (
                        <div className="col-span-2 row-span-2">
                            <Cell tech={big} emphasis="big" />
                        </div>
                    )}
                    {rest.map((tech) => (
                        <div key={tech.name} className="col-span-1 row-span-1">
                            <Cell tech={tech} emphasis="small" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}