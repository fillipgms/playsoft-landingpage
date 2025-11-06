import Button from "@/components/Button";
import FactCard from "@/components/FactCard";
import Header from "@/components/Header";
import HighlightSection from "@/components/HighlightSection";
import Product from "@/components/Product";
import Question from "@/components/Question";

import { cn } from "@/lib/utils";
import {
    ClockCountdownIcon,
    HeadsetIcon,
    LightningAIcon,
    LockOpenIcon,
    RowsPlusTopIcon,
    ShieldIcon,
    UsersThreeIcon,
    WalletIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
    const products = [
        {
            title: "Desenvolvimento Personalizado",
            description:
                "Criamos sistemas e aplicativos sob medida, desenvolvidos para escalar com segurança e eficiência. Cada projeto é construído com base nas necessidades reais do cliente, integrando design, performance e automação inteligente.",
        },
        {
            title: "Plataformas White Label",
            description:
                "Lançar seu negócio digital nunca foi tão rápido. Nossas plataformas prontas para iGaming, rifas e gateways de pagamento vêm com estrutura completa, suporte técnico e possibilidade de personalização visual.",
        },
        {
            title: "Integração de APIs de Pagamentos",
            description:
                "Desempenho máximo e estabilidade garantida. Trabalhamos com servidores dedicados de alta performance, otimizados para operações intensas e com suporte técnico nacional.",
        },
        {
            title: "Assessoria Jurídica e Licenciamento",
            description:
                "Regularize sua operação digital com segurança. Oferecemos assessoria completa para licenciamento de iGaming e rifas, com documentação e orientação conduzidas por especialistas do setor.",
        },
        {
            title: "Suporte e Atendimento Técnico",
            description:
                "Oferecemos suporte digital especializado para empresas de segunda a sexta, das 09h00 às 17h00",
        },
    ];

    const questions = [
        {
            question: "A Playsoft atende apenas grandes empresas?",
            answer: "Não! Nossas soluções são escaláveis e personalizáveis para negócios de todos os tamanhos. Desde startups em crescimento até operações consolidadas, ajustamos cada projeto às suas necessidades.",
        },
        {
            question:
                "É possível migrar meu sistema atual para a infraestrutura da Playsoft?",
            answer: "Sim. Nossa equipe técnica cuida de todo o processo de migração de forma segura e sem interrupções, garantindo que sua operação continue funcionando normalmente.",
        },
        {
            question: "Quanto tempo leva para implementar uma solução?",
            answer: "O prazo varia conforme o tipo e a complexidade do projeto, mas nosso processo de desenvolvimento ágil garante entregas rápidas e acompanhamento em todas as etapas.",
        },
        {
            question:
                "Posso integrar as soluções da Playsoft com sistemas que já uso?",
            answer: "Com certeza. Trabalhamos com APIs flexíveis e integrações compatíveis com os principais serviços e plataformas do mercado.",
        },
        {
            question: "O suporte é realmente 24h?",
            answer: "Sim. Oferecemos suporte especializado e ágil, com atendimento técnico em português e acompanhamento contínuo do seu ambiente.",
        },
        {
            question: "A Playsoft também oferece consultoria estratégica?",
            answer: "Oferecemos sim! Além da parte técnica, ajudamos nossos clientes a otimizar processos, reduzir custos e escalar operações de forma sustentável.",
        },
    ];

    return (
        <div className="bg-[#F6F7F9] text-[#13171B]">
            <Header />

            <main>
                <HighlightSection
                    className="min-h-screen py-20 px-4 sm:px-6 lg:px-10"
                    arialabel="hero section"
                >
                    <h1 className="text-2xl sm:text-4xl md:text-5xl text-center z-10 font-semibold px-4">
                        Leve seu negócio digital a <br />
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                            Um Novo Patamar
                        </span>
                    </h1>

                    <p className="text-center max-w-xl mx-auto px-4 z-10 text-sm sm:text-base">
                        Com nossas soluções completas em tecnologia, iGaming e
                        automação para quem busca performance, segurança e
                        escalabilidade, sua empresa se torna outra em poucos
                        clicks.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-10 px-4 w-full sm:w-auto">
                        <Link
                            href="/contact"
                            aria-label="Falar com um especialista"
                            className="w-full sm:w-auto"
                        >
                            <Button
                                type="secondary"
                                className="w-full sm:w-auto"
                            >
                                Falar com um especialista
                            </Button>
                        </Link>
                        <Link
                            href="#produtos"
                            aria-label="Ver soluções"
                            className={cn(
                                "cursor-pointer px-4 py-2 rounded w-full sm:w-auto text-center",
                                "focus:outline-none",
                                "transition-all duration-200",
                                "text-[#F6F7F9] border border-[#F6F7F9]",
                                "hover:bg-[#1E252B]",
                                "focus:ring-2 focus:ring-[#F6F7F9] focus:ring-offset-2"
                            )}
                        >
                            Ver soluções
                        </Link>
                    </div>
                </HighlightSection>

                <section
                    className="py-8 px-4 sm:px-6 lg:px-10 gap-4 sm:gap-8 flex flex-col sm:flex-row"
                    aria-label="Key metrics"
                >
                    <div className="flex flex-col gap-2 flex-1 items-center sm:items-start">
                        <WalletIcon
                            weight="duotone"
                            className="size-8 text-[#1F8FFF]"
                        />
                        <p className="font-bold text-sm sm:text-base text-center sm:text-left">
                            custos até 60% menores
                        </p>
                    </div>

                    <div
                        className="h-px sm:h-auto sm:w-0.5 bg-[#13171B]/20"
                        aria-hidden="true"
                    />

                    <div className="flex flex-col gap-2 flex-1 items-center sm:items-start">
                        <LightningAIcon
                            weight="duotone"
                            className="size-8 text-[#1F8FFF]"
                        />
                        <p className="font-bold text-sm sm:text-base text-center sm:text-left">
                            99,9% Uptime
                        </p>
                    </div>

                    <div
                        className="h-px sm:h-auto sm:w-0.5 bg-[#13171B]/20"
                        aria-hidden="true"
                    />

                    <div className="flex flex-col gap-2 flex-1 items-center sm:items-start">
                        <UsersThreeIcon
                            weight="duotone"
                            className="size-8 text-[#1F8FFF]"
                        />
                        <p className="font-bold text-sm sm:text-base text-center sm:text-left">
                            mais de 5 mil clientes
                        </p>
                    </div>
                </section>

                <section id="produtos" className="py-8 px-4 sm:px-6 lg:px-10">
                    <div className="bg-[#1F8FFF] p-4 sm:p-6 lg:p-10 rounded-xl min-h-[400px] sm:min-h-[500px] relative">
                        <div
                            className={cn(
                                "absolute inset-0",
                                "bg-size-[20px_20px]",
                                "bg-[radial-gradient(#d4d4d44D_1px,transparent_1px)]"
                            )}
                        />

                        <div className="px-4 sm:px-6 py-6 sm:py-8 lg:py-10 rounded bg-[#F6F7F9] flex flex-col gap-4 z-20">
                            <h2 className="text-2xl sm:text-3xl font-semibold">
                                O Futuro da Tecnologia Está Aqui
                            </h2>
                            <p className="text-sm sm:text-base">
                                A Playsoft Brasil entrega soluções inteligentes
                                e seguras para o novo mercado digital, com
                                performance, escalabilidade e suporte humano que
                                fazem diferença.
                            </p>
                        </div>

                        <div className="hidden sm:block size-14 bg-[#F6F7F9] absolute bottom-13 left-0" />
                        <div className="hidden sm:block size-14 bg-[#1F8FFF] absolute bottom-13 left-0 rounded-bl-xl">
                            <div
                                className={cn(
                                    "absolute inset-0",
                                    "bg-size-[20px_20px]",
                                    "bg-[radial-gradient(#d4d4d44D_1px,transparent_1px)]"
                                )}
                            />
                        </div>

                        <div className="bg-[#F6F7F9] bottom-0 left-0 pr-2 sm:pr-4 pt-2 sm:pt-4 absolute rounded-tr-xl z-20">
                            <Link
                                href="/contact"
                                aria-label="Falar com um especialista"
                            >
                                <Button className="bg-[#13171B]! text-xs sm:text-sm px-3 sm:px-4 py-2">
                                    Falar com um especialista
                                </Button>
                            </Link>
                        </div>

                        <div className="hidden lg:block size-14 bg-[#F6F7F9] absolute bottom-0 left-51" />

                        <div className="hidden lg:block size-14 bg-[#1F8FFF] absolute bottom-0 left-51 rounded-bl-xl">
                            <div
                                className={cn(
                                    "absolute inset-0",
                                    "bg-size-[20px_20px]",
                                    "bg-[radial-gradient(#d4d4d44D_1px,transparent_1px)]"
                                )}
                            />
                        </div>
                    </div>
                </section>

                <section
                    className="py-8 px-4 sm:px-6 lg:px-10 flex flex-col gap-8"
                    aria-labelledby="confianca-heading"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 sm:gap-6">
                        <h2
                            id="confianca-heading"
                            className="text-2xl sm:text-3xl font-semibold whitespace-nowrap"
                        >
                            Pode contar com a gente
                        </h2>
                        <p className="text-sm sm:text-base text-center md:text-right max-w-md">
                            Desenvolvemos e gerenciamos sistemas robustos,
                            seguros e prontos para escalar. Seja qual for seu
                            projeto digital, temos a solução ideal.
                        </p>
                    </div>

                    <div
                        className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]"
                        aria-label="Feature highlights"
                    >
                        <div className="hidden lg:block">
                            {/* Placholder of something */}
                        </div>
                        <div className="py-4 sm:py-6 px-2 sm:px-4">
                            <ul className="space-y-4 sm:space-y-6">
                                {products.map((product, i) => (
                                    <React.Fragment key={i}>
                                        <Product
                                            product={product}
                                            index={i + 1}
                                        />
                                        {i < products.length - 1 && (
                                            <div className="w-full h-px bg-[#13171B]/20" />
                                        )}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section
                    className="bg-[#13171B] text-[#F6F7F9] py-8 px-4 sm:px-6 lg:px-10 flex items-center justify-center flex-col gap-6"
                    aria-labelledby="fatos-heading"
                >
                    <h2
                        id="fatos-heading"
                        className="text-2xl sm:text-3xl font-semibold whitespace-nowrap"
                    >
                        Fatos e Dados
                    </h2>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 w-full"
                        role="list"
                    >
                        <FactCard
                            icon={
                                <ClockCountdownIcon
                                    weight="duotone"
                                    className="size-8"
                                />
                            }
                            title="Uptime de 99,9%"
                            description="Garantimos disponibilidade máxima para suas operações, sem interrupções indesejadas."
                            ClassName="xl:col-span-3"
                        />
                        <FactCard
                            icon={
                                <RowsPlusTopIcon
                                    weight="duotone"
                                    className="size-8"
                                />
                            }
                            title="Escalabilidade imediata"
                            description="Ajuste os recursos do seu servidor rapidamente conforme a demanda do seu sistema cresce, garantindo desempenho máximo mesmo nos momentos de pico."
                            ClassName="xl:col-span-3"
                        />
                        <FactCard
                            icon={
                                <ShieldIcon
                                    weight="duotone"
                                    className="size-8"
                                />
                            }
                            title="Proteção contra DDoS"
                            description="Segurança reforçada contra ataques, mantendo sua plataforma sempre online."
                            ClassName="xl:col-span-2"
                        />
                        <FactCard
                            icon={
                                <LockOpenIcon
                                    weight="duotone"
                                    className="size-8"
                                />
                            }
                            title="Criptografia e backups automáticos"
                            description="Seus dados protegidos com criptografia e cópias de segurança constantes."
                            ClassName="xl:col-span-2"
                        />
                        <FactCard
                            icon={
                                <HeadsetIcon
                                    weight="duotone"
                                    className="size-8"
                                />
                            }
                            title="Suporte técnico nacional"
                            description="Atendimento técnico nacional, em português, rápido e eficiente, sem complicações."
                            ClassName="xl:col-span-2"
                        />
                    </div>
                </section>

                <section
                    className="py-8 px-4 sm:px-6 lg:px-10 flex flex-col items-center gap-6 sm:gap-8"
                    aria-labelledby="faq-heading"
                >
                    <h2
                        id="faq-heading"
                        className="text-2xl sm:text-3xl font-semibold whitespace-nowrap"
                    >
                        Ficou alguma dúvida?
                    </h2>
                    <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-4xl">
                        {questions.map((question, i) => (
                            <React.Fragment key={i}>
                                <Question
                                    question={question.question}
                                    answer={question.answer}
                                />
                                {i < questions.length - 1 && (
                                    <div className="w-full h-px bg-[#13171B]/20" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </section>

                <div className="py-8 px-4 sm:px-6 lg:px-10">
                    <HighlightSection className="py-12 sm:py-16 rounded-md px-4 sm:px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center z-10 font-bold px-4">
                            Vamos alavancar seu projeto juntos
                        </h1>

                        <p className="text-center max-w-xl mx-auto z-10 text-sm sm:text-base px-4">
                            Entre em contato e descubra como a Playsoft pode
                            transformar sua operação
                        </p>

                        <div className="flex items-center justify-center gap-4 sm:gap-6 z-10 w-full sm:w-auto px-4">
                            <Link
                                href="/contact"
                                aria-label="Falar com um especialista"
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    type="secondary"
                                    className="w-full sm:w-auto"
                                >
                                    Falar com um especialista
                                </Button>
                            </Link>
                        </div>
                    </HighlightSection>
                </div>

                <footer className="py-8 px-4 sm:px-6 lg:px-10 flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="flex flex-col gap-1">
                            <div className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
                                <Image
                                    src="https://assets.aceternity.com/logo-dark.png"
                                    alt="logo"
                                    width={30}
                                    height={30}
                                />
                                <span className="text-xl sm:text-2xl font-bold">
                                    Playsoft
                                </span>
                            </div>

                            <div>
                                <p className="text-sm sm:text-base">
                                    contato@playsoft.com
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold text-sm sm:text-base">
                                Recursos
                            </h6>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base hover:text-[#1F8FFF] transition-colors"
                                    >
                                        Central de Ajuda
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base hover:text-[#1F8FFF] transition-colors"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold text-sm sm:text-base">
                                Legal
                            </h6>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base hover:text-[#1F8FFF] transition-colors"
                                    >
                                        Política de Privacidade
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base hover:text-[#1F8FFF] transition-colors"
                                    >
                                        Termos de Uso
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold text-sm sm:text-base">
                                Contato
                            </h6>
                            <ul className="space-y-1">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm sm:text-base hover:text-[#1F8FFF] transition-colors"
                                    >
                                        Suporte
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-[#13171B]/20">
                        <p className="text-sm sm:text-base text-center sm:text-left">
                            © 2025 Playfiver. Todos os direitos reservados
                        </p>
                        <Link
                            href="/contact"
                            aria-label="Falar com um especialista"
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full sm:w-auto">
                                Falar com um especialista
                            </Button>
                        </Link>
                    </div>
                </footer>
            </main>
        </div>
    );
}
