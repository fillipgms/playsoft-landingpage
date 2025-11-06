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
        <div className="group relative px-2 sm:px-4 py-4 sm:py-6 rounded-2xl transition-all duration-300 hover:backdrop-blur-sm hover:opacity-100 opacity-60">
            <div className="flex justify-between items-start gap-4">
                <div className="flex gap-2 sm:gap-4 items-center flex-1 min-w-0">
                    <span className="tracking-wide text-sm sm:text-base flex-shrink-0">
                        {index.toString().padStart(2, "0")}
                    </span>
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        {product.title}
                    </h3>
                </div>

                <Link
                    href={`/contact?interest=${interest}`}
                    className="transition-all duration-300 rounded-full p-2 group-hover:bg-[#1F8FFF] group-hover:text-white hover:shadow-[#1F8FFF]/20 flex-shrink-0"
                    aria-label="Conhecer produto"
                >
                    <ArrowUpRightIcon className="size-5 sm:size-6 md:size-7" />
                </Link>
            </div>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed max-w-2xl">
                {product.description}
            </p>
        </div>
    );
};

export default Product;
