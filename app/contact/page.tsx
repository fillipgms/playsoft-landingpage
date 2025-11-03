"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import HighlightSection from "@/components/HighlightSection";
import { cn } from "@/lib/utils";
import {
    PaperPlaneTiltIcon,
    PhoneIcon,
    EnvelopeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function ContactForm() {
    const searchParams = useSearchParams();
    const interest = searchParams.get("interest") || "";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: interest,
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    useEffect(() => {
        if (interest) {
            setFormData((prev) => ({ ...prev, interest }));
        }
    }, [interest]);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // Here you would typically send to an API endpoint
            // For now, we'll simulate a successful submission
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setSubmitStatus({
                type: "success",
                message:
                    "Obrigado! Seu formulário foi enviado. Entraremos em contato em breve.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                interest: "",
                message: "",
            });
        } catch {
            setSubmitStatus({
                type: "error",
                message:
                    "Ocorreu um erro ao enviar. Tente novamente ou entre em contato diretamente.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <HighlightSection className="h-auto py-20" aria-label="contact">
                <h1 className="text-5xl text-center z-10 font-bold">
                    Vamos Conversar
                </h1>

                <p className="text-center lg:w-xl z-10">
                    Preencha o formulário abaixo e um de nossos especialistas
                    entrará em contato em breve.
                </p>
            </HighlightSection>

            <section className="py-8 px-10 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col gap-3 items-center text-center">
                        <div className="size-12 bg-[#1F8FFF]/10 rounded-full flex items-center justify-center">
                            <PhoneIcon
                                weight="duotone"
                                className="size-6 text-[#1F8FFF]"
                            />
                        </div>
                        <h3 className="font-semibold">Telefone</h3>
                        <p className="text-sm text-[#13171B]/70">
                            Segunda a sexta, 9h às 17h
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center text-center">
                        <div className="size-12 bg-[#1F8FFF]/10 rounded-full flex items-center justify-center">
                            <EnvelopeIcon
                                weight="duotone"
                                className="size-6 text-[#1F8FFF]"
                            />
                        </div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-sm text-[#13171B]/70">
                            contato@playsoft.com
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 items-center text-center">
                        <div className="size-12 bg-[#1F8FFF]/10 rounded-full flex items-center justify-center">
                            <PaperPlaneTiltIcon
                                weight="duotone"
                                className="size-6 text-[#1F8FFF]"
                            />
                        </div>
                        <h3 className="font-semibold">Resposta Rápida</h3>
                        <p className="text-sm text-[#13171B]/70">
                            Em até 24 horas
                        </p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl p-8 shadow-sm space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium"
                            >
                                Nome completo *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className={cn(
                                    "w-full px-4 py-2 rounded border",
                                    "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                    "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                    "transition-all duration-200"
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className={cn(
                                    "w-full px-4 py-2 rounded border",
                                    "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                    "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                    "transition-all duration-200"
                                )}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium"
                            >
                                Telefone *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className={cn(
                                    "w-full px-4 py-2 rounded border",
                                    "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                    "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                    "transition-all duration-200"
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="company"
                                className="block text-sm font-medium"
                            >
                                Empresa
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className={cn(
                                    "w-full px-4 py-2 rounded border",
                                    "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                    "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                    "transition-all duration-200"
                                )}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="interest"
                            className="block text-sm font-medium"
                        >
                            Interesse em *
                        </label>
                        <select
                            id="interest"
                            name="interest"
                            required
                            value={formData.interest}
                            onChange={handleChange}
                            className={cn(
                                "w-full px-4 py-2 rounded border",
                                "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                "transition-all duration-200"
                            )}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="desenvolvimento">
                                Desenvolvimento Personalizado
                            </option>
                            <option value="white-label">
                                Plataformas White Label
                            </option>
                            <option value="integracao-api">
                                Integração de APIs de Pagamentos
                            </option>
                            <option value="juridico">
                                Assessoria Jurídica e Licenciamento
                            </option>
                            <option value="suporte">
                                Suporte e Atendimento Técnico
                            </option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium"
                        >
                            Mensagem *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Conte-nos mais sobre seu projeto..."
                            className={cn(
                                "w-full px-4 py-2 rounded border resize-none",
                                "border-[#13171B]/20 focus:border-[#1F8FFF]",
                                "focus:outline-none focus:ring-2 focus:ring-[#1F8FFF]/20",
                                "transition-all duration-200"
                            )}
                        />
                    </div>

                    {submitStatus.type && (
                        <div
                            className={cn(
                                "p-4 rounded",
                                submitStatus.type === "success"
                                    ? "bg-green-50 text-green-800 border border-green-200"
                                    : "bg-red-50 text-red-800 border border-red-200"
                            )}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <div className="flex gap-4">
                        <Button
                            type="primary"
                            className="flex-1"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                    <span className="animate-spin">⟳</span>
                                    Enviando...
                                </span>
                            ) : (
                                "Enviar Mensagem"
                            )}
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default function ContactPage() {
    return (
        <div className="bg-[#F6F7F9] text-[#13171B] min-h-screen">
            <Header />

            <main>
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center h-screen">
                            <div className="animate-spin text-[#1F8FFF] text-4xl">
                                ⟳
                            </div>
                        </div>
                    }
                >
                    <ContactForm />
                </Suspense>
            </main>
        </div>
    );
}
