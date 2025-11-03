import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Product = ({
    product,
    index,
}: {
    product: { title: string; description: string };
    index: number;
}) => {
    const getInterestParam = (title: string) => {
        const interestMap: Record<string, string> = {
            "Desenvolvimento Personalizado": "desenvolvimento",
            "Plataformas White Label": "white-label",
            "Integração de APIs de Pagamentos": "integracao-api",
            "Assessoria Jurídica e Licenciamento": "juridico",
            "Suporte e Atendimento Técnico": "suporte",
        };
        return interestMap[title] || "outro";
    };

    const interest = getInterestParam(product.title);

    return (
        <div className="group relative px-4 py-6 rounded-2xl transition-all duration-300 hover:backdrop-blur-sm hover:opacity-100 opacity-60">
            <div className="flex justify-between items-start">
                <div className="flex gap-4 items-center">
                    <span className="tracking-wide">
                        {index.toString().padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-2xl sm:text-3xl leading-tight">
                        {product.title}
                    </h3>
                </div>

                <Link
                    href={`/contact?interest=${interest}`}
                    className="transition-all duration-300 rounded-full p-2 group-hover:bg-[#1F8FFF] group-hover:text-white hover:shadow-[#1F8FFF]/20"
                    aria-label="Conhecer produto"
                >
                    <ArrowUpRightIcon className="size-6 sm:size-7" />
                </Link>
            </div>

            <p className="mt-4 text-base leading-relaxed max-w-2xl">
                {product.description}
            </p>
        </div>
    );
};

export default Product;
