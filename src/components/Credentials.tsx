"use client";

import Script from "next/script";
import * as motion from "motion/react-client";
import { siteConfig } from "@/src/config/site";

export default function Credentials() {
    return (
        <section id="credenciales" className="mx-auto max-w-5xl px-4 py-14">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
                Credenciales
            </h2>

            <Script
                src="https://cdn.credly.com/assets/utilities/embed.js"
                strategy="lazyOnload"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {siteConfig.credentials.map((cred, index) => {
                    const isSecurity = cred.area === "security";

                    return (
                        <motion.div
                            key={cred.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className={`flex flex-col items-center gap-3 rounded-xl border-t-4 border-neutral-200 p-5 text-center transition-shadow hover:shadow-lg dark:border-neutral-800 ${isSecurity
                                    ? "border-t-accent-security hover:shadow-accent-security/20"
                                    : "border-t-accent-dev hover:shadow-accent-dev/20"
                                }`}
                        >
                            <div className="flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-neutral-50 dark:bg-neutral-900">
                                {cred.type === "credly" && (
                                    <div
                                        data-iframe-width="150"
                                        data-iframe-height="180"
                                        data-share-badge-id={cred.credlyId}
                                        data-share-badge-host="https://www.credly.com"
                                    />
                                )}
                                {(cred.type === "image" || cred.type === "openbadge") && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={cred.image}
                                        alt={cred.title}
                                        className="h-full w-full object-contain"
                                    />
                                )}
                            </div>

                            <h3 className="text-sm font-semibold">{cred.title}</h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-500">
                                {cred.issuer} · {cred.date}
                            </p>

                            <div className="mt-auto flex gap-3 pt-2">
                                {cred.type === "credly" && (

                                    <a href={cred.secondaryUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs font-medium underline underline-offset-2 ${isSecurity ? "hover:text-accent-security" : "hover:text-accent-dev"
                                            }`}
                                    >
                                        Ver en Coursera
                                    </a>
                                )}
                                {cred.type === "openbadge" && (

                                    <a href={cred.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs font-medium underline underline-offset-2 ${isSecurity ? "hover:text-accent-security" : "hover:text-accent-dev"
                                            }`}
                                    >
                                        Verificar
                                    </a>
                                )}
                                {cred.type === "image" && (

                                    <a href={cred.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-xs font-medium underline underline-offset-2 ${isSecurity ? "hover:text-accent-security" : "hover:text-accent-dev"
                                            }`}
                                    >
                                        Ver certificado
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}