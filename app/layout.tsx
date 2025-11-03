import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Playsoft - Tecnologia, iGaming e Automação",
    description:
        "Soluções completas em tecnologia, iGaming e automação para empresas que buscam performance, segurança e escalabilidade. Reduza custos em até 60%, garanta 99,9% de uptime.",
    keywords: [
        "tecnologia",
        "iGaming",
        "automação",
        "infraestrutura",
        "cloud",
        "segurança",
        "escalabilidade",
    ],
    openGraph: {
        title: "Playsoft - Leve seu negócio digital a um novo patamar",
        description:
            "Soluções completas em tecnologia, iGaming e automação para empresas que buscam performance, segurança e escalabilidade.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={`${OpenSans.variable} antialiased text-sm`}>
                {children}
            </body>
        </html>
    );
}
